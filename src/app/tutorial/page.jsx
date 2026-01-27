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
import React, { useState } from "react";
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
import { tutorialhero } from "../../../public/assets/images";
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
        icon: <FiFileText />,
        category: "SMS Gateway",
        title: "Bulk SMS Service",
        desc: "High-delivery promotional and transactional SMS platform.",
        color: "from-blue-500 to-cyan-500",
        slug: "sms",
    },
    {
        icon: <FiGrid />,
        category: "SMS Gateway",
        title: "OTP SMS",
        desc: "Instant OTP delivery for login and verification.",
        color: "from-sky-500 to-blue-500",
        slug: "otp-sms",
    },
    {
        icon: <FiUsers />,
        category: "RCS Messaging",
        title: "RCS Business Messaging",
        desc: "Rich media messages with branding and buttons.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "RCS Analytics",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs-analytics",
    },
    {
        icon: <FiFileText />,
        category: "SMS Gateway",
        title: "Bulk SMS Service",
        desc: "High-delivery promotional and transactional SMS platform.",
        color: "from-blue-500 to-cyan-500",
        slug: "sms",
    },
    {
        icon: <FiGrid />,
        category: "SMS Gateway",
        title: "OTP SMS",
        desc: "Instant OTP delivery for login and verification.",
        color: "from-sky-500 to-blue-500",
        slug: "otp-sms",
    },
    {
        icon: <FiUsers />,
        category: "RCS Messaging",
        title: "RCS Business Messaging",
        desc: "Rich media messages with branding and buttons.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs",
    },
    {
        icon: <FiBarChart2 />,
        category: "RCS Messaging",
        title: "RCS Analytics",
        desc: "Track open rates and customer interactions.",
        color: "from-indigo-600 to-blue-500",
        slug: "rcs-analytics",
    },
];

export default function Page() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const [openDialog, setOpenDialog] = useState(false);

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

    return (
        <>
            <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-5 lg:pb-20 py-5 md:py-10">

                    {/* Left Content */}
                    <div className="space-y-6 box-reveal-left">
                        <div className="box-reveal-left">
                            <span className="inline-block bg-purple-700 text-white text-md sub-heading font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                Learn & Grow
                            </span>
                        </div>


                        <h1 className="text-4xl md:text-5xl lg:text-5xl heading  font-bold text-gray-900 popf leading-tight">
                            Tutorials & Learning Hub
                        </h1>

                        <p className="text-gray-600  text-base md:text-lg  max-w-lg">
                            Step-by-step guides, hands-on tutorials, and practical examples
                            to help you master tools, technologies, and workflows faster.
                        </p>

                        {/* Search Bar (Optional) */}
                        <div className="relative max-w-md mb-8 p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                            <div className="relative bg-white rounded-xl">
                                <input
                                    type="text"
                                    placeholder="Search tutorials..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="
        w-full pl-12 pr-4 py-3
        rounded-xl
        focus:outline-none
      "
                                />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <SearchIcon fontSize="small" />
                                </span>
                            </div>
                        </div>


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
            <div className="bg-[#f7ebfc] min-h-screen px-6 pb-5 md:pb-16">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl heading lg:text-5xl font-semibold text-gray-900 mb-3">
                        Explore Celitix Tutorial
                    </h2>
                    <p className="text-sm md:text-xl sub-heading text-gray-700">
                        Powerful communication tools for your business
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">

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

                {/* Cards Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">

                    {filteredCards.map((card, index) => (
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

                </div>

            </div>
        </>


    );
}

