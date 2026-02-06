"use client"
import React, { useRef, useState } from 'react';
import UniversalButton from '../components/UniversalButton';
// import TwoWaySms from './channels/TwoWaySms';
import Image from 'next/image';
import FaqItem from '../components/Faq';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from 'react-helmet-async';
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormPopup from "../components/FormPopup"
import { blog1, blog2, blog3, blog4, Reach_1, Reach_2, Reach_3, Reach_4, Reach_5, Reach_6, Reach_7, Reach_8, Reach_9, Reach_10, automated_event_communication, step_by_step_call_management, HEALTH01, Education01, Finance01 } from '../../../public/assets/images';;
import { App_Authenticator, Click_to_Call, Ecommerce, Education, Email_Solutions, Finance, FoodBeverage, Healthcare, Hospitality, Inbound_Dialer, Missed_Call_Services, Outbound_Dialer, product3rd, producthero, ProfessionalServices, RCS_Business_Messaging, ReachApp, Reachclicktocall, Reachemail, Reachinboundcalling, ReachMissedcall, ReachObd, ReachRCS, ReachSMS, Reachwaytosms, Reachwhatsappicon, RealEstateConstruction, SMS_Marketing, TechStartups, Two_Way_SMS, WhatsApp_Business_Platform } from '../../../public/assets/images';

// import { tourism } from "@/assets/images"
// import {real_estate} from "@/assets/images"
// import {food_beverage} from "@/assets/images"
// import { professional_service} from "@/assets/images"
// import { tech_startup} from "@/assets/images"

// export const metadata = {
//   title: "Celitix CPaaS Solutions: Messaging, Voice & Email",
//   description: "Explore Celitix’s CPaaS suite: WhatsApp, SMS, Voice, Email, and OTP. Automate, scale, and unify all customer communication in one dashboard.",
// };

