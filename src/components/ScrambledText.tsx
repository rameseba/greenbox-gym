import React, { useState, useEffect } from 'react';

export const ScrambledText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("")
        .map((char, index) => {
          if (index < iteration) return text[index];
          if (char === " ") return " ";
          return chars[Math.floor(Math.random() * 26)];
        })
        .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};
