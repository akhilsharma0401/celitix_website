// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const SLIDES = [
//   {
//     id: "rs-7",
//     bg: "https://wp.ditsolution.net/toptech-multipurpose/wp-content/uploads/2024/09/h8-bg-slider1.jpg",
//     badge: "Welcome to TopTech",
//     line1: "Top IT",
//     line2: "In the World",
//     sub:
//       "And in order to make a business, brand advertising and marketing plays an important role. Similarly, in making cultivation business",
//     ctas: [
//       { label: "How IT Works", href: "#how-it-works", primary: true },
//       { label: "IT Services", href: "#it-services", primary: false },
//     ],
//     video: "https://www.youtube.com/embed/8J8JJyeMaiM?autoplay=1",
//   },
//   {
//     id: "rs-9",
//     bg: "https://wp.ditsolution.net/toptech-multipurpose/wp-content/uploads/2024/09/toptech-slide1.jpg",
//     badge: "Total IT",
//     line1: "Best IT",
//     line2: "For your business",
//     sub:
//       "We deliver scalable, modern solutions that boost performance, security, and growth across your stack.",
//     ctas: [{ label: "How IT Works", href: "#how-it-works", primary: true }],
//     video: "https://www.youtube.com/embed/8J8JJyeMaiM?autoplay=1",
//   },
// ];

// export default function VerticalHeroSlider() {
//   const [index, setIndex] = useState(0);
//   const [incoming, setIncoming] = useState(null); // { i: number, dir: 'down' | 'up' }
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showVideo, setShowVideo] = useState(false);
//   const timerRef = useRef(null);

//   const DURATION = 6000;

//   const go = (nextIndex, dir) => {
//     const i = (nextIndex + SLIDES.length) % SLIDES.length;
//     if (i === index || incoming) return;
//     setIncoming({ i, dir });
//   };

//   const next = () => go(index + 1, "down"); // right arrow → from top to place
//   const prev = () => go(index - 1, "up");   // left arrow  → from bottom to place
//   const pause = () => setIsPlaying(false);
//   const play = () => setIsPlaying(true);

//   // autoplay
//   useEffect(() => {
//     if (!isPlaying || incoming) return;
//     timerRef.current = setTimeout(next, DURATION);
//     return () => clearTimeout(timerRef.current);
//   }, [index, isPlaying, incoming]);

//   // keyboard
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   });

//   const active = SLIDES[index];
//   const incomingSlide = incoming ? SLIDES[incoming.i] : null;

//   return (
//     <div
//       className="hero"
//       onMouseEnter={pause}
//       onMouseLeave={play}
//       role="region"
//       aria-label="Hero slider"
//     >
//       {/* Active slide */}
//       <Slide
//         slide={active}
//         isActive
//         onPlay={() => setShowVideo(true)}
//         ariaHidden={!!incoming}
//       />

//       {/* Incoming slide with directional vertical animation */}
//       {incomingSlide && (
//         <Slide
//           slide={incomingSlide}
//           dir={incoming.dir}
//           onAnimationEnd={() => {
//             setIndex(incoming.i);
//             setIncoming(null);
//           }}
//           onPlay={() => setShowVideo(true)}
//         />
//       )}

//       {/* Arrows */}
//       <button className="arrow left" aria-label="Previous slide" onClick={prev}>
//         ‹
//       </button>
//       <button className="arrow right" aria-label="Next slide" onClick={next}>
//         ›
//       </button>

