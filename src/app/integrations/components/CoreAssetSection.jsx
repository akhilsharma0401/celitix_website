// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// /* ------------ slides (edit content + images) ------------ */
// const SLIDES = [
//   {
//     centerImg: "/hero/core-3d.png",
//     left: [
//       { strong: "Currency", light: "conversion", desc: "Exportable reports for tax and accounting purposes." },
//       { strong: "Data",     light: "encryption", desc: "Visual dashboards for trade performance." },
//     ],
//     right: [
//       { strong: "Cold wallet",     light: "storage", desc: "Regular updates on crypto trends and platform features." },
//       { strong: "Transfer crypto", light: "& data",  desc: "Guides for beginners on crypto basics and trading." },
//     ],
//   },
//   {
//     centerImg: "/hero/core-3d-2.png",
//     left: [
//       { strong: "Risk",  light: "monitoring", desc: "Real-time alerts for suspicious activities." },
//       { strong: "Smart", light: "routing",    desc: "Optimized execution across venues." },
//     ],
//     right: [
//       { strong: "KYC",   light: "automation", desc: "Faster onboarding with auto-validation." },
//       { strong: "Wallet",light: "analytics",  desc: "Cohort insights across chains." },
//     ],
//   },
//   {
//     centerImg: "/hero/core-3d-2.png",
//     left: [
//       { strong: "Risk",  light: "monitoring", desc: "Real-time alerts for suspicious activities." },
//       { strong: "Smart", light: "routing",    desc: "Optimized execution across venues." },
//     ],
//     right: [
//       { strong: "KYC",   light: "automation", desc: "Faster onboarding with auto-validation." },
//       { strong: "Wallet",light: "analytics",  desc: "Cohort insights across chains." },
//     ],
//   },
// ];

// /* ------------ animation helpers ------------ */
// const row = (dir) => ({
//   initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
//   animate: { opacity: 1, x: 0 },
//   exit:    { opacity: 0, x: dir === "left" ? -40 : 40 },
//   transition: { duration: 0.5, ease: "easeOut" },
// });

// const shell = {
//   initial: { opacity: 0, y: 8 },
//   animate: { opacity: 1, y: 0 },
//   exit:    { opacity: 0, y: -8 },
//   transition: { duration: 0.35, ease: "easeOut" },
// };

// export default function CoreAssetManualSlider() {
//   const [i, setI] = useState(0);
//   const slide = SLIDES[i];

//   const next = () => setI((p) => (p + 1) % SLIDES.length);
//   const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

//   // optional: keyboard arrows
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <section className="relative w-full bg-[#0f1011] py-14 text-white">
//       {/* gentle heading glow */}
//       <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-44 w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,193,79,0.14),rgba(0,0,0,0)_65%)] blur-xl" />

//       <div className="mx-auto max-w-6xl px-5">
//         {/* pill + heading */}
//         <div className="text-center">
//           <span className="mx-auto mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[.18em] text-white/70">
//             How it works?
//           </span>
//           <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
//             Core asset of the <span className="text-white/70">crypto</span>
//             <br /> marketplace
//           </h2>
//         </div>

//         {/* slide */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={i}
//             {...shell}
//             className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]"
//           >
//             {/* left column */}
//             <div className="space-y-12">
//               {slide.left.map((it, idx) => (
//                 <motion.div key={idx} {...row("left")} className="relative pl-14">
//                   <div className="pointer-events-none absolute left-0 top-1  select-none text-6xl font-extrabold  text-white/5 md:text-7xl">
//                     {`0${idx + 1}`}
//                   </div>
//                   <h3 className="text-[15px] font-semibold">
//                     <span className="text-white">{it.strong} </span>
//                     <span className="text-white/70">{it.light}</span>
//                   </h3>
//                   <p className="mt-1 max-w-sm text-sm text-white/55">{it.desc}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* center icon — ONLY float (no rotation) */}
//             <motion.div
//               animate={{ y: [0, -12, 0, 10, 0] }}
//               transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
//               className="mx-auto"
//             >
//               <div className="relative h-56 w-56 md:h-64 md:w-64">
//                 <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0)_70%)] blur-lg" />
//                 <Image
//                   src={slide.centerImg}
//                   alt="Core asset"
//                   fill
//                   sizes="(min-width: 768px) 256px, 224px"
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </motion.div>

