import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOCTORS, CENTERS_OF_EXCELLENCE } from '../constants';

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: 1, name: 'Specialization', icon: Stethoscope },
    { id: 2, name: 'Schedule', icon: Calendar },
    { id: 3, name: 'Verification', icon: ShieldCheck },
  ];

  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${currentStep >= step.id ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110' : 'bg-slate-100 text-slate-400'}`}>
              <step.icon size={24} />
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${currentStep >= step.id ? 'text-primary' : 'text-slate-400'}`}>
              {step.name}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-12 h-0.5 rounded-full transition-all duration-500 ${currentStep > step.id ? 'bg-primary' : 'bg-slate-100'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialization: '',
    doctorId: '',
    date: '',
    time: '',
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    reason: ''
  });

  const selectedDoctor = DOCTORS.find(d => d.id === formData.doctorId);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Appointment Booking</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 leading-tight mb-6">
              Secure Your <span className="text-primary">Care.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Book your consultation with India's leading specialists in just a few simple steps.
            </p>
          </div>

          <StepIndicator currentStep={step} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                          <Stethoscope className="text-primary" size={24} /> Select Department
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {CENTERS_OF_EXCELLENCE.map((center) => (
                            <button 
                              key={center.id}
                              onClick={() => setFormData({ ...formData, specialization: center.title, doctorId: '' })}
                              className={`p-6 rounded-3xl border-2 transition-all text-center group ${formData.specialization === center.title ? 'border-primary bg-primary/5 shadow-lg' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}
                            >
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors ${formData.specialization === center.title ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                                <CheckCircle2 size={24} />
                              </div>
                              <span className={`font-bold text-sm uppercase tracking-wider ${formData.specialization === center.title ? 'text-primary' : 'text-slate-500'}`}>
                                {center.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {formData.specialization && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <User className="text-primary" size={24} /> Choose Your Specialist
                          </h3>
                          <div className="space-y-4">
                            {DOCTORS.filter(d => d.specialization === formData.specialization).map((doctor) => (
                              <button 
                                key={doctor.id}
                                onClick={() => setFormData({ ...formData, doctorId: doctor.id })}
                                className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group ${formData.doctorId === doctor.id ? 'border-primary bg-primary/5 shadow-lg' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}
                              >
                                <img 
                                  src={doctor.image} 
                                  alt={doctor.name} 
                                  className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-sm"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="flex-grow">
                                  <h4 className={`font-display font-bold ${formData.doctorId === doctor.id ? 'text-primary' : 'text-slate-900'}`}>{doctor.name}</h4>
                                  <p className="text-xs text-slate-500 font-medium">{doctor.qualifications}</p>
                                </div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${formData.doctorId === doctor.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-300 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                                  <ChevronRight size={18} />
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      <div className="pt-8 flex justify-end">
                        <button 
                          disabled={!formData.doctorId}
                          onClick={handleNext}
                          className="bg-primary hover:bg-secondary disabled:bg-slate-200 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                        >
                          Continue to Schedule <ChevronRight size={20} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-primary transition-colors">
                        <ArrowLeft size={16} /> Back to Specialists
                      </button>

                      <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                          <Calendar className="text-primary" size={24} /> Select Date
                        </h3>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                          {[...Array(7)].map((_, i) => {
                            const date = new Date();
                            date.setDate(date.getDate() + i);
                            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                            const dayNum = date.getDate();
                            const fullDate = date.toISOString().split('T')[0];
                            const isActive = formData.date === fullDate;

                            return (
                              <button 
                                key={i}
                                onClick={() => setFormData({ ...formData, date: fullDate })}
                                className={`p-4 rounded-2xl border-2 transition-all text-center ${isActive ? 'border-primary bg-primary text-white shadow-lg' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}
                              >
                                <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>{dayName}</div>
                                <div className="text-xl font-display font-bold">{dayNum}</div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {formData.date && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Clock className="text-primary" size={24} /> Available Slots
                          </h3>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {timeSlots.map((time) => (
                              <button 
                                key={time}
                                onClick={() => setFormData({ ...formData, time })}
                                className={`py-4 rounded-2xl border-2 transition-all font-bold text-sm ${formData.time === time ? 'border-primary bg-primary text-white shadow-lg' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50 text-slate-600'}`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      <div className="pt-8 flex justify-end">
                        <button 
                          disabled={!formData.time}
                          onClick={handleNext}
                          className="bg-primary hover:bg-secondary disabled:bg-slate-200 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                        >
                          Patient Information <ChevronRight size={20} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-primary transition-colors">
                        <ArrowLeft size={16} /> Back to Schedule
                      </button>

                      <div>
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-3">
                          <User className="text-primary" size={24} /> Patient Details
                        </h3>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                  type="text" 
                                  placeholder="Enter patient's name" 
                                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
                                  value={formData.patientName}
                                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                  type="tel" 
                                  placeholder="+91 00000 00000" 
                                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
                                  value={formData.patientPhone}
                                  onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                              <input 
                                type="email" 
                                placeholder="patient@example.com" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
                                value={formData.patientEmail}
                                onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Reason for Visit</label>
                            <textarea 
                              placeholder="Briefly describe your symptoms or reason for visit..." 
                              rows={4}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 focus:outline-none focus:border-primary transition-all resize-none"
                              value={formData.reason}
                              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-8">
                        <button 
                          disabled={!formData.patientName || !formData.patientPhone}
                          className="w-full bg-primary hover:bg-secondary disabled:bg-slate-200 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                        >
                          Confirm Appointment <ArrowRight size={24} />
                        </button>
                        <p className="text-center text-slate-400 text-xs mt-6 flex items-center justify-center gap-2">
                          <ShieldCheck size={14} /> Your data is encrypted and secure with The Sanctuary.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-32 shadow-2xl">
                <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                  <AlertCircle className="text-primary" size={20} /> Appointment Summary
                </h3>

                <div className="space-y-8">
                  {selectedDoctor ? (
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <img 
                        src={selectedDoctor.image} 
                        alt={selectedDoctor.name} 
                        className="w-16 h-16 rounded-xl object-cover border-2 border-primary"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-display font-bold">{selectedDoctor.name}</div>
                        <div className="text-xs text-primary font-bold uppercase tracking-wider">{selectedDoctor.specialization}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 border-dashed text-white/40 text-sm text-center">
                      No specialist selected
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/40 font-medium">Consultation Fee</span>
                      <span className="font-bold">₹1,500</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/40 font-medium">Service Charge</span>
                      <span className="font-bold">₹50</span>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="font-display font-bold">Total Amount</span>
                      <span className="text-2xl font-display font-extrabold text-primary">₹1,550</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-primary shrink-0" size={18} />
                      <div>
                        <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Date</div>
                        <div className="text-sm font-bold">{formData.date || 'Not selected'}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-primary shrink-0" size={18} />
                      <div>
                        <div className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Time</div>
                        <div className="text-sm font-bold">{formData.time || 'Not selected'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      <CreditCard size={14} /> Payment Method
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Payment will be collected at the hospital reception upon arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
