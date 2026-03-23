import { Doctor, CenterOfExcellence, Testimonial, Service } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Ananya Sharma',
    title: 'Senior Consultant',
    specialization: 'Cardiology',
    qualifications: 'MD, DM (Cardiology), FACC',
    experience: '15+ Years',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.9,
    reviews: 1250,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Sharma is a renowned cardiologist specializing in interventional cardiology and heart failure management.'
  },
  {
    id: '2',
    name: 'Dr. Vikram Malhotra',
    title: 'Chief Surgeon',
    specialization: 'Orthopedics',
    qualifications: 'MS (Ortho), MCh (Ortho), FRCS',
    experience: '20+ Years',
    languages: ['English', 'Hindi', 'Punjabi'],
    rating: 4.8,
    reviews: 980,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Malhotra specializes in joint replacement surgeries and sports medicine.'
  },
  {
    id: '3',
    name: 'Dr. Priya Iyer',
    title: 'Senior Consultant',
    specialization: 'Pediatrics',
    qualifications: 'MD (Pediatrics), DCH',
    experience: '12+ Years',
    languages: ['English', 'Tamil', 'Hindi'],
    rating: 4.9,
    reviews: 1500,
    availableToday: false,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Iyer is passionate about child healthcare and developmental pediatrics.'
  },
  {
    id: '4',
    name: 'Dr. Sameer Deshmukh',
    title: 'Director',
    specialization: 'Neurology',
    qualifications: 'MD, DM (Neurology), PhD',
    experience: '18+ Years',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.7,
    reviews: 850,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Deshmukh is an expert in neuro-rehabilitation and complex neurological disorders.'
  }
];

export const CENTERS_OF_EXCELLENCE: CenterOfExcellence[] = [
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art cath labs and expert surgeons.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    description: 'Comprehensive bone and joint care including robotic surgeries.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Compassionate healthcare for children from birth through adolescence.',
    icon: 'Baby',
    image: 'https://images.unsplash.com/photo-1581594658553-359424894293?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'neurology',
    title: 'Neurology',
    description: 'Expert treatment for brain, spine, and nervous system disorders.',
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    text: 'The care I received at Clinical Sanctuary was exceptional. The doctors and staff were professional and empathetic throughout my recovery.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    name: 'Sneha Patil',
    location: 'Pune',
    text: 'I highly recommend the pediatric department. They made my daughter feel so comfortable during her treatment.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    name: 'Amitabh Singh',
    location: 'Delhi',
    text: 'World-class facilities right here in India. The orthopedic team is truly the best in the country.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: '24/7 Emergency',
    description: 'Immediate medical attention for critical situations.',
    icon: 'AlertCircle'
  },
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostics',
    description: 'Precise imaging and laboratory testing services.',
    icon: 'Search'
  },
  {
    id: 'pharmacy',
    title: 'In-house Pharmacy',
    description: 'Quick access to prescribed medications.',
    icon: 'Pill'
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine',
    description: 'Consult with our experts from the comfort of your home.',
    icon: 'Video'
  }
];
