import { motion } from 'framer-motion';
import {MessageCircle, MapPin } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#FFC107] via-[#FFD54F] to-[#FFC107] overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <h2 className="text-4xl md:text-6xl text-black mb-6 leading-tight">
            ¿Listo para mejorar<br />
            <span className="font-bold">tu suspensión?</span>
          </h2>
          
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ven a tu <span className="font-bold">revisión gratuita</span> hoy mismo y descubre por qué somos 
            el taller de confianza en Guadalajara
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+523312345678"
              className="bg-black text-[#FFC107] px-10 py-5 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              <MapPin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              CÓMO LLEGAR
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/523312345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              WHATSAPP
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-black via-[#FFC107] to-black"></div>
    </section>
  );
}