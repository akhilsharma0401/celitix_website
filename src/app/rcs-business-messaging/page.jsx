
"use client"
import React, {  useRef, useState } from 'react'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async"
import { AddMultimedia, Authenticationicon, BoostYourSales, BrandedProfiles, BuildCustomFlows, BuildYourBrand, CarouselMessages, Click2callicon, CTAButtons, CTALASTIMAGE, DisruptionFree, DriveMoreAction, Emailicon, FallbackChannels, IBDicon, MissedCallicon, OBDicon, RCS_Business_Messaging, RCSicon, RCSVsSMS, RichMediaCards, RichPromotionsRCS, SMSicon, SMSVsRCS, StartNowStayReady, TargetSmarter, TheCelitixRCS, TryOptimise, twoWaySMSicon, WhatsAppicon } from '../../../public/assets/images';
// import { initScrollReveal } from '../../utils/ScrollReveal';
import Image from 'next/image';
import Link from "next/link";
import { CheckCircle, RemoveCircleOutline } from '@mui/icons-material';
import FaqItem from '../components/Faq';
import UniversalButton from '../components/UniversalButton';
import FormPopup from '../components/FormPopup';

const Rcs = () => {

  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  // 8rd
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
  // 8rd
  // 9rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is RCS Business Messaging (RBM)?",
      answer: [
        "RCS (Rich Communication Services) is the next evolution of SMS. It offers a rich messaging experience of apps like WhatsApp & Telegram on Android’s default messaging app.",
        "RCS Business Messaging (RBM) is an enterprise-grade solution offered by Celitix. With it, companies can use this new platform for marketing and business growth."
      ]
    },
    {
      question: "How is RCS different from SMS?",
      answer:
        "Unlike SMS, RCS offers tons of smart features expected of modern messaging. While SMS promotional campaigns are limited, RBM lets you send branded promotional messages with images, buttons, carousels, and more.",
    },
    {
      question: "Does RCS work on iPhones?",
      answer:
        "No. Apple has launched RCS support for iOS 18 in September 2024. However, due to network issues, RCS is currently only supported on Android in India. With Celitix, you can set fallback SMS options for iOS users.",
    },
    {
      question: "Do users need an app to receive RCS?",
      answer:
        "No. RCS runs directly on all newer Android devices’ native messaging app, no installation required. Older Android devices must download the Google Messages app to use RCS.",
    },
    {
      question: "How to get started with RBM?",
      answer:
        "Our team will guide you through the onboarding process. Click here to get started.",
    },
  ];
  // 9rd

  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }



  // 5new addtion
  const features = [
    { label: 'Basic Text Messaging ', sms: true, rcs: true },
    { label: ' Verified Brand Profiles', sms: false, rcs: true },
    { label: ' Link Previews & Locations', sms: false, rcs: true },
    { label: ' Carousels or Rich Card Messages', sms: false, rcs: true },
    { label: 'CTA Action Buttons', sms: false, rcs: true },
    { label: 'Rich Media (Pics, Vids, & Docs)', sms: false, rcs: true },

  ];



  // extra section

  const tabs = [
    { key: 'Rich Media Cards', label: 'Rich Media Cards' },
    { key: 'Carousel Messages', label: 'Carousel Messages' },
    { key: 'CTA Buttons', label: 'CTA Buttons' },
    { key: 'Branded Profiles', label: 'Branded Profiles' },
  ]

  const tabData = {
    'Rich Media Cards': {
      heading: 'Tell A Bigger Story In Every Message',
      description:
        'Charm users with stunning images, videos, descriptions, & action buttons in a single card. Perfect for promotions, product highlights, or personalised recommendations. Designed to convert, built to impress.',
      buttonText: 'Learn More',
      image: RichMediaCards,
    },
    'Carousel Messages': {
      heading: 'Showcase Multiple Products',
      description: 'Let users swipe through rich carousel messages. Customise according to your needs. Each tile supports media, text, and its own CTA. It’s the closest you can get to a mini-landing page inside a message.',
      buttonText: 'Learn More',
      image: CarouselMessages,
    },
    'CTA Buttons': {
      heading: 'Let Customers Tap Into Action',
      description:
        'Power your campaigns with one-touch buttons, from “Buy Now” to “Book a Slot” to “Get Directions.” Reduce friction, increase response. Combine with media cards to drive the next steps instantly. ',
      buttonText: 'Get Started',
      image: CTAButtons,
    },
    'Branded Profiles': {
      heading: 'Messages With Identity, Not Just Reach',
      description:
        'Appear with your brand name, logo, and verified status. No random numbers, no uncertainty. More trust = more engagement. RCS brand profiles bring legitimacy and polish to every interaction.',
      buttonText: 'Explore',
      image: BrandedProfiles,
    },
  }

  const [activeTab, setActiveTab] = useState('Rich Media Cards');
  const content = tabData[activeTab];
  // extra section


  return (
    <div>

      {/* <Helmet>
        <title>RCS Business Messaging | Celitix</title>
        <meta name="description" content=" Break free from the limitations of SMS marketing. Engage users with buttons, media, and branded messages via Celitix’s RCS platform." />
        <link rel="preload" as="image" href={RCS_Business_Messaging} crossorigin="anonymous" />
      </Helmet> */}

      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20 sub-heading">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 sub-heading text-white text-md font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              RCS Business Messaging
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 popf leading-tight heading">
              Get<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Visibility </span>With RCS
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md pera">
              Enrich your promotions with RCS Business Messaging. Provide a better experience across channels. Combine with SMS fallbacks.
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
              src={RCS_Business_Messaging}
              alt="RCS Business Messaging"
              loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title='RCS Business Messaging'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
            Rich Promotions, Half the Price
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
                    src={BuildYourBrand}
                    alt="BuildYourBrand"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Build Your Brand</h3>
                <p className="text-md text-black pera ml-4">
                  Flaunt your logo & brand colors with a verified RCS profile. Make every message official.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={DriveMoreAction}
                    alt="DriveMoreAction"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Drive More Action</h3>
                <p className="text-md text-black pera ml-4">
                  Nudge users to call, buy, tap or click instantly with action buttons on rich message cards.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={AddMultimedia}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Add Multimedia</h3>
                <p className="text-md text-black pera ml-4">
                  Supercharge your messages with videos, images, carousels, QR codes, and dynamic cards.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center order-first md:order-none">
            <Image
              src={RichPromotionsRCS}
              alt="Phone Mockup"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={FallbackChannels}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Fallback Channels</h3>
                <p className="text-md text-black pera ml-4">
                  User doesn’t have RCS? No problem. Auto-switch to SMS so messages land every time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={TargetSmarter}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Target Smarter</h3>
                <p className="text-md text-black pera ml-4">
                  Segment your numbers into groups & schedule messages. Reach the right people at the right time.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={BoostYourSales}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Boost Your Sales</h3>
                <p className="text-md text-black pera ml-4">
                  Combine all features to drive results and make an impact. Optimise using analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
            The Celitix Difference
          </h2>
          <p className='text-sm md:text-xl font-semibold text-gray-700 sub-heading'>Explore the power of RCS Business Messaging while managing existing workflows. Do it effortlessly, with Celitix.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={DisruptionFree}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Disruption-free
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Run RCS alongside your existing communication workflows. No switching platforms, no mess.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={TryOptimise}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Try & Optimise
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Try new formats, test campaigns, & track what clicks. Segment customers into groups for better results.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={StartNowStayReady}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Start Now, Stay Ready
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Build your RCS muscle now, so when the market shifts, you're already ahead of the curve.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={TheCelitixRCS}
              alt="Why Celitix Makes It Better"
              className="w-60 sm:w-80 md:w-[380px] lg:w-[400px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* 3st */}
      {/* 4th */}
      <div className='bg-[#f7ebfc] py-2 md:py-10 md:pt-10'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white popf heading ">
              Ready to Sell More?
            </h2>
            <p className="text-sm md:text-lg text-white font-light popf mt-2 sub-heading">
              Get a free demo or start your RCS onboarding process!
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Start Now"
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
      {/* extra */}
      <section className="py-2 md:py-10 bg-[#f7ebfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl heading text-center mb-6 sm:mb-8">
            Promote Better with RCS
          </h2>

          {/* Tabs - scrollable on mobile */}
          <div className="overflow-x-auto; flex lg:justify-center justify-start">
            <div className="inline-flex space-x-4 ">
              {tabs.map(tab => {
                const active = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap ${active
                        ? 'text-white bg-[#6E11B0] shadow-lg heading'
                        : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                      } rounded-t-xl `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content box */}
          <div className="border border-[#6b0da1] rounded-3xl shadow-inner bg-white">
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-6 sm:p-8">
              {/* Text */}
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sub-heading">
                  {content.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed pera text-sm sm:text-base">
                  {content.description}
                </p>
                {/* <UniversalButton
                label={content.buttonText}
                variant="primary"
                className="bg-[#6b0da1] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5a0b94] transition-transform transform hover:-translate-y-1"
                onClick={() => console.log('Clicked', activeTab)}
              /> */}
              </div>

              {/* Image */}
              <div className="flex justify-center h-96">
                <Image
                  src={content.image}
                  alt={activeTab}
                  className="w-80 h-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* extra */}
      {/* 5th */}
      <div className="bg-[#f7ebfc] py-5 md:py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2 heading">
          RCS Vs. SMS: Unlock Superior Messaging Features
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 sub-heading">
          Enterprises across industries can use our business communication solutions to communicate
          effectively with customers through our omnichannel marketing platform.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* SMS Image */}
          <div className="w-full lg:w-1/4 flex justify-center">
            <Image
              src={SMSVsRCS}
              alt="SMS Mobile"
              className="w-44 sm:w-52"
            />
          </div>

          {/* Features Table */}
          <div className="w-full lg:w-2/4">
            <div className="grid grid-cols-3 gap-2 font-medium text-center mb-2">
              <div className="text-gray-900 sub-heading">SMS</div>
              <div></div>
              <div className="text-gray-900 sub-heading">RCS</div>
            </div>
            <div className="divide-y">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 items-center text-center py-2 text-sm md:text-base pera"
                >
                  <div>
                    {feature.sms ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <RemoveCircleOutline className="text-gray-400" />
                    )}
                  </div>
                  <div className="text-gray-800 font-semibold">{feature.label}</div>
                  <div>
                    {feature.rcs ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <RemoveCircleOutline className="text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RCS Image */}
          <div className="w-full lg:w-1/4 flex justify-center">
            <Image
              src={RCSVsSMS}
              alt="RCS Mobile"
              className="w-44 sm:w-52"
            />
          </div>
        </div>
      </div>
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
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 heading">
            Send Texts That Sell
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light mb-6 max-w-xl sub-heading">
            Turn broadcasts into conversation. Connect with your customers and drive conversations.
          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 transition-all duration-300 "
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
      {/* <div className="w-full px-4 py-2 md:py-10 bg-[#f7ebfc]">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
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
                <h3 className="font-semibold text-lg text-gray-800 mt-2 mb-3 line-clamp-2 sub-heading">
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
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:py-20 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900 popf mb-8 heading">
            RCS Services FAQs
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
                answer={
                  <div className="text-sm md:text-md sub-heading  font-semibold text-gray-700 ">
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((line, lineIdx) => (
                        <p key={lineIdx} className="mb-2 leading-relaxed">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="leading-relaxed ">{faq.answer}</p>
                    )}
                  </div>
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

export default Rcs
