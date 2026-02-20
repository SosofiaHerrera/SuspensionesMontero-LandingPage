import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {MessageCircle, Award, Star } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export function HeroSection() {
  return (
    <>
      
      {/* ================= LOGO DERECHA ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            hidden md:block
            absolute
            top-12 md:top-10 lg:top-32
            right-16 md:right-28 lg:right-96
            z-20
            pointer-events-none
          "
        >
          <img
            src="/logotipo.ico"
            alt="Suspensiones Montero"
            className="
              max-w-[120px]
              md:max-w-[340px]
              lg:max-w-[420px]
              drop-shadow-[0_0_45px_rgba(255,193,7,0.45)]
            "
          />
        </motion.div>
        {/* ================= HERO ================= */}
      <section
        id="inicio"
        className="scroll-mt-24 md:scroll-mt-32 relative min-h-[200px] relative min-h-[200px] md:min-h-[420px] lg:min-h-[500px] flex items-center pt-24 md:pt-32 pb-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/062.jpeg"
            alt="Suspensiones Montero"
            className="w-full h-full object-cover object-[center_60%]"
          />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 2px, transparent 2px, transparent 40px)",
        }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-start gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white flex flex-col justify-center "
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl leading-tight mb-4">
            <span className="block">ESPECIALISTAS EN</span>

            <span className="block md:inline-block text-[#FFC107] font-bold whitespace-normal md:whitespace-nowrap">
              SUSPENSIÓN AUTOMOTRIZ
            </span>
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mb-6">
            Sucursal Las Pintas | Operado por Jorge Herrera Montero
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/523317564557?text=Hola.%20Buen%20d%C3%ADa%20%F0%9F%94%A7%0AEstoy%20interesad@%20en%20un%20servicio"
              className=" bg-[#FFC107] hover:bg-[#FFD54F] text-black px-3 py-2 text-xs md:px-5 md:py-3 md:text-base rounded-lg font-bold shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-3 h-3 md:w-5 md:h-5" />
              ENVIAR MENSAJE
            </motion.a>
          </div>


          {/* Trust */}
          <div className="flex gap-6 text-xs md:text-base text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
              Revisión Gratuita
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FFC107]" />
              Trabajos Garantizados
            </div>
          </div>
        </motion.div>

        
      </div>
    </div>
  </section>


      {/* ================= STATS ================= */}
      <section className="bg-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">

            {/* CLIENTES */}
            <div className="text-white">
              <img
                src="/cliente.png"
                alt="Clientes felices"
                className="h-6 md:h-10 mx-auto mb-2 md:mb-4 object-contain"
              />
              <div className="text-xl md:text-5xl font-bold text-[#FFC107]">
                + <Counter value={15000} />
              </div>
              <p className="mt-1 md:mt-2 text-[10px] md:text-sm tracking-widest text-gray-300">
                CLIENTES FELICES
              </p>
            </div>

            {/* VEHÍCULOS */}
            <div className="text-white">
              <img
                src="/vehiculos.png"
                alt="Clientes felices"
                className="h-6 md:h-10 mx-auto mb-2 md:mb-4 object-contain"
              />
              <div className="text-xl md:text-5xl font-bold text-[#FFC107]">
                + <Counter value={20000} />
              </div>
              <p className="mt-1 md:mt-2 text-[10px] md:text-sm tracking-widest text-gray-300">
                VEHÍCULOS REPARADOS
              </p>
            </div>

            {/* EXPERIENCIA */}
            <div className="text-white">
              <img
                src="/experiencia.png"
                alt="Clientes felices"
                className="h-6 md:h-10 mx-auto mb-2 md:mb-4 object-contain"
              />
              <div className="text-xl md:text-5xl font-bold text-[#FFC107]">
                + <Counter value={13} />
              </div>
              <p className="mt-1 md:mt-2 text-[10px] md:text-sm tracking-widest text-gray-300">
                AÑOS DE EXPERIENCIA
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] py-4 md:py-6 overflow-hidden">
        <div className="relative w-full">
          <div className="flex w-max animate-marquee gap-6 md:gap-14">
            
            {/* Primera vuelta */}
            <img src="/kyb.png" alt="KYB" className="h-4 md:h-10 object-contain" />
            <img src="/syd.png" alt="SYD" className="h-4 md:h-10 object-contain" />
            <img src="/grob.png" alt="GROB" className="h-4 md:h-12 object-contain" />
            <img src="/trw.svg" alt="TRW" className="h-4 md:h-10 object-contain" />
            <img src="/moog.png" alt="MOOG" className="h-4 md:h-10 object-contain" />
            <img src="/wagner.png" alt="WAGNER" className="h-4 md:h-10 object-contain" />

            {/* Duplicado para loop infinito */}
            <img src="/kyb.png" alt="KYB" className="h-4 md:h-10 object-contain" />
            <img src="/syd.png" alt="SYD" className="h-4 md:h-10 object-contain" />
            <img src="/grob.png" alt="GROB" className="h-4 md:h-12 object-contain" />
            <img src="/trw.svg" alt="TRW" className="h-4 md:h-10 object-contain" />
            <img src="/moog.png" alt="MOOG" className="h-4 md:h-10 object-contain" />
            <img src="/wagner.png" alt="WAGNER" className="h-4 md:h-10 object-contain" />
          </div>
        </div>
      </section>


      <section className="bg-black py-12 border-t border-[#FFC107]/30">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-[#FFC107] text-3xl md:text-4xl font-bold mb-4 tracking-wide">
            SUCURSAL LAS PINTAS
          </h2>

          <p className="text-gray-200 text-base md:text-xl leading-relaxed max-w-5xl">
            Esta sucursal de <span className="text-white font-semibold">Suspensiones Montero </span> 
            es operada directamente por 
            <span className="text-white font-semibold"> Jorge Herrera Montero</span>. 
            Otras sucursales con el mismo nombre funcionan de manera independiente.
          </p>

        </div>
      </section>
    </>
  );
}

export const Hero = HeroSection;
