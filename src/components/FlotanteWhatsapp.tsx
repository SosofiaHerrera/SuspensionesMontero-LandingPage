import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FlotanteWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/523317564557?text=Hola.%20Buen%20d%C3%ADa%20%F0%9F%94%A7%0AEstoy%20interesad@%20en%20un%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#FFC107]/30"
      >
        ¿Necesitas ayuda? Chatea con nosotros
      </motion.span>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Golden ring effect */}
      <motion.div
        className="absolute inset-0 border-2 border-[#FFC107] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
    </motion.a>
  );
}