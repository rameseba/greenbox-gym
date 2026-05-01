import { LOGO_URL } from '../constants';
import { ModernImage } from './ModernImage';

export const LogoSVG = ({ className = '', withText = true, isDark = true }: { className?: string, withText?: boolean, isDark?: boolean }) => (
  <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
    <div className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 shrink-0 rounded-full p-1 shadow-lg border-[2px] md:border-[3px] border-[#22c55e] overflow-hidden flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-white' : 'bg-black'}`}>
      <ModernImage 
        src={LOGO_URL} 
        alt="GreenBox Logo" 
        className="w-full h-full object-cover scale-110"
        fetchpriority="high"
        mobile={false}
      />
    </div>
    {withText && (
      <div className="flex flex-col">
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black italic tracking-tighter leading-none transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
          GREEN<span className="text-[#22c55e]">BOX</span>
        </h2>
        <span className={`text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mt-0.5 italic transition-colors duration-500 ${isDark ? 'text-[#22c55e]' : 'text-neutral-500'}`}>
          CROSSFIT • FUNCIONAL • COMUNIDAD
        </span>
      </div>
    )}
  </div>
);
