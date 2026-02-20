import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-22 md:scroll-mt-26 py-20 px-4 bg-black">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-3 font-bold">
            <span className="text-white">UBICACIÓN Y </span>
            <span className="text-[#FFC107]">CONTACTO</span>
          </h2>
          <p className="text-gray-400">
            Visítanos o contáctanos, estamos para servirte
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Ubicación */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                  <MapPin className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Ubicación</h3>
                  <p className="text-gray-400 text-lg">
                    Av. las torres<br />
                    El Salto, Jalisco
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/9JXUHdqiqXaEsrjn7"
                target="_blank"
                className="bg-[#FFC107] text-base text-black px-5 py-2 rounded-full font-semibold whitespace-nowrap hover:bg-[#e0aa06] transition"
              >
                Abrir ubicación
              </a>
            </div>


            {/* Horario */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                <Clock className="text-black w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Horario</h3>
                <p className="text-gray-400 text-lg">
                  Lunes - Viernes: 9:00pm - 7:00pm<br />
                  Sábado: 9:00am - 3:00pm<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Teléfono */}
            
            <div className="flex items-start justify-between gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                  <Phone className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Teléfono</h3>
                  <p className="text-gray-400 text-lg">
                    33 3335 8020<br />33 1756 4557
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/523317564557?text=Hola.%20Buen%20d%C3%ADa%20%F0%9F%94%A7%0AEstoy%20interesad@%20en%20un%20servicio"
                target="_blank"
                className="bg-[#FFC107] text-base text-black px-5 py-2 rounded-full font-semibold whitespace-nowrap hover:bg-[#e0aa06] transition"
              >
                Enviar mensaje
              </a>
            </div>


            {/* Divider */}
            <div className="border-t border-gray-700 pt-6">
              <p className="text-white mb-3 text-xl">
                Síguenos en nuestras redes sociales
              </p>

              <a
                href="https://www.facebook.com/SuspensionesMonteroPintas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="font-bold text-black text-xl">f</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* MAP RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.3046976765754!2d-103.33115219999999!3d20.5756108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b34f21764117%3A0x9a1edd1ac44f6c3b!2sSuspensiones%20Montero%2C%20Sucursal%20Las%20Torres!5e0!3m2!1ses-419!2smx!4v1771305192640!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
