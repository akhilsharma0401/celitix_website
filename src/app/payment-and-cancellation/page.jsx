"use client";
import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f7ebfc] pb-5">
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center pb-2">
          <div className="space-y-6 box-reveal-bottom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-center text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                Payment & Cancellation Policy
              </span>
            </h1>
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <div className="bg-linear-to-r from-[#2b3fb067] to-[#36bae270] rounded-xl p-2 md:m-15">
        <div className="p-10 border bg-white border-gray-300 rounded-lg shadow-sm m-5">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading">
            Payment & Cancellation Policy
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Welcome to Celitix, operated by Proactive Professional Services Pvt
            Ltd (“Celitix”, “Company”, “we”, “our”, or “us”).
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            This Payment & Cancellation Policy governs payments, billing, wallet
            credits, subscriptions, refunds, cancellations, and financial
            transactions relating to Celitix services, including but not limited
            to WhatsApp Business API, SMS, OTP, RCS, Email, Voice, IVR, Live
            Chat, Chatbots, APIs, automation, and related communication
            services.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            By using Celitix services, you agree to this Policy.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            1. Payments & Billing
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix may provide services through:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Prepaid wallet credits <br />
            - Subscription plans <br />
            - Usage-based billing
            <br />- Enterprise or custom pricing arrangements
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users agree to pay all applicable fees, usage charges, subscription
            charges, onboarding costs, setup fees, taxes, operator charges, or
            other charges associated with the services used.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Applicable GST, taxes, duties, or government levies shall be charged
            in accordance with prevailing laws.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            2. Wallet Credits
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Certain Celitix services may require prepaid wallet funding.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Wallet credits:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Are non-transferable;
            <br />
            - Cannot be withdrawn or exchanged for cash;
            <br />
            - May only be used for eligible platform services;
            <br />- Shall be deducted based on applicable service usage and
            pricing.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix reserves the right to revise wallet deductions, charging
            mechanisms, or pricing structures where operational, regulatory, or
            commercial changes require such updates.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            3. Usage-Based Charges
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Certain Celitix services operate on usage-based pricing models
            including, but not limited to:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - WhatsApp Business API
            <br />
            - Bulk SMS & OTP
            <br />
            - RCS Messaging
            <br />
            - Email Messaging
            <br />
            - Voice, IVR & OBD
            <br />
            - Live Chat & Automation
            <br />- APIs & Developer Services
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Charges may vary depending on:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Message category
            <br />
            - Operator or carrier routing
            <br />
            - Third-party provider pricing
            <br />
            - Usage volume
            <br />
            - Geographic destination
            <br />- Platform or regulatory changes
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users acknowledge that applicable deductions and billing rates may
            change from time to time.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            4. Refunds
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Payments made to Celitix are generally non-refundable.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Refunds may be considered only under limited circumstances,
            including:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Verified duplicate payments;
            <br />
            - Confirmed platform billing errors;
            <br />
            - Failed payment transactions;
            <br />
            - Incorrect deductions caused by technical malfunction;
            <br />- Other exceptional cases approved by Celitix at its sole
            discretion.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Approved refunds, if applicable, shall be processed within a
            reasonable business timeframe.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Refund requests may require supporting information, transaction
            details, account verification, or additional review.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            5. Non-Refundable Services
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Unless expressly approved by Celitix in writing, the following shall
            generally be non-refundable:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Consumed wallet credits;
            <br />
            - Delivered messaging usage;
            <br />
            - Subscription periods already utilized;
            <br />
            - Activated or provisioned services;
            <br />
            - API usage or developer consumption;
            <br />
            - WhatsApp onboarding, setup, verification, or related approvals;
            <br />
            - RCS setup, agent configuration, or brand verification;
            <br />
            - SMS, Email, Voice, IVR, or communication usage charges;
            <br />- Custom development, integrations, consulting, or
            implementation services.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            6. Cancellation & Service Termination
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users may discontinue using Celitix services at any time.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            However, service discontinuation shall not automatically entitle
            Users to refunds for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Used services;
            <br />
            - Active subscriptions;
            <br />
            - Consumed credits;
            <br />- Completed onboarding or configuration activities.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix reserves the right to suspend, restrict, or terminate
            services for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Payment defaults;
            <br />
            - Fraudulent activity;
            <br />
            - Chargebacks or payment disputes;
            <br />
            - Policy violations;
            <br />
            - Regulatory or platform compliance issues;
            <br />- Misuse, spam, or unauthorized activities.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            7. Third-Party Pricing & Platform Charges
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Certain Celitix services depend on third-party platforms, providers,
            telecom operators, carriers, or communication partners including
            Meta, Google RCS, telecom providers, aggregators, and cloud vendors.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Pricing, deductions, or service charges may be revised without prior
            notice where required due to:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Third-party cost changes;
            <br />
            - Operator or carrier revisions;
            <br />
            - Platform pricing updates;
            <br />
            - Tax or regulatory changes;
            <br />- Operational requirements.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix shall not be liable for pricing revisions initiated by
            external providers or communication partners.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            8. Fraud Prevention & Chargebacks
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix reserves the right to investigate, suspend, restrict,
            recover outstanding dues, or take appropriate action in cases
            involving:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Fraudulent transactions;
            <br />
            - Unauthorized payments;
            <br />
            - Payment disputes or chargebacks;
            <br />
            - Abuse of promotional credits;
            <br />- Misuse of billing systems.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users remain responsible for charges incurred through their accounts
            unless unauthorized access is promptly reported and verified.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            9. Policy Updates
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix may modify or update this Payment & Cancellation Policy
            periodically.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Updated versions shall become effective upon publication on the
            Celitix website or platform.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Continued use of the services after updates constitutes acceptance
            of the revised Policy.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            10. Contact Information
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Proactive Professional Services Pvt Ltd <br />
            22, 3rd Floor, Biswa Nagar, New Sanganer Road, Jaipur, Rajasthan,
            India
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Website: https://www.celitix.com
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            General, Legal, Privacy & Compliance Support
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Email: tech@ppspl.io <br />
            Phone: +91 9680006460
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Accounts, Billing, Payments & Refund Support
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Email: accounts@ppspl.io
            <br />
            Phone: +91 9680007722
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            For inquiries related to services, legal matters, privacy,
            compliance, payments, subscriptions, wallet credits, cancellations,
            or refunds, please contact the appropriate team using the details
            above.
          </p>
        </div>
      </div>
      {/* 2st */}
    </div>
  );
};

export default PrivacyPolicy;
