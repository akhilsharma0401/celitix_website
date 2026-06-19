"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShieldIcon from "@mui/icons-material/Shield";
import GavelIcon from "@mui/icons-material/Gavel";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArticleIcon from "@mui/icons-material/Article";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import instagram from "../../../public/assets/Icons/Instagram_icon.png";
import facebook from "../../../public/assets/Icons/Facebook_Icon.png";
import LinkedIn from "../../../public/assets/Icons/LinkedIn_Icon.png";
import twitter from "../../../public/assets/Icons/twitter_Icon.png";
import YouTube from "../../../public/assets/Icons/Youtube.png";
import whats from "../../../public/assets/Icons/WhatsApp.svg";
import livechatservicesicon from "../../../public/assets/mainicons/livechatservicesicon.png";
import WhatsAppLiveChaticonss from "../../../public/assets/mainicons/WhatsAppLiveChaticonss.png";
import InstagramLiveChaticon from "../../../public/assets/mainicons/InstagramLiveChaticon.png";
import RCSLiveChaticon from "../../../public/assets/mainicons/RCSLiveChaticon.png";
import WebsiteLiveChaticonss from "../../../public/assets/mainicons/WebsiteLiveChaticonss.png";
import Channels from "../../../public/assets/mainicons/Channels.png";
import AboutUsicon from "../../../public/assets/mainicons/AboutUsicon.png";
import Careersicon from "../../../public/assets/mainicons/Careersicon.png";
import ContactUsicon from "../../../public/assets/mainicons/ContactUs.png";
import WhatsAppChatboticon from "../../../public/assets/mainicons/WhatsAppChatboticon.png";
import SMSicon from "../../../public/assets/mainicons/SMSicon.png";
import twoWaySMSicon from "../../../public/assets/mainicons/twoWaySMSicon.png";
import WhatsAppicon from "../../../public/assets/mainicons/WhatsAppicon.png";
import Instagramicon from "../../../public/assets/mainicons/Instagramicon.png";
import MissedCallicon from "../../../public/assets/mainicons/Missed-Callicon.png";
import Authenticationicon from "../../../public/assets/mainicons/Authenticationicon.png";
import Click2callicon from "../../../public/assets/mainicons/Click2callicon.png";
import IBDicon from "../../../public/assets/mainicons/IBDicon.png";
import OBDicon from "../../../public/assets/mainicons/OBDicon.png";
import RCSicon from "../../../public/assets/mainicons/RCSicon.png";
import Emailicon from "../../../public/assets/mainicons/Emailicon.png";
import Ecommerceicon from "../../../public/assets/mainicons/Ecommerce.png";
import Educationicon from "../../../public/assets/mainicons/Education.png";
import Financeicon from "../../../public/assets/mainicons/Finance.png";
import FoodProductionicon from "../../../public/assets/mainicons/Food-Production.png";
import Healthcareicon from "../../../public/assets/mainicons/Healthcare.png";
import RealEstateicon from "../../../public/assets/mainicons/Real-Estate.png";
import ServiceBasedicon from "../../../public/assets/mainicons/Service-Based.png";
import TechStartupsicon from "../../../public/assets/mainicons/Tech-Startups.png";
import Tourismicon from "../../../public/assets/mainicons/Tourism.png";

