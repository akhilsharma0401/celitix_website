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
  WhatsAppLiveChatService,
  WhatsappLiveChatCelitixLive,
  WhatsAppLiveChatSupport,
  MultipleAgentsOnWhatsApp,
  ChatsAndAutomateThem,
  FromClickToWhatsApp,
  RichMediaAndInteractiveMessages,
  StayingInTouchWith,
  WhatsAppLiveChatEngage,
  MeetCustomersWhere,
  AIChatbotLiveAgentHandover,
  InternalNotesTeamCollaborationTools,
  CustomerConversationTracking,
  AdvancedChatSegmentation,
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
      question: "What is a WhatsApp Live Chat Service?",
      answer:
        "A WhatsApp Live Chat Service is a way for businesses to talk to customers in real time using WhatsApp. This is done with the WhatsApp Business API. It helps with sales, support, and getittting customers involved. All of this happens in a shared team inbox.",
    },
    {
      question: "How does WhatsApp Live Chat improve customer support?",
      answer:
        "WhatsApp Live Chat makes customer support better. It does this by letting businesses reply to customers away. This means issues get solved faster. Businesses can also have personalized conversations with customers. All of this happens in time on WhatsApp, which is what customers like to use.",
    },
    {
      question: "Can multiple agents manage WhatsApp customer chats?",
      answer:
        "Yes, multiple agents can handle customer chats at the same time. They use an inbox for this. This way, no messages get missed.",
    },
    {
      question: "Can I integrate WhatsApp Live Chat with my website?",
      answer:
        "Yes, you can add WhatsApp Chat to your website. You can put a widget or a chat button on your site. This lets visitors start talking to you away.",
    },
    {
      question: "Does WhatsApp Live Chat support automation and chatbots?",
      answer:
        "Yes, WhatsApp Live Chat works with chatbots and automation. It can even automate some tasks. Help qualify leads. It also has features to engage with customers.",
    },
    {
      question:
        "What is the difference between WhatsApp Business App and WhatsApp Business API?",
      answer:
        "The WhatsApp Business App is for businesses. The WhatsApp Business API is for businesses. It has features like automation and integration with other systems. It also works with agents.",
    },
    {
      question: "Why should businesses use WhatsApp Live Chat Services?",
      answer:
        "Businesses use WhatsApp Live Chat Services for reasons. They want to get customers more involved. They want to answer questions. They want to sell more. They want to support customers. They want to manage all customer conversations in one place. WhatsApp Live Chat Services. This makes things easier for businesses and customers. WhatsApp Live Chat Services help businesses do all of this and more.",
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
                WhatsApp Live Chat
              </span>
            </div>

            <div className="box-reveal-left space-y-6">
              <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl heading  font-bold text-gray-900 popf leading-tight">
                Turn Customer Conversations Into Growth with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  WhatsApp Live Chat
                </span>{" "}
              </h1>

              <p className="text-gray-600 text-base md:text-lg ">
                Simplify customer communication with WhatsApp Live Chat by
                managing conversations, responding faster, and delivering better
                customer experiences at scale.
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
              src={WhatsAppLiveChatService}
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
            Meet Customers Where They Are
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
                    src={WhatsAppLiveChatSupport}
                    alt="Showcase-Catalogues"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  WhatsApp Live Chat Support That Is Available All The Time
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Make your customers happy by answering their questions and
                  reducing the time they have to wait. This is possible with the
                  WhatsApp Business API, which makes sure your business is
                  always available when your customers need it.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={MultipleAgentsOnWhatsApp}
                    alt="ClicktoWhatsAppAds"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  A Shared Inbox For Multiple Agents On WhatsApp
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Give the person the job of talking to each customer, keep
                  track of what is being said, and make your support team work
                  better by using WhatsApp with your customer relationship
                  management tool. This helps your team work well and provides
                  consistent answers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ChatsAndAutomateThem}
                    alt="MultiAgentLiveChat"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Smart Ways To Route Chats And Automate Them
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Use WhatsApp automation and a chatbot that uses AI to answer
                  frequently asked questions, collect customer information, and
                  ensure each conversation goes to the right place. This makes
                  your team work better and answer questions faster.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center items-center order-first md:order-none h-full">
            <Image
              src={MeetCustomersWhere}
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
                    src={FromClickToWhatsApp}
                    alt="Chatbots"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Getting Leads From Click-To-WhatsApp
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Get people who're really interested in what you have to offer
                  to talk to you directly on WhatsApp from your ad landing pages
                  and campaigns. This reduces the number of people who stop
                  talking to you and increases the number of leads you get, all
                  while making it easy for people to talk to you.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={RichMediaAndInteractiveMessages}
                    alt="LiveNotifications"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Sending And Receiving Rich Media And Interactive Messages
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Use buttons and quick replies that interact with the user to
                  guide them, make it easier for them to decide what to do, and
                  create conversations that are interesting and focused on
                  selling things.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={StayingInTouchWith}
                    alt="PromoteinBulk"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Staying In Touch With Your Customers For 24 Hours
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Send replies, updates, and follow-ups using tools that help
                  you talk to your customers, which keeps your conversations
                  active, relevant, and meaningful, and helps WhatsApp Live Chat
                  Support and your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative bg-[#f7ebfc] py-10 px-4 overflow-hidden">
        <div className="text-center max-w-5xl mx-auto mb-6 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#140a2e] leading-tight heading">
            Meet Customers Where They Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto sub-heading">
            Connect with your customers instantly through WhatsApp live chat,
            AI-powered automation, and seamless communication experiences.
          </p>
        </div>

     
        <div className="max-w-screen-2xl mx-auto relative z-10">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6">
                <Image
                  src={instagramlivechaticons}
                  alt="Leads"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                Getting Leads From Click-To-WhatsApp
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Get people who're really interested in what you have to offer to
                talk to you directly on WhatsApp from your ad landing pages and
                campaigns. This reduces the number of people who stop talking to
                you and increases the number of leads you get, all while making
                it easy for people to talk to you.
              </p>
            </div>

          
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Image
                  src={RCSLiveChatExperienceicon}
                  alt="Inbox"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                A Shared Inbox For Multiple Agents On WhatsApp
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Give the person the job of talking to each customer, keep track
                of what is being said, and make your support team work better by
                using WhatsApp with your customer relationship management tool.
                This helps your team work well and provides consistent answers.
              </p>
            </div>

           
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Image
                  src={SmartChatAutomationicon}
                  alt="Automation"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                Smart Ways To Route Chats And Automate Them
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Use WhatsApp automation and a chatbot that uses AI to answer
                frequently asked questions, collect customer information, and
                ensure each conversation goes to the right place. This makes
                your team work better and answer questions faster.
              </p>
            </div>
          </div>

         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center mb-6">
                <Image
                  src={WhatsAppLiveChaticon}
                  alt="Support"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                WhatsApp Live Chat Support That Is Available All The Time
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Make your customers happy by answering their questions and
                reducing the time they have to wait. This is possible with the
                WhatsApp Business API, which makes sure your business is always
                available when your customers need it.
              </p>
            </div>

            
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6">
                <Image
                  src={MultiAgentLiveChaticon}
                  alt="Interactive"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                Sending And Receiving Rich Media And Interactive Messages
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Use buttons and quick replies that interact with the user to
                guide them, make it easier for them to decide what to do, and
                create conversations that are interesting and focused on selling
                things.
              </p>
            </div>

           
            <div className="bg-white rounded-[30px] p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mb-6">
                <Image
                  src={WebsiteLiveChaticon}
                  alt="Engagement"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-[#140a2e] mb-4 heading">
                Staying In Touch With Your Customers For 24 Hours
              </h3>

              <p className="text-gray-600 leading-relaxed pera">
                Send replies, updates, and follow-ups using tools that help you
                talk to your customers, which keeps your conversations active,
                relevant, and meaningful, and helps WhatsApp Live Chat Support
                and your business.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* 2st */}

      {/* 3st */}
      <div className="bg-[#F7EBFC] py-2 md:py-16 px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center px-1 md:px-4 pb-5">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center heading mb-2">
            Why Celitix WhatsApp Live Chat Makes It Better
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
                src={WhatsappLiveChatCelitixLive}
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
                  title: "All-in-One WhatsApp Dashboard",
                  content:
                    "Manage everything from a dashboard. Celitix offers a WhatsApp API platform. You can monitor chats, manage agents, track performance, and access customer data in one place. This makes things simpler. Improves efficiency.",
                },
                {
                  title: "Boost Conversions with Faster Responses",
                  content:
                    "Fast responses matter in customer communication. With real-time WhatsApp engagement, businesses can respond quickly. This can significantly improve conversion rates. Studies show that faster responses can increase conversions by up to 3 times. WhatsApp Live Chat is a tool for sales and support teams.",
                },
                {
                  title: "Personalized Customer Conversations",
                  content:
                    "Deliver experiences. Access customer history, preferences, and past interactions in one view. Advanced WhatsApp CRM integration helps your team respond. They can recommend products and build stronger customer relationships. Personalization improves satisfaction. It also increases customer loyalty and lifetime value.",
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
      <section className="w-full bg-[#f7ebfc] px-4 py-10 sm:px-6 md:py-16 lg:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            {/* <span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#6b0da1] shadow-sm mb-4 sub-heading">
              Customer support suite
            </span> */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-3">
              Elevate The Customer Experience
            </h2>
            {/* <p className="text-sm md:text-lg sub-heading text-gray-700">
              Handle conversations faster, automate responses, and give your
              team complete control over every customer interaction.
            </p> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
            {/* CARD 1 */}
            <div className="group bg-[#bbebe3] rounded-[24px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT */}
                <div className="w-full md:w-[52%] p-6 sm:p-7 lg:p-8">
                  {/* <div className="text-3xl mb-5">🟩</div> */}

                  {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#007e6f] shadow-sm mb-5">
                    01
                  </span> */}
                  <h2 className="text-xl sm:text-2xl leading-tight font-bold text-[#0b1633] heading mb-4">
                    AI Chatbot + Live Agent Handover
                  </h2>

                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111827] pera text-justify hyphens-auto">
                    We can use WhatsApp to combine the power of automation with
                    support. The AI Chatbot can handle frequently asked
                    questions and find new leads. Then it can transfer complex
                    questions to live agents. This way, we can resolve issues
                    faster and make the customer experience better.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[48%] relative min-h-[220px] sm:min-h-[260px] md:min-h-full bg-white/35">
                  <Image
                    src={AIChatbotLiveAgentHandover}
                    alt="Feature 1"
                    fill
                    className="object-contain p-5 md:p-7 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-[#dbe2f7] rounded-[24px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT */}
                <div className="w-full md:w-[52%] p-6 sm:p-7 lg:p-8">
                  {/* <div className="text-3xl mb-5">❓</div> */}

                  {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2b40b0] shadow-sm mb-5">
                    02
                  </span> */}
                  <h2 className="text-xl sm:text-2xl leading-tight font-bold text-[#0b1633] heading mb-4">
                    Internal Notes & Team Collaboration Tools
                  </h2>

                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111827] pera text-justify hyphens-auto">
                    Our team can work better with tools like internal notes,
                    tags, and mentions. Agents can share information, update the
                    status, and work together effectively. This helps our team
                    communicate better, reduce mistakes, and handle customers
                    better.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[48%] relative min-h-[220px] sm:min-h-[260px] md:min-h-full bg-white/35">
                  <Image
                    src={InternalNotesTeamCollaborationTools}
                    alt="Feature 2"
                    fill
                    className="object-contain p-5 md:p-7 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-[#f1e3ed] rounded-[24px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT */}
                <div className="w-full md:w-[52%] p-6 sm:p-7 lg:p-8">
                  {/* <div className="text-3xl mb-5">💬</div> */}

                  {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#a3336f] shadow-sm mb-5">
                    03
                  </span> */}
                  <h2 className="text-xl sm:text-2xl leading-tight font-bold text-[#0b1633] heading mb-4">
                    Customer Conversation Tracking
                  </h2>

                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111827] pera text-justify hyphens-auto">
                    We can see everything about our customers with conversation
                    tracking and customer relationship management integration.
                    We can look at customer profiles, chat history, and
                    timelines to understand our customers better. This helps our
                    team give relevant and effective support to our customers.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[48%] relative min-h-[220px] sm:min-h-[260px] md:min-h-full bg-white/35">
                  <Image
                    src={CustomerConversationTracking}
                    alt="Feature 3"
                    fill
                    className="object-contain p-5 md:p-7 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group bg-[#efe2c6] rounded-[24px] overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.14)]">
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT */}
                <div className="w-full md:w-[52%] p-6 sm:p-7 lg:p-8">
                  {/* <div className="text-3xl mb-5">🏆</div> */}

                  {/* <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#8a6214] shadow-sm mb-5">
                    04
                  </span> */}
                  <h2 className="text-xl sm:text-2xl leading-tight font-bold text-[#0b1633] heading mb-4">
                    Advanced Chat Segmentation
                  </h2>

                  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111827] pera text-justify hyphens-auto">
                    We can organize our conversations better with filters like
                    inactive, assigned, and unread chats. We can also group our
                    customers based on how they behave, what they like, or how
                    they interact with us. This helps us talk to our customers
                    in a targeted way, which is really useful for businesses.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-[48%] relative min-h-[220px] sm:min-h-[260px] md:min-h-full bg-white/35">
                  <Image
                    src={AdvancedChatSegmentation}
                    alt="Feature 4"
                    fill
                    className="object-contain p-5 md:p-7 transition-transform duration-300 group-hover:scale-105"
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
          <div className="text-center px-1 md:px-4 pb-2 md:pb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-2">
              WhatsApp Live Chat: Engage. Support. Convert.
            </h2>
            {/* <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
              Handle conversations faster, automate responses, and give your
              team complete control over every customer interaction.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Left Text Block */}
            <div className="space-y-6">
              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Connect Your Customers Instantly
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "You can talk to your customers away using WhatsApp Live Chat software. This means you can help them at the moment they need it.",
                    "To get customers, you can use something called Click-to-WhatsApp chat integration. This helps people start conversations with you on WhatsApp.",
                    "You can also use the WhatsApp Business API to start talking to people",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-start gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500 mt-2"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Rich Chat Experience
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "You can send all sorts of things to your customers on WhatsApp, like images and videos, and even PDFs and catalogs.",
                    "You can also use replies and buttons to help guide your customers and make the conversation easier.",
                    "WhatsApp has tools that can help make conversations with your customers feel more natural.",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-start gap-2"
                    >
                      <CheckCircleIcon
                        className="text-blue-500 mt-2"
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
                src={WhatsAppLiveChatEngage}
                alt="Phone Mockup"
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[380px] object-contain"
              />
            </div>

            {/* Right Text Block */}
            <div className="space-y-6">
              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Support, Resolve & Retain
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "When your customers have questions, you can use WhatsApp customer support software to help them.",
                    "If you have a lot of customers asking questions, you can use an inbox that lets many people help at the same time.",
                    "This helps you answer questions quickly and makes your customers happier.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon
                        className="text-blue-500 mt-2"
                        fontSize="small"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Scale Conversations Efficiently
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "If you have a lot of customers trying to talk to you, you can use a system to help manage all the conversations.",
                    "You can also use automation and chatbots to help with some of the work.",
                    "Some tools can help you see how well you are doing and make reports so you can make things even better.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircleIcon
                        className="text-blue-500 mt-2"
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
            WhatsApp Live Chat FAQs
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
