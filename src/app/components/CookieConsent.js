"use client";
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Image from 'next/image';
import { Cookieimg } from '../../../public/assets/images';
import Link from 'next/link';
import UniversalButton from './UniversalButton';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);


  useEffect(() => {
    const consentGiven = Cookie.get('cookie-consent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);


  const acceptCookies = () => {
    Cookie.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };


  const rejectCookies = () => {
    Cookie.set('cookie-consent', 'rejected', { expires: 365 });
    setShowBanner(false);
  };

  return (
    <div className="w-full h-full">
      {showBanner && (
        <>

          <div className="cookie-consent-background"></div>

          {/* Cookie consent banner */}
          <div className="cookie-consent-banner fixed bottom-0 left-1/2 md:left-65">
            {/* <div className="cookie-illustration">
              <Image src={Cookieimg} alt="Cookie Monster" height={100} />
            </div> */}
            <div className="cookie-text">
              <h2 className='heading text-xl'>Our Website Uses Cookies</h2>
              <p className='sub-heading text-md'>
                This site uses cookies to enhance your browsing experience. By
                clicking accept, you consent to our use of cookies as detailed in our{' '}
                <Link href="/privacy-policy">
                  <span className="privacy-link">Privacy Policy</span> 
                </Link>.
              </p>
            </div>
            <div className="buttons">
              <UniversalButton
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
              label='Accept Cookies'
                onClick={acceptCookies}
              
              />
              <UniversalButton
              variant="brutal"
              className="bg-[#9B44B6] border-[#9B44B6] text-white px-3 py-1 rounded hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6] disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed"
              label='Decline Cookies'
                onClick={rejectCookies}
              
              />
              {/* <button onClick={acceptCookies} className="accept-btn">Accept Cookies</button>
              <button onClick={rejectCookies} className="reject-btn">Decline Cookies</button> */}
            </div>
          </div>
        </>
      )}
     
    </div>
  );
};

export default CookieConsent;
