'use client';

import React, { useEffect, useRef } from "react";

export const TurnstileComponent = ({ onChange }) => {
  const turnstileRef = useRef(null);
  const hasRenderedRef = useRef(false);

  useEffect(() => {
    if (!hasRenderedRef.current && typeof window !== 'undefined' && window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: "0x4AAAAAAAyeN-Atpt0ypkQQ",
        callback: onChange,
        theme: "light", // ✅ Use 'theme', not 'data-theme'
        size: "normal",
      });
      hasRenderedRef.current = true;
    }
  }, [onChange]);

  return (
    <div className="turnstile-wrapper"
      
    >
      <div ref={turnstileRef} />
    </div>
  );
};
