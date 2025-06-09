"use client"
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { useRouter } from 'next/navigation'
import Image from 'next/image';


// import CarouselImg from "../components/common/carousel";
// import Parallax from "../components/common/Parallax";
// import About from "./company/About";
// import Pricing from "./Pricing";
// import ClientsScroll2 from "../extra-main/ClientsScroll2";
// import ANewWayto3 from "../extra-main/ANewWayto3";
// import ClickTwoCall from "./channels/ClickTwoCall";
// import Ibd from "./channels/Ibd";
// import MissedCall from "./channels/MissedCall";
// import Rcs from "./channels/Rcs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Careers from "./company/Careers";
// import { Helmet } from 'react-helmet-async';
// import { initScrollReveal } from "../utils/ScrollReveal";
import { Click_to_Call, Ecommerce1, Ecommerce2, Ecommerce3, Ecommerce4, Ecommerce5, Ecommerce6, Education1, Education2, Education3, Education4, Education5, Email_Solutions, Finance1, Finance2, Finance3, Finance4, Finance5, FoodBeverage_01, FoodBeverage_02, FoodBeverage_03, FoodBeverage_04, FoodBeverage_05, Healthcare1, Healthcare2, Healthcare3, Healthcare4, Healthcare5, home_reach, home_serve, home_solve, homesecond1, homesecond10, homesecond11, homesecond2, homesecond3, homesecond4, homesecond5, homesecond6, homesecond7, homesecond8, homesecond9, Inbound_Dialer, Missed_Call_Services, Outbound_Dialer, ProfessionalServices1, ProfessionalServices2, ProfessionalServices3, ProfessionalServices4, ProfessionalServices5, RCS_Business_Messaging, ReachApp, Reachclicktocall, Reachemail, Reachinboundcalling, ReachMissedcall, ReachObd, ReachRCS, ReachSMS, Reachwaytosms, Reachwhatsappicon, RealEstateConstruction1, RealEstateConstruction2, RealEstateConstruction3, RealEstateConstruction4, RealEstateConstruction5, rocket, SMS_Marketing, TechStartups1, TechStartups2, TechStartups3, TechStartups4, TechStartups5, TechStartups6, Travel1, Travel2, Travel3, Travel4, Travel5, Two_Way_SMS, WhatsApp_Business_Platform } from '../../public/assets/images';
import Link from "next/link";
// import FormPopup from "../components/FormPopup";
import { App_Authenticator } from "../../public/assets/images";
import UniversalButton from "./components/UniversalButton";
import FormPopup from "./components/FormPopup";
import OurClientele from "./components/OurClientele";
import FaqItem from "./components/Faq";



// export const metadata = {
//   title: "Celitix ",
//   description: "One Cloud-Powered Dashboard for All Your Business Communication. Unified Sales, Support, & Service.",
// };


