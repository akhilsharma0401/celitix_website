// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// import {
//   FiBookOpen,
//   FiUsers,
//   FiArrowRight,
// } from "react-icons/fi";

// /* Card Data */
// const cards = [
//   {
//     icon: <FiUsers />,
//     category: "WhatsApp API",
//     title: "WhatsApp Business API and What Is It About?",
//     desc: "Send bulk messages, notifications, and chatbots via WhatsApp API.",
//     slug: "whatsapp-business-api",
//     image: "/cards/whatsapp-api.png",
//   },

//   {
//     icon: <FiBookOpen />,
//     category: "WhatsApp API",
//     title: "How Much Time Does It Take to Get the WhatsApp Business API Approved",
//     desc: "Run marketing campaigns and customer engagement on WhatsApp.",
//     slug: "whatsapp-approval-time",
//     image: "/cards/approval.png",
//   },

//   {
//     icon: <FiBookOpen />,
//     category: "WhatsApp API",
//     title: "Can a Business Have Access to Multiple WhatsApp Business APIs?",
//     desc: "Run marketing campaigns and customer engagement on WhatsApp.",
//     slug: "multiple-whatsapp-api",
//     image: "/cards/multiple.png",
//   },
// ];

// export default function Page() {
//   const router = useRouter();

//   return (
//     <div className="bg-gray-50 min-h-screen px-6 py-16">

//       {/* Header */}
//       <div className="text-center mb-14">
//         <h1 className="text-4xl font-bold text-gray-900">
//           Learning Hub
//         </h1>

//         <p className="text-gray-600 mt-3 text-lg">
//           Explore guides and tutorials
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="
//               bg-white rounded-xl
//               shadow-sm hover:shadow-lg
//               border border-gray-100
//               transition-all duration-300
//               hover:-translate-y-1
//               overflow-hidden
//               flex flex-col
//             "
//           >

//             {/* Image */}
//             <div className="relative w-full h-44 bg-gray-100">
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5 flex flex-col flex-grow">

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 {card.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 {card.desc}
//               </p>

//               {/* Explore Button */}
//               <div className="mt-auto flex justify-end">
//                 <button
//                   onClick={() =>
//                     router.push(`/tutorial/${card.slug}`)
//                   }
//                   className="
//                     flex items-center gap-2
//                     text-sm font-medium
//                     text-white
//                     bg-purple-600
//                     px-4 py-2
//                     rounded-md
//                     hover:bg-purple-700
//                     transition
//                   "
//                 >
//                   Explore
//                   <FiArrowRight />
//                 </button>
//               </div>

//             </div>
//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }













"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import {
    FiBookOpen,
    FiFileText,
    FiUsers,
    FiBarChart2,
    FiGrid,
    FiArrowRight,
} from "react-icons/fi";
import UniversalButton from "../components/UniversalButton";
import { CTALASTIMAGE, tutorialhero } from "../../../public/assets/images";
import Image from "next/image";
import FormPopup from "../components/FormPopup";

/* Tabs */
const tabs = [
    "All",
    "WhatsApp API",
    "SMS Gateway",
    "RCS Messaging",
];

