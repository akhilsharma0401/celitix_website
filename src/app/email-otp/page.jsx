"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
// import { Helmet } from "react-helmet-async";
// import { initScrollReveal } from '../../utils/ScrollReveal';
import { APIFirstDesign, Authenticationicon, BetterUserExperience, BoostConversations, careers, Click2callicon, CTALASTIMAGE, EffortlessCompliance, Email_Solutions, Emailicon, FlexibleLibraries, IBDicon, InstantDelivery, MissedCallicon, OBDicon, PrebuiltIntegrations, RCSicon, ReduceOperationalCosts, Scalability, SecurityPrivacy, SMSicon, twoWaySMSicon, WhatsAppicon, WhiteLabelOptions, developerfocusedplatform, whychoosecelitix } from '../../../public/assets/images';
import Link from "next/link";
import UniversalButton from '../components/UniversalButton';
import FormPopup from '../components/FormPopup';
import FaqItem from '../components/Faq';


const Email = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);
  // 2rd
  const sectioncards = [
    {
      img: BetterUserExperience,
      title: 'Ideal for Account Creation',
      text: 'Not all users share phone numbers. Email OTP is perfect for verifying identity during signups, especially in B2B, SaaS, and edtech.',
    },
    {
      img: EffortlessCompliance,
      title: 'Fallback for SMS & 2FA',
      text: 'If SMS fails due to DND, delivery issues, or international numbers, email steps in to complete the verification loop.',
    },
    {
      img: BoostConversations,
      title: 'Better for Secure Workflows',
      text: 'Email is more suited for login verification in compliance-heavy industries where mobile use is restricted.',
    },
    {
      img: ReduceOperationalCosts,
      title: 'Consistent & Cost-Effective',
      text: 'Email works globally, doesn’t rely on carrier infrastructure, and comes at a lower cost per interaction.',
    },
  ]


  // 2rd
  // 4rd
  const features = [
    {
      img: APIFirstDesign,
      title: 'API‑First Design',
      text: 'Enjoy full control over authentication, independent of tech stacks.',
    },
    {
      img: PrebuiltIntegrations,
      title: 'Prebuilt Integrations',
      text: 'Seamlessly integrate with WordPress, Webflow, and more.',
    },
    {
      img: FlexibleLibraries,
      title: 'Flexible Libraries',
      text: 'Choose from multiple client and server libraries—React, PHP, NodeJS, and more.',
    },
  ]
  // 4rd
  // 5rd
  const cards = [
    {
      img: InstantDelivery,
      title: 'Instant Email Delivery',
      text: 'Users receive OTPs in seconds, even across regions or ISPs.',
    },
    {
      img: SecurityPrivacy,
      title: 'Built-In Security & Privacy',
      text: 'Fully encrypted with robust protection at every layer.',
    },
    {
      img: WhiteLabelOptions,
      title: 'White Label + Multi-Channel',
      text: 'Customize the look, and combine with WhatsApp, SMS, Voice, or Missed Call for multi-step 2FA.',
    },
    {
      img: Scalability,
      title: 'Seamless Integrations',
      text: 'Connect your verification flow to your CRM, website, or customer journey—all from one place.',
    },
  ]
  // 5rd
  // 8rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    // {
    //   question: "What is Celitix’s App Authenticator?",
    //   answer:
    //     "It’s a secure verification tool using OTP or token-based flows via SMS, Email, WhatsApp, and Voice. ",
    // },
    // {
    //   question: "How is OTP-Free verification different?",
    //   answer:
    //     "It uses a silent token instead of visible OTPs, improving speed and reducing user effort.",
    // },
    {
      question: "Can I verify users via email?",
      answer:
        "Yes. Celitix supports Email OTP and Email + Phone 2FA setups.",
    },
    {
      question: "Is this suitable for MFA?",
      answer:
        "Absolutely. Enable multi-channel 2FA with automatic fallbacks for failed verifications.",
    },
    {
      question: "Can it scale globally?",
      answer:
        " Yes. Celitix’s App Authenticator supports international delivery across all verification channels.",
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
        <title>Email OTP Verification API | Celitix  </title>
        <meta name="description" content=" Secure your logins, signups, and user actions with fast, reliable, and customizable Email OTPs. Use Celitix to automate, integrate, and scale." />
        <link rel="preload" as="image" href={Email_Solutions} crossorigin="anonymous" />
      </Helmet> */}

      
      {/* 1st */}
      <section className="bg-[#F7EBFC] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            {/* <span className="inline-block bg-purple-700 text-white text-xl font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
            Developer-friendly API: App Authenticator
            </span> */}

            <h1 className="text-2xl md:text-4xl lg:text-6xl heading font-bold text-gray-900  leading-tight">
              Secure Your<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Users </span>One Email at a Time

            </h1>

            <p className="text-gray-600 text-base md:text-lg pera max-w-md">
              Protect account access and user data with frictionless, time-sensitive email OTPs. Perfect for signups, secure logins, and fallback authentication.


            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Book Demo"
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

          <div className="flex justify-center md:justify-end">
            <Image
              src={Email_Solutions}
              alt="Secure Your Users One Email at a Time"
              loading="eager"
            //   fetchpriority="high"
            //   crossorigin="anonymous"
              title='Secure Your Users One Email at a Time'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="py-5 md:py-10 px-4 bg-[#F7EBFC]">
        <div className="max-w-3xl mx-auto text-center mb-2 md:mb-12">
          <h2 className="text-xl md:text-4xl lg:text-5xl heading font-bold text-gray-900">
            Why Use Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> OTP</span>?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {sectioncards.map(({ img, title, text }, idx) => (
            <div
              key={idx}
              className="
              flex items-start space-x-4 p-6 bg-white rounded-xl border border-purple-200 shadow-sm
              transform transition-transform duration-200
              hover:scale-105
            "
            >
              <Image
                src={img}
                alt={title}
                className="w-8 h-8 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl md:text-2xl sub-heading text-purple-600">{title}</h3>
                <p className="mt-1 text-md md:text-lg pera text-gray-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 2th */}
      {/* 3th */}
      <div className='bg-[#F7EBFC] py-10 pt-10 md:pt-16'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold text-white heading sm:text-3xl md:text-4xl">
              Connect With Us
            </h2>
            <p className="text-sm md:text-lg text-white font-light sub-heading mt-2">
              Learn how to leverage Clitix’s Email OTP solution.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Consult Expert "
                variant="transitionbtn"
                className="px-6 py-3 rounded-full text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300"
                onClick={handleShowFormPopup}
              />

              <FormPopup
                visible={openDialog}
                onHide={handleShowFormPopup}
              />
            </div>
          </div>

        </div>
      </div>
      {/* 3th */}
      {/* 4th */}
      <section className="py-5 md:py-10 px-4 bg-[#F7EBFC]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-4 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl heading text-gray-900">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">Developers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Illustration (responsive) */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-lg aspect-[4/3]">
                <Image
                  src={developerfocusedplatform}
                  alt="Developer tools"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right: Feature list */}
            <div className="space-y-6">
              {features.map(({ img, title, text }, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <Image
                    src={img}
                    alt={title}
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl sub-heading font-medium text-gray-800">
                      {title}
                    </h3>
                    <p className="mt-1 text-md md:text-lg pera text-gray-700">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4th */}
      {/* 5th */}
      <section className="py-5 md:py-10 px-4 bg-[#F7EBFC]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-2 md:mb-12">
            <h2 className="text-xl md:text-4xl lg:text-5xl heading  text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">Celitix</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: 2×2 grid */}
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 ">
              {cards.map(({ img, title, text }, idx) => (
                <div
                  key={idx}
                  className="
                           flex items-start space-x-2 p-3 bg-white rounded-xl border-2 border-purple-200
                           transform transition-transform duration-200 hover:scale-105
                         "
                >
                  <Image src={img} alt={title} className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl sub-heading text-gray-800">{title}</h3>
                    <p className="mt-1 text-md md:text-lg pera text-gray-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Illustration */}
            <div className="mt-8 lg:mt-0 flex justify-center">
              <Image
                src={whychoosecelitix}
                alt="Celitix overview"
                className="max-w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f6effc] px-4 sm:px-6 lg:px-20 py-6 sm:py-10 md:py-16  text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold heading text-purple-900 mb-2 md:mb-12">
          Utilise Every Channel
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {/* Row 1 */}
          <Link href="/whatsapp-business-platform" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={WhatsAppicon} alt="WhatsApp" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">WhatsApp</p>
          </Link>

          <Link href="/rcs-business-messaging" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={RCSicon} alt="RCS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">RCS</p>
          </Link>

          <Link href="/sms-marketing" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={SMSicon} alt="SMS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">SMS</p>
          </Link>

          <Link href="/two-way-sms" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={twoWaySMSicon} alt="2-Way SMS" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">2-Way SMS</p>
          </Link>

          <Link href="/email-otp" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Emailicon} alt="Email" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Email</p>
          </Link>

          {/* Row 2 */}
          <Link href="/inbound-dialer" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={IBDicon} alt="Inbound Dialer" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Inbound Dialer</p>
          </Link>

          <Link href="/outbound-dialer" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={OBDicon} alt="Outbound Dialer" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Outbound Dialer</p>
          </Link>

          <Link href="/click-to-call" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Click2callicon} alt="Click to Call" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Click to Call</p>
          </Link>

          <Link href="/missed-call-services" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={MissedCallicon} alt="Missed Call" className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Missed Call</p>
          </Link>

          <Link href="/user-verification" className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow">
            <Image src={Authenticationicon} alt="Authentication " className="w-10 h-10 mb-2 object-contain" />
            <p className="text-sm font-medium text-gray-800">Authentication </p>
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
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl heading font-bold mb-4">
            Improve Your Customer Experience
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Turn broadcasts into conversation. Connect with your customers and drive conversations.
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
      <div className=" bg-[#f6effc] flex justify-center items-center py-2 md:py-20 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading  text-center text-gray-900 popf mb-8">
            Email OTP FAQs
          </h2>

          <div className="bg-white rounded-xl py-4 px-2 sm:px-4">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  <h4 className="text-base md:text-md heading font-medium text-gray-900">
                    {faq.question}
                  </h4>
                }
                // question={faq.question}
                answer={
                  <p className="text-sm md:text-md sub-heading  font-semibold text-gray-700">
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

export default Email
