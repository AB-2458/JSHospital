import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 bg-slate-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8"
          >
            <ShieldCheck className="text-primary w-5 h-5" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">24/7 Patient Support</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-8"
          >
            We're Here to <span className="text-primary">Listen</span> & <span className="text-secondary">Help.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-500 leading-relaxed mb-12"
          >
            Have questions about our services or need medical assistance? Our dedicated team is available around the clock to support your health journey.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const ContactCards = () => {
  const contactInfo = [
    { title: 'Emergency Hotline', value: '7745849680', icon: Phone, color: 'bg-emergency' },
    { title: 'General Inquiries', value: '+91 7745849680', icon: MessageSquare, color: 'bg-primary' },
    { title: 'Email Support', value: 'care@jshospital.in', icon: Mail, color: 'bg-secondary' },
    { title: 'Working Hours', value: '24/7 Emergency Services', icon: Clock, color: 'bg-slate-900' },
  ];

  return (
    <section className="py-24 bg-white relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-105 transition-transform group"
            >
              <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <info.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{info.title}</h4>
              <p className="text-xl font-display font-bold text-slate-900">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-12">
              Send us a <span className="text-primary">Message</span>
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                  <option className="bg-slate-900">General Inquiry</option>
                  <option className="bg-slate-900">Appointment Support</option>
                  <option className="bg-slate-900">Billing & Insurance</option>
                  <option className="bg-slate-900">Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea 
                  placeholder="How can we help you?" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none"
                />
              </div>
              <button className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
                Send Message <Send size={24} />
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 p-12 md:p-20 bg-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-display font-extrabold text-white mb-8">Connect with Us</h3>
              <p className="text-white/60 leading-relaxed mb-12">
                Follow us on social media for the latest health tips, medical breakthroughs, and hospital updates.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Facebook className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Facebook</h4>
                    <p className="text-white/40 text-sm">@jshospitalindia</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Twitter className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Twitter</h4>
                    <p className="text-white/40 text-sm">@jshospital_in</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Instagram</h4>
                    <p className="text-white/40 text-sm">@jshospital</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">LinkedIn</h4>
                    <p className="text-white/40 text-sm">JS Hospital India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 bg-primary/10 rounded-3xl border border-primary/20">
              <p className="text-white font-bold italic">
                "Your health is our priority. We are committed to providing you with the best care possible."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <span className="text-white/60 text-sm font-bold uppercase tracking-widest">The JS Hospital Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4">Visit Our Hospital</h2>
          <p className="text-slate-500">Find us at the heart of Health City, Mumbai.</p>
        </div>
        
        <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6904.845737599021!2d73.82318170661634!3d18.46022800059472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2954bcce3fe97%3A0xa93f4ba9766fe85e!2sJS%20HOSPITAL!5e0!3m2!1sen!2sin!4v1774348949056!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <div className="bg-white">
      <Hero />
      <ContactCards />
      <ContactForm />
      <MapSection />
    </div>
  );
};
