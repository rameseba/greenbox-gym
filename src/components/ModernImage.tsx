import React from 'react';

interface ModernImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
}

export const ModernImage = ({ src, alt, className, loading = "lazy", fetchpriority = "auto" }: ModernImageProps) => {
  // Asumimos que si tenemos image.jpg, también tendremos image.webp y image.avif
  const baseSrc = src.substring(0, src.lastIndexOf('.'));
  const webpSrc = `${baseSrc}.webp`;
  const avifSrc = `${baseSrc}.avif`;

  return (
    <picture className={className}>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={loading} 
        // @ts-ignore - fetchpriority is supported in modern browsers but maybe not in all type definitions yet
        fetchpriority={fetchpriority}
      />
    </picture>
  );
};
