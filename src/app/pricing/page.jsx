"use client"
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { comingSoon, CTALASTIMAGE, Inbound_Dialer, ReachApp, Reachclicktocall, Reachemail, Reachinboundcalling, ReachMissedcall, ReachObd, ReachRCS, ReachSMS, Reachwaytosms, Reachwhatsappicon } from '../../../public/assets/images';
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
    const CHANNEL_ICONS = {
        WhatsApp: Reachwhatsappicon,
        RCS: ReachRCS,
        SMS: ReachSMS,
        Authenticator: ReachApp,
        EmailOTP: Reachemail,
        Outbound: ReachObd,
        Inbound: Reachinboundcalling,
        Missed: ReachMissedcall,
        Twoway: Reachwaytosms,
        clicktocall: Reachclicktocall,
    };




    const [openDialog, setOpenDialog] = useState(false);
    const handleShowFormPopup = () => {
        setOpenDialog(true);
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }



    // ─────────────────────────────────────────────────────────────────────────────
    // 1️⃣ State & initial setup
    const [value, setValue] = useState(0);
    const [channel, setChannel] = useState('WhatsApp');
    const [whatsAppType, setWhatsAppType] = useState('Marketing');  // new
    const [currency, setCurrency] = useState('inr');
    const [rates, setRates] = useState({ usd: 1 / 75, eur: 1 / 90 });      // fallback
    const ticks = [200000, 400000, 600000, 800000];

    // ─────────────────────────────────────────────────────────────────────────────
    // 2️⃣ Fetch live rates
    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/26e0264a2658e739860a6998/latest/USD')
            .then(res => res.json())
            .then(data => {
                setRates({
                    usd: 1,
                    eur: data.conversion_rates.EUR,
                    inr: data.conversion_rates.INR,
                });
            })
            .catch(err => console.error("Failed to fetch rates", err));
    }, []);

    // ─────────────────────────────────────────────────────────────────────────────
    // 3️⃣ Input handler + percent
    const handleChange = e => {
        const v = Math.max(0, Math.min(1000000, Number(e.target.value)));
        setValue(v);
    };
    const percent = (value / 1_000_000) * 100;

    // ─────────────────────────────────────────────────────────────────────────────
    // 4️⃣ Helper to build a lookup key
    function getChannelKey(channel, whatsAppType) {
        if (channel === 'WhatsApp') {
            return `WhatsApp_${whatsAppType}`;
        }
        return channel.replace(/\s+/g, '_');
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // 5️⃣ Refactored total calculator
    function calculateTotal(val, currency, channelKey) {
        const CHANNEL_RATES = {
            WhatsApp_Marketing: [[Infinity, 0.85]],
            WhatsApp_Utility: [[Infinity, 0.15]],
            WhatsApp_Authentication: [[Infinity, 0.15]],
            RCS: [[100000, 0.20], [500000, 0.18], [Infinity, 0.16]],
            SMS: [[100000, 0.12], [500000, 0.10], [Infinity, 0.09]],
            EmailOTP: [[Infinity, 0.05]],      // flat
            Outbound: [[100000, 0.20], [500000, 0.18], [Infinity, 0.16]],
            clicktocall: [[100000, 0.20], [500000, 0.18], [Infinity, 0.16]],
            Inbound: [[3, 0.50], [6, 0.49], [9, 0.48], [Infinity, 0.46]],
            Missed: [[3, 1], [6, 0.49], [9, 0.48], [Infinity, 0.46]],
            Twoway: [[3, 2], [6, 1.49], [9, 2.48], [Infinity, 5.46]],
            Authenticator: [[3, 5], [6, 0.49], [9, 0.48], [Infinity, 0.46]],
            default: [[200000, 0.10], [400000, 0.09], [600000, 0.08], [800000, 0.07], [Infinity, 0.06]],
        };

        const slabs = CHANNEL_RATES[channelKey] || CHANNEL_RATES.default;
        const rate = slabs.find(([limit]) => val <= limit)[1];
        const inrTotal = val * rate;

        if (currency === 'usd') return inrTotal / rates.inr;
        if (currency === 'eur') return (inrTotal / rates.inr) * rates.eur;
        return inrTotal;
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // 6️⃣ Currency formatter
    const formatCurrency = (amount, currency) => {
        const symbols = { inr: '₹', usd: '$', eur: '€' };
        return `${symbols[currency] || ''}${amount.toFixed(2)}`;
    };

    // ─────────────────────────────────────────────────────────────────────────────
    // 7️⃣ Compute total with the merged logic
    const channelKey = getChannelKey(channel, whatsAppType);
    const total = calculateTotal(value, currency, channelKey);


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
            {/* <section className='bg-[#f7ebfc] py-20'>
                <div className="px-4 py-8 max-w-7xl mx-auto">
                    <div className="flex gap-6">


                        <div className="flex flex-col bg-white rounded-xl shadow p-6 w-full md:w-1/3">
                            <h3 className="text-xl heading font-semibold mb-1">Full Access Plan</h3>
                            <h6 className="text-lg sub-heading font-semibold mb-2">Omnichannel Customer Engagement</h6>

                            <p className="text-gray-600 text-md pera mb-4 flex-grow">
                                Interact with customers directly, anytime, anywhere from one cloud-powered AI platform. From text to voice, verification, and beyond.
                            </p>
                            <h4 className="text-lg sub-heading font-medium mb-2"> From ₹1,199/month</h4>
                            <h6 className="text-gray-700 heading font-semibold mb-1">Features</h6>
                            <ul className="list-disc list-inside sub-heading text-gray-600 text-sm mb-4">
                                <li>Omnichannel coverage, every channel.</li>
                                <li>No-code Visual Chatbot Builder</li>
                                <li>AI-powered Automation Workflows.</li>
                                <li>Intuitive, User-Friendly Solutions.</li>
                                <li>Prebuilt Templates and Tools.</li>
                                <li>Multi-Agent Cloud Team Inbox.</li>
                                <li>Plug-and-Play Developer-friendly APIs.</li>
                            </ul>
                            <h6 className="text-gray-700 heading font-semibold mb-2">Available Channels</h6>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <a href="/sms-marketing" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachSMS} alt="SMS" className="w-4 h-4 mr-1" /> SMS
                                </a>
                                <a href="/rcs-business-messaging" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachRCS} alt="RCS" className="w-4 h-4 mr-1" /> RCS
                                </a>
                                <a href="/whatsapp-business-platform" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachwhatsappicon} alt="WhatsApp" className="w-4 h-4 mr-1" /> WhatsApp
                                </a>
                                <a href="/inbound-dialer" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachinboundcalling} alt="IBD" className="w-4 h-4 mr-1" /> IBD
                                </a>
                                <a href="/outbound-dialer" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachObd} alt="OBD" className="w-4 h-4 mr-1" /> OBD
                                </a>
                                <a href="/missed-call-services" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachMissedcall} alt="Missed Call" className="w-4 h-4 mr-1" /> Missed Call
                                </a>
                                <a href="/two-way-sms" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachwaytosms} alt="2 Way SMS" className="w-4 h-4 mr-1" /> 2 Way SMS
                                </a>
                                <a href="/click-to-call" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachclicktocall} alt="Click 2 Call" className="w-4 h-4 mr-1" /> Click 2 Call
                                </a>
                                <a href="/email-otp" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={Reachemail} alt="Email" className="w-4 h-4 mr-1" /> Email
                                </a>
                                <a href="/user-verification" className="flex heading items-center border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                                    <Image src={ReachApp} alt="Authentication" className="w-4 h-4 mr-1" /> Authentication
                                </a>
                            </div>


                        </div>


                        <div className="flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 md:p-12 w-3/4 max-w-4xl mx-auto transition-all duration-300">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                    Choose Your Communication Channel
                                </h2>
                                <select
                                    className="bg-white border border-blue-300 text-blue-800 font-medium rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                    value={channel}
                                    onChange={(e) => {
                                        setChannel(e.target.value);
                                        setValue(0);        // Reset message volume
                                        setCurrency('inr'); // Reset currency to INR (or your default)
                                    }}
                                >
                                    <option value="">Select Channel</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="RCS">RCS</option>
                                    <option value="SMS">SMS</option>
                                    <option value="Twoway">2 Way SMS</option>
                                    <option value="Inbound">Inbound Dialer</option>
                                    <option value="Outbound">Outbound Dialer</option>
                                    <option value="clicktocall">Click to Call</option>
                                    <option value="Missed">Missed Call</option>
                                    <option value="Authenticator">Authenticator</option>
                                    <option value="EmailOTP">Email OTP</option>
                                </select>

                                {channel && (
                                    <div className="mt-6 bg-white rounded-xl p-5 border border-blue-200 shadow-inner max-w-2xl mx-auto text-left">



                                        {channel === 'WhatsApp' && (
                                            <>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        {channel} Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-4 flex justify-center items-center gap-4">
                                                   
                                                    {['Marketing', 'Utility', 'Authentication'].map(type => (
                                                        <button
                                                            key={type}
                                                            onClick={() => {
                                                                setWhatsAppType(type);
                                                                setValue(0);
                                                                setCurrency('inr');
                                                            }}
                                                            className={`
        px-4 py-2 rounded-full font-medium text-sm transition
        ${whatsAppType === type
                                                                    ? 'bg-green-600 text-white shadow-md'
                                                                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                                                                }
      `}
                                                        >
                                                            {type}
                                                        </button>
                                                    ))}
                                                </div>


                                               
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Message Volume
                                                            <span className="text-xs text-gray-500">{value} messages</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                value={value}
                                                                onChange={e => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map(tick => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)'
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>


                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                 
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map(cur => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-green-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>
                                                
                                                    <div className="flex items-baseline justify-center gap-2">
                                                        <div className="text-lg font-bold text-blue-800">
                                                            Total: {formatCurrency(total, currency)}
                                                        </div>
                                                        <span className="text-xs text-gray-500">
                                                            (+18 % GST)
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex justify-end mt-2 md:mt-5">
                                                    <UniversalButton
                                                        label="More Details"
                                                        variant="brutal"
                                                        className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                                        onClick={handleShowFormPopup}
                                                    />

                                                    <FormPopup
                                                        visible={openDialog}
                                                        onHide={handleCloseDialog}
                                                    />
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </>
                                        )}


                                        {channel === 'RCS' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        {channel} Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Message Volume
                                                            <span className="text-xs text-gray-500">{value} messages</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                // step="200000"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                   
                                                    <div className="flex items-baseline justify-center gap-2">
                                                        <div className="text-lg font-bold text-blue-800">
                                                            Total: {formatCurrency(total, currency)}
                                                        </div>
                                                        <span className="text-xs text-gray-500">
                                                            (+18 % GST)
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex justify-end mt-2 md:mt-5">
                                                    <UniversalButton
                                                        label="More Details"
                                                        variant="brutal"
                                                        className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                                        onClick={handleShowFormPopup}
                                                    />

                                                    <FormPopup
                                                        visible={openDialog}
                                                        onHide={handleCloseDialog}
                                                    />
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </div>
                                        )}


                                        {channel === 'EmailOTP' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Email OTP Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Email Volume
                                                            <span className="text-xs text-gray-500">{value} Email messages</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                // step="200000"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </div>
                                        )}


                                        {channel === 'SMS' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        {channel} Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Message Volume
                                                            <span className="text-xs text-gray-500">{value} messages</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                // step="200000"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <div className="flex justify-end mt-2 md:mt-5">
                                                    <UniversalButton
                                                        label="More Details"
                                                        variant="brutal"
                                                        className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                                        onClick={handleShowFormPopup}
                                                    />

                                                    <FormPopup
                                                        visible={openDialog}
                                                        onHide={handleCloseDialog}
                                                    />
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </div>
                                        )}


                                        {channel === 'Outbound' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Outbound Dialer Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            credit Volume
                                                            <span className="text-xs text-gray-500">{value} voice credit</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                // step="200000"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <div className="flex justify-end mt-2 md:mt-5">
                                                    <UniversalButton
                                                        label="More Details"
                                                        variant="brutal"
                                                        className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                                        onClick={handleShowFormPopup}
                                                    />

                                                    <FormPopup
                                                        visible={openDialog}
                                                        onHide={handleCloseDialog}
                                                    />
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </div>
                                        )}


                                        {channel === 'clicktocall' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Click to Call Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            credit Volume
                                                            <span className="text-xs text-gray-500">{value} C2C credit</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000000"
                                                                // step="200000"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`
                                                                }}
                                                            />
                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {ticks.map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 1000000) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="1000000"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <style jsx>{`
    input[type='range']::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
    //   background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
    input[type='range']::-moz-range-thumb {
      height: 16px;
      width: 16px;
      background: #1e40af;
      border-radius: 50%;
      cursor: pointer;
    }
  `}</style>
                                            </div>
                                        )}


                                        {channel === 'Inbound' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Inbound Dialer Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Duration
                                                            <span className="text-xs text-gray-500">{value} Month{value !== 1 ? 's' : ''}</span>
                                                        </label>

                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="12"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${(value / 12) * 100}%, #d1d5db ${(value / 12) * 100}%)`,
                                                                }}
                                                            />

                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {[3, 6, 9, 12].map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 12) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="12"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <style jsx>{`
      input[type='range']::-webkit-slider-thumb {
        appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        // background: #1e40af;
      }
      input[type='range']::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        background: #1e40af;
      }
    `}</style>
                                            </div>
                                        )}


                                        {channel === 'Missed' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Missed Call Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Duration
                                                            <span className="text-xs text-gray-500">{value} Month{value !== 1 ? 's' : ''}</span>
                                                        </label>

                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="12"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${(value / 12) * 100}%, #d1d5db ${(value / 12) * 100}%)`,
                                                                }}
                                                            />

                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {[3, 6, 9, 12].map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 12) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="12"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <style jsx>{`
      input[type='range']::-webkit-slider-thumb {
        appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        // background: #1e40af;
      }
      input[type='range']::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        background: #1e40af;
      }
    `}</style>
                                            </div>
                                        )}


                                        {channel === 'Twoway' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Two Way SMS Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Duration
                                                            <span className="text-xs text-gray-500">{value} Month{value !== 1 ? 's' : ''}</span>
                                                        </label>

                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="12"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${(value / 12) * 100}%, #d1d5db ${(value / 12) * 100}%)`,
                                                                }}
                                                            />

                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {[3, 6, 9, 12].map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 12) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="12"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <style jsx>{`
      input[type='range']::-webkit-slider-thumb {
        appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        // background: #1e40af;
      }
      input[type='range']::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        background: #1e40af;
      }
    `}</style>
                                            </div>
                                        )}


                                        {channel === 'Authenticator' && (
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Image
                                                        src={CHANNEL_ICONS[channel]}
                                                        alt={channel}
                                                        className="w-10 h-10"
                                                    />
                                                    <h5 className="text-lg font-semibold text-blue-700">
                                                        Authenticator Pricing
                                                    </h5>
                                                </div>
                                                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                                                    <div className="w-full md:w-2/3">
                                                        <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                                                            Duration
                                                            <span className="text-xs text-gray-500">{value} Month{value !== 1 ? 's' : ''}</span>
                                                        </label>

                                                        <div className="relative w-full">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="12"
                                                                value={value}
                                                                onChange={(e) => setValue(Number(e.target.value))}
                                                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #2563eb ${(value / 12) * 100}%, #d1d5db ${(value / 12) * 100}%)`,
                                                                }}
                                                            />

                                                            <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                                                                {[3, 6, 9, 12].map((tick) => (
                                                                    <button
                                                                        key={tick}
                                                                        onClick={() => setValue(tick)}
                                                                        style={{
                                                                            left: `${(tick / 12) * 100}%`,
                                                                            transform: 'translateX(-50%)',
                                                                        }}
                                                                        className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="12"
                                                        value={value}
                                                        onChange={handleChange}
                                                        className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                    />
                                                </div>

                                                <div className="mt-6 flex items-center justify-center gap-4">
                                                    <div className="flex gap-2">
                                                        {['inr', 'usd', 'eur'].map((cur) => (
                                                            <button
                                                                key={cur}
                                                                onClick={() => setCurrency(cur)}
                                                                className={`px-4 py-2 rounded-full font-medium text-sm transition ${currency === cur
                                                                    ? 'bg-blue-600 text-white shadow'
                                                                    : 'bg-white border border-blue-300 text-blue-600'
                                                                    }`}
                                                            >
                                                                {cur.toUpperCase()}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="text-lg font-bold text-blue-800">
                                                        Total: {formatCurrency(total, currency)}
                                                    </div>
                                                </div>

                                                <div className="flex justify-start mt-2 md:mt-5">
                                                    <UniversalButton
                                                        label="Try Authenticator"
                                                        variant="brutal"
                                                        className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                                                        onClick={handleShowFormPopup}
                                                    />

                                                    <FormPopup
                                                        visible={openDialog}
                                                        onHide={handleCloseDialog}
                                                    />
                                                </div>

                                                <style jsx>{`
      input[type='range']::-webkit-slider-thumb {
        appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        // background: #1e40af;
      }
      input[type='range']::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        background: #1e40af;
      }
    `}</style>
                                            </div>
                                        )}

                                    </div>
                                )}


                               


                            </div>


                        </div>





                    </div>
                </div>
            </section> */}
            {/* 3rd */}
            {/* 4th */}
            {/* <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A05CD7] to-[#4B0FA6] px-6 md:px-12 py-5 md:py-20 md:pt-20">

                <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <Image
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