/* Cards */
const cards = [
    {
        icon: <FiUsers />,
        category: "WhatsApp API",
        title: "WhatsApp Business API and What Is It About?",
        desc: "Send bulk messages, notifications, and chatbots via WhatsApp API.",
        color: "from-green-500 to-emerald-500",
        slug: "whatsapp-business-api",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How Much Time Does It Take to Get the WhatsApp Business API Approved",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-approval-time",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Can a Business Have Access to Multiple WhatsApp Business APIs?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "multiple-whatsapp-api",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Phone Number Rules to Apply for WhatsApp Business API",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "phone-number-rules",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How to Apply for WhatsApp Business API",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-to-apply-whatsapp-api",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Steps to Verify Your Facebook Business Manager Account",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "facebook-business-verification",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Troubleshoot a Disabled or Restricted Account",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "troubleshoot-disabled-account",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Pre-Requisites to Apply for WhatsApp Business API from Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "pre-requisites-whatsapp-api",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Integrate Business Facebook Account with Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "integrate-facebook-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business API Messaging Limits (as per Meta Guidelines)",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-messaging-limits",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Display Name Rules to Apply for WhatsApp Business API",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-display-name-rules",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How to Change Your WhatsApp Business Display Name",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-to-change-whatsapp-display-name",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business Phone Number’s Quality Rating",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-quality-rating",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Message Guidelines by Meta",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-guidelines",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Why WhatsApp Templates Get Disabled by Meta",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-templates-disabled",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How to Avoid WhatsApp Template Rejection",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "avoid-whatsapp-template-rejection",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Examples of WhatsApp Templates for Different Industries",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-examples-by-industry",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Step-by-Step Guide to Create WhatsApp Templates with Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "create-whatsapp-templates-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Best Practices for High Template Approval Rate",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "best-practices-high-template-approval",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Opt-In Rules",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-opt-in-rules",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Chatbots on WhatsApp: How They Work",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "chatbots-whatsapp",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Use Cases Of WhatsApp Chatbots For Businesses",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-chatbot-use-cases",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "AI CHATBOTS ON WHATSAPP: HOW THEY WORK",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "ai-chatbots-whatsapp-how-they-work",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Explanation Of Nodes To Create Chatbots On Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "explanation-of-nodes-to-create-chatbots",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Sample Whatsapp Bot And How To Create It Using Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "sample-whatsapp-bot-create-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Whatsapp Automation Vs Manual Messaging Which Is Better For Businesses",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-automation-vs-manual-messaging",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Enhance Customer Engagement With Whatsapp Live Chat On Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "enhance-customer-engagement-with-whatsapp-live-chat-on-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Manage Whatsapp Automation Flows With Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "manage-whatsapp-automation-flows-with-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Whatsapp Manage Flow In Celitix Automate Customer Conversations Easily",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-manage-flow-in-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "MM Lite In Whatsapp Business Api",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "mm-lite-in-whatsapp-business-api",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "What Are WhatsApp Template Messages?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "what-are-whatsapp-template-messages",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Key Points While Drafting WhatsApp Business Message Templates",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "key-points-while-drafting-whatsapp-business-message-templates",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for E-Commerce",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-ecommerce",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Education Industry",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-education-industry",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Financial Institutions",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-financial-institutions",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Events & Webinars",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-events-and-webinars",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Travel & Tourism",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-travel-and-tourism",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Insurance",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-insurance",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Template Messages for Real Estate",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-template-messages-for-real-estate",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business Template Messages for Healthcare",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-business-template-messages-for-healthcare",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "What Happens when WhatsApp Rating Quality Drops?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "what-happens-when-whatsapp-rating-quality-drops",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How to Increase Customer Engagement Using WhatsApp",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-to-increase-customer-engagement-using-whatsapp",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business API Policy Violations",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-business-api-policy-violations",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Difference Between WhatsApp Business App and WhatsApp Business API",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "difference-between-whatsapp-business-app-and-whatsapp-business-api",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "What Is WhatsApp Co-Existence?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "what-is-whatsapp-co-existence",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How WhatsApp Co-Existence Works?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-whatsapp-co-existence-works",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Benefits of Using a Co-existence WhatsApp Number With Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "benefits-of-using-a-co-existence-whatsapp-number-with-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Why Businesses Should Choose WhatsApp Co-Existence",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "why-businesses-should-choose-whatsapp-co-existence",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Who Can Benefit from WhatsApp Co-Existence with Celitix?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "who-can-benefit-from-whatsapp-co-existence-with-celitix",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Limitations of WhatsApp Co-Existence Before Onboarding",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "limitations-of-whatsapp-co-existence-before-onboarding",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Why WhatsApp Co-Existence Is Ideal for Growing Businesses",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "why-whatsapp-co-existence-is-ideal-for-growing-businesses",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How Meta Policies Apply to Co-Existence Accounts",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-meta-policies-apply-to-co-existence-accounts",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Opt-In Rules for Co-Existence Numbers",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-opt-in-rules-for-co-existence-numbers",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How Enterprises Use WhatsApp Business API at Scale",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-enterprises-use-whatsapp-business-api-at-scale",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business API vs RCS Messaging: Which Is Better for Businesses?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-business-api-vs-rcs-messaging-for-businesses",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Spam Prevention on WhatsApp: How Meta Detects Abuse",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "spam-prevention-on-whatsapp-how-meta-detects-abuse",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Best Practices to Maintain a Healthy WhatsApp Account Long-Term",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "best-practices-to-maintain-a-healthy-whatsapp-account",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Marketing Funnel: From Lead Capture to Conversion",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-marketing-funnel-from-lead-capture-to-conversion",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Business API Data Security & End-to-End Encryption Explained",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-business-api-data-security-and-end-to-end-encryption",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Designing Conversation Flows That Don’t Feel Robotic on Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "designing-non-robotic-conversation-flows-on-celitix",
    },

    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Why Businesses Are Replacing Website Chat to WhatsApp Live Chat",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "why-businesses-are-replacing-website-chat-to-whatsapp-live-chat",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "WhatsApp Chatbot vs Website Chatbot: What Converts Better?",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "whatsapp-chatbot-vs-website-chatbot-what-converts-better",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How Instant WhatsApp Replies Increase Lead Conversion Rates",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-instant-whatsapp-replies-increase-lead-conversion-rates",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Reducing Agent Load Using WhatsApp Automation",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "reducing-agent-load-using-whatsapp-automation",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Managing Multiple Agents on a Single WhatsApp Business Number",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "managing-multiple-agents-on-a-single-whatsapp-business-number",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Track ROI with the Celitix Analytics Dashboard",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "track-roi-with-the-celitix-analytics-dashboard",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "Celitix Workflow: Ensuring Message Delivery with Intelligent Channel Switching",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "celitix-workflow-ensuring-message-delivery-with-intelligent-channel-switching",
    },
    {
        icon: <FiBookOpen />,
        category: "WhatsApp API",
        title: "How WhatsApp Messaging from Google Sheets Works in Celitix",
        desc: "Run marketing campaigns and customer engagement on WhatsApp.",
        color: "from-green-600 to-teal-500",
        slug: "how-whatsapp-messaging-from-google-sheets-works-in-celitix",
    },

    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "What Is RCS Messaging?",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "what-is-rcs-messaging",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "Why RCS Is the Future of Business Messaging",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "why-rcs-is-the-future-of-business-messaging",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "RCS vs. SMS: What’s the Real Difference for Businesses?",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs-vs-sms-difference-for-businesses",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "RCS vs. SMS: What’s the Real Difference for Businesses?",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs-vs-sms-difference-for-businesses",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "How RCS Messaging Works on Android Devices",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "how-rcs-messaging-works-on-android",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "Benefits of RCS Messaging for Customer Engagement",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "benefits-of-rcs-messaging-for-customer-engagement",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "Driving Higher CTR with Rich Media RCS Messages",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "driving-higher-ctr-with-rich-media-rcs-messages",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "How Telecom Operators Enable RCS Messaging",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "how-telecom-operators-enable-rcs-messaging",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "How to Launch High-Converting RCS Campaigns with Celitix",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "launch-high-converting-rcs-campaigns-with-celitix",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "Why RCS Campaigns Outperform Traditional SMS Marketing",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "why-rcs-campaigns-outperform-sms-marketing",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "How to Personalize RCS Campaigns for Better Engagement",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "how-to-personalize-rcs-campaigns-for-better-engagement",
    },
    // {
    //     icon: <FiFileText />,
    //     category: "SMS Gateway",
    //     title: "Bulk SMS Service",
    //     desc: "High-delivery promotional and transactional SMS platform.",
    //     color: "from-blue-500 to-cyan-500",
    //     slug: "sms",
    // },

   
];

