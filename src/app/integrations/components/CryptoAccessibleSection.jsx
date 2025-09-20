// "use client";
// import React from "react";
// import Image from "next/image";

// export default function CryptoFiveCards() {
//     return (
//         <section className="relative w-full bg-[#0e0e10] py-8 text-white">
//             <div className="mx-auto max-w-6xl px-5">
//                 <div className="text-center mb-10">
//                     <span className="mx-auto mb-3 inline-block rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[.18em] text-white/70">
//                         Accessible for everyone
//                     </span>
//                     <h2 className="text-3xl font-extrabold leading-tight md:text-[34px]">
//                         <span className="text-white">Crypto </span>
//                         <span className="text-white/85">development</span>
//                         <br />
//                         <span className="text-white/90">accessible</span>
//                     </h2>
//                 </div>

//                 {/* Row 1: two horizontal cards */}
//                 <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                     <RowCard
//                         icon="/icons/cube.png"
//                         strong="Crypto"
//                         light="management"
//                         desc="Automated identity verification and anti-money laundering."
//                     />
//                     <RowCard
//                         icon="/icons/hex.png"
//                         strong="Crypto"
//                         light="exchange"
//                         desc="A built-in explorer to track transactions."
//                     />
//                 </div>

//                 {/* Row 2: three centered cards */}
//                 <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
//                     <CenterCard
//                         icon="/icons/stack.png"
//                         strong="Real-time"
//                         light="data"
//                         desc="Global reach with content available in multiple."
//                     />
//                     <CenterCard
//                         icon="/icons/spike.png"
//                         strong="Advanced"
//                         light="trading"
//                         desc="Visual dashboards for trade performance."
//                     />
//                     <CenterCard
//                         icon="/icons/wing.png"
//                         strong="Blockchain"
//                         light="compliance"
//                         desc="Exportable reports for tax and accounting purposes."
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ========== Card Variants ========== */

// function RowCard({ icon, strong, light, desc }) {
//     return (
//         <div
//             className="
//         group relative overflow-hidden rounded-xl border border-white/12
//         bg-[linear-gradient(180deg,#191a1c_0%,#111214_100%)]
//         p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
//       "
//         >

//             {/* subtle grain */}
//             <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:16px_16px]" />

//             <div className="flex items-start gap-4">
//                 <div className="relative h-14 w-14 shrink-0">
//                     <div className="absolute -inset-2 -z-10 rounded-xl bg-gradient-to-br from-white/6 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
//                     <Image
//                         src={icon}
//                         alt=""
//                         width={56}
//                         height={56}
//                         className="h-14 w-14 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
//                     />
//                 </div>

//                 <div className="pt-1">
//                     <h3 className="text-[15px] font-semibold tracking-tight">
//                         <span className="text-white">{strong} </span>
//                         <span className="text-white/70">{light}</span>
//                     </h3>
//                     <p className="mt-1 text-[13px] leading-relaxed text-white/55">{desc}</p>
//                 </div>
//             </div>

//             <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/5 transition-all duration-300 group-hover:ring-1" />
//         </div>
//     );
// }

// function CenterCard({ icon, strong, light, desc }) {
//     return (

//         <div
//             className="
//         group relative overflow-hidden rounded-xl border border-white/12
//         bg-[linear-gradient(180deg,#191a1c_0%,#111214_100%)]
//         p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
//       "
//         >


//             {/* subtle grain */}
//             <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:16px_16px]" />

//             <div className="mx-auto mb-3 h-16 w-16">
//                 <Image
//                     src={icon}
//                     alt=""
//                     width={64}
//                     height={64}
//                     className="h-16 w-16 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
//                 />
//             </div>

//             <h3 className="text-[15px] font-semibold">
//                 <span className="text-white">{strong} </span>
//                 <span className="text-white/70">{light}</span>
//             </h3>
//             <p className="mt-2 text-[13px] leading-relaxed text-white/55">{desc}</p>

//             <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/5 transition-all duration-300 group-hover:ring-1" />
//         </div>
//     );
// }

















"use client";
import Image from "next/image";
import { IntegrationsFreshdesk, IntegrationsFreshWork, IntegrationsLeadSquared, IntegrationsSales, IntegrationsSheets, IntegrationsShopify, IntegrationsWoo, IntegrationsZoho } from "../../../../public/assets/images";

