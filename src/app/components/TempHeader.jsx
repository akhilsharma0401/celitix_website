"use client"

import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { Link, useNavigate } from 'next/link';

import Link from 'next/link'
// import { MdHome, MdBarChart, MdPieChart } from "react-icons/md";
// import { Helmet } from 'react-helmet-async';
import UniversalButton from './UniversalButton';
import Channels from '../../../public/assets/mainicons/Channels.png';
import Industries from '../../../public/assets/mainicons/Industries.png';
import AboutUsicon from '../../../public/assets/mainicons/AboutUsicon.png';
import Careersicon from '../../../public/assets/mainicons/Careersicon.png';
// import { AboutUsicon, Authenticationicon, Careersicon, celitixheader, Channels, Click2callicon, Ecommerceicon, Educationicon, Emailicon, Financeicon, FoodProductionicon, Healthcareicon, IBDicon, Industries, MissedCallicon, OBDicon, RCSicon, RealEstateicon, ServiceBasedicon, SMSicon, TechStartupsicon, Tourismicon, twoWaySMSicon, WhatsAppicon } from '../../assets/images';
import FormPopup from '../../app/components/FormPopup';

export const TempHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isChannelsOpen, setIsChannelsOpen] = useState(false);
    const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleClick = () => {
        if (!isChannelsOpen) {
            // first click: open dropdown
            setIsChannelsOpen(true)
        } else {
            // second click: go to product page
            //   navigate('/cpaas-solutions')
        }
    }

    const ChannelItem = ({ title, desc, to }) => (
        <div
            onClick={() => navigate(to)}
            className="flex items-start gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer 
                   hover:bg-gray-50 hover:shadow-md hover:scale-105"
        >
            {/* <div className="text-[#9B44B6] text-2xl">{iconMap[title]}</div> */}
            <div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-gray-600">{desc}</div>
            </div>
        </div>
    );
    const ResourcesItem = ({ title, desc, to }) => {
        return (
            <div
                //   onClick={() => navigate(to)}
                className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer 
                   hover:bg-gray-50 hover:shadow-md hover:scale-105 "
            >
                {/* <div className="text-[#9B44B6] text-2xl">{iconMap[title]}</div> */}
                <div>
                    <div className="font-semibold text-sm">{title}</div>
                    {/* <div className="text-sm text-gray-600">{desc}</div> */}
                </div>
            </div>
        )
    };

    const handleShowFormPopup = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    return (
        <>
            <div className="bg-[#9B44B6] text-white text-sm md:px-3 px-1 pt-1 pb-0 flex justify-between items-center flex-wrap relative z-50">

                {/* Email Section */}
                <div className="flex items-center gap-1 md:gap-2 mb-2">
                    <FaEnvelope />
                    <span>support@celitix.com</span>
                </div>

                {/* Phone Section */}
                <div className="flex items-center gap-1 md:gap-2 mb mb-2">
                    <FaPhoneAlt />
                    <span>+91 968-000-6460</span>
                </div>
            </div>
            <nav>
                <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white md:rounded-2xl shadow-md relative">
                    <div className="flex-shrink-0 cursor-pointer">
                    </div>

                    <nav className="hidden lg:flex flex-1 justify-center gap-1 text-sm font-medium text-black items-center">
                        {/* <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">Home</div> */}
                        {/* Cpaas */}
                        <div className="relative group cursor-pointer">
                            <Link href="#" to="/cpaas-solutions">
                                <div className="flex items-center text-lg gap-2 p-2 popfh rounded-md transition-all duration-300 cursor-pointer">
                                    CPaaS
                                    <MdKeyboardArrowDown className="block group-hover:hidden  transition-transform duration-300" />
                                    <MdKeyboardArrowUp className="hidden group-hover:block transition-transform duration-300" />
                                </div>
                            </Link>
                            <div className="absolute left-1/2 top-9 mt-2 transform -translate-x-1/2 opacity-0 scale-95 
            pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 
             group-hover:scale-100 transition-all duration-500 ease-out z-50 ">

                                <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-2 rotate-45 bg-white h-4 w-4 border-t border-l border-gray-200 z-[1]"></div>

                                <div className="absolute -left-40 top-full grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-6 bg-white text-black border border-gray-200 shadow-lg p-6 rounded-md w-[800px] ">

                                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 text-gray-800 hover:shadow-lg transition duration-300 ease-in-out">
                                    
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xl font-bold">
                                                <img src={Channels} alt="Channels" className="w-6 h-6" />
                                            </div>
                                            <h2 className="text-lg popfh font-bold">Channels</h2>
                                        </div>

                                        <p className="text-sm text-gray-600 mb-4 popfh leading-relaxed">
                                            Explore our omnichannel communication solutions
                                        </p>

                                        {/* <a
                           href="#"
                        className="text-indigo-600 text-sm font-semibold hover:underline"
                                 >
                              Overview &rarr;
                                </a> */}

                                        <Link href="/cpaas-solutions">
                                            <UniversalButton
                                                label="Overview →"
                                                variant="brutal"
                                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-2 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] lora mb-2"
                                            />
                                        </Link>

                                    </div>
                                    <div className="w-full grid grid-cols-1 popfh sm:grid-cols-1 md:grid-cols-1 gap-1 p-1">
                                        <Link href="#" >
                                            <ChannelItem title="WhatsApp" desc="Most Comprehensive" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="RCS" desc="Least Competitive" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="SMS" desc="Best Reach" to="/sms" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="2 Way SMS" desc="Best For Engagement" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="Email OTP" desc="Trusted & Trackable" />
                                        </Link>
                                    </div>
                                    <div className="w-full grid grid-cols-1 popfh sm:grid-cols-1 md:grid-cols-1 gap-1 p-1">
                                        <Link href="#" >
                                            <ChannelItem title="IBD" desc="Best For Customer Service" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="OBD" desc="Most Accessible" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="Click2Call" desc="Best For User Experience" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="Missed Call" desc="Most Customizable" />
                                        </Link>
                                        <Link href="#" >
                                            <ChannelItem title="Authentication" desc="Easy Security" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Industries */}
                        <div className="relative group cursor-pointer">
                            {/* Trigger */}
                            <div className="flex items-center text-lg gap-2 popfh p-2 rounded-md transition-all duration-300">
                                Industries
                                <MdKeyboardArrowDown className="block group-hover:hidden transition-transform duration-300" />
                                <MdKeyboardArrowUp className="hidden group-hover:block transition-transform duration-300" />
                            </div>

                            {/* Dropdown Wrapper */}
                            <div className="absolute left-1/2 top-9 mt-2 transform -translate-x-1/2 opacity-0 scale-95 
          pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 
          group-hover:scale-100 transition-all duration-500 ease-out z-50 ">

                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 rotate-45 bg-white h-4 w-4 border-t border-l border-gray-200  z-[1]"></div>


                                <div className="absolute -left-40 top-full grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-6 bg-white text-black border border-gray-200 shadow-lg p-6 rounded-md w-[800px] ">

                                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 text-gray-800 hover:shadow-lg transition duration-300 ease-in-out">
                             
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xl font-bold">
                                                <img src={Industries} alt="Industries" className="w-6 h-6" />
                                            </div>
                                            <h2 className="text-lg popfh font-bold">Industries</h2>
                                        </div>

                                        <p className="text-sm popfh text-gray-600 mb-4 leading-relaxed">
                                            Learn how Celitix can help companies in various industries
                                        </p>

                                       

                                    </div>
                                    <div className="w-full grid grid-cols-1 popfh sm:grid-cols-1 md:grid-cols-1 gap-1 p-1">
                                        <Link href="#" to="/retail-and-ecommerce">
                                            <ResourcesItem title="ECommerce" />
                                        </Link>
                                        <Link href="#" to="/healthcare">
                                            <ResourcesItem title="Healthcare" />
                                        </Link>
                                        <Link href="#" to="/financial-services">
                                            <ResourcesItem title="Finance" />
                                        </Link>
                                        <Link href="#" to="/education-and-edtech">
                                            <ResourcesItem title="Education" />
                                        </Link>
                                        <Link href="#" to="/travel-and-tourism">
                                            <ResourcesItem title="Tourism" />
                                        </Link>
                                    </div>
                                    <div className="w-full grid grid-cols-1 popfh sm:grid-cols-1 md:grid-cols-1 gap-1 p-1">
                                        <Link href="#" to="/construction-and-real-estate">
                                            <ResourcesItem title="Real Estate" />
                                        </Link>
                                        <Link href="#" to="/food-and-beverages">
                                            <ResourcesItem title="Food Production" />
                                        </Link>
                                        <Link href="#" to="/professional-services">
                                            <ResourcesItem title="Service-Based" />
                                        </Link>
                                        <Link href="#" to="/tech-startups">
                                            <ResourcesItem title="Tech Startups" />
                                        </Link>

                                    </div>
                                </div>



                                
                            </div>
                        </div>

                        {/* Company */}
                        <div className="relative group cursor-pointer">
                            
                            <div className="flex items-center popfh text-lg gap-2 p-2 rounded-md transition-all duration-300">
                                Company
                                <MdKeyboardArrowDown className="block group-hover:hidden transition-transform duration-300" />
                                <MdKeyboardArrowUp className="hidden group-hover:block transition-transform duration-300" />
                            </div>

                    
                            <div className="absolute left-1/2 top-9 mt-2 transform -translate-x-1/2 z-50
              opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
              transition-all duration-500 ease-out border border-gray-200 p-2 rounded-md  bg-white w-56 ">
                               
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 rotate-45 bg-white h-4 w-4 border-t border-l border-gray-200  z-[1]" />

                                
                                
                            </div>
                        </div>

                        {/* Pricing  */}
                        <div className="relative group cursor-pointer">
                            <Link href="#" to="/pricing">
                                <div className="flex items-center text-lg popfh gap-2 p-2 rounded-md transition-all duration-300">
                                    Pricing
                                    <MdKeyboardArrowDown className="block group-hover:hidden transition-transform duration-300" />
                                    <MdKeyboardArrowUp className="hidden group-hover:block transition-transform duration-300" />
                                </div>
                            </Link>
                          
                        </div>

                        {/* Resources */}
                        <div className="relative group cursor-pointer">
                            <div className="flex items-center text-lg gap-2 p-2 popfh rounded-md transition-all duration-300">
                                Resources
                                <MdKeyboardArrowDown className="block group-hover:hidden transition-transform duration-300" />
                                <MdKeyboardArrowUp className="hidden group-hover:block transition-transform duration-300" />
                            </div>
                            <div className="absolute left-1/2 top-9 mt-2 transform -translate-x-1/2 opacity-0 scale-95 
          pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 
          group-hover:scale-100 transition-all duration-500 ease-out z-50 border border-gray-200 p-2 rounded-md  bg-white w-60">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 rotate-45 bg-white h-4 w-4 border-t border-l border-gray-200  z-[1]"></div>
                                <div className="bg-white border border-gray-200 grid grid-cols-2 rounded-lg shadow-md py-3 px-0 flex-col">
                                    <Link href="#" to="/contact-us">
                                        <div className="flex flex-col popfh items-center justify-center border-r border-gray-700 m-0">
                                            <ResourcesItem title="Contact Us" />
                                        </div>
                                    </Link>
                                    <Link href="#" to="https://blog.celitix.com">
                                        <div className="flex flex-col popfh items-center justify-center">
                                            <ResourcesItem title="Blog" desc="Learn & Explore" />
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>



                       
                    </nav>

                    <div className="hidden lg:flex flex-shrink-0 gap-3">
                        <UniversalButton label="Book Demo" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-2 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]'  onClick={handleShowFormPopup} />
                        {/* <FormPopup
                            visible={openDialog}
                            onHide={handleCloseDialog}
                        /> */}
                  
                        <a
                            href="https://app.celitix.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <UniversalButton
                                label="Login"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-2 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] comicf"
                            />
                        </a>
                       


                    </div>


                    <div className="lg:hidden text-2xl cursor-pointer">
                        <label className="hamburger">
                            {/* Controlled by your mobileMenuOpen state */}
                            <input
                                type="checkbox"
                                checked={mobileMenuOpen}
                                onChange={toggleMenu}
                            />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                                <path className="line" d="M7 16 27 16" />
                            </svg>
                        </label>
                    </div>

                </div>
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md px-4 pt-2 -mt-2 pb-4 space-y-3 text-sm font-medium text-black transition-all duration-300 rounded-b-2xl overflow-y-auto">
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => {
                                if (window.innerWidth < 769) setIsChannelsOpen(!isChannelsOpen);
                            }}
                        >

                            <div
                                className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer"
                                onClick={handleClick}
                            >
                                CPaaS <MdKeyboardArrowDown className={`${isChannelsOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
                            </div>

                            <div
                                className={`bg-white text-black rounded-md z-50 transition-all duration-300 ease-in-out ${isChannelsOpen ? 'block' : 'hidden'} grid sm:grid-cols-2 md:grid-cols-2 w-full md:w-[800px]`}
                            >
                                <Link href="#" to="/whatsapp-business-platform">
                                    <ChannelItem title="WhatsApp" desc="Most Comprehensive" />
                                </Link>
                                <Link href="#" to="/rcs-business-messaging">
                                    <ChannelItem title="RCS" desc="Least Competitive" />
                                </Link>
                                <Link href="#" to="/sms-marketing">
                                    <ChannelItem title="SMS" desc="Best Reach" to="/sms" />
                                </Link>
                                <Link href="#" to="/two-way-sms">
                                    <ChannelItem title="2 Way SMS" desc="Best For Engagement" />
                                </Link>
                                <Link href="#" to="/inbound-dialer">
                                    <ChannelItem title="IBD" desc="Best For Customer Service" />
                                </Link>
                                <Link href="#" to="/outbound-dialer">
                                    <ChannelItem title="OBD" desc="Most Accessible" />
                                </Link>
                                <Link href="#" to="/missed-call-services">
                                    <ChannelItem title="Missed Call" desc="Most Customizable" />
                                </Link>
                                <Link href="#" to="/click-to-call">
                                    <ChannelItem title="Click2Call" desc="Best For User Experience" />
                                </Link>
                                <Link href="#" to="/user-verification">
                                    <ChannelItem title="Authentication" desc="Easy Security" />
                                </Link>
                                <Link href="#" to="/email-otp">
                                    <ChannelItem title="Email OTP" desc="Trusted & Trackable" />
                                </Link>
                            </div>

                        </div>
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => {
                                if (window.innerWidth < 769) setIsIndustriesOpen(!isIndustriesOpen);
                            }}
                        >
                            <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">
                                Industries <MdKeyboardArrowDown />
                            </div>
                            <div
                                className={`bg-white text-black rounded-md z-50 transition-all duration-300 ease-in-out ${isIndustriesOpen ? 'block' : 'hidden'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full md:w-[800px] max-h-[80vh] overflow-y-auto`}
                            >
                                <Link href="#" to="/retail-and-ecommerce">
                                    <ResourcesItem title="ECommerce" />
                                </Link>
                                <Link href="#" to="/healthcare">
                                    <ResourcesItem title="Healthcare" />
                                </Link>
                                <Link href="#" to="/financial-services">
                                    <ResourcesItem title="Finance" />
                                </Link>
                                <Link href="#" to="/education-and-edtech">
                                    <ResourcesItem title="Education" />
                                </Link>
                                <Link href="#" to="/travel-and-tourism">
                                    <ResourcesItem title="Tourism" />
                                </Link>
                                <Link href="#" to="/construction-and-real-estate">
                                    <ResourcesItem title="Real Estate" />
                                </Link>
                                <Link href="#" to="/food-and-beverages">
                                    <ResourcesItem title="Food Production" />
                                </Link>
                                <Link href="#" to="/professional-services">
                                    <ResourcesItem title="Service-Based" />
                                </Link>
                                <Link href="#" to="/tech-startups">
                                    <ResourcesItem title="Tech Startups" />
                                </Link>
                            </div>

                        </div>
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => {
                                if (window.innerWidth < 769) setIsCompaniesOpen(!isCompaniesOpen);
                            }}
                        >
                            <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">
                                Companies <MdKeyboardArrowDown />
                            </div>
                            <div
                                className={`bg-white text-black rounded-md z-50
          transition-all duration-300 ease-in-out
        ${isCompaniesOpen ? 'block' : 'hidden'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
          w-full md:w-[800px] max-h-[80vh] overflow-y-auto`}
                            >
                                <Link href="#" to="/about-us">
                                    <ResourcesItem title="About Us" desc="About our team" />
                                </Link>
                                <Link href="#" to="/careers">
                                    <ResourcesItem title="Careers" desc="Who we work with" />
                                </Link>
                            </div>
                        </div>

                        <Link href="#" to="/pricing">
                            <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">
                                Pricing <MdKeyboardArrowDown />
                            </div>
                        </Link>
                        {/* <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">
                Resources <MdKeyboardArrowDown />
                  </div> */}
                        {/* <div className="cursor-pointer">Resources</div> */}
                        <div
                            className="relative group cursor-pointer"
                            onClick={() => {
                                if (window.innerWidth < 769) setIsResourcesOpen(!isResourcesOpen);
                            }}
                        >
                            <div className="flex items-center text-lg gap-2 p-2 rounded-md transition-all duration-300 cursor-pointer">
                                Resources <MdKeyboardArrowDown />
                            </div>

                            <div
                                className={`bg-white text-black rounded-md z-50
          transition-all duration-300 ease-in-out 
        ${isResourcesOpen ? 'block' : 'hidden'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
          w-full md:w-[800px] max-h-[80vh] overflow-y-auto`}
                            >
                                <Link href="#" to="https://blog.celitix.com">
                                    <ResourcesItem title="blog" desc="Learn & Explore" />
                                </Link>
                                {/* <ResourcesItem title="Case Studies" desc="How Celitix Helps" /> */}
                            </div>

                        </div>
                        <div className=" flex  gap-2">
                            {/* <Link href="#" to="/book-a-demo"> */}
                            <UniversalButton label="Book Demo" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-2 py-1 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6]' onClick={handleShowFormPopup} />
                            {/* </Link> */}
                            <a
                                href="https://app.celitix.com/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <UniversalButton
                                    label="Login"
                                    variant="brutal"
                                    className="bg-[#9B44B6] border-[#9B44B6] text-white px-2 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] comicf"
                                />
                            </a>

                            {/* <button className="w-full px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
                    Book Demo
                  </button>
                  <button className="w-full px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
                    Login
                  </button> */}
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}