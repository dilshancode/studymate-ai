import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  // Consume theme state and toggler from ThemeContext
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      // Interactive scale effects on hover and tap
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      // Tailwind classes handle color transitions smoothly, along with flex centering and hiding overflow for sliding animations
      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800/50 dark:hover:bg-slate-800 transition-colors duration-300 shadow-sm flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* mode="wait" ensures the exit animation completes before the entering icon begins its transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          // key={theme} forces Framer Motion to treat the div as a new element on theme change, triggering animations
          key={theme}
          // The entering icon drops down and rotates into place
          initial={{ y: -15, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          // The exiting icon drops further down and rotates out of view
          exit={{ y: 15, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.15 }}
          className="w-5 h-5 flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
