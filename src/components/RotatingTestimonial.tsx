import React, { useState, useEffect } from 'react';
import { ScrambledText } from './ScrambledText';

export const RotatingTestimonial = ({ items, isDark, name, role }: { items: string[], isDark: boolean, name: string, role: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className={`p-8 md:p-10 rounded-[2rem] border-2 ${isDark ? 'border-white/5 bg-zinc-900/30' : 'border-black/5 bg-neutral-50'} relative min-h-[220px] md:min-h-[280px] flex flex-col justify-between transition-all duration-500`}>
      <p className={`text-lg md:text-2xl font-bold italic mb-6 leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}>
        "<ScrambledText text={items[index]} />"
      </p>
      <div>
        <p className="text-[#22c55e] font-black uppercase tracking-widest italic">{name}</p>
        <p className={`text-xs uppercase font-bold tracking-tight ${isDark ? 'text-white/20' : 'text-black/20'}`}>{role}</p>
      </div>
    </div>
  );
};