//       {/* Dots */}
//       <div className="dots" role="tablist" aria-label="Slide selector">
//         {SLIDES.map((s, i) => (
//           <button
//             key={s.id}
//             role="tab"
//             aria-selected={i === index}
//             className={`dot ${i === index ? "active" : ""}`}
//             onClick={() => go(i, i > index ? "down" : "up")}
//             title={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Video modal */}
//       {showVideo && (
//         <div className="modal" role="dialog" aria-modal="true">
//           <div className="backdrop" onClick={() => setShowVideo(false)} />
//           <div className="modal-body">
//             <button
//               className="close"
//               aria-label="Close"
//               onClick={() => setShowVideo(false)}
//             >
//               ✕
//             </button>
//             <div className="video">
//               <iframe
//                 src={SLIDES[index].video}
//                 title="Hero video"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style jsx>{`
//         .hero {
//           position: relative;
//           width: 100%;
//           height: clamp(520px, 90vh, 900px);
//           overflow: hidden;
//           background: #000;
//         }
//         .arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 6;
//           width: 44px;
//           height: 44px;
//           border-radius: 999px;
//           border: none;
//           background: rgba(0, 0, 0, 0.35);
//           color: #fff;
//           font-size: 28px;
//           cursor: pointer;
//         }
//         .arrow.left { left: 16px; }
//         .arrow.right { right: 16px; }

//         .dots {
//           position: absolute;
//           z-index: 6;
//           bottom: 18px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//         }
//         .dot { width: 9px; height: 9px; border-radius: 999px; border: none; background: rgba(255,255,255,.7); }
//         .dot.active { background: #fff; transform: scale(1.2); }

//         /* Modal */
//         .modal { position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; }
//         .backdrop { position: absolute; inset: 0; background: rgba(0,0,0,.6); }
//         .modal-body { position: relative; width: min(960px, 92vw); aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; background: #000; }
//         .close { position: absolute; top: 8px; right: 8px; width: 36px; height: 36px; border-radius: 999px; border: none; background: rgba(255,255,255,.1); color: #fff; }
//         .video { position: absolute; inset: 0; }
//         .video iframe { width: 100%; height: 100%; border: 0; }
//       `}</style>
//     </div>
//   );
// }

// /* ---------------- Slide (with vertical animation) ---------------- */

