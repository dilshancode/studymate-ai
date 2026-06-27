import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
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
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">How it Works</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-300 hover:text-white font-medium text-sm transition-colors">
              Log in
            </button>
            <button className="bg-gradient-primary text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-blue-500/25">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
