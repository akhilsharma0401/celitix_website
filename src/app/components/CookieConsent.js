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
                  <a className="privacy-link">Privacy Policy</a> {/* Use <a> inside <Link> */}
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
      <style jsx>{`
        /* Background layer behind the banner */
        .cookie-consent-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(80, 80, 80, 0.5);
          z-index: 999;
        }

        /* Cookie consent banner itself */
        .cookie-consent-banner {
          
          transform: translateX(-50%);
          background-color: #F7EBFC;
          color: black;
          border-radius: 0px 10px 0px 0px;
          padding: 20px 25px;
          width: 100%;
          max-width: 550px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        /* Illustration styling */
        .cookie-illustration {
          margin-bottom: 15px;
        }

        .cookie-illustration img {
          width: 50px;
          height: 50px;
        }

        /* Text inside the banner */
        .cookie-text {
          text-align: center;
        }

        // .cookie-text h2 {
        //   font-size: 18px;
        //   font-weight: 600;
        // }

        // .cookie-text p {
        //   font-size: 14px;
        //   line-height: 1.5;
        //   margin-top: 8px;
        // }

        .privacy-link {
          color: #ffcc00;
          text-decoration: underline;
        }

        /* Buttons container */
        .buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        /* Button styling */
        .accept-btn, .reject-btn {
          background-color: #28A7E4;
          color: white;
          border: none;
          padding: 12px 25px;
          font-size: 14px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .reject-btn {
          background-color: #f44336;
        }

        .accept-btn:hover {
          background-color: #1e7eb8;
        }

        .reject-btn:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
