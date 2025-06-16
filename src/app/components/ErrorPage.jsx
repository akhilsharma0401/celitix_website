"use client"

import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie'; // Correct import for Lottie
import animationData from '../../../public/assets/Lottie/Animation.json';

const ErrorPage = () => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(0);

  // Use useEffect to update the window width when the component mounts
  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Call the function initially
    updateWindowWidth();

    // Add event listener to update width on resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className='pt-25 md:pt-0'>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="md:text-4xl font-bold text-gray-800 mt-6 sm:text-center text-2xl">
                Oops! <span className="text-2xl font-semibold">You're lost.</span>
              </h2>
              <p className="text-gray-800 md:text-2xl font-semibold mt-2 sm:text-center text-lg">
                The page you are looking for does not exist.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            {/* Ensure that windowWidth is greater than 0 before rendering Lottie */}
            {windowWidth > 0 && (
              <Lottie
                options={defaultOptions}
                height={windowWidth > 640 ? 350 : 250}
                width={windowWidth > 640 ? 500 : 350} // Adjust width based on screen width
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

