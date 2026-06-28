import React from 'react';
import { Bot, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
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

const agents = [
  {
    name: 'ChatGPT Agent',
    sub: 'OpenAI GPT-4o & GPT-4',
    desc: 'Best for complex logic, step-by-step math explanations, coding solutions, and structured study guide creation.',
    accent: 'emerald',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 text-emerald-600 dark:text-emerald-500">
        <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934 4.1 4.1 0 0 0-1.782-2.14 4.15 4.15 0 0 0-2.118-.114 4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679 4 4 0 0 0-1.14 1.253 3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057 3.23 1.833a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041l-3.284 1.87a2.98 2.98 0 0 1-4.139-1.1m-.85-6.94a3.02 3.02 0 0 1 1.114-1.3l.094.062v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094m11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04l3.265-1.858a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575l-1.364-.775a.05.05 0 0 1-.026-.037V4.049a3.03 3.03 0 0 1 1.117-2.38 3.08 3.08 0 0 1 3.252-.162l.093.058-3.23 1.838a.53.53 0 0 0-.265.456z"/>
      </svg>
    ),
    badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
  },
  {
    name: 'Gemini Agent',
    sub: 'Google Gemini 1.5 Pro & Flash',
    desc: 'Best for massive context learning. Upload entire textbooks, long PDF research papers, or hour-long lecture videos at once.',
    accent: 'blue',
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    name: 'Claude Agent',
    sub: 'Anthropic Claude 3.5 Sonnet',
    desc: 'Best for essay writing, qualitative literature analysis, reading comprehension, and highly detailed written feedback.',
    accent: 'amber',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 text-amber-600 dark:text-amber-500">
        <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212Z"/>
      </svg>
    ),
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
  }
];

export default function AIAgents() {
  return (
    <section id="ai-agents" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/20 border-y border-slate-200 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">Choose Your Study Brain</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Powered by the World's <span className="text-gradient">Best AI Agents</span></h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Switch between advanced model ecosystems depending on your specific study tasks. Combine their unique intelligence strengths to learn faster.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 flex flex-col justify-between"
            >
              <div>
                {/* Brand icon block */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-slate-100 dark:bg-slate-800`}>
                  {agent.icon}
                </div>
                
                {/* Titles */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${agent.badgeColor} mb-3`}>
                  {agent.sub}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {agent.name}
                </h4>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {agent.desc}
                </p>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-sm">
                <span className="text-slate-400">Integration</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">Ready to Select</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
