"use client"
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { comingSoon, CTALASTIMAGE, ReachApp, Reachclicktocall, Reachemail, Reachinboundcalling, ReachMissedcall, ReachObd, ReachRCS, ReachSMS, Reachwaytosms, Reachwhatsappicon } from '../../../public/assets/images';
// import { Helmet } from 'react-helmet-async';
import FormPopup from '../components/FormPopup';
import Image from 'next/image';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CallIcon from '@mui/icons-material/Call';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import AppleIcon from '@mui/icons-material/Apple';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import UniversalButton from '../components/UniversalButton';

const Pricing = () => {
    const [value, setValue] = useState(0);
    const ticks = [20000, 40000, 60000, 80000];
    const [openDialog, setOpenDialog] = useState(false);
    const [channel, setChannel] = useState('Chennals');
    const handleShowFormPopup = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }




    const handleChange = (e) => {
        const val = Math.max(0, Math.min(1000000, Number(e.target.value)));
        setValue(val);
    };

    const calculateTotal = (val) => {
        if (val <= 20000) {
            return val * 0.10;
        } else if (val <= 40000) {
            return val * 0.9;
        } else if (val <= 60000) {
            return val * 0.8;
        } else if (val <= 60000) {
            return val * 0.7;
        } else if (val <= 80000) {
            return val * 0.6;
        } else {
            return 0; // or handle values > 40000
        }
    };

    const total = calculateTotal(value);
    return (
        <>
            {/* <Helmet>
                <title>Pricing | Celitix </title>
                <meta name="Explore the flexible pricing for Celitix, the all-in-one CPaaS platform for messaging & voice calling solutions. Pay only for what you use." />
               
            </Helmet> */}
            <div className="bg-[#f7ebfc] w-full h-screen flex justify-center items-center">
                <Image
                    src={comingSoon}
                    alt="Coming Soon"
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* 1st */}
            {/* <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto items-center pb-5 md:pb-10">
                    <div className="space-y-3 text-center box-reveal-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 leading-tight">
                            Flexible <span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Pricing </span>for Scalability
                        </h1>

                        <p className="text-md md:text-lg lg:text-xl font-semibold text-gray-800 sub-heading ">
                            Add or remove channels as needed. Pay only for what you use.
                        </p>

                        <div className="flex justify-center mt-2 md:mt-5">
                            <UniversalButton
                                label="Contact Sales"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                onClick={handleShowFormPopup}
                            />

                            <FormPopup
                                visible={openDialog}
                                onHide={handleCloseDialog}
                            />
                        </div>
                    </div>

                </div>
            </section> */}
            {/* 1st */}
            {/* 2nd */}
            {/* <section className="bg-[#f7ebfc] py-2 md:py-10 px-4 sm:px-6 lg:px-25">
                <div className="text-center">
                    <h2 className='text-md md:text-lg lg:text-xl font-semibold text-gray-800 sub-heading '>
                        Pricing for{' '}
                        <select
                            className="form-select d-inline-block w-auto border-none"
                            value={channel}
                            onChange={(e) => setChannel(e.target.value)}

                        >
                            <option value="">Chennals</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="RCS">RCS</option>
                            <option value="SMS">SMS</option>
                            <option value="2 Way SMS">2 Way SMS</option>
                            <option value="Inbound Dialer">Inbound Dialer</option>
                            <option value="Outbound Dialer">Outbound Dialer </option>
                            <option value="Click to Call">Click to Call</option>
                            <option value="Missed Call">Missed Call</option>
                            <option value="Authenticator">Authenticator</option>
                            <option value="Email OTP">Email OTP</option>
                        </select>
                    </h2>

          
                    {channel === 'WhatsApp' && (
                        <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <h5>WhatsApp Pricing</h5>
                            <p>Starting at $0.005 per message with end-to-end encryption and template support.</p>
                        </div>
                    )}
                    {channel === 'RCS' && (
                        <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <h5>RCS Pricing</h5>
                            <p>Starting at $0.004 per message with rich media capabilities and suggested replies.</p>
                        </div>
                    )}
                    {channel === 'SMS' && (
                        <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <h5>SMS Pricing</h5>
                            <p>Starting at $0.002 per message with 98% global reach.</p>
                        </div>
                    )}
                </div>
            </section> */}
            {/* 2nd */}
            {/* 3rd */}
            <section className='bg-[#f7ebfc]'>
                <div className="px-4 py-8 max-w-7xl mx-auto">
                    <div className="flex gap-6">


                        <div className="flex flex-col bg-white rounded-xl shadow p-6 w-1/3">
                            <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">
                                Build campaign flows to automate and optimize your communications. Infobip Moments is a marketing automation solution designed to help businesses create personalized and timely interactions across various communication channels.
                            </p>
                            <h4 className="text-lg font-medium mb-2"> ₹1199/month</h4>
                            <h6 className="text-gray-700 font-semibold mb-1">Features</h6>
                            <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                                <li>Visual builder</li>
                                <li>Omnichannel capabilities</li>
                                <li>Behavior-based communication</li>
                                <li>Inbound message flows</li>
                                <li>Time triggered messages</li>
                                <li>Analytics</li>
                                <li>Connection between systems</li>
                            </ul>
                            <h6 className="text-gray-700 font-semibold mb-2">Available channels</h6>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <a href="/pricing/sms" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachSMS} alt="SMS" className="w-4 h-4 mr-1" /> SMS
                                </a>
                                <a href="/pricing/rcs" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachRCS} alt="RCS" className="w-4 h-4 mr-1" /> RCS
                                </a>
                                <a href="/pricing/whatsapp" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachwhatsappicon} alt="WhatsApp" className="w-4 h-4 mr-1" /> WhatsApp
                                </a>
                                <a href="/pricing/mms" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachinboundcalling} alt="IBD" className="w-4 h-4 mr-1" /> IBD
                                </a>
                                <a href="/pricing/push" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachObd} alt="OBD" className="w-4 h-4 mr-1" /> OBD
                                </a>
                                <a href="/pricing/voice" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachMissedcall} alt="Missed Call" className="w-4 h-4 mr-1" /> Missed Call
                                </a>
                                <a href="/pricing/viber" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachwaytosms} alt="2 Way SMS" className="w-4 h-4 mr-1" /> 2 Way SMS
                                </a>
                                <a href="/pricing/messenger" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachclicktocall} alt="Click 2 Call" className="w-4 h-4 mr-1" /> Click 2 Call
                                </a>
                                <a href="/pricing/email" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachemail} alt="Email" className="w-4 h-4 mr-1" /> Email
                                </a>
                                <a href="/pricing/messenger" className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachApp} alt="OTP-Free" className="w-4 h-4 mr-1" /> OTP-Free
                                </a>
                            </div>
                            <UniversalButton
                                label="Contact us →"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] mb-2"
                            />

                        </div>


                        <div className="flex flex-col bg-white rounded-xl shadow p-6 w-3/4">
                            <div className="text-center">
                                <h2 className='text-md md:text-lg lg:text-xl font-semibold text-gray-800 sub-heading '>
                                    Pricing for{' '}
                                    <select
                                        className="form-select d-inline-block w-auto border-none"
                                        value={channel}
                                        onChange={(e) => setChannel(e.target.value)}

                                    >
                                        <option value="">Chennals</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="RCS">RCS</option>
                                        <option value="SMS">SMS</option>
                                        <option value="2 Way SMS">2 Way SMS</option>
                                        <option value="Inbound Dialer">Inbound Dialer</option>
                                        <option value="Outbound Dialer">Outbound Dialer </option>
                                        <option value="Click to Call">Click to Call</option>
                                        <option value="Missed Call">Missed Call</option>
                                        <option value="Authenticator">Authenticator</option>
                                        <option value="Email OTP">Email OTP</option>
                                    </select>
                                </h2>


                                {channel === 'WhatsApp' && (
                                    <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                                        <h5>WhatsApp Pricing</h5>
                                        <p>Starting at $0.005 per message with end-to-end encryption and template support.</p>
                                    </div>
                                )}
                                {channel === 'RCS' && (
                                    <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                                        <h5>RCS Pricing</h5>
                                        <p>Starting at $0.004 per message with rich media capabilities and suggested replies.</p>
                                    </div>
                                )}
                                {channel === 'SMS' && (
                                    <div className="mt-3 p-3 border rounded" style={{ maxWidth: '400px', margin: '0 auto' }}>
                                        <h5>SMS Pricing</h5>
                                        <p>Starting at $0.002 per message with 98% global reach.</p>
                                    </div>
                                )}
                            </div>



                            <div className="w-full px-4 py-10">
                                <div className="flex items-center gap-4">
                                    {/* Slider Container */}
                                    <div className="flex flex-col w-full relative">
                                        {/* Label row */}
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>0</span>
                                            <span>100000</span>
                                        </div>

                                        {/* Slider */}
                                        <div className="relative w-full">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100000"
                                                step="1000"
                                                value={value}
                                                onChange={(e) => setValue(Number(e.target.value))}
                                                className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                            />

                                            {/* Clickable Ticks */}
                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                {ticks.map((tick) => (
                                                    <button
                                                        key={tick}
                                                        onClick={() => setValue(tick)}
                                                        style={{ left: `${(tick / 100000) * 100}%`, transform: 'translateX(-50%)' }}
                                                        className="absolute top-0.5 w-2 h-2 bg-gray-700 rounded-full focus:outline-none pointer-events-auto"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Custom Thumb Styling */}
                                        <style jsx>{`
                                                            input[type='range']::-webkit-slider-thumb {
                                                            appearance: none;
                                                            height: 10px;
                                                            width: 10px;
                                                            border-radius: 2px;
                                                            background: #9B44B6;
                                                            cursor: pointer;
                                                            
                                                            }
                                                            input[type='range']::-moz-range-thumb {
                                                            height: 16px;
                                                            width: 16px;
                                                            border-radius: 2px;
                                                            background: #f97316;
                                                            cursor: pointer;
                                                            }
                                                        `}</style>
                                    </div>

                                    {/* Value Box */}
                                    <input
                                        type="number"
                                        min="0"
                                        max="1000000"
                                        value={value}
                                        onChange={handleChange}
                                        className="bg-blue-100 text-blue-800 px-2 py-2 rounded-lg text-sm font-medium w-32 text-center outline-none"
                                    />
                                    <div>
                                        <select name="" id="">
                                            <option value="inr">INR</option>
                                            <option value="inr">INR</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-700">
                                        Total: <span className="font-bold">₹{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
            {/* 3rd */}
            {/* 4th */}
            {/* <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A05CD7] to-[#4B0FA6] px-6 md:px-12 py-5 md:py-20">
               
                <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img
                        src={CTALASTIMAGE}
                        alt="Customer Support"
                        className="z-10 w-full sm:w-72 md:w-80 lg:w-[500px] object-contain lg:absolute top-0 md:-top-65"
                    />
                </div>

              
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-white text-2xl sm:text-3xl heading md:text-4xl font-bold mb-4">
                        Need Custom Pricing?
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
                        Contact our team directly to design a custom pricing plan for your business.
                    </p>
                    <UniversalButton
                        label="Get in Touch "
                        variant="transitionbtn"
                        className="px-4 py-2 rounded-xl bg-white hover:bg-gray-200 transition-all duration-300 sm:px-4 sm:py-2 "
                        onClick={handleShowFormPopup}
                    />
                    <FormPopup
                        visible={openDialog}
                        onHide={handleCloseDialog}
                    />
                </div>
            </div> */}
            {/* 4th */}
        </>
    );
};

export default Pricing;