const groups = [
  {
    title: "Main Pages",
    items: [
      [
        "/",
        "Home",
        "Celitix Home Page",
        HomeIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      ["/cpaas-solutions", "Product", "Celitix Product", Channels],
      ["/about-us", "About Us", "Celitix About", AboutUsicon],
      ["/careers", "Career", "Celitix Careers", Careersicon],
      ["/contact-us", "Contact Us", "Celitix Contact", ContactUsicon],
      [
        "/pricing",
        "Pricing",
        "Celitix Pricing",
        LocalOfferIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/privacy-policy",
        "Privacy Policy",
        "Celitix Privacy Policy",
        ShieldIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/terms-and-conditions",
        "Terms & Conditions",
        "Celitix Terms & Conditions",
        GavelIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/payment-and-cancellation",
        "Payment & Cancellation",
        "Celitix Payment & Cancellation Policy",
        CreditCardIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/shipping-and-delivery-policy",
        "Shipping & Delivery",
        "Celitix Shipping & Delivery Policy",
        LocalShippingIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/whatsapp-chatbot",
        "WhatsApp Chatbot",
        "Celitix WhatsApp Chatbot",
        WhatsAppChatboticon,
      ],
    ],
  },
  {
    title: "Channels",
    items: [
      ["/whatsapp-business-api", "WhatsApp", "Celitix WhatsApp", WhatsAppicon],
      ["/instagram-business", "Instagram", "Celitix Instagram", Instagramicon],
      ["/rcs-business-messaging", "RCS", "Celitix RCS Service", RCSicon],
      ["/sms-marketing", "SMS", "Celitix SMS Service", SMSicon],
      ["/two-way-sms", "2 Way SMS", "Celitix 2-Way SMS", twoWaySMSicon],
      ["/inbound-dialer", "IBD", "Celitix IBD", IBDicon],
      ["/outbound-dialer", "OBD", "Celitix OBD", OBDicon],
      ["/click-to-call", "Click2Call", "Celitix Click2Call", Click2callicon],
      [
        "/missed-call-services",
        "Missed Call",
        "Celitix Missed Call",
        MissedCallicon,
      ],
      [
        "/user-verification",
        "Authentication",
        "Celitix Auth",
        Authenticationicon,
      ],
      ["/email-otp", "Email OTP", "Celitix Email OTP", Emailicon],
    ],
  },
  {
    title: "Live Chat",
    items: [
      [
        "/live-chat-services",
        "Live Chat Services",
        "Celitix Live Chat Services",
        livechatservicesicon,
      ],
      [
        "/whatsapp-live-chat",
        "WhatsApp Live Chat",
        "Celitix WhatsApp Live Chat",
        WhatsAppLiveChaticonss,
      ],
      [
        "/instagram-live-chat",
        "Instagram Live Chat",
        "Celitix Instagram Live Chat",
        InstagramLiveChaticon,
      ],
      [
        "/rcs-live-chat",
        "RCS Live Chat",
        "Celitix RCS Live Chat",
        RCSLiveChaticon,
      ],
      [
        "/website-live-chat",
        "Website Live Chat",
        "Celitix Website Live Chat",
        WebsiteLiveChaticonss,
      ],
    ],
  },
  {
    title: "Industries",
    items: [
      [
        "/retail-and-ecommerce",
        "E-Commerce",
        "E-Commerce Industries",
        Ecommerceicon,
      ],
      ["/healthcare", "Healthcare", "Healthcare Industries", Healthcareicon],
      ["/financial-services", "Finance", "Finance Industries", Financeicon],
      [
        "/education-and-edtech",
        "Education",
        "Education Industries",
        Educationicon,
      ],
      ["/travel-and-tourism", "Tourism", "Tourism Industries", Tourismicon],
      [
        "/construction-and-real-estate",
        "Real Estate",
        "Real Estate Industries",
        RealEstateicon,
      ],
      [
        "/food-and-beverages",
        "Food Production",
        "Food Production Industries",
        FoodProductionicon,
      ],
      [
        "/professional-services",
        "Service-Based",
        "Service-Based Industries",
        ServiceBasedicon,
      ],
      [
        "/tech-startups",
        "Tech Startups",
        "Tech Startups Industries",
        TechStartupsicon,
      ],
    ],
  },
  {
    title: "Resources",
    items: [
      [
        "/blog",
        "Blog",
        "Celitix Blog",
        ArticleIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
      [
        "/tutorial",
        "Tutorial",
        "Celitix Tutorials",
        PlayCircleIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
    ],
  },
  {
    title: "Solutions",
    items: [
      [
        "/integrations",
        "Integrations",
        "Celitix Integrations",
        ExtensionIcon,
        "bg-[#ead8f3] text-[#6b238a]",
      ],
    ],
  },
];

const footerColumns = [
  { title: "Solutions", items: [["/integrations", "Integrations"]] },
  {
    title: "Legal & Support",
    items: [
      ["/privacy-policy", "Privacy Policy"],
      ["/terms-and-conditions", "Terms & Conditions"],
      ["/payment-and-cancellation", "Payment & Cancellation"],
      ["/shipping-and-delivery-policy", "Shipping & Delivery"],
    ],
  },
  {
    title: "Company",
    items: [
      ["/about-us", "About Us"],
      ["/careers", "Career"],
      ["/contact-us", "Contact Us"],
    ],
  },
];

const connectIcons = [
  {
    href: "https://www.instagram.com/celitix.official",
    label: "Instagram",
    icon: instagram,
  },
  {
    href: "https://www.facebook.com/celitix.official",
    label: "Facebook",
    icon: facebook,
  },
  {
    href: "https://www.linkedin.com/company/celitix/",
    label: "LinkedIn",
    icon: LinkedIn,
  },
  { href: "https://x.com/celitix", label: "X", icon: twitter },
  { href: "https://www.youtube.com/@celitix", label: "YouTube", icon: YouTube },
  { href: "https://wa.me/917230000091", label: "WhatsApp", icon: whats },
];

function SitemapCard({ group, className = "" }) {
  return (
    <div
      className={`rounded-[16px] border border-[#5d237b] bg-white/95 p-5 shadow-[0_14px_28px_rgba(79,35,106,0.22)] ${className}`}
    >
      <div className="mb-5 flex items-center gap-2">
        <span className="h-7 w-1 rounded-full bg-[#70208f]" />
        <h2 className="heading text-base font-bold uppercase text-[#5c237a]">
          {group.title}
        </h2>
      </div>

      <ul className="space-y-2.5">
        {group.items.map(([href, label, aria, Icon, color]) => {
          const isImageIcon =
            Icon && typeof Icon === "object" && Object.hasOwn(Icon, "src");

          return (
            <li key={`${group.title}-${label}`}>
              <Link
                href={href}
                aria-label={aria}
                className="group/link flex items-center justify-between gap-3 text-sm font-medium text-black transition-colors hover:text-[#70208f] sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-2">
                  {Icon ? (
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                        color || "bg-[#ead8f3] text-[#6b238a]"
                      }`}
                    >
                      {isImageIcon ? (
                        <Image
                          src={Icon}
                          alt=""
                          className="h-5 w-5 object-contain"
                        />
                      ) : (
                        <Icon sx={{ fontSize: 17 }} />
                      )}
                    </span>
                  ) : null}
                  <span className="truncate sub-heading">{label}</span>
                </span>
                <ChevronRightIcon
                  className="shrink-0 text-[#351544] transition-transform group-hover/link:translate-x-1"
                  sx={{ fontSize: 18 }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Sitemap() {
  const [mainPages, channels, liveChat, industries, resources, solutions] =
    groups;

  return (
    <section className="min-h-screen w-full bg-[radial-gradient(circle_at_bottom_right,rgba(210,161,237,0.55),transparent_38%),linear-gradient(180deg,#f8fbff_0%,#f5eafa_100%)] px-4 pb-4 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-screen-2xl py-5 md:py-15">
        <h1 className="heading mb-7 text-center text-3xl font-bold text-[#592271] sm:text-4xl lg:text-5xl py-0 md:py-5">
          Explore Our Celitix Site
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          <SitemapCard group={mainPages} className="xl:min-h-[450px]" />
          <SitemapCard group={channels} className="xl:min-h-[450px]" />
          <SitemapCard group={liveChat} className="xl:min-h-[450px]" />
          <SitemapCard group={industries} className="xl:min-h-[450px]" />
          <div className="grid gap-5 content-start">
            <SitemapCard group={resources} />
            <SitemapCard group={solutions} />
            <div className="overflow-hidden rounded-[16px] border border-white/70 bg-[#dfc0f1]/80 p-5 shadow-[0_14px_30px_rgba(117,62,142,0.22)]">
              <div className="relative">
                <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
                <div className="relative mb-4 flex items-center justify-between gap-3">
                  <h3 className="heading text-sm font-bold uppercase text-[#351544]">
                    Connect
                  </h3>
                  <span className="h-px flex-1 bg-[#70208f]/25" />
                </div>
                <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-6 xl:grid-cols-3">
                  {connectIcons.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      className="group/social flex h-11 w-full items-center justify-center rounded-xl border border-white/70 bg-white/85 shadow-[0_8px_18px_rgba(69,30,88,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_24px_rgba(69,30,88,0.2)] focus:outline-none focus:ring-2 focus:ring-[#70208f]/35"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        className="h-6 w-6 object-contain transition-transform duration-300 group-hover/social:scale-110"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
