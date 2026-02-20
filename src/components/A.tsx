import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, TrendingUp, Award } from 'lucide-react';


export function HeroSection() {
  const stats = [
    { value: '4,800', label: 'Servicios realizados', icon: Award },
    { value: '99%', label: 'Clientes satisfechos', icon: Star },
    { value: '+1,777', label: 'Clientes recurrentes', icon: TrendingUp },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        
        {/* Animated geometric patterns */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #FFC107 0px, #FFC107 2px, transparent 2px, transparent 40px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-block mb-4"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="inline-block bg-[#FFC107]/20 border border-[#FFC107] text-[#FFC107] px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                  Taller Certificado
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="block">ESPECIALISTAS EN</span>
                <span className="block text-[#FFC107] font-bold">SUSPENSIÓN</span>
                <span className="block text-[#FFC107] font-bold">AUTOMOTRIZ</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Más de 15 años de experiencia brindando soluciones profesionales y confiables para tu vehículo
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 193, 7, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+523312345678"
                  className="group bg-[#FFC107] hover:bg-[#FFD54F] text-black px-8 py-4 rounded-lg font-bold shadow-xl flex items-center justify-center gap-3 transition-all"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  LLAMAR AHORA
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/523312345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold shadow-xl flex items-center justify-center gap-3 transition-all"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  COTIZA POR WHATSAPP
                </motion.a>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
                  <span>Revisión Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FFC107]" />
                  <span>Garantía Certificada</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group relative bg-gradient-to-r from-black/80 to-black/40 backdrop-blur-md border border-[#FFC107]/30 rounded-2xl p-6 overflow-hidden"
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/0 via-[#FFC107]/10 to-[#FFC107]/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="bg-[#FFC107] p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <motion.div 
                        className="text-4xl md:text-5xl font-bold text-[#FFC107]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#FFC107]/50 rounded-full p-1">
            <motion.div 
              className="w-1 h-2 bg-[#FFC107] rounded-full mx-auto"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const Hero = HeroSection;
