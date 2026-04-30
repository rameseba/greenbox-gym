import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  Menu,
  X,
  MapPin,
  Mail,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Zap,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';

// --- Constantes ---
const PRIMARY_GREEN = '#22c55e'; // Verde más vibrante y representativo del logo
const WHATSAPP_NUMBER = '+584122753272'; 
const WHATSAPP_MESSAGE = encodeURIComponent('¡Hola Green Box! Quiero más información.');
const INSTAGRAM_HANDLE = 'greenbox_ve';
const EMAIL_CONTACT = 'greenboxvenezuela@gmail.com';
const LOCATION_VALENCIA = 'Valencia, Venezuela';
const MAP_LINK = 'https://maps.app.goo.gl/UovqNDRJdZoLLYax9';
const SLOGAN = "Tu box verde 💚";

// Imágenes de Unsplash con IDs robustos
const HERO_IMAGE = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop";
const GRID_IMAGE = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop";
const LOGO_URL = "https://i.ibb.co/PvkdX4JJ/1777485361988-edit-27623999535971.png";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200",
  "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1200"
];

const MAP_PREVIEW = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop";

const FAQS = [
  {
    q: "¿Qué es GreenBox?",
    a: "GreenBox es un box de entrenamiento funcional premium en Valencia, enfocado en la técnica correcta, la salud integral y el espíritu de comunidad. No somos solo un gimnasio, somos tu espacio para evolucionar."
  },
  {
    q: "¿Necesito experiencia previa para entrenar?",
    a: "Para nada. Nuestros entrenadores adaptan cada rutina a tu nivel de capacidad actual. Ya seas un atleta experimentado o estés empezando desde cero, el Box Verde es para ti."
  },
  {
    q: "¿Cómo reservo mi cupo?",
    a: "Es muy sencillo. Solo debes completar el formulario de inscripción que está arriba o contactarnos vía WhatsApp. Debido a nuestra atención personalizada, los cupos por hora son limitados."
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con un área segura para que puedas dejar tu vehículo mientras te enfocas al 100% en tu entrenamiento."
  },
  {
    q: "¿Cuál es la edad mínima para entrenar?",
    a: "Nuestros programas están diseñados para mayores de 15 años. Para menores de edad, se requiere la autorización firmada por su representante legal."
  }
];

// Imagen de horarios
const SCHEDULE_IMAGE_URL = "https://i.ibb.co/mVhRCYVK/com-instagram-android-20260429162737.png";

const BENEFITS = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Resultados Reales",
    desc: "Programas diseñados para maximizar tu progreso basándonos en técnica pura."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Comunidad Box",
    desc: "Un ambiente de motivación donde cada repetición cuenta."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Eco-Friendly",
    desc: "Tu box verde, comprometidos con tu salud y el entorno."
  }
];

// --- Sub-componentes ---

