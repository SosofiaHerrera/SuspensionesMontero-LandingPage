import { useState } from 'react';
import { Menu, X, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleMenuClick = (href: string) => {
    setActiveSection(href);

    const element = document.querySelector(href);
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        96; // altura del header

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // ⏱ cerrar menú DESPUÉS del scroll (clave en mobile)
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="
        fixed top-0 left-0 right-0 z-50
        min-h-16 md:min-h-24
        bg-[#0e0e0e]/95 backdrop-blur-md
        border-b border-[#FFC107]/20
      "
    >
      <div className="flex items-center justify-between px-4 max-w-screen-xl mx-auto h-16 md:h-24">
        {/* LOGO */}
        <img
          src="/logotipo.ico"
          alt="Suspensiones Montero"
          className="h-14 md:h-20 w-auto"
        />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className={`relative font-medium transition-colors ${
                activeSection === item.href
                  ? 'text-[#FFC107]'
                  : 'text-gray-200 hover:text-[#FFC107]'
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#FFC107] transition-all duration-300 ${
                  activeSection === item.href
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0'
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* Facebook */}
          <div className="hidden md:flex">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/SuspensionesMonteroPintas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFC107]"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 border-t border-[#FFC107]/20 overflow-hidden"
          >
            <nav className="px-4 py-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleMenuClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#FFC107]"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}