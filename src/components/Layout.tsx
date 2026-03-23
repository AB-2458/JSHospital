import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  X, 
  Home as HomeIcon, 
  Users, 
  Calendar, 
  Info, 
  Stethoscope,
  MessageCircle,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>Clinical Sanctuary</span>
              <span className={`text-[10px] tracking-[0.2em] uppercase font-medium ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>India</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? 'text-secondary' : isScrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-slate-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-primary px-4 py-2 rounded-xl hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Stethoscope className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">Clinical Sanctuary</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/60">India</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in medical excellence and compassionate care. Our sanctuary is dedicated to your health and well-being.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Our Doctors', 'Medical Services', 'About Us', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-400 hover:text-white flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>123 Sanctuary Road, Health City,<br />Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 1800-SANCTUARY</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} className="text-primary shrink-0" />
                <span>care@clinicalsanctuary.in</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Clock size={20} className="text-primary shrink-0" />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe for health tips and sanctuary updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-xl transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Clinical Sanctuary India. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <Link to="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileBottomNav = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Doctors', path: '/doctors', icon: Users },
    { name: 'Book', path: '/booking', icon: Calendar },
    { name: 'Services', path: '/services', icon: Stethoscope },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl px-6 py-3 flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-primary scale-110' : 'text-slate-400'}`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const WhatsAppFAB = () => (
  <a 
    href="https://wa.me/911234567890" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <MessageCircle size={28} fill="currentColor" />
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us
    </span>
  </a>
);

const EmergencyBanner = () => (
  <div className="bg-emergency text-white py-2 px-4 text-center text-sm font-bold tracking-wide z-[60] relative">
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
      <span className="flex items-center gap-2">
        <Phone size={14} fill="currentColor" />
        EMERGENCY HOTLINE: 1800-SANCTUARY
      </span>
      <span className="hidden md:inline opacity-60">|</span>
      <span className="hidden md:inline">Ambulance available 24/7 across major cities</span>
    </div>
  </div>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      <WhatsAppFAB />
    </div>
  );
};
