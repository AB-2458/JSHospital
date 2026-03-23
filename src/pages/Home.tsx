import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Heart, 
  Activity, 
  Baby, 
  Brain, 
  Star,
  Play,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { CENTERS_OF_EXCELLENCE, TESTIMONIALS, DOCTORS } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Hospital Corridor" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
          >
            <Shield className="text-primary w-5 h-5" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">NABH Accredited Healthcare</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8"
          >
            Care that <span className="text-primary">Empowers</span>,<br />
            Trust that <span className="text-secondary">Heals</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Experience world-class medical excellence at Clinical Sanctuary. We combine cutting-edge technology with compassionate care to ensure your journey to wellness is seamless.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/booking" 
              className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-2xl"
            >
              Book Appointment <ArrowRight size={20} />
            </Link>
            <a 
              href="tel:+911800726288" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <Phone size={20} /> Call Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10"
          >
            {[
              { label: 'Years of Trust', value: '25+' },
              { label: 'Expert Doctors', value: '500+' },
              { label: 'Patients Healed', value: '1M+' },
              { label: 'Patient Rating', value: '4.8/5' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Video Preview */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-20 right-20 z-20"
      >
        <div className="relative group cursor-pointer">
          <div className="w-64 h-40 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" 
              alt="Video Preview" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-primary ml-1" fill="currentColor" size={20} />
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-xl">
            <Award size={24} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const CentersOfExcellence = () => {
  const icons = {
    Heart,
    Activity,
    Baby,
    Brain
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Specializations</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
              Our Centers of <span className="text-primary">Excellence</span>
            </h2>
          </div>
          <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Specialties <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CENTERS_OF_EXCELLENCE.map((center, i) => {
            const Icon = icons[center.icon as keyof typeof icons];
            return (
              <motion.div 
                key={center.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-50 p-8 hover:bg-primary transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/20 transition-colors">
                    <Icon className="text-primary w-8 h-8 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                    {center.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">
                    {center.description}
                  </p>
                  <Link to={`/services#${center.id}`} className="mt-8 flex items-center gap-2 text-primary font-bold group-hover:text-white transition-colors">
                    Learn More <ChevronRight size={18} />
                  </Link>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon size={120} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SanctuaryDifference = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Hospital Facility" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Patient Care" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-48"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Modern Equipment" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-48"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400&h=500" 
                  alt="Doctor Consulting" 
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Users className="text-primary w-8 h-8" />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-slate-900">1M+</div>
                <div className="text-sm text-slate-500 font-medium">Happy Patients</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
              The Sanctuary <span className="text-primary">Difference</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              We provide a healing environment that goes beyond medical treatment. Our holistic approach ensures that every patient feels supported, cared for, and empowered.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Advanced Medical Tech', desc: 'Equipped with the latest diagnostic and surgical robotics.' },
                { title: 'Patient-Centric Approach', desc: 'Personalized care plans tailored to individual needs.' },
                { title: 'Global Standards', desc: 'Following international protocols for safety and hygiene.' },
                { title: 'Compassionate Staff', desc: 'A team dedicated to making your recovery comfortable.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors">
                  <div className="mt-1">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-12 inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all shadow-xl">
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Specialists = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Meet Our Experts</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
              Our Leading <span className="text-primary">Specialists</span>
            </h2>
          </div>
          <Link to="/doctors" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View All Doctors <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor, i) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/5] shadow-lg">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <Link to="/booking" className="bg-white text-primary font-bold py-3 rounded-xl text-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Book Appointment
                  </Link>
                </div>
                {doctor.availableToday && (
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    Available Today
                  </div>
                )}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-bold text-slate-900">{doctor.rating}</span>
                  <span className="text-xs text-slate-400 font-medium">({doctor.reviews})</span>
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-1">{doctor.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{doctor.specialization}</p>
                <p className="text-slate-500 text-xs font-medium">{doctor.qualifications}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
            Voices of <span className="text-primary">Healing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative"
            >
              <div className="flex gap-1 text-amber-500 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-white/80 leading-relaxed italic mb-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
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
    </section>
  );
};

const InsuranceMarquee = () => {
  const partners = [
    'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Care Health', 'Niva Bupa', 'Bajaj Allianz', 'TATA AIG'
  ];

  return (
    <div className="bg-slate-50 py-10 border-y border-slate-200 overflow-hidden">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {[...partners, ...partners].map((partner, i) => (
          <div key={i} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="w-10 h-10 bg-slate-300 rounded-lg" />
            <span className="text-xl font-display font-bold text-slate-900">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-12">
              Visit The <span className="text-primary">Sanctuary</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Our Location</h4>
                  <p className="text-white/60 leading-relaxed">
                    123 Sanctuary Road, Health City,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Contact Details</h4>
                  <p className="text-white/60 leading-relaxed">
                    Emergency: +91 1800-SANCTUARY<br />
                    General: +91 22 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Working Hours</h4>
                  <p className="text-white/60 leading-relaxed">
                    OPD: 08:00 AM - 08:00 PM<br />
                    Emergency: Open 24 Hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <Link to="/booking" className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl">
                Book Appointment
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Get Directions
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.482270928424!2d72.82361717520448!3d19.04252608215579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b6330414c2012!2sLilavati%20Hospital%20And%20Research%20Centre!5e0!3m2!1sen!2sin!4v1711194321234!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale invert opacity-80"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <CentersOfExcellence />
      <SanctuaryDifference />
      <Specialists />
      <Testimonials />
      <InsuranceMarquee />
      <ContactSection />
    </div>
  );
};
