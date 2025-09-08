"use client"
import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='bg-[#f7ebfc] pb-5'>
            {/* 1st */}
            <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center pb-2">
                    <div className="space-y-6 box-reveal-bottom">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-center text-gray-900 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">Shipping & Delivery Policy</span>
                        </h1>
                    </div>

                </div>
            </section>
            {/* 1st */}
            {/* 2st */}
            <div className='bg-linear-to-r from-[#2b3fb067] to-[#36bae270] rounded-xl p-2 md:m-15'>
                <div className='p-10 border bg-white border-gray-300 rounded-lg shadow-sm m-1 md:m-5'>
                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading'>1. Service Delivery</h2>
                    <ul className='list-disc list-inside text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        <li>Our services are digital in nature. No physical products are shipped.</li>
                        <li>Upon successful payment, the purchased service/package will be activated and made
                            available in the customer’s account.</li>
                        <li>In most cases, delivery is <strong>instant</strong>. However, in rare situations, it may take up to <strong>24 hours</strong> due
                            to system or technical delays.</li>
                    </ul>


                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>2. Delivery Method</h2>

                    <ul className='list-disc list-inside text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        <li>For Celitix CPaaS: Credits are directly added to the registered account.</li>
                        <li>For digital marketing services: The service commencement schedule will be communicated
                            via email or other channels after confirmation of payment.</li>
                    </ul>

                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>3. Non-Delivery Circumstances</h2>
                    <ul className='list-disc list-inside text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        <li>If payment is not successfully processed, services will not be activated.</li>
                        <li>Customers must ensure correct account details and service specifications at the time of
                            purchase to avoid delays.
                        </li>
                    </ul>


                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>4. Customer Support</h2>
                    <ul className='list-disc list-inside text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        <li>For any issues related to service delivery, please contact our support team at
                            support@celitix.com / +91 96800 06460.</li>
                        <li>We aim to resolve delivery-related queries within <strong>24–48 business hours</strong>.</li>
                    </ul>
                </div>
            </div>
            {/* 2st */}
        </div>
    )
}

export default PrivacyPolicy
