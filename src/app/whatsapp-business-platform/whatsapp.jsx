"use client";
import React, { useRef, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from 'react-helmet-async';
import {
  Authenticationicon,
  BuildCustomFlows,
  Chatbots,
  Click2callicon,
  ClicktoWhatsAppAds,
  CTALASTIMAGE,
  DoMoreWithLess,
  Emailicon,
  IBDicon,
  LiveNotifications,
  MeetCustomersWhatsapp,
  METACOLOR,
  MissedCallicon,
  MultiAgentLiveChat,
  OBDicon,
  PromoteinBulk,
  RCSicon,
  RichCampaigns,
  ScaleSmartStayReady,
  ShowcaseCatalogues,
  SMSicon,
  twoWaySMSicon,
  WhatsApp_Business_Platform,
  WhatsAppAPI,
  WhatsAppicon,
  whatsChatbot,
  whatsManageOrders,
  WhyCelitixWhatsapp,
} from "../../../public/assets/images";
// import { initScrollReveal } from '../../utils/ScrollReveal';
import Image from "next/image";
import Link from "next/link";
// import LocationSEO from '../../components/LocationSEO';
import FaqItem from "../components/Faq";
import FormPopup from "../components/FormPopup";
import UniversalButton from "../components/UniversalButton";

const WhatsApp = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);
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
      question: "What is WhatsApp Business Platform (WBP)?",
      answer:
        "Celitix offers a WhatsApp Business Platform (WBP), a.k.a. WhatsApp Business API. It’s an enterprise-grade messaging solution for large-scale WhatsApp marketing. ",
    },
    {
      question: "How is WhatsApp Business Platform different from the App?",
      answer:
        "WhatsApp Business App has basic solutions for small business owners. WBPs like Celitix offer advanced features like a shared team inbox, Chatbots, Verified profiles, and more.",
    },
    {
      question: "What is WhatsApp API?",
      answer:
        "Other than a user-friendly platform for world-class WhatsApp marketing, Celitix also provides WhatsApp API docs at no extra cost. These enable developers to connect WhatsApp to their app, website or system for bespoke experiences.",
    },
    {
      question: "Why do I need Celitix’s WhatsApp Business Platform?",
      answer:
        "WhatsApp has the world’s biggest direct messaging user base. Celitix helps companies leverage this platform. With it, brands can connect with their target groups more effectively through better experiences.",
    },
    {
      question: "How do I get started with WhatsApp Business Platform?",
      answer:
        "Connect with us, and our team will guide you through the process. ",
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
    { key: "Rich Campaigns", label: "Rich Campaigns" },
    { key: "Custom Flows", label: "Custom Flows" },
    { key: "Chatbots", label: "Chatbots" },
    { key: "Manage Orders", label: "Manage Orders" },
  ];

  const tabData = {
    "Rich Campaigns": {
      heading: "Turn Broadcasts Into Conversations",
      description:
        "Send or schedule direct promotional messages on WhatsApp. Incorporate rich media like documents, images, audio, & videos. Add action buttons, product lists, and personalised offers to nudge the sale.",
      buttonText: "Learn More",
      // If you store a PNG/JPG for “Rich Campaigns”:
      // image can point to a static image import or an external URL
      image: RichCampaigns,
      isVideo: false,
    },
    "Custom Flows": {
      heading: "Perfect Workflows For Any Use Case",
      description:
        "Every business is different, and so is its process. With Celitix’s user-friendly WhatsApp Flowbuilder, anyone can design their perfect workflow. Use forms, lists, check boxes, and drop-down menus.",
      buttonText: "Learn More",
      // This is a video file, so we’ll set isVideo=true:
      image: "/assets/videos/cust.mp4",
      isVideo: true,
    },
    Chatbots: {
      heading: "Engage, Guide & Support Customers",
      description:
        "Let customers explore your brand at their own pace. Customise one of our pre-built chatbots, or build your own from scratch. Add rich media, videos, documents, and links to create excellent brand experiences.",
      buttonText: "Get Started",
      image: "/assets/videos/wbot.mp4",
      isVideo: true,
    },
    "Manage Orders": {
      heading: "From Browse To Checkout, on WhatsApp",
      description:
        "Share your products, let customers browse, choose their items, place orders, and take payments. Smart brands can also set up loyalty programs and take feedback to strengthen customer relationships long-term.",
      buttonText: "Explore",
      image: "/assets/videos/word.mp4",
      isVideo: true,
    },
  };

  const [activeTab, setActiveTab] = useState("Rich Campaigns");

  // Destructure the current tab’s data in one go:
  const { heading, description, buttonText, image, isVideo } =
    tabData[activeTab];

  // extra section

  return (
    <div>
      {/* <LocationSEO
        baseTitle="WhatsApp Business API & Chatbots | Celitix"
        baseDescription="Deploy WhatsApp Business API & Chatbots in CITY—automate customer conversations at scale."
      /> */}

      {/* <Helmet>
          <title>WhatsApp Business API & Chatbots | Celitix</title>
     
        <meta name="description" content=" Use WhatsApp to grow your business. Reach new heights with Celitix’s enterprise messaging solutions. Chatbots, Click to WhatsApp ads, CRM, & more." />
        <link rel="preload" as="image" href={WhatsApp_Business_Platform} crossorigin="anonymous" />
      </Helmet> */}
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-20">
          <div className="space-y-6 box-reveal-left">
            <div className="box-reveal-left">
              <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                WhatsApp Business Platform
              </span>
              {/* <Image
                src={METACOLOR}
                alt="Meta Tech Partner"
                className="h-10 md:h-12 object-contain"
                loading="eager"
              /> */}
            </div>

            <div className="box-reveal-left space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl heading  font-bold text-gray-900 popf leading-tight">
                Stay{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  {" "}
                  Connected{" "}
                </span>{" "}
                on WhatsApp
              </h1>

              <p className="text-gray-600  text-base md:text-lg  max-w-md">
                Let customers come to you using the official WhatsApp Business
                API. Be present on the world’s biggest messaging app.
              </p>

              <div className="flex flex-wrap gap-4">
                <UniversalButton
                  label="Book Demo"
                  variant="brutal"
                  className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                  onClick={handleShowFormPopup}
                />

                <FormPopup visible={openDialog} onHide={handleCloseDialog} />

                <Link
                  href="https://wa.me/917230000091"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <UniversalButton
                    label="Chat Now"
                    variant="brutal"
                    className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] flex items-center gap-2"
                    icon={<ArrowRightAltIcon style={{ fontSize: 18 }} />}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={WhatsApp_Business_Platform}
              alt="Whatsapp icon"
              // loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title="WhatsApp Business Platform"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-2 lg:py-10 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10 lg:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
            Meet Customers Where They Are
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ShowcaseCatalogues}
                    alt="Showcase-Catalogues"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Showcase Catalogues
                </h3>
                <p className="text-md text-black pera ml-4">
                  Let customers explore your products, place orders, make
                  payments and get support, all in one place!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ClicktoWhatsAppAds}
                    alt="ClicktoWhatsAppAds"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Click-to-WhatsApp Ads
                </h3>
                <p className="text-md text-black pera ml-4">
                  Get traffic from social media ads directly to WhatsApp chats.
                  Turn broadcasts into conversations!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={MultiAgentLiveChat}
                    alt="MultiAgentLiveChat"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Multi-Agent Live Chat
                </h4>
                <p className="text-md text-black pera ml-4">
                  Work together on a shared inbox for sales, support, and
                  service. Handle all your CRM on WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center order-first md:order-none">
            <Image
              src={MeetCustomersWhatsapp} // Replace with your image path
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
                    src={Chatbots}
                    alt="Chatbots"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Quick & Easy Chatbots
                </h4>
                <p className="text-md text-black pera ml-4">
                  Use an intuitive, user-friendly flow builder to make your
                  perfect Chatbot for automatic engagement.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={LiveNotifications}
                    alt="LiveNotifications"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Live Notifications
                </h4>
                <p className="text-md text-black pera ml-4">
                  Share service updates, promotions, abandoned cart messages and
                  more with links, media and buttons.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={PromoteinBulk}
                    alt="PromoteinBulk"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">
                  Promote in Bulk
                </h4>
                <p className="text-md text-black pera ml-4">
                  Schedule promotional messages to segmented customers in bulk
                  without getting blocked by Meta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-2 lg:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-2 md:pb-10">
          <h2 className="text-2xl md:text-4xl heading lg:text-5xl font-semibold text-gray-900 mb-3">
            Why Celitix Makes It Better
          </h2>
          <p className="text-sm md:text-xl sub-heading text-gray-700">
            WhatsApp is powerful. Celitix makes it work for your business.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={BuildCustomFlows}
                  alt="BuildCustomFlows"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Build Custom Flows
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Craft custom workflows using chatbots, buttons, and rich
                  media. Integrate other channels to guide users from hello to
                  checkout.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={DoMoreWithLess}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Do More With Less
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Customers can discover, ask, and order via WhatsApp. Manage
                  sales and support across every direct channel from one
                  dashboard.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={ScaleSmartStayReady}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading">
                  Scale Smart, Stay Ready
                </h3>
                <p className="text-md text-gray-800 leading-relaxed pera">
                  Peak sales for seasonal spikes or scale down to save
                  resources. Integrate, add or remove channels and work more
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={WhyCelitixWhatsapp}
              alt="Why Celitix Makes It Better"
              className="w-60 sm:w-80 md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-black md:text-5xl heading text-center mb-6 sm:mb-8">
            Elevate The Customer Experience
          </h2>

          <div className="overflow-x-auto flex lg:justify-center justify-start">
            <div className="inline-flex space-x-4 px-4 lg:px-0">
              <button
                onClick={() => setActiveTab("Rich Campaigns")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Rich Campaigns"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Rich Campaigns
              </button>

              <button
                onClick={() => setActiveTab("Custom Flows")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Custom Flows"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Custom Flows
              </button>

              <button
                onClick={() => setActiveTab("Chatbots")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Chatbots"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Chatbots
              </button>

              <button
                onClick={() => setActiveTab("Manage Orders")}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${
                  activeTab === "Manage Orders"
                    ? "text-white bg-[#6E11B0] shadow-lg heading"
                    : "text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]"
                }`}
              >
                Manage Orders
              </button>
            </div>
          </div>

          {/* Content box */}
          <div className="border border-[#6b0da1] rounded-3xl shadow-inner bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-6 sm:p-8">
              {/* Left side: heading, description, button */}
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sub-heading text-black">
                  {heading}
                </h3>
                <p className="text-gray-700 leading-relaxed pera text-sm sm:text-base">
                  {description}
                </p>
                <button
                  className="inline-block px-6 py-2 bg-[#6b0da1] text-white rounded-full w-max hover:bg-[#580a88] transition"
                  onClick={() => {
                    // Put your “Learn More” or “Get Started” click handler here.
                  }}
                >
                  {buttonText}
                </button>
              </div>

              {/* Right side: image or video */}
              <div className="flex justify-center h-96">
                {!isVideo ? (
                  <Image
                    src={image}
                    alt={activeTab}
                    width={320}
                    height={180}
                    className="w-80 h-auto rounded-lg"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-1 md:px-4 pb-2 md:pb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 popf">
              WhatsApp API: Integrate. Automate. Scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Left Text Block */}
            <div className="space-y-6">
              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Connect Your Systems
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Automate lead nurturing, get status updates, & more",
                    "Sync customer data for smarter, faster replies",
                    "Add WhatsApp to your website, app, or CRM",
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
                  Rich Media Experience
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Share catalogues, images, PDFs, or videos in chat",
                    "Use quick replies and buttons to drive action",
                    "Create flows that look and feel premium",
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
                src={WhatsAppAPI}
                alt="Phone Mockup"
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[350px] object-contain"
              />
            </div>

            {/* Right Text Block */}
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Verify, Notify & Update
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Keep users updated on orders, bookings, & services",
                    "Reduce calls and confusion with proactive messages",
                    "Send OTPs, reminders, and confirmations instantly",
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
                  Omnichannel Journeys
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading">
                  {[
                    "Track and optimise every step from one dashboard",
                    "Combine WhatsApp with all your other channels",
                    "Let users choose how they want to connect",
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
            href="/whatsapp-business-platform"
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
      {/* 8nd */}
      {/* <div className="w-full px-4 py-2 md:py-10 bg-[#f7ebfc]">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10">
          <h2 className="text-2xl md:text-4xl heading lg:text-5xl font-semibold text-gray-900 popf">
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
                <h3 className="font-semibold text-lg  sub-heading text-gray-800 mt-2 mb-3 line-clamp-2">
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
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:py-20 px-4 ">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            WhatsApp FAQs
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
      {/* 9th */}
    </div>
  );
};

export default WhatsApp;