export default function Page() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const [openDialog, setOpenDialog] = useState(false);
    const ITEMS_PER_PAGE = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const handleShowFormPopup = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    /* Filter */
    const filteredCards = cards.filter((item) => {
        const matchTab =
            activeTab === "All" || item.category === activeTab;

        const matchSearch =
            item.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchTab && matchSearch;
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

    const paginatedCards = filteredCards.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <>
            <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-16 py-5 md:py-10">

                    {/* Left Content */}
                    <div className="space-y-6 box-reveal-left">
                        <div className="box-reveal-left">
                            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                Learn & Grow
                            </span>
                        </div>


                        <h1 className="text-4xl md:text-5xl lg:text-5xl heading  font-bold text-gray-900 popf leading-tight">
                            Explore Celitix Communication Guides and Tutorials
                        </h1>

                        <p className="text-gray-600  text-base md:text-lg  max-w-lg">
                            A Gateway to Guides and Tutorials for Using Celitix’s Omnichannel Communication Platform, Helping Businesses Understand and Implement Messaging and Engagement Tools.
                        </p>




                        {/* CTA */}
                        <div className="flex gap-4">
                            <UniversalButton
                                label="Book Demo"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                onClick={handleShowFormPopup}
                            />
                            <FormPopup visible={openDialog} onHide={handleCloseDialog} />
                        </div>

                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center">
                        <Image
                            src={tutorialhero}
                            alt="Tutorials"
                            className="w-full h-auto max-w-lg object-contain"
                        />
                    </div>

                </div>
            </section>

            {/* <div className="bg-gradient-to-br from-purple-50 via-white to-violet-50 min-h-screen px-6 py-16"> */}
            <div className="bg-[#f7ebfc] min-h-screen px-6 pb-5 md:pb-20">
                {/* Tabs */}
                <div>
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 py-6 overflow-x-auto scrollbar-hide px-2">

                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
              px-6 py-2.5 rounded-full font-medium border-2 transition-all
              
              ${activeTab === tab
                                        ? "bg-purple-600 text-white border-purple-600 shadow-lg scale-105"
                                        : "bg-white text-purple-600 border-purple-400 hover:bg-purple-50"
                                    }
            `}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>

                    {/* Search */}
                    <div className="text-center mb-10">

                        <div className="relative max-w-md mx-auto mb-8 p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">

                            <div className="relative bg-white rounded-xl">

                                <input
                                    type="text"
                                    placeholder="Search tutorials..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="
            w-full pl-12 pr-4 py-3
            rounded-xl text-sm
            focus:outline-none focus:ring-2 focus:ring-purple-400
            transition-all
          "
                                />

                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <SearchIcon fontSize="small" />
                                </span>

                            </div>

                        </div>

                    </div>
                </div>
                {/* Cards Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">

                    {paginatedCards.map((card, index) => (
                        <div key={index} className="group h-full">

                            {/* Card */}
                            <div
                                className="
                relative rounded-3xl overflow-hidden
                h-full flex flex-col
                bg-white/70 backdrop-blur-xl

                border border-purple-200/40
                shadow-[0_12px_32px_rgba(124,58,237,0.18)]

                hover:shadow-[0_25px_60px_rgba(124,58,237,0.30)]
                hover:-translate-y-4

                transition-all duration-300
              "
                            >

                                {/* Shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none
                "
                                />
                                {/* Content */}
                                <div className="p-6 pt-8 flex flex-col flex-grow relative z-10">
                                    {/* Title */}
                                    <h3 className="text-md font-bold heading text-gray-900 mb-2">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    {/* <p className="text-gray-600 leading-relaxed mb-4">
                                        {card.desc}
                                    </p> */}

                                    {/* Button */}
                                    <div className="mt-auto flex justify-end">
                                        <button
                                            onClick={() => router.push(`/tutorial/${card.slug}`)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
                                        >
                                            Explore
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                    {/* Pagination */}

                </div>
                <div>
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-16 flex-wrap">

                            {/* Prev Button */}
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg text-sm font-medium border transition
                    ${currentPage === 1
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : "bg-white text-purple-600 border-purple-400 hover:bg-purple-50"
                                    }
                `}
                            >
                                Prev
                            </button>

                            {/* Page Numbers (Updated Logic Here) */}
                            {/* Page Numbers */}
                            {/* Page Numbers */}
                            {/* Page Numbers */}
                            {/* Page Numbers */}
                            {/* Page Numbers */}
                            {(() => {
                                const pages = [];
                                const total = totalPages;
                                const current = currentPage;

                                const add = (num) => {
                                    if (num >= 1 && num <= total && !pages.includes(num)) {
                                        pages.push(num);
                                    }
                                };

                                // Always show first page
                                add(1);

                                // CASE 1: current is 1 or 2 → show 1 2 3
                                if (current <= 2) {
                                    add(2);
                                    add(3);

                                    if (total > 5) {
                                        pages.push("dots");
                                    }
                                }

                                // CASE 2: middle pages
                                else if (current < total - 2) {
                                    pages.push("dots");

                                    add(current);
                                    add(current + 1);

                                    pages.push("dots");
                                }

                                // CASE 3: near end
                                else {
                                    pages.push("dots");

                                    add(total - 2);
                                    add(total - 1);
                                    add(total);
                                }

                                // Always ensure last two pages are shown
                                add(total - 1);
                                add(total);

                                return pages.map((page, index) => {
                                    if (page === "dots") {
                                        return (
                                            <span key={`dots-${index}`} className="px-2 text-gray-400">
                                                ...
                                            </span>
                                        );
                                    }

                                    return (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${current === page
                                                ? "bg-purple-600 text-white shadow-lg"
                                                : "bg-white text-purple-600 border border-purple-400 hover:bg-purple-50"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                });
                            })()}




                            { /* <-- Paste code above here --> }

            {/* Next Button */}
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(prev + 1, totalPages)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg text-sm font-medium border transition
                    ${currentPage === totalPages
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : "bg-white text-purple-600 border-purple-400 hover:bg-purple-50"
                                    }
                `}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

            </div>


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
                        Go beyond the ordinary and connect with your target groups to grow your business.
                    </p>
                    <UniversalButton
                        label="Book  Demo"
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
        </>


    );
}

