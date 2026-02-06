"use client";
import React, { useState } from "react";
import { tutorialData } from "@/utils/tutotialData";
import Image from "next/image";
import { CTALASTIMAGE } from "../../../../public/assets/images";
import UniversalButton from "@/app/components/UniversalButton";
import FormPopup from "@/app/components/FormPopup";

export default function SpecificTutorial({ params }) {
  const { type } = params;

  // Find matching tutorial
  const tutorial = tutorialData.find(
    (item) => item.slug === type
  );

  if (!tutorial) {
    return (
      <div className="p-6 text-gray-600">
        Tutorial Not Found
      </div>
    );
  }


  const [openDialog, setOpenDialog] = useState(false);

  const handleShowFormPopup = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  return (
    <>
      <main className="bg-white min-h-screen pt-25 md:pt-35 px-4 ">
        <div className="px-0 md:px-5 xl:px-50 mx-auto flex gap-5 xl:gap-20 pb-5 md:pb-20">

          {/* 🔹 Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 p-5 bg-white rounded-2xl shadow-xl border border-gray-200">

              {/* Sidebar Title */}
              <h3 className="font-bold text-gray-900 text-lg mb-5 heading border-b border-gray-200 pb-2">
                On This Page
              </h3>

              <ul className="space-y-3">
                {tutorial.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="flex items-center justify-between p-3 sub-heading rounded-lg hover:bg-purple-50 hover:shadow-md transition-all duration-200 relative">
                      {/* Left Accent Bar */}
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-lg"></span>

                      {/* Section Title */}
                      <span className="ml-4 text-gray-800 font-medium truncate">
                        {section.question}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>



          {/* 🔹 Main Content */}
          <div className="lg:col-span-3 max-w-3xl">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl heading font-bold text-gray-900 capitalize">
              {tutorial.title}
            </h1>

            {/* Intro */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line pera">
              {tutorial.intro}
            </p>

            <hr className="my-5" />

            {tutorial.sections.map((section, index) => {
              const images = section?.image ? Array.isArray(section.image) ? section.image : [section.image] : [];
              return (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="mb-8 scroll-mt-32"
                >
                  {/* {section.image && (
                    <Image
                      src={section.image}
                      alt={section.alt || "Tutorial image"}
                      width={800}
                      height={300}
                      className="w-full h-100 object-contain mb-4 rounded-lg shadow-md"
                    />
                  )} */}

                  {
                    images?.length > 0 && images?.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image?.src}
                          alt={section.alt || "Tutorial image"}
                          width={800}
                          height={300}
                          className="w-full h-100 object-contain mb-4 rounded-lg shadow-md"
                        />
                      </div>
                    ))
                  }


                  <h2 className="text-xl font-semibold heading text-gray-900 mb-3">
                    {section.question}
                  </h2>

                  {section.answer && (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line pera p-0 mb-3">
                      {section.answer}
                    </p>
                  )}

                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 pera text-gray-700">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.link && (
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {section.link}
                    </a>
                  )}
                </div>
              )
            })}

          </div>

        </div>
      </main>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A05CD7] to-[#4B0FA6] px-6 md:px-12 py-5 md:py-15">
        {/* Left Image with Icons */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src={CTALASTIMAGE}
            alt="Customer Support"
            className="z-10 w-full sm:w-72 md:w-80 lg:w-[440px] object-contain lg:absolute top-0 md:-top-55"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-white text-2xl heading sm:text-3xl md:text-4xl font-bold mb-4">
            Elevate Your Customer Experience
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg sub-heading font-light mb-6 max-w-xl">
            Go beyond the ordinary and connect with your target groups to grow your business.
          </p>
          <UniversalButton
            label="Book  Demo"
            variant="transitionbtn"
            className="px-4 py-2 rounded-xl text-black bg-white sm:px-4 sm:py-2 "
            onClick={handleShowFormPopup}
          />

          <FormPopup
            visible={openDialog}
            onHide={handleCloseDialog}
          />
        </div>
      </div>
    </>

  );
}
