import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function Clientes() {
  const testimonials = [
    {
      name: 'Emmy Venegas',
      rating: 5,
      text:
        'Diagnósticos precisos, sin engañar ni dar sobreprecios. El trato siempre ha sido cortés y de calidad. Tengo varios años trayendo mi vehículo y siempre resuelven mis problemas.',
    },
    {
      name: 'Jesús Camacho',
      rating: 5,
      text:
        'Excelente servicio, llegas temprano y siempre está lleno, lo cual habla de cómo trabajan. Tengo 2 años trayendo mis unidades y mi carro particular y siempre dan buenas soluciones.',
    },
    {
      name: 'Humberto Puentes',
      rating: 5,
      text:
        'Hacen excelentes trabajos y el servicio es de primera.',
    },
  ]

  return (
    <section id="clientes" className="scroll-mt-22 md:scroll-mt-24 bg-black">
      
      {/* ===================== */}
      {/* TESTIMONIOS */}
      {/* ===================== */}
      <div className="py-20 px-4">
        <div className="max-w-screen-xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="text-white">NUESTROS </span>
              <span className="text-[#FFC107] font-bold">CLIENTES</span>
            </h2>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Lo que dicen quienes confían en nosotros
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFC107]/20 rounded-xl p-6 overflow-hidden group"
              >

                {/* Quote */}
                <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-32 h-32 text-[#FFC107]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-4 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFC107] to-[#FFA000] rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Cliente verificado
                    </p>
                  </div>
                </div>

                {/* Hover shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/0 via-[#FFC107]/5 to-[#FFC107]/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://www.google.com/search?q=suspensiones+montero+las+torres"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFC107] hover:bg-[#FFD54F] text-black px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            >
              Lee más reseñas
            </a>
          </motion.div>

        </div>
      </div>

      {/* ===================== */}
      {/* GOOGLE RATING BAR */}
      {/* ===================== */}
      <motion.a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="block w-full bg-[#111] hover:bg-[#161616] transition-colors"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-4 px-4">

          {/* Rating */}
          <div className="bg-[#FFC107] px-4 py-2 rounded-lg">
            <span className="text-black font-bold text-2xl sm:text-3xl">
              4.5
            </span>
          </div>

          {/* Stars + Text */}
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? 'fill-[#FFC107] text-[#FFC107]' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>

            <span className="text-white text-sm sm:text-base">
              Basado en reseñas reales de Google Maps
            </span>
          </div>

        </div>
      </motion.a>

    </section>
  )
}