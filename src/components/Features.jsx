import React from 'react';
import { FileText, BrainCircuit, Lightbulb, Calendar, TrendingUp, FolderTree } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Supercharge Your Learning</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to <span className="text-gradient">ace your exams</span></h3>
          <p className="text-slate-400 text-lg">
            Our suite of AI-powered tools is designed to help you study more efficiently, retain information longer, and get better grades with less stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
