"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";
import UniversalButton from "../components/UniversalButton";
import {
  homesecond1,
  homesecond10,
  homesecond11,
  homesecond2,
  homesecond3,
  homesecond4,
  homesecond5,
  homesecond6,
  homesecond7,
  homesecond8,
  homesecond9,
} from "../../../public/assets/images";
import { TurnstileComponent } from "@/utils/TurnstileComponent";
import { sendOtp, verifyOtp } from "../../utils/Otp";
import toast from "react-hot-toast";
import axios from "axios";
import { pushToDataLayer } from "../../utils/gtm.js";
import Script from "next/script";

import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// const url = import.meta.env.VITE_URL
const url = process.env.NEXT_PUBLIC_API_URL;
// const url = "https://celitix.com:3001";
const BookDemo = () => {
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
  const [isVerifying, setIsVerifying] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (!mediaQuery.matches) return;

    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

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

  // const handlesendOtp = async () => {
  //     const phone = form.phone.trim();
  //     const email = form.email.trim();

  //     if (!validatePhoneNumber(phone)) {
  //         toast.error("Enter a valid phone number.");
  //         return;
  //     }

  //     if (!validateEmail(email)) {
  //         toast.error("Enter a valid email address.");
  //         return;
  //     }

  //     // Set verified if validations pass
  //     setButtonLabel("Resend");

  //     if (resendTimer === 0) {
  //         ;
  //         const res = await sendOtp(phone);
  //         if (res?.data?.result !== "success") {
  //             toast.error("Error Sending OTP. Please try again later.");
  //         }
  //         toast.success("OTP sent successfully!");
  //         setOtp(Array(6).fill(""));
  //         setIsOtpSent(true);
  //         setResendTimer(30);
  //         startResendTimer();
  //     }
  // };

  // const handlesendOtp = async (phoneNumber) => {
  //     const phone = phoneNumber || form.phone.trim();
  //     const email = form.email.trim();

  //     if (!validatePhoneNumber(phone)) {
  //         toast.error("Enter a valid phone number.");
  //         return;
  //     }

  //     if (!validateEmail(email)) {
  //         toast.error("Enter a valid email address.");
  //         return;
  //     }

  //     if (resendTimer === 0) {
  //         const res = await sendOtp(phone);

  //         if (res?.data?.result !== "success") {
  //             toast.error("Error Sending OTP. Please try again later.");
  //             return;
  //         }

  //         toast.success("OTP sent successfully!");
  //         setOtp(Array(6).fill(""));
  //         setIsOtpSent(true);
  //         setResendTimer(30);
  //         startResendTimer();
  //     }
  // };

  const handlesendOtp = async (phoneNumber) => {
    const phone = phoneNumber || form.phone.trim();

    if (!validatePhoneNumber(phone)) {
      toast.error("Enter a valid phone number.");
      return;
    }

    if (resendTimer > 0) return; // Prevent multiple calls

    const res = await sendOtp(phone, form.firstName);

    console.log("res", res);
    if (res?.data?.result !== "success") {
      toast.error("Error Sending OTP. Please try again later.");
      return;
    }

    toast.success("OTP sent successfully!");
    setIsOtpSent(true);
    setResendTimer(30);

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

  // const handleOtpChange = (index, value) => {
  //     if (/^\d?$/.test(value)) {
  //         const updatedOtp = [...otp];
  //         updatedOtp[index] = value;
  //         setOtp(updatedOtp);

  //         if (value !== "" && index < otp.length - 1) {
  //             otpRefs.current[index + 1].focus();
  //         } else if (value === "" && index > 0) {
  //             otpRefs.current[index - 1].focus();
  //         }
  //     }
  // };

  useEffect(() => {
    if (!isOtpSent) return;
    if (!("OTPCredential" in window)) return;

    const controller = new AbortController();

    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: controller.signal,
      })
      .then((otp) => {
        console.log("otp?.code", otp);
        if (otp?.code) {
          const otpCode = otp.code.replace(/\D/g, "").slice(0, 6);
          console.log("otp?.code", otpCode);

          const otpArray = otpCode.split("");
          setOtp(otpArray);
          otpRefs.current[otpArray.length - 1]?.focus();

          handleverifyOtp(otpCode);
        }
      })
      .catch(() => {});

    return () => controller.abort();
  }, [isOtpSent]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    // If user pastes full OTP
    if (value.length === 6) {
      const otpArray = value.split("");
      setOtp(otpArray);
      handleverifyOtp(value);
      return;
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }

    if (updatedOtp.every((digit) => digit !== "") && !isVerifying) {
      setIsVerifying(true);
      handleverifyOtp(updatedOtp.join(""));
    }
  };

  // const handleverifyOtp = async () => {
  //     const phone = form.phone;
  //     const enteredOtp = otp.join("");
  //     const res = await verifyOtp({
  //         mobile: phone,
  //         otp: enteredOtp,
  //     });
  //     if (res.data.result !== "success") {
  //         toast.error("Please enter valid OTP");
  //         return;
  //     }
  //     toast.success("OTP Verified successfully");

  //     // setIsOtpVerified(true);
  //     setIsClicked(true);
  //     setIsOtpSent(false);
  //     setIsOtpVerified(true);
  //     setOtp(Array(6).fill(""));
  //     // const validOtp = '123456';

  //     // if (enteredOtp.length < 6) {
  //     //   toast.error('Please enter the complete 6-digit OTP.');
  //     //   return;
  //     // }

  //     // if (enteredOtp === validOtp) {
  //     //   toast.success('OTP Verified Successfully!');
  //     //   setIsOtpSent(false);
  //     //   setIsOtpVerified(true);
  //     //   setOtp(Array(6).fill(''));
  //     // } else {
  //     //   toast.error('Invalid OTP. Please try again.');
  //     // }
  // };

  const handleverifyOtp = async (autoOtp) => {
    const enteredOtp = autoOtp || otp.join("");

    if (enteredOtp.length !== 6) return;

    try {
      const res = await verifyOtp({
        mobile: form.phone,
        otp: enteredOtp,
      });

      if (res?.data?.result !== "success") {
        toast.error("Invalid OTP");
        return;
      }

      toast.success("OTP Verified Successfully");

      setIsOtpSent(false);
      setIsOtpVerified(true);
      setOtp(Array(6).fill(""));
    } catch (err) {
      toast.error("OTP verification failed");
    }
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
        source: "Book Demo",
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
      // pushToDataLayer({
      //     event: "form_submit",
      //     form_id: "form_1",
      //     form_name: "Form 1",
      //     page_path: window.location.pathname,
      // });
      // setSubmitLabel("Submitting...");
      toast.success("Form submitted successfully!");
      router.push("/thank-you");
    } catch (e) {
      console.error(e);
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

  // 2nd section logos array
  const logos = [
    { src: homesecond1, alt: "Hinge" },
    { src: homesecond2, alt: "SK telecom" },
    { src: homesecond3, alt: "Virgin mobile" },
    { src: homesecond4, alt: "Weight Watchers" },
    { src: homesecond5, alt: "WEF" },
    { src: homesecond6, alt: "Maya" },
    { src: homesecond7, alt: "Docplanner" },
    { src: homesecond8, alt: "Hostelworld" },
    { src: homesecond9, alt: "Socar" },
    { src: homesecond10, alt: "Yahoo" },
    { src: homesecond11, alt: "Luna" },
    { src: homesecond1, alt: "Hinge" },
    { src: homesecond2, alt: "SK telecom" },
    { src: homesecond3, alt: "Virgin mobile" },
    { src: homesecond4, alt: "Weight Watchers" },
    { src: homesecond5, alt: "WEF" },
    { src: homesecond6, alt: "Maya" },
    { src: homesecond7, alt: "Docplanner" },
    { src: homesecond8, alt: "Hostelworld" },
    { src: homesecond9, alt: "Socar" },
    { src: homesecond10, alt: "Yahoo" },
    { src: homesecond11, alt: "Luna" },
  ];
  // 2nd section logos array
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-1009530955"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-1009530955');
          `}
      </Script>

      <div className="bg-white pt-25 md:pt-35 py-5 md:py-16 px-1 lg:px-12">
        <div className="max-w-7xl 2xl:max-w-8xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="order-2 md:order-1">
            <div className="px-5">
              <p className="inline-block bg-purple-700 text-white text-md sub-heading px-4 py-1 rounded-full uppercase tracking-wide font-bold mb-3">
                Book A Free Demo
              </p>
              <h1 className="text-2xl 2xl:text-[42px] md:text-4xl font-bold text-gray-900 mb-6 leading-tight heading">
                Unlock Real-Time Engagement with Next-Gen Messaging
                Solutions—Powered By Celitix.
              </h1>
              <p className="text-gray-700 text-xl sub-heading mb-5">
                A Tailored strategy for WhatsApp API , RCS, and SMS Automation.
              </p>

              <ul className="space-y-4 text-gray-900 text-md">
                <li className="flex gap-3 pera">
                  <span className="text-green-600 text-lg">✔</span>
                  Whatsapp business API,SMS ,RCS . Chatbot Automation plan
                  customized for your business goals
                </li>
                <li className="flex gap-3 pera">
                  <span className="text-green-600 text-lg">✔</span>
                  Integration roadmap and pricing transparency
                </li>
                <li className="flex gap-3 pera">
                  <span className="text-green-600 text-lg">✔</span>
                  Expert guidance on compliance, message templates, and delivery
                  success
                </li>
                <li className="flex gap-3 pera">
                  <span className="text-green-600 text-lg">✔</span>
                  Insights on compliance, delivery, and integration support.
                </li>
              </ul>
              <div className="border rounded-lg mt-8 p-6 bg-gray-50">
                <h3 className="font-semibold text-lg md:text-xl 2xl:text-2xl sub-heading mb-2">
                  Talk to our Expert
                </h3>
                <p className="text-gray-700 pera text-lg mb-4">
                  Discover how automation can simplify your customer
                  communication. Get started with SMS,IVR,Whatsapp Business API,
                  RCS and more.
                </p>
                {/* <UniversalButton
                                variant="brutal"
                                label="Book Demo "
                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] flex items-center gap-2"
                                
                                /> */}
                {/* // url="/contact-sales" */}
                {/* <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition">
              Start for free
            </button> */}
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="order-1 md:order-2">
            {/* <div className=""> */}
            <p className="inline-block md:hidden bg-purple-700 text-white text-md sub-heading px-4 py-1 rounded-full uppercase tracking-wide font-bold mb-3">
              Book A Free Demo
            </p>
            {/* </div> */}
            <div className="border rounded-xl p-4 md:p-8 shadow-md bg-white ">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                      name="fname"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                      name="lname"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className={`w-full rounded-md p-2.5 outline-none focus:ring-2 ${
                        !isTouched
                          ? "border border-gray-300 focus:ring-blue-300"
                          : isValid
                            ? "border border-green-500 focus:ring-green-300"
                            : "border border-red-500 focus:ring-red-300"
                      }`}
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      disabled={isOtpVerified}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      {/* <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        )} */}

                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                        name="phone"
                        placeholder="Phone No."
                        disabled={isOtpVerified}
                        value={form.phone}
                        onChange={(e) => {
                          const cleanedValue = e.target.value
                            .replace(/[^\d]/g, "")
                            .slice(0, 10);

                          setForm({
                            ...form,
                            phone: cleanedValue,
                          });

                          // Auto send OTP when 10 digits entered
                          if (cleanedValue.length === 10 && !isOtpSent) {
                            handlesendOtp(cleanedValue);
                          }
                        }}
                      />

                      {isOtpSent && resendTimer === 0 && (
                        <UniversalButton
                          label="Resend"
                          type="button"
                          variant="brutal"
                          disabled={!validatePhoneNumber(form.phone)}
                          onClick={() => handlesendOtp(form.phone)}
                          className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {isOtpSent && resendTimer > 0 && (
                  <div className="text-sm text-gray-600 mt-1">
                    Resend in {resendTimer} seconds
                  </div>
                )}

                <input
                  id="otp-hidden"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  className="absolute opacity-0 pointer-events-none"
                />
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
                  </div>
                )}

                {/* {isOtpSent && (
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
                            )} */}

                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
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
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    How can we help you? <span className="text-red-500"></span>
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    name="message"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <div className="">
                  <TurnstileComponent onChange={handleTurnstileChange} />
                </div>

                {/* <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
                                disabled={isFetching}
                                onClick={handleSubmit}
                            >
                                {isFetching ? "Submitting..." : "Submit"}
                            </button> */}
                <UniversalButton
                  // label={submitLabel} // Dynamically change the label based on the state
                  label={isFetching ? "Submitting..." : "Book A Free Demo"}
                  type="submit"
                  variant="brutal"
                  className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md w-full  font-medium  transition"
                  disabled={isFetching}
                  onClick={handleSubmit}
                />

                {/* <p className="text-xs text-gray-500 mt-3">
                                You can unsubscribe or update your preferences at any time. Your
                                personal data will be processed in accordance with the{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Celitix Privacy Notice
                                </a>
                                .
                            </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="Second bg-[#D8E3F5] py-2 md:py-15">
        <div className="text-center px-4 pb-5 md:pb-15">
          <h2 className="text-lg md:text-3xl font-semibold text-gray-900 popf">
            Companies build with Celitix. Leverage with Celitix’s scalability
            and reliability
          </h2>
        </div>
        <div className="w-full carousel-mask px-4">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={index} className="SwiperSlide">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 sm:h-20 md:h-24 w-25 md:w-50 object-contain  hover:grayscale-0 transition duration-1000 ease-in-out"
                  // loading="auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Dialog
        header="Book A Free Demo"
        visible={showDialog}
        style={{ width: "90vw", maxWidth: "700px" }}
        onHide={() => setShowDialog(false)}
        modal
        draggable={false}
        resizable={false}
        className="rounded-xl"
      >
        <div className="border rounded-xl p-4 md:p-6 shadow-md bg-white">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="fname"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                  name="lname"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full rounded-md p-2.5 outline-none focus:ring-2 ${
                    !isTouched
                      ? "border border-gray-300 focus:ring-blue-300"
                      : isValid
                        ? "border border-green-500 focus:ring-green-300"
                        : "border border-red-500 focus:ring-red-300"
                  }`}
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  disabled={isOtpVerified}
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {/* <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        )} */}

                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                    name="phone"
                    placeholder="Phone No."
                    disabled={isOtpVerified}
                    value={form.phone}
                    onChange={(e) => {
                      const cleanedValue = e.target.value
                        .replace(/[^\d]/g, "")
                        .slice(0, 10);

                      setForm({
                        ...form,
                        phone: cleanedValue,
                      });

                      // Auto send OTP when 10 digits entered
                      if (cleanedValue.length === 10 && !isOtpSent) {
                        handlesendOtp(cleanedValue);
                      }
                    }}
                  />

                  {isOtpSent && resendTimer === 0 && (
                    <UniversalButton
                      label="Resend"
                      type="button"
                      variant="brutal"
                      disabled={!validatePhoneNumber(form.phone)}
                      onClick={() => handlesendOtp(form.phone)}
                      className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                    />
                  )}
                </div>
              </div>
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
              </div>
            )}

            {/* {isOtpSent && (
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
                            )} */}

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500"></span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
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
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                How can we help you? <span className="text-red-500"></span>
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className="">
              <TurnstileComponent onChange={handleTurnstileChange} />
            </div>

            {/* <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
                                disabled={isFetching}
                                onClick={handleSubmit}
                            >
                                {isFetching ? "Submitting..." : "Submit"}
                            </button> */}
            <div className="inline-block">
              <UniversalButton
                // label={submitLabel} // Dynamically change the label based on the state
                label={isFetching ? "Submitting..." : "Book A Free Demo"}
                type="submit"
                variant="brutal"
                className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md w-full  font-medium  transition"
                disabled={isFetching}
                onClick={handleSubmit}
              />
            </div>

            {/* <p className="text-xs text-gray-500 mt-3">
                                You can unsubscribe or update your preferences at any time. Your
                                personal data will be processed in accordance with the{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    Celitix Privacy Notice
                                </a>
                                .
                            </p> */}
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default BookDemo;
