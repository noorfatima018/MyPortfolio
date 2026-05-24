"use client";

import React, { useState, useEffect } from "react";

export const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    const handleType = () => {
      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phrases, currentPhraseIndex]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-pulse border-r-2 border-brand-purple ml-1 pr-1"></span>
    </span>
  );
};
