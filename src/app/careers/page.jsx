"use client"
import React, { useEffect, useRef, useState } from 'react'
// import { Helmet } from 'react-helmet-async';
// import { initScrollReveal } from '../../utils/ScrollReveal';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TurnstileComponent } from '../../utils/TurnstileComponent';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { sendOtp, verifyOtp } from "../../utils/Otp";
import { verifyToken } from "../../utils/VerifyToken";
import Image from 'next/image';

import { careercardicon1, careercardicon2, careercardicon3, heroimgcareer } from '../../../public/assets/images';

import axios from "axios"
import UniversalButton from '../components/UniversalButton';
// const url = process.env.NEXT_PUBLIC_API_URL



const Careers = () => {

  // useEffect(() => {
  //   initScrollReveal();
  // }, []);


  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay ensures DOM is ready
      }
    }
  }, []);

  // 4th
  const [openIndex, setOpenIndex] = useState();
  const jobOpenings = [
    {
      title: "PHP Developer",
      location: "Jaipur",
      term: "Full Time",
      description:
        "We are seeking a highly skilled PHP Developer with a strong background in the Laravel framework to join our tech team. As a PHP Developer at Proactive, you will be integral in developing high-quality, scalable web applications that enhance user interactions and integrate seamlessly with diverse systems.",
      php: `Develop and maintain web applications using PHP with experience in working on Laravel framework.
  Develop/implement API services for integration with other systems and platforms. Optimize applications for maximum speed and scalability.
  Collaborate with frontend developers to integrate user-facing elements with server-side logic.
  Ensure the performance, quality and responsiveness of applications. Manage all phases of the software development lifecycle (SDLC), including planning, testing and deployment.
  Maintain well-documented, reusable and transferable code. Troubleshoot, test and maintain the core product software to ensure strong optimization and functionality.
  Contribute to the evolution of the platform architecture and the implementation of new technologies and coding standards.`,
      php: `Bachelor’s degree or equivalent diploma in Computer Science, Engineering or a related field from recognised university.
  Proven software development experience in PHP.
  Strong knowledge of PHP web frameworks, specifically Laravel. Knowledge of additional PHP frameworks like Symfony or CodeIgniter is added benefit.
    Experience in developing and implementing RESTful APIs.
  Proficient understanding of code versioning tools, such as Git.
  Strong knowledge of front-end technologies, such as JavaScript, HTML5 and CSS3. Expertise in web servers (e.g. Apache) and database technology such as MySQL/MariaDB.
Understanding of MVC design patterns.
Familiarity with limitations of PHP as a platform and its workarounds.`,
    },
    {
      title: "SEO Executive",
      location: "Jaipur",
      term: "Full Time",
      description:
        "Implement, optimize, and maintain a SEO road-map encompassing onsite optimization, technical optimization, and optimization of indexability/ crawlability. In this role, you will be responsible for managing SEO activities such as content creation, link-building and keyword strategy to give clients better rankings on major search engines. In addition to managing all SEM campaigns on Google, Yahoo, and Amazon, you will also figure out how to maximize ROI.",
      seo: `Should have a Bachelor's Degree.
At least 2 years of SEO experience
Should have good communication skills.`,
    },
    {
      title: "Graphic Designer",
      location: "Jaipur",
      term: "Full Time",
      description:
        " Using the digital platform to generate creative ideas and concepts. Understanding and adhering to client briefs and brand guidelines. Coordinating with the client service team and developing designs and concepts that the client can understand and comprehend. Manage time effectively and meet deadlines. Being updated about the latest trends in social design and web design globally.",
      Graphic:
        `Expert level skills of Photoshop, Corel, Illustrator and other tools as required. A portfolio (preferably on the internet) is required for judging design skills. A go-getter attitude and the ability to explore various artistic styles that can be applied to social media is necessary.`,
    },
    {
      title: "Sales Executive",
      location: "Jaipur, Kolkata, Delhi",
      term: "Full Time",
      description:
        "Our company is seeking a full-time sales executive to build new business by engaging with potential clients. If you have the zeal to convert prospects into customers, this is for you!",
      Sales:
        `Should have a Bachelor's Degree.
Minimum 1 year or above experience
Should have good communication skills.
Must have his own Bike & Laptop.
Interpersonal skills, including the ability to build rapport`,
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };




  // from
  const formRef = useRef(null);
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    designation: '',
    selectExpyrs: '',
    consent: false,
  });

  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [resume, setResume] = useState(null);
  const otpRefs = useRef([]);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Verify");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitLabel, setSubmitLabel] = useState("Submit");
  const [isFetching, setIsFetching] = useState(false);

  const validatePhoneNumber = (phone) => /^[0-9]{10,13}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const url = process.env.NEXT_PUBLIC_API_URL
  // Email field handlers
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

    setButtonLabel("Resend");

    if (resendTimer === 0) {
      // const res = await sendOtp
      console.log('OTP sent to:', phone);
      const res = await sendOtp(phone)
      if (res?.data?.result !== "success") {
        toast.error("Error Sending OTP. Please try again later.")
      }
      toast.success('OTP sent successfully!');
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
        otpRefs.current[index + 1]?.focus();
      } else if (value === '' && index > 0) {
        otpRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleOtpVerify = async () => {
    const enteredOtp = otp.join('');
    const validOtp = '123456'; // Replace with API-based check if needed
    const phone = form.phone.trim();

    if (enteredOtp.length < 6) {
      toast.error('Please enter the complete 6-digit OTP.');
      return;
    }

    const res = await verifyOtp({
      mobile: phone,
      otp: enteredOtp
    })
    if (res.data.result !== "success") {
      toast.error("Please enter valid OTP")
      return
    }
    toast.success("OTP Verified successfully")
    setIsClicked(true);
    setIsOtpSent(false);
    setIsOtpVerified(true);
    setOtp(Array(6).fill(''));

    // if (enteredOtp === validOtp) {
    //   toast.success('OTP Verified Successfully!');
    //   setIsOtpSent(false);
    //   setIsOtpVerified(true);
    //   setOtp(Array(6).fill(''));
    // } else {
    //   toast.error('Invalid OTP. Please try again.');
    // }
  };

 const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const maxSizeInMB = 2;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  if (file.size > maxSizeInBytes) {
    toast.error('File must be less than 2MB.');
    e.target.value = ''; // Reset file input
    return;
  }

  setResume(file); // ✅ valid file
};

  const handleTurnstileChange = (token) => {
    setTurnstileResponse(token)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, name, email, phone, service } = form;

    if (!firstName.trim()) return toast.error('First Name is required.');
    if (!lastName.trim()) return toast.error('Last Name is required.');
    if (!email.trim() || !validateEmail(email)) return toast.error('Enter a valid email address.');
    if (!validatePhoneNumber(phone)) return toast.error('Enter a valid phone number.');

    const enteredOtp = otp.join('');
    if (!isOtpVerified && enteredOtp.length < 6) {
      toast.error('Please verify your phone number with OTP.');
      return;
    }

    // if (!service.trim()) return toast.error('Please select a service.');
    if (!form.designation) return toast.error('Please select your designation.');
    if (!form.selectExpyrs) return toast.error('Please select years of experience.');
    if (!resume) return toast.error('Please upload your resume.');

    const captchaVerify = await verifyToken(turnstileResponse)

    if (!captchaVerify?.data?.status) {
      return toast.error("Unable to verify captcha. Please Contact Site Administrator ")
    }

    const formData = new FormData();
    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", form.company || "N/A");
    formData.append("service", service || "N/A");
    formData.append("message", form.message || "N/A");
    formData.append("source", "careers");
    formData.append("experience", form.selectExpyrs);
    formData.append("designation", form.designation);
    formData.append("file", resume);

    const res = await axios.post(`${url}/carrer-save`, formData,{
      headers:{
        "x-secret-key":process.env.NEXT_PUBLIC_API_KEY
      }
    })
    if (!res.data.status) {
      toast.error("Unable to send form data. Please try again later")
      return
    }

    const emailData = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      company: form.company || "N/A",
      service: service || "N/A",
      message: form.message || "N/A",
      source: "careers",
      designation: form.designation,
      experience: form.selectExpyrs,
      resume: res.data.fileUrl
    }
    setIsFetching(true);

    const sendEmail = await axios.post(`${url}/email`, emailData,{
      headers:{
        "x-secret-key":process.env.NEXT_PUBLIC_API_KEY
      }
    })

    if (!sendEmail.data.status) {
      toast.error("Unable to send form data. Please try again later")
      return
    }

    setIsFetching(false);
    toast.success('Your enquiry has been received.');
    console.log('Form submitted:', form);
    router.push('/thank-you');
  };


  const [turnstileResponse, setTurnstileResponse] = useState(null);
  // // Handle Turnstile success response
  // const handleTurnstileChange = (token) => {
  //   setTurnstileResponse(token);
  //   console.log("Turnstile Token:", token);
  // };
  // form
  // 4th

  return (
    <div>

      {/* <Helmet>
        <title>Careers at Celitix | Join Our Team </title>
        <meta name="description" content="Explore career opportunities at Celitix. Work with a team that’s building the future of customer communication in India." />
      </Helmet> */}


      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10      pb-2 md:pb-10">

          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 sub-heading text-white text-md font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Careers
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading text-gray-900 leading-tight">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">  Future of Business </span>Communication
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-md sub-heading">
              Join a team that’s transforming how companies connect with their customers across Messaging, Voice calling, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">

              <UniversalButton
                label="Get Started"
                variant="brutal"
                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                onClick={() => {
                  formRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={heroimgcareer}
              alt="Build the Future of Business Communication"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2nd */}
      <section className="bg-[#f7ebfc] py-2 lg:py-10 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl heading mb-12">
          Why Work at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Celitix</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="absolute left-5/12 -top-9 gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={careercardicon1}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg md:text-xl heading text-gray-800 mb-1 mt-5">Grow Potential</h3>
            <p className="text-sm md:text-lg text-purple-600 sub-heading font-medium mb-2">Learn | Innovate | Evolve</p>
            <p className="text-sm md:text-lg pera text-gray-600">
              Embrace change and continuous learning to stay ahead in dynamic markets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="absolute left-5/12 -top-9 gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={careercardicon2}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-gray-800 mb-1 mt-5">Collaborate - Openly
            </h3>
            <p className="text-sm md:text-lg text-purple-600 sub-heading font-medium mb-2">Share | Create | Elevate
            </p>
            <p className="text-sm md:text-lg pera text-gray-600">
              Foster a collaborative spirit that sparks innovation and drives success.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="absolute left-5/12 -top-9 gap-2 text-purple-700 ">
              <div className="w-18 h-18 bg-blue-500  rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={careercardicon3}
                  alt="Calendar Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl heading text-gray-800 mb-1 mt-5">Client Commitment</h3>
            <p className="text-sm md:text-lg text-purple-600 sub-heading font-medium mb-2">Empathy | Partner | Empower
            </p>
            <p className="text-sm md:text-lg pera text-gray-600">
              Put clients first, understand their needs, deliver, and grow together.
            </p>
          </div>
        </div>
      </section>
      {/* 2nd */}
      {/* 3rd */}
      <section className='bg-[#f7ebfc] py-2 md:py-10 pt-2 md:pt-10'>
        <div className=" bg-linear-to-r from-[#6b0da1] to-[#8447c6] grid grid-cols-1 md:grid-cols-1 h-auto py-10 px-6 sm:px-8 rounded-3xl shadow-2xl w-full sm:w-11/12 md:w-11/12 mx-auto items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <h4 className='text-lg md:text-3xl sub-heading text-white'> Take the Next Step in Your Career.</h4>
            <p className="text-md md:text-lg sub-heading text-center text-white font-light sub-heading max-w-4xl mt-2">
              Let’s Transform Communication Together!
            </p>

          </div>

        </div>
      </section>
      {/* 3rd */}
      {/* 4rd */}
      <section className="bg-[#f7ebfc] py-2 lg:py-10 px-4 md:px-20" >
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Accordion Column */}
          <div className="w-full px-4 sm:px-6 py-5">
            <h2 className="text-2xl md:text-4xl heading text-center mb-6">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Openings </span>
            </h2>

            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md shadow-sm overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium text-sm sm:text-base transition ${openIndex === index
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    {job.title}
                    {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>

                  {openIndex === index && (
                    <div className="bg-white px-4 py-4 text-sm sm:text-base pera text-gray-700 whitespace-pre-line space-y-2">
                      <p>
                        <strong>Location:</strong> {job.location}
                      </p>
                      <p>
                        <strong>Term:</strong> {job.term}
                      </p>
                      {job.php && (
                        <div className='space-y-2'>
                          <p>
                            <strong>Job Description:</strong> {job.description}
                          </p>
                          <p>
                            <strong>Responsibilities:</strong> {"\n" + job.php}
                          </p>
                          <p>
                            <strong>Qualifications and Experience::</strong> {"\n" + job.php}
                          </p>
                        </div>
                      )}
                      {job.seo && (
                        <div className='space-y-2'>
                          <p>
                            <strong>Job Description:</strong> {job.description}
                          </p>
                          <p>
                            <strong>Candidate Requirements:</strong> {"\n" + job.seo}
                          </p>
                        </div>
                      )}
                      {job.Graphic && (
                        <div className='space-y-2'>
                          <p>
                            <strong>Job Description:</strong> {job.description}
                          </p>
                          <p>
                            <strong>Candidate Requirements:</strong> {"\n" + job.Graphic}
                          </p>
                        </div>
                      )}
                      {job.Sales && (
                        <div className='space-y-2'>
                          <p>
                            <strong>Job Description:</strong> {job.description}
                          </p>
                          <p>
                            <strong>Candidate Requirements:</strong> {"\n" + job.Sales}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Optional Image Column */}
          <div className="w-full px-4 sm:px-6 py-5" ref={formRef} id="form">
            <h2 className="text-2xl md:text-4xl heading text-center mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Apply </span> Now
            </h2>
            <div>
              <div className="bg-white border border-gray-300 pera rounded-xl p-1 shadow-sm md:p-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 bg-white border border-gray-300 rounded-xl p-4 md:p-6 shadow-sm"

                >
                  {/* <ToastContainer/> */}
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
                      <UniversalButton label="Submit" variant="brutal" type="button" onClick={handleOtpVerify} className="bg-[#9B44B6] border-[#9B44B6] text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] px-3 py-1 rounded-md mx-1" />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                    <select name="designation" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500">
                      <option value="" disabled>Please Choose an option</option>
                      <option value="SEO Executive">SEO Executive</option>
                      <option value="PHP Developer">PHP Developer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Sales Executive">Sales Executive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Years</label>
                    <select name="selectExpyrs" value={form.selectExpyrs} onChange={(e) => setForm({ ...form, selectExpyrs: e.target.value })} className="form-select w-full border border-gray-300 rounded-md p-2 text-gray-500">
                      <option value="" disabled>Please Choose an option</option>
                      {Array.from({ length: 11 }, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume
                    </label>

                    <div className="relative border border-dashed border-gray-400 rounded-md p-1 text-center cursor-pointer hover:shadow-md transition">
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center text-gray-500 ">
                        <CloudUploadIcon className='text-[#9B44B6]' />
                        <span className="text-sm">Click to upload or drag your file here</span>
                        <span className="text-xs text-gray-400">(PDF, DOC, DOCX – max 2MB)</span>
                      </div>
                    </div>
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
      </section>
      {/* 4rd */}
    </div>
  );
};

export default Careers;
