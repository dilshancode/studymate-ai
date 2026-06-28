import React from 'react';
import { FileText, BrainCircuit, Lightbulb, Calendar, TrendingUp, FolderTree } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const features = [
  {
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    title: 'AI Note Summaries',
    description: 'Instantly condense hours of lectures or pages of reading into clear, concise summaries highlighting key concepts.'
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    title: 'Smart Flashcards',
    description: 'Automatically generate Anki-style flashcards from your study materials with a single click.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: 'Dynamic Quiz Creation',
    description: 'Test your knowledge with AI-generated quizzes customized to your current understanding and weak points.'
  },
  {
    icon: <Calendar className="w-6 h-6 text-green-400" />,
    title: 'Adaptive Study Plans',
    description: 'Let our algorithm schedule your study sessions based on upcoming exams and optimal spaced repetition.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
    title: 'Progress Tracking',
    description: 'Visualize your learning journey with detailed analytics showing mastery levels across different subjects.'
  },
  {
    icon: <FolderTree className="w-6 h-6 text-indigo-400" />,
    title: 'Intelligent Organization',
    description: 'Never lose a note again. Our AI automatically tags and categorizes your materials by topic and relevance.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Orbital background glow blobs to create visual depth behind the cards */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Supercharge Your Learning</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <span className="text-gradient">ace your exams</span></h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Our suite of AI-powered tools is designed to help you study more efficiently, retain information longer, and get better grades with less stress.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 transition-colors duration-300 group cursor-pointer"
            >
              {/* Grow the icon wrapper slightly when the parent card is hovered */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
