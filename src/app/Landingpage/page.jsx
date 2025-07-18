"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { FaEnvelope, FaPhoneAlt, } from 'react-icons/fa';
import { App_Authenticator, Authenticationicon, celitixheader, Click2callicon, Click_to_Call, Customizablelanding, DashboredLanding, Email_Solutions, Emailicon, homesecond1, homesecond10, homesecond11, homesecond2, homesecond3, homesecond4, homesecond5, homesecond6, homesecond7, homesecond8, homesecond9, IBDicon, Inbound_Dialer, LANDING2nd, landingpageformsection, METACOLOR, Missed_Call_Services, MissedCallicon, OBDicon, OmnichannelLanding, Outbound_Dialer, RCS_Business_Messaging, RCSicon, SMS_Marketing, SMSicon, Two_Way_SMS, twoWaySMSicon, WhatsApp_Business_Platform, WhatsAppicon, Workflowlanding } from '../../../public/assets/images';
import UniversalButton from '../components/UniversalButton';
import { useRouter } from 'next/navigation';
import { TurnstileComponent } from '../../utils/TurnstileComponent';
import { FaUsers, FaChartLine, FaRocket, FaRedo } from 'react-icons/fa';
import { sendOtp, verifyOtp } from '../../utils/Otp';
import { verifyToken } from "../../utils/VerifyToken";
import axios from 'axios';
import Image from 'next/image';
import toast from 'react-hot-toast';

