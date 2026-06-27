import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-navy-900 to-purple-900/40 z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center border-t-2 border-t-blue-500/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Ready to transform the way you learn?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Join over 50,000 students who are already studying smarter, not harder. Start your journey with StudyMate AI today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="w-full sm:w-auto bg-white text-navy-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-xl">
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-slate-400 text-sm">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
