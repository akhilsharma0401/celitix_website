"use client";
import React, { useEffect } from "react";
import UniversalButton from "../components/UniversalButton";
// import { Helmet } from 'react-helmet-async'
import { initScrollReveal } from "../../utils/ScrollReveal";

const TermsConditions = () => {
  //   useEffect(() => {
  //     initScrollReveal();
  //   }, []);
  return (
    <div className="bg-[#f7ebfc] pb-5">
      {/* <Helmet>
        <title>Terms & Conditions | Celitix</title>
        <meta name="description" content="Review Celitix’s terms and conditions for using our services and platform. Stay informed about your rights, responsibilities, and service guidelines." /> */}
      {/* <link rel="preload" as="image" href={} crossorigin="anonymous" /> */}
      {/* </Helmet> */}

      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center pb-2">
          <div className="space-y-6 box-reveal-bottom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading text-center font-bold text-gray-900 leading-tight">
              Celitix{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                {" "}
                Terms and conditions{" "}
              </span>
            </h1>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* <img
              src={WhatsApp_Business_Platform}
              alt="Whatsapp icon"
              loading="eager"
              fetchpriority="high"
              crossorigin="anonymous"
              title='WhatsApp Business Platform'
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            /> */}
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2st */}
      <div className="bg-linear-to-r from-[#2b3fb067] to-[#36bae270] rounded-xl p-2 md:m-15">
        <div className="p-10 border bg-white border-gray-300 rounded-lg shadow-sm m-5">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading">
            Legal Information
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Welcome to Celitix, a communication platform operated by Proactive
            Professional Services Pvt Ltd (“Celitix”, “Company”, “we”, “our”, or
            “us”). By accessing or using any Celitix services, platform, APIs,
            applications, websites, dashboards, or communication tools, you
            (“User”, “Customer”, “Client”, or “you”) agree to comply with and be
            bound by these Terms & Conditions (“Terms”).
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            These Terms govern your access to and use of Celitix services,
            including but not limited to WhatsApp Business API services, SMS
            services, OTP and authentication solutions, RCS messaging, email
            services, voice services, IVR, OBD, live chat, chatbot automation,
            APIs, integrations, and related communication solutions provided by
            Celitix.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            If you do not agree with these Terms, you must not access or use the
            services.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            1. Definitions
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            For the purpose of these Terms:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            - “Account” means the registered account created by a User to access
            Celitix services. <br />
            - “Services” means all communication, API, messaging, automation,
            platform, and software services offered by Celitix. <br />
            - “Platform” means the Celitix website, dashboards, APIs, software,
            applications, and systems. <br />
            - “Credits” means prepaid wallet balance or usage credits purchased
            by the User. <br />
            - “Content” means messages, media, templates, text, files, audio,
            video, data, or communications transmitted using the services.{" "}
            <br />- “Third-Party Platforms” means external platforms including
            Meta, WhatsApp, telecom operators, SMS gateways, email providers,
            carriers, or other service providers connected with Celitix
            services.{" "}
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            2. Eligibility & Account Registration
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            2.1. Eligibility
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You may use Celitix services only if:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - You are legally capable of entering into binding agreements;{" "}
            <br />
            - You are authorized to represent the business or entity registering
            for the services; <br />- Your use of the services complies with all
            applicable laws, regulations, and industry guidelines.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            2.2. Account Information
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You agree to provide accurate, complete, and updated information
            during registration and while using the services.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix reserves the right to suspend or terminate accounts
            containing false, misleading, incomplete, or unverifiable
            information.{" "}
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            2.3. Account Security
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You are solely responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Maintaining the confidentiality of login credentials; <br />
            - All activities performed through your account; <br />-
            Unauthorized access caused due to your negligence.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            You must immediately notify Celitix of any unauthorized use or
            security breach.{" "}
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            3. Services
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            3.1. Scope of Services
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix provides communication and engagement solutions including
            but not limited to:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - WhatsApp Business API <br />
            - Bulk SMS & Transactional SMS <br />
            - OTP & Authentication Services
            <br />
            - RCS Business Messaging <br />
            - Email Messaging Services <br />
            - Voice Calls, IVR & OBD <br />
            - Live Chat & Customer Support Tools
            <br />
            - Chatbots & Automation
            <br />
            - APIs & Integrations
            <br />- Developer & Communication Platform Services
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix may modify, update, suspend, or discontinue any service at
            its discretion.{" "}
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            3.2. Third-Party Dependencies
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Certain services depend on third-party platforms and telecom
            operators. Celitix shall not be responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Delivery failures caused by telecom operators;
            <br />
            - Delays caused by Meta, WhatsApp, or carriers; <br />
            - Third-party downtime or policy restrictions;
            <br />- External API failures or routing interruptions.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            4. User Obligations
          </h2>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You agree that you shall not use the services for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Spam or unsolicited messaging; <br />
            - Fraudulent, deceptive, or misleading communications; <br />
            - Illegal products, services, or activities; <br />
            - Harassment, abuse, threats, or hate speech; <br />
            - Phishing, impersonation, or identity fraud; <br />
            - Malware, harmful scripts, or malicious activities; <br />
            - Unauthorized marketing campaigns; <br />- Violations of telecom,
            TRAI, DLT, WhatsApp, Meta, or applicable regulations.
          </p>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You are solely responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Obtaining user consent before messaging;
            <br />
            - Maintaining opt-in and opt-out records; <br />
            - Message content transmitted using the platform;
            <br />- Compliance with local and international regulations.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            5. WhatsApp, SMS & RCS Messaging Compliance
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            5.1. WhatsApp Business API Compliance
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users utilizing WhatsApp Business API services must comply with:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - WhatsApp Business Messaging Policies;
            <br />
            - Meta Commerce Policies;
            <br />
            - Template approval requirements;
            <br />
            - Messaging category guidelines;
            <br />- User opt-in requirements.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix shall not be responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - WhatsApp number bans;
            <br />
            - Template rejection; <br />
            - Quality rating reduction;
            <br />- Meta enforcement actions.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            5.2. DLT & TRAI Compliance
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            For India-based messaging services, Users must comply with:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - TRAI regulations;
            <br />
            - DLT registration requirements;
            <br />
            - Header and template approvals;
            <br />- Telecom operator guidelines.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Failure to comply may result in message rejection, penalties,
            suspension, or termination.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            5.3. RCS Business Messaging & Google Compliance
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users using Celitix RCS Business Messaging services must comply with
            applicable Google RBM policies, telecom operator requirements,
            carrier guidelines, anti-spam laws, privacy regulations, and
            applicable legal requirements.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users shall ensure that RCS communications:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Are sent only with required user consent or opt-in;
            <br />
            - Clearly identify the sender or business;
            <br />
            - Comply with Google, carrier, and regulatory policies;
            <br />- Do not contain spam, phishing, malware, deceptive, illegal,
            or prohibited content.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix reserves the right to suspend, restrict, or terminate RCS
            services for policy violations, spam complaints, failed brand
            verification, carrier restrictions, or compliance issues.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix shall not be responsible for Google RBM approval rejections,
            RCS agent suspension, carrier filtering, delivery failures, or
            enforcement actions taken by Google, telecom operators, or
            third-party platforms.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Users remain solely responsible for maintaining compliance with
            Google RCS Business Messaging requirements and applicable laws.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            5.3. Anti-Spam Policy
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users shall not:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Send unsolicited promotional messages;
            <br />
            - Purchase or misuse contact databases;
            <br />
            - Circumvent opt-out requests;
            <br />- Send excessive or abusive campaigns.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix reserves the right to suspend services immediately in case
            of spam complaints or abuse reports.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            6. Payment, Billing & Credits
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            6.1. Billing Models
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix may offer:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Prepaid wallet systems;
            <br />
            - Subscription plans;
            <br />
            - Usage-based billing;
            <br />- Enterprise custom pricing.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            All charges are non-refundable unless specifically approved by
            Celitix in writing.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            6.2. Prepaid Credits
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Credits purchased by Users:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Are non-transferable;
            <br />
            - Cannot be exchanged for cash;
            <br />
            - May expire if inactive for extended periods;
            <br />- Are deducted based on service usage.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            6.3. Taxes
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            All applicable taxes including GST and government levies shall be
            borne by the User.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            6.4. Payment Failure
          </h3>

          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix reserves the right to suspend services for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Failed payments;
            <br />
            - Chargebacks;
            <br />
            - Outstanding invoices;
            <br />- Fraudulent transactions.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            7. APIs & Developer Services
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            7.1. API Usage
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Users may access APIs provided by Celitix subject to usage limits,
            security requirements, and technical guidelines.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You shall not:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Reverse engineer APIs;
            <br />
            - Abuse API rate limits;
            <br />
            - Attempt unauthorized access;
            <br />- Interfere with platform stability.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            7.2. Rate Limiting
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix reserves the right to impose API rate limits, throttling, or
            restrictions to maintain platform stability and security.
          </p>

          <h3 className="text-lg md:text-2xl lg:text-2xl font-semibold text-gray-900 heading mt-2">
            7.3. Integration Responsibility
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users are solely responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Their software integrations;
            <br />
            - API implementations;
            <br />
            - Data handling practices;
            <br />- Security of connected applications.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            8. Intellectual Property
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            All intellectual property rights relating to the platform, software,
            branding, APIs, dashboards, systems, and materials belong
            exclusively to Celitix or its licensors.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users shall not:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Copy or reproduce the platform;
            <br />
            - Modify proprietary systems;
            <br />
            - Use Celitix branding without authorization;
            <br />- Create derivative products using Celitix intellectual
            property.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            No rights are transferred except limited access rights required to
            use the services.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            9. Suspension & Termination
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix reserves the right to suspend or terminate services
            immediately without prior notice if:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - These Terms are violated;
            <br />
            - Illegal or abusive activity is detected;
            <br />
            - Spam complaints are received;
            <br />
            - Payment defaults occur;
            <br />
            - Regulatory violations arise;
            <br />- Third-party providers require suspension.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Termination may result in permanent loss of data, access, or
            credits.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            10. Confidentiality & Data Protection
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Both parties agree to maintain confidentiality of non-public
            business, technical, financial, and operational information.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix implements commercially reasonable security measures but
            does not guarantee absolute security.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users are responsible for ensuring lawful collection and processing
            of customer data.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Use of services is also governed by the Celitix Privacy Policy.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            11. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Services are provided on an “as is” and “as available” basis.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix does not guarantee:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Uninterrupted service;
            <br />
            - Error-free operation;
            <br />
            - Guaranteed message delivery;
            <br />
            - Specific delivery speed;
            <br />- Continuous availability.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            To the maximum extent permitted by law, all warranties, express or
            implied, are disclaimed.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            12. Limitation of Liability
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            To the maximum extent permitted by law, Celitix shall not be liable
            for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Indirect or consequential damages;
            <br />
            - Loss of profits or revenue;
            <br />
            - Business interruption;
            <br />
            - Loss of data;
            <br />
            - Telecom operator failures;
            <br />
            - Third-party platform actions;
            <br />- User misuse of services.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            Celitix’s total liability shall not exceed the amount paid by the
            User for the specific affected service during the preceding three
            (3) months.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            13. Indemnification
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            You agree to indemnify and hold harmless Celitix, its directors,
            employees, affiliates, and partners against any claims, liabilities,
            losses, damages, penalties, or expenses arising from:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Your misuse of services;
            <br />
            - Regulatory violations;
            <br />
            - Spam complaints;
            <br />
            - Illegal communications;
            <br />
            - Breach of these Terms;
            <br />- Third-party claims caused by your activities.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            14. Force Majeure
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix shall not be liable for delays or failures caused by events
            beyond reasonable control, including:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            - Natural disasters;
            <br />
            - Telecom failures;
            <br />
            - Internet outages;
            <br />
            - Government actions;
            <br />
            - Cyberattacks;
            <br />
            - Platform restrictions by Meta or telecom operators;
            <br />- War, strikes, or pandemics.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            15. Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            These Terms shall be governed by and interpreted in accordance with
            the laws of India.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Any disputes arising from these Terms shall be subject to the
            exclusive jurisdiction of courts located in Jaipur, Rajasthan.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            16. Modifications to Terms
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Celitix reserves the right to modify or update these Terms at any
            time.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Continued use of the services after updates constitutes acceptance
            of the revised Terms.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            17. Contact Information
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Proactive Professional Services Pvt Ltd <br />
            22, 3rd Floor, Biswa Nagar, New Sanganer Road, Jaipur
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Website: https://www.celitix.com <br />
            Email: tech@ppspl.io.com <br />
            Phone: +91 9680006460
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            For support, compliance, or legal inquiries, please contact us
            through the above channels.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            18. Headings
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            The headings used in this Agreement are for convenience and
            reference purposes only. They shall not affect the interpretation,
            meaning, scope, or enforceability of any provision of this
            Agreement, nor shall they limit or otherwise modify the terms
            contained herein.
          </p>
        </div>
      </div>
      {/* 2st */}
    </div>
  );
};

export default TermsConditions;
