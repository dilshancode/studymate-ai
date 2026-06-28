import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const plans = [
  {
    name: 'Basic',
    price: '$0',
    period: 'forever',
    description: 'Perfect for casual learners wanting to try out AI assistance.',
    features: [
      '3 file uploads per month',
      'Basic note summaries',
      'Up to 50 flashcards/month',
      'Community support'
    ],
    buttonText: 'Get Started Free',
    isPopular: false
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    description: 'For serious students who want to maximize their study efficiency.',
    features: [
      'Unlimited file uploads',
      'Advanced AI summaries & insights',
      'Unlimited flashcards & quizzes',
      'Adaptive study planner',
      'Priority email support'
    ],
    buttonText: 'Start 7-Day Free Trial',
    isPopular: true
  },
  {
    name: 'Team',
    price: '$29',
    period: 'per month',
    description: 'Great for study groups and collaborative learning.',
    features: [
      'Everything in Pro',
      'Shared workspaces',
      'Collaborative note editing',
      'Group quiz leaderboards',
      'Admin controls'
    ],
    buttonText: 'Contact Sales',
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Orbital glow elements placed behind the pricing cards */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-purple-500 uppercase mb-3">Simple Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Invest in your <span className="text-gradient">education</span></h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Choose the plan that fits your study needs. Cancel anytime.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: plan.isPopular ? -20 : -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`glass-card rim-light-border rounded-3xl p-8 relative ${plan.isPopular ? 'border-purple-500/50 shadow-[0_0_40px_rgba(139,92,246,0.15)] md:-translate-y-4' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-600 dark:text-slate-500 text-sm">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-gradient-primary text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
