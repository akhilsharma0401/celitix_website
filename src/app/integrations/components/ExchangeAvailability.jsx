"use client";
import React from "react";
import Image from "next/image";
const BADGES = [
    { src: "./assets/Icons/WhatsApp.svg", alt: "Bitcoin" },
    { src: "./assets/Icons/WhatsApp.svg", alt: "Ethereum" },
    { src: "./assets/Icons/WhatsApp.svg", alt: "Solana" },
    { src: "./assets/Icons/WhatsApp.svg", alt: "Avalanche" },
];
export default function ExchangeAvailability() {
    return (
        <section className="w-full bg-[#0e0e10] py-8 text-white">
            <div className="mx-auto max-w-6xl px-5">
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/12
                        bg-[linear-gradient(135deg,#1a1b1e_0%,#121316_100%)]
                        p-5 md:p-7">
                    {/* subtle inner ring + grain */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.05]
                          [background:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)]
                          [background-size:16px_16px]" />

                    <div className="relative flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10">
                        {/* Left: icon + text */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0">
                                <Image
                                    src="./assets/Icons/WhatsApp.svg"
                                    alt="feature icon"
                                    fill
                                    sizes="80px"
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl font-extrabold leading-tight">
                                    <span className="text-white">Exchange </span>
                                    <span className="text-white/70 font-semibold">availability</span>
                                </h3>
                                <p className="mt-1 max-w-xl text-sm text-white/60">
                                    AI-powered tools to detect and prevent fraudulent activities.
                                </p>
                            </div>
                        </div>

                        {/* Right: crypto badges */}
                        <div className="flex items-center">
                            {BADGES.map((b, i) => (
                                <Badge key={b.alt} src={b.src} alt={b.alt} first={i === 0} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function Badge({ src, alt, first }) {
    return (
        <div
            className={[
                "relative grid place-items-center rounded-full",
                // circle size (close to your screenshot)
                "size-[92px]",
                // overlap like the reference
                first ? "ml-0" : "-ml-4",
                // thin outer border + soft diagonal sheen
                "border border-white/15",
                "bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_60%)]",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
            ].join(" ")}
        >
            {/* faint inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

            <Image
                src={src}
                alt={alt}
                width={42}
                height={42}
                className="h-[42px] w-[42px] object-contain drop-shadow-[0_0_10px_rgba(249,199,98,0.25)]"
                priority={first}
            />
        </div>
    );
}