export default function IntegrationsFullBackground() {
  // Replace with your own list if you already have `loop`
  const logotwos = [
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

  return (
    <section className="relative overflow-hidden py-5 md:py-20">
      {/* Full-bleed gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      {/* Full background: waves + inter-connected network */}
      <FullBackgroundFX />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold heading md:text-4xl text-gray-800 mb-1 md:mb-5">
          Integrations
        </h2>
        <p className="mt-3 sub-heading text-base md:text-lg mb-1 md:mb-5 text-gray-600">
          Manage customer conversations and business data in one place with Celitix.
        </p>

        {/* Slider row */}
        <div className="relative mt-8">
          {/* Edge fade (JSX-safe + Safari) */}
          <div
            className="overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <ul
              role="list"
              className="track flex items-center gap-4 will-change-transform"
              style={{ "--speed": "18s" }}
            >
              {loop.map((item, i) => (
                <li
                  key={item.alt + "-" + i}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/60 backdrop-blur-md ring-1 ring-black/5 grid place-items-center shadow-sm transition hover:shadow-md hover:scale-105"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="h-8 sm:h-9 object-contain grayscale hover:grayscale-0 transition"
                    priority={i < logotwos.length}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Local rules for the slider */}
      <style jsx>{`
        .track {
          width: max-content;
          animation: integrations-scroll var(--speed, 18s) linear infinite;
        }
        @media (hover: hover) and (pointer: fine) {
          .track:hover { animation-play-state: paused; }
        }
        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }
      `}</style>

      {/* Global keyframes (so the names resolve) */}
      <style jsx global>{`
        @-webkit-keyframes integrations-scroll {
          from { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
          to   { -webkit-transform: translate3d(-50%,0,0); transform: translate3d(-50%,0,0); }
        }
        @keyframes integrations-scroll {
          from { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
          to   { -webkit-transform: translate3d(-50%,0,0); transform: translate3d(-50%,0,0); }
        }
      `}</style>
    </section>
  );
}

/** FULL-BLEED background: flowing waves + inter-connected network */
function FullBackgroundFX() {
  // Node field (0–100 space)
  const nodes = [
    { x: 6, y: 20 }, { x: 18, y: 10 }, { x: 30, y: 22 }, { x: 42, y: 12 },
    { x: 58, y: 18 }, { x: 70, y: 8 },  { x: 84, y: 20 }, { x: 92, y: 36 },
    { x: 74, y: 34 }, { x: 56, y: 30 }, { x: 40, y: 38 }, { x: 24, y: 34 },
    { x: 10, y: 40 }, { x: 20, y: 58 }, { x: 36, y: 52 }, { x: 52, y: 60 },
    { x: 68, y: 48 }, { x: 86, y: 58 }, { x: 72, y: 70 }, { x: 56, y: 76 },
    { x: 40, y: 66 }, { x: 26, y: 78 }, { x: 12, y: 68 }, { x: 8, y: 86 },
  ];

  // Link pairs (indices)
  const links = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
    [7,8],[8,9],[9,10],[10,11],[11,12],
    [12,13],[13,14],[14,15],[15,16],[16,17],
    [17,18],[18,19],[19,20],[20,21],[21,22],[22,23],
    [2,10],[4,9],[9,16],[11,14],[14,20],[5,9],[8,16],[13,21],[6,8],[18,16],
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* WAVES — extra wide for seamless loop; using inline styles (no bracket TW) */}
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full opacity-80"
        style={{ width: "300%", left: "-50%" }}
      >
        <defs>
          <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#6b0da1" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#8447c6" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="wg2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#6b0da1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8447c6" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Track 1 */}
        {/* <g className="wave-track">
          <path d="M0,420 C200,380 400,460 600,420 C800,380 1000,460 1200,420 L1200,600 L0,600 Z" fill="url(#wg1)" />
          <path d="M1200,420 C1400,380 1600,460 1800,420 C2000,380 2200,460 2400,420 L2400,600 L1200,600 Z" fill="url(#wg1)" />
          <path d="M-1200,420 C-1000,380 -800,460 -600,420 C-400,380 -200,460 0,420 L0,600 L-1200,600 Z" fill="url(#wg1)" />
        </g> */}

        {/* Track 2 (parallax, higher) */}
        {/* <g className="wave-track wave-track--slow">
          <path d="M0,280 C220,240 420,320 640,280 C860,240 1060,320 1280,280 L1280,600 L0,600 Z" fill="url(#wg2)" />
          <path d="M1200,280 C1420,240 1620,320 1840,280 C2060,240 2260,320 2480,280 L2480,600 L1200,600 Z" fill="url(#wg2)" />
          <path d="M-1200,280 C-980,240 -780,320 -560,280 C-340,240 -140,320 80,280 L80,600 L-1200,600 Z" fill="url(#wg2)" />
        </g> */}
      </svg>

      {/* NETWORK — overlays entire section */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="netStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.10" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {links.map(([a, b], i) => {
          const A = nodes[a], B = nodes[b];
          return (
            <line
              key={"l"+i}
              x1={A.x} y1={A.y}
              x2={B.x} y2={B.y}
              stroke="url(#netStroke)"
              strokeWidth="0.35"
              strokeLinecap="round"
              className="net-line"
            />
          );
        })}

        {nodes.map((p, i) => (
          <g key={"n"+i} transform={`translate(${p.x} ${p.y})`} className="net-node">
            <circle r="2.2" fill="url(#nodeGlow)" />
            <circle r="0.7" fill="#ffffff" fillOpacity="0.9" />
          </g>
        ))}
      </svg>

      {/* Animations for background */}
      <style jsx>{`
        /* Waves: translate across 300% width for seamless loop */
        .wave-track {
          animation: waveMove 36s linear infinite;
          transform: translate3d(0,0,0);
        }
        .wave-track--slow { animation-duration: 54s; opacity: 0.9; }

        @keyframes waveMove {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-33.333%,0,0); }
        }

        /* Network connectivity */
        .net-line {
          stroke-dasharray: 6 10;
          animation: dashMove 16s linear infinite;
        }
        .net-line:nth-child(3n) { animation-duration: 20s; stroke-opacity: 0.85; }
        .net-line:nth-child(4n) { animation-duration: 24s; stroke-opacity: 0.65; }
        .net-line:nth-child(5n) { animation-duration: 28s; stroke-opacity: 0.5; }

        .net-node { opacity: 0.9; }
        .net-node:nth-child(2n) { animation: pulse 5s ease-in-out infinite; }
        .net-node:nth-child(3n) { animation: pulse 6.5s ease-in-out infinite; }
        .net-node:nth-child(5n) { animation: pulse 8s ease-in-out infinite; }

        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -160; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(0.96); opacity: 0.8; }
          50%      { transform: scale(1.08); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wave-track, .wave-track--slow, .net-line, .net-node { animation: none; }
        }
      `}</style>
    </div>
  );
}





