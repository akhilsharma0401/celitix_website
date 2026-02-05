// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const FeatureShowcase = ({
//   title,
//   highlight,
//   features,
//   buttonLabel = "Get Started ➺",
//   buttonLink = "#",
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % features.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full space-y-10">
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-[30px] lg:text-[35px] poppins font-medium px-4">
//           {title}
//           {highlight && <span className="text-[#3e66f3]"> {highlight}</span>}
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="rounded-3xl shadow-2xl overflow-hidden">
//         <div className="grid md:grid-cols-2 gap-5 lg:gap-0">
//           {/* Left Side - Features */}
//           <div className="bg-[#dbeafe] flex flex-col justify-center gap-2 p-6 lg:p-8 ">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-4 p-2 lg:p-3 rounded-xl transition-all duration-500 cursor-pointer ${
//                   activeIndex === index
//                     ? "bg-slate-700 scale-105"
//                     : "bg-transparent hover:bg-slate-750"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {/* <div
//                   className={`text-[18px] lg:text[20px] open-sans transition-transform duration-500 ${
//                     activeIndex === index ? "scale-110" : "scale-100"
//                   }`}
//                 >
//                   {feature.icon}
//                 </div> */}
//                 <div className=" flex items-center justify-center">
//                   {typeof feature.icon === "string" ? (
//                     //  Show emoji
//                     <span
//                       className={`text-[20px] transition-transform duration-500 ${
//                         activeIndex === index ? "scale-110" : "scale-100"
//                       }`}
//                     >
//                       {feature.icon}
//                     </span>
//                   ) : (
//                     //  Show image
//                     <Image
//                       src={feature.icon}
//                       alt={feature.name}
//                       // width={28}
//                       // height={28}
//                       className={` w-8 transition-transform duration-500 ${
//                         activeIndex === index ? "scale-110" : "scale-100"
//                       }`}
//                     />
//                   )}
//                 </div>

//                 <span
//                   className={`text-lg lg:text-xl font-medium transition-colors duration-500 ${
//                     activeIndex === index ? "text-white" : "text-slate-400"
//                   }`}
//                 >
//                   {feature.name}
//                 </span>
//               </div>
//             ))}

//             {/* CTA Button (using Link) */}
//             <div className="mt-5">
//               <Link href={buttonLink}>
//                 <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
//                   <span className="relative z-10">{buttonLabel}</span>
//                   <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Side - Image Display */}
//           <div className="bg-[#f5f9ff] flex items-center justify-center p-6   lg:p-16  lg:mb-0">
//             <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] ">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
//                     activeIndex === index
//                       ? "opacity-100 scale-100 rotate-0"
//                       : "opacity-0 scale-95 rotate-3 pointer-events-none"
//                   }`}
//                 >
//                   <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
//                     <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>
//                       <div className="poppins text-white text-sm font-medium">
//                         Proactive
//                       </div>
//                     </div>

//                     <Image
//                       src={feature.image}
//                       alt={feature.text}
//                       width={450}
//                       height={500}
//                       className="object-cover"
//                     />

//                     <div className="p-3 bg-slate-50">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
//                         <div className="flex-1 h-3 bg-slate-200 rounded"></div>
//                       </div>
//                       <div className="h-2 bg-slate-200 rounded w-3/4"></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureShowcase;


// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const FeatureShowcase = ({
//   title,
//   highlight,
//   features,
//   buttonLabel = "Get Started ➺",
//   buttonLink = "#",
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);


// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % features.length);
// //     }, 2500);

// //     return () => clearInterval(interval);
// //   }, []);


// useEffect(() => {
//   if (!features || features.length === 0) return;

//   const interval = setInterval(() => {
//     setActiveIndex((prev) => (prev + 1) % features.length);
//   }, 2500);

//   return () => clearInterval(interval);
// }, [features.length]);



//   return (
//     <div className="w-full space-y-10">
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-[30px] lg:text-[35px] poppins font-medium px-4">
//           {title}
//           {highlight && <span className="text-[#3e66f3]"> {highlight}</span>}
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="rounded-3xl shadow-2xl overflow-hidden">
//         <div className="grid md:grid-cols-2 gap-5 lg:gap-0">
//           {/* Left Side - Features */}
//           <div className="bg-[#dbeafe] flex flex-col justify-center gap-2 p-6 ">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-4 p-2 rounded-xl transition-all duration-500 cursor-pointer ${
//                   activeIndex === index
//                     ? "bg-slate-700 scale-105"
//                     : "bg-transparent hover:bg-slate-750"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//                 >
//                 <div className=" flex items-center justify-center">
//                   {typeof feature.icon === "string" ? (
//                     //  Show emoji
//                     <span
//                       className={`text-[20px] transition-transform duration-500 ${
//                         activeIndex === index ? "scale-110" : "scale-100"
//                       }`}
//                     >
//                       {feature.icon}
//                     </span>
//                   ) : (
//                     //  Show image
//                     <Image
//                       src={feature.icon}
//                       alt={feature.name}
//                       // width={28}
//                       // height={28}
//                       className={` w-8 transition-transform duration-500 ${
//                         activeIndex === index ? "scale-105" : "scale-100"
//                       }`}
//                     />
//                   )}
//                 </div>

