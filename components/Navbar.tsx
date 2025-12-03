import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { name: 'Model X', href: '#preview' },
  { name: 'Specs', href: '#stats' },
  { name: 'Experience', href: '#interior' },
  { name: 'Order', href: '#pricing' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-40 px-6 py-6 transition-all duration-500 ${
        scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
            <span className="text-black font-bold font-display text-lg">X</span>
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            DRIVE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-sm font-medium tracking-widest text-neutral-400 hover:text-white transition-colors uppercase"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2 border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
          Test Drive
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;