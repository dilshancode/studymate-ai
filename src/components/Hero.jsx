import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle, FileText, BrainCircuit, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const words = ["Personal AI Tutor", "Lecture Summarizer", "Flashcard Generator", "Smart Study Planner"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];
    
    const tick = () => {
      if (!isDeleting) {
        // Type out characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Delete characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          // Cycle to next word
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          return;
        }
      }
      
      // Speed (typing is slower, deleting is faster)
      const delta = isDeleting ? 40 : 80;
      timer = setTimeout(tick, delta);
    };

    timer = setTimeout(tick, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Study smarter with AI 2.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-slate-900 dark:text-white"
          >
            Learn 10x faster with your <br className="hidden md:block" />
            <span className="text-gradient inline-block min-h-[2.2em] md:min-h-[1.2em]">
              {currentText}
              <span className="text-blue-500 dark:text-blue-400 animate-pulse ml-0.5">|</span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Turn any lecture, article, or video into interactive flashcards, quizzes, and personalized study plans in seconds.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              Start Learning Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto glass-card text-slate-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
              View Demo
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-navy-900 via-transparent to-transparent z-20 pointer-events-none h-full w-full rounded-2xl" style={{ top: '60%' }} />
          
          <div className="glass-card rim-light-border rounded-2xl overflow-hidden shadow-2xl relative z-10">
            {/* Mockup Header */}
            <div className="bg-white/90 dark:bg-navy-900/90 border-b border-slate-200 dark:border-slate-700/50 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-slate-100 dark:bg-navy-800/50 rounded-md px-4 py-1 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                studymate.ai/dashboard
              </div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-6 bg-slate-50/50 dark:bg-navy-900/50 grid grid-cols-12 gap-6 h-[400px]">
              {/* Sidebar */}
              <div className="col-span-3 space-y-4">
                <div className="h-10 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm border border-slate-200 dark:border-transparent flex items-center px-4 gap-3 text-slate-800 dark:text-slate-300">
                  <BarChart3 className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm font-medium">Overview</span>
                </div>
                <div className="h-10 rounded-lg bg-transparent flex items-center px-4 gap-3 text-slate-500">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">My Notes</span>
                </div>
                <div className="h-10 rounded-lg bg-transparent flex items-center px-4 gap-3 text-slate-500">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="text-sm">Flashcards</span>
                </div>
              </div>
              
              {/* Main Content area */}
              <div className="col-span-9 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Welcome back, Alex!</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">You have 3 topics to review today.</p>
                  </div>
                  <div className="h-10 px-4 bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-medium border border-blue-200 dark:border-blue-500/20">
                    Generate Quiz
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.9, opacity: 0, y: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        // y keyframes animate up (-6px) and back to rest for a floating feel
                        y: [0, -6, 0]
                      }}
                      transition={{ 
                        // Initial scale & fade animations run once
                        scale: { duration: 0.3, delay: 0.6 + (i * 0.1) },
                        opacity: { duration: 0.3, delay: 0.6 + (i * 0.1) },
                        // Floating y animation loops infinitely with slightly staggered speed
                        y: {
                          repeat: Infinity,
                          duration: 4 + i,
                          ease: "easeInOut",
                          delay: 1.2
                        }
                      }}
                      className="bg-white/80 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700/50 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-3">
                        <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                      </div>
                      <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: 1,
                    // Animate opposite direction (down by 6px) to contrast with cards above
                    y: [0, 6, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1 },
                    // Separate loop config to keep floating elements dynamic
                    y: {
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 1.5
                    }
                  }}
                  className="flex-1 bg-white/60 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-700/30 p-5 flex flex-col gap-4 shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                    <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700/50 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-700/50 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-slate-100 dark:bg-slate-700/50 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
