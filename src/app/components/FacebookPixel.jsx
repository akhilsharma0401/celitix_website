"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const EXCLUDED_PAGES = ["/request-demo", "/thank-you"]; 

export default function FacebookPixel() {
  const pathname = usePathname();

  if (EXCLUDED_PAGES.includes(pathname)) return null;

  return (
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
  );
}
