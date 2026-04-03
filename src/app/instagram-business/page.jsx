"use client";
import React, { useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { Helmet } from 'react-helmet-async';
import {
  Authenticationicon,
  Click2callicon,
  CommentControl,
  contentManagement,
  ContentPostManagement,
  CreatePublishContent,
  CTALASTIMAGE,
  Emailicon,
  IBDicon,
  InsightsAnalytics,
  InsightsandAnalytics,
  InstagramBusinessPlatform,
  InstagramLiveChat,
  instagramlivechat,
  InstagramWorkflow,
  MeetCustomersWhatsapp,
  MissedCallicon,
  MultiAccountManagement,
  OBDicon,
  RCSicon,
  ReachCustomersinstagram,
  RichCampaigns,
  SmartCommentModeration,
  SMSicon,
  StandsOutInstagram,
  twoWaySMSicon,
  WhatsApp_Business_Platform,
  WhatsAppAPI,
  WhatsAppicon,
} from "../../../public/assets/images";
import Image from "next/image";
import Link from "next/link";
import FaqItem from "../components/Faq";
import FormPopup from "../components/FormPopup";
import UniversalButton from "../components/UniversalButton";
import { useRouter } from "next/navigation";

const Page = () => {
  // 3rd
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  // 3rd
  // 7rd
  const blogPosts = [
    {
      date: "September 16, 2024",
      title:
        "Generative AI security: How to keep your chatbot healthy and your platform protected",
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
  const router = useRouter();
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
      question:
        "What is Instagram automation, and why is it important for businesses?",
      answer:
        "Instagram automation helps businesses instantly respond to messages, manage conversations, and engage users at scale—improving response time, customer experience, and conversions.",
    },
    {
      question: "Can I manage multiple Instagram accounts from one platform?",
      answer:
        "Yes, Celitix allows you to manage multiple Instagram business accounts from a single dashboard, making it ideal for agencies and multi-brand businesses.",
    },
    {
      question: "How does Instagram live chat work?",
      answer:
        "Celitix provides a unified live chat interface where you can reply to DMs in real-time, send media, and manage conversations efficiently within the 24-hour messaging window.",
    },
    {
      question: "Can I automate replies to Instagram messages and comments?",
      answer:
        "Yes, you can automate replies using workflows, FAQs (icebreakers), and templates. You can also convert comments into private DMs to increase engagement.",
    },
    {
      question: "Can I use message templates for Instagram conversations?",
      answer:
        "Yes, Celitix provides ready-to-use templates with dynamic variables to personalize conversations and respond faster while maintaining consistency. ",
    },
    {
      question: "What kind of analytics does Celitix provide?",
      answer:
        "Celitix offers advanced analytics including engagement metrics, audience insights, and performance tracking to help you optimize campaigns and improve ROI.",
    },
    {
      question: "How does Celitix help improve Instagram engagement and sales?",
      answer:
        "With automation, faster responses, personalized messaging, and real-time interaction, Celitix helps businesses increase engagement, capture leads, and boost conversions.",
    },
  ];
  // 8rd

  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // extra section

  const tabs = [
    { key: "DM Automation", label: "DM Automation" },
    { key: "Live Chat", label: "Live Chat" },
    { key: "Comment Control", label: "Comment Control" },
    { key: "Insights & Analytics", label: "Insights & Analytics" },
  ];

  const tabData = {
    "DM Automation": {
      heading: "DM Automation",
      description:
        "You can reply, qualify leads, and help users with smart buttons when you use Instagram DM Automation. With our tool, you can engage users from discovery to purchase, cut down on response time, and never miss a potential customer. With personalized, real-time interactions, you can easily turn your customers' interests into actions.",
      image: contentManagement,
      isVideo: false,
    },
    "Live Chat": {
      heading: "Live Chat",
      description:
        "Provide real-time communication with a consistent Instagram chat interface. Organize conversations with active and inactive filters, check user profiles, and reply immediately within 24 hours. Improve customer experience and engagement by sharing rich media like images, videos, audio, and pre-approved templates.",
      image: InstagramLiveChat,
      isVideo: false,
    },
    "Comment Control": {
      heading: "Comment Control",
      description:
        "Empower your brand interactions with enhanced comment management features. However, you can respond to it publicly or privately, hide or delete unwanted comments, and manage a positive brand image. Go from comments to a DM conversation, as this builds engagement with your audience.",
      image: CommentControl,
      isVideo: false,
    },
    "Insights & Analytics": {
      heading: "Insights & Analytics",
      description:
        "Analytics dashboards provide you with an in-depth understanding of your Instagram performance. Monitor essential KPIs, understand how your audience behaves, and discover your best-performing content. Leverage filters like timeframe, engagement rate, and demographics to strategize and achieve continued growth.",
      image: InsightsandAnalytics,
      isVideo: false,
    },
  };

  const [activeTab, setActiveTab] = useState("DM Automation");

  // Destructure the current tab’s data in one go:
  const { heading, description, buttonText, image, isVideo } =
    tabData[activeTab];

  // extra section

  return (
    <div>
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-20">
          <div className="space-y-6 box-reveal-left">
            <div className="box-reveal-left">
              <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Instagram Business API
              </span>
            </div>

            <div className="box-reveal-left space-y-6">
              <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl heading  font-bold text-gray-900 popf leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  Grow your business
                </span>{" "}
                <br /> with Instagram automation
              </h1>

              <p className="text-gray-600 text-base md:text-lg ">
                Manage, automate, and grow your Instagram—All in one dashboard
                with Celitix. Schedule content, automate DMs, manage
                multi-account workflows, and track performance with real-time
                analytics.
              </p>

              <div className="flex flex-wrap gap-4">
                <UniversalButton
                  label="Book Demo"
                  variant="brutal"
                  className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                  onClick={handleShowFormPopup}
                />

                <FormPopup visible={openDialog} onHide={handleCloseDialog} />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <Image
              src={InstagramBusinessPlatform}
              alt="Whatsapp icon"
              // loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title="WhatsApp Business Platform"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-2xl object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-2 lg:py-10 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10 lg:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading mb-2">
            Reach Customers Where They Interact
          </h2>
          <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 text-justify">
            To find new brands and products, People head to Instagram. Celitix
            allows you to connect them instantly, respond faster, and automate
            conversations from one place so that you can enhance engagement and
            increase conversions.
          </p>
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={MultiAccountManagement}
                    alt="Showcase-Catalogues"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Multi-Account Management
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Easily connect, onboard, and manage multiple Instagram
                  business accounts from a single dashboard. No more switching
                  tabs or having to log in and out — manage all your brand pages
                  seamlessly from one place. Best for agencies and companies
                  managing multiple clients or brands.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ContentPostManagement}
                    alt="ClicktoWhatsAppAds"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Content & Post Management
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Effortlessly plan, create, schedule, and manage your Instagram
                  posts, reels & stories. Measure likes, shares, comments, and
                  saves in real-time. Plan a uniform strategy throughout your
                  content and reach the widest audience possible.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CreatePublishContent}
                    alt="MultiAgentLiveChat"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Create & Publish Content
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Easily create and publish Insta posts, reels & stories, all
                  from one platform. Plan content ahead of time, keep a steady
                  posting schedule, and organize your entire content process
                  efficiently and smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center items-center order-first md:order-none h-full">
            <Image
              src={ReachCustomersinstagram} // Replace with your image path
              alt="Phone Mockup"
              className=" object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={instagramlivechat}
                    alt="Chatbots"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Instagram Live Chat
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  No language is more engaging than real-time Instagram
                  messaging. Handle messages within the 24-hour messaging
                  window, send image/video/template responses, and provide a
                  smooth customer experience through a unified chat interface.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={InsightsAnalytics}
                    alt="LiveNotifications"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Insights & Analytics
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Gain a valuable understanding of the audience and performance
                  through powerful data-driven insights. Measure analytics for
                  your account (versus a post). Filter analytics by time frame,
                  demographics, and engagements: Optimize your Instagram reach,
                  engagement, and ROI.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={SmartCommentModeration}
                    alt="PromoteinBulk"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Smart Comment Moderation
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Comment system - but with moderation tools of the intelligent
                  kind! Instantly hide, delete, or respond to comments and turn
                  high-intent comments into DMs for one-on-one communication.
                  Design Smart, Clean Boosters to Increase Customer Engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <div className="bg-[#F7EBFC] py-2 md:py-10 px-6 sm:px-10">
        {/* Heading */}
        <div className="flex items-center justify-center mb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center heading">
            Why Celitix Stands Out
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-20 px-8">
          {/* Left Image Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full h-full my-5">
              <Image
                src={StandsOutInstagram}
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
                  title: "Instagram Live Chat Settings",
                  content:
                    "Get more control over your Instagram conversations with smart, account-level chat settings built to enhance user interactions. Set up persistent menus that guide users naturally through chats and trigger quick actions using postback responses. Add icebreakers (FAQs) to make it easy for users to start conversations and instantly find answers to common questions, helping boost engagement while reducing response times.",
                },
                {
                  title: "Templates",
                  content:
                    "Make conversations more efficient with ready-to-use message templates. Use both generic and button templates, along with dynamic variables, to personalize each interaction. Easily manage your templates by previewing them and adjusting their visibility (hide/unhide), so you can respond faster, stay consistent, and deliver a smoother customer experience.",
                },
                {
                  title: "All-in-One Control",
                  content:
                    "A single dashboard to manage your entire Instagram ecosystem. From folks in content creation and publishing to chat management to analytics, everything is integrated into a powerful single platform meant for efficiency and scale.",
                },
                {
                  title: "Faster Engagement",
                  content:
                    "Smart automation tools respond to your audience, shining fast. Read every message or comment so that every interaction is timely, relevant, and impactful, leading to better customer satisfaction & higher conversions.",
                },
                {
                  title: "Data-Driven Growth",
                  content:
                    "Make smarter decisions with advanced analytics. Use actionable insights to know what converts, refine your campaigns, and confidently scale your presence on Instagram.",
                },
              ].map((item, index) => (
                <div key={index}>
                  {/* Clickable Title Box */}
                  <div
                    onClick={() => handleToggle(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`cursor-pointer text-white p-4 rounded-xl transition-colors duration-300 ${
                      activeIndex === index ? "bg-[#8a27c4]" : "bg-[#c376f0]"
                    }`}
                  >
                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl sub-heading">
                      {item.title}
                    </h3>
                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? "max-h-46 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-white text-black p-4 rounded-xl">
                        <p className="text-base md:text-lg text-gray-600 font-medium pera">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 3st */}
      {/* 4th */}
      <div className="bg-[#f7ebfc] py-2 md:py-10">
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl  w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-3xl heading md:text-4xl font-bold text-white popf ">
              Ready to Grow?
            </h2>
            <p className="text-sm md:text-lg sub-heading text-white font-light popf mt-2">
              Get a free demo or start your WhatsApp onboarding process!
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

              <FormPopup visible={openDialog} onHide={handleCloseDialog} />
            </div>
          </div>
        </div>
      </div>
      {/* 4th */}
      {/* extra */}
      <section className="py-2 md:py-10 bg-[#f7ebfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-black md:text-5xl heading text-center mb-6 sm:mb-8">
            Upgrade Your Instagram Experience
          </h2>

          <div className="overflow-x-auto flex lg:justify-center justify-start">
            <div className="inline-flex space-x-4 px-4 lg:px-0">
              <button
                onClick={() => setActiveTab("DM Automation")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "DM Automation"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                DM Automation
              </button>

              <button
                onClick={() => setActiveTab("Live Chat")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Live Chat"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Live Chat
              </button>

              <button
                onClick={() => setActiveTab("Comment Control")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Comment Control"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Comment Control
              </button>

              <button
                onClick={() => setActiveTab("Insights & Analytics")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Insights & Analytics"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Insights & Analytics
              </button>
            </div>
          </div>

          {/* Content box */}
          <div className="border border-[#6b0da1] rounded-3xl shadow-inner bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2  p-6 sm:p-8">
              {/* Left side: heading, description, button */}
              <div className="flex flex-col justify-center space-y-4 mb-5 md: mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sub-heading text-black">
                  {heading}
                </h3>
                <p className="text-gray-800 leading-relaxed pera text-sm sm:text-base text-justify">
                  {description}
                </p>
                {/* <button
              className="inline-block px-6 py-2 bg-[#6b0da1] text-white rounded-full w-max hover:bg-[#580a88] transition"
              onClick={() => {
                // Put your “Learn More” or “Get Started” click handler here.
              }}
            >
              {buttonText}
            </button> */}
              </div>

              {/* Right side: image or video */}
              <div className="flex justify-center w-full">
                {!isVideo ? (
                  <Image
                    src={image}
                    alt={activeTab}
                    width={420}
                    height={180}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <video
                    key={image}
                    src={image}
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-80 h-auto rounded-lg"
                  >
                    {/* <source src={image} type="video/mp4" /> */}
                    {/* Fallback message in case the browser doesn’t support video */}
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* extra */}

      {/* 5th */}
      <section className=" bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center px-1 md:px-4 pb-2 md:pb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 popf">
              Transform Your Instagram Workflow
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Left Text Block */}
            <div className="space-y-6">
              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Engage in Real Time
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Instagram chats — active and inactive filters",
                    "Reply immediately during the 24-hour message period",
                    "Expertly send photos, videos, audio, and message templates",
                    "Foster stronger relationships via real-time interaction",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-center gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Insights & Performance Tracking
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Track account-level and post-level performance metrics",
                    "Review engagement metrics, post reach, and audience interaction",
                    "Filter by timeframe, demographics, and interactions",
                    "Make data-driven decisions, evolving campaigns",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-center gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center Image Block */}
            <div className="flex justify-center">
              <Image
                src={InstagramWorkflow}
                alt="Phone Mockup"
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[380px] object-contain"
              />
            </div>

            {/* Right Text Block */}
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Comment & Interaction Control
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Moderate comments and smart hide, delete, and reply options",
                    "Efficiently manage comment threads across posts and reels",
                    "Transition comments to DMs for higher-level interaction",
                    "Controlled interactions that protect brand reputation",
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircleIcon
                        className="text-blue-500"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Chat Settings & Automation
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Improve control with account-level chat settings",
                    "Create stickybars to enhance user navigation",
                    "Build automated replies and workflows",
                    "Include Ice Breakers (FAQs) to help users and serve at speed",
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircleIcon
                        className="text-blue-500"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 lg:px-20 py-2 md:py-10  text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-2 md:mb-12 heading">
          Utilise Every Channel
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {/* Row 1 */}
          <Link
            href="/whatsapp-business-api"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={WhatsAppicon}
              alt="WhatsApp"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              WhatsApp
            </p>
          </Link>

          <Link
            href="/rcs-business-messaging"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={RCSicon}
              alt="RCS"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              RCS
            </p>
          </Link>

          <Link
            href="/sms-marketing"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={SMSicon}
              alt="SMS"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              SMS
            </p>
          </Link>

          <Link
            href="/two-way-sms"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={twoWaySMSicon}
              alt="2-Way SMS"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              2-Way SMS
            </p>
          </Link>

          <Link
            href="/email-otp"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={Emailicon}
              alt="Email"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Email
            </p>
          </Link>

          {/* Row 2 */}
          <Link
            href="/inbound-dialer"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={IBDicon}
              alt="Inbound Dialer"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Inbound Dialer
            </p>
          </Link>

          <Link
            href="/outbound-dialer"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={OBDicon}
              alt="Outbound Dialer"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Outbound Dialer
            </p>
          </Link>

          <Link
            href="/click-to-call"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={Click2callicon}
              alt="Click to Call"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Click to Call
            </p>
          </Link>

          <Link
            href="/missed-call-services"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={MissedCallicon}
              alt="Missed Call"
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Missed Call
            </p>
          </Link>

          <Link
            href="/user-verification"
            className="flex flex-col items-center bg-white rounded-2xl py-6 hover:shadow-lg transition-shadow"
          >
            <Image
              src={Authenticationicon}
              alt="Authentication "
              className="w-10 h-10 mb-2 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 text-md sub-heading">
              Authentication{" "}
            </p>
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
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A05CD7] to-[#4B0FA6] px-6 md:px-12 py-5 md:py-15">
        {/* Left Image with Icons */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src={CTALASTIMAGE}
            alt="Customer Support"
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[440px] object-contain lg:absolute top-0 md:-top-55"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl heading sm:text-3xl md:text-4xl font-bold mb-4">
            Elevate Your Customer Experience
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Go beyond the ordinary and connect with your target groups to grow
            your business.
          </p>
          <UniversalButton
            label="Book  Demo"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 "
            onClick={handleShowFormPopup}
          />

          <FormPopup visible={openDialog} onHide={handleCloseDialog} />
        </div>
      </div>
      {/* 7nd */}

      {/* 8th */}
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:py-20 px-4 ">
        <div className="w-full max-w-6xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            Instagram FAQs
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
                  <span className="text-sm md:text-md sub-heading font-semibold text-gray-700">
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
      {/* 8th */}
    </div>
  );
};

export default Page;
