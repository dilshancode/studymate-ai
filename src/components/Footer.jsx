import React from 'react';
import { BookOpen, Mail, MessageCircle, Share2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-navy-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-primary p-1.5 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-[1.2rem] text-slate-900 dark:text-white">
                StudyMate AI
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[0.95rem] mb-6 leading-relaxed">
              Your intelligent learning companion. Transform study materials into mastery with the power of AI.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-[1.05rem] mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Features</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Pricing</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Integrations</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-[1.05rem] mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Help Center</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Study Guides</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Blog</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-[1.05rem] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">About Us</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Careers</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-[0.95rem]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[0.95rem]">
            {/* Dynamically display the current calendar year to ensure copyright details stay up-to-date */}
            &copy; {new Date().getFullYear()} StudyMate AI, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 text-[0.95rem] flex items-center gap-1">
              Made with <span className="text-red-500">&hearts;</span> for students
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
