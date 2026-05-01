import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, Instagram, MessageCircleMore, Sun, Moon } from 'lucide-react';
import { LogoSVG } from './Logo';
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_MESSAGE, 
  INSTAGRAM_HANDLE, 
  SLOGAN 
} from '../constants';

export const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? (isDark ? 'bg-zinc-950/90 border-b border-white/5 backdrop-blur-md shadow-2xl' : 'bg-white/95 border-b border-neutral-200 shadow-xl') 
        : 'bg-transparent'
    } ${isScrolled ? 'py-2' : 'py-4 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <LogoSVG 
          isDark={isScrolled ? isDark : true} 
          withText={true} 
          className={`transition-all duration-500 ${isScrolled ? 'scale-[0.55] sm:scale-[0.6] origin-left' : 'scale-[0.8] sm:scale-90 origin-left'}`} 
        />

        <div className="hidden lg:flex items-center gap-8">
          {['Inicio', 'Horarios', 'Nosotros', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                isScrolled 
                  ? (isDark ? 'text-white/40 hover:text-[#22c55e]' : 'text-black/40 hover:text-[#22c55e]') 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? (isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5') : 'text-white hover:bg-white/10'}`}
              title={isDark ? "Modo Claro" : "Modo Oscuro"}
            >
              {isDark ? <Sun size={20} className="text-[#22c55e]" /> : <Moon size={20} />}
            </button>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className={`bg-[#22c55e] text-black px-6 py-2.5 rounded-full font-black uppercase text-sm hover:scale-105 transition-all tracking-wider shadow-lg shadow-[#22c55e]/20`}
            >
              Únete
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-500 ${isScrolled && !isDark ? 'text-black bg-neutral-200 border-black/5' : 'text-white bg-white/5 border-white/10'} border`}
          >
            {isDark ? <Sun size={20} className="text-[#22c55e]" /> : <Moon size={20} />}
          </button>
          <button 
            className={`p-3 rounded-full border transition-all duration-500 ${isScrolled && !isDark ? 'text-black bg-neutral-200 border-black/5' : 'text-white bg-white/5 border-white/10'}`} 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[100] flex flex-col p-8 md:p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <LogoSVG />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {['Inicio', 'Horarios', 'Nosotros', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl sm:text-6xl font-black text-white uppercase italic hover:text-[#1a8d3c] tracking-tighter"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-20 flex flex-col gap-8">
               <div className="flex gap-8">
                 <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors"><Instagram size={36} /></a>
                 <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors"><MessageCircleMore size={36} /></a>
               </div>
               <p className="text-[#1a8d3c] font-black italic uppercase tracking-[0.3em] text-sm">{SLOGAN}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
