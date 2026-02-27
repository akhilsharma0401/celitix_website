"use client";
import React, { useState } from "react";
import Image from "next/image";
import UniversalButton from "../components/UniversalButton";
import { useRouter } from "next/navigation";
import FaqItem from "../components/Faq";
import {
  AssistCustomers,
  Automation,
  ChatbotBuilder,
  CTALASTIMAGE,
  Ecommerce,
  Ecommerce1,
  Education,
  Finance,
  FoodBeverage,
  freshdesk,
  Healthcare,
  Hospitality,
  IntegrationsFreshdesk,
  IntegrationsFreshWork,
  IntegrationsLeadSquared,
  IntegrationsSales,
  IntegrationsSheets,
  IntegrationsShopify,
  ProfessionalServices,
  RealEstateConstruction,
  SaveTime,
  shopify,
  TechStartups,
  WhatsappChatbot,
  woo,
  zoho,
} from "../../../public/assets/images";
import FormPopup from "../components/FormPopup";

const page = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const routermain = useRouter();

  // section 6
  const [activeTabs, setActiveTabs] = useState("Healthcare");

  const tabs = [
    "Healthcare",
    "Finance",
    "Education",
    "Hospitality",
    "Real Estate",
    "Food & Beverage",
    "Professional Services",
    "Tech Startups",
  ];

  const industryRoutes = {
    Ecommerce: "/retail-and-ecommerce",
    Healthcare: "/healthcare",
    Finance: "/financial-services",
    Education: "/education-and-edtech",
    Hospitality: "/travel-and-tourism",
    "Real Estate": "/construction-and-real-estate",
    "Food & Beverage": "/food-and-beverages",
    "Professional Services": "/professional-services",
    "Tech Startups": "/tech-startups",
  };

  const router = useRouter();

  const handleLearnMore = () => {
    const route = industryRoutes[activeTabs];
    if (route) {
      router.push(route);
    } else {
      console.warn("No route defined for:", activeTabs);
    }
  };
  const tabContent = {
    "E-Commerce": {
      title: "E-Commerce",
      description:
        "Carts get left, but not for long! Our flows sing a comeback song. From browse to buy, we help you try, retarget smart and amplify. Turn broadcasts into conversations with Click-to-WhatsApp ads. ",
      useCases: [
        "Recover abandoned carts",
        "Automate order & delivery updates",
        "Trigger re-engagement via SMS or WhatsApp",
      ],

      buttonText: "Learn More",
      image: Ecommerce,
    },
    Healthcare: {
      title: "Healthcare",
      description:
        "Manage appointment scheduling, reminders, and follow-ups automatically.Share prescriptions, lab reports, and test updates securely via WhatsApp.Send health awareness tips, vaccination alerts, or wellness reminders.Enable 24/7 patient support with automated symptom triage or FAQs.",
      useCases: [
        "Appointment & test result alerts",
        "Prescription refill reminders",
        "Feedback or follow-up via SMS ",
      ],
      buttonText: "Learn More",
      image: Healthcare,
    },
    Finance: {
      title: "Finance",
      description:
        "Provide account updates, balance alerts, and EMI reminders securely.Automate loan eligibility checks and document verification.Offer instant customer support for transactions and services.Deliver investment tips, statements, or policy renewals automatically.",
      useCases: [
        "OTP and silent authentications",
        "Transaction & policy alerts",
        "KYC nudges via WhatsApp or RCS",
      ],
      buttonText: "Learn More",
      image: Finance,
    },
    Education: {
      title: "Education",
      description:
        "Automate student inquiries, registrations, and fee payment reminders.Send class schedules, exam results, and admission updates instantly.Enable multi-language support for parents and international students.Collect feedback and satisfaction surveys seamlessly.",
      useCases: [
        "Exam & result notifications",
        "Fee due & payment reminders",
        "Student engagement surveys",
      ],
      buttonText: "Learn More",
      image: Education,
    },
    Hospitality: {
      title: "Hospitality",
      description:
        "Manage room bookings, confirmations, and cancellations via WhatsApp.Share check-in details, offers, and personalized experiences pre-arrival.Handle guest feedback, concierge requests, or service support in real time.Promote special packages, events, or loyalty programs automatically.",
      useCases: [
        "Booking confirmations & itinerary updates",
        "In-stay service requests",
        "Post-visit feedback collection",
      ],
      buttonText: "Learn More",
      image: Hospitality, // Corrected image
    },
    "Real Estate": {
      title: "Real Estate & Construction",
      description:
        "Qualify leads by asking questions like “What’s your budget?” or “Preferred location?”Send property listings, photos, and virtual tours instantly.Schedule site visits or follow-ups with automated reminders.Notify clients about new projects or investment opportunities. ",
      useCases: [
        "Site visit scheduling",
        "Project milestone updates",
        "Lead follow-ups via WhatsApp",
      ],
      buttonText: "Learn More",
      image: RealEstateConstruction, // Corrected image
    },
    "Food & Beverage": {
      title: "Food & Beverage",
      description:
        "Automate table reservations, order tracking, and menu sharing.Send offers, loyalty points, and personalized discounts to repeat customers.Handle delivery updates and feedback collection automatically.Enable WhatsApp ordering directly from your restaurant or cloud kitchen.",
      useCases: [
        "Reservation confirmations",
        "Loyalty rewards via SMS",
        "Campaigns for special menus or offers",
      ],
      buttonText: "Learn More",
      image: FoodBeverage, // Corrected image
    },
    "Professional Services": {
      title: "Professional Services",
      description:
        "From consulting to clinics, workflows matter. We help you handle more clients, less chaos, without hiring more hands. Your network is your net worth. Organise contacts and stay connected. ",
      useCases: [
        "Automated appointment bookings",
        "Service alerts and follow-ups",
        "Campaigns for lead generation",
      ],
      buttonText: "Learn More",
      image: ProfessionalServices,
    },
    "Tech Startups": {
      title: "Tech Startups",
      description:
        "Automate customer onboarding, demo scheduling, and product FAQs. Provide real-time support for app or software issues.Send product updates, feature releases, and beta invites instantly.Collect feedback from early adopters to improve user experience.Track frequently asked questions.",
      useCases: [
        "App onboarding via token-based flows",
        "Support workflows over WhatsApp",
        "Multi-channel user engagement",
      ],
      buttonText: "Learn More",
      image: TechStartups, // Corrected image
    },
  };

  const content = tabContent[activeTabs] || {};
  const { title, description, useCases, buttonText, image } = content;

  // section 6

  // section 7 FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I send automated cart recovery messages?",
      answer:
        "Yes. Celitix offers industry-specific, ready-to-use flows including cart recovery via WhatsApp, SMS, RCS, & voice calling.",
    },
    {
      question: "How does it help with COD verification?",
      answer:
        "Celitix’s IVR, messaging, or OTP solutions can confirm COD orders on delivery or before shipping.",
    },
    {
      question: "Does Celitix integrate with our e-commerce platform or CRM?",
      answer:
        "Yes. You can connect with platforms like Shopify or your CRM via API.",
    },
    {
      question: "What channels are supported?",
      answer:
        "Celitix offers SMS, RCS, WhatsApp, Email, Voice, Missed Call, and more. All managed from one dashboard.",
    },
    {
      question: "Can I support customers after hours?",
      answer:
        "Yes. Use auto-replies, IVR menus, or bots to stay available 24/7.",
    },
  ];
  // section 7 FAQ
  return (
    <div>
      <section className="bg-[#f7ebfc] pt-25 md:pt-40 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-20">
          {/* LEFT CONTENT */}
          <div className="box-reveal-left space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading  font-bold text-gray-900 popf leading-tight">
              Grow Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                {" "}
                WhatsApp Chatbots{" "}
              </span>
            </h1>

            <p className="text-gray-600 sub-heading text-base md:text-lg  max-w-md">
              No-Code WhatsApp Chatbots automate customer conversations, capture
              leads, integrate and deliver instant support — all from one
              platform. Simplify communication and scale your business
              effortlessly.
            </p>

            <UniversalButton
              label="Book Demo"
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
              onClick={() => routermain.push("/book-demo")}
            />

            {/* <UniversalButton
                  label="Book Demo"
                  variant="brutal"
                  className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                  onClick={handleShowFormPopup}
                />
                

                <FormPopup
                  visible={openDialog}
                  onHide={handleCloseDialog}
                /> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={WhatsappChatbot}
                alt="WhatsApp Chatbot"
                width={420}
                height={520}
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Chat Bubble */}
            <div className="absolute left-5 top-32 bg-[#5c6ac4] text-white px-6 py-4 rounded-2xl shadow-lg">
              Chatbot
            </div>

            <div className="absolute right-4 bottom-24 bg-[#5c6ac4] w-40 h-10 rounded-xl shadow-md" />
            <div className="absolute right-4 bottom-12 bg-[#5c6ac4] w-48 h-10 rounded-xl shadow-md" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white md:space-y-20 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* LEFT CONTENT */}
          <div className="space-y-6 box-reveal-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
              No-Code <br /> Chatbot Builder
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sub-heading list-disc list-outside pl-5 ">
              <li>Build intelligent, no-code WhatsApp chatbots.</li>
              <li>Automate routine chat queries and customer interactions.</li>
              <li>Send instant updates and notifications.</li>
              <li>
                No technical skills required to create or manage the chatbot.
              </li>
              <li>
                Suitable for E-Commerce stores, Shopify websites, and service
                platforms.
              </li>
              <li>
                Handle customer conversations effortlessly without any hustle.
              </li>
            </ul>
          </div>

          {/* RIGHT FLOW DESIGN */}
          <div className="relative">
            <div className="rounded-3xl h-120 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 p-8 shadow-lg">
              <Image
                src={ChatbotBuilder}
                alt="No-code chatbot flow"
                width={520}
                height={250}
                className="mx-auto h-full object-fill"
                priority
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* LEFT CONTENT */}
          <div className="relative">
            <div className="rounded-3xl h-120 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 p-8 shadow-lg">
              <Image
                src={Automation}
                alt="No-code chatbot flow"
                width={520}
                height={320}
                className="mx-auto h-full object-fill"
                priority
              />
            </div>
          </div>

          {/* RIGHT FLOW DESIGN */}
          <div className="space-y-6 box-reveal-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
              24/7 Chat Bot <br /> Automation
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sub-heading list-disc list-outside pl-5 ">
              <li>
                Create drag-and-drop chat flows for order updates, booking
                confirmations, and return requests in minutes.
              </li>
              <li>
                Assist customers worldwide in 90+ languages, anytime — without
                hiring additional support staff.
              </li>
              <li>Send instant updates and notifications.</li>
              <li>
                Automate routine conversations like “Where’s my order?” so your
                team can focus on solving complex issues faster.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* LEFT CONTENT */}
          <div className="space-y-6 box-reveal-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
              Empower Team and <br /> Save Time
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sub-heading list-disc list-outside pl-5 ">
              <li>
                Smart Routing Rules: Assign conversations based on location,
                department, priority, or agent availability.
              </li>
              <li>
                Balanced Workload Distribution: Keep your team efficient by
                automatically rotating chats among available agents.
              </li>
              <li>
                Faster Conversions: Ensure every qualified lead reaches the
                right expert instantly, reducing response time and improving
                closure rates.
              </li>
            </ul>
          </div>

          {/* RIGHT FLOW DESIGN */}
          <div className="relative">
            <div className="rounded-3xl h-120 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 p-8 shadow-lg">
              <Image
                src={SaveTime}
                alt="No-code chatbot flow"
                width={520}
                height={320}
                className="mx-auto h-full object-fill"
                priority
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-2">
          {/* LEFT CONTENT */}
          <div className="relative">
            <div className="rounded-3xl h-120 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 p-8 shadow-lg">
              <Image
                src={AssistCustomers}
                alt="No-code chatbot flow"
                width={520}
                height={250}
                className="mx-auto h-full object-fill"
                priority
              />
            </div>
          </div>

          {/* RIGHT FLOW DESIGN */}
          <div className="space-y-6 box-reveal-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 popf heading">
              Assist Customers Smarter with <br /> Whatsapp Flows
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sub-heading list-disc list-outside pl-5 ">
              <li>
                Simplify Conversations: Let your customers book appointments,
                register, or share feedback —With the help of Chatbot.
              </li>
              <li>
                Collect Accurate Information: Use rich input fields like date
                pickers, drop-downs, and buttons and many more options to
                capture details correctly the first time.
              </li>
              <li>
                Enhance Engagement: Combine Chat Flows with AI-powered chat to
                deliver smooth, guided journeys that keep users engaged and
                minimize drop-offs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f7effa] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-900 popf">
              Simply Integrate With Your <br className="hidden md:block" />
              Current Website Setup
            </h2>
            <p className="text-sm md:text-lg sub-heading text-gray-600 font-light popf mt-2">
              No need to change tools. Blend smoothly with your existing systems
              and add value
            </p>
          </div>

          {/* Integration Layout */}
          <div className="relative mt-24">
            {/* Soft Background Glow */}
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="w-[500px] h-[300px] bg-purple-300/20 blur-3xl rounded-full"></div>
            </div>

            <div className="grid grid-cols-12 gap-10 items-center">
              {/* Left Block */}
              <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-6">
                <Tile icon={IntegrationsSales} />
                <Tile icon={zoho} />
                <Tile icon={IntegrationsSheets} />
                <Tile icon={IntegrationsLeadSquared} />
              </div>

              {/* Center Big Tile */}
              <div className="col-span-12 md:col-span-2 flex justify-center perspective">
                <div
                  className="relative w-48 h-48 
                      transition-transform duration-700 
                      transform-style preserve-3d 
                      hover:rotate-y-180"
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white rounded-3xl shadow-xl 
                        flex items-center justify-center 
                        backface-hidden"
                  >
                    <Image
                      src={IntegrationsShopify}
                      alt="Shopify Integration"
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br 
                        from-purple-600 to-blue-600 
                        text-white rounded-3xl shadow-2xl 
                        flex flex-col items-center justify-center 
                        rotate-y-180 backface-hidden"
                  >
                    <p className="text-lg font-semibold">Shopify</p>
                    <p className="text-xs opacity-80 mt-1">
                      Automate store conversations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Block */}
              <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-6">
                <Tile icon={IntegrationsFreshWork} />
                <Tile icon={IntegrationsShopify} />
                <Tile icon={woo} />
                <Tile icon={freshdesk} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7effa] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden border border-gray-300">
              <Image
                src="/cards/card1.jpg"
                alt="Lower interest rates"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative -mt-24 mx-4 p-6 bg-[#5fe0c6] border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900">
                Lower interest rates
              </h3>

              <p className="text-sm text-gray-800 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                eiusmod tempor.
              </p>

              <button
                className="mt-6 flex items-center justify-between
                               bg-[#1b1b1b] text-white px-4 py-3
                               w-full text-sm font-medium"
              >
                Learn more <span>→</span>
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden border border-gray-300">
              <Image
                src="/cards/card2.jpg"
                alt="Investing made easy"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative -mt-24 mx-4 p-6 bg-[#f3b43f] border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900">
                Investing made easy
              </h3>

              <p className="text-sm text-gray-800 mt-2">
                Lorem ipsum dolor sit amet, consectetur elit, do eiusmod tempor
                incididunt.
              </p>

              <button
                className="mt-6 flex items-center justify-between
                               bg-[#1b1b1b] text-white px-4 py-3
                               w-full text-sm font-medium"
              >
                Learn more <span>→</span>
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden border border-gray-300">
              <Image
                src="/cards/card3.jpg"
                alt="Send easy payments"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative -mt-24 mx-4 p-6 bg-[#f6dcd6] border border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900">
                Send easy payments
              </h3>

              <p className="text-sm text-gray-800 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                tempor incididunt.
              </p>

              <button
                className="mt-6 flex items-center justify-between
                               bg-[#1b1b1b] text-white px-4 py-3
                               w-full text-sm font-medium"
              >
                Learn more <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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

      <div className="bg-[#f7ebfc] py-5 md:pt-10 px-6 sm:px-10">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-bold text-gray-800">
            Use Cases Across Industries
          </h2>
        </div>

        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 mb-2 md:mb-8 lg:justify-center xl:justify-center snap-x snap-mandatory ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTabs(tab)}
              className={`py-2 px-4 rounded-lg text-md font-semibold shrink-0 snap-center sub-heading ${
                activeTabs === tab
                  ? "bg-purple-800 text-white"
                  : "bg-white text-black hover:bg-purple-200"
              } transition-all duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:gap-12 px-4 sm:px-8 lg:px-20 py-2">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sub-heading">
              {tabContent[activeTabs]?.title || "Ecommerce"}
            </h2>
            <p className="text-lg text-gray-600 pera mb-6">
              {tabContent[activeTabs]?.description ||
                "Recover abandoned carts, automate updates, and turn broadcasts into conversations with Click-to-WhatsApp ads."}
            </p>
            {/* <div className="mb-6">
              <p className="font-semibold text-gray-800 text-xl  sub-heading mb-2">Use Cases:</p>
              <ul className="list-disc list-inside pera text-gray-700 text-base space-y-1">
                {useCases.map((useCase, idx) => (
                  <li key={idx}>{useCase}</li>
                ))}
              </ul>
            </div> */}
            <UniversalButton
              label={tabContent[activeTabs]?.buttonText || "Learn More"}
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]"
              onClick={handleLearnMore}
            />
          </div>

          <div className="lg:w-1/2 flex justify-center ">
            <div className="w-full lg:w-80 xl:w-90 2xl:w-120 h-auto">
              <Image
                src={tabContent[activeTabs]?.image || Ecommerce}
                alt={tabContent[activeTabs]?.title || "Industry"}
                className="rounded-lg w-full h-full"
                // loading="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#f7ebfc] flex justify-center items-center py-2 md:py-20 px-4 ">
        <div className="w-full max-w-6xl bg-[#F7F4F9] border border-[#D1CDE3] rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-4xl heading font-semibold text-center text-gray-900 popf mb-8">
            Celitix For E-commerce FAQs
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
    </div>
  );
  function Tile({ icon }) {
    return (
      <div className="h-32 bg-white shadow-md rounded-bl-4xl rounded-tr-4xl flex items-center justify-center">
        {icon && (
          <Image
            src={icon}
            alt="integration"
            width={110}
            height={100}
            className="object-contain"
          />
        )}
      </div>
    );
  }
};

export default page;
