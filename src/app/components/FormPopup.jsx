"use client"
import React, { useEffect, useRef, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UniversalButton from '../components/UniversalButton';
import { initScrollReveal } from '../../utils/ScrollReveal';
import { useRouter } from 'next/navigation';
import { TurnstileComponent } from '../../utils/TurnstileComponent';
import toast from 'react-hot-toast';
import { Dialog } from "primereact/dialog";
import { sendOtp, verifyOtp } from '../../utils/Otp';
import { verifyToken } from "../../utils/VerifyToken";
import axios from "axios"

// const url = import.meta.env.NEXT_PUBLIC_API_URL
const url = "https://celitix.com:3001";

const FormPopup = ({ visible, onHide }) => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

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

  // Validation state
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpRefs = useRef([]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Verify");
  const [isFetching, setIsFetching] = useState(false);

  // Regex validators
  const validatePhoneNumber = (phone) => /^[0-9]{10,13}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Email field handlers
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm((prev) => ({ ...prev, email }));
    setIsValid(validateEmail(email));
  };

  const handleEmailBlur = () => {
    setIsTouched(true);
  };

  // OTP logic
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

    const res = await sendOtp(phone)
    if (res?.data?.result !== "success") {
      toast.error("Error Sending OTP. Please try again later.")
    }


    setIsOtpSent(true);
    setResendTimer(30);
    startResendTimer();
    toast.success('OTP sent successfully!');
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

  const handleverifyOtp = async () => {
    const enteredOtp = otp.join('');
    const validOtp = '123456'; // Replace with real OTP logic
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
    setIsOtpVerified(true);
    setIsClicked(true);
    setIsOtpSent(false);
    setOtp(Array(6).fill(''));

    // if (enteredOtp === validOtp) {
    //   toast.success('OTP Verified Successfully!');
    //   setIsOtpVerified(true);
    //   setIsOtpSent(false);
    //   setOtp(Array(6).fill(''));
    // } else {
    //   toast.error('Invalid OTP. Please try again.');
    // }
  };




  const [turnstileResponse, setTurnstileResponse] = useState(null); // To store the Turnstile response token
  // Handle Turnstile success response
  const handleTurnstileChange = (token) => {
    setTurnstileResponse(token);
    console.log("Turnstile Token:", token); // Print the Turnstile token
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

    const captchaVerify = await verifyToken(turnstileResponse)

    if (!captchaVerify?.data?.status) {
      return toast.error("Unable to verify captcha. Please Contact Site Administrator ")
    }

    const data = {
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      company: form.company || "N/A",
      service: service,
      source: "Book Demo",
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

    setIsFetching(false);
    toast.success('Your enquiry has been received.');
    console.log('Form submitted:', form);
    router.push('/thank-you');
    onHide()
  };


  return (
    <Dialog
      visible={visible}
      className="p-5 rounded-2xl bg-white border border-white z-99"
      style={{ width:'45rem', backgroundColor:'white', }}
      onHide={onHide}
      maskStyle={{ backgroundColor: 'rgba(80, 80, 80, 0.3)' }}
      draggable={false}
      header={
        <h2 className="text-md heading py-3">
          <span className="text-purple-600">Book </span>Demo
        </h2>
      }
    >
      <div className=''>
        {/* <Header /> */}
        <div className="px-1 ">
          {/* <div className="text-center mb-8 box-reveal-top">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl heading text-left text-gray-800 mt-2 mb-2">Boost Engagement. Simplify Communication.
                        </h1>
                        <p className="text-gray-600 text-left pera sub-heading">
                            All-in-one platform to connect, convert, and retain customers; smarter and faster.
                        </p>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sub-heading text-sm text-gray-700">
                            {[
                                'Drive conversions with interactive messaging.',
                                'Personalise outreach using direct communication.',
                                'Automate customer journeys and create workflows.',
                                'Create a smooth omnichannel experience.',
                            ].map((text, index) => (
                                <p key={index} className="flex items-start justify-start gap-2">
                                    <CheckCircleIcon className="text-green-500" fontSize="small" />
                                    <span className='text-start'>{text}</span>
                                </p>
                            ))}
                        </div>
                    </div> */}

          <div className="">

            <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-300 rounded-xl p-1 md:p-2 shadow-sm ">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        {/* <Footer /> */}
      </div>
    </Dialog>

  )
}

export default FormPopup
