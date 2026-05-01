import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ModernImage } from './ModernImage';

const CAROUSEL_IMAGES = [
  "/1.jpg",
  "/2.jpg",
  "/5.jpg"
];

export const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-none shadow-2xl border-y-4 md:border-4 border-black group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <ModernImage 
            src={CAROUSEL_IMAGES[index]} 
            alt="Vida en el Box" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20">
        <p className="text-[#1a8d3c] font-black italic uppercase text-[10px] md:text-sm tracking-widest mb-2">Instalaciones Premium</p>
        <p className="text-2xl md:text-6xl font-black italic uppercase text-white tracking-tighter shadow-text">VIDA EN EL BOX</p>
      </div>
    </div>
  );
};
