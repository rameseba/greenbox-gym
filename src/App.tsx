import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircleMore, 
  MapPin, 
  Mail, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Users, 
  ExternalLink 
} from 'lucide-react';

// Componentes
import { LogoSVG } from './components/Logo';
import { ScrambledText } from './components/ScrambledText';
import { TerminalStatus } from './components/TerminalStatus';
import { RotatingTestimonial } from './components/RotatingTestimonial';
import { FAQItem } from './components/FAQItem';
import { ImageCarousel } from './components/ImageCarousel';
import { Navbar } from './components/Navbar';
import { ModernImage } from './components/ModernImage';

// Constantes
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_MESSAGE, 
  INSTAGRAM_HANDLE, 
  EMAIL_CONTACT, 
  LOCATION_VALENCIA, 
  ADDRESS_FULL, 
  MAP_LINK, 
  SLOGAN, 
  HERO_IMAGE, 
  GRID_IMAGE, 
  FAQS, 
  SCHEDULE_IMAGE_URL, 
  HERO_PHRASES, 
  BENEFITS, 
  PLANS, 
  COACHES, 
  TESTIMONIALS_1, 
  TESTIMONIALS_2 
} from './constants';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    correo: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_PHRASES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ModernImage 
              src={HERO_IMAGE} 
              alt="Hero Background" 
              className="w-full h-full object-cover grayscale-[40%]"
              fetchpriority="high"
              loading="eager"
            />
          </motion.div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter mb-8 italic uppercase text-white shadow-text px-2 min-h-[1.2em] flex flex-wrap items-center justify-center gap-x-[0.3em]">
              <ScrambledText text={HERO_PHRASES[heroIndex].split(' ')[0]} />
              {HERO_PHRASES[heroIndex].split(' ').length > 1 && (
                <span className="text-[#1a8d3c]">
                  <ScrambledText text={HERO_PHRASES[heroIndex].split(' ').slice(1).join(' ')} />
                </span>
              )}
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
        </div>
        <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-full overflow-hidden">
          <ModernImage 
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

      {/* Benefits Section */}
      <section className={`py-12 md:py-32 ${isDark ? 'bg-zinc-900/30' : 'bg-neutral-50'} border-y ${isDark ? 'border-white/5' : 'border-black/5'} overflow-hidden transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-20 gap-8">
            <div className="text-left">
              <span className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-[8px] sm:text-[10px] mb-4 block italic drop-shadow-sm">Inspiración GreenBox</span>
              <h2 className={`text-[clamp(2rem,6vw,5rem)] font-black italic uppercase tracking-tighter leading-[0.9] transition-colors ${isDark ? 'text-white' : 'text-black'}`}>
                VENTAJA <span className="text-[#22c55e]">GREENBOX</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#22c55e] rounded-xl flex items-center justify-center text-black shrink-0 shadow-lg">
                    {i === 0 ? <TrendingUp size={24} /> : i === 1 ? <Users size={24} /> : <Zap size={24} />}
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-black italic uppercase mb-2 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>{benefit.title}</h3>
                    <p className={`font-medium text-sm md:text-base italic leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative group">
               <div className={`absolute inset-0 ${isDark ? 'bg-[#22c55e]/5' : 'bg-[#22c55e]/10'} blur-[100px] rounded-full transition-all group-hover:bg-[#22c55e]/20`} />
               <TerminalStatus isDark={isDark} />
            </div>
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
               <ModernImage 
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
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COACHES.map((coach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border-2 ${isDark ? 'border-white/5 bg-zinc-900/50' : 'border-black/5 bg-white'} shadow-2xl transition-all duration-500`}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <ModernImage 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 md:p-8 relative">
                  <h3 className="text-xl md:text-2xl font-black italic uppercase text-[#22c55e] mb-1 leading-tight">{coach.name}</h3>
                  <p className={`text-[9px] md:text-xs font-black uppercase tracking-widest italic mb-3 md:mb-4 ${isDark ? 'text-white/60' : 'text-black/60'}`}>{coach.role}</p>
                  <div className={`p-3 md:p-4 rounded-xl ${isDark ? 'bg-black/40' : 'bg-neutral-100'} border-l-4 border-[#22c55e] italic`}>
                    <p className={`text-[10px] md:text-xs font-bold ${isDark ? 'text-white/40' : 'text-black/40'}`}>"{coach.motto}"</p>
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
              <h2 className={`text-4xl md:text-7xl font-black italic uppercase leading-none tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
                LO QUE DICE <br /> <span className="text-[#22c55e]">LA COMUNIDAD</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <RotatingTestimonial 
                items={TESTIMONIALS_1} 
                isDark={isDark} 
                name="Andrés G." 
                role="Miembro hace 2 años" 
              />
              <RotatingTestimonial 
                items={TESTIMONIALS_2} 
                isDark={isDark} 
                name="Camila V." 
                role="Miembro hace 6 meses" 
              />
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
        </div>
      </section>

      {/* How to Get There Section */}
      <section className={`py-16 md:py-32 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'} transition-colors duration-500 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              COMO LLEGAR A <br className="md:hidden" /> <span className="text-[#22c55e]">TÚ GREENBOX 💚</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-4 bg-[#22c55e] opacity-10 blur-3xl rounded-[2rem] md:rounded-[4rem] group-hover:opacity-20 transition-opacity duration-700" />
            <div className={`relative border-4 md:border-[12px] ${isDark ? 'border-zinc-900 bg-black' : 'border-black bg-neutral-100'} shadow-2xl overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-video sm:aspect-auto`}>
              <video 
                controls 
                preload="none"
                className="w-full h-full sm:h-auto block max-h-[70vh] object-cover sm:object-contain"
                poster={HERO_IMAGE}
              >
                <source src="/ComoLlegar.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={`py-12 md:py-16 ${isDark ? 'bg-zinc-950' : 'bg-neutral-50'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="px-2">
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
                 className="inline-flex items-center justify-center gap-3 bg-[#22c55e] text-black px-6 py-3.5 rounded-xl font-black uppercase text-xs md:text-sm tracking-widest hover:scale-[1.02] active:scale-95 transition-all w-full shadow-lg shadow-[#22c55e]/20"
               >
                 <span>COMO LLEGAR</span>
                 <ExternalLink size={16} className="opacity-40" />
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Sponsors Strip */}
      <div className={`py-8 border-t ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-neutral-50 border-black/5'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-700">
          <a href="https://instagram.com/brissport" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
            <ModernImage 
              src="/brissport.avif" 
              alt="Brissport" 
              className="h-8 md:h-12 object-contain grayscale group-hover:grayscale-0 transition-all" 
            />
            <div className="text-center">
              <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>BRISSPORT</p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-16 md:py-24 border-t transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-white border-neutral-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center mb-20">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <a href="#faqs" className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#22c55e] transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>Preguntas frecuentes</a>
              <a href={`mailto:${EMAIL_CONTACT}`} className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#22c55e] transition-colors ${isDark ? 'text-white/50' : 'text-black/50'}`}>Contacto</a>
            </div>
            <div className="flex justify-center gap-5">
              <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border ${isDark ? 'bg-zinc-900 border-white/5 text-white' : 'bg-neutral-50 border-black/5 text-black'}`}>
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <LogoSVG isDark={isDark} className="scale-75 md:scale-100" />
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center">
            <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] italic transition-colors ${isDark ? 'text-white/20' : 'text-black/20'}`}>
              © {new Date().getFullYear()} GREENBOX FITNESS CLUBS.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#22c55e] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
      >
        <MessageCircleMore size={28} />
      </a>
    </div>
  );
}