//                 <span
//                   className={`text-base font-medium transition-colors duration-500 ${
//                     activeIndex === index ? "text-white" : "text-slate-400"
//                   }`}
//                 >
//                   {feature.name}
//                 </span>
//               </div>
//             ))}

//             {/* CTA Button (using Link) */}
//             {/* <div className="mt-5">
//               <Link href={buttonLink}>
//                 <button className="relative poppins inline-flex items-center justify-center py-2 px-4  text-base open-sans rounded-lg text-white bg-[#3e66f3] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white active:scale-95 group">
//                   <span className="relative z-10">{buttonLabel}</span>
//                   <span className="absolute left-0 top-1/2 w-full h-[10px] bg-black opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] -translate-y-1/2 group-hover:h-full group-hover:opacity-100 rounded"></span>
//                 </button>
//               </Link>
//             </div> */}
//           </div>

//           {/* Right Side - Image Display */}
//           <div className="bg-[#f5f9ff] flex items-center justify-center p-6   lg:p-16  lg:mb-0">
//             <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] ">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
//                     activeIndex === index
//                       ? "opacity-100 scale-100 rotate-0"
//                       : "opacity-0 scale-95 rotate-3 pointer-events-none"
//                   }`}
//                 >
//                   <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
//                     <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>
//                       <div className="poppins text-white text-base font-medium">
//                         Celitix
//                       </div>
//                     </div>

//                     <Image
//                       src={feature.image}
//                       alt={feature.text}
//                       width={450}
//                       height={500}
//                       className="object-cover"
//                     />

//                     {/* <div className="p-3 bg-slate-50">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
//                         <div className="flex-1 h-3 bg-slate-200 rounded"></div>
//                       </div>
//                       <div className="h-2 bg-slate-200 rounded w-3/4"></div>
//                     </div> */}
//                     <div className="flex p-4">
//                       <p>{feature.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureShowcase;



"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import UniversalButton from "./UniversalButton";
import { useRouter } from "next/navigation";

const AUTO_SLIDE_DELAY = 3000;

const FeatureShowcase = ({ title, highlight, services }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  //  Auto slide
  useEffect(() => {
    if (!services || services.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [services.length]);

  //  Manual click handler (resets index)
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handleservices = () => {
    const btnText = activeService.content.ButtonName.trim();
    const validLabels = [
      "Start Now",
      "Check It Out",
      "Learn More",
      "Explore",
      "Explore ",
      "Get Started",
      "Know More ",
    ];

    if (validLabels.includes(btnText)) {
      switch (activeService.id) {
        case 1:
          router.push("/whatsapp-business-platform");
          break;
        case 2:
          router.push("/rcs-business-messaging");
          break;
        case 3:
          router.push("/sms-marketing");
          break;
        case 4:
          router.push("/two-way-sms");
          break;
        case 5:
          router.push("/inbound-dialer");
          break;
        case 6:
          router.push("/outbound-dialer");
          break;
        case 7:
          router.push("/click-to-call");
          break;
        case 8:
          router.push("/missed-call-services");
          break;
        case 9:
          router.push("/user-verification");
          break;
        case 10:
          router.push("/email-otp");
          break;
        default:
          console.log("No route defined for this service");
      }
    }
  };

  return (
    <div className="bg-[#f4f7ff] py-8 md:py-20">
      {/* Heading */}
      <div className="text-center px-4 pb-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
            {highlight}
          </span>
        </h2>
      </div>

      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-10">
        {/* Sidebar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleTabClick(index)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300
                ${activeIndex === index
                  ? "bg-gradient-to-r from-[#E9D5FF] to-[#DBEAFE] text-[#4C1D95] shadow-md"
                  : "text-gray-700 hover:bg-purple-50"
                }`}
            >
              <Image
                src={service.icon}
                alt={service.name}
                className="h-6 w-6"
              />
              <span className="font-semibold">{service.name}</span>
            </button>
          ))}
        </div>

        {/* Main Panel */}
        {/* Main Panel */}
        <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 min-h-[520px] overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ease-in-out
        ${activeIndex === index
                  ? "opacity-100 scale-100 translate-y-0 z-10"
                  : "opacity-0 scale-95 translate-y-4 pointer-events-none z-0"
                }`}
            >
              <Image
                src={service.content.image}
                alt={service.name}
                className="w-full max-w-lg rounded-xl mb-6"
              />

              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl">
                {service.content.desc}
              </p> 
              <UniversalButton
                label={service.content.ButtonName}
                variant="brutal"
                className="bg-[#9B44B6] border-[#9B44B6] text-white px-6 py-2 font-semibold rounded-lg hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] transition"
              onClick={handleservices}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeatureShowcase;