//             {/* right column */}
//             <div className="space-y-12">
//               {slide.right.map((it, idx) => (
//                 <motion.div
//                   key={idx}
//                   {...row("right")}
//                   className="relative pr-14 text-right md:ml-auto md:max-w-sm"
//                 >
//                   <div className="pointer-events-none absolute right-0 top-1 select-none text-6xl font-extrabold leading-none text-white/5 md:text-7xl">
//                     {`0${idx + 3}`}
//                   </div>
//                   <h3 className="text-[15px] font-semibold">
//                     <span className="text-white">{it.strong} </span>
//                     <span className="text-white/70">{it.light}</span>
//                   </h3>
//                   <p className="mt-1 text-sm text-white/55">{it.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* controls: arrows + dots (manual only) */}
//         <div className="mt-6 flex items-center justify-center gap-3">
//           <button
//             onClick={prev}
//             className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
//             aria-label="Previous"
//           >
//             ←
//           </button>
//           <div className="flex items-center gap-2">
//             {SLIDES.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setI(idx)}
//                 className={[
//                   "h-2.5 w-2.5 rounded-full transition",
//                   i === idx ? "bg-amber-400" : "bg-white/25 hover:bg-white/50",
//                 ].join(" ")}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={next}
//             className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
//             aria-label="Next"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

/* Colors */
const BG = "#F4ECFB";
const RING = "#E8DAF6";
const CARD_BORDER = "#EDE6F7";

/* 5 frames (edit content/logos as you need) */
const FRAMES = [
  {
    top: "Shopify",
    heading: "Automate  customer communication -Connect your Shopify store with Celitix",
    logo: "/images/shopify.png",
    cards: [
      { tag: "New Order", text: "Instantly notify your customers the moment an order is placed." },
      { tag: "Fulfilled / Shipped Order", text: "Keep customers engaged with real-time shipping alerts." },
      { tag: "COD Order", text: "Send secure OTP-based COD verification messages. Keep customers engaged." },
      { tag: "Cancelled Order", text: "Notify customers immediately if an order is cancelled." },
    ],
  },
  {
    top: "Zoho CRM",
    heading: " Automate  customer communication -Connect          your Zoho CRM store with Celitix",
    logo: "/images/celitix.png",
    cards: [
      { tag: "Create Contact", text: "Add new customer contacts instantly and keep your database updated in real time." },
      { tag: "Create Lead", text: "Capture leads directly into Zoho CRM for faster follow-ups and conversions." },
      { tag: "Update Lead", text: "Easily update lead details and track progress as they move through the sales funnel." },
      { tag: "Create Deal", text: "Generate new deals effortlessly to manage opportunities and close sales faster." },
    ],
  },
  {
    top: "Woo Commerce",
    heading: "Automate  customer communication -Connect your Woo Commer store with Celitix",
    logo: "/images/whatsapp.png",
    cards: [
      { tag: "OTP before COD Confirmation", text: "Send one-tap OTP to confirm COD orders and cut RTO/fraud." },
      { tag: "Successful Checkout", text: "Share order confirmation, invoice/summary, and next steps instantly." },
      { tag: "Return Request", text: "Acknowledge requests, share instructions, and track status updates." },
      { tag: "Out for Delivery", text: "Proactive delivery alerts with live tracking/support options." },
    ],
  },
  {
    top: "Freshdesk",
    heading: "Automate  customer communication -Fresh Desk with Celitix",
    logo: "/images/track.png",
    cards: [
      { tag: "Task Created", text: "Automatically generate tasks from tickets to ensure nothing slips through the cracks." },
      { tag: "Schedule a Meeting", text: "Set up meetings with customers directly from ticket interactions for faster resolution." },
      { tag: "Send Meeting Summary", text: "Share detailed meeting summaries and resolutions instantly via WhatsApp or SMS." },
      { tag: "Synchronize Status", text: "Sync ticket and task statuses across Freshdesk and Celitix to maintain a unified view." },
    ],
  },
  {
    top: "Sales Force",
    heading: "Automate  customer communication -Connect your Sales Force with Celitix",
    logo: "/images/analytics.png",
    cards: [
      { tag: "Salesforce CRM", text: "Celitix + Salesforce – Sync customer data and streamline workflows with real-time integration." },
      { tag: "Lead Management", text: "Capture and update leads directly from WhatsApp/SMS conversations" },
      { tag: "Contact Sync", text: "Maintain a unified view by syncing contacts and accounts seamlessly." },
      { tag: "Deal Management", text: " Create and update deals automatically as customer interactions progress." },
    ],
  },
];

