"use client";
import React from "react";
import Image from "next/image";

export default function CryptoDirectionSection() {
  return (
    <section className="w-full bg-[#0e0f11] py-14 text-white">
      <div className="mx-auto max-w-6xl px-5">

        {/* Pill + Heading */}
        <div className="text-center">
          <span className="mx-auto mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[.18em] text-white/70">
            Crypto Direction
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
            <span className="text-white">Goods &amp; assets </span>
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              according
            </span>{" "}
            <span className="text-white/85">to users interests.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ActionCard
            icon="/icons/paper.png"
            title="Read our"
            sub="white paper"
            btn="Open whitepaper"
            accent="amber"
          />
          <ActionCard
            icon="/icons/token.png"
            title="1 CRN token price"
            sub="0.00014 BTC"
            btn="Buy tokens (−25%)"
            accent="pink"
          />
          <ActionCard
            icon="/icons/users.png"
            title="ICO Participants"
            sub="370,000+"
            btn="Join our Telegram"
            accent="violet"
          />
        </div>
      </div>
    </section>
  );
}

/* -------- Card -------- */
function ActionCard({ icon, title, sub, btn, accent = "amber" }) {
  const accentClasses = {
    amber: "text-amber-300 border-amber-300 hover:bg-amber-300/10",
    pink: "text-pink-300 border-pink-300 hover:bg-pink-300/10",
    violet: "text-violet-300 border-violet-300 hover:bg-violet-300/10",
  }[accent];

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-white/12
        bg-[linear-gradient(180deg,#1b1c1f_0%,#131417_100%)]
        p-8 text-center transition-transform
        hover:-translate-y-1
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
      "
    >
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* ICON (flips right -> left on hover, returns on mouseout) */}
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 transform-gpu transition-transform duration-500 ease-out group-hover:-scale-x-100"
          aria-hidden
        />
      </div>

      {/* Title + Sub */}
      <h3 className="text-lg font-extrabold">
        {title}
        <div className="mt-1 text-base font-semibold text-white/70">{sub}</div>
      </h3>

      {/* Button */}
      <div className="mt-6">
        <button
          type="button"
          className={[
            "rounded-full border px-4 py-2 text-[12px] font-semibold transition-colors",
            accentClasses,
          ].join(" ")}
        >
          {btn}
        </button>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/5 transition-all duration-300 group-hover:ring-1" />
    </div>
  );
}
