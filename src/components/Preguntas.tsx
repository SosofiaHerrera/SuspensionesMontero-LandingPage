import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Preguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Estamos abiertos de lunes a viernes de 9:00 AM a 7:00 PM, sábados de 9:00 AM a 3:00 PM.',
    },
    {
      question: '¿Cuánto tiempo toma una reparación?',
      answer: 'Dependiendo del servicio, las reparaciones pueden tardar algunas horas.',
    },
    {
      question: '¿Qué garantía ofrecen?',
      answer: 'Todos nuestros servicios incluyen garantía según el trabajo realizado.',
    },
    {
      question: '¿Realizan servicio a domicilio?',
      answer: 'Para casos especiales, contáctanos y evaluaremos la posibilidad de ofrecer servicio a domicilio.',
    },
    {
      question: '¿Qué marcas de refacciones utilizan?',
      answer: 'Trabajamos con marcas reconocidas como KYB, SYD, GROB, TRW, WAGNER y MOOG, garantizando calidad.',
    },
  ];

  return (
    <section id="preguntas" className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-white">PREGUNTAS </span>
            <span className="text-[#FFC107] font-bold">FRECUENTES</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Resolvemos tus dudas sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-[#FFC107]/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] hover:from-[#252525] hover:to-[#0f0f0f] transition-colors"
              >
                <span className="text-white font-semibold text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-[#FFC107]" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-[#0a0a0a] border-t border-[#FFC107]/10">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}