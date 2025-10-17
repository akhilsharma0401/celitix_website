"use client"
import React, { useEffect, useState } from 'react'
import UniversalButton from '../components/UniversalButton'
import FaqItem from '../components/Faq';
// import { Helmet } from "react-helmet-async"
// import { initScrollReveal } from '../../utils/ScrollReveal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CTALASTIMAGE, Ecommerce, Education, Finance, FoodBeverage, Healthcare, Hospitality, ProfessionalServices, RealEstateConstruction, TechStartups, TechStartups2nd, TechStartups4th1, TechStartups4th2, TechStartups4th3, TechStartupsAutomate, TechStartupsFlex, TechStartupsSaaS, TechStartupsSupport, TechStartupsTrigger } from '../../../public/assets/images';
import FormPopup from '../components/FormPopup';

const TechStartUp = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  // 2nd
  const features = [
    {
      title: "Automate Onboarding",
      desc: "Send welcome flows, product guides, and activation nudges instantly across WhatsApp, SMS, and voice.",
      icon: TechStartupsAutomate,
    },
    {
      title: "Support Without Scaling Headcount ",
      desc: "Use smart bots, self-service flows, and live chat routing to handle growing customer bases efficiently.",
      icon: TechStartupsSupport,
    },
    {
      title: "Trigger-Based Engagement",
      desc: "Personalise updates, tips, and promotions based on user actions, product usage, or lifecycle stage.",
      icon: TechStartupsTrigger,
    },
    {
      title: "Flex with Your Stack ",
      desc: "Connect Celitix to your CRM, support platform, or app with simple APIs, no heavy lifts.",
      icon: TechStartupsFlex,
    },
  ];
  // 2nd

  // 4th
  const [mainTab, setmainTab] = useState("Build Workflows");

  const maintabs = ["Build Workflows", "Scale Smarter", "Drive Growth"];

  const maintabContent = {
    "Build Workflows": [
      "Share activation guides, videos, checklists, and more.",
      "Nudge inactive users with tips and feature highlights.",
      "Confirm user actions like signups, verifications, or upgrades.",
      "Offer Click-to-Call support where users need it the most.",

    ],
    "Scale Smarter": [
      "Route common queries to bots or help articles instantly.",
      "Connect users to live agents for complex or urgent issues.",
      "Trigger password reset flows, subscription help, or plan upgrades.",
      "Update users proactively on downtimes, bugs, or maintenance.",

    ],
    "Drive Growth": [
      "Trigger upsell campaigns based on usage data.",
      "Promote webinars, new features, or loyalty rewards.",
      "Share billing alerts, payment confirmations, or renewal nudges.",
      "Reactivate churn-risk users with personalised outreach.",

    ],
  };

  const tabImages = {
    "Build Workflows": TechStartups4th1,
    "Scale Smarter": TechStartups4th2,
    "Drive Growth": TechStartups4th3,
  };
  // 4th



  // 6rd
  const [activeTabs, setActiveTabs] = useState("E-Commerce");

  const tabs = [
    "E-Commerce", "Healthcare", "Finance", "Education", "Hospitality",
    "Real Estate", "Food & Beverage", "Professional Services",
  ];

  const industryRoutes = {
    'E-Commerce': '/retail-and-ecommerce',
    // Healthcare: '/healthcare',
    Finance: '/financial-services',
    Education: '/education-and-edtech',
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
      router.push(route); // ✅ Correct usage
    } else {
      console.warn('No route defined for:', activeTabs);
    }
  };

  const tabContent = {
    'E-Commerce': {
      title: "E-Commerce",
      description: "Carts get left, but not for long! Our flows sing a comeback song. From browse to buy, we help you try, retarget smart and amplify. Turn broadcasts into conversations with Click-to-WhatsApp ads. ",
      useCases: [
        "Recover abandoned carts",
        "Automate order & delivery updates",
        "Trigger re-engagement via SMS or WhatsApp"
      ],

      buttonText: "Learn More",
      image: Ecommerce,

    },
    Healthcare: {
      title: "Healthcare",
      description: "A missed reminder or lost file? Not on our watch. We make healthcare timely, secure, and in style, so your patients feel peace, not panic. Secure, automatic, and patient-friendly!",
      useCases: [
        "Appointment & test result alerts",
        "Prescription refill reminders",
        "Feedback or follow-up via SMS "
      ],
      buttonText: "Learn More",
      image: Healthcare,

    },
    Finance: {
      title: "Finance",
      description: "From KYC to claims that fly, we help banks and insurers simplify. Trust is built on clear updates and smooth flows. We deliver both. Keep customers updated and take care of logistics from one place.",
      useCases: [
        "OTP and silent authentications",
        "Transaction & policy alerts",
        "KYC nudges via WhatsApp or RCS"
      ],
      buttonText: "Learn More",
      image: Finance,
    },
    Education: {
      title: "Education",
      description: "Classroom to home, everyone’s informed. No missed fees, no lost results, just smoother learning, start to end. With better communication, students listen, remember, and participate.",
      useCases: [
        "Exam & result notifications",
        "Fee due & payment reminders",
        "Student engagement surveys"
      ],
      buttonText: "Learn More",
      image: Education,
    },
    Hospitality: {
      title: "Hospitality",
      description: "Before check-in or after checkout, offer a quality of service that speaks for itself. Delight your guests with thoughtful nudges, and they’ll remember the stay. Upgrade the guest experience.",
      useCases: [
        "Booking confirmations & itinerary updates",
        "In-stay service requests",
        "Post-visit feedback collection"
      ],
      buttonText: "Learn More",
      image: Hospitality,  // Corrected image
    },
    "Real Estate": {
      title: "Real Estate & Construction",
      description: "From visiting a plot to closing deals, it's all about timing. We help you chase less, close more, and keep buyers in the loop, every step. Organise your sales process and achieve more with less. ",
      useCases: [
        "Site visit scheduling",
        "Project milestone updates",
        "Lead follow-ups via WhatsApp"
      ],
      buttonText: "Learn More",
      image: RealEstateConstruction, // Corrected image
    },
    "Food & Beverage": {
      title: "Food & Beverage",
      description: "Empty tables or full hearts? With us, it’s always the latter. Whether it’s orders or loyalty, the perfect recipe = automation with a human touch. Grow your business with technology!",
      useCases: [
        "Reservation confirmations",
        "Loyalty rewards via SMS",
        "Campaigns for special menus or offers"
      ],
      buttonText: "Learn More",
      image: FoodBeverage, // Corrected image
    },
    "Professional Services": {
      title: "Professional Services",
      description: "From consulting to clinics, workflows matter. We help you handle more clients, less chaos, without hiring more hands. Your network is your net worth. Organise contacts and stay connected. ",
      useCases: [
        "Automated appointment bookings",
        "Service alerts and follow-ups",
        "Campaigns for lead generation"
      ],
      buttonText: "Learn More",
      image: ProfessionalServices,
    },
    "Tech Startups": {
      title: "Tech Startups",
      description: "Speed is key, but so is trust. With Celitix, scale doesn’t break service, it builds it. Deliver faster, support smarter, grow leaner. Build a brand with a consistent omnichannel customer experience.",
      useCases: [
        "App onboarding via token-based flows",
        "Support workflows over WhatsApp",
        "Multi-channel user engagement"
      ],
      buttonText: "Learn More",
      image: TechStartups, // Corrected image
    },
  };

   const content = tabContent[activeTabs] || {};
  const {
    title,
    description,
    useCases,
    buttonText,
    image
  } = content;
  // 6rd
  // 7th
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can Celitix automate my onboarding flows?",
      answer:
        "Yes. You can create welcome journeys, activation nudges, and feature walkthroughs across WhatsApp, SMS, and Voice easily.",
    },
    {
      question: "Does it integrate with my CRM or app backend?",
      answer:
        "Definitely. We offer APIs and webhooks to sync with CRMs, user databases, and custom apps.",
    },
    {
      question: "Can I scale support without hiring a bigger team?",
      answer:
        "Yes. Smart chatbots, dynamic routing, and fallback systems help you manage higher volumes efficiently.",
    },
    {
      question: "Is Celitix good for SaaS customer success?",
      answer:
        "Absolutely. Trigger adoption campaigns, milestone celebrations, health score alerts, and renewal nudges automatically.",
    },
    {
      question: "Can I run product promotions or webinar invites too?",
      answer:
        "Yes. Use targeted messaging to promote webinars, launches, feature updates, or loyalty offers easily.",
    },

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
        <title> Customer Engagement Platform for Tech Startups | Celitix        </title>
        <meta name="description" content="Speed up onboarding, automate support, and scale customer engagement. Celitix helps tech startups connect smarter across channels." />
      </Helmet> */}
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              Tech Startups & SaaS
            </span>

            <h1 className="text-2xl md:text-4xl lg:text-5xl heading font-bold text-gray-900 popf leading-tight">
              Launch, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">Support, </span>& Scale with Celitix


            </h1>

            <p className="text-gray-600 text-base md:text-lg pera max-w-md">
              From first touch to lifelong loyalty, Celitix helps startups automate onboarding, streamline service, and deliver an experience customers remember.

            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Connect With Us"
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
              src={TechStartupsSaaS}
              alt="Whatsapp icon"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
              loading="eager"
              // fetchpriority="high"
              crossorigin="anonymous"
              title='Tech Startups '
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2th */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 lg:px-20 py-5 md:py-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-center pb-5 md:pb-15">
            Built for Growth-Driven Teams
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
                  src={TechStartups2nd}
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
              Delight Your Customers
            </h2>
            <p className="text-sm md:text-lg sub-heading text-white font-light popf mt-2">
              Let Celitix help you onboard, engage, and support customers without slowing your growth.
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
      {/* 3th */}
      {/* 4th */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 md:px-12 py-5 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl pb-2 md:pb-5 text-center heading text-purple-800 mb-3">
            For SaaS, Apps, and Digital Platforms
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
            <div className="flex justify-center space-y-5">
              <Image
                src={tabImages[mainTab]}
                alt={`${mainTab} Visual`}
                className="rounded-xl w-full max-w-md"
              />
            </div>

            {/* Right Section: Dynamic Bullet Points */}
            <div className="max-w-xl mx-auto lg:mx-0 text-gray-800">
              <h3 className="text-xl md:text-3xl sub-heading text-purple-700 mb-4">
                {mainTab === "Build Workflows "
                  ? "Seamless Multi-Channel Experiences"
                  : mainTab === "Scale Smarter "
                    ? "Future-Proof Your Sales Funnel"
                    : "Let Your Brand Grow Automatically"}
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
            Grow Smarter with Automations
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Onboard faster, support better, and build loyalty at scale, without losing speed.
          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300sm:px-4 sm:py-2 "
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
      <section className="bg-[#f7ebfc] px-4 sm:px-6 md:px-12 py-5 md:py-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-bold text-gray-800">
            Use Cases Across Industries
          </h2>
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
         <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 lg:gap-12 px-4 sm:px-8 lg:px-20 py-2 md:py-5">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sub-heading">
              {tabContent[activeTabs]?.title || "Ecommerce"}
            </h2>
            <p className="text-lg text-gray-600 pera mb-6">
              {tabContent[activeTabs]?.description || "Recover abandoned carts, automate updates, and turn broadcasts into conversations with Click-to-WhatsApp ads."}
            </p>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 text-xl  sub-heading mb-2">Use Cases:</p>
              <ul className="list-disc list-inside pera text-gray-700 text-base space-y-1">
                {useCases?.map((useCase, idx) => (
  <li key={idx}>{useCase}</li>
))}
              </ul>
            </div>
            <UniversalButton label={tabContent[activeTabs]?.buttonText || "Learn More"} variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]'  onClick={handleLearnMore} />
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 flex justify-center ">
            <div className="w-full lg:w-80 xl:w-90 2xl:w-120 h-auto">
              <Image
                src={tabContent[activeTabs]?.image || Ecommerce}
                alt={tabContent[activeTabs]?.title || "Industry"}
                className="rounded-lg w-full h-full"
                // loading="auto"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

      </section>
      {/* 6th */}
      {/* 7th */}
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:pb-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            Celitix for Tech Startups FAQs
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
      {/* 7th */}
    </div>
  )
}

export default TechStartUp