// function Slide({ slide, isActive = false, dir, onAnimationEnd, onPlay, ariaHidden }) {
//   return (
//     <div
//       className={`slide ${isActive ? "active" : ""} ${dir === "down" ? "enter-down" : ""} ${
//         dir === "up" ? "enter-up" : ""
//       }`}
//       onAnimationEnd={onAnimationEnd}
//       aria-hidden={ariaHidden}
//     >
//       <div className="bg" style={{ backgroundImage: `url(${slide.bg})` }} />
//       <div className="overlay" />
//       <div className="inner">
//         <div className="badge">{slide.badge}</div>
//         <h1 className="title">
//           <span>{slide.line1}</span>
//           <br />
//           <span>{slide.line2}</span>
//         </h1>
//         <p className="sub">{slide.sub}</p>
//         <div className="row">
//           {slide.ctas.map((c, i) =>
//             c.primary ? (
//               <a key={i} href={c.href} className="btn primary">
//                 {c.label}
//               </a>
//             ) : (
//               <a key={i} href={c.href} className="btn ghost">
//                 {c.label}
//               </a>
//             )
//           )}
//           <button className="play" onClick={onPlay} aria-label="Play video">
//             Play
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .slide {
//           position: absolute;
//           inset: 0;
//           color: #fff;
//           z-index: 5;
//           display: grid;
//           place-items: stretch;
//         }
//         .slide.active { z-index: 4; } /* active sits below incoming so incoming covers it */

//         /* Vertical entrances */
//         .enter-down { animation: enterDown 520ms cubic-bezier(.22,.61,.36,1) forwards; }
//         .enter-up   { animation: enterUp   520ms cubic-bezier(.22,.61,.36,1) forwards; }

//         @keyframes enterDown {
//           from { transform: translateY(-100%); }
//           to   { transform: translateY(0%); }
//         }
//         @keyframes enterUp {
//           from { transform: translateY(100%); }
//           to   { transform: translateY(0%); }
//         }

//         .bg {
//           position: absolute; inset: 0;
//           background-size: cover; background-position: center;
//           transform: scale(1.03);
//         }
//         .overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to right, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 40%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.1) 100%),
//                       rgba(0,0,0,.15);
//         }
//         .inner {
//           position: relative; z-index: 2;
//           max-width: 1280px; margin: 0 auto;
//           padding: clamp(16px, 4vw, 40px);
//           padding-top: min(22vh, 240px);
//         }
//         .badge {
//           display: inline-block; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;
//           font-size: clamp(12px, 1.6vw, 18px); padding: 8px 12px; border-radius: 6px;
//           background: rgba(255,255,255,.15); backdrop-filter: saturate(180%) blur(6px); margin-bottom: 14px;
//         }
//         .title { font-weight: 700; text-transform: uppercase; font-size: clamp(34px, 7vw, 74px); line-height: 1.05; margin: 8px 0; }
//         .sub { max-width: 680px; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.6; opacity: .95; margin-top: 14px; }
//         .row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 26px; }
//         .btn { display: inline-flex; align-items: center; justify-content: center; height: 52px; padding: 0 28px; border-radius: 8px; font-size: 16px; font-weight: 600; text-decoration: none; }
//         .btn.primary { background: #0c5adb; color: #fff; }
//         .btn.primary:hover { background: #00247e; transform: translateY(-1px); }
//         .btn.ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,.35); }
//         .btn.ghost:hover { border-color: rgba(255,255,255,.75); background: rgba(255,255,255,.06); transform: translateY(-1px); }
//         .play { width: 60px; height: 60px; border-radius: 999px; border: 2px solid #fff; background: transparent; color: #fff; }
//         @media (max-width: 768px) {
//           .arrow { display: none; }
//         }
//       `}</style>
//     </div>
//   );
// }























// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";




// const slides = [
//   {
//     id: 1,
//     title: "Bold Strategy, Beautiful Results",
//     subtitle: "Crafted experiences that convert.",
//     image:
//       "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "Get Started", href: "#" },
//   },
//   {
//     id: 2,
//     title: "Design that Moves",
//     subtitle: "Sleek interactions. Smooth performance.",
//     image:
//       "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "See Work", href: "#" },
//   },
//   {
//     id: 3,
//     title: "Stories that Sell",
//     subtitle: "Elevate your brand with motion.",
//     image:
//       "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "Contact Us", href: "#" },
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState("next"); // "next" | "prev"
//   const [clickPulse, setClickPulse] = useState(null); // "left" | "right" | null
//   const timerRef = useRef(null);
//   const isHovering = useRef(false);

//   const next = useCallback(() => {
//     setDirection("next");
//     setIndex((i) => (i + 1) % slides.length);
//     setClickPulse("right");
//     setTimeout(() => setClickPulse(null), 220);
//   }, []);

//   const prev = useCallback(() => {
//     setDirection("prev");
//     setIndex((i) => (i - 1 + slides.length) % slides.length);
//     setClickPulse("left");
//     setTimeout(() => setClickPulse(null), 220);
//   }, []);

//   // Auto-play every 6s
//   useEffect(() => {
//     const play = () => {
//       if (!isHovering.current) next();
//     };
//     timerRef.current = setInterval(play, 6000);
//     return () => clearInterval(timerRef.current);
//   }, [next]);

//   // Keyboard navigation
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [next, prev]);

//   const current = slides[index];

//   const backdropVariants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 0.5 } },
//     exit: { opacity: 0, transition: { duration: 0.4 } },
//   };

//   // Content card vertical movement depends on direction
//   const cardVariants = {
//     initial: (dir) => ({ y: dir === "next" ? -40 : 40, opacity: 0 }),
//     animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
//     exit: (dir) => ({ y: dir === "next" ? 40 : -40, opacity: 0, transition: { duration: 0.4 } }),
//   };

//   // Slight parallax for background on direction
//   const bgVariants = {
//     initial: (dir) => ({ scale: 1.05, y: dir === "next" ? -20 : 20 }),
//     animate: { scale: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
//     exit: (dir) => ({ scale: 1.05, y: dir === "next" ? 20 : -20, transition: { duration: 0.5 } }),
//   };

