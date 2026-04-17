"use client";
import { Suspense, useEffect } from "react";
import { ThankyouDesktop, ThankyouMobile } from "../../../public/assets/images";
import { pushToDataLayer } from "../../utils/gtm.js";
import Image from "next/image";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

const ThankYou = () => {
  return (
    <Suspense>
      <ThankYouPage />
    </Suspense>
  );
};
const ThankYouPage = () => {
  const params = useSearchParams();
  const source = params.get("source");

  console.log("source", source);
  // useEffect(() => {
  //   pushToDataLayer({
  //     event: "conversion",
  //     page_path: window.location.pathname,
  //   });
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-1009530955/eNdDCMzlnfcbEMvwsOED",
      });
    }
  }, []);
  return (
    <div>
      {source === "request-demo" ? (
        <>
          <Script id="fb-pixel-init" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq) return;
              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if(!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = true;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            }(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );
            fbq("init", "943473661882714"); 
            fbq("track", "PageView");
          `}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=943473661882714&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      ) : (
        <Script id="fb-pixel-init" strategy="afterInteractive">
          {`
        !function(f,b,e,v,n,t,s){
          if(f.fbq) return;
          n=f.fbq=function(){
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if(!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        fbq("init", "587446320662611"); 
        fbq("track", "PageView");
      `}
        </Script>
      )}

      <Script
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
      </Script>

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
  );
};

export default ThankYou;
