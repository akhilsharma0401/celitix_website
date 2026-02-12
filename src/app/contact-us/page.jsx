"use client";
import React, { useEffect, useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UniversalButton from "../components/UniversalButton";
import { initScrollReveal } from "../../utils/ScrollReveal";
import { useRouter } from "next/navigation";
import { TurnstileComponent } from "../../utils/TurnstileComponent";
import toast from "react-hot-toast";
import { sendOtp, verifyOtp } from "../../utils/Otp";
import { verifyToken } from "../../utils/VerifyToken";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
// import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Verify");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitLabel, setSubmitLabel] = useState("Submit");
  const [isFetching, setIsFetching] = useState(false);

  const otpRefs = useRef([]);

  const url = process.env.NEXT_PUBLIC_API_URL;

  const validatePhoneNumber = (phone) => /^[0-9]{10,13}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm((prev) => ({ ...prev, email }));
    setIsValid(validateEmail(email));
  };

  const handleEmailBlur = () => {
    setIsTouched(true);
  };

  const handlesendOtp = async () => {
    const phone = form.phone.trim();
    const email = form.email.trim();

    if (!validatePhoneNumber(phone)) {
      toast.error("Enter a valid phone number.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    // Set verified if validations pass
    setButtonLabel("Resend");

    if (resendTimer === 0) {
      const res = await sendOtp(phone, form.firstName);
      if (res?.data?.result !== "success") {
        toast.error("Error Sending OTP. Please try again later.");
      }
      toast.success("OTP sent successfully!");
      setOtp(Array(6).fill(""));
      setIsOtpSent(true);
      setResendTimer(30);
      startResendTimer();
    }
  };

  const startResendTimer = () => {
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value !== "" && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      } else if (value === "" && index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  const handleverifyOtp = async () => {
    const phone = form.phone;
    const enteredOtp = otp.join("");
    const res = await verifyOtp({
      mobile: phone,
      otp: enteredOtp,
    });
    if (res.data.result !== "success") {
      toast.error("Please enter valid OTP");
      return;
    }
    toast.success("OTP Verified successfully");
    // setIsOtpVerified(true);
    setIsClicked(true);
    setIsOtpSent(false);
    setIsOtpVerified(true);
    setOtp(Array(6).fill(""));
    // const validOtp = '123456';

    // if (enteredOtp.length < 6) {
    //   toast.error('Please enter the complete 6-digit OTP.');
    //   return;
    // }

    // if (enteredOtp === validOtp) {
    //   toast.success('OTP Verified Successfully!');
    //   setIsOtpSent(false);
    //   setIsOtpVerified(true);
    //   setOtp(Array(6).fill(''));
    // } else {
    //   toast.error('Invalid OTP. Please try again.');
    // }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { firstName, lastName, email, phone, service, consent } = form;

      if (!firstName.trim()) return toast.error("First Name is required.");
      if (!lastName.trim()) return toast.error("Last Name is required.");
      if (!email.trim() || !validateEmail(email))
        return toast.error("Enter a valid email address.");
      if (!validatePhoneNumber(phone))
        return toast.error("Enter a valid phone number.");

      const enteredOtp = otp.join("");
      if (!isOtpVerified && enteredOtp.length < 6) {
        toast.error("Please verify your phone number with OTP.");
        return;
      }

      // if (!isOtpVerified) return toast.error('Please verify your phone number with OTP.');
      if (!service.trim()) return toast.error("Please select a service.");

      if (!consent)
        return toast.error(
          "You must accept the Terms & Conditions and Privacy Policy."
        );

      const captchaVerify = await verifyToken(turnstileResponse);

      if (!captchaVerify?.data?.status) {
        return toast.error(
          "Unable to verify captcha. Please Contact Site Administrator "
        );
      }

      const data = {
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        company: form.company || "N/A",
        service: service,
        source: "Contact Us Form",
        message: form.message || "N/A",
      };

      setIsFetching(true);

      const res = await axios.post(`${url}/save`, data, {
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      if (!res.data.status) {
        toast.error("Unable to send form data. Please try again later");
        return;
      }
      const sendEmail = await axios.post(`${url}/email`, data, {
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      if (!sendEmail.data.status) {
        toast.error("Unable to send form data. Please try again later");
        return;
      }

      const sendWhatsapp = await axios.post(`${url}/whatsapp`, data, {
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      if (!sendWhatsapp?.data?.status) {
        toast.error("Unable to send form data. Please try again later");
        return;
      }

      // setIsSubmitting(true);
      setIsFetching(false);
      // setSubmitLabel("Submitting...");
      toast.success("Your enquiry has been received.");
      router.push("/thank-you");
    } catch (e) {
      return toast.error("Unable to send form data. Please try again later");
    }
      finally{
      setIsFetching(false);
    }
  };

  const [turnstileResponse, setTurnstileResponse] = useState(null); // To store the Turnstile response token
  // Handle Turnstile success response
  const handleTurnstileChange = (token) => {
    setTurnstileResponse(token);
  };

  return (
    <div className="bg-[#F6EDF9]">
      {/* <Helmet>
        <title>Contact Celitix | Get in Touch for Demos, Support & Sales</title>
        <meta name="description" content="Reach out to Celitix for product demos, pricing details, technical support, or partnership queries. Our team is here to help you connect better." />
      </Helmet> */}
      <div className="px-4 py-12 lg:px-25 pt-25 md:pt-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-2 md:mb-8">
          <div>
            <div className="relative bg-[#F9F4FF] shadow-sm rounded-xl overflow-hidden mb-2 md:mb-8">
              {/* Decorative SVG */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-200px] opacity-10"
                  width="800"
                  height="600"
                  viewBox="0 0 800 600"
                  fill="none"
                >
                  <circle cx="400" cy="300" r="300" fill="url(#grad)" />
                  <defs>
                    <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative max-w-6xl mx-auto px-6 py-5">
                {/* Header & Contact Info */}
                <motion.div
                  className="text-center mb-3 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-5xl font-semibold text-gray-900 heading mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                      Contact Us{" "}
                    </span>
                  </h1>

                  <ul className="text-sm sub-heading space-y-3">
                    <a
                      href="https://www.google.com/maps?q=Proactive+Professional+Services+Pvt+Ltd,+Biswa+Nagar,+Jaipur,+Rajasthan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="flex items-start gap-2 cursor-pointer">
                        <FaMapMarkerAlt className="mt-2" />

                        <p className="leading-relaxed text-left pera text-lg">
                          Proactive Professional Services Pvt. Ltd. <br />
                          22, 3rd Floor, Biswa Nagar, New Sanganer Road,
                          <br />
                          Jaipur, Rajasthan, India - 302019 <br />
                          <small className="text-md pera text-shadow-blue-800">
                            Monday–Saturday 10am - 7pm
                          </small>
                        </p>
                      </li>
                    </a>
                  </ul>
                  <div className="flex flex-wrap justify-start items-center sub-heading space-x-6 text-black-700">
                    <a href="support@celitix.com" className=" transition">
                      <li className="flex sub-heading  items-center gap-2 mb-1">
                        <FaEnvelope /> <span>support@celitix.com</span>
                      </li>
                    </a>
                    <span className="hidden sm:inline text-black-900">•</span>
                    <div className=" transition">
                      <li className="flex sub-heading  items-center gap-1 mb-1">
                        <FaPhoneAlt />
                        <a href="tel:+919680006460" className="sub-heading ">
                          +91 968-000-6460
                        </a>
                      </li>
                    </div>
                  </div>
                </motion.div>

                {/* Two‐column grid */}

                {/* Left: CTA & Features */}
              </div>
            </div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Boost Engagement. Simplify Communication.
                </h2>
                <p className="text-gray-600 mb-6">
                  All-in-one platform to connect, convert, and retain customers
                  smarter and faster.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    "Interactive, two-way messaging.",
                    "Personalized automations & workflows.",
                    "Seamless omnichannel experience.",
                    "Real-time analytics & insights.",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircleIcon className="text-green-500 mt-1" />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <div className="bg-[#F9F4FF] border-gray-300 rounded-xl p-1 md:p-6 shadow-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>

                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  disabled={isOtpVerified}
                  className={`w-full rounded-md p-2 border focus:outline-none focus:ring-2 ${
                    !isTouched
                      ? "border-gray-300 focus:ring-blue-300"
                      : isValid
                      ? "border-green-500 focus:ring-green-300"
                      : "border-red-500 focus:ring-red-300"
                  }`}
                />
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                    disabled={isOtpVerified}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value
                          .replace(/[^\d]/g, "")
                          .slice(0, 13),
                        isOtpVerified: false,
                      })
                    }
                    className="form-input w-full border border-gray-300 rounded-md p-2"
                  />
                  {!isClicked && (
                    <UniversalButton
                      label={buttonLabel}
                      type="button"
                      variant="brutal"
                      disable={
                        !validatePhoneNumber(form.phone) || resendTimer > 0
                      }
                      onClick={handlesendOtp}
                      className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
                    />
                  )}
                </div>

                {isOtpSent && resendTimer > 0 && (
                  <div className="text-sm text-gray-600 mt-1">
                    Resend in {resendTimer} seconds
                  </div>
                )}

                {isOtpSent && (
                  <div className="flex items-center gap-2 flex-wrap mt-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        inputMode="numeric"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-10 h-10 text-center border border-gray-300 rounded"
                      />
                    ))}
                    <UniversalButton
                      label="Submit"
                      variant="brutal"
                      type="button"
                      onClick={handleverifyOtp}
                      className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-3 py-1 rounded-md mx-1"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="form-input w-full border border-gray-300 rounded-md p-2"
                  />

                  <select
                    name="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option value="WhatsApp Business API">
                      WhatsApp Business API
                    </option>
                    <option value="RCS Business Messaging">
                      RCS Business Messaging
                    </option>
                    <option value="SMS Solution">SMS Solution</option>
                    <option value="IVR/Missed Call">
                      Virtual Receptionist (IVR)/Missed Call
                    </option>
                    <option value="User Verification">Chatbot Services</option>
                    <option value="API Integration">API Integrations</option>
                    <option value="2-way SMS">
                      2 Way SMS (Long/Shortcode)
                    </option>
                    <option value="Missed Call Services">
                      Missed Call Services
                    </option>
                    <option value="Other CPaaS Solutions">
                      Other CPaaS Solutions
                    </option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="form-textarea w-full border border-gray-300 rounded-md p-2"
                />

                <div className="flex items-start gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    checked={form.consent}
                    onChange={(e) =>
                      setForm({ ...form, consent: e.target.checked })
                    }
                  />
                  <label htmlFor="terms" className="text-sm sub-heading">
                    By clicking Submit, I accept all{" "}
                    <a href="/terms-and-conditions" className="text-blue-600">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" className="text-blue-600">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <div className="mb-2">
                  <TurnstileComponent onChange={handleTurnstileChange} />
                </div>

                <div className="flex justify-center">
                  <UniversalButton
                    // label={submitLabel} // Dynamically change the label based on the state
                    label={isFetching ? "Submitting..." : "Submit"}
                    type="submit"
                    variant="brutal"
                    className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"
                    disabled={isFetching}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