const Landingpage = () => {
    // Typing animation for channel text
    const phrases = ['RCS', 'SMS']
    const [text, setText] = useState('')
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const full = phrases[idx]
        let i = 0
        const timer = setInterval(() => {
            setText(full.slice(0, i + 1))
            i++
            if (i > full.length) {
                clearInterval(timer)
                setTimeout(() => setIdx((idx + 1) % phrases.length), 2000)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [idx])

    const features = ['Automate chats', 'Send secure OTPs', 'Stay connected 24/7']


    // 2nd
    const logos = [
        { src: homesecond1, alt: "Hinge" },
        { src: homesecond2, alt: "SK telecom" },
        { src: homesecond3, alt: "Virgin mobile" },
        { src: homesecond4, alt: "Weight Watchers" },
        { src: homesecond5, alt: "WEF" },
        { src: homesecond6, alt: "Maya" },
        { src: homesecond7, alt: "Docplanner" },
        { src: homesecond8, alt: "Hostelworld" },
        { src: homesecond9, alt: "Socar" },
        { src: homesecond10, alt: "Yahoo" },
        { src: homesecond11, alt: "Luna" },
        { src: homesecond1, alt: "Hinge" },
        { src: homesecond2, alt: "SK telecom" },
        { src: homesecond3, alt: "Virgin mobile" },
        { src: homesecond4, alt: "Weight Watchers" },
        { src: homesecond5, alt: "WEF" },
        { src: homesecond6, alt: "Maya" },
        { src: homesecond7, alt: "Docplanner" },
        { src: homesecond8, alt: "Hostelworld" },
        { src: homesecond9, alt: "Socar" },
        { src: homesecond10, alt: "Yahoo" },
        { src: homesecond11, alt: "Luna" },

    ];
    // 2nd


    //   section form
     const router = useRouter();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        consent: false,
    });
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [resendTimer, setResendTimer] = useState(0);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Verify");
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [submitLabel, setSubmitLabel] = useState("Submit");
    const [isFetching, setIsFetching] = useState(false);

    const otpRefs = useRef([]);
    const formRef = useRef(null);

    // const url = import.meta.env.VITE_URL
    const url = "https://celitix.com:3001";


    const validatePhoneNumber = (phone) => /^[0-9]{10,13}$/.test(phone);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setForm((prev) => ({ ...prev, email }));
        setIsValid(validateEmail(email));
    };

    const handleEmailBlur = () => {
        setIsTouched(true);
    };

    const handlesendOtp = async () => {
        const phone = form.phone.trim();
        const email = form.email.trim();

        if (!validatePhoneNumber(phone)) {
            toast.error('Enter a valid phone number.');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Enter a valid email address.');
            return;
        }

        // Set verified if validations pass
        setButtonLabel("Resend");

        if (resendTimer === 0) {
            console.log('OTP sent to:', phone);
            const res = await sendOtp(phone)
            if (res?.data?.result !== "success") {
                toast.error("Error Sending OTP. Please try again later.")
            }
            toast.success('OTP sent successfully!');
            setOtp(Array(6).fill(''));
            setIsOtpSent(true);
            setResendTimer(30);
            startResendTimer();
        }
    };

    const startResendTimer = () => {
        const interval = setInterval(() => {
            setResendTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleOtpChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            if (value !== '' && index < otp.length - 1) {
                otpRefs.current[index + 1].focus();
            } else if (value === '' && index > 0) {
                otpRefs.current[index - 1].focus();
            }
        }
    };

    const handleverifyOtp = async () => {
        const phone = form.phone
        const enteredOtp = otp.join('');
        const res = await verifyOtp({
            mobile: phone,
            otp: enteredOtp
        })
        if (res.data.result !== "success") {
            toast.error("Please enter valid OTP")
            return
        }
        toast.success("OTP Verified successfully")
        // setIsOtpVerified(true);
        setIsClicked(true);
        setIsOtpSent(false);
        setIsOtpVerified(true);
        setOtp(Array(6).fill(''));
        // const validOtp = '123456';

        // if (enteredOtp.length < 6) {
        //   toast.error('Please enter the complete 6-digit OTP.');
        //   return;
        // }

        // if (enteredOtp === validOtp) {
        //   toast.success('OTP Verified Successfully!');
        //   setIsOtpSent(false);
        //   setIsOtpVerified(true);
        //   setOtp(Array(6).fill(''));
        // } else {
        //   toast.error('Invalid OTP. Please try again.');
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, service } = form;

        if (!firstName.trim()) return toast.error('First Name is required.');
        if (!lastName.trim()) return toast.error('Last Name is required.');
        if (!email.trim() || !validateEmail(email)) return toast.error('Enter a valid email address.');
        if (!validatePhoneNumber(phone)) return toast.error('Enter a valid phone number.');

        const enteredOtp = otp.join('');
        if (!isOtpVerified && enteredOtp.length < 6) {
            toast.error('Please verify your phone number with OTP.');
            return;
        }

        if (!isOtpVerified) return toast.error('Please verify your phone number with OTP.');
        if (!service.trim()) return toast.error('Please select a service.');

        const captchaVerify = await verifyToken(turnstileResponse)
        console.log("captchaVerify", captchaVerify)

        if (!captchaVerify?.data?.status) {
            return toast.error("Unable to verify captcha. Please Contact Site Administrator ")
        }

        const data = {
            name: `${firstName} ${lastName}`,
            email: email,
            phone: phone,
            company: "fsadasd" || "N/A",
            service: service,
            source: "L3-communication platform cpaas",
            message: form.message || "N/A"

        };

        setIsFetching(true);

        const res = await axios.post(`${url}/save`, data)
        if (!res.data.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }
        const sendEmail = await axios.post(`${url}/send-email`, data)

        if (!sendEmail.data.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }

        const sendWhatsapp = await axios.post(`${url}/send-whatsapp`, data)

        if (!sendWhatsapp?.data?.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }
        // setIsSubmitting(true);
        setIsFetching(false);
        // setSubmitLabel("Submitting...");
        toast.success('Your enquiry has been received.');
        router.push('/thank-you');
    };


    const [turnstileResponse, setTurnstileResponse] = useState(null); // To store the Turnstile response token
    // Handle Turnstile success response
    const handleTurnstileChange = (token) => {
        setTurnstileResponse(token);
        console.log("Turnstile Token:", token);
    };
    //   section form


    //   section icons
    const icons = [
        WhatsAppicon,
        RCSicon,
        SMSicon,
        twoWaySMSicon,
        Emailicon,
        OBDicon,
        IBDicon,
        Click2callicon,
        MissedCallicon,
        Authenticationicon,
    ]

    const tabData = [
        {
            title: "WhatsApp",
            intro:
                "Put your contact list and customer information to good use. Automate sales, share updates, or promote your products/services. Build and grow your network/community on WhatsApp!",
            bullets: [
                "Ensure 24/7 customer service using AI-powered chatbots.",
                "Turn ads into conversations with Click-to-WhatsApp ads.",
                "Teams can manage all interactions from a central dashboard.",
                "Catalogues, locations, verified profiles, auto-replies & more.",
            ],
            buttonText: "Explore More",
            mockup: WhatsApp_Business_Platform,
        },
        {
            title: "RCS",
            intro: "Add next-gen native messaging to your communication. Intrigue customers with richer experiences on their native messaging apps. Differentiate yourself from the competition.",
            bullets: [
                "Leverage rich media and file-sharing to improve service.",
                "Promote better with CTA buttons and carousel messages.",
                "Manage all direct channels from a single CPaaS solution.",
                "Connect with all the smart features of OTT messaging apps.",
            ],
            buttonText: "Explore More",
            mockup: RCS_Business_Messaging,
        },
        {
            title: "SMS",
            intro: "Ensure maximum reach and reliable message delivery with the world’s most tried-and-tested communication channel. Perfect for times when getting the word out is all that matters.",
            bullets: [
                "Verify, notify, or promote farther and wider than the rest.",
                "Better SMS API for developer-friendly, robust integrations.",
                "Add SMS functionality to your app or platform.",
                "Analyze Seamlessly connect other channels & build workflows.",
            ],
            buttonText: "Explore More",
            mockup: SMS_Marketing,
        },
        {
            title: "2 Way SMS",
            intro: "Give customers new and interesting ways to engage with your brand: Automate subscriptions, balance checks, and content sharing using customisable keyword-triggered actions.",
            bullets: [
                "Long/shortcode numbers to receive customer messages.",
                "Great for voting, taking polls, or automating opt-ins.",
                "Set custom responses to receiving keywords via SMS.",
                "Add to or integrate with other channels or workflows.",
            ],
            buttonText: "Explore More",
            mockup: Two_Way_SMS,
        },
        {
            title: "Email OTP",
            intro: "Secure your customers with reliable, email-based verification. Whether it’s MFA logins, transactions, or account changes, Email OTP offers a unique channel for specific use cases.",
            bullets: [
                "Send OTPs instantly for account signups or logins.",
                " Add protection for sensitive actions like payments.",
                "Reach global users without needing a phone number.",
                "Use ready-to-use HTML templates for branded OTP emails.",
            ],
            buttonText: "Explore More",
            mockup: Inbound_Dialer,
        },
        {
            title: "Outbound Calling",
            intro: "Improve your workflow with a cloud-powered multi-agent dashboard for sales, support, and customer service. Perfect for outreach, urgency, and bulk voice call campaigns.",
            bullets: [
                "AI-gen Text-to-Speech for voice call campaigns.",
                "Multi-agent cloud dashboard for sales & support.",
                "OTPs, Updates, & Reminders in 15+ regional languages.",
                "Easy integrations via communication workflow builder.",
            ],
            buttonText: "Explore More",
            mockup: Outbound_Dialer,
        },
        {
            title: "Inbound Calling",
            intro: "Never miss a call again; Automate greetings with a virtual receptionist. Add, manage, or remove your Interactive Voice Response (IVR) systems, right from Celitix's integrated dashboard.",
            bullets: [
                "Smart call routing options and full call records.",
                "Multi-lingual Virtual Receptionist (IVR) system.",
                "Customise your company’s IVR menu in real time.",
                "Save time & costs on hiring and training members.",
            ],
            buttonText: "Explore More",
            mockup: Inbound_Dialer,
        },
        {
            title: "Click2Call",
            intro: "Elevate your mobile app’s user experience with one-touch calling. Make it effortless and convenient for your customers to connect with your team. Celitix simplifies app development.",
            bullets: [
                "Universal API: integrates with any existing framework.",
                "Strengthen your brand with a better online experience.",
                "Combine with IVR & databases to automate CRM.",
                "Manage the back end with unique routing for each button.",
            ],
            buttonText: "Explore More",
            mockup: Click_to_Call,
        },
        {
           title: "Missed Call Services",
            intro: "Boost engagement with a dedicated missed call number. The system auto-responds to customer calls with 100% customisable actions. Use it for voting, taking polls, or contests!",
            bullets: [
                "Generate pre-verified leads for future promotions.",
                "Engage customers in contests, votes, & polls.",
                "Respond automatically or reach out manually.",
                "Integrate with IVR, SMS, WhatsApp & more!",
            ],
            buttonText: "Explore More",
            mockup: Missed_Call_Services,
        },
        {
            title: "Verification",
            intro: "Add user verification or multi-factor authentication to your app, website, or platform. Gain trust by securing user data and protecting account access. Crucial for healthcare and finance.",
            bullets: [
                "Multi-factor verification with 5 channels to choose from:",
                "Email, WhatsApp, SMS, RCS, & Voice Call.",
                "Token-based OTP-Free verification (60% better UX).",
                "Automatic & international user authentication.",
            ],
            buttonText: "Explore More",
            mockup: Email_Solutions,
        },
        // ... fill out for SMS, twoWaySMS, Email, etc.
    ]


    const [activeTab, setActiveTab] = useState(0)
    const { title, intro, bullets, buttonText, mockup } = tabData[activeTab]
    //   section icons




    const stats = [
        {
            icon: <FaUsers className="h-6 w-6 text-blue-500" />,
            value: '177%',
            label: 'Engagement Hike',
        },
        {
            icon: <FaChartLine className="h-6 w-6 text-green-500" />,
            value: '+ 15%',
            label: 'Conversion Rate',
        },
        {
            icon: <FaRocket className="h-6 w-6 text-pink-500" />,
            value: '30%',
            label: 'Boost in Productivity',
        },
        {
            icon: <FaRedo className="h-6 w-6 text-yellow-600" />,
            value: '> 60%',
            label: 'Customer Retention',
        },
    ]





    const tabs = [
        {
            key: 'omnichannel',
            label: 'Omnichannel Service',
            title: 'Elevate your brand’s presence',
            text: `Win trust with a consistent and cohesive brand experience across channels.
Connect online platforms to direct communications, reach more people, and let them choose how to interact.`,
            buttonText: 'Explore More',
            // replace with your actual SVG or image imports:
            mockup: OmnichannelLanding,

        },
        {
            key: 'multiagent',
            label: 'Multi-Agent Support',
            title: 'Simplify customer communication',
            text: `Improve response times and query resolution with a cloud-powered dashboard for sales, support & service teams! Save time, reduce workload and assist customers anytime, anywhere.`,
            buttonText: 'Explore More',
            mockup: DashboredLanding,

        },
        {
            key: 'automated',
            label: 'Automated Workflows',
            title: 'Refine the customer experience',
            text: `Schedule promotions, integrate channels, leverage chatbots, set up triggers & auto-responses, and build custom communication workflows from our user-friendly communication workflow builder.`,
            buttonText: 'Explore More',
            mockup: Customizablelanding,

        },
        {
            key: 'analytics',
            label: 'Advanced Analytics',
            title: 'Metrics to achieve better results',
            text: `With WhatsApp’s high open and conversion rates, Gain insights into your communication system’s performance by analysing metrics. Refine your strategy with data-driven decisions. Get better data through automated feedback mechanisms.`,
            buttonText: 'Explore More',
            mockup: Workflowlanding,

        },
    ]


    const [activeKey, setActiveKey] = useState(tabs[0].key)
    const activemainTab = tabs.find(t => t.key === activeKey)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#9B44B6] text-white text-sm md:px-3 px-1 pt-1 pb-0 flex justify-between items-center flex-wrap comicf">

                {/* Email Section */}
                <div className="flex items-center gap-1 md:gap-2 mb-2">
                    <FaEnvelope />
                    <span className='sub-heading'>support@celitix.com</span>
                </div>

                {/* Phone Section */}
                <div className="flex items-center gap-1 md:gap-2 mb mb-2">
                    <FaPhoneAlt />
                    <span className='sub-heading'>+91 968-000-6460</span>
                </div>
            </div>
            {/* Navbar */}
            <header className="w-full py-4 bg-gray-50 shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                    <a href="https://www.celitix.com" target="_blank" rel="noopener noreferrer">
                        <Image src={celitixheader} alt="Celitix" className="h-10" />
                    </a>
                    <Image src={METACOLOR} alt="Meta Tech Partner" className="h-15 w-40" />
                </div>
            </header>

            {/* Hero */}
            <section className="py-5 md:py-10 bg-gray-50">
                <div className=" text-center px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl heading font-medium text-gray-800 mb-4">
                        All-in-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2] "> Communication Platform </span> for
                    </h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold heading text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2] h-14 mb-3 md:mb-10">
                        {text}
                    </h2>

                    <ul className="flex flex-wrap justify-center gap-4 mb-5 md:mb-10">
                        {features.map((f, i) => (
                            <li
                                key={i}
                                className="flex items-center bg-white shadow rounded-full px-4 py-2 space-x-2"
                            >
                                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700 text-lg md:text-xl sub-heading">{f}</span>
                            </li>
                        ))}
                    </ul>

                    <UniversalButton label="BOOK A DEMO" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6] mt-2'
                        onClick={() => {
                            formRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    />

                </div>
            </section>

            {/* Brands */}
            {/* <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-medium text-gray-800">Trusted by Leaders Across Industries</h2>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {logos.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt=""
                className="mx-auto h-16 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section> */}


            <div className="Second bg-[#D8E8EF] py-5 md:py-10">
                <div className="text-center px-4 pb-5 md:pb-">
                    <h2 className="text-2xl md:text-5xl heading font-semibold text-gray-900">
                        Trusted by Leaders Across Industries
                    </h2>
                </div>
                <div className="w-full carousel-mask px-4">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={24}
                        loop={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={true}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <SwiperSlide key={index} className='SwiperSlide'>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-16 sm:h-20 md:h-24 w-25 md:w-50 object-contain hover:grayscale-0 transition duration-1000 ease-in-out"
                                    // loading="auto"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>



            <section className="bg-[#F5F8FB] py-2 lg:py-10 px-4 md:px-20" >
                <div className='max-w-7xl mx-auto'>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Accordion Column */}
                    <div className="w-full px-4 sm:px-6 py-5 flex justify-center">
                        <Image
                            src={landingpageformsection}
                            alt="landingpageformsection"
                            className="mx-auto h-[200px] md:h-[800px] lg:h-[600px] object-contain"
                        />
                    </div>


                    {/* Optional Form Column */}
                    <div className="w-full px-4 sm:px-6 py-5" ref={formRef} id="form">

                        <div>
                            <div className="bg-[#F5F8FB] border border-gray-300 pera rounded-xl p-1 shadow-sm md:p-6">
                                <form onSubmit={handleSubmit} className="space-y-4 bg-[#F5F8FB] border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm">
                                    <h2 className="text-2xl md:text-4xl heading text-center mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Book Demo </span>Today!

                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="fname"
                                            placeholder="First Name"
                                            value={form.firstName}
                                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md p-2"
                                        />
                                        <input
                                            type="text"
                                            name="lname"
                                            placeholder="Last Name"
                                            value={form.lastName}
                                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>


                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        value={form.email}
                                        onChange={handleEmailChange}
                                        onBlur={handleEmailBlur}
                                        disabled={isOtpVerified}
                                        className={`w-full rounded-md p-2 border focus:outline-none focus:ring-2 ${!isTouched
                                            ? 'border-gray-300 focus:ring-blue-300'
                                            : isValid
                                                ? 'border-green-500 focus:ring-green-300'
                                                : 'border-red-500 focus:ring-red-300'
                                            }`}
                                    />
                                    <div className="flex gap-2 items-center">
                                        <input type="text" name="phone" placeholder="Phone No." disabled={isOtpVerified} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '').slice(0, 13), isOtpVerified: false })} className="form-input w-full border border-gray-300 rounded-md p-2" />
                                        {!isClicked && (
                                            <UniversalButton label={buttonLabel} type="button" variant="brutal" disable={!validatePhoneNumber(form.phone) || resendTimer > 0} onClick={handlesendOtp} className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed" />
                                        )}
                                    </div>

                                    {isOtpSent && resendTimer > 0 && (
                                        <div className="text-sm text-gray-600 mt-1">Resend in {resendTimer} seconds</div>
                                    )}

                                    {isOtpSent && (
                                        <div className="flex items-center gap-2 flex-wrap mt-2">
                                            {otp.map((digit, index) => (
                                                <input key={index} ref={(el) => (otpRefs.current[index] = el)} type="text" maxLength={1} inputMode="numeric" value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} className="w-10 h-10 text-center border border-gray-300 rounded" />
                                            ))}
                                            <UniversalButton label="Submit" variant="brutal" type="button" onClick={handleverifyOtp} className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-3 py-1 rounded-md mx-1" />
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="form-input w-full border border-gray-300 rounded-md p-2" />

                                        <select name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500">
                                            <option value="" disabled>Select Service</option>
                                            <option value="WhatsApp Business API">WhatsApp Business API</option>
                                            <option value="RCS Business Messaging">RCS Business Messaging</option>
                                            <option value="SMS Solution">SMS Solution</option>
                                            <option value="IVR/Missed Call">Virtual Receptionist (IVR)/Missed Call</option>
                                            <option value="User Verification">Chatbot Services</option>
                                            <option value="API Integration">API Integrations</option>
                                            <option value="2-way SMS">2 Way SMS (Long/Shortcode)</option>
                                            <option value="Missed Call Services">Missed Call Services</option>
                                            <option value="Other CPaaS Solutions">Other CPaaS Solutions</option>
                                        </select>
                                    </div>

                                    <textarea name="message" placeholder="How can we help you?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="form-textarea w-full border border-gray-300 rounded-md p-2" />

                                    <TurnstileComponent onChange={handleTurnstileChange} />
                                    <div className='flex justify-center'>
                                        <UniversalButton
                                            // label={submitLabel} // Dynamically change the label based on the state
                                            label={isFetching ? "Submitting..." : "Submit"}
                                            type="submit"
                                            variant="brutal"
                                            className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"
                                            disabled={isFetching}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>




            <section className="py-5 md:py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-semibold text-gray-800 mb-2">
                        Connect With Users Where They Are
                    </h2>
                    <p className="text-gray-700 sub-heading text-md md:text-lg mb-8">
                        Delight customers on their preferred channels for business communication. Engage with them in
                        multiple ways to discover, enjoy, and choose from.
                    </p>

                    {/* ─── Icon Tabs ─────────────────────────────── */}
                    <div className="overflow-x-auto mb-5 md:mb-12">
                        <ul className="flex justify-center items-center space-x-6 p-2 min-w-max">
                            {icons.map((IconSrc, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`
                  cursor-pointer
                  bg-white p-4 rounded-xl flex-shrink-0
                  ${idx === activeTab ? "ring-2 ring-green-400" : "hover:ring-2 hover:ring-gray-300"}
                `}
                                >
                                    <Image src={IconSrc} alt={`icon-${idx}`} className="h-12 w-12 object-contain" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ─── Dynamic Content Panel ─────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left: Text */}
                        <div className="text-left">
                            <h3 className="text-xl md:text-3xl heading text-gray-800 mb-4">{title}</h3>
                            <p className="text-gray-700 text-md md:text-lg sub-heading mb-5">{intro}</p>
                            <ul className="space-y-3 mb-6">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-2 text-green-500">
                                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                        </span>
                                        <span className="sub-heading text-md md:text-lg text-gray-700">{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <UniversalButton label={buttonText} variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6] mt-2'
                                onClick={() => {
                                    formRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            />
                        </div>

                        {/* Right: Optional Mockup */}
                        {mockup && (
                            <div className="relative flex justify-center md:justify-end">
                                <Image src={mockup} alt={`${title} mockup`} className="w-64 md:w-80 lg:w-120 h-56 md:h-96" />
                            </div>
                        )}
                    </div>
                </div>
            </section>




            <section className="py-5 md:py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

                    {/* Left: Heading + Text + Button */}
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl heading font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2] "> Go Beyond</span> Expectations
                        </h2>
                        <p className="text-gray-700 text-md md:text-lg sub-heading mb-6">
                            <span className="text-green-600 font-semibold">Loyalty</span> = trust over time. Delight customers with outstanding experiences while everyone else struggles to do the bare minimum.
                            Automate, standardise, and go systemic for consistency!
                        </p>
                        <UniversalButton label="Explore More" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6] mt-2'
                            onClick={() => {
                                formRef.current?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    </div>

                    {/* Right: Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow p-6 flex justify-center items-center space-x-4"
                            >
                                <div className='text-center flex flex-col items-center space-y-2'>
                                    <div className="flex-shrink-0">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-extrabold text-gray-800">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <section className="py-5 md:py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    {/* Main Heading */}
                    <h2 className="text-xl md:text-3xl lg:text-4xl heading text-gray-800 mb-2">
                        Good For Brands, Customers, & Businesses
                    </h2>
                    <p className="text-gray-700 sub-heading text-md md:text-lg mb-8">
                        A scalable communication system improves customer experience, reduces workload, and boosts profit
                    </p>

                    {/* Tabs */}
                    <div className="overflow-x-auto mb-6 md:mb-12">
                        {/* Inner flex that holds the buttons */}
                        <div className="inline-flex bg-white rounded-full space-x-2 p-1">
                            {tabs.map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveKey(tab.key)}
                                    className={`
          px-4 py-2
          text-sm md:text-lg
          font-medium
          whitespace-nowrap
          rounded-full
          transition
          ${tab.key === activeKey
                                            ? 'bg-gradient-to-r from-[#2b40b0] to-[#36bae2] text-white shadow-lg'
                                            : 'text-gray-800 bg-[#EDF5FF] hover:bg-gray-100'
                                        }
        `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left: Text + Button */}
                        <div className="text-left">
                            <h3 className="text-3xl heading text-gray-800 mb-4">
                                {activemainTab.title}
                            </h3>
                            <p className="text-gray-700 sub-heading text-lg mb-6 whitespace-pre-line">
                                {activemainTab.text}
                            </p>

                            <UniversalButton label={activemainTab.buttonText} variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6] mt-2'
                                onClick={() => {
                                    formRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            />
                        </div>

                        {/* Right: Mockup + Icons */}
                        <div className="relative flex justify-center md:justify-end">
                            <Image
                                src={activemainTab.mockup}
                                alt={`${activemainTab.label} mockup`}
                                className="w-64 md:w-80 lg:w-96"
                            />
                        </div>
                    </div>
                </div>
            </section>





            <section className="py-5 md:py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">

                    {/* Left: Heading + Text + Button */}
                    <div>
                        <h2 className="text-2xl md:text-4xl heading font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2] ">
                                Offering Robust Integrations</span> & Custom Workflows
                        </h2>
                        <p className="text-gray-700 text-md md:text-lg sub-heading mb-6">
                            Connect business SaaS apps like <span className="text-green-600 font-semibold">CRM</span>, accounting, HR, etc. with your communication platform. Scale, grow, analyze, automate, and manage operations from one place.
                        </p>
                        <UniversalButton label="Explore More" variant="brutal" className='bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-2 font-semibold hover:bg-white hover:text-black 
              hover:shadow-[4px_4px_0px_#9B44B6] mt-2'
                            onClick={() => {
                                formRef.current?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        />
                    </div>

                    {/* Right: Stats Cards */}
                    <div className="flex justify-center items-center">
                        <Image src={LANDING2nd} alt="LANDING" className='w-100 md:h-100' />
                    </div>
                </div>
            </section>


            <footer className="bg-gradient-to-r from-[#2b40b0] via-[#8447c6] to-[#36bae2] text-white">
                <div className="max-w-7xl mx-auto px-4 py-3 sub-heading md:text-lg flex flex-col md:flex-row items-center justify-center text-md">
                    <span>© {new Date().getFullYear()} Celitix. All rights reserved.</span>
                    <nav className="flex space-x-4 md:ml-4 mt-2 md:mt-0">
                        <a
                            href="/terms-and-conditions"
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms &amp; Conditions
                        </a>
                        <span className="hidden md:inline">|</span>
                        <a
                            href="/privacy-policy"
                            className=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Landingpage
