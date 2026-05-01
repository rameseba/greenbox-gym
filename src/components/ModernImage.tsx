import React from 'react';

interface ModernImageProps {
  src: string; // Ruta base con o sin extensión
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
}

/**
 * Componente ModernImage
 * Intenta cargar AVIF, luego WebP y finalmente cae en el formato original.
 * Optimiza la carga de imágenes según el soporte del navegador.
 */
export const ModernImage = ({ src, alt, className, loading = "lazy", fetchpriority = "auto" }: ModernImageProps) => {
  // Obtenemos la ruta base sin extensión
  const lastDotIndex = src.lastIndexOf('.');
  const baseSrc = lastDotIndex !== -1 ? src.substring(0, lastDotIndex) : src;
  
  // Definimos las rutas de los formatos modernos
  const avifSrc = `${baseSrc}.avif`;
  const webpSrc = `${baseSrc}.webp`;

  return (
    <picture className={className}>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={loading} 
        // @ts-ignore
        fetchpriority={fetchpriority}
      />
    </picture>
  );
};
