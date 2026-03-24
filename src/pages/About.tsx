import React from 'react';
import {
  Award,
  Users,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Stethoscope,
  Activity,
  Microscope,
  Building2,
  Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { DOCTORS } from '../constants';
import bedsImg from "../../assets/images/Beds2.jpeg";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="Hospital Background"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <Award className="text-primary w-5 h-5" />
          <span className="text-white text-sm font-bold tracking-wide uppercase">10+ Years of Medical Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-8"
        >
          A Legacy of <span className="text-primary">Trust</span> & <span className="text-secondary">Healing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Since 2019, JS Hospital has been at the forefront of healthcare in India, combining advanced medical technology with a patient-first philosophy.
        </motion.p>

        {/* Stats Infographic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Specialists', value: '20+', icon: Users },
            { label: 'Beds Capacity', value: '30+', icon: Building2 },
            { label: 'Success Rate', value: '100%', icon: Activity },
            { label: 'Research Papers', value: '10+', icon: Microscope },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide compassionate, accessible, and high-quality healthcare that empowers our patients and communities. We strive to be the hospital where medical excellence meets human empathy.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 text-primary/5 group-hover:text-primary/10 transition-colors">
              <Target size={200} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To be the global benchmark for clinical excellence and patient-centric care. We envision a future where advanced medicine is delivered with the warmth and trust of a hospital.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-white/10 transition-colors">
              <Eye size={200} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const leaders = [
    { name: DOCTORS[0].name, role: DOCTORS[0].title, image: DOCTORS[0].image },
    { name: DOCTORS[1].name, role: DOCTORS[1].title, image: DOCTORS[1].image },
    { name: DOCTORS[2].name, role: DOCTORS[2].title, image: DOCTORS[2].image },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Leadership</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Guided by Clinical <span className="text-primary">Visionaries</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[4/5] shadow-2xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                      <Linkedin size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-1">{leader.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Facilities</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
              World-Class <span className="text-primary">Infrastructure</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Our hospital is designed to facilitate healing through modern architecture and advanced medical technology. Every corner is optimized for patient comfort and safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Robotic Surgery', desc: 'Precision-guided surgical systems for complex procedures.', icon: Stethoscope },
                { title: 'Smart ICUs', desc: '24/7 monitoring with AI-driven patient tracking.', icon: Activity },
                { title: 'Eco-Friendly Campus', desc: 'Eco-friendly design promoting a healing atmosphere.', icon: Heart },
                { title: 'Digital Health', desc: 'Seamless electronic medical records for better care.', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Facility 1"
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Facility 2"
                  className="rounded-3xl shadow-2xl w-full object-cover h-48"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img
                  //src="https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=400&h=400"
                  src={bedsImg}
                  alt="Facility 3"
                  className="rounded-3xl shadow-2xl w-full object-cover h-48"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Facility 4"
                  className="rounded-3xl shadow-2xl w-full object-cover h-64"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Accreditations = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4">Our Accreditations</h2>
          <p className="text-slate-500">Recognized globally for our commitment to quality and safety.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {['NABH', 'JCI', 'NABL', 'ISO 9001', 'Eco-Friendly Hospital'].map((item) => (
            <div key={item} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Award size={40} className="text-primary" />
              </div>
              <span className="font-bold text-slate-900 tracking-widest uppercase text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <div className="bg-white">
      <Hero />
      <MissionVision />
      <Leadership />
      <Infrastructure />
      <Accreditations />

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
            Experience the JS Hospital Care Today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl">
              Book Appointment
            </Link>
            <Link to="/contact" className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
};
