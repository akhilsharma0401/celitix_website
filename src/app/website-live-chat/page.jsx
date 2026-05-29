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
  WebsitelivechatService,
  UnlockPowerfulWebsite,
  WhyBusinessesWebsite,
  CompleteWebsiteLiveChatSolution,
  EngagementOnArrival,
  PromptUserActions,
  ConversationsWithStyle,
  ChatbotAgentCollaboration,
  ConvertVisitorstoCustomers,
  IntelligentLeadRouting,
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
 
  // 8rd
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is website live chat, and why is it important?",
      answer:
        "Website live chat is an interactive feature that enables businesses to communicate instantly with their visitors on the website. It has great importance when it comes to providing an improved customer experience due to instant interaction, decreased bounce rates, and conversion of visitors into potential customers.",
    },
    {
      question: "How does website live chat improve customer engagement?",
      answer:
        "Website live chat engages visitors from the very beginning of the visit by proactively messaging them. Users will receive responses instantly without having to wait for phone calls and emails, thus increasing the level of engagement on your website.",
    },
    {
      question: "Can website live chat help generate leads?",
      answer:
        "Yes, website live chat is very helpful in the process of lead generation. Businesses can gather information about their customers and assess whether those people are suitable prospects for them. Website live chat will allow you to direct users towards taking particular actions, such as demo bookings.",
    },
    {
      question: "Is website live chat enabled for AI & automation?",
      answer:
        "Yes, nowadays, website live chat comes with the capability of having AI-based chatbots, which can respond to routine questions immediately and work around the clock.",
    },
    {
      question: "Is the website's live chat 24/7 available?",
      answer:
        "Yes, thanks to AI automation technology, website live chat provides 24/7 availability. Thus, even when you go offline, the chatbot will answer users’ questions and generate leads for your company.",
    },
    {
      question: "Is it easy to install a live chat on my website?",
      answer:
        "Yes, it takes only a few seconds to install a live chat on any site. In order to integrate it, all that you need is to insert some code into the website.",
    },
    {
      question:
        "Can I customize the website's live chat according to my needs?",
      answer:
        "Yes, website live chat can be fully customized to suit your business. Thus, you can change its look and functionality as required.",
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



  return (
    <div>
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-20">
          <div className="space-y-6 box-reveal-left">
            <div className="box-reveal-left">
              <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Website live chat
              </span>
            </div>

            <div className="box-reveal-left space-y-6">
              <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl heading  font-bold text-gray-900 popf leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                  Website Live Chat
                </span>{" "}
                Convert Visitors Into Customers
              </h1>

              <p className="text-gray-600 text-base md:text-lg ">
                Capture the attention of your visitors the very first time they
                come across your website through a smart live chat system meant
                for instant interaction. Interact immediately with inquiries,
                assist visitors with their needs, and qualify hot leads before
                they even think about leaving. With the help of AI automation
                and effortless integration with human agents, you can offer
                personalized service, sort out problems instantly, and never
                miss an opportunity again.
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
              src={WebsitelivechatService}
              alt="Website Live Chat"
              // loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title="Website Live Chat"
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
            Unlock a Powerful Website Live Chat That Converts Every Visitor
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
                    src={EngagementOnArrival}
                    alt="Showcase-Catalogues"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Engagement On Arrival
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Begin a conversation the minute a visitor reaches your website
                  through automatic greetings and intelligent triggers. Reach
                  out to them before they even have a chance to navigate away
                  from your page.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={PromptUserActions}
                    alt="ClicktoWhatsAppAds"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Prompt User Actions
                </h3>
                <p className="text-md text-black pera ml-2 text-justify">
                  Encourage visitors to do something productive with guided chat
                  flows and instant replies. From answering questions about your
                  product or service, to prompting them to engage with your
                  brand.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ConversationsWithStyle}
                    alt="MultiAgentLiveChat"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Conversations With Style
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Design conversations that are visually rich with images,
                  links, and forms. Create interactive conversations that not
                  only educate but also look good enough to represent your brand
                  messaging.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center items-center order-first md:order-none h-full">
            <Image
              src={UnlockPowerfulWebsite}
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
                    src={ChatbotAgentCollaboration}
                    alt="Chatbots"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Chatbot + Agent Collaboration
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Use the power of Artificial Intelligence (AI) to answer
                  questions automatically and qualify your leads. In case the
                  query requires personal attention, escalate the conversation
                  to live agents with all context.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={IntelligentLeadRouting}
                    alt="LiveNotifications"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Intelligent Lead Routing
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Track visitor activity on your site and route conversations
                  based on their behavior. Whether they clicked a button,
                  visited specific pages, or exhibited certain interests, direct
                  them to the right content at the right time.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-lg w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={ConvertVisitorstoCustomers}
                    alt="PromoteinBulk"
                    className="w-8 h-8 object-contain"
                    // loading="auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-2">
                  Convert Visitors to Customers
                </h4>
                <p className="text-md text-black pera ml-2 text-justify">
                  Capture leads instantly, resolve queries without delay, and
                  guide them to the next step. Increase conversions while
                  enhancing the customer experience with efficient interactions.
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
        <div className="text-center px-1 md:px-4 pb-5 md:pb-8 lg:pb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black text-center heading mb-2">
            Why Businesses Trust Celitix Website Live Chat
          </h2>
          <p className="text-sm md:text-lg sub-heading max-w-6xl mx-auto text-gray-700 ">
            Deliver faster responses, smarter conversations, and seamless
            customer experiences that turn visitors into real opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-20 px-8">
          {/* Left Image Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="w-full h-full my-5">
              <Image
                src={WhyBusinessesWebsite}
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
                  title: "No Visitor Escapes Your Notice",
                  content:
                    "Welcome all your visitors to your website with automatic greetings and instantaneous responses. No matter whether it is a mere query or a highly interested lead, everything gets captured and handled without any time lag.",
                },
                {
                  title: "Conversions through Conversations",
                  content:
                    "Turn the regular website visitors into conversions. Get all queries answered in an instant, clarify all doubts in real time, and guide all users to the booking process, to the purchase, or to contact you – one thing leading to another.",
                },
                {
                  title: "Fast Responses Build Trust",
                  content:
                    "Respond to all queries at lightning speed using a combination of artificial intelligence automation and real-time human assistance. Fast replies improve user experience and make your interactions more likely to result in conversion.",
                },
                {
                  title: "A System for Growth",
                  content:
                    "Run many conversations at once while maintaining quality standards. If you have a fluctuating number of visitors, then your system will be able to handle them effectively and consistently at each point of conversation.",
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

      {/* 5th */}
      <section className=" bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center px-1 md:px-4 pb-2 md:pb-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-2 max-w-7xl mx-auto">
              Complete Website Live Chat Solution for Faster Support & Higher Conversions
            </h2>
            <p className="text-sm md:text-lg sub-heading text-gray-700 max-w-5xl mx-auto">
              Streamline customer communication, automate responses, and manage every interaction with a powerful AI-driven live chat platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="space-y-6 px-0 2xl:px-5">
              <div className=" text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Unified Customer Conversations
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Manage Live chat on your website through one dashboard",
                    "Gain clarity in the form of organized chat data",
                    "Streamline teamwork and eliminate any confusions",
                    "Never miss or duplicate customers’ messages",
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
                  Chat Routing Intelligence
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Assign chats automatically according to agent availability",
                    "Direct queries to the appropriate teams/departments immediately",
                    "Distribute the load equally among your agents",
                    "Speed up response and boost customer experience",
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

            <div className="flex justify-center w-full">
              <Image
                src={CompleteWebsiteLiveChatSolution}
                alt="Phone Mockup"
                className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[450px] object-contain"
              />
            </div>

           
            <div className="space-y-6 px-0 2xl:px-5">
              <div className="text-left space-y-2">
                <h3 className="text-base sm:text-lg font-semibold heading">
                  Swift Responses & Pre-built Chat Templates
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Set up instant responses for frequently asked queries",
                    "Respond quickly with the help of prebuilt messages",
                    "Deliver consistent messages amongst the team",
                    "Save efforts and boost efficiency",
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
                  Powerful Chat Metrics & Analytics
                </h3>
                <ul className="text-gray-700 space-y-2 text-md sub-heading text-justify">
                  {[
                    "Have access to full chat history whenever needed",
                    "Analyze user behavior and prior interactions",
                    "Measure the productivity and effectiveness of messages sent",
                    "Drive decisions based on data for better results",
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
            Live Chat FAQs
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
