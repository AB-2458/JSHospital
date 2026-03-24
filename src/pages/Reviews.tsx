import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';

export const Reviews = () => {
  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-24 text-white">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Patient Stories</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight mb-6">
            Voices of <span className="text-primary">Healing</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Read what our patients have to say about their experience at JS Hospital. We take pride in delivering compassionate care and achieving the best outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative flex flex-col"
            >
              <div className="flex gap-1 text-amber-500 mb-8 shrink-0">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-white/80 leading-relaxed italic mb-10 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-primary"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/40 font-medium">{testimonial.location}</div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
