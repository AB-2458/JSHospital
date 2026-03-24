import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Baby, 
  Brain, 
  Stethoscope, 
  Search, 
  Pill, 
  Video, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Phone,
  Microscope,
  Syringe,
  Thermometer,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { CENTERS_OF_EXCELLENCE, SERVICES } from '../constants';

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
            <span className="text-primary text-sm font-bold tracking-wide uppercase">Comprehensive Medical Care</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-8"
          >
            Comprehensive Care for a <span className="text-primary">Healthy Life.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-500 leading-relaxed mb-12"
          >
            From preventive checkups to complex surgeries, JS Hospital offers a wide range of medical services delivered by world-class experts.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <Link to="/booking" className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
              Book Appointment <ArrowRight size={20} />
            </Link>
            <Link to="/doctors" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
              Find a Doctor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecializedWings = () => {
  const icons = {
    Heart,
    Activity,
    Baby,
    Brain
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Specialized Medical <span className="text-primary">Wings</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CENTERS_OF_EXCELLENCE.map((center, i) => {
            const Icon = icons[center.icon as keyof typeof icons];
            return (
              <motion.div 
                key={center.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                id={center.id}
                className="group relative overflow-hidden rounded-[3rem] bg-slate-50 p-12 hover:bg-primary transition-all duration-500"
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-10">
                  <div className="shrink-0">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-colors">
                      <Icon className="text-primary w-10 h-10 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 group-hover:text-white transition-colors">
                      {center.title}
                    </h3>
                    <p className="text-lg text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed mb-8">
                      {center.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {['Advanced Diagnostics', 'Expert Surgeons', '24/7 Care', 'Modern Tech'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-white/60 transition-colors">
                          <Plus size={14} className="text-primary group-hover:text-white" /> {item}
                        </li>
                      ))}
                    </ul>
                    <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm shadow-xl group-hover:bg-slate-100 transition-all">
                      Consult Specialist <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
                
                {/* Background Image Overlay */}
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src={center.image} 
                    alt={center.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GeneralServices = () => {
  const icons = {
    AlertCircle: Clock,
    Search: Search,
    Pill: Pill,
    Video: Video
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Essential Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            Modern Infrastructure for <span className="text-primary">Modern Medicine</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons] || Stethoscope;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4">{service.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{service.description}</p>
                <Link to="#" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQs = () => {
  const faqs = [
    { q: 'How do I book an appointment?', a: 'You can book an appointment through our website booking portal, by calling our 24/7 hotline, or by visiting our hospital reception.' },
    { q: 'Do you accept international insurance?', a: 'Yes, we partner with major international insurance providers. Please check our insurance section or contact our billing department for details.' },
    { q: 'What are the visiting hours for inpatients?', a: 'General visiting hours are from 10:00 AM to 12:00 PM and 04:00 PM to 07:00 PM daily. Only one visitor is allowed at a time.' },
    { q: 'Is emergency care available 24/7?', a: 'Absolutely. Our emergency and trauma center is fully equipped and staffed 24 hours a day, 365 days a year.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
          <h2 className="text-4xl font-display font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 hover:bg-slate-100 transition-colors cursor-default">
              <h4 className="text-lg font-display font-bold text-slate-900 mb-4 flex items-center gap-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm shrink-0">Q</div>
                {faq.q}
              </h4>
              <p className="text-slate-600 leading-relaxed pl-12">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <div className="bg-white">
      <Hero />
      <SpecializedWings />
      <GeneralServices />
      <FAQs />
      
      {/* Triage CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">
                  Not sure where to start?
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  Our medical triage team can help you identify the right department and specialist for your symptoms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+917745849680" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-2">
                    <Phone size={20} /> Call Triage Team
                  </a>
                  <Link to="/booking" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                    Book General Checkup
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center relative">
                  <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <Stethoscope size={80} className="text-primary" />
                    </div>
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div className="absolute bottom-10 -left-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                    <Activity className="text-primary" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100" stroke="white" strokeWidth="0.1" fill="none" />
                <path d="M0 80 C 30 20 60 20 100 80" stroke="white" strokeWidth="0.1" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
