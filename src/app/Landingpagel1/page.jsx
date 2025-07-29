"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useRouter } from 'next/navigation';
import UniversalButton from '../components/UniversalButton';
import { TurnstileComponent } from '../../utils/TurnstileComponent';
import { celitixheader, homesecond1, homesecond10, homesecond11, homesecond2, homesecond3, homesecond4, homesecond5, homesecond6, homesecond7, homesecond8, homesecond9, L1Appauth, L1click2call, L1email, L1ibd, L1misscall, L1obd, L1rcs, L1sms, L1twoway, L1whatsapp, LANDINGL2lLAST, LANDINGTHREESECOND } from '../../../public/assets/images';
import ShieldIcon from '@mui/icons-material/GppGood';
import { sendOtp, verifyOtp } from '../../utils/Otp';
import { verifyToken } from "../../utils/VerifyToken";
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';
import { pushToDataLayer } from '@/utils/gtm';

const Landingpagel1 = () => {
    // Form
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

    // const url = import.meta.env.VITE_URL
     const url = process.env.NEXT_PUBLIC_API_URL


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

        if (!isOtpVerified) {
            toast.error('Please verify the otp before submitting the form.');
            return;
        }

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

        // if (!isOtpVerified) return toast.error('Please verify your phone number with OTP.');
        if (!service.trim()) return toast.error('Please select a service.');

        // const captchaVerify = await verifyToken(turnstileResponse)

        // if (!captchaVerify?.data?.status) {
        //     return toast.error("Unable to verify captcha. Please Contact Site Administrator ")
        // }

        const data = {
            name: `${firstName} ${lastName}`,
            email: email,
            phone: phone,
            company: form.company || "N/A",
            service: service,
            message: form.message || "N/A",
            source: "L3-communication platform cpaas",
        };

        setIsFetching(true);

        const res = await axios.post(`${url}/save`, data, {
            headers: {
                "x-secret-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })
        if (!res.data.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }
        const sendEmail = await axios.post(`${url}/email`, data, {
            headers: {
                "x-secret-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (!sendEmail.data.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }

        const sendWhatsapp = await axios.post(`${url}/whatsapp`, data, {
            headers: {
                "x-secret-key": process.env.NEXT_PUBLIC_API_KEY
            }
        })

        if (!sendWhatsapp?.data?.status) {
            toast.error("Unable to send form data. Please try again later")
            return
        }
        // setIsSubmitting(true);
        setIsFetching(false);
        pushToDataLayer({
            event: "form_submit",
            form_id: "form_1",
            form_name: "Form 1",
            page_path: window.location.pathname,
        });
        // setSubmitLabel("Submitting...");
        toast.success('Form submitted successfully!');
        router.push('/thank-you');
    };


    const [turnstileResponse, setTurnstileResponse] = useState(null); // To store the Turnstile response token
           // Handle Turnstile success response
           const handleTurnstileChange = (token) => {
               setTurnstileResponse(token);
               console.log("Turnstile Token:", token);
           };
    // Form


    const channels = [
        {
            title: 'Click2Call',
            icon: '/icons/click2call.svg',
            description: 'Seamlessly connect customers to your business from your website, app, ads, or emails'
        },
        {
            title: 'Missed Call Services',
            icon: '/icons/missed-call.svg',
            description: 'Customisable tool for lead gen, engagement, & more with IVR & other integrations'
        },
        {
            title: 'WhatsApp',
            icon: '/icons/whatsapp.svg',
            description: "Connect with customers where they are and leverage the world's biggest messaging platform"
        },
        {
            title: 'RCS',
            icon: '/icons/rcs.svg',
            description: "Differentiate yourself from the competition and get the first mover's advantage in key metro cities"
        }
    ];


    const [active, setActive] = useState(0);

    const prev = () => setActive((active - 1 + channels.length) % channels.length);
    const next = () => setActive((active + 1) % channels.length);




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




    const cards = [
        {
            img: L1whatsapp,
            title: 'WhatsApp',
            text: 'Connect with customers where they are and leverage the worlds biggest messaging platform',
        },
        {
            img: L1rcs,
            title: 'RCS',
            text: 'Differentiate yourself from the competition and get the first movers advantage in key metro cities',
        },
        {
            img: L1sms,
            title: 'SMS',
            text: 'Reach the most people with transactional & promotional messages that build trust & improve image, opt-ins etc.',
        },
        {
            img: L1twoway,
            title: '2 Way',
            text: 'Boost engagement using SMS keywords that trigger specific actions like polls, opt-ins etc.',
        },
        {
            img: L1ibd,
            title: 'Inbound Dialing',
            text: 'Set up an interactive virtual receptionist system, route & record all incoming calls',
        },
        {
            img: L1click2call,
            title: 'Click2Call',
            text: 'eamlessly connect customers to your business from your website, app, ads, or emails',
        },
        {
            img: L1obd,
            title: 'Outbound Dialing',
            text: 'Connect directly with customers via voice call for urgent messages, alerts, & outreach',
        },
        {
            img: L1Appauth,
            title: 'Verification',
            text: 'Secure your apps with multi-factor authentication to ensure safe access & protect data',
        },
        {
            img: L1misscall,
            title: 'Missed Call Services',
            text: 'Customisable tool for lead gen, engagement, & more with IVR & other integrations',
        },
        {
            img: L1email,
            title: 'Email OTP',
            text: 'Email OTP: Authenticate logins, actions, and updates by sending OTPs directly to your users inboxes',
        },
    ]



    const total = cards.length
    const [current, setCurrent] = useState(0)
    const [visibleCount, setVisibleCount] = useState(1)

    // mirror Tailwind breakpoints
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w >= 1024) setVisibleCount(4)
            else if (w >= 768) setVisibleCount(2)
            else setVisibleCount(1)
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    // how many pages we can slide through
    const pages = Math.max(1, total - visibleCount + 1)

    // auto-advance
    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(c => (c + 1) % pages)
        }, 3000)
        return () => clearInterval(id)
    }, [pages])

    const prev1 = () => setCurrent(c => (c - 1 + pages) % pages)
    const next1 = () => setCurrent(c => (c + 1) % pages)

    // percent per “page” for translateX
    const translatePercent = -(100 / visibleCount) * current


    return (
        <div>
            <section className="relative bg-[#FFF2EB] px-4 py-5 md:py-20 ">
                <div className='max-w-6xl mx-auto'>
                    {/* Wave background bottom */}
                    <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                        <svg
                            viewBox="0 0 1440 320"
                            className="w-full h-10 md:h-48 lg:h-32"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#FFFFFF"
                                d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-2 md:mb-8 py-2 ">
                        <div className='flex justify-start items-center'>
                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                {/* <Image src={celitixheader} alt="Celitix logo" className="mx-auto lg:mx-0 mb-4 h-14 md:h-16" /> */}
                                <p className="text-purple-600 sub-heading text-lg md:text-2xl  font-medium mb-2">Scale 1-on-1 Communication</p>
                                <h1 className="text-2xl md:text-4xl lg:text-5xl heading font-extrabold text-gray-800 mb-4">
                                    Save time, boost sales <br />& reduce costs
                                </h1>
                                <p className="text-gray-600 text-md md:text-lg pera md:max-w-md">
                                    Get better returns on investment (ROI) with simpler, strategic, data-driven
                                    communication systems. Standardise, automate and manage your business’s
                                    marketing, sales, and support procedures from a single platform.
                                </p>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="bg-[#F9F4FF] order-1 md:order-2 border-gray-300 rounded-xl p-1 md:p-6 shadow-sm">

                            <div className="space-y-4 bg-white border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm">
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

                                <div className=''>
                                                                                                        <TurnstileComponent onChange={handleTurnstileChange} />
                                                                                                    </div>
                                <div className='flex justify-center'>
                                    <UniversalButton
                                    // label={submitLabel} // Dynamically change the label based on the state
                                    label={isFetching ? "Submitting..." : "Submit"}
                                    type="submit"
                                    variant="brutal"
                                    className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"
                                    disabled={isFetching}
                                    onClick={handleSubmit}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className=" bg-white overflow-hidden px-4 py-5 md:py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Left Image */}


                    {/* Product cards overlay */}
                    <div className="flex justify-center items-center ">
                        <Image
                            src={LANDINGTHREESECOND}
                            alt="Product cards"
                            className="w-full md:h-120"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:text-left lg:mt-5">
                        {/* Purple Underline Indicator */}
                        <div className="inline-block mb-4">
                            <span className="block w-16 h-1 bg-purple-400 rounded-full mx-auto lg:mx-0"></span>
                        </div>
                        <h2 className="text-3xl md:text-4xl heading font-bold text-gray-900 mb-4">
                            Grow Bigger, Better & Quicker
                        </h2>
                        <p className="text-gray-600 mb-6 sub-heading text-lg md:max-w-md">
                            Go beyond broadcast. Turn calls, messages, and exchanges into rich
                            conversations that build connections. Improve team, manager, and
                            customer experiences. Do all this and more, with simplified:
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                {/* Shield Icon */}
                                <ShieldIcon
                                    fontSize="medium"
                                    color="success"
                                    className="flex-shrink-0 "
                                />
                                <span className="ml-3 sub-heading text-gray-800">
                                    <strong>Text Messaging:</strong> Marketing + Automation on SMS, RCS & WhatsApp
                                </span>
                            </li>
                            <li className="flex items-start">
                                <ShieldIcon
                                    fontSize="medium"
                                    color="success"
                                    className="flex-shrink-0"
                                />
                                <span className="ml-3 sub-heading text-gray-800">
                                    <strong>Voice Calling:</strong> Ultimate call management for Support & Outreach
                                </span>
                            </li>
                            <li className="flex items-start">
                                <ShieldIcon
                                    fontSize="medium"
                                    color="success"
                                    className="flex-shrink-0 "
                                />
                                <span className="ml-3 sub-heading text-gray-800">
                                    <strong>App Development:</strong> Developer-friendly APIs & other CPaaS solutions
                                </span>
                            </li>
                            <li className="flex items-start">
                                <ShieldIcon
                                    fontSize="medium"
                                    color="success"
                                    className="flex-shrink-0 "
                                />
                                <span className="ml-3 sub-heading text-gray-800">
                                    <strong>Integrations:</strong> Combine, connect & collaborate to boost results
                                </span>
                            </li>
                        </ul>
                        <UniversalButton
                            label="Consult Expert"
                            type="submit"
                            variant="brutal"
                            className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"

                        />
                    </div>


                </div>
            </section>



            <section className="bg-white px-4 py-5 md:py-16 ">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Left Text Block */}
                    <div className="flex justify-center items-center h-full lg:justify-start">
                        <div className="text-left">
                            <div className="inline-block mb-4">
                                <span className="block w-16 h-1 bg-purple-400 rounded-full mx-auto lg:mx-0"></span>
                            </div>
                            <h2 className="text-3xl md:text-4xl heading font-bold text-gray-900 mb-4">
                                Stronger communication builds trust, boosts morale, and delivers results
                            </h2>
                            <UniversalButton
                                label=" Consult Expert"
                                type="submit"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Right Stats Grid */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="bg-blue-200 inline-block px-4 py-2 heading rounded-md text-xl font-semibold text-gray-900 mb-2">
                                84%
                            </div>
                            <div className="h-1 w-12 bg-purple-400 rounded-full mb-2"></div>
                            <p className="text-gray-600 sub-heading text-md">
                                Indian consumers feel that service is just an afterthought for companies
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="bg-blue-200 inline-block px-4 py-2 heading rounded-md text-xl font-semibold text-gray-900 mb-2">
                                5/10
                            </div>
                            <div className="h-1 w-12 bg-purple-400 rounded-full mb-2"></div>
                            <p className="text-gray-600 sub-heading text-md">
                                Consumers use their smartphones for in-store price comparisons
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="bg-blue-200 inline-block px-4 py-2 heading rounded-md text-xl font-semibold text-gray-900 mb-2">
                                60%
                            </div>
                            <div className="h-1 w-12 bg-purple-400 rounded-full mb-2"></div>
                            <p className="text-gray-600 sub-heading text-md">
                                Indians are willing to switch brands after one bad experience
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <div className="bg-blue-200 inline-block px-4 py-2 heading rounded-md text-xl font-semibold text-gray-900 mb-2">
                                $8.9 trillion
                            </div>
                            <div className="h-1 w-12 bg-purple-400 rounded-full mb-2"></div>
                            <p className="text-gray-600 sub-heading text-md">
                                Are lost each year worldwide due to disengaged employees
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="w-full px-4 py-5 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl heading font-semibold text-center mb-2">
                        Automate, Personalise & Connect 1 on 1
                    </h2>
                    <p className="text-center text-xl sub-heading text-gray-700 mb-4 md:mb-15">
                        Integrate these channels with existing ones, or build custom workflows.
                    </p>

                    <div className="relative overflow-hidden">
                        {/* Prev */}
                        <button
                            onClick={prev1}
                            className="absolute left-0 top-1/2 -translate-y-1/2
                       bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
                        >‹</button>

                        {/* Flex strip with transform */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(${translatePercent || 0}%)` }}
                        >
                            {cards.map((c, i) => (
                                <div
                                    key={i}
                                    className="
                  flex-shrink-0
                  w-full        /* mobile: 1 */
                  md:w-1/2      /* ≥768px: 2 */
                  lg:w-1/4      /* ≥1024px:4 */
                  px-2
                "
                                >
                                    <div className="
                  bg-white border border-gray-200 rounded-2xl h-72 p-6 text-center
                  shadow-sm hover: hover:bg-indigo-50
                  
                ">
                                        <Image src={c.img} alt={c.title} className="mx-auto w-16 mb-4" />
                                        <h3 className="text-lg sub-heading font-medium mb-2">{c.title}</h3>
                                        <p className="text-gray-700 pera text-md">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={next1}
                            className="absolute right-0 top-1/2 -translate-y-1/2
                       bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
                        >›</button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: pages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`
                w-2 h-2 rounded-full transition-colors
                ${current === idx ? 'bg-purple-600' : 'bg-gray-300'}
              `}
                            />
                        ))}
                    </div>
                </div>
            </div>





            <div className="Second bg-[#FFFFFF] py-5 md:py-16">
                <div className="text-center px-4 pb-5 md:pb-">
                    <h2 className="text-2xl md:text-5xl heading font-semibold text-gray-900">
                        Our Clientele
                    </h2>
                </div>
                <div className="w-full carousel-mask1 px-4">
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


            <section className="bg-white px-4 py-5 md:py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
                    {/* Left Content */}
                    <div className='flex justify-center items-center h-full lg:justify-start'>
                        <div className="w-full lg:text-left lg:mt-5">
                            <div className="inline-block mb-4">
                                <span className="block w-16 h-1 bg-purple-400 rounded-full mx-auto lg:mx-0"></span>
                            </div>
                            <h2 className="text-3xl md:text-4xl heading font-bold text-gray-900 mb-4">
                                From massive reach to measurable results
                            </h2>
                            <p className="text-gray-600 mb-6 sub-heading text-lg ">
                                Make marketing profitable. Engage, convert, and retain customers. Lead, manage, and assist your team. Build, automate, and integrate your apps/platform at a fraction of the cost.
                            </p>
                            <UniversalButton
                                label="Book Demo"
                                type="submit"
                                variant="brutal"
                                className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-4 py-2 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center items-center">
                        <Image
                            src={LANDINGL2lLAST}
                            alt="Why Celitix"
                            className="w-120 md:h-96"
                        />
                    </div>
                </div>
            </section>


            {/* <footer className="bg-gradient-to-r from-[#2b40b0] via-[#8447c6] to-[#36bae2] text-white">
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
            </footer> */}
        </div>
    )
}

export default Landingpagel1
