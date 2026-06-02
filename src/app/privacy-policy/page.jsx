"use client";
import React, { useEffect } from "react";
// import { Helmet } from 'react-helmet-async'
// import { initScrollReveal } from '../utils/ScrollReveal'

const PrivacyPolicy = () => {
  //   useEffect(() => {
  //     initScrollReveal();
  //   }, []);
  return (
    <div className="bg-[#f7ebfc] pb-5">
      {/* <Helmet>
        <title>Privacy Policy | Celitix</title>
        <meta name="description" content="Your privacy matters. Read how Celitix collects, uses, and protects your personal information while delivering seamless communication experiences." />
       
      </Helmet> */}
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center justify-center pb-2">
          <div className="space-y-6 box-reveal-bottom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-center text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]">
                {" "}
                Privacy Policy{" "}
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
            Privacy Statement
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Welcome to Celitix, operated by Proactive Professional Services Pvt
            Ltd (“Celitix”, “we”, “our”, or “us”).
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            This Privacy Policy explains how we collect, use, process, store,
            disclose, and protect personal and business information when you
            access or use our website, platform, dashboards, APIs, communication
            services, applications, or related services.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            By using Celitix services, you agree to the practices described in
            this Privacy Policy.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            1. Information We Collect
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            We may collect information including:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Name <br />
            - Company name <br />
            - Email address
            <br />
            - Phone number
            <br />
            - Billing information
            <br />
            - Business registration information <br />- Login credentials
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Platform & Technical Information
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            We may automatically collect:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - IP address <br />
            - Browser type <br />
            - Device information
            <br />
            - Operating system
            <br />
            - API usage data
            <br />
            - Log files <br />
            - Session activity
            <br />- Usage analytics
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Communication & Messaging Data
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            When using Celitix communication services, we may process
            operational messaging data including:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Sender information <br />
            - Recipient details
            <br />
            - Delivery reports
            <br />
            - Campaign metadata
            <br />
            - Templates and communication content
            <br />
            - API requests and responses
            <br />
            - Usage statistics
            <br />- Message routing and performance information
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Such information is processed solely for service delivery,
            analytics, monitoring, troubleshooting, security, compliance, and
            platform improvement purposes.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            2. How We Use Information
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            We may use collected information to:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Provide and operate Celitix services <br />
            - Process transactions and billing <br />
            - Email addressEnable messaging and communication delivery
            <br />
            - Authenticate accounts and users
            <br />
            - Provide customer support and onboarding
            <br />
            - Monitor service performance and security
            <br />
            - Detect fraud, abuse, or unauthorized activities
            <br />
            - Improve platform functionality and user experience
            <br />- Comply with legal, regulatory, telecom, and platform
            obligations
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            3. Communication Services & User Responsibility
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix provides communication infrastructure and engagement
            services including WhatsApp Business API, SMS, OTP, RCS, Email,
            Voice, IVR, Chatbots, Live Chat, APIs, and automation tools.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Users are solely responsible for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Obtaining required customer consent and opt-ins;
            <br />
            - Maintaining unsubscribe and opt-out mechanisms where applicable;{" "}
            <br />
            - Ensuring lawful communication practices;
            <br />- Compliance with WhatsApp, Meta, Google, telecom, DLT, TRAI,
            carrier, and applicable regulations.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix does not independently verify consent obtained by Users.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            4. Third-Party Platforms & Service Providers
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Certain Celitix services rely on third-party providers, including:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Meta / WhatsApp
            <br />
            - Google RCS Business Messaging <br />
            - Telecom operators & carriers
            <br />
            - SMS aggregators
            <br />
            - Email delivery providers
            <br />
            - Cloud hosting and infrastructure providers
            <br />- Analytics and security providers
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Information processed through these services may also be subject to
            the privacy policies, operational practices, and compliance
            requirements of those third parties.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix is not responsible for the privacy practices of external
            platforms.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            5. Cookies & Analytics
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Our website and services may use cookies, analytics tools, tracking
            technologies, and similar mechanisms to:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Improve website functionality
            <br />
            - Analyze usage patterns <br />
            - Enhance platform performance
            <br />
            - Maintain security and authentication
            <br />- Personalize user experience
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            You may manage cookie preferences through your browser settings.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            6. Data Sharing & Disclosure
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            We do not sell personal information.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            We may share information where reasonably necessary with:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Technology providers
            <br />
            - Telecom operators and communication partners
            <br />
            - Cloud infrastructure vendors
            <br />
            - Payment processors
            <br />
            - Regulatory authorities where legally required
            <br />- Service providers supporting our operations
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Information may also be disclosed to comply with legal obligations,
            security requirements, fraud prevention, or enforcement actions.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            7. Data Retention
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            We retain information for as long as reasonably necessary for:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Service delivery
            <br />
            - Security monitoring
            <br />
            - Billing and accounting
            <br />
            - Platform operations
            <br />
            - Legal and regulatory compliance
            <br />- Audit and dispute resolution purposes
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Retention periods may vary depending on service type, legal
            requirements, or operational needs.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            8. Data Security
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix implements commercially reasonable technical,
            organizational, and security measures designed to protect
            information against unauthorized access, misuse, disclosure,
            alteration, or destruction.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            These measures may include:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Access controls
            <br />
            - Authentication systems
            <br />
            - Infrastructure monitoring
            <br />
            - Encryption mechanisms
            <br />- Security reviews and safeguards
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            However, no digital transmission or storage system can guarantee
            absolute security.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            9. International Processing
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Depending on the services used, information may be processed,
            transferred, stored, or accessed by third-party providers operating
            across different jurisdictions.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            By using Celitix services, you acknowledge such processing where
            necessary for service delivery and platform operations.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            10. User Rights
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Subject to applicable laws, Users may request:
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            - Access to their information
            <br />
            - Correction or update of inaccurate information
            <br />
            - Deletion requests where legally permissible
            <br />- Withdrawal of consent where applicable
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Requests may be submitted through our contact channels.
          </p>

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            11. Policy Updates
          </h3>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Celitix may update or revise this Privacy Policy periodically.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Updated versions shall become effective upon publication on our
            website.
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-1">
            Continued use of our services constitutes acceptance of the updated
            Privacy Policy.
          </p>

          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold text-gray-900 heading mt-3">
            12. Contact Information
          </h2>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Proactive Professional Services Pvt Ltd <br />
            22, 3rd Floor, Biswa Nagar, New Sanganer Road, Jaipur, Rajasthan,
            India
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg mt-2">
            Website: https://www.celitix.com <br />
            Email: tech@ppspl.io <br />
            Phone: +91 9680006460
          </p>
          <p className="text-gray-700 text-base md:text-lg pera lg:text-lg">
            For privacy, compliance, or data-related inquiries, please contact
            us using the details above.
          </p>
        </div>
      </div>
      {/* 2st */}
    </div>
  );
};

export default PrivacyPolicy;