//   return (
//     <section
//       className="relative h-[100svh] w-full overflow-hidden bg-black"
//       onMouseEnter={() => (isHovering.current = true)}
//       onMouseLeave={() => (isHovering.current = false)}
//       onTouchStart={() => (isHovering.current = true)}
//       onTouchEnd={() => (isHovering.current = false)}
//     >
//       {/* Slides */}
//       <AnimatePresence mode="wait" custom={direction}>
//         <motion.div
//           key={current.id}
//           className="absolute inset-0"
//           variants={backdropVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//         >
//           {/* Background image with parallax */}
//           <motion.div
//             custom={direction}
//             variants={bgVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="absolute inset-0"
//             aria-hidden
//           >
//             <div
//               className="absolute inset-0 bg-center bg-cover"
//               style={{ backgroundImage: `url(${current.image})` }}
//             />
//             {/* Overlay gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
//           </motion.div>

//           {/* Content Card */}
//           <div className="relative z-10 flex h-full items-center justify-center p-4 md:justify-start md:px-16">
//             <AnimatePresence mode="popLayout" custom={direction}>
//               <motion.div
//                 key={`card-${current.id}`}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="max-w-xl w-[95%] md:w-[42rem] rounded-2xl bg-white/90 backdrop-blur shadow-2xl p-6 md:p-8 overflow-hidden"
//               >
//                 {/* scroll-reveal inside the card */}
//                 <motion.h2
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.1, duration: 0.5 }}
//                   className="text-2xl md:text-5xl font-bold tracking-tight text-gray-900"
//                 >
//                   {current.title}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="mt-3 md:mt-4 text-base md:text-xl text-gray-700"
//                 >
//                   {current.subtitle}
//                 </motion.p>

//                 <motion.div
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   className="mt-5 md:mt-8"
//                 >
//                   <a
//                     href={current.cta.href}
//                     className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 active:scale-[0.98] transition"
//                   >
//                     {current.cta.label}
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Controls */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3 md:bottom-10">
//         {slides.map((s, i) => (
//           <button
//             key={s.id}
//             onClick={() => {
//               if (i === index) return;
//               setDirection(i > index ? "next" : "prev");
//               setIndex(i);
//             }}
//             className={`pointer-events-auto h-2.5 w-7 rounded-full transition-all ${
//               i === index ? "bg-white/90 w-10" : "bg-white/40 hover:bg-white/70"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Arrow Buttons with zoom-in pulse */}
//       <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 md:px-6">
//         <button
//           onClick={prev}
//           aria-label="Previous"
//           className="group relative inline-grid place-items-center rounded-full bg-white/85 p-2 md:p-3 shadow-xl ring-1 ring-black/5 hover:bg-white transition pointer-events-auto"
//         >
//           <motion.span
//             className="absolute inset-0 rounded-full"
//             animate={clickPulse === "left" ? { scale: [1, 1.15, 1], opacity: [0.6, 0.25, 0] } : {}}
//             transition={{ duration: 0.22 }}
//             style={{ background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)" }}
//           />
//           <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-900 group-active:scale-90 transition" />
//         </button>

//         <button
//           onClick={next}
//           aria-label="Next"
//           className="group relative inline-grid place-items-center rounded-full bg-white/85 p-2 md:p-3 shadow-xl ring-1 ring-black/5 hover:bg-white transition pointer-events-auto"
//         >
//           <motion.span
//             className="absolute inset-0 rounded-full"
//             animate={clickPulse === "right" ? { scale: [1, 1.15, 1], opacity: [0.6, 0.25, 0] } : {}}
//             transition={{ duration: 0.22 }}
//             style={{ background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)" }}
//           />
//           <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-900 group-active:scale-90 transition" />
//         </button>
//       </div>
//     </section>
//   );
// }















// "use client";
// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";


