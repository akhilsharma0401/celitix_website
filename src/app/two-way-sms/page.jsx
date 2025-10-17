"use client"
import React, {  useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async"

// import { whatsappbusinessapi } from "@/assets/images"
// import { CELITIX_FAV_ICON } from "@/assets/images"
// import { demo } from "@/assets/images"
// import { versatile_sms_api_for_automation } from "@/assets/images"
// import { voice_solutions_client_engagement } from "@/assets/images"
// import { initScrollReveal } from '../../utils/ScrollReveal';
import { AnalyticsReady, Authenticationicon, AutomatedCampaigns, Availability, blog2, blog3, blog4, careercardicon1, careercardicon2, careercardicon3, Click2callicon, CompliantMessaging, CRMRecords, CRMSystemIntegration, CTALASTIMAGE, CustomerReplies, Emailicon, IBDicon, InstantReplies, MissedCallicon, OBDicon, OmnichannelReady, PostInteraction, RCSicon, RealTimeWAYSM, ReducedManualLoad, RetargetCustomers, section5th1, section5th2, section5th3, section5th4, section5th5, section5th6, SendSMSorRunAds, SmarterCommunication, sms2way, SMSicon, SystemTriggers, Two_Way_SMS, twoWaySMSicon, WhatsAppicon, WhyCelitixTwoWaySms } from '../../../public/assets/images';
import Image from 'next/image';
import Link from "next/link";


import SmsIcon from '@mui/icons-material/Sms'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import UpdateIcon from '@mui/icons-material/Update'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import FaqItem from '../components/Faq';
import UniversalButton from '../components/UniversalButton';
import FormPopup from '../components/FormPopup';
const TwoWaySms = () => {

  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  // 7rd
  const blogPosts = [
    {
      date: "September 16, 2024",
      title: "Generative AI security: How to keep your chatbot healthy and your platform protected",
      description:
        "Discover essential strategies to secure AI chatbots from evolving GenAI threats. Learn how to protect your AI investments now and keep them healthy and thriving.",
      tags: ["BLOG", "GENRATIVE AI", "CUSTOMER SECURITY", "BEST PRACTICES"],
      img: sms2way,
      color: "bg-orange-50",
    },
    {
      date: "September 5, 2024",
      title: "What is conversational AI? Examples and how it works",
      description:
        "Get a grasp on what Conversational AI actually is, with examples how it improves customer engagement and streamlines business operations.",
      tags: ["BLOG", "CONVERSATIONAL EXPERIENCE", "BEST PRACTICES"],
      img: blog2,
      color: "bg-blue-50",
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
      question: "What is 2-Way SMS, and how does it work?",
      answer:
        "2-Way SMS lets customers reply to your messages using a shortcode or virtual number. Celitix processes their responses and triggers actions like replies, confirmations, or CRM updates.",
    },
    {
      question: "What’s the difference between a VMN and a shortcode?",
      answer:
        "A VMN is a 10-digit virtual mobile number, ideal for low-cost two-way communication. A shortcode is a 5–6 digit number, easier to remember and better for large-scale, public-facing campaigns.",
    },
    {
      question: "Can I automate replies with Celitix’s 2-Way SMS?",
      answer:
        "Yes. You can set up keyword-based automations to send replies, trigger workflows, or log responses, all without manual intervention.",
    },
    {
      question: "What are some real use cases of 2-Way SMS?",
      answer:
        "Surveys, feedback collection, customer support, opt-ins, voting, lead qualification, appointment confirmations, and more.",
    },
    {
      question: "Do I need technical skills to use Celitix’s 2-Way SMS features?",
      answer:
        "Not at all. You can manage campaigns and automations via our dashboard or integrate with your systems using our simple APIs.",
    },
    {
      question: "6. How quickly can I start a 2-Way SMS campaign?",
      answer:
        "Once your shortcode or VMN is provisioned (which we help with), you can launch a live campaign in just a few clicks.",
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


  // 5th
  const features = [
    { title: 'Send SMS or Run Ads with 2-Way Code', imgSrc: SendSMSorRunAds },
    { title: 'Customer Replies or Sends an SMS', imgSrc: CustomerReplies },
    { title: 'System Triggers Auto-Responses', imgSrc: SystemTriggers },
    { title: 'CRM Records Interaction', imgSrc: CRMRecords },
    { title: 'Post-Interaction Actions', imgSrc: PostInteraction },
    { title: 'Retarget Customers or View Analytics', imgSrc: RetargetCustomers },
  ]
  // 5th





  return (
    <div>
      {/* <Helmet>
        <title>2 Way SMS Platform | Celitix </title>
        <meta name="description" content="Enable real-time, two-way communication via SMS. Use Celitix’s 2 Way SMS to automate replies, collect feedback, and create seamless customer journeys" />
        <link rel="preload" as="image" href={Two_Way_SMS} crossorigin="anonymous" />
      </Helmet> */}


      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              Two-Way SMS Solutions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 popf leading-tight">
              Connect, Respond & Grow with<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> SMS 2-Way </span>Messaging
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md pera">
              Connect with customers via 2-way SMS campaigns. Used for voting, quizzes, surveys, polls, feedback, and automations.
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
              src={Two_Way_SMS}
              alt="Two-Way SMS Solutions"
              loading="eager"
              // fetchpriority="high"
              // crossorigin="anonymous"
              title='Two-Way SMS Solutions'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 popf">
            Real-Time Interaction, Simplified
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">

          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">

            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={InstantReplies}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Send & Receive SMS</h3>
                <p className="text-md text-black pera ml-4">
                  Let customers communicate with your business by sending SMS and reply to them automatically.
                </p>
              </div>
            </div>


            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10 ">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={AutomatedCampaigns}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Large-Scale Interaction</h3>
                <p className="text-md text-black pera ml-4">
                  Perfect for large-scale campaigns. The system can easily handle thousands of texts simultaneously.

                </p>
              </div>
            </div>


            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CRMSystemIntegration}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Keyword-based Automation</h3>
                <p className="text-md text-black pera ml-4">
                  Use keywords to automate your process. For example, “SMS HELP @ 28856 to raise a support ticket.
                </p>
              </div>
            </div>
          </div>


          <div className="flex justify-center order-first md:order-none">
            <Image
              src={RealTimeWAYSM} // Replace with your image path
              alt="Phone Mockup"
              className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] object-contain"
            />
          </div>


          <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">

            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={Availability}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Longcode VMNs</h3>
                <p className="text-md text-black pera ml-4">
                  Virtual Mobile Numbers (VMNs) allow auto-process integrations affordably. Follow up with bulk SMS.
                </p>
              </div>
            </div>


            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CompliantMessaging}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Shortcode Numbers</h3>
                <p className="text-md text-black pera ml-4">
                  Easier to remember and perfect for interactive campaigns like surveys. They can also send replies.
                </p>
              </div>
            </div>


            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={AnalyticsReady}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 heading ml-4">Custom Triggers</h3>
                <p className="text-md text-black pera ml-4">
                  Can be used for everything from checking balance at any time to automating feedback as a touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-2">
            Why Celitix for 2 Way SMS?
          </h2>
          <p className='text-sm md:text-xl font-semibold sub-heading text-gray-700'>Improve customer experience with creative campaigns & better communication!
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={ReducedManualLoad}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Reduced Manual Load
                </h3>
                <p className="text-md text-gray-800 pera leading-relaxed">
                  Automate your operations. Let customers check their balance, opt in for offers, & more with a text.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={SmarterCommunication}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Interactive Campaigns
                </h3>
                <p className="text-md text-gray-800 pera leading-relaxed">
                  Engage users in creative ways. Ex: Decide on your next product by taking votes from customers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={OmnichannelReady}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Customisable Solutions
                </h3>
                <p className="text-md text-gray-800 pera leading-relaxed">
                  Choose from long VMNs or short codes based on your needs. Follow up with bulk SMS, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={WhyCelitixTwoWaySms}
              alt="Why Celitix Makes It Better"
              className="w-60 sm:w-80 md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* 3st */}
      {/* 4th */}
      <div className='bg-[#f7ebfc] py-2 md:py-10 '>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-3xl md:text-4xl heading font-bold text-white popf ">
              Connect Better with Customers
            </h2>
            <p className="text-sm md:text-lg text-white sub-heading font-light popf mt-2">
              Discover how 2-Way SMS helps you improve the customer experience.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Consult Expert"
                variant="transitionbtn"
                className="px-6 py-3 rounded-full text-black bg-white hover:bg-gray-200 transition-all duration-300"
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
      {/* 5th */}
      <div className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-5 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900">
            2-Way SMS: Step-by-Step Workflow </h2>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className=" bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th1}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">1. Choose Number & Keyword(s)</h3>
            <p className="text-sm md:text-lg text-purple-600 text-center sub-heading font-medium mb-2">  5-6 digit Shortcode or 10 digit VMN</p>
            {/* <p className="text-sm md:text-lg pera text-gray-600">
                    5-6 digit Shortcode or 10 digit VMN
                    </p> */}
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th2}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">2. Plan The Automation
            </h3>
            <p className="text-sm md:text-lg text-purple-600 text-center sub-heading font-medium mb-2">Like: e.g. Reply or count as a vote
            </p>

          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th3}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">3. Share Code With Customers</h3>
            <p className="text-sm md:text-lg text-center text-purple-600 sub-heading font-medium mb-2">Through an ad or on your website
            </p>

          </div>
          {/* Card 1 */}
          <div className=" bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th4}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">4. Customer Texts Keyword</h3>
            <p className="text-sm md:text-lg text-purple-600 text-center sub-heading font-medium mb-2">From their mobile phones</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th5}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">5. The System Records Data
            </h3>
            <p className="text-sm md:text-lg text-center text-purple-600 sub-heading font-medium mb-2">Including mobile numbers
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center justify-center gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={section5th6}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-center text-gray-800 mb-1 mt-5">6. Action Gets Triggered</h3>
            <p className="text-sm md:text-lg text-center text-purple-600 sub-heading font-medium mb-2">Reply or follow up via other channels
            </p>

          </div>
        </div>

      </div>
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 lg:px-20 py-2 md:py-10  text-center">
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
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[500px] object-contain lg:absolute top-0 md:-top-65"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl heading md:text-4xl font-bold mb-4">
            Engage Customers with Creative Campaigns
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Turn broadcasts into conversation. Connect with your customers and drive sales.
          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl bg-white hover:bg-gray-200 transition-all duration-300 sm:px-4 sm:py-2 "
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
      {/* <div className="w-full px-4 py-5 md:py-20 bg-[#f4f7fb]">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-18">
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
                <h3 className="font-semibold sub-heading text-lg text-gray-800 mt-2 mb-3 line-clamp-2">
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
      <div className=" bg-[#f7ebfc] flex justify-center items-center py-10 md:py-20 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            2 Way SMS FAQs
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
  )
}

export default TwoWaySms
