"use client"
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const links = {
  
  "Main Pages": [
    ['/', 'Home', 'Celitix Home Page'],
    ['cpaas-solutions', 'Product', 'Celitix Product'],
    ['about-us', 'About Us', 'Celitix About'],
    ['careers', 'Career', 'Celitix Careers'],
    ['pricing', 'Pricing ', 'Celitix Pricing '],
    ['book-a-demo', 'Book Demo', 'Celitix Book Demo'],
    ['privacy-policy', 'Privacy Policy', 'Celitix Privacy Policy'],
    ['terms-and-conditions', 'Terms & Conditions', 'Celitix Terms & Conditions'],
    ['payment-and-cancellation', 'Payment & Cancellation', 'Celitix Payment & Cancellation Policy'],
  ],
  Channels: [
    ['whatsapp-business-platform', 'WhatsApp', 'Celitix WhatsApp'],
    ['rcs-business-messaging', 'RCS', 'Celitix RCS Service'],
    ['sms-marketing', 'SMS', 'Celitix SMS Service'],
    ['two-way-sms', '2 Way SMS', 'Celitix 2-Way SMS'],
    ['inbound-dialer', 'IBD', 'Celitix IBD'],
    ['outbound-dialer', 'OBD', 'Celitix OBD'],
    ['click-to-call', 'Click2Call', 'Celitix Click2Call'],
    ['missed-call-services', 'Missed Call', 'Celitix Missed Call'],
    ['user-verification', 'Authentication', 'Celitix Auth'],
    ['email-otp', 'Email OTP', 'Celitix Email OTP'],
  ],
  Industries: [
    ['retail-and-ecommerce', 'E-Commerce', 'E-Commerce Industries'],
    ['healthcare', 'Healthcare', 'Healthcare  Industries'],
    ['financial-services', 'Finance ', 'Finance Industries'],
    ['education-and-edtech', 'Education ', 'Education  Industries'],
    ['travel-and-tourism', 'Tourism ', 'Tourism  Industries'],
    ['construction-and-real-estate', 'Real Estate', 'Real Estate Industries'],
    ['food-and-beverages', 'Food Production', 'Food Production Industries'],
    ['professional-services', 'Service-Based', 'Service-Based Industries'],
    ['tech-startups', 'Tech Startups', 'Tech Startups Industries'],
  ],
  Resources: [
    ['https://www.celitix.com/blog', 'Blog', 'Celitix Blog'],
  ],
  Solutions: [
   
  ],
};

export default function Sitemap() {
  return (
    <div>
    <section className="sitemap-section w-full bg-[#f6edf9] pt-20">
      <div className="sitemap-container px-4 py-2 md:py-20">
        <h1 className="text-4xl md:text-5xl text-center text-gray-900 heading md:mb-10 mb-1">Explore Our Site</h1>
        <div className="sitemap-grid">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="sitemap-card">
              <div className="sitemap-card-content">
                <div className="sitemap-title-wrapper">
                  <span className="sitemap-accent-bar" />
                  <span className="sitemap-title-text heading">{category}</span>
                </div>
                <ul className="sitemap-list">
                  {items.map(([href, label, aria]) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={aria}
                        className="sitemap-list-item sub-heading"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <span className="sitemap-list-label">{label}</span>
                        <ChevronRightIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>  
    </div>
  );
}
