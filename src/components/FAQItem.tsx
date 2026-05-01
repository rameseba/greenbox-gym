import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({ q, a, isDark }: { q: string, a: string, isDark: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-3 overflow-hidden rounded-2xl border transition-all duration-300 ${
      isOpen 
        ? (isDark ? 'bg-neutral-900/50 border-[#22c55e]/30 shadow-lg' : 'bg-white border-[#22c55e]/30 shadow-md')
        : (isDark ? 'bg-neutral-900/20 border-white/5 hover:border-white/10' : 'bg-neutral-50/50 border-neutral-100 hover:border-neutral-200')
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 group focus-visible:ring-2 focus-visible:ring-[#22c55e] outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
          isOpen ? 'text-[#22c55e]' : (isDark ? 'text-white/80' : 'text-black/80')
        }`}>
          {q}
        </span>
        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-[#22c55e] rotate-180' : 'bg-neutral-800/10'
        }`}>
          <ChevronDown size={14} className={isOpen ? 'text-black' : (isDark ? 'text-white/40' : 'text-black/40')} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className={`px-6 pb-6 text-xs md:text-sm font-medium italic leading-relaxed ${
              isDark ? 'text-white/40' : 'text-neutral-500'
            }`}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
