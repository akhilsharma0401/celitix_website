"use client";
import React, { useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { Helmet } from 'react-helmet-async';
import {
  Authenticationicon,
  Click2callicon,
  CTALASTIMAGE,
  Emailicon,
  IBDicon,
  MissedCallicon,
  OBDicon,
  RCSicon,
  SMSicon,
  twoWaySMSicon,
  WhatsAppicon,
  WhatsAppLiveChat,
  LiveInstagramChat,
  RCSLiveChat,
  WebsiteLiveChat,
  WhatsAppLiveChatSupport,
  MultipleAgentsOnWhatsApp,
  ChatsAndAutomateThem,
  FromClickToWhatsApp,
  RichMediaAndInteractiveMessages,
  StayingInTouchWith,
  InstagramLiveChatEngage,
  RCSLiveChatService,
  WhatMakesCelitixRCSLiveChatStandOut,
  EngagingRCSLiveChat,
  RichMediaInteractiveMessages,
  PredesignedMessageTemplates,
  SpeedDialMessagesExpedite,
  EnhancedRCSChatSegmentation,
  RCSLiveChatThat,
  RealTimeRCSLiveChat,
  MultiAgentRCSChatBox,
  ActiveInactiveChatsBetterManagement,
  IntelligentChatRoutingRCSAutomation,
  PredefinedCannedMessagesCommands,
  RCSRichMessagingCapabilities,
} from "../../../public/assets/images";
import Image from "next/image";
import Link from "next/link";
import FaqItem from "../components/Faq";
import FormPopup from "../components/FormPopup";
import UniversalButton from "../components/UniversalButton";
import { useRouter } from "next/navigation";
const Page = () => {
  // 3rd
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
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
      question: "What is RCS Live Chat?",
      answer:
        "RCS Live Chat is an advanced messaging solution for businesses to communicate with customers in rich and interactive conversations that contain images, buttons, carousels, suggested replies, and a branded messaging experience.",
    },
    {
      question: "How does Celitix RCS Live Chat enhance customer engagement?",
      answer:
        "Celitix RCS Live Chat is able to enhance business customer engagement using rich messaging, intelligent routing, automation, and live customer interactions, delivering better and faster customer experiences.",
    },
    {
      question: "What are the features of the Celitix RCS Live Chat platform?",
      answer:
        "Celitix RCS Live Chat features include rich media messaging, live customer interactions, intelligent chat routing, automation workflows, quick replies, Analytics, team collaboration, and a full real-time customer support experience.",
    },
    {
      question: "How does RCS Live Chat differ from SMS?",
      answer:
        "RCS Live Chat has interactive messaging such as images, videos, buttons, branded sender identity, and rich customer interactions, while traditional SMS does not provide those.",
    },
    {
      question: "Can businesses automate conversations using Celitix RCS Live Chat?",
      answer:
        "Yes. Celitix enables businesses to automate conversations by using Chat Workflows, auto-responses, intelligent routing, triggers, and messaging automation.",
    },
    {
      question:
        "Who should use Celitix RCS Live Chat?",
      answer:
        "Celitix RCS Live Chat is a great product for the eCommerce/retail, healthcare, finance, travel, and hospitality industries, as well as education and customer service teams, which are looking to improve communication with their customers.",
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
    { key: "WhatsApp Live Chat", label: "WhatsApp Live Chat" },
    { key: "Instagram Live Chat ", label: "Instagram Live Chat " },
    { key: "RCS Live Chat", label: "RCS Live Chat" },
    { key: "Website Live Chat", label: "Website Live Chat" },
  ];

  const tabData = {
    "WhatsApp Live Chat": {
      heading: "WhatsApp Live Chat",
      description:
        "Provide instant connections through WhatsApp Live Chat and ensure that every conversation that takes place is swift, seamless, and authentic. From inquiry about services to support needs, your team will be able to provide immediate responses to customers at all times without any delay. You can also transfer updates, files, documents, pictures, or any other piece of important information through chat in an easy and seamless manner, thus making every communication swift and hassle-free. Instant replies and pre-formatted messages make every conversation professional and effective.",
      buttonText: "Explore",
      routerlink: "/whatsapp-live-chat",
      image: WhatsAppLiveChat,
      isVideo: false,
    },
    "Instagram Live Chat ": {
      heading: "Instagram Live Chat ",
      description:
        "Communicate and connect with your audience directly using Instagram Live Chat, where your brand is getting the most attention. Manage Instagram messages easily and engage users instantly through Instagram Live Chat by responding to every message without a single delay. This way, you can convert every conversation or query into meaningful engagement and guide users to make further inquiries, book products or services, or even make purchases.",
      buttonText: "Explore",
      routerlink: "/instagram-live-chat",
      image: LiveInstagramChat,
      isVideo: false,
    },
    "RCS Live Chat": {
      heading: "RCS Live Chat",
      description:
        "Sending rich interactive conversations instead of plain text. RCS Live Chat allows sending rich, engaging messages with images and videos, buttons, and interactive content in the message that users can actually interact with in their chat. This helps make conversations more intuitive and action-oriented, enabling customers to quickly explore options, make decisions, and take actions without leaving the chat. As a result, we have an enticing, more sultry, better messaging experience where both user satisfaction and conversion rates are improved.",
      buttonText: "Explore",
      routerlink: "/rcs-live-chat",
      //  image: CommentControl,
      image: RCSLiveChat,
      isVideo: false,
    },
    "Website Live Chat": {
      heading: "Website Live Chat",
      description:
        "Turn your website traffic into real conversations with a powerful website live chat solution powered by AI and human agents. Instantly engage every visitor with smart, personalized greetings that capture attention from the very first interaction. With intelligent lead qualification, your website's live chat identifies user intent and guides visitors with the right responses at the right moment.",
      buttonText: "Explore",
      routerlink: "/Website-live-chat",
      //  image: CommentControl,
      image: WebsiteLiveChat,
      isVideo: false,
    },
  };

  const [activeTab, setActiveTab] = useState("WhatsApp Live Chat");

  // Destructure the current tab’s data in one go:
  const { heading, description, buttonText, image, isVideo, routerlink } =
    tabData[activeTab];

  // extra section
  // const LiveChatAcross = "/assets/videos/LiveChatAcrossChannels.mp4";

  return (
    <div>
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-10">
          <div className="space-y-6 box-reveal-left">
            <div className="box-reveal-left">
              <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                RCS Live Chat
              </span>
            </div>

            <div className="box-reveal-left space-y-6">
              <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl heading  font-bold text-gray-900 popf leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  RCS Live Chat
                </span>{" "}
                That Engages, Converts & Delivers Instantly
              </h1>

              <p className="text-gray-600 text-base md:text-lg ">
                Manage real-time customer conversations with advanced RCS live
                chat. Send rich media messages, automate responses, route chats
                intelligently, and deliver faster, more interactive support—all
                from a single unified dashboard with Celitix.
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
              src={RCSLiveChatService}
              alt="integration icon"
              // loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title="RCS Live Chat"
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
            Engaging with Customers Using RCS Live Chat
          </h2>
          {/* <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
            To find new brands and products, People head to Instagram. Celitix
            allows you to connect them instantly, respond faster, and automate
            conversations from one place so that you can enhance engagement and
            increase conversions.
          </p> */}
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={RealTimeRCSLiveChat}
                    alt="Showcase-Catalogues"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Real-Time RCS Live Chat
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Provide instant replies through RCS live chat software and
                  give out real-time answers that minimize the waiting times and
                  ensure satisfaction. Through Rich Communication Services (RCS
                  messaging), you can give your customers a faster and more
                  reliable conversation experience that will be interesting.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={MultiAgentRCSChatBox}
                    alt="ClicktoWhatsAppAds"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Multi-Agent RCS Chat Box
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Manage all client conversations from the central RCS chat box
                  designed for multiple agents. Use chat management software
                  where you can assign chats, interact with customers, and
                  collaborate with your colleagues.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ActiveInactiveChatsBetterManagement}
                    alt="MultiAgentLiveChat"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Active & Inactive Chats for Better Management
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Create tabs such as active chats and closed/chatted
                  conversations. Ensure that you manage conversations in the RCS
                  messaging window better.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center items-center order-first md:order-none h-full">
            <Image
              src={EngagingRCSLiveChat}
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
                    src={IntelligentChatRoutingRCSAutomation}
                    alt="Chatbots"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Intelligent Chat Routing & RCS Automation
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Automatically reroute all conversations to agents based on the
                  intent, query type, or availability of the employee. Use RCS
                  automation services, intelligent rules for work, and automated
                  routing for improved efficiency and faster responses.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={PredefinedCannedMessagesCommands}
                    alt="LiveNotifications"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Pre-defined Canned Messages & Slash Commands
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Automate replies for repetitive requests using canned messages
                  and slash commands. Help your team save time by creating
                  predefined messages in your system, making the workflow
                  efficient.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={RCSRichMessagingCapabilities}
                    alt="PromoteinBulk"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  RCS Rich Messaging Capabilities
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Use advanced messaging services provided by RCS, such as
                  multimedia, interactive content, and documents. Engage the
                  client in visually attractive and useful conversations that
                  help them to know better what you offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}

      {/* 3st */}
      <div className="bg-[#F7EBFC] py-2 md:py-16 px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center px-1 md:px-4 pb-5">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center heading mb-2">
            What Makes Celitix RCS Live Chat Stand Out?
          </h2>
          {/* <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
            Simplify communication, improve response time, and manage everything
            from one platform.
          </p> */}
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-20 px-8">
          {/* Left Image Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full h-full my-5">
              <Image
                src={WhatMakesCelitixRCSLiveChatStandOut}
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
                  title: "Centralized RCS Messaging Dashboard for Full Control",
                  content:
                    "Gain access to an all-inclusive RCS messaging system where conversations, agents, and customer information are managed from one place. Monitor performance, track chat activities, and streamline workflow with a scalable, centralized dashboard.",
                },
                {
                  title:
                    "Increase Conversions through Real-Time RCS Engagement",
                  content:
                    "Customer engagement is the key to conversion. Real-time RCS Live Chat enables businesses to instantly respond to customer inquiries, thus boosting engagement rates and making conversions more likely.",
                },
                {
                  title:
                    "Provide Personalized Communication through Access to Customer Data",
                  content:
                    "Personalized RCS communication provides you with detailed information regarding the customer. Take advantage of customer chat history, preferences, and timelines to deliver relevant responses and build a long-lasting relationship with customers.",
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
                        <p className="text-base md:text-lg text-gray-600 font-medium pera text-justify">
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
      <section className="w-full py-10 bg-[#f7ebfc]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center px-1 md:px-4 pb-2 md:pb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-2">
              Advanced Features of Celitix RCS Chat
            </h2>
            {/* <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
              Handle conversations faster, automate responses, and give your
              team complete control over every customer interaction.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="bg-[#bbebe3] rounded-[28px] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* LEFT */}
                <div className="w-full p-6 md:p-8">
                  {/* <div className="text-3xl mb-5">🟩</div> */}

                  <h2 className="text-[24px] leading-[1.1] font-bold text-[#0b1633] heading mb-5">
                    Rich Media & Interactive Messages for Maximum Engagement
                  </h2>

                  <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#111827] pera text-justify">
                    Use RCS rich media messages, which include pictures, video
                    clips, carousel, and interactive buttons. Create immersive
                    conversations with the help of advanced RCS messaging
                    technology.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="relative w-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={RichMediaInteractiveMessages}
                    alt="Feature 1"
                    fill
                    className="object-contain p-4 md:p-6"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#dbe2f7] rounded-[28px] overflow-hidden ">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* LEFT */}
                <div className="w-full  p-6 md:p-8">
                  {/* <div className="text-3xl mb-5">❓</div> */}

                  <h2 className="text-[24px] leading-[1.1] font-bold text-[#0b1633] heading mb-5">
                    Pre-designed Message Templates for Consistent Communication
                  </h2>

                  <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#111827] pera text-justify">
                    Communicate consistently by sending pre-defined RCS message
                    templates to your customers. Personalize each message with
                    dynamic data to create customized content.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="relative w-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={PredesignedMessageTemplates}
                    alt="Feature 1"
                    fill
                    className="object-contain p-4 md:p-6"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#f1e3ed] rounded-[28px] overflow-hidden ">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* LEFT */}
                <div className="w-full p-6 md:p-8">
                  {/* <div className="text-3xl mb-5">💬</div> */}

                  <h2 className="text-[24px] leading-[1.1] font-bold text-[#0b1633] heading mb-5">
                    Speed Dial Messages to Expedite Message Delivery
                  </h2>

                  <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#111827] pera text-justify">
                    Speed up agent response time by allowing them to use the RCS
                    speed dial option to quickly send message templates, media,
                    and messages.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="relative w-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={SpeedDialMessagesExpedite}
                    alt="Feature 1"
                    fill
                    className="object-contain p-4 md:p-6"
                  />
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#efe2c6] rounded-[28px] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* LEFT */}
                <div className="w-full p-6 md:p-8">
                  {/* <div className="text-3xl mb-5">🏆</div> */}

                  <h2 className="text-[24px] leading-[1.1] font-bold text-[#0b1633] heading mb-5">
                    Enhanced RCS Chat Segmentation & Chat Management
                  </h2>

                  <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#111827] pera text-justify">
                    Segregate conversations through filtering based on
                    active/inactive, assigned/unassigned, and unread chats. Use
                    chat management systems to segment customers according to
                    their behavior and interests.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="relative w-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={EnhancedRCSChatSegmentation}
                    alt="Feature 1"
                    fill
                    className="object-contain p-4 md:p-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* extra */}

      {/* 5th */}
      <section className=" bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center px-1 md:px-4 pb-2 md:pb-10 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-2">
              RCS Live Chat That Fosters Engagement, Support, and Growth
            </h2>
            {/* <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
              Handle conversations faster, automate responses, and give your
              team complete control over every customer interaction.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Left Text Block */}
            <div className="space-y-6 px-0 2xl:px-5">
              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Converse and Engage Your Customers Effortlessly
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Begin engaging in live chat conversations using RCS Live Chat Software",
                    "Communicate effectively using powerful messaging capabilities ",
                    "Interact quickly and engage customers through real-time conversations",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-start gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500 mt-0.5"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Enhance Real-Time Chat Conversations With Powerful Features
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Share media content, including images, video, files, etc.",
                    "Make use of quick replies, buttons, and message templates",
                    "Increase user engagement by leveraging RCS messaging capabilities ",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-start gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500 mt-0.5"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center Image Block */}
            <div className="flex justify-center w-full">
              <Image
                src={RCSLiveChatThat}
                alt="Phone Mockup"
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[450px] object-contain"
              />
            </div>

            {/* Right Text Block */}
            <div className="space-y-6 px-0 2xl:px-5">
              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Efficiently Support, Solve, and Retain Customers
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Offer fast customer support using RCS Customer Support Software",
                    "Manage live chat conversations using multi-agent inboxes",
                    "Ensure customer satisfaction through real-time chat engagement",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon
                        className="text-blue-500 mt-0.5"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Scalable RCS Customer Communication Tools for Any Business
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Manage chat volume efficiently using RCS chat management tools",
                    "Streamline workflows using RCS chat automation tools and bots",
                    "Gain visibility into your performance with analytics, insights, and reports",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon
                        className="text-blue-500 mt-0.5"
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
            RCS Live Chat FAQs
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