const Home = () => {
  const router = useRouter()
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  const [isVisible, setIsVisible] = useState(false);
  // 1nd
  // 1nd
  // 2nd
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
  // 2nd
  // 3rd
  const [activeStep, setActiveStep] = useState("step1");
  const sectionRefs = useRef({});
  const steps = [
    {
      id: "step1",
      title: "Reach Smarter",
      subtitle: "Omnichannel Campaigns That Deliver",
      desc: "Turn broadcasts into conversations on Messaging and Voice calls.",
      point1: "Click-to-WhatsApp ads, chatbots, live chat & CRM in one place.",
      point2: "Personalised promotional messages- sent or automated, at scale.",
      point3: "Creative engagement campaigns that build your brand.",
      color: "text-[#9B44B6] transition-all duration-1000 ease-in-out",
      img: home_reach,
    },
    {
      id: "step2",
      title: "Serve Better",
      subtitle: "Customer Experience That Inspires Loyalty",
      desc: "Delight users with fast answers, smooth onboarding, and multiple options.",
      point1: "OTP-free verification, Click-to-Call, IVR systems & more.",
      point2: "Custom integrations across Messaging & Voice Calling. ",
      point3: "Tailored communication workflows for your industry.",
      color: "text-[#9B44B6]  transition-all duration-1000 ease-in-out",
      img: home_serve,
    },
    {
      id: "step3",
      title: "Solve Faster",
      subtitle: "Support That Feels Effortless",
      desc: "Respond, route, and resolve. Automated when possible, human when needed.",
      point1: "Custom IVR flows, chatbot & trigger-based responses.",
      point2: "Automated replies + human handoffs = faster outcomes.",
      point3: "One inbox for all direct channels: WhatsApp, SMS, RCS & Calls.",
      color: "text-[#9B44B6]  transition-all duration-1000 ease-in-out",
      img: home_solve,
    },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );

    steps.forEach((step) => {
      const el = sectionRefs.current[step.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const current = steps.find((s) => s.id === activeStep);
  // 3rd
  // 5rd

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
  // btn
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
  // btn
  // 5rd
  // 6rd
  const sectionData = {
    "E-Commerce": {
      features: [
        "Better ROAS",
        "Nurture Leads",
        "Promote Directly",
        "Simplify Logistics",
        "Support 24/7",
        "Get Feedback",
      ],
      image: [
        Ecommerce1,
        Ecommerce2,
        Ecommerce3,
        Ecommerce4,
        Ecommerce5,
        Ecommerce6,
      ],
      title: [
        "Click-to-WhatsApp Ads",
        "Cart Abandonment Recovery",
        "Personalised Offers & Recommendations",
        "Automatic Updates & OTPs",
        "Multi-Agent Live Chat & Chatbots",
        "Feedback & Review Collection",
      ],
      descriptions: [
        "Let users chat instantly from an ad. Connect them to Chatbots or agents. Shorten the path from interest to purchase.",
        "Automate reminders to recover lost sales and nudge customers along the journey. Get creative and build your brand.",
        "Share promotional messages, product recommendations, and engaging content. Use RCS, WhatsApp, SMS & more with API integrations..",
        "Confirm orders, verify users, or share updates. Email, WhatsApp, SMS, RCS, or Voice Call: Let customers choose what they want.",
        "Let customers reach a live agent after talking to a bot. Smooth, personal, fast, and efficient. Automate and focus on what matters.",
        "Ask users to post a review through a single-click link. Measure everything to improve your customer service.",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More"
      ],

    },
    Healthcare: {
      title: [
        "Notify in Real-Time",
        "Never Miss A Call Again",
        "Manage Patient Records",
        "Elevate The Patient Experience",
        "Remind, Reorder, and Deliver ",
      ],
      image: [
        Healthcare1,
        Healthcare2,
        Healthcare3,
        Healthcare4,
        Healthcare5,
      ],
      features: [
        " Automatic Updates",
        "Improved Care",
        "Gather Data",
        "Support Patients",
        "Medical Orders",
      ],
      descriptions: [
        "Prescription refills, appointment reminders, rescheduling, report sharing, etc. Automate the process with developer-friendly APIs. ",
        "Let patients make bookings, reschedule, or solve queries. Do it through RCS, WhatsApp, or Voice Calling.",
        "Collect information using Chatbots and organise remote consultations. Integrate with existing electronic medical record systems.",
        "Share supporting information, guidelines, and resources. Offload work while giving your patients more ways to engage.",
        "Enhance pharmaceutical success and build patient loyalty. Ensure positive experiences with strict opt-in consent.",
      ],
      desbutton: [
        "Explore More",
        "Explore More",
        "Explore  More",
        "Explore More",
        "Explore More",
      ],
    },
    BFSI: {
      title: [
        "First Impressions Matter",
        "Critical Updates Guaranteed",
        "Inform, Promote, & Delight",
        "2FA, OTP & OTP-Free",
        "Build Trust & Drive Action",
      ],
      image: [
        Finance1,
        Finance2,
        Finance3,
        Finance4,
        Finance5,
      ],
      features: [
        "Onboarding",
        "Transaction Alerts",
        "Notifications",
        "Secure Verification",
        "Engagement",
      ],
      descriptions: [
        "Guide users through KYC, welcome messages, and account setup with automated, easy-to-use flows.",
        "Send instant alerts for payments, transfers, or balance changes via SMS, WhatsApp, or voice call.",
        "Update customers on their loan application’s progress or introduce your new credit card. Essential for policy renewals and EMI payments.",
        "Protect logins and actions with fast, reliable two-factor authentication and multi-channel OTPs. Improve UX with OTP-free verification.",
        "Re-engage users through offers, alerts, or educational messages. Simplify connection with Click-to-Call buttons.",

      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",

      ],
    },
    Education: {
      title: [
        "Remind on WhatsApp",
        "Share Documents Securely",
        "Attract with RCS",
        "Update on SMS",
        "24/7 Chatbots",
      ],
      image: [
        Education1,
        Education2,
        Education3,
        Education4,
        Education5,
      ],
      features: [
        "Fee Payments",
        "Result Notifications",
        "Announcements",
        "Track Attendance",
        "Admission Queries",
      ],
      descriptions: [
        "Send automated payment reminders to parents, right where they are. Reduce delays and help parents plan better.",
        "Deliver exam results directly to students and parents with automatic updates. Improve your institution’s brand image.",
        "Send rich, branded messages for events, celebrations, or community efforts. Grab attention and get people talking.",
        "Inform parents when a student is absent or confirm attendance through two-way SMS. Automate attendance updates.",
        "Without staff involvement, answer common questions about courses, fees, or deadlines.",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },
    Travel: {
      title: [
        "Help Guests on Every Step",
        "Guide Travellers 24/7",
        "Stress-Free Assurity",
        "Inspire Adventures",
        "Reward Longtime Guests",
      ],
      image: [
        Travel1,
        Travel2,
        Travel3,
        Travel4,
        Travel5,
      ],
      features: [
        " Booking Support",
        "Chatbot Travel Guides",
        "Share location updates",
        "Deals & Promotions",
        "Loyalty program ",
      ],
      descriptions: [
        "Offer instant chat support before, during, or after booking. Let users confirm stays, request help, or even order food, all in one chat.",
        "Use chatbots to answer questions, share tips, and help users plan trips! A happy traveller is a lifelong customer.",
        "Send real-time reminders for check-ins, gate changes, or itinerary tweaks. Confusion-free, automated, and on time.",
        "Share curated getaways, exciting offers, limited deals, or seasonal packages. Invite guests to their preferred events. Whenever, wherever.",
        "Send loyalty point updates, birthday offers, and feedback forms post-trip. Build better journeys with every conversation.",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },
    "Real Estate": {
      title: [
        "Handle More Inquiries",
        "Simplify Visits & Handovers",
        "Build Sales Journeys",
        "Track and Engage",
        "Update Supervisors",
      ],
      image: [
        RealEstateConstruction1,
        RealEstateConstruction2,
        RealEstateConstruction3,
        RealEstateConstruction4,
        RealEstateConstruction5,
      ],
      features: [
        "Sell Properties",
        "Booking & Paperwork",
        "Lead Follow-ups",
        "CRM & Analytics",
        "Site Coordination ",
      ],
      descriptions: [
        "Share listings, brochures, prices, and media with WhatsApp chatbots or RCS campaigns. Integrate Missed Call services or 2-way SMS.",
        "Help buyers schedule visits, upload docs, and get updates through automated chats or onboarding resources with rich media.",
        "Use custom workflows to follow up, share content, and nurture leads across messaging and voice calling channels.",
        "Organise contacts into networks of agents, managers, and buyers. Track response rates and personalise engagement.",
        "Automate quick reminders, alerts, or follow-ups to contractors, architects & site managers. Keep timelines on track over WhatsApp. ",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },
    "Tech Startups": {
      title: [
        "Unique Products, Unique Journeys",
        "Trigger Messages From Your App",
        "Support, Sales, & Operations in Sync",
        "Track, Test, and Improve",
        "Send Offers That Convert",
        "Be Consistent Across Channels",
      ],
      image: [
        TechStartups1,
        TechStartups2,
        TechStartups3,
        TechStartups4,
        TechStartups5,
        TechStartups6,
      ],
      features: [
        " Custom Workflows",
        "API Integrations",
        "Multi-Agent Access",
        " Unified Analytics",
        "Effective Promotions ",
        " Better User Experience",
      ],
      descriptions: [
        "From onboarding to lead nurture, create dynamic user journeys across Messaging and Voice channels.",
        "Connect your platform to Celitix and send real-time alerts, reminders, or updates. Instant and automatic. Set it up once, sit back, and scale. ",
        "All your direct communication channels in one cloud-powered inbox. Sales, support, & service teams can access it anytime, anywhere.",
        "Know exactly which messages drive results, down to the rupee. Optimise every touchpoint with real-time campaign data.",
        "Run targeted, opt-in promotions across channels. Promote flash sales, seasonal deals, or feature unlocks, wherever users prefer.",
        "Combine chat and voice calling with helpful bots, rich content, and branded flows. Share engaging content, FAQs, how-tos, and product guides. ",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },
    "Food Industry": {
      title: [
        "Upgrade Your WhatsApp",
        "Reward Regulars",
        "Elevate Your Brand",
        "Sell Smarter. Support Faster.",
        "Connect With People",
      ],
      image: [
        FoodBeverage_01,
        FoodBeverage_02,
        FoodBeverage_03,
        FoodBeverage_04,
        FoodBeverage_05,
      ],
      features: [
        "Manage Orders ",
        "Loyalty Programs",
        "Story-Driven Campaigns",
        " CRM & Chatbot",
        "Build Community ",
      ],
      descriptions: [
        "Rely less on third-party apps. Take orders, automate updates, and more from a Verified Profile. Ideal for Caterers and Cloud Kitchens.",
        "Delight repeat buyers with exclusive offers, points, and rewards. Give them more reasons to stay with a loyalty program.",
        "Share rich, on-brand content that connects culture to cravings. Catalogues, playlists, or bite-sized food stories.",
        "Use chatbots for auto-replies, handle queries across your team, and segment your customers for personalised offers that work.",
        "Collect numbers at checkout, send a form on WhatsApp, and build real connections with groups, newsletters, and shared moments. ",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },
    "Service-Based": {
      title: [
        "Automate Appointments",
        "Effective Custom Workflows",
        "Keep Clients in the Loop",
        "Scale Your Sales Process",
        "Build Reputation, Gain Trust",
      ],
      image: [
        ProfessionalServices1,
        ProfessionalServices2,
        ProfessionalServices3,
        ProfessionalServices4,
        ProfessionalServices5,
      ],
      features: [
        " Handle Bookings",
        "CRM & Lead Gen",
        "Service Updates",
        " Automate Sales",
        "Feedback & Reviews ",
      ],
      descriptions: [
        "Send time slots, confirmations, and reminders over WhatsApp or SMS. Create a smoother onboarding process at scale.",
        "Run ads that send leads straight to your CRM. Build your perfect communication workflow. Track every step, your way.",
        "Send reminders, rescheduling options, invoices, and project updates on multiple channels. All from one place.",
        "Send catalogues, success stories, or scheduled promos through chatbots, messages and more. Build your brand with rich media.",
        "Systematically ask for reviews on Google and other business listings. Gather testimonials and build a profile or improve your service. ",
      ],
      desbutton: [
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
        "Learn More",
      ],
    },

  };

  const industryList = Object.keys(sectionData);

  const SectionLayout = ({ image, features, descriptions, desbutton, title }) => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
      <div className="bg-[#fff] rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center shadow-xl transition-all duration-300 mb-2">
        <div className="flex flex-col gap-3 bg-[#f7f6f6] rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
          {features.map((feature, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`text-left px-4 py-2 rounded-xl font-medium transition-all duration-200 sub-heading ${idx === activeFeature
                ? "bg-[#803B96] text-white shadow-md"
                : "text-gray-700 hover:bg-[#803B96] hover:text-white hover:shadow"
                }`}
            >
              {feature}
            </button>
          ))}
        </div>

        <div className="flex justify-center h-96">
          <Image
            src={image[activeFeature]}
            alt="Preview"
            className="w-[260px] sm:w-[300px] drop-shadow-md hover:scale-105 transition-transform duration-300"
          // loading="auto"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A] mb-4 leading-snug heading">
            {title[activeFeature]}
          </h2>
          <p className="text-gray-700 mb-6 pera">
            {descriptions[activeFeature]}
          </p>
          <UniversalButton
            label={desbutton[activeFeature]}
            variant="brutal"
            className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
            onClick={() => handleFeatureRedirect(activeIndustry, activeFeature)}
          />
          {/* <button className="bg-[#F2542D] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#d84323] transition">
            {desbutton[activeFeature]}
          </button> */}

          {/* <div className="flex flex-wrap items-center gap-6 mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/UNICEF_Logo.png/320px-UNICEF_Logo.png"
                alt="unicef"
                className="h-6"
              />
              <img src="https://oladoc.com/images/logo.svg" alt="oladoc" className="h-6" />
              <img src="https://medicover.com/media/1374/logo.png" alt="medicover" className="h-6" />
              <img
                src="https://www.mediclinic.com/-/media/project/mediclinic/logos/mediclinic-international-logo.png"
                alt="mediclinic"
                className="h-6"
              />
            </div> */}
        </div>
      </div>
    );
  };

  const handleFeatureRedirect = (industry, index) => {
    const routes = {
      Ecommerce: [
        '/retail-and-ecommerce',
        '/retail-and-ecommerce',
        '/retail-and-ecommerce',
        '/retail-and-ecommerce',
        '/retail-and-ecommerce',
        '/retail-and-ecommerce',
      ],
      Healthcare: [
        '/healthcare',
        '/healthcare',
        '/healthcare',
        '/healthcare',
        '/healthcare'
      ],
      Finance: [
        '/financial-services',
        '/financial-services',
        '/financial-services',
        '/financial-services',
        '/financial-services'
      ],
      Education: [
        '/education-and-edtech',
        '/education-and-edtech',
        '/education-and-edtech',
        '/education-and-edtech',
        '/education-and-edtech'
      ],
      Travel: [
        '/travel-and-tourism',
        '/travel-and-tourism',
        '/travel-and-tourism',
        '/travel-and-tourism',
        '/travel-and-tourism'
      ],
      RealEstateConstruction: [
        '/construction-and-real-estate',
        '/construction-and-real-estate',
        '/construction-and-real-estate',
        '/construction-and-real-estate',
        '/construction-and-real-estate'
      ],
      FoodBeverage: [
        '/food-and-beverages',
        '/food-and-beverages',
        '/food-and-beverages',
        '/food-and-beverages',
        '/food-and-beverages'
      ],
      ProfessionalServices: [
        '/professional-services',
        '/professional-services',
        '/professional-services',
        '/professional-services',
        '/professional-services'
      ],
      TechStartups: [
        '/tech-startups',
        '/tech-startups',
        '/tech-startups',
        '/tech-startups',
        '/tech-startups',
        '/tech-startups'
      ]
    };

    const route = routes[industry]?.[index];
    if (route) router.push(route);
    else console.warn('No route defined for:', industry, index);
  };

  const [activeIndustry, setActiveIndustry] = useState("E-Commerce");
  const { image, features, descriptions, desbutton, title } = sectionData[activeIndustry];
  // 6rd
  // 7rd
  const blogPosts = [
    {
      date: "September 16, 2024",
      title: "Generative AI security: How to keep your chatbot healthy and your platform protected",
      description:
        "Discover essential strategies to secure AI chatbots from evolving GenAI threats. Learn how to protect your AI investments now and keep them healthy and thriving.",
      tags: ["BLOG", "GENRATIVE AI", "CUSTOMER SECURITY", "BEST PRACTICES"],
      img: "src/assets/images/blog-1.png",
      color: "bg-orange-50",
    },
    {
      date: "September 5, 2024",
      title: "What is conversational AI? Examples and how it works",
      description:
        "Get a grasp on what Conversational AI actually is, with examples how it improves customer engagement and streamlines business operations.",
      tags: ["BLOG", "CONVERSATIONAL EXPERIENCE", "BEST PRACTICES"],
      img: "src/assets/images/blog-2.png",
      color: "bg-blue-50",
    },
    {
      date: "August 14, 2024",
      title: "Chatbots for HR: Transforming employee engagement and operations",
      description:
        "Learn how to keep employees satisfied and engaged with an always-on assistant to support HR departments manage daily tasks and requests.",
      tags: ["BLOG", "BEST PRACTICES"],
      img: "src/assets/images/blog-3.png",
      color: "bg-green-50",
    },
    {
      date: "July 10, 2024",
      title: "AI in Healthcare: Improving Patient Experience",
      description:
        "From virtual assistants to smart diagnostics, learn how AI is revolutionizing healthcare delivery and improving patient satisfaction.",
      tags: ["BLOG", "HEALTHCARE", "AI"],
      img: "src/assets/images/blog-4.png",
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
      question: "What is Celitix?",
      answer:
        "Celitix is a business communication platform (CPaaS) that connects you with customers across WhatsApp, SMS, RCS, Voice, and more, all from one place.",
    },
    {
      question: "Who is Celitix for?",
      answer:
        "It’s for any business that talks to customers: from banks and hospitals to e-commerce brands, service providers, and tech startups.",
    },
    {
      question: "What can Celitix do?",
      answer:
        "Celitix lets you automate reminders, send secure updates, support users, and boost engagement using multi-channel messaging.",
    },
    {
      question: "How does Celitix help businesses grow?",
      answer:
        "Celitix simplifies communication, reduces manual work and turns routine messages into strategic touchpoints that drive results.",
    },
    {
      question: "How do I get started with Celitix?",
      answer:
        "Book a quick demo with our team. We’ll show you how it works, how to integrate it with your tools, and help your day-to-day.",
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


  const hero = "/assets/videos/mainvideo.mp4"
  return (
    <div className="bg-[#f6edf9]">
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 10, // above background, below/around content
      }}>
        <OurClientele num={5} />
      </div>


      {/* <Header /> */}
      {/* <Helmet>
        <title>Celitix - CPaaS for Omnichannel Communication</title>
        <meta name="description" content=" One Cloud-Powered Dashboard for All Your Business Communication. Unified Sales, Support, & Service." />
        <link rel="preload" as="image" href={homehero} crossorigin="anonymous" />
      </Helmet> */}
      {/* 1nd */}

      <div className="w-full  pt-35 relative z-20">

        <div className="text-center px-4 py-2 md:py-20 space-y-4 box-reveal-bottom">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 heading md:mb-10 mb-1">
            All-in-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Communication </span> Platform
          </h1>

          <p className="text-md md:text-lg lg:text-2xl font-semibold text-gray-700 sub-heading md:mb-10 mb-1">
            Celitix connects businesses with people. Run promotional campaigns, manage leads,<br /> engage automatically and provide personalised support - all from one place!
          </p>
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            <UniversalButton
              label="Talk to Expert"
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] mb-2"
              onClick={handleShowFormPopup}
            />
            <FormPopup
              visible={openDialog}
              onHide={handleCloseDialog}
            />
          </div>
        </div>


      </div>

      {/* 1nd */}
      <div className="bg-[#F6EDF9] py-2 sm:py-8 md:py-10">
        <div className="lg:px-15 md:px-10 px-2 w-full py-5 md:py-20">
          <video
            className="w-full h-auto rounded-2xl z-30 "
            src={hero}
            key={hero}
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"

            title="All-in-One Communication Platform"
            alt="All-in-One Communication Platform"
          >
            {/* <source src="/assets/videos/Hero.mp4" type="video/mp4" /> */}
          </video>
        </div>
      </div>
      {/* 2nd */}
      <div className="Second bg-[#D8E3F5] py-2 md:py-15">
        {/* <div className="text-center px-4 pb-5 md:pb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 popf">
            Our Clientele
          </h2>
        </div> */}
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
              <SwiperSlide key={index} style={{ width: 'auto' }}>
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
      {/* 2nd */}
      {/* 3nd */}
      <div className="w-full bg-[#f6edf9] relative lg:h-[400vh]">
        <div className="absolute inset-0 z-0">
          {steps.map((step) => (
            <div
              key={step.id}
              id={step.id}
              ref={(el) => (sectionRefs.current[step.id] = el)}
              className="md:h-200 h-0"
            />
          ))}
        </div>

        <div className="sticky top-0 h-200 md:h-screen flex items-center bg-[#f6edf9] z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20 max-w-7xl mx-auto px-0 w-full items-center">
            <div className="w-full h-auto rounded-[2rem] overflow-hidden border-gray-200 p-2 lg:p-10">
              <Image
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
                // loading="auto"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
              />
            </div>

            <div className=" ">
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <div
                    key={step.id}
                    role="button"
                    onClick={() => setActiveStep(step.id)}
                    className="transition duration-500 cursor-pointer"
                  >
                    <h3
                      className={`text-3xl md:text-4xl lg:text-6xl transition-all font-semibold duration-1000 ease-in-out lora ${isActive ? step.color : "text-gray-600 heading"} rounded-full p-4`}
                    >
                      {step.title}
                    </h3>

                    <div
                      className={`transition-all duration-1000 ease-in-out transform overflow-hidden ${isActive
                        ? "opacity-100 max-h-[200] md:max-h-[250px] translate-y-0 scale-100 rounded-lg p-4"
                        : "opacity-0 max-h-0 -translate-y-2 scale-95 pointer-events-none"
                        }`}
                    >
                      <h4 className="text-base lg:text-2xl font-medium text-gray-900 mb-1 sub-heading">
                        {step.subtitle}
                      </h4>
                      {/* <p className="text-gray-600 text-sm lg:text-base leading-relaxed pera">
            {step.desc}
          </p> */}
                      <ul className="list-disc list-inside text-gray-600 pera space-y-1 mt-2 pl-2">
                        <li>{step.point1}</li>
                        <li>{step.point2}</li>
                        <li>{step.point3}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>



            {/* <div className=" ">
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <div
                    key={step.id}
                    role="button"
                    onClick={() => setActiveStep(step.id)}
                    className="transition duration-500 cursor-pointer"
                  >

                    <h3
                      className={`text-3xl md:text-4xl lg:text-6xl mb-2 transition-all font-semibold duration-1000 ease-in-out lora ${isActive ? step.color : "text-gray-600 heading"
                        }`}
                    >
                      {step.title}
                    </h3>


                    <div
                      className={`transition-all duration-1000 ease-in-out transform overflow-hidden ${isActive
                        ? "opacity-100 max-h-[200] md:max-h-[170px] translate-y-0 scale-100 mb-3"
                        : "opacity-0 max-h-0 -translate-y-2 scale-95 pointer-events-none"
                        }`}
                    >
                      <h4 className="text-base lg:text-2xl font-medium text-gray-900 mb-1 sub-heading ">
                        {step.subtitle}
                      </h4>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed pera ">
                        {step.desc}
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2 pl-2">
                        <li>{step.point1}</li>
                        <li>{step.point2}</li>
                        <li>{step.point3}</li>
                      </ul>

                    </div>
                  </div>
                );
              })}
            </div> */}

          </div>
        </div>
      </div>
      {/* 3nd */}
      {/* 4nd */}
      <div className='relative bg-linear-to-r from-[#6b0da1] to-[#8447c6] '>
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 md:w-32 md:h-32"
          initial={{ x: 0, y: 0, rotate: 0, scale: 0.8 }}
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
            scale: [0.8, 0.7, 0.8]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={rocket}
            alt="Rocket"
            className="w-full h-full object-contain"
            width={600}
            height={400}

          />
        </motion.div>
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-auto md:h-40 w-full px-4 py-6">

          <div className="flex flex-col justify-center items-center md:items-start text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-50 heading">
              Start Now
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-50 font-light mt-2 max-w-xl sub-heading">
              Connect now for a free consultation. Learn how Celitix can help.

            </p>
          </div>

          <div className="flex md:justify-end justify-center items-center text-left gap-2 md:mt-0 mt-5">
            <div>

              {/* <motion.div
      whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0px 8px 15px rgba(0,0,0,0.3)' }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <UniversalButton
        label="Book A Demo"
        variant="transitionbtn"
        className="px-4 py-2 rounded-xl text-black-50 bg-white"
        onClick={handleShowFormPopup}
      />
    </motion.div> */}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <UniversalButton
                  label="Book A Demo"
                  variant="transitionbtn"
                  className="px-4 py-2 rounded-xl text-black-50 bg-white"
                // onClick={handleShowFormPopup}
                />
              </motion.div>

              {/* <FormPopup
                visible={openDialog}
                onHide={handleCloseDialog}
              /> */}

              {/* <UniversalButton label="Book A Demo" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]'/> */}
            </div>
            <div>
              {/* <Link href="#" to="/book-a-demo">
                <UniversalButton
                  label="Chat With Us"
                  variant="transitionbtn"
                  className="px-4 py-2 rounded-xl text-black-50 bg-[#ffffff] sm:px-4 sm:py-2 "
                />
              </Link> */}
              {/* <UniversalButton label="Chat With Us" variant="brutal" className='bg-[#8e9dbe] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]'/> */}
            </div>
          </div>
        </div>
      </div>
      {/* 4nd */}
      {/* 5nd */}
      <div className="bg-[#F6EDF9] py-2 sm:py-8 md:py-10">

        <div className="text-center px-4 sm:px-6 md:px-8 py-4 md:py-5">
          <h2 className="text-2xl md:4xl lg:text-5xl font-semibold text-gray-900 heading">
            Reach Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Wherever</span> They Are
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
                  ? 'bg-[#ffffff] text-[#a535d1]'
                  : 'hover:bg-gray-100 text-black sub-heading'
                  }`}
              >
                <Image src={service.icon} alt={service.name} className="h-8 w-8" />
                <span className="font-medium">{service.name}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="flex flex-col items-center justify-center text-center gap-4 px-4 sm:px-6 md:px-10">
            <Image
              src={activeService.content.image}
              alt={activeService.name}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
            <p className="text-gray-600 text-base md:text-lg font-medium pera">{activeService.content.desc}</p>

            <UniversalButton label={activeService.content.ButtonName} variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]' onClick={handleservices} />
            {/* <button className="bg-purple-800 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              {activeService.content.ButtonName}
            </button> */}
          </div>
        </div>
      </div>
      {/* 5nd */}
      {/* 6nd */}
      <div className="bg-[#F6EDF9] py-2 md:py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-4 pb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 heading">
              Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Perfect Communication </span> Workflow
            </h2>
            {/* <p className="text-base lg:text-2xl font-semibold text-gray-700 sub-heading">
            Automate Your Perfect Communication Workflow
          </p> */}
          </div>
          {/* <div className="flex flex-wrap justify-center gap-4 mb-10 bg-[#F7F6F6] px-4 py-3 rounded-xl shadow-md border border-gray-200">

          {industryList.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${industry === activeIndustry
                  ? "bg-[#9B44B6] text-white shadow-lg scale-105"
                  : "text-gray-600 hover:bg-[#9B44B6] hover:text-white hover:shadow"
                }`}
            >
              {industry}
            </button>
          ))}
        </div> */}

          <div className="flex overflow-x-auto whitespace-nowrap scrollbar gap-4 mb-10 bg-[#F7F6F6] px-4 py-3 rounded-xl shadow-md border border-gray-200">
            {industryList.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full font-medium shrink-0 transition-all duration-200 sub-heading ${industry === activeIndustry
                  ? "bg-[#9B44B6] text-white shadow-lg scale-105"
                  : "text-gray-600 hover:bg-[#9B44B6] hover:text-white hover:shadow"
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <SectionLayout
            image={image}
            features={features}
            descriptions={descriptions}
            desbutton={desbutton}
            title={title}
          />
        </div>
      </div>
      {/* 6nd */}
      {/* 7nd */}
      {/* <div className="w-full px-4 py-2 md:py-10 bg-[#f4f7fb]">
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
                  <img
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
      </div> */}
      {/* 7nd */}
      {/* 8nd */}
      <div className=" bg-[#F6EDF9] flex justify-center items-center py-2 md:py-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Celitix</span> FAQs
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
                  <span className="text-sm md:text-md font-semibold text-gray-700 pera">
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
      {/* 8nd */}




      {/* <Rcs/> */}
      {/* <Ibd/> */}
      {/* <About/> */}
      {/* <ANewWayto3/> */}
      {/* <MissedCall/> */}
      {/* <OurClientele/> */}
      {/* <ClickTwoCall/> */}
      {/* <ClientsScroll2/> */}























      {/* <OurClientele /> */}
      {/* <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
       <UniversalButton label="primary" variant="primary" className='relative z-10 transition-all duration-300 group-hover:text-white px-2 py-1 font-semibold mb-2' />
       <UniversalButton label="Transition" variant="transitionbtn" className='relative z-10 transition-all duration-300 group-hover:text-white px-2 py-1 font-semibold mb-2' />
      <UniversalButton label="Draw" variant="draw" className='px-2 py-1 font-semibold text-white mb-2' />
       <UniversalButton label="Brutal" variant="brutal" className='px-2 py-1 font-semibold uppercase text-black mb-2'/>
       <UniversalButton label="Glow" variant="glow" className='px-4 py-1 font-semibold text-white mb-2' />
     </div> */}

      {/* Hero Section start here */}
      {/* <div className="bg-blue-100 p-6 rounded-b-4xl">
        <div className="flex justify-center items-center mt-20  ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl font-old text-gray-800 flex justify-center items-center popf">
              All in One Platform{" "}
            </h1>
            <p className="text-2xl mt-6 popf">
              Capture leads. Manage CRM , Engage, Sell, Support - all in one
              place{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-15 ">
          <UniversalButton
            label="Talk To Expert"
            variant="transitionbtn"
            className="px-4 py-2 font-semiBold text-black rounded-2xl"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-25 shadow-xl rounded-xl p-40 border-gray-300 ml-40 mr-40">
        <h1 className="">For Video</h1>
      </div>

      <div className="mt-10 justify-center items-center ml-10 mr-10">
        <CarouselImg />
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-row justify-between items-center  border-2 border-gray-300 p-2 w-50 h-20">
          <h2 className="text-xl font-bold text-gray-600 flex justify-center text-center popf">
            A New Way to{" "}
          </h2>
        </div>
      </div>

      <div className="mt-10 min-h-screen flex justify-center items-center  ">
        <Parallax />
      </div>

      <div className="bg-[#7951ad] h-50 w-full mb-10">
        <div className="flex justify-center items-center gap-58">
          <div className="flex flex-col justify-start items-left mt-16">
            <h2 className="text-4xl text-gray-50 gap-4 font-bold popf">
              Start Now
            </h2>
            <p className="text-xl text-gray-50 font-light popf">
              Connect with us for a free consultation. Learn how Celitix can
              help you.
            </p>
          </div>
       

          <div className="flex flex-row gap-3 items-end justify-end mt-16 ">
            <div className="flex justify-end items-end ">
              <UniversalButton
                label="Book A Demo"
                variant="transitionbtn"
                className="px-4 py-2 rounded-xl text-gray-50  bg-[#1f1119] "
              />
            </div>
            <div className="flex justify-end items-end ">
              <UniversalButton
                label="Chat With Us"
                variant="transitionbtn"
                className="px-4 py-2 rounded-xl text-gray-50  bg-[#1f1119]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Reach Customers Wherever They Are
        </h2>
      </div>

      <div className="flex justify-between items-center">
        <div className=" shadow-xl rounded-xl  border-gray-300 w-80 h-max-content bg-blue-50 ml-30">
          <div className="flex flex-col justify-center items-center ">
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2 ">
                WhatsApp Business Platform
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                RCS Business Messaging
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                SMS Marketing
              </h3>
            </button>
            <button className="">
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                2 Way SMS
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                Inbound Dialer
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                Outbound Dialer
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                Missed Call Service
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                Click To Call
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                App Authenticator
              </h3>
            </button>
            <button>
              <h3 className="flex justify-center items-center mt-5 text-lg font-bold text-gray-800 hover:bg-purple-300 px-2">
                Email Solutions
              </h3>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-purple-200 rounded-t-4xl p-6 ">
              <div className="max-w-content ">
                <img
                  src="https://images.unsplash.com/photo-1642724978770-e27d781662d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fFJDUyUyMEJ1c2luZXNzJTIwTWVzc2FnaW5nfGVufDB8fDB8fHww"
                  alt="Whatsapp Business Message"
                  className="relative   w-90 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Leverage the world’s #1 messaging app. With advanced features
                like Chatbots, Click-to-WhatsApp ads, Branded Profiles, and
                more.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Start Now"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-purple-200 rounded-t-4xl p-6 ">
              <div className="max-w-content ">
                <img
                  src="https://plus.unsplash.com/premium_photo-1684761949804-fd8eb9a5b6cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="RCS Business Message"
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Rich, interactive messaging on native mobile apps. Shoot epic
                promotions, update and support users with action buttons, rich
                media and more!
              </p>
            </div>
            <div>
              <UniversalButton
                label="Explore"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img src="https://plus.unsplash.com/premium_photo-1683865776168-001a4dd1d80b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SMS Marketing"
                 className="relative  w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Perfect for urgent updates and reliable delivery. OTPs,
                Transactional messages, Bulk Promotions, and API Integrations
              </p>
            </div>
            <div>
              <UniversalButton
                label="Learn More"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img src="https://plus.unsplash.com/premium_photo-1720503242868-4ef325ea70bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2Way SMS"
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div mt-5>
              <p className="text-sm text-gray-800 font-medium popf ">
                Create engaging, interactive SMS campaigns. Take votes, run
                quizzes, get confirmations, and generate leads!
              </p>
            </div>
            <div>
              <UniversalButton
                label="Get Started"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
              <div className="max-w-content ">
                <img src="https://images.unsplash.com/photo-1496679952711-39f38207d554?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Inbound Dialer"
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Never miss a call again with customisable IVR menus, smart
                routing, and call records. Perfect for customer support
                helplines.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Learn More"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img src="https://media.istockphoto.com/id/2199349249/photo/man-holding-a-smartphone-with-missed-call-and-new-message-notification-on-the-phone-screen.jpg?s=2048x2048&w=is&k=20&c=ZjenHo2zsxauMo-fYTBodbD6qxJgPl_a3jrh4Ni629M=" alt="Outbound Di"
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Start conversations with bulk voice call campaigns and IVR
                integrations. Pre-record audios in local languages or use
                AI-generated text-to-speech
              </p>
            </div>
            <div>
              <UniversalButton
                label="Explore"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img 
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Get leads, votes or confirmations with a dedicated missed call
                number. Auto trigger opt-ins, callbacks, or custom actions when
                users call.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Start Now"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img 
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Enhance your app or site’s user experience (UX). Customers can
                connect instantly, request a callback or leave a message.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Know More"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img 
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Verify users with or without OTPs. Frictionless security that’s
                user-friendly and easier for your dev team.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Explore"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-purple-200 rounded-t-4xl p-6 ">
          <div className="max-w-content ">
                <img 
                  className="relative   w-80 h-90 top-10 rounded-t-xl"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-800 font-medium popf ">
                Send OTPs, promos, and beautiful HTML emails. Great for
                transactional alerts, newsletters, and campaign blasts.
              </p>
            </div>
            <div>
              <UniversalButton
                label="Check It OUt"
                variant="transitionbtn"
                className="px-4 py-2 font-semiBold text-black rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default Home;