const LogoSVG = ({ className = "", withText = true, isDark = true }: { className?: string, withText?: boolean, isDark?: boolean }) => (
  <div className={`flex items-center gap-3 md:gap-5 ${className}`}>
    <div className={`relative w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full p-1 shadow-lg border-[3px] md:border-[4px] border-[#22c55e] overflow-hidden flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-white' : 'bg-black'}`}>
      <img 
        src={LOGO_URL} 
        alt="GreenBox Logo" 
        className="w-full h-full object-cover scale-110"
      />
    </div>
    {withText && (
      <div className="flex flex-col">
        <h2 className={`text-2xl md:text-5xl font-black italic tracking-tighter leading-none transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
          GREEN<span className="text-[#22c55e]">BOX</span>
        </h2>
        <span className={`text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mt-1 italic transition-colors duration-500 ${isDark ? 'text-[#22c55e]' : 'text-neutral-500'}`}>
          {SLOGAN}
        </span>
      </div>
    )}
  </div>
);

const FAQItem: React.FC<{ q: string; a: string; isDark: boolean }> = ({ q, a, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-3 overflow-hidden rounded-2xl border transition-all duration-300 ${
      isOpen 
        ? (isDark ? 'bg-neutral-900/50 border-[#22c55e]/30 shadow-lg' : 'bg-white border-[#22c55e]/30 shadow-md')
        : (isDark ? 'bg-neutral-900/20 border-white/5 hover:border-white/10' : 'bg-neutral-50/50 border-neutral-100 hover:border-neutral-200')
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 group"
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

const ImageCarousel = () => {
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
        <motion.img
          key={index}
          src={CAROUSEL_IMAGES[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20">
        <p className="text-[#1a8d3c] font-black italic uppercase text-[10px] md:text-sm tracking-widest mb-2">Instalaciones Premium</p>
        <p className="text-2xl md:text-6xl font-black italic uppercase text-white tracking-tighter shadow-text">VIDA EN EL BOX</p>
      </div>
    </div>
  );
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
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
    } ${isScrolled ? 'py-3' : 'py-6 md:py-10'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
        <LogoSVG 
          isDark={isScrolled ? isDark : true} 
          withText={true} 
          className={`transition-all duration-500 ${isScrolled ? 'scale-[0.5] md:scale-[0.65] origin-left' : 'scale-[0.7] md:scale-100 origin-left'}`} 
        />

        <div className="hidden lg:flex items-center gap-10">
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
          <div className="flex items-center gap-6">
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
              className={`bg-[#22c55e] text-black px-8 py-3 rounded-full font-black uppercase text-sm hover:scale-105 transition-all tracking-wider shadow-lg shadow-[#22c55e]/20`}
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
                 <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors"><MessageCircle size={36} /></a>
               </div>
               <p className="text-[#1a8d3c] font-black italic uppercase tracking-[0.3em] text-sm">{SLOGAN}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    correo: ''
  });

  const toggleTheme = () => setIsDark(!isDark);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const { cedula, nombre, apellido, correo } = formData;
    if (!cedula || !nombre || !apellido || !correo) return;

    const message = `*NUEVA INSCRIPCIÓN GREENBOX*\n\n` +
      `*Cédula:* ${cedula}\n` +
      `*Nombre:* ${nombre}\n` +
      `*Apellido:* ${apellido}\n` +
      `*Correo:* ${correo}\n\n` +
      `Hola, me gustaría formalizar mi inscripción.`;
    
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'} selection:bg-[#22c55e] selection:text-black overflow-x-hidden font-sans transition-colors duration-700`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={HERO_IMAGE} 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale-[40%]"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black leading-[1] md:leading-[0.8] tracking-tighter mb-8 italic uppercase text-white shadow-text px-2">
              SÉ <span className="text-[#1a8d3c]">FUERTE</span>
            </h1>
            <p className="text-xs sm:text-lg md:text-2xl text-white/60 font-black uppercase tracking-[0.1em] md:tracking-widest mb-12 max-w-2xl mx-auto italic px-4 leading-relaxed">
              Box Funcional Premium • {LOCATION_VALENCIA}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center px-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#22c55e] text-white px-8 md:px-14 py-5 md:py-6 font-black uppercase text-sm md:text-xl tracking-widest transition-all hover:bg-white hover:text-black active:scale-95 flex items-center justify-center gap-4 shadow-2xl"
              >
                Prueba Gratis <ArrowRight className="animate-pulse" size={20} />
              </a>
              <a 
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white/50 font-black uppercase tracking-widest text-[10px] md:text-sm hover:text-[#22c55e] transition-all py-2"
              >
                <Instagram size={24} /> @{INSTAGRAM_HANDLE}
              </a>
            </div>
            <p className="mt-16 text-[#22c55e] font-black italic uppercase tracking-[0.4em] text-[10px] md:text-xs">
              {SLOGAN}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <section className={`py-0 grid lg:grid-cols-2 ${isDark ? 'bg-zinc-950' : 'bg-white'} transition-colors duration-500`}>
        <div className={`${isDark ? 'bg-[#1a8d3c]' : 'bg-[#22c55e]'} p-8 sm:p-14 lg:p-24 flex flex-col justify-center transition-colors duration-500 relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 italic leading-[0.85] text-black uppercase tracking-tighter relative z-10">
            TU CUERPO <br /> <span className="drop-shadow-sm">TU REGLAS.</span>
          </h2>
          <p className="text-black/80 text-sm sm:text-xl font-bold italic mb-10 max-w-md uppercase tracking-tight relative z-10 leading-tight">
            Valencia tiene un nuevo estándar. Entrenamiento funcional intenso para los que no se conforman con lo básico.
          </p>
          <div className="hidden lg:block relative z-10">
            <p className="text-black font-black uppercase tracking-[0.2em] text-[10px] italic opacity-40">
              Desliza para explorar la experiencia GreenBox
            </p>
          </div>
        </div>
        <div className="relative min-h-[450px] lg:min-h-full overflow-hidden">
          <img 
            src={GRID_IMAGE} 
            className={`absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale ${isDark ? 'opacity-30' : 'opacity-60'} transition-opacity duration-500`}
            alt="Gym Box Training"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent opacity-40'} transition-all`} />
          <div className="absolute bottom-12 left-12">
            <h3 className="text-2xl md:text-4xl font-black italic uppercase text-[#22c55e] mb-2 drop-shadow-lg">{SLOGAN}</h3>
            <h3 className={`text-2xl md:text-5xl font-black italic uppercase ${isDark ? 'text-white' : 'text-black'} tracking-tighter transition-colors drop-shadow-xl`}>CALIDAD • VALORES • RESULTADOS</h3>
          </div>
        </div>
      </section>

      {/* Benefits Interactive Carousel */}
      <section className={`py-12 md:py-32 ${isDark ? 'bg-zinc-900/30' : 'bg-neutral-50'} border-y ${isDark ? 'border-white/5' : 'border-black/5'} overflow-hidden transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-20 gap-6">
            <div className="text-left">
              <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 block italic drop-shadow-sm">Inspiración GreenBox</span>
              <h2 className={`text-3xl md:text-8xl font-black italic uppercase tracking-tighter leading-none transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                VENTAJA <span className="text-[#22c55e]">GREENBOX</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setBenefitIndex(prev => (prev - 1 + BENEFITS.length) % BENEFITS.length)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'} flex items-center justify-center hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-all`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setBenefitIndex(prev => (prev + 1) % BENEFITS.length)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'} flex items-center justify-center hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-all`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[300px] md:min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={benefitIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className="flex flex-col items-start text-left">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-[#22c55e] rounded-2xl flex items-center justify-center text-black mb-6 md:mb-8 shadow-xl">
                    {React.cloneElement(BENEFITS[benefitIndex].icon as React.ReactElement, { size: 28 })}
                  </div>
                  <h3 className={`text-2xl md:text-5xl font-black italic uppercase mb-4 md:mb-6 tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                    {BENEFITS[benefitIndex].title}
                  </h3>
                  <p className={`font-medium text-base md:text-xl leading-relaxed max-w-xl italic transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                    {BENEFITS[benefitIndex].desc}
                  </p>
                </div>
                <div className="hidden md:block relative group">
                   <div className={`absolute inset-0 ${isDark ? 'bg-[#22c55e]/5' : 'bg-[#22c55e]/10'} blur-[100px] rounded-full transition-all group-hover:bg-[#22c55e]/20`} />
                   <div className={`relative z-10 border-4 ${isDark ? 'border-white/5 bg-neutral-900/80' : 'border-black/5 bg-white/80'} p-10 rounded-3xl backdrop-blur-md transition-colors duration-500`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                        <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                      </div>
                      <p className={`${isDark ? 'text-white/40' : 'text-black/40'} font-mono text-[10px] uppercase tracking-widest leading-loose`}>
                        // Protocolo GreenBox v5.0 <br/>
                        // Estado: {BENEFITS[benefitIndex].title} <br/>
                        // {SLOGAN} <br/>
                        // Valencia, Carabobo
                      </p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horarios" className={`py-12 md:py-20 ${isDark ? 'bg-zinc-950' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-16 text-center">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 block italic">Organiza tu semana</span>
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
              NUESTROS <br /> <span className="text-[#22c55e] drop-shadow-sm">HORARIOS</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-6 bg-[#22c55e] opacity-10 blur-3xl rounded-[4rem] group-hover:opacity-20 transition-opacity duration-700" />
            <div className={`relative border-4 md:border-[12px] ${isDark ? 'border-zinc-800' : 'border-black'} bg-black shadow-2xl overflow-hidden rounded-[2rem] md:rounded-[3rem]`}>
               <img 
                 src={SCHEDULE_IMAGE_URL} 
                 className="w-full h-auto block hover:scale-[1.03] transition-transform duration-1000 ease-out"
                 alt="Horarios Oficiales GreenBox"
               />
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
            <div className={`${isDark ? 'bg-zinc-900 shadow-[0_20px_80px_rgba(0,0,0,0.8)] border-white/5' : 'bg-white shadow-[0_20px_60px_rgba(34,197,94,0.1)] border-neutral-100'} rounded-[2rem] p-8 md:p-14 border transition-all duration-700 relative overflow-hidden`}>
              <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
                <LogoSVG isDark={isDark} withText={false} className="scale-[3] rotate-12" />
              </div>
              
              <div className="mb-10 text-center md:text-left relative z-10">
                <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[9px] mb-2 block italic">Únete al Clú de la Fuerza</span>
                <h3 className={`text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none ${isDark ? 'text-white' : 'text-black'}`}>
                  QUIERO <br /> <span className="text-[#22c55e]">INSCRIBIRME</span>
                </h3>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4 italic">Cédula</label>
                    <input 
                      type="number" 
                      required
                      placeholder="Número de identidad"
                      className={`w-full px-6 py-4 rounded-full ${isDark ? 'bg-neutral-800 focus:bg-neutral-700 text-white' : 'bg-neutral-50 focus:bg-white text-black'} border-2 border-transparent focus:border-[#22c55e] font-bold outline-none transition-all placeholder:text-neutral-500`}
                      value={formData.cedula}
                      onChange={(e) => setFormData({...formData, cedula: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4 italic">Nombre</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Tu nombre"
                      className={`w-full px-6 py-4 rounded-full ${isDark ? 'bg-neutral-800 focus:bg-neutral-700 text-white' : 'bg-neutral-50 focus:bg-white text-black'} border-2 border-transparent focus:border-[#22c55e] font-bold outline-none transition-all placeholder:text-neutral-500`}
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, '')})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4 italic">Apellido</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Tu apellido"
                      className={`w-full px-6 py-4 rounded-full ${isDark ? 'bg-neutral-800 focus:bg-neutral-700 text-white' : 'bg-neutral-50 focus:bg-white text-black'} border-2 border-transparent focus:border-[#22c55e] font-bold outline-none transition-all placeholder:text-neutral-500`}
                      value={formData.apellido}
                      onChange={(e) => setFormData({...formData, apellido: e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, '')})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-4 italic">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      placeholder="ejemplo@correo.com"
                      className={`w-full px-6 py-4 rounded-full ${isDark ? 'bg-neutral-800 focus:bg-neutral-700 text-white' : 'bg-neutral-50 focus:bg-white text-black'} border-2 border-transparent focus:border-[#22c55e] font-bold outline-none transition-all placeholder:text-neutral-500`}
                      value={formData.correo}
                      onChange={(e) => setFormData({...formData, correo: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className={`w-full ${isDark ? 'bg-white text-black hover:bg-[#22c55e] hover:text-white' : 'bg-black text-[#22c55e] hover:bg-[#22c55e] hover:text-white'} py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all shadow-xl active:scale-[0.98] mt-4 italic`}
                >
                  Confirmar Inscripción
                </button>
                
                <p className="text-[9px] text-center font-black uppercase text-neutral-300 tracking-widest italic">
                  * Serás redirigido a WhatsApp para finalizar el proceso con un asesor técnico.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section (Automatic Carousel) */}
      <section id="nosotros" className={`py-8 md:py-16 ${isDark ? 'bg-[#050505]' : 'bg-white'} overflow-hidden border-y border-black/5 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-14 relative">
            <h2 className={`text-6xl md:text-[10rem] font-black uppercase italic leading-none ${isDark ? 'text-white/5' : 'text-black/5'} absolute left-1/2 -translate-x-1/2 -top-6 md:-top-16 z-0 transition-colors`}>COMUNIDAD</h2>
            <h3 className={`relative z-10 text-4xl md:text-7xl font-black italic uppercase ${isDark ? 'text-white' : 'text-black'} mb-2 transition-colors`}>MÁS QUE UN <span className="text-[#22c55e]">BOX</span></h3>
            <p className={`${isDark ? 'text-white/40' : 'text-black/40'} font-black uppercase tracking-[0.5em] text-[9px] md:text-xs italic transition-colors`}>{SLOGAN}</p>
          </div>
          
          <ImageCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-12 md:py-20 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block italic">Centro de Ayuda</span>
            <h2 className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none ${isDark ? 'text-white' : 'text-black'}`}>
              PREGUNTAS <span className="text-[#22c55e]">FRECUENTES</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} isDark={isDark} />
            ))}
          </div>

          <div className={`mt-12 p-6 md:p-8 border-2 ${isDark ? 'border-[#22c55e]/20 bg-neutral-900' : 'border-neutral-100 bg-neutral-50'} rounded-3xl text-center transition-all duration-500`}>
            <p className={`font-black italic uppercase text-lg md:text-xl mb-4 ${isDark ? 'text-white' : 'text-black'}`}>¿TIENES OTRA PREGUNTA?</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent('Hola, tengo una pregunta sobre el Box.')}`}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-3 ${isDark ? 'bg-[#22c55e] text-white' : 'bg-black text-[#22c55e]'} px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all`}
            >
              CHAT EN VIVO <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Location Section (Compact & Refined) */}
      <section id="contacto" className={`py-12 md:py-16 ${isDark ? 'bg-zinc-950' : 'bg-neutral-50'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="px-2">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block italic">Contacto Directo</span>
            <h2 className={`text-3xl sm:text-5xl md:text-6xl font-black italic uppercase leading-none mb-8 tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
              VISÍTANOS <br /> <span className="text-[#22c55e]">AQUÍ</span>
            </h2>
            
            <div className="space-y-4 max-w-md">
              <div className="flex gap-4 items-center">
                <div className={`w-10 h-10 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} flex items-center justify-center shrink-0 rounded-lg shadow-sm`}>
                  <Mail size={18} />
                </div>
                <div>
                   <p className={`text-base md:text-lg font-black italic uppercase tracking-tighter leading-none mb-0.5 ${isDark ? 'text-white' : 'text-black'}`}>EMAIL</p>
                   <a href={`mailto:${EMAIL_CONTACT}`} className="text-neutral-400 font-bold uppercase text-[9px] tracking-widest hover:text-[#22c55e] transition-colors">{EMAIL_CONTACT}</a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 border-2 border-[#22c55e] flex items-center justify-center text-[#22c55e] shrink-0 rounded-lg">
                  <MessageCircle size={18} />
                </div>
                <div>
                   <p className={`text-base md:text-lg font-black italic uppercase tracking-tighter leading-none mb-0.5 ${isDark ? 'text-white' : 'text-black'}`}>WHATSAPP</p>
                   <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer" className="text-neutral-400 font-bold uppercase text-[10px] tracking-widest hover:text-[#22c55e] transition-colors">{WHATSAPP_NUMBER}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group max-w-lg mx-auto lg:mx-0">
             <div className="absolute inset-2 -right-2 -bottom-2 bg-[#22c55e] transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-2xl opacity-50" />
             <div className={`relative border-2 ${isDark ? 'border-white/5 bg-zinc-900' : 'border-black/5 bg-white'} p-6 md:p-10 rounded-2xl shadow-2xl transition-all duration-500`}>
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-[#22c55e]/10 rounded-full flex items-center justify-center text-[#22c55e]">
                   <MapPin size={20} />
                 </div>
                 <h3 className="text-[#22c55e] font-black italic uppercase text-xl md:text-2xl leading-none">
                   UBICACIÓN <br className="md:hidden" /> GREENBOX 💚
                 </h3>
               </div>
               
               <p className={`font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-8 leading-relaxed ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                 Av. 101 C. Real de los Sauces, <br/>
                 Valencia, Carabobo.
               </p>

               <a 
                 href={MAP_LINK}
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-[#22c55e] text-black px-6 py-3.5 rounded-xl font-black uppercase text-xs md:text-sm tracking-widest hover:scale-[1.02] active:scale-95 transition-all w-full shadow-lg shadow-[#22c55e]/20 group/btn"
               >
                 <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                    <img src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png" className="w-full h-full object-contain" alt="G-Maps" />
                 </div>
                 <span>COMO LLEGAR</span>
                 <ExternalLink size={16} className="opacity-40" />
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Compact & Refined Footer */}
      <footer className={`py-6 md:py-8 border-t transition-colors duration-500 ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <LogoSVG 
            isDark={isDark} 
            className="scale-50 md:scale-[0.6] origin-center md:origin-left" 
            withText 
          />
          
          <div className="flex items-center gap-6">
            <a 
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`} 
              target="_blank" 
              rel="noreferrer" 
              className={`text-sm font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 ${isDark ? 'text-white/40 hover:text-[#22c55e]' : 'text-black/40 hover:text-[#22c55e]'}`}
            >
              <Instagram size={16} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            
            <div className={`h-4 w-px ${isDark ? 'bg-white/10' : 'bg-black/10'} hidden md:block`} />
            
            <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`}>
              &copy; {new Date().getFullYear()} GREENBOX GYM. VALENCIA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
