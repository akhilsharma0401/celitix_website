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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">Payment & Cancellation Policy</span>
                        </h1>
                    </div>

                </div>
            </section>
            {/* 1st */}
            {/* 2st */}
            <div className='bg-linear-to-r from-[#2b3fb067] to-[#36bae270] rounded-xl p-2 md:m-15'>
                <div className='p-10 border bg-white border-gray-300 rounded-lg shadow-sm m-1 md:m-5'>
                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading'>1. Payments & Wallet Credits</h2>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>1.1. All payments to Proactive Professional Services Pvt. Ltd. (Proactive, Celitix, we, our, us, company, agency) processed on it’s Celitix CPaaS platform are through our authorized payment gateway.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>   1.2. Upon successful payment, the corresponding amount is credited as wallet balance in the user’s Celitix account.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'> 1.3. Wallet credits can be used to access and pay for services available on the platform.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        1.4. GST @18% is added automatically to the user’s net payment
                    </p>
                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>2. Wallet Credits</h2>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>2.1. Wallet credits are non-transferable and can only be used within the platform.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>2.2. Wallet credits are non-interest bearing.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>2.3. Any unused credits may be subject to expiration if not utilized within the validity period specified by Proactive/Celitix (if applicable).
                    </p>
                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>3. Cancellations & Refunds</h2>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.1. Payments once credited to the wallet are generally non-refundable.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.2. Refunds are only considered under exceptional circumstances and solely at the discretion of the company.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.3. To request a refund, users must send an email to [accounts@proactivesms.in] with all relevant details.
                    </p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.4. Refund approval is subject to:</p>
                    <ul className='list-disc list-inside text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>
                        <li>The nature of the refund request</li>
                        <li>Verification by our accounts team, and</li>
                        <li>Internal company policies.</li>
                    </ul>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.5. Approved refunds (if any) will be processed back within a reasonable timeframe.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>3.6. The Company reserves the right to decline any refund request without obligation to provide justification.</p>

                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>4. Service Usage & Deduction</h2>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>4.1. Once a service is used, the corresponding charges are non-reversible and will not be refunded.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>4.2. In case of service interruption or failure caused by the platform, the Company may, at its sole discretion, issue wallet credits or partial refunds as compensation.</p>


                    <h2 className='text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3'>5. Policy Updates</h2>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>5.1. The Company reserves the right to update, amend or modify this Payment & Cancellation Policy at any time without prior notice.</p>
                    <p className='text-gray-700 text-base md:text-lg pera lg:text-lg mt-2'>5.2. Continued usage of the platform after any changes constitutes acceptance of the revised policy.</p>
                </div>
            </div>
            {/* 2st */}
        </div>
    )
}

export default PrivacyPolicy
