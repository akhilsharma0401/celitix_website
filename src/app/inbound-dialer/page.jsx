"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { initScrollReveal } from '../../utils/ScrollReveal';
import { AgentVisibility, Authenticationicon, BuildCustomFlows, BuilttoScaleibd, CallHandling, CallQueuing, Click2callicon, CTALASTIMAGE, CustomIVRMenus, Emailicon, FasterResolutionsibd, IBDicon, Inbound_Dialer, MakeEveryIBD1, MakeEveryIBD2, MakeEveryIBD3, MissedCallicon, OBDicon, PerfectIBD, PostCallActionsibd, RCSicon, RealTimeAnalyticsibd, RobustIntegrationsibd, SmarterCallsIBD, SMSicon, twoWaySMSicon, WhatsAppicon, WhyChooseIBD } from '../../../public/assets/images';
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import FaqItem from '../components/Faq';
import FormPopup from '../components/FormPopup';
import UniversalButton from '../components/UniversalButton';

const Ibd = () => {
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
      question: "What is an Inbound Dialer (IBD)?",
      answer:
        "Celitix’s IBD solution handles incoming customer calls using IVR and routing logic. ",
    },
    {
      question: "Can it handle high call volumes?",
      answer:
        "Yes. Celitix’s IBD is built to scale with queueing and fallback options.",
    },
    {
      question: "Can we use our own phone numbers?",
      answer:
        "Yes. You can use toll-free, local, or international numbers.",
    },
    {
      question: "Does it work after business hours?",
      answer:
        "Absolutely. You can enable 24/7 routing and voicemail capture.",
    },
    {
      question: "How is it integrated with CRM?",
      answer:
        "Every call can be logged, tracked, and connected to your customer records via API.",
    },
    {
      question: "Is it possible to automate follow-ups?",
      answer: "Yes. You can trigger SMS, emails, or assign agents post-call automatically."
    }
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
  const [openIndexdrop, setOpenIndexdrop] = useState(0)
  const items = [
    {
      title: 'CRM Integration ',
      detail:
        'Log customer info and past calls into your system automatically.',
    },
    {
      title: 'Cross-Channel Sync',
      detail:
        'Trigger emails, SMS, or WhatsApp after each inbound call.',
    },
    {
      title: 'Queue Management ',
      detail:
        'Avoid dropped calls by offering queue status or voicemail fallback.',
    },
    // {
    //   title: 'Global Routing ',
    //   detail:
    //     'Toll-free, local, and international numbers supported with full IVR.',
    // },
  ]

  // 5th

  // extra section

  const tabs = [
    { key: 'Smart IVR Menus', label: 'Smart IVR Menus' },
    { key: 'Real-Time Agent Routing ', label: 'Real-Time Agent Routing ' },
    { key: 'Recording & Analytics ', label: 'Recording & Analytics ' },

  ]

  const tabData = {
    'Smart IVR Menus': {
      heading: 'Let Callers Choose Who They Want  ',
      description:
        'Create intelligent IVR trees that help customers get where they need to. From “Press 1 for Sales” to “Press 3 for Refunds,” guide every caller efficiently. Customise the menu according to your needs.',
      buttonText: 'Learn More',
      image: MakeEveryIBD1,
    },
    'Real-Time Agent Routing ': {
      heading: 'Connect To The Right Person, Faster ',
      description: 'No more cold transfers or repeated holds. Connect incoming calls to the most relevant, available agent in real-time, based on your chosen routing logic. It’s routing that respects everyone’s time. ',
      buttonText: 'Learn More',
      image: MakeEveryIBD2,
    },
    'Recording & Analytics ': {
      heading: 'Every Insight, Captured',
      description:
        'Record every conversation, inbound or transferred, for training, compliance, or quality checks. Get detailed call logs, durations, hold times, and agent performance metrics in one place.',
      buttonText: 'Get Started',
      image: MakeEveryIBD3,
    },

  }

  const [activeTab, setActiveTab] = useState('Smart IVR Menus');
  const content = tabData[activeTab];
  // extra section


  return (
    <div>
      {/* <Helmet>
        <title>Inbound Dialer & IVR Solutions | Celitix </title>
        <meta name="description" content="Manage incoming calls in large volumes with smart routing & records. Improve sales, support, and customer service with Celitix’s Inbound Dialer & IVR solutions." />
        <link rel="preload" as="image" href={Inbound_Dialer} crossorigin="anonymous" />
      </Helmet> */}



      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide popf">
              Inbound Dialer & IVR Solutions
            </span>

            <h1 className="text-2xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 popf leading-tight">
              Attend<span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Every </span> Call with IBD
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md sub-heading">
              Empower your business with a scalable inbound dialer (IBD) voice solution. Offering IVR menus, routing, and full call records.
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
              src={Inbound_Dialer}
              alt="Attend Every Call with IBD"
              loading="eager"
              // fetchpriority="high"
            //   crossorigin="anonymous"
              title='Attend Every Call with IBD'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-25">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-15">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900">
            Perfect for Every Calling Need
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start justify-center">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-end gap-2 lg:gap-6 md:px-0 px-5 mb-1 md:mb-0">
            {/* Card 1 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CustomIVRMenus}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">Custom IVR Menu</h3>
                <p className="text-md pera text-black ml-4">
                  Design interactive menus to collect info and route calls to the right department in seconds.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% mr-0 lg:mr-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={CallHandling}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">24/7 Call Handling </h3>
                <p className="text-md pera text-black ml-4">
                  Never miss a call. Handle, route, and record every inbound query, even outside working hours.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full ml-0 lg:w-90% lg:ml-10">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={AgentVisibility}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">Agent Visibility </h3>
                <p className="text-md pera text-black ml-4">
                  Give agents full caller context with real-time CRM data for faster, more personalised responses.

                </p>
              </div>
            </div>
          </div>

          {/* Center Mobile Mockup */}
          <div className="flex justify-center order-first md:order-none">
            <Image
              src={PerfectIBD}// Replace with your image path
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
                    src={CallQueuing}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">Call Queuing</h3>
                <p className="text-md pera text-black ml-4">
                  Manage peak traffic with smart queues, estimated wait times, and optional voicemail fallback.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative max-w-md w-full lg:w-90% lg:ml-10 ml-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={PostCallActionsibd}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">Post-Call Actions</h3>
                <p className="text-md pera text-black ml-4">
                  Trigger automatic follow-ups via messaging channels and log detailed feedback for every interaction.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative max-w-md w-full lg:w-90% lg:mr-10 mr-0">
              <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
                <div className="w-15 h-15 bg-blue-500 rounded-full shadow-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={RealTimeAnalyticsibd}
                    alt="Feature Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white border border-black rounded-[20px] p-5 pl-8 relative z-0">
                <h3 className="text-lg heading font-bold text-black mb-1 ml-4">Real-Time Analytics</h3>
                <p className="text-md pera text-black ml-4">
                  Track key metrics like duration, resolution time, and caller satisfaction in one live dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2st */}
      {/* 3st */}
      <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-20">
        <div className="text-center px-1 md:px-4 pb-5 md:pb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 mb-1">
            Why Choose Celitix’s Inbound Dialer?
          </h2>
          <p className='text-sm md:text-lg sub-heading font-semibold text-gray-700'> A flexible, cloud-based solution to manage and route inbound calls smartly.

          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-12 lg:gap-20">

          {/* Left Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={BuilttoScaleibd}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg heading font-bold text-black mb-1">
                  Built to Scale
                </h3>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  Handle any volume and connect to outbound campaigns with customisable IVRs, call flows, and dynamic routing.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={RobustIntegrationsibd}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="text-base md:text-lg heading font-bold text-black mb-1">
                  Robust Integrations
                </h4>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  Sync call data in real-time with your CRM, helpdesk, or others systems for seamless customer handling.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-[#FFFFFF] p-6 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center">
                <Image
                  src={FasterResolutionsibd}
                  alt=""
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg heading font-bold text-black mb-1">
                  Faster Resolutions
                </h3>
                <p className="text-md pera text-gray-800 leading-relaxed">
                  Smartly route calls based on caller intent, customer profile, or urgency to reduce wait and resolution times.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <Image
              src={WhyChooseIBD}
              alt="Why Celitix Makes It Better"
              className="w-60 sm:w-80 md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* 3st */}
      {/* 4th */}
      <div className='bg-[#f7ebfc] py-2 md:py-10'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-bold heading text-white sm:text-3xl md:text-4xl">
              Make Every Call Count
            </h2>
            <p className="text-sm md:text-lg sub-heading  text-white font-light mt-2">
              Switch to smarter inbound call handling with IVR, routing, and real-time insights.

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
      {/* 4th */}
      {/* extra */}
      <section className="py-2 md:py-10 bg-[#f7ebfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl heading text-center mb-6 sm:mb-8">
            Make Every Call Count
          </h2>

          {/* Tabs - scrollable on mobile */}
          <div className="overflow-x-auto flex lg:justify-center justify-start">
            <div className="inline-flex space-x-4 px-4 lg:px-0">
              {tabs.map(tab => {
                const active = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
            relative
            px-4 py-2
            uppercase text-xs sm:text-sm tracking-wide
            transition-colors focus:outline-none whitespace-nowrap
            rounded-t-xl
            ${active
                        ? 'text-white bg-[#6E11B0] shadow-lg heading'
                        : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'}
          `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>


          {/* Content box */}
          <div className="border border-[#6b0da1] rounded-3xl shadow-inner bg-white">
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-6 sm:p-8">
              {/* Text */}

              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold sub-heading">
                  {content.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed pera text-sm sm:text-base">
                  {content.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center h-96">
                <Image
                  src={content.image}
                  alt={activeTab}
                  className="w-80 h-auto "
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* extra */}
      {/* 5th */}
      <section className="bg-[#f7ebfc] py-2 md:py-10">
        {/* Heading */}
        <div className="text-center px-4 md:px-8 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 heading">
            Smarter Calls, Better Customer Experience
          </h2>
          <p className="text-sm md:text-lg text-gray-700 font-light popf mt-2 sub-heading">Secure, Flexible, and User Experience-friendly</p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 ">
          {/* Image Column */}
          <div className="flex justify-center ">
            <Image
              src={SmarterCallsIBD}
              alt="Dashboard screenshot"
              className="w-96 h-1/2"
            />
          </div>

          {/* Accordion Column */}


          <div className="space-y-2 mt-0 md:mt-10 overflow-y-auto h-[400px]">
            {items.map((item, idx) => {
              const isOpen = idx === openIndexdrop
              return (
                <div
                  key={idx}
                  className={`rounded-lg overflow-hidden transition-colors ${isOpen ? 'bg-blue-100' : 'bg-purple-50'
                    }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndexdrop(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`text-base sm:text-lg font-medium ${isOpen ? 'text-purple-700' : 'text-gray-800'
                        }`}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ExpandLessIcon className="text-purple-700" />
                    ) : (
                      <ExpandMoreIcon className="text-gray-400" />
                    )}
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out bg-white text-gray-900 px-4 sm:px-6 ${isOpen
                      ? 'opacity-100 py-4 '
                      : 'opacity-0 py-0 max-h-0'
                      }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* 5th */}
      {/* 6nd */}
      <section className="bg-[#f6effc] px-4 sm:px-6 lg:px-20 py-2 md:py-10  text-center">
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
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[440px] object-contain lg:absolute top-0 md:-top-60"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl heading font-bold mb-4">
            Improve Your Customer Experience
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Enhance support with reliable inbound call flows, smart routing, and real-time tracking.

          </p>
          <UniversalButton
            label="Start Now"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 "
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading text-gray-900 popf">
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
                  <img
                    src={post.img}
                    alt="blog"
                    className=" w-full h-40 object-cover border-4 border-white"
                  />
                  <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <p className="text-gray-600 text-sm">{post.date}</p>
                <h3 className="font-semibold text-lg sub-heading text-gray-800 mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 pera line-clamp-3">
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
      <div className="min-h-screen bg-[#f7ebfc] flex justify-center items-center py-10 md:py-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 mb-8">
            Inbound Dialer FAQs
          </h2>

          <div className="bg-white rounded-xl py-4 px-2 sm:px-4">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={
                  <h4 className="text-base md:text-md heading font-medium text-gray-900 ">
                    {faq.question}
                  </h4>
                }
                // question={faq.question}
                answer={
                  <span className="text-sm md:text-md sub-heading  font-semibold text-gray-700">
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

export default Ibd
