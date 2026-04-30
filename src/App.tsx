import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { 
  Instagram, 
  MessageCircleMore, 
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi! GreenBox VE - Quiero informacion sobre la Prueba Gratis de 2 dias que vi en su pagina Web, me interesa!');
const INSTAGRAM_HANDLE = 'greenbox_ve';
const EMAIL_CONTACT = 'greenboxvenezuela@gmail.com';
const LOCATION_VALENCIA = 'Naguanagua, Valencia';
const ADDRESS_FULL = 'Av. Bernardino López c/ calle Salom, Naguanagua';
const MAP_LINK = 'https://maps.app.goo.gl/UovqNDRJdZoLLYax9';
const SLOGAN = "Tu box verde 💚";
const MISSION = "Salud física, fortaleza mental y comunidad.";

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
    q: "¿Qué es GreenBox VE?",
    a: "Somos un Centro de CrossFit especializado en Valencia donde no importa tu edad ni tu experiencia. El camino empieza aquí \"En tú Box verde 💚\""
  },
  {
    q: "¿Cómo son Nuestras Clases?",
    a: "Nuestras clases están diseñadas para todas las edades y niveles de condición física. No importa si eres principiante o un atleta experimentado, aquí encontrarás un espacio funcional y motivador donde cada uno puede desafiarse a sí mismo 💚."
  },
  {
    q: "¿Dan días de Prueba?",
    a: "¡Sí! Te regalamos Dos días de prueba para que puedas disfrutarlos Completamente Gratis."
  },
  {
    q: "¿Hay competencias en GreenBox?",
    a: "¡Sí! Hacemos competencias donde tenemos Sponsors de Alimentación saludable (Yogurt, Barras de Proteína, Empanadas, Implementos deportivos, Ropa deportiva, Pizzas y más!). No es solo una competencia, es para agradecer esta maravillosa familia Green Box. Juntos, seguimos creciendo y creando momentos inolvidables. 💚"
  }
];

// Imagen de horarios
const SCHEDULE_IMAGE_URL = "https://i.ibb.co/zVppVcgv/horarios.png";

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

const PLANS = [
  {
    name: "Green Base",
    price: "35",
    features: ["Acceso horario AM", "Entrenador de piso", "App de seguimiento", "Wifi & Hidratación"],
    recommended: false
  },
  {
    name: "Box Pro",
    price: "55",
    features: ["Acceso ilimitado", "Todas las clases grupales", "1 Clase especial/mes", "Evaluación física mensual"],
    recommended: true
  },
  {
    name: "Elite VIP",
    price: "85",
    features: ["Acceso 24/7", "Entrenador personal 1h/sem", "Plan nutricional", "Toallas & Café ilimitado"],
    recommended: false
  }
];

const COACHES = [
  {
    name: "Marco 'The Rock' Silva",
    role: "Head Coach - Funcional",
    image: "/coaches/coach1.png",
    motto: "La técnica es la madre de la fuerza."
  },
  {
    name: "Elena 'Zen' Ramos",
    role: "Mobility & Yoga",
    image: "/coaches/coach2.png",
    motto: "Un cuerpo móvil es un cuerpo eterno."
  }
];

const TESTIMONIALS = [
  {
    name: "Andrés G.",
    text: "GreenBox cambió mi forma de ver el ejercicio. No es solo sudar, es aprender a moverte bien.",
    role: "Miembro hace 2 años"
  },
  {
    name: "Camila V.",
    text: "El ambiente es increíble. Los coaches te exigen pero te cuidan. ¡El Box Verde es mi segundo hogar!",
    role: "Miembro hace 6 meses"
  }
];

// --- Sub-componentes ---

