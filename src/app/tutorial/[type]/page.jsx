import { tutorialData } from "@/utils/tutotialData";
import Image from "next/image";
import React from "react";

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

  return (
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

          {tutorial.sections.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
              className="mb-8 scroll-mt-32"
            >
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.alt || "Tutorial image"}
                  width={800}
                  height={500}
                  className="w-full h-auto mb-4 rounded-lg shadow-md"
                />
              )}


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
          ))}

        </div>
      </div>
    </main>

  );
}
