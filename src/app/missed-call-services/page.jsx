"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { initScrollReveal } from '../../utils/ScrollReveal';
import { Authenticationicon, CampaignIntegration, Click2callicon, CRMCampaigns, CTALASTIMAGE, DontJustMissedCall, EffortlessEngagement, Emailicon, IBDicon, Instantrepliesmiss, LeadcaptureCRM, Missed_Call_Services, MissedCallicon, Multichannelfollowups, OBDicon, OmnichannelFollowups, Oneclickconnect, RCSicon, RealTimeReportingmiss, SimplifyEngagementMissedCall, SMSicon, twoWaySMSicon, WhatsAppicon, WhyChooseMissedCall } from '../../../public/assets/images';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Link from "next/link";
import FormPopup from '../components/FormPopup';
import UniversalButton from '../components/UniversalButton';
import FaqItem from '../components/Faq';


const MissedCall = () => {

  // 7rd
  const blogPosts = [
    {
      date: "September 16, 2024",
      title: "Generative AI security: How to keep your chatbot healthy and your platform protected",
      description:
        "Discover essential strategies to secure AI chatbots from evolving GenAI threats. Learn how to protect your AI investments now and keep them healthy and thriving.",
      tags: ["BLOG", "GENRATIVE AI", "CUSTOMER SECURITY", "BEST PRACTICES"],
      Image: "src/assets/images/blog-1.png",
      color: "bg-orange-50",
    },
    {
      date: "September 5, 2024",
      title: "What is conversational AI? Examples and how it works",
      description:
        "Get a grasp on what Conversational AI actually is, with examples how it improves customer engagement and streamlines business operations.",
      tags: ["BLOG", "CONVERSATIONAL EXPERIENCE", "BEST PRACTICES"],
      Image: "src/assets/images/blog-2.png",
      color: "bg-blue-50",
    },
    {
      date: "August 14, 2024",
      title: "Chatbots for HR: Transforming employee engagement and operations",
      description:
        "Learn how to keep employees satisfied and engaged with an always-on assistant to support HR departments manage daily tasks and requests.",
      tags: ["BLOG", "BEST PRACTICES"],
      Image: "src/assets/images/blog-3.png",
      color: "bg-green-50",
    },
    {
      date: "July 10, 2024",
      title: "AI in Healthcare: Improving Patient Experience",
      description:
        "From virtual assistants to smart diagnostics, learn how AI is revolutionizing healthcare delivery and improving patient satisfaction.",
      tags: ["BLOG", "HEALTHCARE", "AI"],
      Image: "src/assets/images/blog-4.png",
      color: "bg-yellow-50",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container?.firstChild?.offsetWidth || 300;
    const scrollAmount = cardWidth + 24;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  // 7rd
  // 8rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Missed Call Service?",
      answer:
        "It lets customers engage your brand by giving a missed call, which then triggers automated responses. ",
    },
    {
      question: "What can I use it for?",
      answer:
        "Lead generation, surveys, service activation, voting, balance checks, and more.",
    },
    {
      question: "Do customers get charged?",
      answer:
        "No, it’s completely free for customers, making it highly accessible for engagement.",
    },
    {
      question: "Can I trigger follow-ups automatically?",
      answer:
        "Yes. You can auto-send SMS, WhatsApp, or even initiate voice callbacks after a missed call.",
    },
    {
      question: "How is data stored and tracked?",
      answer:
        "Every call is logged with details like time, number, and campaign ID, and is viewable in your Celitix dashboard.",
    },
    {
      question: "Can it integrate with my CRM?",
      answer: "Absolutely. Celitix APIs let you sync call data into your CRM or custom apps in real time."
    }
  ];
  // 8rd


  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  // 5th
  const [openIndexdrop, setOpenIndexdrop] = useState(0)
  const items = [
    {
      title: 'Cost-Free for Customers ',
      detail:
        'Let customers interact with just one ring. No charge, no data required, works for everyone.',
    },
    {
      title: 'Automation Ready ',
      detail:
        'Pair missed calls with automatic SMS, WhatsApp, or IVR-based responses and actions.',
    },
    {
      title: 'Lead Gen Supercharged ',
      detail:
        'Gather qualified leads at scale with zero manual effort and lower costs than traditional forms.',
    },
    {
      title: 'Instant Insights ',
      detail:
        'Track responses, view logs, and optimize messaging with real-time analytics.',
    },
  ]

  // 5th

  return (
    <div>
      {/* <Helmet>
        <title> Missed Call Services for Lead Gen & Engagement | Celitix </title>
        <meta name="description" content=" Capture leads, trigger SMS or WhatsApp, and automate responses using Celitix’s Missed Call Services." />
        <link rel="preload" as="image" href={Missed_Call_Services} crossorigin="anonymous" />
      </Helmet> */}


      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              Missed Call Services

            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 popf leading-tight">
              Capture<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Leads </span>with Missed Call Services
            </h1>

            <p className="text-gray-600 text-base md:text-lg pera max-w-md">
              Enrich customer interaction with missed call services. Let users trigger actions with a call, no forms, cost, or friction.
            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Consult Expert"
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
              src={Missed_Call_Services}
              alt="Capture Leads with Missed Call Services"
              loading="eager"
            //   fetchpriority="high"
            //   crossorigin="anonymous"
              title='Capture Leads with Missed Call Services'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-5 md:py-16 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-gray-900">
            Simplify Engagement & Get Creative
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={Oneclickconnect}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  text-black mb-1 ml-4">One-Click Engagement </h3>
                <p className="text-md pera text-black pera ml-4">
                  User calls, call cuts, and actions trigger automatically. You get the numbers & users get to engage.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={Instantrepliesmiss}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading text-black mb-1 ml-4">Instant Auto-Replies</h3>
                <p className="text-md pera text-black ml-4">
                  Trigger SMS, WhatsApp, or voice calls automatically in response to each missed call.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={Multichannelfollowups}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  text-black mb-1 ml-4">Multi-Channel Follow-Ups </h3>
                <p className="text-md pera text-black ml-4">
                  Integrate with RCS, WhatsApp, or voice platforms to send rich messages and follow-ups.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center order-first md:order-none ">
            <Image
              src={SimplifyEngagementMissedCall}
              alt="Phone Mockup"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={LeadcaptureCRM}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  text-black mb-1 ml-4">Lead Capture & CRM Sync</h3>
                <p className="text-md pera text-black ml-4">
                  Log caller data in real-time into your CRM, track journeys, and segment intelligently.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={RealTimeReportingmiss}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  text-black mb-1 ml-4">Real-Time Reporting</h3>
                <p className="text-md pera text-black ml-4">
                  View missed call logs, campaign stats, and response rates directly on your dashboard.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CampaignIntegration}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  text-black mb-1 ml-4">Campaign Integration</h3>
                <p className="text-md pera text-black ml-4">
                  Use missed calls for polls, surveys, service requests, or lead gen across verticals.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-1 md:pb-5">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-gray-900 popf">
            Why Choose Celitix’s Missed Call Services?
          </h2>
          <p className='text-sm md:text-xl sub-heading text-gray-700'>Frictionless, automated, and built for scale. Perfect for big campaigns.

          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={EffortlessEngagement}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Effortless Engagement
                </h3>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  With multiple channels and engagement options, your customers can choose how they want to connect.

                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF]  p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={OmnichannelFollowups}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Omnichannel Follow-Ups
                </h3>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  Trigger SMS, WhatsApp, Email, or voice callbacks from one missed call. Do it all from a single platform.

                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF]  p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={CRMCampaigns}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  CRM-Backed Campaigns
                </h3>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  Auto-log every call, sync user data, and personalise journeys with full CRM integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={WhyChooseMissedCall}
              alt="Why Celitix Makes It Better"
              className="w-60 sm:w-80 md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* 3st */}
      {/* 4th */}
      <div className='bg-[#f7ebfc] py-2 md:py-10 pt-10 md:pt-16'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold heading text-white popf sm:text-3xl md:text-4xl">
              Low Effort, High Impact
            </h2>
            <p className="text-sm md:text-lg sub-heading text-white font-light popf mt-2">
              Run cost-efficient lead gen campaigns with smart automation built in.

            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
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
      <section className="bg-[#f7ebfc] py-20 md:py-16">
        {/* Heading */}
        <div className="text-center px-4 md:px-8 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 heading">
            Don’t Just Answer Calls, Delight Customers!
          </h2>
          <p className='text-sm md:text-xl sub-heading text-gray-700 mt-2'>Secure, Flexible, and User Experience-friendly</p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 ">
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src={DontJustMissedCall}
              alt="Dashboard screenshot"
              className="w-96 h-96"
            />
          </div>

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
                    className="w-full px-4 sm:px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`text-base sm:text-lg font-medium ${isOpen ? 'text-purple-700' : 'text-gray-800'
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
                    <p className="text-sm sm:text-base leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
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
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[500px] object-contain lg:absolute top-0 md:-top-65"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl heading font-bold mb-4">
            Engage Customers with Creative Campaigns
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Run lead-gen campaigns with instant response, deep integration, and powerful analytics.
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
      {/* 8nd */}
      {/* <div className="w-full px-4 py-5 md:py-20 bg-[#f4f7fb]">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-18">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-gray-900 popf">
            WhatsApp Marketing: Learn More
          </h2>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div
            ref={scrollRef}
            className="flex md:gap-10 gap-5 overflow-x-auto scroll-smooth custom-scrollbar scrollbar-visible scrollbar-thin scrollbar-thumb-[#7951AD] scrollbar-track-gray-200 pb-8 mx-auto"
          >
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`snap-start flex-shrink-0 w-[90%] sm:w-[75%] md:w-[50%] lg:w-[33%] xl:w-[30%] rounded-2xl p-6 shadow-md ${post.color}`}
              >
                <div className="relative mb-4">
                  <Image
                    src={post.img}
                    alt="blog"
                    className=" w-full h-40 object-cover border-4 border-white"
                  />
                  <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <p className="text-gray-600 text-sm">{post.date}</p>
                <h3 className="font-semibold text-lg sub-heading text-gray-800 mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 pera line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>


          <div className="absolute -bottom-10 right-4 flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="bg-[#9B44B6] text-white p-2 rounded-full hover:bg-[#7951AD] shadow"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#9B44B6] text-white p-2 rounded-full hover:bg-[#7951AD] shadow"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div> */}
      {/* 8nd */}
      {/* 9th */}
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-10 md:py-20 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading text-center text-gray-900 popf mb-8">
            Missed Call Services FAQs
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

export default MissedCall
