import React from 'react';

interface ModernImageProps {
  src: string; // Ruta base con o sin extensión
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
  mobile?: boolean;
}

/**
 * Componente ModernImage
 * Intenta cargar AVIF, luego WebP y finalmente cae en el formato original.
 * Optimiza la carga de imágenes según el soporte del navegador.
 */
export const ModernImage = ({ 
  src, 
  alt, 
  className, 
  loading = "lazy", 
  fetchpriority = "auto",
  width,
  height,
  mobile = true
}: ModernImageProps) => {
  // Obtenemos la ruta base sin extensión
  const lastDotIndex = src.lastIndexOf('.');
  const baseSrc = lastDotIndex !== -1 ? src.substring(0, lastDotIndex) : src;
  
  // Definimos las rutas de los formatos modernos y versiones móviles
  const avifSrc = `${baseSrc}.avif`;
  const avifMobileSrc = `${baseSrc}-m.avif`;
  const webpSrc = `${baseSrc}.webp`;

  return (
    <picture className={className}>
      {/* Versión Móvil AVIF - Solo si se solicita explícitamente o por defecto */}
      {mobile && (
        <source 
          srcSet={`${avifMobileSrc} 600w, ${avifSrc} 1200w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
          type="image/avif" 
        />
      )}
      
      {/* Versión Escritorio AVIF */}
      <source 
        srcSet={avifSrc} 
        type="image/avif" 
      />

      
      {/* Fallback WebP */}
      <source 
        srcSet={webpSrc} 
        type="image/webp" 
      />

      <img 
        src={src} 
        alt={alt} 
        className={className} 
        loading={loading} 
        // @ts-ignore
        fetchpriority={fetchpriority}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
};
