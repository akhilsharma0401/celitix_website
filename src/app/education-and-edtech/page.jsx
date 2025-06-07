"use client"
import React, { useEffect, useState } from 'react'
import UniversalButton from '../components/UniversalButton'
import FaqItem from '../components/Faq';
// import { Helmet } from "react-helmet-async"
// import { initScrollReveal } from '../../utils/ScrollReveal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FormPopup from "../components/FormPopup"
import { CTALASTIMAGE, Ecommerce, Education2nd, Education4th1, Education4th2, Education4th3, EducationAttract, Educationhero, EducationReach, EducationReduce, EducationStay, Finance, FoodBeverage, Healthcare, Hospitality, ProfessionalServices, RealEstateConstruction, TechStartups } from '../../../public/assets/images';




const Education = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);


  // 2nd
  const features = [
    {
      title: "Reach Everyone, Instantly",
      desc: "Send urgent updates, event reminders, & promotions on multiple channels from one place.",
      icon: EducationReach,
    },
    {
      title: "Reduce Workload  ",
      desc: "Automate the repetitive stuff: attendance, fee reminders, exam alerts, and result day chaos.",
      icon: EducationReduce,
    },
    {
      title: "Attract Students ",
      desc: "Share fun notes, study tips, videos, or resources through direct channels they already use.",
      icon: EducationAttract,
    },
    {
      title: "Stay Connected ",
      desc: "Build community & trust with better communication for parents, alumni, & placement partners.",
      icon: EducationStay,
    },
  ];
  // 2nd

  // 4th
  const [mainTab, setmainTab] = useState("Communication");

  const maintabs = ["Communication", "Participation", "Collaboration"];

  const maintabContent = {
    "Communication": [
      "Notify parents about fees, holidays, or schedule changes.",
      "Remind students about exams, submissions, or events.",
      "Share circulars, results, or certificates with a click.",
      "Avoid missed messages with Voice + Messaging fallbacks.",

    ],
    "Participation": [
      "Promote school events, workshops, clubs, or competitions.",
      "Share registration forms, documents or payment links.",
      "Use reward points to gamify learning or engagement.",
      "Celebrate wins with photos, videos, or uplifting quotes.",

    ],
    "Collaboration": [
      "Let parents raise concerns or queries through WhatsApp.",
      "Automate FAQs about timings, transport, etc. via chatbots.",
      "Build networks for career counselling or placement needs.",
      "Collect honest feedback post-event or at term ends.",

    ],
  };

  const tabImages = {
    "Communication": Education4th1,
    "Participation": Education4th2,
    "Collaboration": Education4th3,
  };
  // 4th






  // 6rd
  const [activeTabs, setActiveTabs] = useState("Ecommerce");

  const tabs = [
    "Ecommerce", "Healthcare", "Finance", "Hospitality",
    "Real Estate", "Food & Beverage", "Professional Services", "Tech Startups"
  ];

  const industryRoutes = {
    Ecommerce: '/retail-and-ecommerce',
    Healthcare: '/healthcare',
    Finance: '/financial-services',
    // Education: '/education-and-edtech',
    Hospitality: '/travel-and-tourism',
    'Real Estate': '/construction-and-real-estate',
    'Food & Beverage': '/food-and-beverages',
    'Professional Services': '/professional-services',
    'Tech Startups': '/tech-startups',
  };

  const router = useRouter();

  const handleLearnMore = () => {
    const route = industryRoutes[activeTabs];
    if (route) {
      router(route);
    } else {
      console.warn('No route defined for:', activeTabs);
    }
  };

  const tabContent = {
    Ecommerce: {
      title: "Ecommerce",
      description: "Recover abandoned carts, automate updates, and turn broadcasts into conversations with Click-to-WhatsApp ads.",
      buttonText: "Learn More",
      image: Ecommerce,

    },
    Healthcare: {
      title: "Healthcare",
      description: "Send appointment reminders, test results, and prescription updates. Secure, automatic, and patient-friendly!",
      buttonText: "Learn More",
      image: Healthcare,

    },
    Finance: {
      title: "Finance",
      description: "Send OTPs, share policy or transaction updates, and manage KYC with compliance-ready communication.",
      buttonText: "Learn More",
      image: Finance,
    },
    Education: {
      title: "Education",
      description: "Automate reminders, results, and fee alerts. Keep students and parents in sync with minimal effort.",
      buttonText: "Learn More",
      image: Education,
    },
    Hospitality: {
      title: "Hospitality",
      description: "Upgrade guest experiences with instant confirmations, custom service flows, and automated feedback collection. ",
      buttonText: "Learn More",
      image: Hospitality,  // Corrected image
    },
    "Real Estate": {
      title: "Real Estate & Construction",
      description: "Follow up with leads, book site visits, and share project updates. Organize your sales process and achieve more with less.",
      buttonText: "Learn More",
      image: RealEstateConstruction, // Corrected image
    },
    "Food & Beverage": {
      title: "Food & Beverage",
      description: "Manage bookings, run loyalty programs, and keep track of customers. Grow your business with technology!",
      buttonText: "Learn More",
      image: FoodBeverage, // Corrected image
    },
    "Professional Services": {
      title: "Professional Services",
      description: "Handle CRM, integrated workflows, campaigns, and service from one place. Schedule, follow-up, and support at any volume.",
      buttonText: "Learn More",
      image: ProfessionalServices,
    },
    "Tech Startups": {
      title: "Tech Startups",
      description: "Deliver a branded, scalable user experience across channels. Onboard faster, support better, grow smarter.",
      buttonText: "Learn More",
      image: TechStartups, // Corrected image
    },
  };
  // 6rd
  // 7th
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does it all work?",
      answer:
        "Celitix is an online communication platform that lets you reach learners or guardians directly. With it, you can create databases and communicate with people through SMS, WhatsApp, Voice Calls, and more.",
    },
    {
      question: "How does Celitix help with these things?",
      answer:
        "With Celitix’s direct communication channels, you can leverage your online presence and ads to segment contacts into databases. Then you can automate messaging with WhatsApp chatbots, promote on RCS or SMS, streamline voice calling and more.",
    },
    {
      question: "Can I message both students and parents?",
      answer:
        "Yes. You can reach students, parents, or both on WhatsApp, SMS, or even automated calls. They just need to have a phone.",
    },
    {
      question: "Do I need software or apps to use this?",
      answer:
        "No complicated systems needed. Celitix works with what you have, even spreadsheets or basic tools. Our team will help you with every step.",
    },
    {
      question: "Can I promote school events and workshops?",
      answer:
        "Absolutely. Send invites, collect signups, share reminders, and even follow-ups. Schedule promotional messages, automate workflows, or send rich media promos instantly.",
    },
    {
      question: "Is it safe to send report cards and documents?",
      answer:
        "Yes. All messages are encrypted and can be sent only to verified numbers.",
    },
    {
      question: "What if someone doesn’t check WhatsApp?",
      answer: "We back up with RCS, SMS, voice calls, and email (coming soon) to ensure your message gets through."
    }
  ];
  // 7th

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
        <title> Financial Communication Platform | Celitix        </title>
        <meta name="description" content="Automate KYC, send OTPs, share transaction updates, and support customers via Messaging and Voice with Celitix." />
      </Helmet> */}
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-2 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              Education & Edtech

            </span>

            <h1 className="text-2xl md:text-4xl lg:text-5xl heading font-bold text-gray-900 popf leading-tight">
              Simplify<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Learning </span>with Celitix
            </h1>

            <p className="text-gray-600 text-base md:text-lg pera max-w-md">
              From reminders to announcements, Celitix keeps everyone informed, so teachers can teach & students can focus.
            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Connect With Us "
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
              src={Educationhero}
              alt="Simplify Learning with Celitix"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
              loading="eager"
              // fetchpriority="high"
              crossorigin="anonymous"
              title='Education'
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2th */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 lg:px-20 py-5 md:py-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-center pb-5 md:pb-15">
            Engage Students, Inform Parents
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-black p-5 flex flex-col items-center text-center"
                >
                  <div className="bg-blue-500 rounded-full p-4 mb-4 shadow-md">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold heading text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 pera text-md">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="w-full max-w-xl mx-auto">
              <div className="relative rounded-xl overflow-hidden ">
                <Image
                  src={Education2nd}
                  alt="Smartping Video"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2th */}
      {/* 3th */}
      <div className='bg-[#f7ebfc] py-16 pt-10 md:pt-16'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold text-white heading sm:text-3xl md:text-4xl">
              Teach Smarter
            </h2>
            <p className="text-sm md:text-lg sub-heading text-white font-light popf mt-2">

              See how Celitix can help you grow your impact, not your workload.

            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Get in Touch"
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
      {/* 3th */}
      {/* 4th */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 md:px-12 py-5 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl pb-2 md:pb-5 text-center heading text-purple-800 mb-3">
            Make Learning Interesting
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-10 flex-wrap gap-4">
            {maintabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setmainTab(tab)}
                className={`sub-heading  transition py-2 px-4 rounded-lg text-md font-semibold shrink-0 snap-center sub-heading ${mainTab === tab
                  ? "bg-[#6E11B0] text-white"
                  : "bg-white text-black hover:bg-purple-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section: Dynamic Image */}
            <div className="flex justify-center space-y-5 ">
              <Image
                src={tabImages[mainTab]}
                alt={`${mainTab} Visual`}
                className="rounded-xl w-full max-w-md"
              />
            </div>

            {/* Right Section: Dynamic Bullet Points */}
            <div className="max-w-xl mx-auto lg:mx-0 text-gray-800">
              <h3 className="text-xl md:text-3xl sub-heading text-purple-700 mb-4">
                {mainTab === "Communication"
                  ? "Keep Everyone Updated & Informed"
                  : mainTab === "Participation"
                    ? "Encourage Student Involvement"
                    : "Simplify Two-Way Communication"}
              </h3>
              <ul className="list-disc list-inside space-y-3 pera text-md md:text-lg">
                {maintabContent[mainTab].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 4th */}
      {/* 5th */}
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
          <h2 className="text-white  text-2xl sm:text-3xl md:text-4xl heading font-bold mb-4">
            Communicate Better. Make an Impact.
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            From classrooms to communities, Celitix helps you stay connected, keep everyone informed, and be future-ready.
          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300 sm:px-4 sm:py-2 "
            onClick={handleShowFormPopup}
          />
          <FormPopup
            visible={openDialog}
            onHide={handleCloseDialog}
          />
        </div>
      </div>
      {/* 5th */}
      {/* 6th */}
      <section className="bg-[#f7ebfc] px-6 sm:px-10 py-2 md:pt-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl heading font-bold text-gray-800">
            Use Cases Across Industries
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 mb-8 lg:justify-center xl:justify-center snap-x snap-mandatory ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTabs(tab)}
              className={`py-2 px-4 rounded-lg text-md font-semibold shrink-0 snap-center sub-heading ${activeTabs === tab
                ? 'bg-purple-800 text-white'
                : 'bg-white text-black hover:bg-purple-200'
                } transition-all duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* Tab Content */}
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-12 px-4 sm:px-8 lg:px-20 py-2 md:py-5">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text:xl md:text-3xl lg:text-4xl sub-heading font-semibold text-gray-800 mb-4">
              {tabContent[activeTabs]?.title || "Ecommerce"}
            </h2>
            <p className="text-lg pera text-gray-600 mb-6">
              {tabContent[activeTabs]?.description || "Recover abandoned carts, automate updates, and turn broadcasts into conversations with Click-to-WhatsApp ads."}
            </p>
            <UniversalButton
              label={tabContent[activeTabs]?.buttonText || "Learn More"}
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
              onClick={handleLearnMore}
            />
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs lg:max-w-md">
              <Image
                src={tabContent[activeTabs]?.image || "/assets/industries/ecommerce.png"}
                alt={tabContent[activeTabs]?.title || "Industry"}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 6th */}
      {/* 7th */}
      <div className="min-h-screen bg-[#f7ebfc] flex justify-center items-center py-2 md:py-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            Celitix for Education FAQs
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
                  <p className="text-sm md:text-md sub-heading font-semibold text-gray-700">
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
      {/* 7th */}
    </div>
  )
}

export default Education
