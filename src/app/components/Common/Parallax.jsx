"use client"
import React, { useEffect, useRef, useState } from 'react';
// import classNames from 'classnames';

const SlideIn = ({ children }) => {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={(
                'transition-all duration-500 transform',
                visible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-24'
            )}
        >
            {children}
        </div>
    );
};

const ParallaxSection = ({ image, title }) => (
    <section
        className="h-[600px] bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${image || ""})` }}
    >
        <h1 className="text-white text-[48px] md:text-[96px] lg:text-[160px] font-bold drop-shadow-lg">
            {title}
        </h1>
    </section>
);

const ContentSection = () => (
    <>
        <section className="py-10">
            <div className="w-300 mx-auto px-4 transition-all duration-150 hover:py-12">
                <SlideIn>
                    <h2 className="text-4xl mb-6 font-bold popf">Reach Smarter</h2>
                    <p className="font-semibold text-md popf">Omnichannel Campaigns That Deliver</p>
                    <p className="text-sm popf">Turn broadcasts into conversations on WhatsApp, RCS, SMS, Email, and Voice calls.</p>
                    <li className="text-sm popf">Click-to-WhatsApp ads, chatbots, live chat & CRM in one place.</li>
                    <li className="text-sm popf">Personalised promotional messages- sent or automated, at scale.</li>
                    <li className="text-sm  popf">Creative engagement campaigns that build your brand.</li>

                </SlideIn>
            </div>
        </section>

    </>
);

const Parallax = () => {
    return (
        <main className="">
            <ParallaxSection
                image="https://images.unsplash.com/photo-1458640904116-093b74971de9?auto=format&fit=crop&w=1700&q=80"
            // title="Serene"
            />
            <ContentSection />
            <ParallaxSection
                image="https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?auto=format&fit=crop&w=1700&q=80"
            // title="Rise"
            />
            <ContentSection />
            <ParallaxSection
                image="https://images.unsplash.com/photo-1437652010333-fbf2cd02a4f8?auto=format&fit=crop&w=1080&q=80"
            // title="Calm"
            />
            <ContentSection />
        </main>
    );
};

export default Parallax;
