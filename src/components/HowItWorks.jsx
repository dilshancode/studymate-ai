import React from 'react';
import { UploadCloud, Zap, Award } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="w-8 h-8 text-blue-400" />,
    title: 'Upload your materials',
    description: 'Drag and drop your PDFs, lecture recordings, or paste text directly into StudyMate AI.',
    number: '01'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: 'AI processes the content',
    description: 'Our advanced models instantly analyze the material to extract key concepts and generate study aids.',
    number: '02'
  },
  {
    icon: <Award className="w-8 h-8 text-green-400" />,
    title: 'Start mastering the topic',
    description: 'Review summaries, flip through flashcards, and take customized quizzes to test your knowledge.',
    number: '03'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">How StudyMate AI <span className="text-gradient">Works</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 z-0 w-2/3 mx-auto" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-8 relative group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
