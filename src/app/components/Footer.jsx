"use client"
import React from 'react';
// import  motion  from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import  celitixfooter  from '../../../public/assets/mainicons/celitix-cpaas-solution-logo-footer.svg';
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import  instagram  from '../../../public/assets/Icons/Instagram_icon.png';
import  METAWHITE  from '../../../public/assets/mainicons/MetaLogowhite.png';
import  YouTube  from '../../../public/assets/Icons/Youtube.png';
import  facebook  from '../../../public/assets/Icons/Facebook_Icon.png';
import  LinkedIn  from '../../../public/assets/Icons/LinkedIn_Icon.png';
import  twitter  from '../../../public/assets/Icons/twitter_Icon.png';
import  whats  from '../../../public/assets/Icons/WhatsApp.svg';
import  footerBatch  from '../../../public/assets/mainicons/BATCH01.svg';

// import { celitixfooter, facebook, footerBatch, instagram, LinkedIn, METAWHITE, twitter, whats, YouTube } from '@/assets/images';
const Footer = () => {
  return (
    <footer className=" bg-black lora">
      <div className="  text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-12 rounded-[10px]">

        <div>
          {/* <Link to="/"> */}
            <Image
              src={celitixfooter}
              alt="Celitix CPaaS Solution Logo" title='Celitix CPaaS Solution Logo'
              width={200}
              // className="mt-2 cursor-pointer"
              // width="180"
              // height="50"
            />
          {/* </Link> */}
          {/* <img src="src\assets\Icons\celitix-cpaas-solution-logo-footer.svg" alt="Solution Logo" className="mb-4" width="180px" height="50" /> */}
          <p className="text-md leading-relaxed sub-heading mt-4">
            An omnichannel communication platform that drives growth through simplified workflows, automation & strengthening relationships.
          </p>


          <div className='lg:mx-auto md:mx-0 sm:mx-0 mt-5'>
            <h4 className="font-semibold sub-heading mb-2">Stay in Touch</h4>
            <ul className="text-sm sub-heading space-y-3">
              <Link
                href="https://www.google.com/maps?q=Proactive+Professional+Services+Pvt+Ltd,+Biswa+Nagar,+Jaipur,+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-start gap-2 cursor-pointer">
                  <FaMapMarkerAlt className="mt-1" />

                  <p className='leading-relaxed pera'>Proactive Professional Services Pvt. Ltd. <br />
                    22, 3rd Floor, Biswa Nagar,
                    New Sanganer Road,<br />
                    Jaipur, Rajasthan, India - 302019</p>

                </li>
              </Link>

              <li className="flex items-center pera gap-2 mt-2">
                <FaPhoneAlt />
                <Link href="tel:+919680006460" className="">
                  +91 968-000-6460
                </Link>
              </li>

              <li className="flex items-center pera gap-2">
                <FaEnvelope /> <span>support@celitix.com</span>
              </li>
            </ul>

            <h4 className="font-semibold mt-4">Social</h4>
            <div className="flex gap-4 items-center mt-2">
              {/* Instagram */}
              <Link href="https://www.instagram.com/celitix.official" target="_blank" rel="noopener noreferrer">
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125"
                  width={24}
                  height={24}
                />
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/celitix.official" target="_blank" rel="noopener noreferrer">
                <Image src={facebook} alt="Facebook" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125" />
              </Link>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/celitix/" target="_blank" rel="noopener noreferrer">
                <Image src={LinkedIn} alt="LinkedIn" className="w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125" />
              </Link>

              <Link href="https://x.com/celitix" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Image
                  src={twitter}
                  alt="Twitter"
                  className="w-5 h-5 invert transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </Link>

              {/* YouTube  */}
              <Link href="https://www.youtube.com/@celitix" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Image
                  src={YouTube}
                  alt="YouTube"
                  className="w-7 h-7 transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </Link>

              {/* WhatsApp  */}
              <Link href="https://wa.me/917230000091" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Image
                  src={whats}
                  alt="WhatsApp"
                  className="w-7 h-7 transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Company &  (2-in-1 column) */}
        <div className="grid grid-cols-2">
          <div className='md:mx-auto sm:mx-0'>
            <h4 className="font-semibold group relative cursor-pointer heading mb-2 ">Company <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-18"></span></h4>
            <ul className="text-md sub-heading space-y-3">
              <li className="group relative cursor-pointer">
                <Link href="/">
                  Home
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-10"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/contact-us">
                  Contact Us
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-19"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/pricing">
                  Pricing
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-11"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/about-us">
                  About
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-10"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/careers">
                  Career
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-11"></span>
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold group relative cursor-pointer heading mb-2 mt-5">Resources<span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-20"></span></h4>
            <ul className="text-md sub-heading space-y-3">
              <li className="group relative cursor-pointer">
                <Link href="https://blog.celitix.com">
                  Blog
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-8"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/site-map">
                   Sitemap
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-15"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:mx-auto sm:mx-0'>
            <h4 className="font-semibold group relative cursor-pointer heading mb-2">Industries
              <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-20"></span>
            </h4>
            <ul className="text-md sub-heading space-y-3">
              <li className="group relative cursor-pointer">
                <Link href="/retail-and-ecommerce">
                  ECommerce
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-20"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/healthcare">
                  Healthcare
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-18"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/financial-services">
                  Finance
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-14"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/education-and-edtech">
                  Education
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-17"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/travel-and-tourism">
                  Tourism
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-14"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/construction-and-real-estate">
                  Real Estate
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-19"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/food-and-beverages">
                  Food Production
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-27"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/professional-services">
                  Service-Based
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-24"></span>
                </Link>
              </li>
              <li className="group relative cursor-pointer">
                <Link href="/tech-startups">
                  Tech Startups
                  <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-22"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link
              href="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&ref=pd_home_hero_cta&id=8342781115823000&section=overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={METAWHITE} alt="Meta Tech Partner" className="cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1">
          {/* Channels */}
          <div>
            <h4 className="font-semibold heading group relative cursor-pointer text-center mb-2">Channels<span
              className="block h-0.5 bg-white absolute text-center left-5/12 bottom-0 w-0 transition-all duration-300 group-hover:w-18"
            ></span></h4>
            <div className='grid grid-cols-2 gap-2'>
              <ul className="text-md sub-heading md:mx-auto  sm:mx-0 space-y-3">
                <li className="group relative cursor-pointer">
                  <Link href="/whatsapp-business-platform">
                    WhatsApp
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-17"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer">
                  <Link href="/rcs-business-messaging">
                    RCS
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-7"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer">
                  <Link href="/sms-marketing">
                    SMS
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-8"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer">
                  <Link href="/two-way-sms">
                    2 Way SMS
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-18"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer ">
                  <Link href="/inbound-dialer">
                    IBD
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-6"></span>
                  </Link>
                </li>

              </ul>
              <ul className="text-md sub-heading md:mx-auto sm:mx-0 space-y-3">
                <li className="group relative cursor-pointer ">
                  <Link href="/outbound-dialer">
                    OBD
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-8"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer ">
                  <Link href="/missed-call-services">
                    Missed Call
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-19"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer ">
                  <Link href="/click-to-call">
                    Click2Call
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-16"></span>
                  </Link>
                </li>

                <li className="group relative cursor-pointer ">
                  <Link href="/user-verification">
                    Authentication
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-24"></span>
                  </Link>
                </li>
                <li className="group relative cursor-pointer ">
                  <Link href="/email-otp">
                    Email OTP
                    <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-16"></span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className='mx-5 flex justify-center mt-5'>
            <Image src={footerBatch} alt="Batch" />
          </div>
        </div>

      </div>
      <div className="text-md text-white text-center border-t border-gray-700 py-4">
        © 2025 Celitix. All rights reserved. Powered by Proactive Professional Services Pvt Ltd |{' '}
        <Link
          href="/terms-and-conditions"
          className="group relative cursor-pointer hover:text-gray-300 transition inline-block"
        >
          Terms & Conditions
          <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
        </Link>{' '}
        |{' '}
        <Link
          href="/privacy-policy"
          className="group relative cursor-pointer hover:text-gray-300 transition inline-block"
        >
          Privacy Policy
            <span className="block h-0.5 bg-white absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

            </footer>
        );
};

export default Footer;