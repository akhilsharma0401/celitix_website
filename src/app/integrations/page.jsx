"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UniversalButton from "../components/UniversalButton";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CHAIN, CTALASTIMAGE, IntegrationCustomer, IntegrationFinancial, IntegrationProfessional, IntegrationRealEstate, IntegrationsCelitix, IntegrationsFreshdesk, IntegrationsFreshWork, IntegrationsLeadSquared, IntegrationsSales, IntegrationsSheets, IntegrationsShopify, IntegrationsWoo, IntegrationsZoho, IntegrationTech, RichCampaigns, } from "../../../public/assets/images";
import FaqItem from "../components/Faq";
import FormPopup from "../components/FormPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  {/* scetion 1 */ }
  // Slider config
  const MotionImage = motion(Image);
  const logos = [
    { src: IntegrationsShopify, alt: "Shopify" },
    { src: IntegrationsWoo, alt: "WooCommerce" },
    { src: IntegrationsZoho, alt: "Zoho" },
    { src: IntegrationsSales, alt: "Salesforce" },
    { src: IntegrationsSheets, alt: "IntegrationsSheets" },
    { src: IntegrationsFreshdesk, alt: "IntegrationsFreshdesk" },
    { src: IntegrationsFreshWork, alt: "IntegrationsFreshWork" },
    { src: IntegrationsLeadSquared, alt: "IntegrationsLeadSquared" },
  ];
  const interval = 2500;
  const direction = "up"; // "up" | "down" | "left" | "right"

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (logos.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % logos.length), interval);
    return () => clearInterval(id);
  }, [interval, logos.length]);

  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "up" || direction === "left" ? 1 : -1;

  const variants = {
    enter: { [axis]: sign * 24, opacity: 0 },
    center: { [axis]: 0, opacity: 1 },
    exit: { [axis]: -sign * 24, opacity: 0 },
  };
  {/* scetion 1 */ }
  {/* scetion 2 */ }
  const logotwos = [
    { src: IntegrationsSales, alt: "Salesforce" },
    { src: IntegrationsWoo, alt: "WooCommerce" },
    { src: IntegrationsFreshWork, alt: "Freshworks" },
    { src: IntegrationsSheets, alt: "Google Sheets" },
    { src: IntegrationsZoho, alt: "Zoho" },
    { src: IntegrationsLeadSquared, alt: "LeadSquared" },
    { src: IntegrationsShopify, alt: "IntegrationsShopify" },
    { src: IntegrationsFreshdesk, alt: "IntegrationsFreshdesk" },
    { src: IntegrationsSales, alt: "Salesforce" },
    { src: IntegrationsWoo, alt: "WooCommerce" },
    { src: IntegrationsFreshWork, alt: "Freshworks" },
    { src: IntegrationsSheets, alt: "Google Sheets" },
    { src: IntegrationsZoho, alt: "Zoho" },
    { src: IntegrationsLeadSquared, alt: "LeadSquared" },
    { src: IntegrationsShopify, alt: "IntegrationsShopify" },
    { src: IntegrationsFreshdesk, alt: "IntegrationsFreshdesk" },
  ];
  const loop = [...logotwos, ...logotwos];
  {/* scetion 2 */ }
  {/* scetion 3 */ }
  const cards = [
    {
      id: 1,
      logo: IntegrationsShopify,
      title: "Celitix + Shopify",
      desc: "Recover abandoned carts, verify COD orders, and send real-time updates.",
      link: "#",
    },
    {
      id: 2,
      logo: IntegrationsWoo,
      title: "Celitix + WooCommerce",
      desc: "Automate every step: OTP checks, order confirmations and order updates.",
      link: "#",
    },
    {
      id: 3,
      logo: IntegrationsLeadSquared,
      title: "Celitix + LeadSquared",
      desc: "Broadcast offers, automate reminders, and manage customer support with Professional Services.",
      link: "#",
    },
    {
      id: 4,
      logo: IntegrationsFreshdesk,
      title: "Celitix + Freshdesk",
      desc: "Ticket management, automated replies, and real-time updates to boost customer satisfaction.",
      link: "#",
    },
    {
      id: 5,
      logo: IntegrationsZoho,
      title: "Celitix + Zoho CRM ",
      desc: "Sync leads, contacts, and deals instantly. Automate workflows and  sales.",
      link: "#",
    },
    {
      id: 6,
      logo: IntegrationsSheets,
      title: "Celitix + Google Sheets",
      desc: "Automate lead follow-ups, track conversions, and manage customer data.",
      link: "#",
    },
    {
      id: 7,
      logo: IntegrationsSales,
      title: "Celitix + Salesforce",
      desc: "Seamless contact sync, comprehensive data import, and native integration to streamline workflows.",
      link: "#",
    },
    {
      id: 8,
      logo: IntegrationsFreshWork,
      title: "Celitix + Freshworks",
      desc: "Capture leads in real time, sync customer data, and automate support workflows with WhatsApp & SMS.",
      link: "#",
    },
  ];
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // ✅ Detect screen size & set items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // sm: 1 card
      } else {
        setItemsPerPage(4); // md+: 4 cards
      }
    };

    updateItemsPerPage(); // set on mount
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));
  {/* scetion 3 */ }
  {/* scetion 4 */ }
  const slidesData = [
    {
      top: "Shopify",
      heading: "Automate  customer communication -Connect your Shopify store with Celitix",
      logo: IntegrationsShopify,
      title: "Shopify",
      cards: [
        { title: "New Order", desc: "Instantly notify your customers the moment an order is placed." },
        { title: "COD Order", desc: "Send secure OTP-based COD verification messages." },
        { title: "Fulfilled / Shipped Order", desc: "Keep customers engaged with real-time shipping alerts." },
        { title: "Cancelled Order", desc: "Notify customers immediately if an order is cancelled." },
      ],
    },
    {
      top: "Zoho CRM",
      heading: "Automate  customer communication - Connect your Zoho CRM store with Celitix",
      logo: IntegrationsZoho,
      title: "Zoho CRM",
      cards: [
        { title: "Create Contact", desc: "Add new customer contacts instantly and keep your database updated in real time." },
        { title: "Create Lead", desc: "Capture leads directly into Zoho CRM for faster follow-ups and conversions." },
        { title: "Update Lead", desc: "Easily update lead details and track progress as they move through the sales funnel." },
        { title: "Create Deal", desc: "Generate new deals effortlessly to manage opportunities and close sales faster." },
      ],
    },
    {
      top: "Woo Commerce",
      heading: "Automate  customer communication -Connect your Woo Commer store with Celitix",
      logo: IntegrationsWoo,
      title: "Woo Commerce",
      cards: [
        { title: "OTP before COD Confirmation", desc: "Send one-tap OTP to confirm COD orders and cut RTO/fraud." },
        { title: "Successful Checkout", desc: "Share order confirmation, invoice/summary, and next steps instantly." },
        { title: "Return Request", desc: "Acknowledge requests, share instructions, and track status updates." },
        { title: "Out for Delivery", desc: "Proactive delivery alerts with live tracking/support options." },
      ],
    },
    {
      top: "Freshdesk",
      heading: "Automate  customer communication -Fresh Desk with Celitix",
      logo: IntegrationsFreshdesk,
      title: "Freshdesk",
      cards: [
        { title: "Task Created", desc: "Automatically generate tasks from tickets to ensure nothing slips through the cracks." },
        { title: "Schedule a Meeting", desc: "Set up meetings with customers directly from ticket interactions for faster resolution." },
        { title: "Send Meeting Summary", desc: "Share detailed meeting summaries and resolutions instantly via WhatsApp or SMS." },
        { title: "Synchronize Status", desc: "Sync ticket and task statuses across Freshdesk and Celitix to maintain a unified view." },
      ],
    },
    {
      top: "Sales Force",
      heading: "Automate  customer communication -Connect your Sales Force with Celitix",
      logo: IntegrationsSales,
      title: "Sales Force",
      cards: [
        { title: "Salesforce CRM", desc: "Celitix + Salesforce – Sync customer data and streamline workflows with real-time integration." },
        { title: "Lead Management", desc: "Capture and update leads directly from WhatsApp/SMS conversations." },
        { title: "Contact Sync", desc: " Maintain a unified view by syncing contacts and accounts seamlessly." },
        { title: "Deal Management", desc: "Create and update deals automatically as customer interactions progress." },
      ],
    },
    {
      top: "Google Sheets",
      heading: "Automate  customer communication -Connect your Google Sheets with Celitix",
      logo: IntegrationsSheets,
      title: "Google Sheets",
      cards: [
        { title: "Lead Follow-up", desc: "Record and track lead follow-ups in Sheets to ensure timely engagement and faster conversions." },
        { title: "Conversion Tracking", desc: " Monitor campaign conversions in real time and measure ROI directly from your customer interactions." },
        { title: "Lead Data Management", desc: " Store, organize, and update all lead information in one place for a unified view." },
        { title: "Report Automation", desc: "Generate auto-updated reports from Sheets to share insights on leads, conversions, and team performance." },
      ],
    },
    {
      top: "LeadSquared CRM ",
      heading: "Automate  customer communication -Connect your LeadSquared with Celitix",
      logo: IntegrationsLeadSquared,
      title: "LeadSquared CRM ",
      cards: [
        { title: "Broadcast Campaigns", desc: "Send offers, promotions, and updates to thousands of users instantly through WhatsApp & SMS." },
        { title: "Automated Reminders", desc: "Set up payment reminders, event updates, and follow-ups without manual effort." },
        { title: "Customer Support", desc: "Resolve queries faster with integrated live chat and Professional Services connected to LeadSquared." },
        { title: "Data Synchronization", desc: "Sync customer data between Celitix and LeadSquared to maintain a single source of truth." },
      ],
    },
    {
      top: "FreshWork CRM",
      heading: "Automate  customer communication -Connect your FreshWork CRM  with Celitix",
      logo: IntegrationsFreshWork,
      title: "FreshWorkCRM",
      cards: [
        { title: "Lead Capture", desc: "Auto-create leads in Freshworks CRM from inbound WhatsApp/SMS interactions." },
        { title: "Data Sync", desc: "Keep contacts, accounts, and deal records up to date across Freshworks and Celitix." },
        { title: "Task Automation", desc: "Generate follow-up tasks and reminders automatically from conversations." },
        { title: "Support Integration", desc: "Manage tickets and customer queries with instant updates via WhatsApp & SMS." },
      ],
    },
    // add 6 more here
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slidesData[activeIndex];

  const ICONS = [
    { src: "/assets/IntegrationsImage/SHOPI.png", size: 84, initial: { x: 50, y: -280, rotate: -12 } },
    { src: "/assets/IntegrationsImage/FRESH.png", size: 92, initial: { z: 50, y: -0, rotate: 8 } },
    // { src: "./assets/Icons/WhatsApp.svg", size: 120, initial: { x: 0, y: 0, rotate: 0 } },
  ];
  {/* scetion 4 */ }
  {/* scetion 5 */ }
  const tabs = [
    { key: 'Real Estate', label: 'Real Estate' },
    { key: 'Financial Services', label: 'Financial Services' },
    { key: 'Professional Services', label: 'Professional Services' },
    { key: 'Customer Support', label: 'Customer Support' },
    { key: 'Tech Startups', label: 'Tech Startups' },
  ]

  const tabData = {
    'Real Estate': {
      heading: 'Real Estate',
      description:
        ' Use LeadSquared & Salesforce to capture property leads, sync contacts, and automate deal follow-ups. Manage site visits and track progress in real time.',
      buttonText: 'Learn More',
      // If you store a PNG/JPG for “Rich Campaigns”:
      // image can point to a static image import or an external URL
      image: IntegrationRealEstate,
      isVideo: false,
    },
    'Financial Services': {
      heading: 'Financial Services',
      description:
        'Connect Zoho CRM & Google Sheets to automate lead entry, manage KYC workflows, and track payment reminders with secure, compliance-ready processes.',
      buttonText: 'Learn More',
      // This is a video file, so we’ll set isVideo=true:
      image: IntegrationFinancial,
      isVideo: true,
    },
    'Professional Services': {
      heading: 'Professional Services',
      description:
        ' Integrate Freshworks & Zoho CRM to manage client leads, automate task assignments, and sync data for smooth workflows across consulting or agency work.',
      buttonText: 'Get Started',
      image: IntegrationProfessional,
      isVideo: true,
    },
    'Customer Support': {
      heading: 'Customer Support',
      description:
        ' Use Freshdesk & Freshworks to auto-generate tickets, send instant updates, and manage customer conversations with built-in workflows and chatbots.',
      buttonText: 'Explore',
      image: IntegrationCustomer,
      isVideo: true,
    },
    'Tech Startups': {
      heading: 'Tech Startups',
      description:
        'Leverage Salesforce, Zoho CRM, & Google Sheets to automate onboarding, manage investor/partner pipelines, and scale sales campaigns with data-driven insights.',
      buttonText: 'Explore',
      image: IntegrationTech,
      isVideo: true,
    },
  }

  const [activeTab, setActiveTab] = useState("Real Estate");

  // Destructure the current tab’s data in one go:
  const { heading, description, buttonText, image, isVideo } = tabData[activeTab];
  {/* scetion 5 */ }
  {/* scetion 6 */ }
  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  {/* scetion 6 */ }
  {/* scetion 7 */ }
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I integrate Celitix enterprise messaging solutions with Shopify, WooCommerce, Zoho CRM, Freshdesk and other CRM?",
      answer:
        "Yes. Celitix offers native integrations with these platforms to automate workflows, sync data, and improve efficiency.",
    },
    {
      question: "What makes Celitix better than others?",
      answer:
        "All-in-one CPaaS solution, transparent pricing, deeper integrations across WhatsApp, SMS, CRM and support tools.",
    },
    {
      question: "How does Celitix help my Shopify or WooCommerce store?",
      answer:
        "Automates cart recovery, COD verification, order updates, cancellations and delivery alerts on WhatsApp & SMS.",
    },
    {
      question: "How does Celitix integrate with Zoho CRM?",
      answer:
        "Enabling WhatsApp/SMS workflows on Zoho CRM contacts, leads and deals directly within Celitix CPaaS.",
    },
    {
      question: "How does Celitix improve Freshdesk support?",
      answer:
        "Instant ticket updates on WhatsApp, faster responses to boost customer satisfaction.",
    },
  ];
  {/* scetion 7 */ }
  return (
    <>
      {/* scetion 1 */}
      <section className="w-full bg-[#F6EEF7] pt-25">
        <div className="px-4 md:px-20 py-5 md:py-10 lg:py-20 2xl:py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left: Text */}
            <div>

              <h1 className="text-2xl md:text-5xl lg:text-5xl heading font-bold text-gray-900 popf leading-tight">
                Power Growth with Celitix  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Integrations </span> – Shopify, Zoho &amp; More.
              </h1>
              <p className="mt-4 text-gray-600 text-md md:text-xl sub-heading max-w-xl">
                Connect Shopify, Zoho, Salesforce, Freshdesk &amp; more with Celitix.
                Automate tasks, streamline workflows, and scale your business with ease.
              </p>
              <div className="mt-6">
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

            {/* Right: Circles + SVG chain */}
            <div className="relative flex items-center justify-center">
              {/* Left circle */}
              <div className="rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] ring-1 ring-black/5 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 grid place-items-center border-5 border-gray-300">
                <Image
                  src={IntegrationsCelitix}
                  alt="Celitix"
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </div>

              <div
                aria-hidden="true"
                className="h-10 sm:h-10 w-10 lg:w-20 chain-anim "
                style={{
                  backgroundImage: `url(${CHAIN.src})`,
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                  backgroundPosition: "center",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
                }}
              />

              {/* Right circle (slider) */}
              <div className="rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 grid place-items-center overflow-hidden border-5 border-gray-300">
                <AnimatePresence mode="wait" initial={false}>
                  <MotionImage
                    key={index}
                    src={logos[index]?.src}
                    alt={logos[index]?.alt || 'logo'}
                    className="max-w-[70%] max-h-[70%] object-contain "
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* scetion 1 */}
      {/* scetion 2 */}
      <section className="py-8 md:py-20 bg-[linear-gradient(232deg,rgba(201,204,245,1)_0%,rgba(250,237,237,1)_72%,rgba(201,204,245,1)_100%)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold heading md:text-5xl text-gray-800 mb-1 md:mb-5">Integrations</h2>
          <p className="mt-3 sub-heading text-md md:text-xl mb-1 md:mb-5">
            Manage customer conversations and business data in one place with Celitix.
          </p>

          {/* Slider row */}
          <div className="relative mt-8">
            {/* Edge fade so tiles vanish nicely at sides */}
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <ul role="list" className="track flex items-center gap-4 will-change-transform py-1">
                {loop.map((item, i) => (
                  <li
                    key={i}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-200 ring-1 ring-black/5 grid place-items-center shadow-sm"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}

                      width={96}
                      height={96}
                      className="h-8 sm:h-15 object-contain  transition"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Inline keyframes so you don't need Tailwind config */}
        <style jsx>{`
        .track {
          width: max-content;
          animation: integrations-scroll 18s linear infinite;
        }
        .track:hover { animation-play-state: paused; }
        @keyframes integrations-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); } 
        }
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }
      `}</style>
      </section>
      {/* scetion 2 */}
      {/* scetion 3 */}
      <section className="relative w-full bg-purple-50 py-8 md:pt-20 px-4 md:px-20">
        <div className="mx-auto lg:max-w-5xl 2xl:max-w-7xl text-center">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all mt-5">
            {cards
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl bg-white shadow p-6 flex justify-center w-full flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-full gap-2 mb-3">
                    <Image
                      src={card.logo}
                      alt={card.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="font-semibold heading text-xl">{card.title}</h3>
                  <p className="text-md sub-heading mt-2 flex-1">{card.desc}</p>
                  <Link
                    href={card.link}

                  >
                    <UniversalButton
                      label="Learn More"
                      variant="brutal"
                      className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] mt-2"

                    />
                  </Link>
                </div>
              ))}
          </div>

 
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-10 lg:left-20 xl:left-30 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-10 lg:right-20 xl:right-30 top-1/2 -translate-y-1/2 rounded-full bg-white shadow p-2 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

          
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${page === i ? "bg-purple-600" : "bg-purple-300"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="hidden xl:block w-full">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20, // adjust speed (smaller = faster)
              ease: "linear", // keeps rotation constant
            }}
            className="pointer-events-none absolute left-1/2 top-[38%] z-10 -translate-x-1/2"
          >
            <div className="size-40 rounded-full bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10 backdrop-blur">
              <Image
                src={IntegrationsCelitix}
                alt="3D orb"
                className="h-full w-full object-contain p-4"
              />
            </div>
          </motion.div>
           {/* {ICONS.map((icon, i) => (
            <motion.img
              key={i}
              src={icon.src}
              alt="floating icon"
              width={icon.size}
              height={icon.size}
              className="pointer-events-none absolute opacity-90"
              style={{
                left: `calc(  ${icon.initial.x}px)`,
                right: `calc(  ${icon.initial.z}px)`,
                top: `calc(60% + ${icon.initial.y}px)`,
              }}
              initial={{ y: 0, rotate: icon.initial.rotate }}
              animate={{
                y: [0, -12, 0, 10, 0],
                rotate: [
                  icon.initial.rotate,
                  icon.initial.rotate + 4,
                  icon.initial.rotate - 3,
                  icon.initial.rotate + 1,
                  icon.initial.rotate,
                ],
              }}
              transition={{
                duration: 9 + i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}  */}
        </div>
      </section>
      {/* <section className="relative w-full bg-purple-50 py-8 md:pt-20 px-4 ">
        <div className="hidden lg:block">

        {[
          { src: IntegrationsShopify, size: 120, x: "2", y: "20%" },
          { src: IntegrationsWoo, size: 120, x: "2", y: "70%" },
          { src: IntegrationsZoho, size: 120, x: "2", y: "45%" },
          { src: IntegrationsFreshdesk, size: 120, x: "90%", y: "20%" },
          { src: IntegrationsSales, size: 140, x: "88%", y: "40%" },
          { src: IntegrationsSheets, size: 120, x: "90%", y: "70%" },
          { src: IntegrationsFreshWork, size: 120, x: "25%", y: "-1%" },
          { src: IntegrationsLeadSquared, size: 120, x: "70%", y: "-1%" },
        ].map((icon, i) => (
          // <motion.img
          <MotionImage
            key={i}
            src={icon.src}
            alt="integration-icon"
            width={icon.size}
            height={icon.size}
            className="absolute opacity-10 pointer-events-none z-1"
            style={{ left: icon.x, right: icon.z, top: icon.y }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        </div>


     
        <div className="relative z-10 mx-auto lg:max-w-5xl 2xl:max-w-7xl text-center">

 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all mt-5">
            {cards
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl bg-white shadow p-6 flex justify-center w-full flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-full gap-2 mb-3">
                    <Image
                      src={card.logo}
                      alt={card.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="font-semibold heading text-xl">{card.title}</h3>
                  <p className="text-md sub-heading mt-2 flex-1">{card.desc}</p>
                  <Link href={card.link}>
                    <UniversalButton
                      label="Learn More"
                      variant="brutal"
                      className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] mt-2"
                    />
                  </Link>
                </div>
              ))}
          </div>

        
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-2 lg:left-0 xl:-left-12 md:top-70 lg:top-70 -translate-y-1/2 rounded-full bg-white shadow p-2 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-2 lg:right-0 xl:-right-12 md:top-70  lg:top-70  -translate-y-1/2 rounded-full bg-white shadow p-2 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

          
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${page === i ? "bg-purple-600" : "bg-purple-300"
                  }`}
              />
            ))}
          </div>
        </div>

  
        <div className="hidden xl:block w-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20, // adjust speed
              ease: "linear",
            }}
            className="pointer-events-none absolute left-1/2 top-[38%] z-10 -translate-x-1/2"
          >
            <div className="size-40 rounded-full bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10 backdrop-blur">
              <Image
                src={IntegrationsCelitix}
                alt="3D orb"
                className="h-full w-full object-contain p-4"
              />
            </div>
          </motion.div>

        
        
        </div>
      </section> */}
      {/* scetion 3 */}
      <div className='bg-[#f7ebfc] py-2 md:py-16'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-2 h-auto py-10 px-6 sm:px-8 rounded-3xl  w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-3xl heading md:text-4xl font-bold text-white popf ">
              Boost Your Sales
            </h2>
            <p className="text-sm md:text-lg sub-heading text-white font-light popf mt-2">
              Connect with our Team to help your business grow.

            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <UniversalButton
                label="Contact Us"
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
      {/* scetion 4 */}
      <section className="relative w-full bg-[#F3EAF6]">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 pb-0 md:pb-16">
          {/* Dynamic heading from active slide */}
          <div className="text-center mb-8">
            <h2 className="heading text-2xl md:text-4xl mb-2">{activeSlide.top}</h2>
            <h3 className="text-[20px] text-md sub-heading md:text-xl text-gray-900">
              {activeSlide.heading}
            </h3>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full 2xl:h-100"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slidesData.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8 items-center">
                  {/* TL */}
                  <Card {...slide.cards[0]} index={1} />

                  {/* Center Logo */}
                  <div className="order-5 md:order-none md:row-span-2 md:col-start-2 md:row-start-1 flex items-center justify-center">
                    <div className="h-44 w-44 md:h-72 md:w-72 rounded-full bg-white shadow-2xl border-5 border-gray-100 flex flex-col items-center justify-center mb-10">
                      <Image src={slide.logo} alt={slide.title} width={200} height={200} className="transition-transform duration-300 hover:scale-110" />
                      {/* <span className="text-xl font-semibold text-gray-800 mt-2">{slide.title}</span> */}
                    </div>
                  </div>

                  {/* TR */}
                  <Card {...slide.cards[1]} index={2} />

                  {/* BL */}
                  <Card {...slide.cards[2]} index={3} />

                  {/* BR */}
                  <Card {...slide.cards[3]} index={4} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>
      {/* scetion 4 */}
      {/* scetion 5 */}
      <section className="py-8 md:py-10 bg-[#f7ebfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 md:mb-15">
          <h2 className="text-2xl sm:text-3xl text-black md:text-5xl heading text-center mb-6 sm:mb-8">
            Use Cases Across Industries
          </h2>

          <div className="overflow-x-auto flex lg:justify-center justify-start">
            <div className="inline-flex space-x-4 px-4 lg:px-0">
              <button
                onClick={() => setActiveTab('Real Estate')}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none  whitespace-nowrap rounded-t-xl ${activeTab === 'Real Estate'
                  ? 'text-white bg-[#6E11B0] shadow-lg heading'
                  : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                  }`}
              >
                Real Estate
              </button>

              <button
                onClick={() => setActiveTab('Financial Services')}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${activeTab === 'Financial Services'
                  ? 'text-white bg-[#6E11B0] shadow-lg heading'
                  : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                  }`}
              >
                Financial Services
              </button>

              <button
                onClick={() => setActiveTab('Professional Services')}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${activeTab === 'Professional Services'
                  ? 'text-white bg-[#6E11B0] shadow-lg heading'
                  : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                  }`}
              >
                Professional Services
              </button>

              <button
                onClick={() => setActiveTab('Customer Support')}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${activeTab === 'Customer Support'
                  ? 'text-white bg-[#6E11B0] shadow-lg heading'
                  : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                  }`}
              >
                Customer Support
              </button>

              <button
                onClick={() => setActiveTab('Tech Startups')}
                className={`relative px-4 py-2 uppercase text-xs sm:text-sm tracking-wide transition-colors focus:outline-none whitespace-nowrap rounded-t-xl ${activeTab === 'Tech Startups'
                  ? 'text-white bg-[#6E11B0] shadow-lg heading'
                  : 'text-gray-800 sub-heading bg-[#E9D4FF] hover:bg-[#e4caff] hover:text-[#6b0da1]'
                  }`}
              >
                Tech Startups
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
                <p className="text-gray-700 leading-relaxed pera text-md md:text-lg">
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
               
                  <Image
                    src={image}
                    alt={activeTab}
                    width={320}
                    height={180}
                    className="w-80 h-auto rounded-lg"
                  />
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* scetion 5 */}
      {/* scetion 6 */}
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
            Improve Your Customer Experience
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Connect Integration with your Business and drive conversions.
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
      {/* scetion 6 */}
      {/* scetion 7 */}
      <div className=" bg-[#F6EDF9] flex justify-center items-center py-8 md:py-15 px-4">
        <div className="w-full max-w-4xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-gray-900 heading mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
              {" "}
              Celitix Integration
            </span>{" "}
            FAQs
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
      {/* scetion 7 */}
    </>
  );
}
function Card({ title, desc, index = 1 }) {
  const num = String(index).padStart(2, "0"); // 01, 02, 03, 04

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#EDE6F7] bg-white p-4 sm:p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
      {/* watermark bubble + number */}
      {/* <div className="absolute -top-3 -left-3 h-20 w-20 rounded-full bg-gray-200/55" />
      <span className="absolute top-2 left-2 heading md:text-5xl font-extrabold leading-none text-gray-300/95 select-none">
        {num}
      </span> */}

      {/* content */}
      <div className="relative z-10">
        <h4 className="heading text-xl md:text-2xl mb-1">{title}</h4>
        <p className="sub-heading text-base md:text-lg leading-relaxed text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
}