"use client"
import React, { useRef, useEffect } from 'react';
import { PiMinusBold, PiPlusBold } from "react-icons/pi"; // Adjust your icon imports if needed

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="mb-3 border border-[#E1E1EA] rounded-lg overflow-hidden transition-all">
      {/* Header button */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left bg-[#FAF9FC] rounded-t-lg py-3 px-4 transition duration-300 ease-in-out"
      >
        <span className="text-[15px] font-medium text-[#1C1C1E]">{question}</span>
        <span
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <PiMinusBold className="text-[#5A3EFF] text-lg" />
          ) : (
            <PiPlusBold className="text-[#5A3EFF] text-lg" />
          )}
        </span>
      </button>

      {/* Accordion content */}
      <div
        ref={contentRef}
        className="transition-max-height duration-500 ease-in-out overflow-hidden bg-white px-5 text-sm text-[#3C3C43] border-t border-[#E1E1EA]"
      >
        <div className="py-4">
          {Array.isArray(answer) ? (
            answer.map((line, idx) => (
              <p key={idx} className="mb-2 leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="leading-relaxed">{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
