import React, { useState, useEffect } from 'react';
import { ScrambledText } from './ScrambledText';
import { TERMINAL_BENEFITS } from '../constants';

export const TerminalStatus = ({ isDark }: { isDark: boolean }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TERMINAL_BENEFITS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative z-10 border-4 ${isDark ? 'border-white/5 bg-neutral-900/80' : 'border-black/5 bg-white/80'} p-10 rounded-3xl backdrop-blur-md transition-colors duration-500 min-h-[200px] flex flex-col justify-center`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
      </div>
      <div className={`${isDark ? 'text-white/80' : 'text-black/80'} font-mono text-[10px] md:text-[11px] uppercase tracking-widest leading-loose`}>
        <p className="mb-1">// ¿Conoces los beneficios de hacer CrossFit?</p>
        <p className={`text-[#22c55e] font-black mb-1`}>
          // <ScrambledText text={TERMINAL_BENEFITS[index].toUpperCase()} />
        </p>
        <p>// Tu box verde 💚</p>
      </div>
    </div>
  );
};
