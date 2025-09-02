"use client";
import React, { useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { TurnstileComponent } from "../../utils/TurnstileComponent";
import Image from "next/image";
// import { initScrollReveal } from '../utils/ScrollReveal';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { sendOtp, verifyOtp } from "../../utils/Otp";
// import { verifyToken } from "../../utils/VerifyToken";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
// import { Helmet } from 'react-helmet-async';
import {
  App_Authenticator,
  Click_to_Call,
  Email_Solutions,
  Inbound_Dialer,
  LANDING,
  LANDING2nd,
  Missed_Call_Services,
  Outbound_Dialer,
  RCS_Business_Messaging,
  ReachApp,
  Reachclicktocall,
  Reachemail,
  Reachinboundcalling,
  ReachMissedcall,
  ReachObd,
  ReachRCS,
  ReachSMS,
  Reachwaytosms,
  Reachwhatsappicon,
  SMS_Marketing,
  Two_Way_SMS,
  WhatsApp_Business_Platform,
} from "../../../public/assets/images";
import { pushToDataLayer } from "../../utils/gtm.js";
import UniversalButton from "../components/UniversalButton";

const Landing = () => {
  // useEffect(() => {
  //     initScrollReveal();
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
    consent: false,
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

  // const url = import.meta.env.VITE_URL
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
      ;
      const res = await sendOtp(phone);
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

      if (!isOtpVerified) {
        toast.error("Please verify the otp before submitting the form.");
        return;
      }

      const { firstName, lastName, email, phone, service } = form;

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

      // const captchaVerify = await verifyToken(turnstileResponse)

      // if (!captchaVerify?.data?.status) {
      //     return toast.error("Unable to verify captcha. Please Contact Site Administrator ")
      // }

      const data = {
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        company: form.company || "N/A",
        service: service,
        message: form.message || "N/A",
        source: "L3-communication platform cpaas",
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
      pushToDataLayer({
        event: "form_submit",
        form_id: "form_1",
        form_name: "Form 1",
        page_path: window.location.pathname,
      });
      // setSubmitLabel("Submitting...");
      toast.success("Form submitted successfully!");
      router.push("/thank-you");
    } catch (e) {
      return toast.error("Unable to send form data. Please try again later");
    } finally {
      setIsFetching(false);
    }
  };

  const [turnstileResponse, setTurnstileResponse] = useState(null); // To store the Turnstile response token
  // Handle Turnstile success response
  const handleTurnstileChange = (token) => {
    setTurnstileResponse(token);
  };

  // 5rd

  const services = [
    {
      id: 1,
      name: "WhatsApp Business Platform",
      icon: Reachwhatsappicon,
      content: {
        image: WhatsApp_Business_Platform,
        desc: "Leverage the world’s #1 messaging app. With advanced features like Chatbots, Click-to-WhatsApp ads, Branded Profiles and more.",
        ButtonName: "Start Now",
        altname: "whatsapp business api",
      },
    },
    {
      id: 2,
      name: "RCS Business Messaging",
      icon: ReachRCS,
      content: {
        image: RCS_Business_Messaging,
        desc: "Rich, interactive messaging on native mobile apps. Shoot epic promotions, update and support users with action buttons, rich media and more!",
        ButtonName: "Explore",
        altname: "Rcs Message",
      },
    },
    {
      id: 3,
      name: "SMS Solutions",
      icon: ReachSMS,
      content: {
        image: SMS_Marketing,
        desc: "Perfect for urgent updates and reliable delivery. OTPs, Transactional messages, Bulk Promotions and API Integrations.",
        ButtonName: "Learn More",
        altname: "Bulk messaging services",
      },
    },
    {
      id: 4,
      name: "2 Way SMS",
      icon: Reachwaytosms,
      content: {
        image: Two_Way_SMS,
        desc: "Create engaging, interactive SMS campaigns. Take votes, run quizzes, get confirmations and generate leads!",
        ButtonName: "Get Started",
        altname: "Two way SMS",
      },
    },
    {
      id: 5,
      name: "Inbound Dialer",
      icon: Reachinboundcalling,
      content: {
        image: Inbound_Dialer,
        desc: "Never miss a call again with customisable IVR menus, smart routing and call records. Perfect for customer support helplines.",
        ButtonName: "Learn More",
        altname: "IVR sysytem",
      },
    },
    {
      id: 6,
      name: "Outbound Dialer",
      icon: ReachObd,
      content: {
        image: Outbound_Dialer,
        desc: "Start conversations with bulk voice call campaigns and IVR integrations. Pre-record audios in local languages or use AI-generated text-to-speech.",
        ButtonName: "Explore ",
        altname: "Outbound dialer",
      },
    },
    {
      id: 7,
      name: "Click to Call",
      icon: Reachclicktocall,
      content: {
        image: Click_to_Call,
        desc: "Enhance your app or site’s user experience (UX). Let customers and agents connect effortlessly over voice call with secure number masking.",
        ButtonName: "Know More ",
        altname: "Click to Call",
      },
    },
    {
      id: 8,
      name: "Missed Call Services",
      icon: ReachMissedcall,
      content: {
        image: Missed_Call_Services,
        desc: "Get leads, votes or confirmations with a dedicated missed call number. Auto trigger opt-ins, callbacks or custom actions when users call.",
        ButtonName: "Start Now",
        altname: "Missed call service provider",
      },
    },
    {
      id: 9,
      name: "App Authenticator",
      icon: ReachApp,
      content: {
        image: App_Authenticator,
        desc: "Verify users without OTPs. Frictionless security that’s user-friendly and easier for your dev team.",
        ButtonName: "Explore",
        altname: "Authenticator App",
      },
    },
    {
      id: 10,
      name: "Email OTP",
      icon: Reachemail,
      content: {
        image: Email_Solutions,
        desc: "Verify users with pre-made HTML email templates. Great for onboarding authentication flows and MFA.",
        ButtonName: "Check It Out",
        altname: "Email OTP verification",
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const activeService = services.find((s) => s.id === activeTab);
  // btn
  const handleservices = () => {
    const btnText = activeService.content.ButtonName.trim();
    const validLabels = [
      "Start Now",
      "Check It Out",
      "Learn More",
      "Explore",
      "Explore ",
      "Get Started",
      "Know More ",
    ];

    if (validLabels.includes(btnText)) {
      switch (activeService.id) {
        case 1:
          router.push("/whatsapp-business-platform");
          break;
        case 2:
          router.push("/rcs-business-messaging");
          break;
        case 3:
          router.push("/sms-marketing");
          break;
        case 4:
          router.push("/two-way-sms");
          break;
        case 5:
          router.push("/inbound-dialer");
          break;
        case 6:
          router.push("/outbound-dialer");
          break;
        case 7:
          router.push("/click-to-call");
          break;
        case 8:
          router.push("/missed-call-services");
          break;
        case 9:
          router.push("/user-verification");
          break;
        case 10:
          router.push("/email-otp");
          break;
        default:
          console.log("No route defined for this service");
      }
    }
  };
  // btn
  // 5rd

  return (
    <div className="bg-[#F6EDF9]">
      {/* <Helmet>
                <title>Contact Celitix | Get in Touch for Demos, Support & Sales</title>
                <meta name="description" content="Reach out to Celitix for product demos, pricing details, technical support, or partnership queries. Our team is here to help you connect better." />
            </Helmet> */}

      <div className="px-4 lg:px-25 py-2 md:py-10 pt-25 md:pt-30">
        <motion.div
          className="text-center mb-3 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 heading">
            All-in-One
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
              {" "}
              Communication Platform{" "}
            </span>
          </h1>
          <p className="text-black-700 text-md md:text-xl mb-5">
            Save time, boost sales & reduce costs
          </p>
        </motion.div>
      </div>
      <div className="px-4 lg:px-25 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-2 md:mb-8">
          <div className="flex items-center justify-center order-2 md:order-1  mb-4 md:mb-0 p-5">
            <Image
              src={LANDING}
              alt=""
              role="presentation"
              // className="w-140 h-115"
              height={600}
              width={600}
            />
          </div>

          <div className="bg-[#F9F4FF] order-1 md:order-2 border-gray-300 rounded-xl p-1 md:p-6 shadow-sm">
            <div className="space-y-4 bg-white border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm">
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
                className={`w-full rounded-md p-2 border focus:outline-none focus:ring-2 ${!isTouched
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
                      phone: e.target.value.replace(/[^\d]/g, "").slice(0, 13),
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
                  <option value="2-way SMS">2 Way SMS (Long/Shortcode)</option>
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
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="form-textarea w-full border border-gray-300 rounded-md p-2"
              />

              <div className="">
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
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 lg:px-25 py-2 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 mb-2 md:mb-8">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Boost Engagement. Simplify Communication.
                            </h2>
                            <p className="text-gray-600 mb-6">
                                All-in-one platform to connect, convert, and retain customers smarter and faster.
                            </p>
                            <div className="grid gap-6 sm:grid-cols-1">
                                {[
                                    'Interactive, two-way messaging.',
                                    'Personalized automations & workflows.',
                                    'Seamless omnichannel experience.',
                                    'Real-time analytics & insights.',
                                ].map((text, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <CheckCircleIcon className="text-green-500 mt-1" />
                                        <p className="text-gray-700">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <div className='flex justify-center items-center px-2 md:px-20'>
                        <Image src={LANDING2nd} alt="" className='w-96 h-96' />
                    </div>
                </div>
            </div> */}
      <div className="bg-[#F6EDF9] py-2 sm:py-8 md:py-10">
        <div className="text-center px-4 sm:px-6 md:px-8 py-4 md:py-5">
          <h2 className="text-2xl md:4xl lg:text-5xl font-semibold text-gray-900 heading">
            Expand your reach with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">{" "}
              multi-channel
            </span>{" "}
            customer engagement
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-10 my-0 md:mt-10">
          {/* Service Buttons */}
          <div className="bg-[#f7f6f6] rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg mb-2 text-lg text-left transition-all duration-200 sub-heading ${activeTab === service.id
                    ? "bg-[#ffffff] text-[#a535d1]"
                    : "hover:bg-gray-100 text-black sub-heading"
                  }`}
              >
                <Image
                  src={service.icon}
                  alt={service.name}
                  className="h-8 w-8"
                />
                <span className="font-medium">{service.name}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 md:px-10">
            <Image
              src={activeService.content.image}
              alt={activeService.content.altname}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
              priority={true}
              quality={75}
            />
            <p className="text-gray-600 text-base md:text-lg font-medium pera">
              {activeService.content.desc}
            </p>

            <UniversalButton
              label={activeService.content.ButtonName}
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
                          hover:shadow-[4px_4px_0px_#9B44B6]"
              onClick={handleservices}
            />
            {/* <button className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
                          {activeService.content.ButtonName}
                        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
