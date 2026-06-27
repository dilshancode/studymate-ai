import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  // Track whether the mobile navigation menu drawer is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it Works' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-wide">
              StudyMate AI
            </span>
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-300 hover:text-white font-medium text-sm transition-colors">
              Log in
            </button>
            <button className="bg-gradient-primary text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-blue-500/25">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-800/30 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer - AnimatePresence ensures the exit transition completes before the component unmounts */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            // Start collapsed and fully transparent
            initial={{ opacity: 0, height: 0 }}
            // Grow to height: auto (native flex size) and fade in
            animate={{ opacity: 1, height: 'auto' }}
            // Shrink and fade out smoothly when closed
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-800/60 bg-navy-900/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-white transition-colors py-2 text-base font-medium border-b border-slate-800/40"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-slate-300 hover:text-white font-medium py-3 text-center transition-colors border border-slate-800/60 rounded-xl hover:bg-slate-800/30"
                >
                  Log in
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-primary text-white py-3 font-semibold rounded-xl text-center shadow-lg shadow-blue-500/20"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
