"use client"
import React, { useRef, useState } from 'react'



import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { initScrollReveal } from '../../utils/ScrollReveal';
import { App_Authenticator, AUTHENTICATION01, AUTHENTICATION02, AUTHENTICATION03, AUTHENTICATION04, Authenticationicon, Click2callicon, CTALASTIMAGE, Emailicon, IBDicon, MissedCallicon, OBDicon, RCSicon, SMSicon, twoWaySMSicon, WhatsAppicon, techstartup, Two_Way_SMS, voice_solutions_client_engagement } from '../../../public/assets/images';

import Image from 'next/image';
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'


import { motion } from 'framer-motion';
import UniversalButton from '../components/UniversalButton';
import FaqItem from '../components/Faq';
import FormPopup from '../components/FormPopup';
const Authentication = () => {
//   useEffect(() => {
//     initScrollReveal();
//   }, []);

  // 2nd
  const cards = [
    {
      title: 'User Onboarding',
      description: 'Verify phone or email instantly during signup to ensure clean, secure user acquisitions.',
      imgSrc: AUTHENTICATION01,
    },
    {
      title: 'Sign In & MFA',
      description:
        'Secure logins with SMS, WhatsApp, or token-based flows. Add 2FA with multichannel options',
      imgSrc: AUTHENTICATION02,
    },
    {
      title: 'Transactions & Payments ',
      description: 'Trigger OTPs or silent verification for sensitive transactions or high-value actions.',
      imgSrc: AUTHENTICATION03,
    },
    {
      title: 'Account Updates',
      description:
        'Authenticate changes to user settings or data with instant multi-channel verification.',
      imgSrc: AUTHENTICATION04
    },
  ]
  // 2nd
  // 3nd
  const [openIndexdrop, setOpenIndexdrop] = useState(0)
  const items = [
    {
      title: 'OTP-Free = Less Hassle',
      detail:
        'No more code entry or waiting. Users tap once and verify instantly.',
    },
    {
      title: 'Better User Experience',
      detail:
        ' Streamlined flows mean fewer drop-offs during signup or login.',
    },
    {
      title: 'Developer-Friendly API',
      detail:
        'No OTP logic or custom fetch needed. Just trigger the token via our API.',
    },
    {
      title: 'Security & Reliability',
      detail:
        'Unique session-based tokens, routed via longcodes, reduce spoofing & fraud.',
    },
  ]

  // 3nd
  // 5nd
  const tabs = ['No‑OTP Verify', 'Omni‑Verify']

  const otpFreeSteps = [
    {
      title: 'Integrate OTP‑Free Verification',
      description:
        'Set up a verification service on Celitix. This includes configuring common settings to generate and check verifications automatically.',
    },
    {
      title: 'Share Unique Token via SMS',
      description:
        'Generate a unique time‑sensitive token & redirect users to their native SMS app. Avoid the hassle & delay of manual OTP input.',
    },
    {
      title: 'Unique Token Confirmation',
      description:
        'The system checks the user’s token to confirm or deny their identity. The request is approved if correct, or left pending if incorrect.',
    },
  ]

  const omniSteps = [
    {
      title: 'Choose From Multiple Channels',
      description:
        'Send verification codes seamlessly across SMS, WhatsApp, RCS, Voice Call and email—on your customers’ preferred channels.',
      color: 'green-600',
    },
    {
      title: 'Automatic Authentication',
      description:
        'When you choose to scale and go digital, safety concerns go hand‑in‑hand. Reliable, scalable verification can go a long way.',
      color: 'green-600',
    },
    {
      title: 'Enhanced Customer Experiences',
      description:
        'Secure your platform with robust verification solutions that don’t disrupt the user experience, offering OTP and OTP‑free options.',
      color: 'green-600',
    },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const isOtpFree = activeTab === tabs[0]
  const steps = isOtpFree ? otpFreeSteps : omniSteps
  const borderColor = isOtpFree ? 'border-purple-600' : 'border-green-600'
  const textColor = isOtpFree ? 'text-purple-600' : 'text-green-600'
  const imgSrc = isOtpFree ? techstartup : Two_Way_SMS
  const imgAlt = isOtpFree ? 'OTP‑free flow diagram' : 'Omni‑verify flow diagram'
  // 5nd

  // 8rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Celitix’s App Authenticator?",
      answer:
        "A lightweight, OTP-free authentication flow using SMS and long codes. It verifies identity via a token instead of one-time passwords.",
    },
    {
      question: "Does it support multi-channel or OTP fallback?",
      answer:
        "No. This system is designed specifically for SMS token-based flows, making it simple, fast, and secure.",
    },
    {
      question: "Is it secure?",
      answer:
        "Yes. Each token is session-bound and time-limited, and verification happens on Celitix’s secure servers.",
    },
    {
      question: "How is this better than OTP?",
      answer:
        "It eliminates wait times, user error, and the need to build custom OTP logic, all while offering a smoother UX.",
    },
    {
      question: "What’s required to integrate?",
      answer:
        "Just trigger the verification token from your app using our API, and handle the redirect once the SMS is sent.",
    },
  ];
  // 8rd

  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }




  return (
    <div>
      {/* <Helmet>
        <title>Token-Based SMS Authentication API | Celitix
        </title>
        <meta name="description" content="Celitix’s App Authenticator verifies users with fast, secure, OTP-free flows over SMS. No hassle or delays." />
        <link rel="preload" as="image" href={App_Authenticator} crossorigin="anonymous" />
      </Helmet> */}

      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-16">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md font-bold px-4 py-1 rounded-full uppercase tracking-wide sub-heading">
              No-OTP App Authenticator
            </span>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 heading leading-tight">
              Secure<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> OTP-Free </span> User Verification
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md pera">
              Next-gen authentication with unique, token-based SMS authentication. No OTPs. No code inputs. Better for devs, easier for users.

            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Start Now"
                variant="brutal"
                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                onClick={handleShowFormPopup}
              />

              <FormPopup
                visible={openDialog}
                onHide={handleCloseDialog}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end box-reveal-bottom">
            <Image
              src={App_Authenticator}
              alt="Secure Better with App Authenticator"
              loading="eager"
            //   fetchpriority="high"
            //   crossorigin="anonymous"
              title='Secure Better with App Authenticator'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-5 md:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 heading mb-1">
            How It Works <span className="text-purple-600"></span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg sub-heading">
            Next-gen authentication with unique, token-based SMS authentication. No OTPs. No code inputs. Better for devs, easier for users.
          </p>
        </div>
        {/* Boxed Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border-1 border-gray-300 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Image Panel */}
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden mt-2">
                <video
                //   src={Authenticator2nd}
                  controls
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="w-full h-96 rounded-2xl"
                >
                  <source src="/assets/videos/Authenticator2nd.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Static FAQ List */}
            <div className="order-1 lg:order-2 space-y-4">
              {[
                { id: 1, question: 'User Taps Verify', answer: 'User initiates verification in your app' },
                { id: 2, question: 'SMS App Opens', answer: 'A pre-filled token message is ready to send.' },
                { id: 3, question: 'User Sends SMS', answer: 'The message goes to your long code.' },
                { id: 4, question: 'Verified Instantly', answer: 'Celitix confirms the token and logs the user in.' },

              ].map(item => (
                <div
                  key={item.id}
                  className="bg-purple-50 rounded-xl shadow-inner border-l-8 border-purple-600"
                >
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white font-semibold mr-3">
                        {item.id}
                      </div>
                      <span className="text-base font-semibold text-gray-900">
                        {item.question}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3th */}
      <section className="bg-[#f7ebfc] py-2 md:py-10">
        {/* Heading */}
        <div className="text-center px-4 md:px-8 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900">
            Why Use Celitix’s App Authenticator?
          </h2>
          <p className="text-gray-700 text-base md:text-lg sub-heading">Secure, Flexible, and User Experience-friendly</p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 ">


          {/* Accordion Column */}


          <div className="space-y-2 mt-0 md:mt-10 overflow-y-auto h-[400px]">
            {items.map((item, idx) => {
              const isOpen = idx === openIndexdrop
              return (
                <div
                  key={idx}
                  className={`rounded-lg overflow-hidden transition-colors ${isOpen ? 'bg-blue-100' : 'bg-purple-50'
                    }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndexdrop(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 flex pera text-lg justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`text-base sm:text-lg sub-heading font-medium ${isOpen ? 'text-purple-700' : 'text-gray-800'
                        }`}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ExpandLessIcon className="text-purple-700" />
                    ) : (
                      <ExpandMoreIcon className="text-gray-400" />
                    )}
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out bg-white text-gray-900 px-4 sm:px-6 ${isOpen
                      ? 'opacity-100 py-4 '
                      : 'opacity-0 py-0 max-h-0'
                      }`}
                  >
                    <p className="text-md  pera leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src={voice_solutions_client_engagement}
              alt="Dashboard screenshot"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* 3th */}
      {/* 4th */}
      <div className="bg-[#f7ebfc] py-16 pt-10 md:pt-16">
        <div className="relative bg-gradient-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8 overflow-hidden">

          {/* Rocket Animation */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 md:w-32 md:h-32"
            initial={{ x: 0, y: 0, rotate: 0, scale: 0.8 }}
            animate={{
              x: [0, 100, 0],            // move right 100px and back
              y: [0, -10, 0],            // gentle bob up 10px and back
              rotate: [0, 5, 0, -5, 0],   // tilt ±5°
              scale: [0.8, 1, 0.9]        // gentle zoom in/out
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/assets/imagesMain/rocket.webp"
              alt="Rocket"
              className="w-full h-full object-contain"
                   width={600}
        height={400}
            />
          </motion.div>

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left z-10">
            <h2 className="text-4xl font-bold text-white popf sm:text-3xl md:text-4xl heading">
              Connect With Us
            </h2>
            <p className="text-sm md:text-lg text-white font-light sub-heading mt-2">
              Learn how to leverage Celitix’s App Authenticator.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end z-10">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Consult Expert"
                variant="transitionbtn"
                className="px-6 py-3 rounded-full text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300"
                onClick={handleShowFormPopup}
              />

              <FormPopup
                visible={openDialog}
                onHide={handleCloseDialog}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 4th */}
      {/* 5th */}
      {/* <section className="bg-[#f7ebfc] py-5 md:py-12 px-4 sm:px-6 lg:px-20">
    
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10">
          <h2 className="text-2xl md:text-4xl heading lg:text-5xl font-semibold text-gray-900">
            Make Your <span className="text-purple-600">Apps</span> Safer
          </h2>
          <p className="text-sm md:text-lg  font-light sub-heading mt-2 text-gray-800">
            Streamlined app integration (via APIs) to quickly add safety features to your platform
          </p>
        </div>

       
        <div className="flex justify-center mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`
              px-6 py-2 rounded-t-lg font-medium transition heading
              ${activeTab === t
                  ? 'bg-gradient-to-r from-purple-600 to-blue-400 text-white shadow'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
            `}
            >
              {t}
            </button>
          ))}
        </div>

      
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          <div className="w-full lg:w-1/2 space-y-8">
            {steps.map((s, i) => (
              <div key={i} className={`pl-4 border-l-4 ${borderColor}`}>
                <h3 className={`text-xl font-semibold heading ${textColor} mb-1`}>
                  {isOtpFree ? `Step ${i + 1}` : `${i + 1}.`} {s.title}
                </h3>
                <p className="text-gray-700 text-md md:text-lg pera">{s.description}</p>
              </div>
            ))}
          </div>

        
          <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <Image src={ImageSrc} alt={ImageAlt} className="max-w-full" />
          </div>
        </div>
      </section> */}
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f6effc] px-4 sm:px-6 lg:px-20 py-6 sm:py-10 md:py-16  text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-2 md:mb-12 heading">
          Utilise Every Channel
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {/* Row 1 */}
          <Link href="/whatsapp-business-platform" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={WhatsAppicon} alt="WhatsApp" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">WhatsApp</p>
          </Link>

          <Link href="/rcs-business-messaging" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={RCSicon} alt="RCS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">RCS</p>
          </Link>

          <Link href="/sms-marketing" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={SMSicon} alt="SMS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">SMS</p>
          </Link>

          <Link href="/two-way-sms" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={twoWaySMSicon} alt="2-Way SMS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">2-Way SMS</p>
          </Link>

          <Link href="/email-otp" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Emailicon} alt="Email" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Email</p>
          </Link>

          {/* Row 2 */}
          <Link href="/inbound-dialer" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={IBDicon} alt="Inbound Dialer" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Inbound Dialer</p>
          </Link>

          <Link href="/outbound-dialer" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={OBDicon} alt="Outbound Dialer" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Outbound Dialer</p>
          </Link>

          <Link href="/click-to-call" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Click2callicon} alt="Click to Call" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Click to Call</p>
          </Link>

          <Link href="/missed-call-services" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={MissedCallicon} alt="Missed Call" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Missed Call</p>
          </Link>

          <Link href="/user-verification" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Authenticationicon} alt="Authentication " className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">Authentication </p>
          </Link>
        </div>

        <Link href="/cpaas-solutions">
          <UniversalButton
            label="Explore Celitix →"
            variant="brutal"
            className="bg-[#9B44B6] border-[#9B44B6] text-white px-6 py-3 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
          />
        </Link>
      </section>
      {/* 6nd */}
      {/* 7nd */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A05CD7] to-[#4B0FA6] px-6 md:px-12 py-5 md:py-20">
        {/* Left Image with Icons */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src={CTALASTIMAGE}
            alt="Customer Support"
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[440px] object-contain lg:absolute top-0 md:-top-60"
            loading="eager"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 heading">
            Rethink Authentication
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light mb-6 sub-heading max-w-xl">
            Reduce friction, increase security, and simplify your devstack. All from a unified customer communication platform.
          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 "
            onClick={handleShowFormPopup}
          />

          <FormPopup
            visible={openDialog}
            onHide={handleCloseDialog}
          />
        </div>
      </div>
      {/* 7nd */}
      {/* 9th */}
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:py-20 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading mb-8">
            App Authenticator FAQs
          </h2>

          <div className="bg-white rounded-xl py-4 px-2 sm:px-4">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  <h4 className="text-base md:text-md heading font-medium text-gray-900 ">
                    {faq.question}
                  </h4>
                }
                // question={faq.question}
                answer={
                  <p className="text-sm md:text-md sub-heading  font-semibold text-gray-700 ">
                    {faq.answer}
                  </p>
                }
                isOpen={openIndex === idx}
                onClick={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 9th */}

    </div>
  )
}

export default Authentication