// const slides = [
//   {
//     id: 1,
//     title: "Bold Strategy, Beautiful Results",
//     subtitle: "Crafted experiences that convert.",
//     points: [
//       "Research → Insight → Concept",
//       "Hi‑fidelity UI with micro‑interactions",
//       "Performance tuned for LCP/CLS",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "Get Started", href: "#" },
//   },
//   {
//     id: 2,
//     title: "Design that Moves",
//     subtitle: "Sleek interactions. Smooth performance.",
//     points: [
//       "Directional motion aligned to input",
//       "Accessible, keyboard‑navigable",
//       "Autoplay with smart pause",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "See Work", href: "#" },
//   },
//   {
//     id: 3,
//     title: "Stories that Sell",
//     subtitle: "Elevate your brand with motion.",
//     points: [
//       "Narrative‑first hero sections",
//       "Scroll‑synced reveals",
//       "Reusable animation tokens",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1920&auto=format&fit=crop",
//     cta: { label: "Contact Us", href: "#" },
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);
//   const [dir, setDir] = useState(1); // 1 = right/next (enter from TOP), -1 = left/prev (enter from BOTTOM)
//   const [zoomTick, setZoomTick] = useState(0); // increments to trigger bg zoom
//   const wheelLock = useRef(false);
//   const touchStartY = useRef(null);

//   const clampIndex = (i) => (i + slides.length) % slides.length;

//   const next = useCallback(() => {
//     setDir(1);
//     setIndex((i) => clampIndex(i + 1));
//     setZoomTick((t) => t + 1);
//   }, []);

//   const prev = useCallback(() => {
//     setDir(-1);
//     setIndex((i) => clampIndex(i - 1));
//     setZoomTick((t) => t + 1);
//   }, []);

//   // Keyboard
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [next, prev]);

//   // Wheel / touch swipe
//   const onWheel = (e) => {
//     if (wheelLock.current) return;
//     wheelLock.current = true;
//     if (e.deltaY > 0) next(); else prev();
//     setTimeout(() => (wheelLock.current = false), 600);
//   };

//   const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
//   const onTouchEnd = (e) => {
//     if (touchStartY.current == null) return;
//     const dy = e.changedTouches[0].clientY - touchStartY.current;
//     if (Math.abs(dy) < 24) return; // ignore tiny swipes
//     if (dy < 0) next(); else prev();
//     touchStartY.current = null;
//   };

//   // Variants for vertical stacking: incoming from top when dir=1, from bottom when dir=-1
//   const slideVariants = {
//     enter: (direction) => ({ y: direction === 1 ? "-100%" : "100%" }),
//     center: { y: "0%", transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
//     exit: (direction) => ({ y: direction === 1 ? "100%" : "-100%", transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } }),
//   };

//   // Background zoom pulse on arrow click
//   const bgZoom = {
//     key: zoomTick, // forces re-anim
//     initial: { scale: 1 },
//     animate: { scale: [1, 1.06, 1], transition: { duration: 0.5 } },
//   };

//   const current = slides[index];

//   return (
//     <section
//       className="relative h-[100svh] w-full overflow-hidden bg-black"
//       onWheel={onWheel}
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//     >
//       {/* Stacked slide stage */}
//       <div className="absolute inset-0">
//         <AnimatePresence initial={false} custom={dir}>
//           <motion.div
//             key={current.id}
//             className="absolute inset-0"
//             custom={dir}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//           >
//             {/* BG image with zoom pulse */}
//             <motion.div
//               {...bgZoom}
//               className="absolute inset-0 bg-center bg-cover"
//               style={{ backgroundImage: `url(${current.image})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

//             {/* Content card with scroll-reveal list */}
//             <div className="relative z-10 flex h-full items-center justify-center md:justify-start p-4 md:px-16">
//               <motion.div
//                 initial={{ y: dir === 1 ? -40 : 40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: dir === 1 ? 40 : -40, opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-[95%] md:w-[42rem] max-w-xl rounded-2xl bg-white/90 backdrop-blur shadow-2xl p-6 md:p-8"
//               >
//                 <motion.h2
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.1, duration: 0.45 }}
//                   className="text-2xl md:text-5xl font-bold text-gray-900"
//                 >
//                   {current.title}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ y: 24, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.18, duration: 0.45 }}
//                   className="mt-2 md:mt-3 text-base md:text-xl text-gray-700"
//                 >
//                   {current.subtitle}
//                 </motion.p>

