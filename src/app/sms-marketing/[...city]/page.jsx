"use client"
import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async"
// import { initScrollReveal } from '../../utils/ScrollReveal';




import { Authenticationicon, AutomateWorkflows, Click2callicon, compliant, ConnectYourChannels, CTALASTIMAGE, Emailicon, IBDicon, InternationalSMS, LinkTracking, MissedCallicon, MultichannelIntegrations, MultichannelIntegrationsSms, Notify24, OBDicon, PerfectBackup, RCSicon, RealTimeAnalytics, SeasonalPromotions, SendSmarterFaste, SimpleSMS,  SMSicon, TechSupport, TransactionalSMS, twoWaySMSicon, Verifyusers, WhatsAppicon, WhyChooseSMS } from '../../../../public/assets/images';
import Image from 'next/image';
import Link from "next/link";
import FaqItem from '@/app/components/Faq';
import UniversalButton from '@/app/components/UniversalButton';
import FormPopup from '@/app/components/FormPopup';
import { SMS_Marketing } from '../../../../public/assets/images';

// src/assets/mainicons/TechSupport.png




const Sms = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);
  // 5th
  const features = [
    { title: 'Transactional SMS, OTP, Alerts, Updates', imgSrc: TransactionalSMS },
    { title: 'Seasonal Promotions, Rewards, etc.', imgSrc: SeasonalPromotions },
    { title: 'Link Tracking For Every Campaign', imgSrc: RealTimeAnalytics },
    { title: 'Real Time Analytics', imgSrc: MultichannelIntegrationsSms },
    { title: '24x7 Technical Support', imgSrc: LinkTracking },
    { title: 'Multichannel Integrations', imgSrc: TechSupport },
  ]
  // 5th

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
      question: "How is Celitix’s SMS different?",
      answer:
        "Celitix lets you automate, segment, and track SMS campaigns. It's smarter and more effective than basic SMS tools.",
    },
    {
      question: "What kind of messages can I send?",
      answer:
        "You can send transactional alerts (like OTPs or booking updates), promotional messages, service reminders, and more.",
    },
    {
      question: "Can I integrate it with my CRM or app?",
      answer:
        "Yes! Celitix offers API access to connect with your systems and automate SMS flows.",
    },
    {
      question: "Does SMS still work without internet?",
      answer:
        "Yes. SMS is delivered over mobile networks and works on all devices, with or without data.",
    },
    {
      question: "Can I track SMS campaign results?",
      answer:
        "Yes. Use Celitix’s analytics to see delivery, open rates, and link clicks. ",
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
        <title>SMS Marketing & OTP Platform | Celitix </title>
        <meta name="description" content=" Reach anyone, anywhere, instantly. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results." />
        <link rel="preload" as="image" href={SMS_Marketing} crossorigin="anonymous" />
      </Helmet> */}


      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              SMS Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 popf leading-tight">
              Reach<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">  Instantly </span> with SMS
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md pera">
              Connect with every customer through fast, reliable and low-cost SMS messaging + SMS API Integration.
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
              src={SMS_Marketing}
              alt="Reach Instantly with SMS"
              loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title='Reach Instantly with SMS'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-5 md:py-16 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900">
            Simple Reliable Everywhere
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
                    src={Notify24}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black  rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading  font-bold text-black mb-1 ml-4">Notify 24/7 </h3>
                <p className="text-md text-black pera ml-4">
                  Automatically update your customers in real time. Integrate your system with Celitix’s SMS API.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={Verifyusers}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1 ml-4">Verify Users </h3>
                <p className="text-md text-black pera ml-4">
                  The most reliable and trusted channel for secure OTP & 2-Factor Authentication on Celitix.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={MultichannelIntegrations}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Multilingual</h3>
                <p className="text-md text-black pera ml-4">
                  Send SMS in any local language. Reach users in their mother tongue and get better results.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center order-second md:order-none">
            <Image
              src={SimpleSMS}
              alt="Phone Mockup"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[370px] object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={compliant}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">100% Compliant</h3>
                <p className="text-md text-black pera ml-4">
                  Use approved templates and sender IDs to build trust. Celitix simplifies the rules for you.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={InternationalSMS}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">International SMS</h3>
                <p className="text-md text-black pera ml-4">
                  Reach users across borders through global SMS routes. For SaaS, Tech, & global
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={PerfectBackup}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Perfect Backup </h3>
                <p className="text-md text-black pera ml-4">
                  An ideal automated fallback. For when channels like Voice, RCS or WhatsApp are unsuccessful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-5 md:py-16 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-1">
            Why Choose Celitix?
          </h2>
          <p className='text-sm md:text-xl sub-heading font-semibold text-gray-700'>SMS API is urgent, reliable, & developer-friendly. Add it to any channel with Celitix.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={AutomateWorkflows}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Send Smarter, Faster
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Trigger OTPs, alerts, or promos automatically from your CRM, app or system. Deliver to users who don’t have internet.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={SendSmarterFaste}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Connect Your Channels
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Auto-send SMS after users engage with missed call or 2-way SMS campaigns. Craft seamless experiences across channels.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={ConnectYourChannels}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Automate Workflows That Work
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Build, measure, & manage smart flows with SMS fallbacks. Manage onboarding, sales & more, all from one dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={WhyChooseSMS}
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
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white popf heading">
              Connect With Us
            </h2>
            <p className="text-sm md:text-lg text-white font-light popf mt-2 sub-heading">
              Start now or learn how Celitix’s SMS solutions can help you.
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
      <div className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-5 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900">
            SMS API: Send, Sync, Automate

          </h2>

        </div>

        <div className="flex flex-wrap -mx-2 sub-heading">
          {features.map(({ title, imgSrc }, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
              <div
                className="
                border border-gray-300 rounded-lg
                p-6 flex flex-col items-center
                transition-colors duration-200 bg-[#8200DB] text-white"
              >
                <Image
                  src={imgSrc}
                  alt={title}
                  className="w-8 h-8 mb-4"
                />
                <p className="text-center">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f6effc] px-4 sm:px-6 lg:px-20 py-2 md:py-10  text-center">
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
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 heading">
            Start Sending with Celitix
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light mb-6 max-w-xl sub-heading">
            Get the most out of SMS with automation, segmentation, and real-time analytics.
          </p>
          <UniversalButton
            label="Start Now "
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 hover:bg-gray-200 transition-all duration-300"
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 popf">
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
                <h3 className="font-semibold sub-heading text-lg text-gray-800 mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            SMS Services FAQs
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
                  <span className="text-sm md:text-md sub-heading  font-semibold text-gray-700">
                    {faq.answer}
                  </span>
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

export default Sms
