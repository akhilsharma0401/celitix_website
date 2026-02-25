"use client"
import { useEffect } from 'react';
import {  ThankyouDesktop, ThankyouMobile } from '../../../public/assets/images';
import { pushToDataLayer } from '../../utils/gtm.js';
import Image from 'next/image';
import Script from 'next/script';
const ThankYou = () => {
  // useEffect(() => {
  //   pushToDataLayer({
  //     event: "conversion",
  //     page_path: window.location.pathname,
  //   });
  // }, []);
  useEffect(() => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-1009530955/eNdDCMzlnfcbEMvwsOED'
    });
  }
}, []);
  return (
    <div>
      {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1009530955"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-1009530955');
             gtag('event', 'conversion', {'send_to': 'AW-1009530955/eNdDCMzlnfcbEMvwsOED'});
          `}
        </Script> */}


    
      <div className="bg-[#f7ebfc] w-auto md:min-h-screen px-4 pt-20 md:pt-12  lg:px-10 flex items-center justify-center">
        {/* aspect-w-16 aspect-h-9 requires the Tailwind aspect-ratio plugin;
      if you don’t have it, see note below */}
        <div className="w-full h-56 md:h-132 max-w-6xl rounded-2xl overflow-hidden py-5">
          <Image
            src={ThankyouDesktop}
            alt="Thank you"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  )
}

export default ThankYou