//                 {/* Scroll reveal box */}
//                 <div className="relative mt-4 md:mt-6">
//                   <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/90 to-white/0 rounded-t-2xl" />
//                   <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/90 to-white/0 rounded-b-2xl" />
//                   <motion.ul
//                     key={`list-${current.id}`}
//                     initial={{ y: 28 }}
//                     animate={{ y: 0 }}
//                     transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
//                     className="max-h-28 overflow-hidden pr-1 space-y-2"
//                   >
//                     {current.points.map((p, i) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, y: 16 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
//                         className="flex items-start gap-2 text-gray-800"
//                       >
//                         <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gray-900/70" />
//                         <span className="text-sm md:text-base">{p}</span>
//                       </motion.li>
//                     ))}
//                   </motion.ul>
//                 </div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.25, duration: 0.45 }}
//                   className="mt-5 md:mt-7"
//                 >
//                   <a
//                     href={current.cta.href}
//                     className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/50 active:scale-[0.98] transition"
//                   >
//                     {current.cta.label}
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3 md:bottom-10">
//         {slides.map((s, i) => (
//           <button
//             key={s.id}
//             onClick={() => {
//               if (i === index) return;
//               setDir(i > index ? 1 : -1);
//               setIndex(i);
//               setZoomTick((t) => t + 1);
//             }}
//             className={`pointer-events-auto h-2.5 w-7 rounded-full transition-all ${
//               i === index ? "bg-white/90 w-10" : "bg-white/40 hover:bg-white/70"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Arrows with click pulse + bg zoom trigger */}
//       <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 md:px-6">
//         <button
//           onClick={prev}
//           aria-label="Previous"
//           className="group relative inline-grid place-items-center rounded-full bg-white/85 p-2 md:p-3 shadow-xl ring-1 ring-black/5 hover:bg-white transition pointer-events-auto"
//         >
//           <span className="absolute inset-0 rounded-full scale-100 opacity-0 group-active:opacity-40 group-active:scale-110 transition" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)" }} />
//           <ArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-900 group-active:scale-90 transition" />
//         </button>

//         <button
//           onClick={next}
//           aria-label="Next"
//           className="group relative inline-grid place-items-center rounded-full bg-white/85 p-2 md:p-3 shadow-xl ring-1 ring-black/5 hover:bg-white transition pointer-events-auto"
//         >
//           <span className="absolute inset-0 rounded-full scale-100 opacity-0 group-active:opacity-40 group-active:scale-110 transition" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)" }} />
//           <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-900 group-active:scale-90 transition" />
//         </button>
//       </div>
//     </section>
//   );
// }











"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

const VerticalDiceCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Swiper
        modules={[Navigation, Autoplay, EffectCube]}
        effect="cube"
        grabCursor={true}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="vertical-dice h-[400px] w-full md:h-[500px] lg:h-[600px]"
      >
        {[
          "https://picsum.photos/1200/600?random=1",
          "https://picsum.photos/1200/600?random=2",
          "https://picsum.photos/1200/600?random=3",
          "https://picsum.photos/1200/600?random=4",
        ].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden dice-face">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white text-3xl font-extrabold drop-shadow-xl">
                Slide {i + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS override for cube rotation */}
      <style jsx global>{`
        .vertical-dice {
          perspective: 1600px;
        }

        .vertical-dice .swiper-cube {
          filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.4))
            drop-shadow(0px 0px 40px rgba(99, 102, 241, 0.4));
        }

        .vertical-dice .dice-face {
          position: relative;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.35),
            0 10px 25px rgba(0, 0, 0, 0.4);
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.15),
            rgba(0, 0, 0, 0.4)
          );
        }

        /* Force cube rotation UP/DOWN depending on nav */
        .vertical-dice .swiper-cube .swiper-slide-prev {
          transform: rotateX(-90deg) translateZ(var(--swiper-width));
        }
        .vertical-dice .swiper-cube .swiper-slide-next {
          transform: rotateX(90deg) translateZ(var(--swiper-width));
        }
        .vertical-dice .swiper-cube .swiper-slide-active {
          transform: translateZ(var(--swiper-width));
        }
      `}</style>
    </div>
  );
};

export default VerticalDiceCarousel;



