import { Phone, MapPin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contacto" className="bg-black border-t border-[#FFC107]/20 text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logotipo.ico"
                alt="Suspensiones Montero"
                className="h-40 md:h-40 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Tu taller de confianza especializado en suspensión automotriz. Más de 15 años brindando calidad y seguridad.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#FFC107] text-lg mb-4 font-bold">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Inicio', 'Servicios', 'Nosotros', 'Clientes', 'Contacto'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#FFC107] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#FFC107] text-lg mb-4 font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-[#FFC107] border border-[#FFC107]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                  <Phone className="w-4 h-4 group-hover:text-black transition-colors" />
                </div>
                <a href="https://wa.me/5213317564557" className="hover:text-[#FFC107] transition-colors">
                  +52 (33) 1756 4557
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/9JXUHdqiqXaEsrjn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group cursor-pointer"
                >
                <div className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-[#FFC107] border border-[#FFC107]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mt-1">
                  <MapPin className="w-4 h-4 group-hover:text-black transition-colors" />
                </div>
                <span className="group-hover:text-[#FFC107] transition-colors">
                  Av. Las Torres 216<br />
                  Las Pintas, Jal.
                </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/SuspensionesMonteroPintas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-[#FFC107] border border-[#FFC107]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mt-1">
                    <Facebook className="w-4 h-4 group-hover:text-black transition-colors" />
                  </div>

                  <span className="group-hover:text-[#FFC107] transition-colors">
                    Suspensiones Montero<br />
                    Las Torres
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFC107]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © 2026 <span className="text-[#FFC107]">Suspensiones Montero</span>. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FFC107] transition-colors">
                Política de Privacidad
              </a>
              <span className="text-[#FFC107]/30">|</span>
              <a href="#" className="hover:text-[#FFC107] transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}