/* ------- helpers for reliable viewport height on iOS/Android ------- */
const getVH = () =>
  (typeof window !== "undefined" &&
    (window.visualViewport?.height || window.innerHeight)) || 0;
/* ------------------------------------------------------------------- */

/* Desktop vertical rail (lg+) */
function DesktopRail({ active, total, onJump }) {
  const pct = (active / (total - 1)) * 100;
  const thumbPct = 100 / total;
  const thumbCenter = (pct * (100 - thumbPct)) / 100 + thumbPct / 2; // keeps inside

  return (
    <div
      className="hidden lg:block absolute right-3 xl:right-4 top-1/2 -translate-y-1/2 z-20"
      style={{ width: 14 }}
    >
      <div
        className="relative w-[8px] h-[80vh] max-h-[560px] min-h-[320px] mx-auto rounded-full overflow-hidden cursor-pointer"
        style={{
          background:
            "linear-gradient(180deg, rgba(206,173,255,0.35) 0%, rgba(211,162,255,0.35) 100%)",
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const y = e.clientY - rect.top;
          const ratio = Math.max(0, Math.min(1, y / rect.height));
          onJump(Math.round(ratio * (total - 1)));
        }}
      >
        <div className="absolute inset-[1px] rounded-full bg-white/30 pointer-events-none" />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[8px] rounded-full shadow"
          style={{
            height: `calc(${thumbPct}% - 6px)`,
            top: `${thumbCenter}%`,
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(180deg, #7C3AED 0%, #9333EA 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* Mobile/Tablet bottom rail (xs–lg) */
function MobileRail({ active, total, onJump }) {
  const step = 100 / total;
  const left = (active / (total - 1)) * 100;

  return (
    <div className="lg:hidden absolute left-0 right-0 bottom-4 pb-[env(safe-area-inset-bottom)] z-20">
      <div className="mx-auto w-[82%] max-w-[560px]">
        <div
          className="relative h-2 rounded-full overflow-hidden cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, rgba(206,173,255,0.35) 0%, rgba(211,162,255,0.35) 100%)",
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const ratio = Math.max(0, Math.min(1, x / rect.width));
            onJump(Math.round(ratio * (total - 1)));
          }}
        >
          <div className="absolute inset-[1px] rounded-full bg-white/30 pointer-events-none" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full shadow"
            style={{
              width: `calc(${step}% - 6px)`,
              left: `calc(${left}% - (${step}% / 2))`,
              background:
                "linear-gradient(90deg, #7C3AED 0%, #9333EA 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function IntegrationStickyScrollerResponsive() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const rAF = useRef(null);
  const vhRef = useRef(0);
  const topRef = useRef(0);

  const measure = useCallback(() => {
    vhRef.current = getVH();
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      topRef.current = window.scrollY + rect.top;
    }
  }, []);

  const onScroll = useCallback(() => {
    const start = topRef.current;
    const vh = vhRef.current || 1;
    const y = window.scrollY;
    const totalHeight = (FRAMES.length - 1) * vh;
    const delta = Math.max(0, Math.min(y - start, totalHeight));
    const idx = Math.round(delta / vh);
    if (idx !== active) setActive(idx);
  }, [active]);

  useEffect(() => {
    const handle = () => {
      if (rAF.current) return;
      rAF.current = requestAnimationFrame(() => {
        onScroll();
        rAF.current = null;
      });
    };
    measure();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      onScroll();
    });
    onScroll();
    return () => {
      window.removeEventListener("scroll", handle);
      if (rAF.current) cancelAnimationFrame(rAF.current);
    };
  }, [measure, onScroll]);

  const jumpTo = (i) => {
    const vh = vhRef.current || getVH();
    const start = topRef.current;
    window.scrollTo({ top: start + i * vh, behavior: "smooth" });
  };

  const f = FRAMES[active];

  return (
    <section ref={sectionRef} className="relative w-full" style={{ background: BG }}>
      {/* The whole scrollytelling area is 5× viewport height */}
      <div className="min-h-[500dvh]">
        {/* Sticky canvas that changes content */}
        <div className="sticky top-0 h-[100dvh] flex items-center">
          <div className="relative w-full  px-4 sm:px-6 md:px-8 lg:px-10">
            {/* Headings */}
            <div className="text-center mb-5 sm:mb-6 md:mb-15">
              <h2 className=" heading text-2xl md:text-4xl mb-2">{f.top}</h2>
              <h2 className="text-[20px] sm:text-lg sub-heading md:text-2xl text-gray-900">
                {f.heading}
              </h2>
            </div>

            {/* Layout: responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
              {/* Left (2 cards) — on small screens these come below the logo */}
              <div className="order-3 md:order-1 flex flex-col gap-4 sm:gap-6 md:gap-8">
                <Card index={1} {...f.cards[0]} />
                <Card index={3} {...f.cards[1]} />
              </div>

              {/* Center logo — responsive sizes with fallback to style clamp */}
              <div className="order-1 md:order-2">
                <div
                  className="relative mx-auto rounded-full shadow-md bg-white/90 backdrop-blur"
                  style={{
                    width: "clamp(9rem, 28vw, 20rem)",
                    height: "clamp(9rem, 28vw, 20rem)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 8px ${RING}` }}
                  />
                  <Image
                    key={f.logo}
                    src={f.logo}
                    alt={f.heading}
                    fill
                    className="object-contain p-8 sm:p-10 opacity-0 animate-fadeScale"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 20rem"
                    priority
                  />
                </div>
              </div>

              {/* Right (2 cards) */}
              <div className="order-2 md:order-3 flex flex-col gap-4 sm:gap-6 md:gap-8">
                <Card  index={2} {...f.cards[2]} />
                <Card index={4} {...f.cards[3]} />
              </div>
            </div>

            {/* Navigation rails (desktop right rail + mobile bottom rail) */}
            <DesktopRail active={active} total={FRAMES.length} onJump={jumpTo} />
            <MobileRail active={active} total={FRAMES.length} onJump={jumpTo} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ tag, text, index = 1 }) {
  const num = String(index).padStart(2, "0"); // 01, 02, 03, 04

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#EDE6F7] bg-white p-4 sm:p-5 md:p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
    >
      {/* watermark bubble + number */}
      <div className="absolute -top-3 -left-3 h-20 w-20 rounded-full bg-gray-200/55" />
      <span className="absolute top-2 left-2 heading md:text-5xl font-extrabold leading-none text-gray-300/95 select-none">
        {num}
      </span>

      {/* content */}
      <div className="relative z-10">
        <div className="heading text-2xl  mb-1">
          {tag}
        </div>
        <p className="sub-heading text-xl leading-relaxed text-gray-600">
          {text}
        </p>
      </div>
    </div>
  );
}










