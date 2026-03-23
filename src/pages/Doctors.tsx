import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Calendar,
  Languages,
  GraduationCap,
  Briefcase,
  Phone,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTORS } from '../constants';
import { Doctor } from '../types';

const DoctorCard = ({ doctor }: any) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
    >
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-64 h-80 md:h-auto shrink-0 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            {doctor.availableToday ? (
              <div className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Available Today
              </div>
            ) : (
              <div className="bg-slate-900/60 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                Next: Tomorrow
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold text-white">{doctor.rating}</span>
            </div>
            <span className="text-xs text-white/80 font-medium">{doctor.reviews} Reviews</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-grow flex flex-col justify-between py-2">
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{doctor.specialization}</p>
              </div>
              <div className="flex gap-2">
                {doctor.languages.map((lang: string) => (
                  <span key={lang} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded-md">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Qualifications</p>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{doctor.qualifications}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Experience</p>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">{doctor.experience} in {doctor.specialization}</p>
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-8">
              {doctor.about}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
            <Link 
              to="/booking" 
              className="flex-grow bg-primary hover:bg-secondary text-white font-bold py-4 rounded-2xl text-center transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Book Appointment
            </Link>
            <Link 
              to={`/doctors/${doctor.id}`} 
              className="flex-grow bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-4 rounded-2xl text-center transition-all flex items-center justify-center gap-2"
            >
              View Profile <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FilterSidebar = ({ activeFilters, setActiveFilters }: { activeFilters: any, setActiveFilters: any }) => {
  const specializations = ['Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology', 'Dermatology', 'Oncology'];
  const experiences = ['0-5 Years', '5-10 Years', '10-15 Years', '15+ Years'];
  const availability = ['Available Today', 'Available Tomorrow', 'Weekend Availability'];

  return (
    <div className="space-y-10 sticky top-32">
      <div>
        <h4 className="font-display font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
          <Filter size={18} className="text-primary" /> Filter Results
        </h4>
        
        <div className="space-y-8">
          {/* Specialization */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Specialization</p>
            <div className="space-y-3">
              {specializations.map((spec) => (
                <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${activeFilters.specialization.includes(spec) ? 'bg-primary border-primary' : 'border-slate-200 group-hover:border-primary'}`}>
                    {activeFilters.specialization.includes(spec) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={activeFilters.specialization.includes(spec)}
                    onChange={() => {
                      const newSpecs = activeFilters.specialization.includes(spec)
                        ? activeFilters.specialization.filter((s: string) => s !== spec)
                        : [...activeFilters.specialization, spec];
                      setActiveFilters({ ...activeFilters, specialization: newSpecs });
                    }}
                  />
                  <span className={`text-sm font-medium transition-colors ${activeFilters.specialization.includes(spec) ? 'text-slate-900' : 'text-slate-500 group-hover:text-primary'}`}>
                    {spec}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Experience</p>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${activeFilters.experience === exp ? 'border-primary' : 'border-slate-200 group-hover:border-primary'}`}>
                    {activeFilters.experience === exp && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    name="experience"
                    className="hidden" 
                    checked={activeFilters.experience === exp}
                    onChange={() => setActiveFilters({ ...activeFilters, experience: exp })}
                  />
                  <span className={`text-sm font-medium transition-colors ${activeFilters.experience === exp ? 'text-slate-900' : 'text-slate-500 group-hover:text-primary'}`}>
                    {exp}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Availability</p>
            <div className="space-y-3">
              {availability.map((avail) => (
                <label key={avail} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${activeFilters.availability.includes(avail) ? 'bg-primary border-primary' : 'border-slate-200 group-hover:border-primary'}`}>
                    {activeFilters.availability.includes(avail) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={activeFilters.availability.includes(avail)}
                    onChange={() => {
                      const newAvail = activeFilters.availability.includes(avail)
                        ? activeFilters.availability.filter((a: string) => a !== avail)
                        : [...activeFilters.availability, avail];
                      setActiveFilters({ ...activeFilters, availability: newAvail });
                    }}
                  />
                  <span className={`text-sm font-medium transition-colors ${activeFilters.availability.includes(avail) ? 'text-slate-900' : 'text-slate-500 group-hover:text-primary'}`}>
                    {avail}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setActiveFilters({ specialization: [], experience: '', availability: [] })}
          className="mt-10 w-full py-3 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
        >
          <X size={14} /> Reset All Filters
        </button>
      </div>

      {/* Help Card */}
      <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h5 className="font-display font-bold text-xl mb-4">Need Help?</h5>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Not sure which specialist to choose? Our medical coordinators can help you find the right doctor.
          </p>
          <a href="tel:+911800726288" className="inline-flex items-center gap-2 font-bold text-sm bg-white text-primary px-4 py-2 rounded-lg">
            Call Coordinator
          </a>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <Phone size={100} />
        </div>
      </div>
    </div>
  );
};

export const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    specialization: [] as string[],
    experience: '',
    availability: [] as string[]
  });

  const filteredDoctors = DOCTORS.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpec = activeFilters.specialization.length === 0 || activeFilters.specialization.includes(doctor.specialization);
    // Add more filter logic as needed
    return matchesSearch && matchesSpec;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Expert Care</span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 leading-tight mb-6">
                World-Class Care,<br />
                <span className="text-primary">Closer to You.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Connect with India's leading medical specialists. Our doctors are committed to providing personalized and compassionate care.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="w-full md:w-96 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="text-slate-400" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search by name or specialty..." 
                className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <FilterSidebar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8">
              <p className="text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">{filteredDoctors.length}</span> specialists
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Sort By:</span>
                <select className="bg-transparent font-bold text-sm text-slate-900 focus:outline-none cursor-pointer">
                  <option>Recommended</option>
                  <option>Rating: High to Low</option>
                  <option>Experience: High to Low</option>
                </select>
              </div>
            </div>

            <div className="space-y-8">
              <AnimatePresence mode="popLayout">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </AnimatePresence>

              {filteredDoctors.length === 0 && (
                <div className="bg-white rounded-[2rem] p-20 text-center border border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="text-slate-300" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">No doctors found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search query.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
