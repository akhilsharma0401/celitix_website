"use client"
import React, {  useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet-async'
// import { initScrollReveal } from '../../utils/ScrollReveal'
import Link from "next/link";
import Image from 'next/image';
import { Efficiency, Excellence, Improvement, Integrity, Partnership, featureicon1, featureicon2, featureicon3, featureicon4, heroimg, brandgrowth, bookingschedule } from '../../../public/assets/images';
import UniversalButton from '../components/UniversalButton'
import FormPopup from '../components/FormPopup';



const About = () => {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);


  const [openDialog, setOpenDialog] = useState(false);
  
    const handleShowFormPopup = () => {
      setOpenDialog(true);
    }
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    }

  // 2nd
  const features = [
    {
      title: "Seamless Integration",
      desc: "Combine multiple channels to create seamless experiences for your customers.",
      icon: featureicon1,
    },
    {
      title: "24/7 Analytics",
      desc: "Track engagement, conversions, and delivery in real-time, anytime you need.",
      icon: featureicon2,
    },
    {
      title: "Automations",
      desc: "Plan & set up alerts, journeys, and campaigns without coding or complex tools.",
      icon: featureicon3,
    },
    {
      title: "Customisability",
      desc: "Tailor every message, flow, and channel to match your brand and workflow.",
      icon: featureicon4,
    },
  ];
  // 2nd
  // 3rd
  const [activeIndex, setActiveIndex] = useState(2);

  const timelineData = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Our journey began with a vision to improve communication. We started by offering digital marketing, sales, & communication solutions, specialising in SMS & Voice solutions (IVR).",
    },
    {
      year: "2010",
      title: "Expansion",
      description:
        "Within two years, we branched into web development. Building trusted client relationships, we established their online presence & reinforced our expertise in digital marketing.",
    },
    {
      year: "2012",
      title: "Networking",
      description:
        "Our growth led to the opening of a branch office in Delhi. We formed strategic partnerships with industry-leading brands, government organisations & key network providers.",
    },
    {
      year: "2018",
      title: "Teamwork",
      description:
        "With a decade of expertise, our team expanded to 30+ members. Over 250+ permanent clients began to rely on us for their communication needs and digital strategies.",
    },
    {
      year: "2024",
      title: "Innovation",
      description:
        "We enter a new era with the launch of Celitix, a comprehensive CPaaS platform designed to deliver scalable, seamless communication solutions for businesses of every size.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);
  // 3rd

   
  return (
    <div>
      {/* <Helmet>
        <title>About Celitix | Smarter Business Communication </title>
        <meta name="description" content="Discover the team behind Celitix: Our mission, values, and how we help businesses simplify communication." />
      
      </Helmet> */}
      {/* 1st */}
      <section className="bg-[#f7ebfc] pt-25 md:pt-35 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-10 md:pb-20">
          <div className="space-y-6 box-reveal-left">
            <span className="inline-block bg-purple-700 sub-heading text-white text-md font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              About Us
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading text-gray-900 popf leading-tight">
              Simplify <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Communication, </span>Empower Results
            </h1>

            <p className="text-md md:text-lg lg:text-xl font-semibold text-gray-700 sub-heading">
              When people talk and companies listen, connection brings them closer. This drives progress, and everyone thrives together.
            </p>

            <div className="flex flex-wrap gap-4">
              <UniversalButton
                label="Connect With Us"
                variant="brutal"
                // onClick={() => (window.location.href = '/careers#form')}
                className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-2 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                  onClick={handleShowFormPopup}
              />
               <FormPopup
                  visible={openDialog}
                  onHide={handleCloseDialog}
                />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={heroimg}
              alt=" Simplify Communication, Empower Results"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain box-reveal-bottom"
            />
          </div>
        </div>
      </section>
      {/* 1st */}
      {/* 2nd */}
      <section className="bg-[#f7ebfc] py-2 px-4 md:py-10 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center md:justify-end">
            <Image
              src={brandgrowth}
              alt="Whatsapp icon"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className='text-2xl md:4xl lg:text-5xl font-semibold text-gray-900 heading'>Our Mission</h2>

            <p className="text-gray-600 text-base md:text-lg max-w-md">
              Celitix was built to simplify communication for professionals and business owners. We aim to partner with organisations to help them achieve long-term success through better systems.
            </p>

          </div>
        </div>
      </section>
      {/* 2nd */}
      {/* 3rd */}
      <section className="bg-[#f7ebfc] px-4 py-5 md:py-20 sm:px-6 lg:px-20">
        <div className="px-4 max-w-7xl mx-auto text-center spacey-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl heading mb-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b40b0] to-[#36bae2]"> Journey </span>
          </h2>
          <p className="text-md md:text-lg lg:text-xl font-semibold text-gray-700 sub-heading">
            Success is what you can measure. With every milestone, we leave a mark.
          </p>

          {/* Timeline bar with centered dot */}
          <div className="relative w-full h-20">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-300 transform -translate-y-1/2"></div>

            {/* Timeline items */}
            <div className="relative z-10 flex justify-between items-end h-full px-2 sm:px-10 lg:px-20">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center cursor-pointer w-full"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Dot centered exactly on line */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-4 h-4 rounded-full transition duration-300 ${index === activeIndex
                        ? "bg-purple-700 shadow-md"
                        : "bg-gray-400"
                        }`}
                    ></div>
                  </div>

                  {/* Year */}

                  <h3
                    className={`text-xl font-bold mt-6 heading transition ${index === activeIndex
                      ? "text-purple-700 drop-shadow-md scale-105"
                      : "text-gray-400"
                      }`}
                  >
                    {item.year}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mt-5 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold heading text-purple-700 mb-2">
              {timelineData[activeIndex].title}
            </h3>
            <p className="text-gray-700 text-sm md:text-lg pera leading-relaxed">
              {timelineData[activeIndex].description}
            </p>
          </div>
        </div>
      </section>
      {/* 3rd */}
      {/* 4th */}
      <div className="bg-[#f7ebfc] px-4 sm:px-6 md:px-20 py-2 md:py-10 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className='space-y-4'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading">
              What is Celitix?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Celitix is a direct communication platform for marketing, support, and service. Made with decades of telecom experience, it helps companies connect better.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-xl font-medium sub-heading text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm md:text-lg leading-relaxed pera text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-xl mx-auto">
            <div className="relative rounded-xl overflow-hidden ">
              <Image
                src={bookingschedule}
                alt="Smartping Video"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 4th */}
      {/* 5th */}
      <section className="bg-[#f7ebfc] px-4 sm:px-6 md:px-12 pt-2 md:pt-10 pb-2 md:pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl heading text-gray-900 pb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 px-2 sm:px-10">

            {/* Partnership */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl shadow-md group">
              <Image
                src={Partnership}
                alt="Partnership"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                <h3 className="text-lg sub-heading">Partnership</h3>
              </div>
            </div>

            {/* Efficiency */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl shadow-md group">
              <Image
                src={Efficiency}
                alt="Efficiency"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                <h3 className="text-lg sub-heading">Efficiency</h3>
              </div>
            </div>

            {/* Integrity */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl shadow-md group">
              <Image
                src={Integrity}
                alt="Integrity"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                <h3 className="text-lg sub-heading">Integrity</h3>
              </div>
            </div>

            {/* Improvement */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl shadow-md group">
              <Image
                src={Improvement}
                alt="Improvement"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                <h3 className="text-lg sub-heading">Improvement</h3>
              </div>
            </div>

            {/* Excellence */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl shadow-md group">
              <Image
                src={Excellence}
                alt="Excellence"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2">
                <h3 className="text-lg sub-heading">Excellence</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5th */}
    </div>
  )
}

export default About
