import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Medical Student, Harvard',
    content: "StudyMate AI cut my review time in half. The ability to just upload a 2-hour lecture and get flashcards instantly is literal magic.",
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'David Chen',
    role: 'Computer Science Major, Stanford',
    content: "The dynamic quizzes adapt to what I don't know. It's like having a tutor available 24/7 who knows exactly where my weak spots are.",
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Emily Rodriguez',
    role: 'High School Senior',
    content: "I used to get overwhelmed organizing my notes for finals. Now, StudyMate categorizes everything and builds my study schedule automatically.",
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Marcus Vance',
    role: 'MBA Candidate, Wharton',
    content: "The smart study planning keeps me on track even with a packed schedule. Highly recommend the Pro plan.",
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Aria Patel',
    role: 'Biology Major, NYU',
    content: "The flashcard generation is flawless. It extracts diagrams and definitions automatically. Saved me hours.",
    avatar: 'https://i.pravatar.cc/150?img=9'
  }
];

const TestimonialsList = ({ list }) => (
  <div className="flex gap-8 shrink-0">
    {list.map((testimonial, index) => (
      <div 
        key={index} 
        className="glass-card rounded-2xl p-8 w-[380px] shrink-0 whitespace-normal flex flex-col justify-between hover:border-blue-500/30 transition-colors duration-300"
      >
        <div>
          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-slate-300 text-lg mb-8 italic leading-relaxed">
            "{testimonial.content}"
          </p>
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full border-2 border-slate-700"
          />
          <div>
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Loved by Students</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Don't just take our <span className="text-gradient">word for it</span></h3>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden w-full py-4 mask-gradient">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900/90 to-transparent z-10 pointer-events-none" />

        {/* 
          Infinite scrolling marquee loop:
          By rendering two identical lists side-by-side, we can translate the container 
          from 0% to -50% (exactly the width of one list). The linear ease and repeat 
          infinity make the wrap-around seamless, simulating an endless queue.
        */}
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          <TestimonialsList list={testimonials} />
          <TestimonialsList list={testimonials} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
