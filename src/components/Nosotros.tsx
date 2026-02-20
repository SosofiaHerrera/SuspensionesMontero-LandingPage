import { motion } from 'framer-motion';
import { Shield, Award, Clock, Check } from 'lucide-react';

export function Nosotros() {
  const reasons = [
    {
      icon: Award,
      title: 'Experiencia',
      description: '15 años de trayectoria respaldando nuestro trabajo',
    },
    {
      icon: Shield,
      title: 'Garantía',
      description: 'Todos nuestros servicios incluyen garantía',
    },
    {
      icon: Check,
      title: 'Honestidad',
      description: 'Diagnóstico transparente y precios justos',
    },
    {
      icon: Clock,
      title: 'Rapidez',
      description: 'Servicio sin sacrificar calidad',
    },
  ];

  return (
    <>
      {/* ================= SOBRE NOSOTROS ================= */}
      <section
        id="nosotros"
        className="scroll-mt-22 md:scroll-mt-26 py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="text-white">SOBRE </span>
              <span className="text-[#FFC107] font-bold">NOSOTROS</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Suspensiones Montero es un taller especializado en suspensión
              automotriz, comprometido con la excelencia y la satisfacción de
              nuestros clientes.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group text-center p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFC107]/20 hover:border-[#FFC107]/40 transition-all"
                >
                  <div className="bg-gradient-to-br from-[#FFC107] to-[#FFA000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC107] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border border-[#FFC107]/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-20 h-20 bg-[#FFC107]/10 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFC107]/10 rounded-tl-full"></div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl text-white mb-4">
                Tu Seguridad es Nuestra{' '}
                <span className="text-[#FFC107] font-bold">Prioridad</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Entendemos que un sistema de suspensión en óptimas condiciones no
                solo mejora el confort de tu viaje, sino que también garantiza tu
                seguridad y la de tu familia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GALERÍA ================= */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="text-white">CONOCE </span>
              <span className="text-[#FFC107] font-bold">NUESTRO TALLER</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Instalaciones y equipo especializado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/01.jpeg', '/11.jpeg', '/04.jpeg'].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={img}
                    alt="Galería Suspensiones Montero"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JORGE HERRERA ================= */}
      <section className="relative bg-gradient-to-r from-black to-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-4">
              JORGE HERRERA MONTERO
            </h2>
            <h3 className="text-xl text-white mb-6">
              Especialista en Suspensión Automotriz
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Con más de 30 años de experiencia, actualmente opera la sucursal
              Las Pintas y anteriormente la sucursal Patria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/14.jpeg"
              alt="Jorge Herrera Montero"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}