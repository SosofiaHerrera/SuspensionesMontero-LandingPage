import { Wrench, Settings, Gauge, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function Servicios() {
  const services = [
    {
      icon: Shield,
      title: 'Diagnóstico profesional',
      description: 'Revisión completa y gratuita del sistema de suspensión',
    },
    {
      icon: Gauge,
      title: 'Reparación de suspensión',
      description: 'Instalación de suspensión nueva o reforzada según tus necesidades',
    },
    {
      icon: Settings,
      title: 'Alineación',
      description: 'Servicio profesional',
    },
    {
      icon: Wrench,
      title: 'Más servicios',
      description: 'Amortiguadores, cremalleras, balatas, frenos, soportes y más',
    },
    
    
    
  ];

  return (
    <section  id="servicios" className=" scroll-mt-22 md:scroll-mt-26 py-20 px-4 bg-gradient-to-t from-black/60 to-transparent">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-white">NUESTROS </span>
            <span className="text-[#FFC107] font-bold">SERVICIOS</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones completas para el sistema de suspensión de tu vehículo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFC107]/20 rounded-xl p-6 overflow-hidden"
              >
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-[#FFC107]/10 rounded-bl-full"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="relative bg-gradient-to-br from-[#FFC107] to-[#FFA000] w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-black" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC107] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Hover border glow */}
                <div className="absolute inset-0 border-2 border-[#FFC107] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}