const LogoSVG = ({ className = "", withText = true, isDark = true }: { className?: string, withText?: boolean, isDark?: boolean }) => (
  <div className={`flex items-center gap-2 md:gap-4 ${className}`}>
    <div className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 shrink-0 rounded-full p-1 shadow-lg border-[2px] md:border-[3px] border-[#22c55e] overflow-hidden flex items-center justify-center transition-all duration-500 ${isDark ? 'bg-white' : 'bg-black'}`}>
      <img 
        src={LOGO_URL} 
        alt="GreenBox Logo" 
        className="w-full h-full object-cover scale-110"
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
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
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
            <h1 className="text-[clamp(2.5rem,12vw,9rem)] font-black leading-[0.9] tracking-tighter mb-8 italic uppercase text-white shadow-text px-2">
              SÉ <span className="text-[#1a8d3c]">FUERTE</span>
            </h1>
            <p className="text-xs sm:text-lg md:text-2xl text-white/60 font-black uppercase tracking-[0.1em] md:tracking-widest mb-12 max-w-3xl mx-auto italic px-4 leading-relaxed">
              Box Funcional Premium • {LOCATION_VALENCIA}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center px-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#22c55e] text-white px-8 md:px-14 py-5 md:py-6 font-black uppercase text-sm md:text-xl tracking-widest transition-all hover:bg-white hover:text-black active:scale-95 flex items-center justify-center gap-4 shadow-2xl"
              >
                PRUEBA GRATIS <ArrowRight className="animate-pulse" size={20} />
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
        <div className={`${isDark ? 'bg-[#1a8d3c]' : 'bg-[#22c55e]'} p-8 sm:p-14 lg:p-24 xl:p-32 flex flex-col justify-center transition-colors duration-500 relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black mb-6 italic leading-[0.85] text-black uppercase tracking-tighter relative z-10">
            TU CUERPO <br /> <span className="drop-shadow-sm">TU REGLAS.</span>
          </h2>
          <p className="text-black/80 text-sm sm:text-lg md:text-xl font-bold italic mb-10 max-w-lg uppercase tracking-tight relative z-10 leading-tight">
            Valencia tiene un nuevo estándar. Entrenamiento funcional intenso para los que no se conforman con lo básico.
          </p>
          <div className="hidden lg:block relative z-10">
            <p className="text-black font-black uppercase tracking-[0.2em] text-[10px] italic opacity-40">
              Desliza para explorar la experiencia GreenBox
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-full overflow-hidden">
          <img 
            src={GRID_IMAGE} 
            className={`absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale ${isDark ? 'opacity-30' : 'opacity-60'} transition-opacity duration-500`}
            alt="Gym Box Training"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent opacity-40'} transition-all`} />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-[80%]">
            <h3 className="text-xl md:text-4xl font-black italic uppercase text-[#22c55e] mb-2 drop-shadow-lg">{SLOGAN}</h3>
            <h3 className={`text-xl md:text-5xl font-black italic uppercase ${isDark ? 'text-white' : 'text-black'} tracking-tighter transition-colors drop-shadow-xl leading-[0.9]`}>CALIDAD • VALORES • RESULTADOS</h3>
          </div>
        </div>
      </section>

      {/* Benefits Interactive Carousel */}
      <section className={`py-12 md:py-32 ${isDark ? 'bg-zinc-900/30' : 'bg-neutral-50'} border-y ${isDark ? 'border-white/5' : 'border-black/5'} overflow-hidden transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-20 gap-8">
            <div className="text-left">
              <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[8px] sm:text-[10px] mb-4 block italic drop-shadow-sm">Inspiración GreenBox</span>
              <h2 className={`text-[clamp(2rem,6vw,5rem)] font-black italic uppercase tracking-tighter leading-[0.9] transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                VENTAJA <span className="text-[#22c55e]">GREENBOX</span>
              </h2>
            </div>
            <div className="flex gap-4 self-end md:self-auto">
              <button 
                onClick={() => setBenefitIndex(prev => (prev - 1 + BENEFITS.length) % BENEFITS.length)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'} flex items-center justify-center hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-all shadow-lg active:scale-90`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setBenefitIndex(prev => (prev + 1) % BENEFITS.length)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'} flex items-center justify-center hover:bg-[#22c55e] hover:border-[#22c55e] hover:text-black transition-all shadow-lg active:scale-90`}
              >
                <ChevronRight size={24} />
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

          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-6 bg-[#22c55e] opacity-10 blur-3xl rounded-[4rem] group-hover:opacity-20 transition-opacity duration-700" />
            <div className={`relative border-2 md:border-[12px] ${isDark ? 'border-zinc-800' : 'border-black'} bg-black shadow-2xl overflow-hidden rounded-[1.5rem] md:rounded-[3rem]`}>
               <img 
                 src={SCHEDULE_IMAGE_URL} 
                 className="w-full h-auto block hover:scale-[1.03] transition-transform duration-1000 ease-out max-h-[85vh] object-contain"
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

      {/* Pricing Section */}
      <section id="planes" className={`py-20 md:py-32 ${isDark ? 'bg-zinc-950' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 block italic">Elige tu destino</span>
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
              PLANES DE <br /> <span className="text-[#22c55e]">MEMBRESÍA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {PLANS.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col ${
                  plan.recommended 
                    ? 'border-[#22c55e] bg-[#22c55e]/5 shadow-[0_30px_100px_rgba(34,197,94,0.1)] lg:scale-105 z-10' 
                    : (isDark ? 'border-white/5 bg-zinc-900/50' : 'border-black/5 bg-neutral-50')
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22c55e] text-black px-5 py-1 rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-widest italic shadow-xl whitespace-nowrap">
                    Recomendado
                  </div>
                )}
                <h3 className={`text-xl sm:text-2xl md:text-4xl font-black italic uppercase mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-black text-[#22c55e]">${plan.price}</span>
                  <span className={`text-xs md:text-sm font-bold uppercase ${isDark ? 'text-white/40' : 'text-black/40'}`}>/ Mes</span>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <Zap size={14} className="text-[#22c55e] shrink-0 mt-0.5" />
                      <span className={`text-[11px] md:text-sm font-bold uppercase italic tracking-tight ${isDark ? 'text-white/60' : 'text-black/60'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(`Hola! Quiero el plan ${plan.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-[11px] md:text-sm transition-all text-center block ${
                    plan.recommended 
                      ? 'bg-[#22c55e] text-black hover:bg-white hover:text-black shadow-lg shadow-[#22c55e]/20' 
                      : (isDark ? 'bg-white text-black hover:bg-[#22c55e] hover:text-white' : 'bg-black text-[#22c55e] hover:bg-[#22c55e] hover:text-white')
                  }`}
                >
                  Seleccionar
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className={`py-20 md:py-32 ${isDark ? 'bg-[#050505]' : 'bg-neutral-50'} transition-colors duration-500 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="text-left">
              <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block italic">El Corazón del Box</span>
              <h2 className={`text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] ${isDark ? 'text-white' : 'text-black'}`}>
                NUESTROS <span className="text-[#22c55e]">COACHES</span>
              </h2>
            </div>
            <p className={`max-w-md italic font-bold text-sm md:text-lg ${isDark ? 'text-white/40' : 'text-black/40'} leading-tight`}>
              Expertos en transformar límites en hitos. No solo te entrenan, te guían hacia tu mejor versión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            {COACHES.map((coach, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border-4 ${isDark ? 'border-white/5 bg-zinc-900' : 'border-black/5 bg-white'} shadow-2xl`}
              >
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 sm:p-8 md:p-12 relative">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black italic uppercase text-[#22c55e] mb-1 leading-tight">{coach.name}</h3>
                  <p className={`text-[10px] sm:text-xs md:text-lg font-black uppercase tracking-widest italic mb-4 md:mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>{coach.role}</p>
                  <div className={`p-4 rounded-2xl ${isDark ? 'bg-black/40' : 'bg-neutral-100'} border-l-4 border-[#22c55e] italic`}>
                    <p className={`text-xs sm:text-sm md:text-base font-bold ${isDark ? 'text-white/40' : 'text-black/40'}`}>"{coach.motto}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 md:py-32 ${isDark ? 'bg-zinc-950' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-24 -left-12 text-[#22c55e]/10 text-[20rem] font-black italic pointer-events-none select-none">"</div>
              <h2 className={`text-4xl md:text-7xl font-black italic uppercase leading-none tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
                LO QUE DICE <br /> <span className="text-[#22c55e]">LA COMUNIDAD</span>
              </h2>
              <div className="flex gap-4">
                {[1,2,3,4,5].map(s => <Zap key={s} size={20} className="text-[#22c55e] fill-[#22c55e]" />)}
              </div>
            </div>
            
            <div className="space-y-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className={`p-8 md:p-10 rounded-[2rem] border-2 ${isDark ? 'border-white/5 bg-zinc-900/30' : 'border-black/5 bg-neutral-50'} relative`}
                >
                  <p className={`text-lg md:text-2xl font-bold italic mb-6 leading-relaxed ${isDark ? 'text-white/80' : 'text-black/80'}`}>"{t.text}"</p>
                  <div>
                    <p className="text-[#22c55e] font-black uppercase tracking-widest italic">{t.name}</p>
                    <p className={`text-xs uppercase font-bold tracking-tight ${isDark ? 'text-white/20' : 'text-black/20'}`}>{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className={`py-12 md:py-20 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} transition-colors duration-500`}>
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
              CHAT EN VIVO <MessageCircleMore size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* New "How to Get There" Section */}
      <section className={`py-16 md:py-32 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} transition-colors duration-500 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              COMO LLEGAR A <br className="md:hidden" /> <span className="text-[#22c55e]">TÚ GREENBOX 💚</span>
            </h2>
            <p className={`${isDark ? 'text-white/40' : 'text-black/40'} font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] md:text-sm italic`}>
              Sigue nuestra ruta y llega directo al éxito
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-4 bg-[#22c55e] opacity-10 blur-3xl rounded-[2rem] md:rounded-[4rem] group-hover:opacity-20 transition-opacity duration-700" />
            <div className={`relative border-4 md:border-[12px] ${isDark ? 'border-zinc-900 bg-black' : 'border-black bg-neutral-100'} shadow-2xl overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-video sm:aspect-auto`}>
              <video 
                controls 
                className="w-full h-full sm:h-auto block max-h-[70vh] object-cover sm:object-contain"
                poster={HERO_IMAGE}
              >
                <source src="/ComoLlegar.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
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
                  <MessageCircleMore size={18} />
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
                 {ADDRESS_FULL}, <br/>
                 Naguanagua, Edo. Carabobo.
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

      {/* Sponsors Strip (Inspired by Example) */}
      <div className={`py-8 border-t ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-neutral-50 border-black/5'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-700">
          <a 
            href="https://instagram.com/brissport" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <img src="/brissport.jpg" alt="Brissport" className="h-8 md:h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
            <div className="text-center">
              <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>BRISSPORT</p>
              <p className="text-[8px] font-bold text-[#22c55e] uppercase tracking-tighter italic">Implementos Deportivos</p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Footer (GreenBox Style) */}
      <footer className={`py-16 md:py-24 border-t transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-white border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center mb-20">
            {/* Column 1: Navigation Links */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <a href="#faqs" className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#22c55e] transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>Preguntas frecuentes</a>
              <a href={`mailto:${EMAIL_CONTACT}`} className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#22c55e] transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>Contacto: {EMAIL_CONTACT}</a>
              <a href="#contacto" className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#22c55e] transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>Sede Naguanagua</a>
            </div>

            {/* Column 2: Social Media Circles */}
            <div className="flex justify-center gap-5">
              {[
                { icon: <Instagram size={20} />, href: `https://instagram.com/${INSTAGRAM_HANDLE}`, label: "Instagram" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 border ${
                    isDark 
                      ? 'bg-zinc-900/50 border-white/5 text-white hover:bg-[#22c55e] hover:text-black hover:border-[#22c55e] shadow-lg hover:shadow-[#22c55e]/20' 
                      : 'bg-neutral-50 border-black/5 text-black hover:bg-[#22c55e] hover:text-white hover:border-[#22c55e] shadow-sm'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Column 3: Brand Logo */}
            <div className="flex justify-center md:justify-end">
              <LogoSVG isDark={isDark} className="scale-75 md:scale-100" />
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-10 border-t border-white/5 text-center">
            <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] italic transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`}>
              © {new Date().getFullYear()} GREENBOX FITNESS CLUBS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#22c55e] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group animate-bounce-slow"
        title="Contáctanos por WhatsApp"
      >
        <MessageCircleMore size={28} className="md:size-32" />
        <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  );
}