const Product = () => {

  // 2nd
  const services = [
    {
      id: 1,
      name: 'WhatsApp Business Platform',
      icon: Reachwhatsappicon,
      content: {
        image: WhatsApp_Business_Platform,
        desc: 'Leverage the world’s #1 messaging app. With advanced features like Chatbots, Click-to-WhatsApp ads, Branded Profiles and more.',
        ButtonName: 'Start Now',
      },
    },
    {
      id: 2,
      name: 'RCS Business Messaging',
      icon: ReachRCS,
      content: {
        image: RCS_Business_Messaging,
        desc: 'Rich, interactive messaging on native mobile apps. Shoot epic promotions, update and support users with action buttons, rich media and more!',
        ButtonName: 'Explore',
      },
    },
    {
      id: 3,
      name: 'SMS Solutions',
      icon: ReachSMS,
      content: {
        image: SMS_Marketing,
        desc: 'Perfect for urgent updates and reliable delivery. OTPs, Transactional messages, Bulk Promotions and API Integrations.',
        ButtonName: 'Learn More',
      },
    },
    {
      id: 4,
      name: '2 Way SMS',
      icon: Reachwaytosms,
      content: {
        image: Two_Way_SMS,
        desc: 'Create engaging, interactive SMS campaigns. Take votes, run quizzes, get confirmations and generate leads!',
        ButtonName: 'Get Started',
      },
    },
    {
      id: 5,
      name: 'Inbound Dialer',
      icon: Reachinboundcalling,
      content: {
        image: Inbound_Dialer,
        desc: 'Never miss a call again with customisable IVR menus, smart routing and call records. Perfect for customer support helplines.',
        ButtonName: 'Learn More',
      },
    },
    {
      id: 6,
      name: 'Outbound Dialer',
      icon: ReachObd,
      content: {
        image: Outbound_Dialer,
        desc: 'Start conversations with bulk voice call campaigns and IVR integrations. Pre-record audios in local languages or use AI-generated text-to-speech.',
        ButtonName: 'Explore ',
      },
    },
    {
      id: 7,
      name: 'Click to Call',
      icon: Reachclicktocall,
      content: {
        image: Click_to_Call,
        desc: 'Enhance your app or site’s user experience (UX). Let customers and agents connect effortlessly over voice call with secure number masking.',
        ButtonName: 'Know More ',
      },
    },
    {
      id: 8,
      name: 'Missed Call Services',
      icon: ReachMissedcall,
      content: {
        image: Missed_Call_Services,
        desc: 'Get leads, votes or confirmations with a dedicated missed call number. Auto trigger opt-ins, callbacks or custom actions when users call.',
        ButtonName: 'Start Now',
      },
    },
    {
      id: 9,
      name: 'App Authenticator',
      icon: ReachApp,
      content: {
        image: App_Authenticator,
        desc: 'Verify users without OTPs. Frictionless security that’s user-friendly and easier for your dev team.',
        ButtonName: 'Explore',
      },
    },
    {
      id: 10,
      name: 'Email OTP',
      icon: Reachemail,
      content: {
        image: Email_Solutions,
        desc: 'Verify users with pre-made HTML email templates. Great for onboarding authentication flows and MFA.',
        ButtonName: 'Check It Out',
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const activeService = services.find((s) => s.id === activeTab);
  const router = useRouter();
  const handleservices = () => {
    const btnText = activeService.content.ButtonName.trim();


    const validLabels = [
      'Start Now',
      'Check It Out',
      'Learn More',
      'Explore',
      'Explore ',
      'Get Started',
      'Know More ',
    ];

    if (validLabels.includes(btnText)) {
      switch (activeService.id) {
        case 1:
          router.push('/whatsapp-business-platform');
          break;
        case 2:
          router.push('/rcs-business-messaging');
          break;
        case 3:
          router.push('/sms-marketing');
          break;
        case 4:
          router.push('/two-way-sms');
          break;
        case 5:
          router.push('/inbound-dialer');
          break;
        case 6:
          router.push('/outbound-dialer');
          break;
        case 7:
          router.push('/click-to-call');
          break;
        case 8:
          router.push('/missed-call-services');
          break;
        case 9:
          router.push('/user-verification');
          break;
        case 10:
          router.push('/email-otp');
          break;
        default:
          console.log('No route defined for this service');
      }
    }
  };

  // 2rd
  // 3rd
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // 3rd
  // 5rd
  const [activeTabs, setActiveTabs] = useState("E-Commerce");

  const tabs = [
    "E-Commerce", "Healthcare", "Finance", "Education", "Hospitality",
    "Real Estate", "Food & Beverage", "Professional Services", "Tech Startups"
  ];

  const industryRoutes = {
    "E-Commerce": '/retail-and-ecommerce',
    Healthcare: '/healthcare',
    Finance: '/financial-services',
    Education: '/education-and-edtech',
    Hospitality: '/travel-and-tourism',
    'Real Estate': '/construction-and-real-estate',
    'Food & Beverage': '/food-and-beverages',
    'Professional Services': '/professional-services',
    'Tech Startups': '/tech-startups',
  };

  //   const router = useRouter();

  const handleLearnMore = () => {
    const route = industryRoutes[activeTabs];
    if (route) {
      router.push(route);
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
  // 5rd
  // 6rd
  const blogPosts = [
    {
      date: "September 16, 2024",
      title: "Generative AI security: How to keep your chatbot healthy and your platform protected",
      description:
        "Discover essential strategies to secure AI chatbots from evolving GenAI threats. Learn how to protect your AI investments now and keep them healthy and thriving.",
      tags: ["BLOG", "GENRATIVE AI", "CUSTOMER SECURITY", "BEST PRACTICES"],
      img: blog1,
      color: "bg-[#F0FDF4]",
    },
    {
      date: "September 5, 2024",
      title: "What is conversational AI? Examples and how it works",
      description:
        "Get a grasp on what Conversational AI actually is, with examples how it improves customer engagement and streamlines business operations.",
      tags: ["BLOG", "CONVERSATIONAL EXPERIENCE", "BEST PRACTICES"],
      img: blog2,
      color: "bg-[#F0FDF4]",
    },
    {
      date: "August 14, 2024",
      title: "Chatbots for HR: Transforming employee engagement and operations",
      description:
        "Learn how to keep employees satisfied and engaged with an always-on assistant to support HR departments manage daily tasks and requests.",
      tags: ["BLOG", "BEST PRACTICES"],
      img: blog3,
      color: "bg-green-50",
    },
    {
      date: "July 10, 2024",
      title: "AI in Healthcare: Improving Patient Experience",
      description:
        "From virtual assistants to smart diagnostics, learn how AI is revolutionizing healthcare delivery and improving patient satisfaction.",
      tags: ["BLOG", "HEALTHCARE", "AI"],
      img: blog4,
      color: "bg-[#F0FDF4]",
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
  // 6rd
  // 7rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Celitix CPaaS?",
      answer:
        "Celitix is a CPaaS (Communications Platform as a Service) that lets you build, automate and scale customer conversations using APIs, dashboards and workflows across messaging and voice.",
    },
    {
      question: "Which channels are supported on Celitix?",
      answer:
        "You can reach customers directly via WhatsApp Business Platform, RCS Messaging, SMS, outbound/inbound Voice, Missed Call services, Email OTP, App Authenticator, Click-to-Call and more.",
    },
    {
      question: "Can I automate my communication flows with Celitix CPaaS?",
      answer:
        "Yes. From reminders and alerts to onboarding, KYC, support and marketing campaigns. Use pre-set or dynamic workflows based on your data, triggers and user actions.",
    },
    {
      question: "Can I integrate Celitix CPaaS with my existing CRM or backend?",
      answer:
        "Absolutely. Celitix provides flexible APIs and webhooks that connect with your CRM, ERP or any internal tool, so you can sync data, trigger messages and personalise communication.",
    },
    {
      question: "Is Celitix secure and compliant with regulations?",
      answer:
        "Yes. We offer enterprise-grade security and support regional compliance frameworks like DLT (India) and more.",
    },
    {
      question: "How is Celitix different from other CPaaS platforms?",
      answer:
        "Most platforms offer channels. Celitix offers outcomes with ready-to-use cases, vertical-specific workflows and a UI anyone can use. You don’t need a dev team to get value fast.",
    },
  ];

  // 7rd




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
        <title> Celitix CPaaS Solutions: Messaging, Voice & Email</title>
        <meta name="description" content="Explore Celitix’s CPaaS suite: WhatsApp, SMS, Voice, Email, and OTP. Automate, scale, and unify all customer communication in one dashboard." />
      </Helmet> */}

      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 md:pb-10">
          <div className="space-y-6 box-reveal-left">
            {/* <span className="inline-block bg-purple-700 text-white text-xl font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
            Click to Call Solution
            </span> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight heading">
              A Better Way To<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Communicate </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md pera">
              With an Omni-Channel approach, save time & money while getting better results with a single CPaaS solution.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#" to="/book-a-demo">
                <UniversalButton
                  label="Book Demo"
                  variant="brutal"
                  className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                />
              </Link>

              {/* <Link href="#" to="/whatsapp-business-platform">
                <UniversalButton label="Chat With Us" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]'/></Link> */}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={producthero}
              alt="Connect Instantly with Click to Call"
              loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title='Connect Instantly with Click to Call'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>

      {/* 1st */}
      {/* 2nd */}
      <div className="bg-[#F6EDF9] py-2 sm:py-8 md:py-10">
        <div className="text-center px-4 sm:px-6 md:px-8 py-4 md:py-5">
          <h2 className="text-2xl md:4xl lg:text-5xl font-semibold text-gray-900 heading">
            Reach Customers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
              {" "}
              Wherever
            </span>{" "}
            They Are
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-10 my-0 md:mt-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {services.map((service) => {
              const active = activeTab === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 flex items-center gap-4
        ${active
                      ? "border-[#9B44B6] bg-[#faf5ff] shadow-lg scale-[1.02]"
                      : "border-gray-200 bg-white hover:shadow-md hover:scale-[1.01]"
                    }`}
                >
                  {/* Icon Box */}
                  <div
                    className={`p-3 rounded-lg
          ${active
                        ? "bg-[#9B44B6]/20"
                        : "bg-gray-100"
                      }`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={28}
                      height={28}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className={`text-base md:text-lg font-semibold
            ${active
                          ? "text-[#9B44B6]"
                          : "text-gray-800"
                        }`}
                    >
                      {service.name}
                    </h4>

                    {/* <p className="text-sm text-gray-500">
                        {service.shortDesc || "Click to explore this service"}
                      </p> */}
                  </div>
                </div>
              );
            })}

          </div>



          <div className="flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 md:px-10">
            <Image
              src={activeService.content.image}
              alt={activeService.name}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
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

          </div>
        </div>
      </div>
      {/* 2nd */}

      {/* 3nd */}
      <div className="bg-[#F7EBFC] py-2 md:py-10 px-6 sm:px-10">
        {/* Heading */}
        <div className="flex items-center justify-center mb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center heading">
            One Platform,<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Endless Possibilities </span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-20 px-8 lg:px-20">
          {/* Left Image Section */}
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/2">
            <div className="w-full max-w-xs lg:max-w-md">
              <Image
                src={product3rd}
                alt="User Communication"
                className="rounded-lg w-full h-full object-cover"
              // loading="auto"
              />
            </div>
          </div>

          {/* Right Accordion Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="space-y-4">
              {[
                {
                  title: "Omnichannel Dashboard",
                  content: "Manage all your direct communication from one place. Save time and improve results with a consistent brand experience across channels.",
                },
                {
                  title: "Automated Workflows",
                  content: "Reduce your workload with automated communication workflows. Do CRM, build customer journeys and track everything along the way.",
                },
                {
                  title: "Multi-Agent Dashboard",
                  content: "Simplify sales, support and service for you and your team. Label chats, track performance and respond faster together.",
                },
                {
                  title: "Optimise & Scale",
                  content: "Scale up or down, switch channels as needed. Test what works using analytics and grow with data-driven decisions.",
                },
              ].map((item, index) => (
                <div key={index}>
                  {/* Clickable Title Box */}
                  <div
                    onClick={() => handleToggle(index)}
                    className={`cursor-pointer text-white p-4 rounded-xl transition-colors duration-300 ${activeIndex === index ? 'bg-[#8a27c4]' : 'bg-[#c376f0]'
                      }`}
                  >
                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl sub-heading">{item.title}</h3>
                    {/* Expandable Content */}
                    {activeIndex === index && (
                      <div className="bg-white text-black p-4 rounded-xl mt-2">
                        <p className='text-base md:text-lg text-gray-600 font-medium pera'>{item.content}</p>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 3nd */}

      {/* 4nd */}
      <div className='bg-[#f7ebfc] py-10 md:py-16 pt-10 md:pt-16 '>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 md:px-15 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold text-white sm:text-3xl md:text-4xl heading">
              Need Help?
            </h2>
            <p className="text-sm md:text-lg text-white font-light pera mt-2">
              Get in touch!
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end ">
            <div className="flex flex-col sm:flex-row gap-6 items-center">

              <UniversalButton
                label="Contact us"
                variant="transitionbtn"
                className="px-4 py-2 rounded-full text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300 "
                onClick={handleShowFormPopup}
              />
              <FormPopup
                visible={openDialog}
                onHide={handleCloseDialog}
              />

              {/* <Link href="#" to="/whatsapp-business-platform">
                <UniversalButton
                  label="Chat With Us"
                  variant="transitionbtn"
                  className="px-4 py-2 rounded-full text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300"
                />
              </Link> */}
            </div>
          </div>

        </div>
      </div>
      {/* 4nd */}

      {/* 5th */}
      <div className="bg-[#F7EBFC] py-2 md:py-10 px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 heading">
            Services Offered Across Industries
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
          <div className="lg:w-1/2 lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sub-heading">
              {tabContent[activeTabs]?.title || "E-Commerce"}
            </h2>
            <p className="text-lg text-gray-600 pera mb-6">
              {tabContent[activeTabs]?.description || "Recover abandoned carts, automate updates, and turn broadcasts into conversations with Click-to-WhatsApp ads."}
            </p>
            <div className="mb-6">
              <p className="font-semibold text-gray-800 text-xl  sub-heading mb-2">Use Cases:</p>
              <ul className="list-disc list-inside pera text-gray-700 text-base space-y-1">
                {useCases.map((useCase, idx) => (
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
                src={tabContent[activeTabs]?.image || "/assets/industries/ecommerce.png"}
                alt={tabContent[activeTabs]?.title || "Industry"}
                className="rounded-lg w-full h-full"
              // loading="auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 5th */}
      {/* 6nd */}
      <div className="w-full px-4 py-3 md:py-10 bg-[#f7ebfc]">
        <div className="text-center px-4 pb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 heading">
            Learn & Lead! Read Our Blogs
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

                <p className="text-gray-600 text-sm pera">{post.date}</p>
                <h3 className="font-semibold text-lg text-gray-800 mt-2 mb-3 line-clamp-2 sub-heading">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 pera">
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
      </div>
      {/* 6nd */}
      {/* 7nd */}
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-10 md:py-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading mb-8">
            Celitix CPaaS FAQs
          </h2>

          <div className="bg-white rounded-xl py-4 px-2 sm:px-4">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  <h4 className="text-base md:text-xl font-medium text-gray-900 sub-heading">
                    {faq.question}
                  </h4>
                }
                // question={faq.question}
                answer={
                  <span className="text-sm md:text-lg font-semibold text-gray-700 pera">
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
      {/* 7nd */}
    </div>
  );
};

export default Product;
