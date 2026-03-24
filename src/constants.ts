import { Doctor, CenterOfExcellence, Testimonial, Service } from './types';

import drUmeshImg from '../assets/images/dr-umesh-jadhav.jpeg';
import drSabrinaImg from '../assets/images/dr-sabrina-bokil-obstetrician.jpeg';
import drSurajImg from '../assets/images/dr-suraj-lunavat-urologist.jpeg';
import drRamanImg from '../assets/images/dr-raman-gaikwad-infectious-diseases-physician.jpeg';
import drPriyaImg from '../assets/images/dr-priya-palimkar-cardiologist.jpeg';
import drNandiniImg from '../assets/images/dr-nandini-shete-obstetrician.jpeg';
import drKiranjitImg from '../assets/images/dr-kiranjit-singh-general-physician.jpeg';
import drDeepaliImg from '../assets/images/dr-deepali-nirawane-gynecologist.jpeg';
import drAshishImg from '../assets/images/dr-ashish-goyal-pulmonologist.jpeg';
import drAjitImg from '../assets/images/dr-ajit-mehta-cardiologist.jpeg';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Umesh Pandurang Jadhav',
    title: 'Chief Gynaecologist',
    specialization: 'Gynaecology & Maternity',
    qualifications: 'DGO',
    experience: '10+ Years',
    languages: ['English', 'Marathi', 'Hindi'],
    rating: 5.0,
    reviews: 320,
    availableToday: true,
    image: drUmeshImg,
    about: 'Dr. Umesh Jadhav is a highly respected gynaecologist dedicated to women\'s health and maternity care.'
  },
  {
    id: '2',
    name: 'Dr. Sabrina Bokil',
    title: 'Senior Consultant',
    specialization: 'Gynaecology & Maternity',
    qualifications: 'MD (Obstetrics & Gynaecology)',
    experience: '12+ Years',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.8,
    reviews: 145,
    availableToday: true,
    image: drSabrinaImg,
    about: 'Dr. Bokil specializes in high-risk pregnancies and modern gynaecological procedures.'
  },
  {
    id: '3',
    name: 'Dr. Priya Palimkar',
    title: 'Senior Cardiologist',
    specialization: 'Cardiology',
    qualifications: 'MD, DM (Cardiology)',
    experience: '15+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.9,
    reviews: 599,
    availableToday: true,
    image: drPriyaImg,
    about: 'Dr. Palimkar is a leading expert in interventional cardiology and structural heart diseases.'
  },
  {
    id: '4',
    name: 'Dr. Kiranjit Singh',
    title: 'General Physician',
    specialization: 'General Medicine',
    qualifications: 'MD (General Medicine)',
    experience: '14+ Years',
    languages: ['English', 'Hindi', 'Punjabi'],
    rating: 4.6,
    reviews: 215,
    availableToday: true,
    image: drKiranjitImg,
    about: 'Dr. Singh provides comprehensive care for managing chronic conditions and acute illnesses.'
  },
  {
    id: '5',
    name: 'Dr. Ashish Goyal',
    title: 'Pulmonologist',
    specialization: 'Laparoscopic Surgery', // Reusing centers of excellence mapping if needed
    qualifications: 'MD (Pulmonary Medicine)',
    experience: '11+ Years',
    languages: ['English', 'Hindi'],
    rating: 4.7,
    reviews: 144,
    availableToday: false,
    image: drAshishImg,
    about: 'Dr. Goyal is well-regarded for his expertise in respiratory medicine and critical care.'
  },
  {
    id: '6',
    name: 'Dr. Bhagyashree Khaladkar',
    title: 'Surgical Oncologist',
    specialization: 'Oncology',
    qualifications: 'MS, MCh (Surgical Oncology)',
    experience: '9+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.8,
    reviews: 102,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Khaladkar offers advanced surgical interventions for various types of cancers.'
  },
  {
    id: '7',
    name: 'Dr. Raman Gaikwad',
    title: 'Infectious Diseases',
    specialization: 'General Medicine',
    qualifications: 'MD (Infectious Diseases)',
    experience: '13+ Years',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.5,
    reviews: 89,
    availableToday: true,
    image: drRamanImg,
    about: 'Dr. Gaikwad is an expert in treating complex and tropical infectious diseases.'
  },
  {
    id: '8',
    name: 'Dr. Suraj Lunavat',
    title: 'Urologist',
    specialization: 'Laparoscopic Surgery',
    qualifications: 'MS, DNB (Urology)',
    experience: '10+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.9,
    reviews: 614,
    availableToday: true,
    image: drSurajImg,
    about: 'Dr. Lunavat specializes in endourology and advanced laparoscopic urological procedures.'
  },
  {
    id: '9',
    name: 'Dr. Ajit Mehta',
    title: 'Cardiologist',
    specialization: 'Cardiology',
    qualifications: 'MD, DM (Cardiology)',
    experience: '18+ Years',
    languages: ['English', 'Hindi'],
    rating: 4.7,
    reviews: 210,
    availableToday: false,
    image: drAjitImg,
    about: 'Dr. Mehta is a veteran cardiologist with vast experience in clinical cardiology.'
  },
  {
    id: '10',
    name: 'Dr. Deepali Nirawane',
    title: 'Consultant Gynecologist',
    specialization: 'Gynaecology & Maternity',
    qualifications: 'MS (OBGY)',
    experience: '8+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.6,
    reviews: 308,
    availableToday: true,
    image: drDeepaliImg,
    about: 'Dr. Nirawane is deeply committed to offering holistic maternity and gynecological care.'
  },
  {
    id: '11',
    name: 'Dr. Nandini Shete',
    title: 'Obstetrician & Gynaecologist',
    specialization: 'Gynaecology & Maternity',
    qualifications: 'DGO, DNB',
    experience: '7+ Years',
    languages: ['English', 'Hindi'],
    rating: 4.5,
    reviews: 180,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Shete provides comprehensive antenatal and postnatal care for women.'
  },
  {
    id: '12',
    name: 'Dr. Sameer Kulkarni',
    title: 'Neurologist',
    specialization: 'Neurology',
    qualifications: 'MD, DM (Neurology)',
    experience: '14+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.8,
    reviews: 420,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Kulkarni has extensive experience in treating neurological and stroke patients.'
  },
  {
    id: '13',
    name: 'Dr. Aditi Sharma',
    title: 'Endocrinologist',
    specialization: 'General Medicine',
    qualifications: 'MD, DM (Endocrinology)',
    experience: '12+ Years',
    languages: ['English', 'Hindi'],
    rating: 4.7,
    reviews: 310,
    availableToday: false,
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Sharma is leading our diabetes and metabolic disorders wing.'
  },
  {
    id: '14',
    name: 'Dr. Rohan Joshi',
    title: 'Gastroenterologist',
    specialization: 'Laparoscopic Surgery',
    qualifications: 'MS, DNB',
    experience: '15+ Years',
    languages: ['English', 'Marathi', 'Hindi'],
    rating: 4.9,
    reviews: 580,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Joshi is known for his excellence in gastroenterology and liver diseases.'
  },
  {
    id: '15',
    name: 'Dr. Kavita Deshmukh',
    title: 'Dermatologist',
    specialization: 'General Medicine',
    qualifications: 'MD (Dermatology)',
    experience: '8+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.6,
    reviews: 230,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Deshmukh uses advanced aesthetic procedures to ensure the best skin care.'
  },
  {
    id: '16',
    name: 'Dr. Vikram Raut',
    title: 'Cardiothoracic Surgeon',
    specialization: 'Cardiology',
    qualifications: 'MCh (CTVS)',
    experience: '16+ Years',
    languages: ['English', 'Hindi'],
    rating: 4.8,
    reviews: 490,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127d09e?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Raut is a pioneer in complex minimally invasive heart surgeries.'
  },
  {
    id: '17',
    name: 'Dr. Snehal Patil',
    title: 'Consultant Neurologist',
    specialization: 'Neurology',
    qualifications: 'MD, DM',
    experience: '9+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.7,
    reviews: 190,
    availableToday: false,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Patil is highly skilled in treating movement disorders and epilepsy.'
  },
  {
    id: '18',
    name: 'Dr. Pratik Shah',
    title: 'ENT Surgeon',
    specialization: 'Laparoscopic Surgery',
    qualifications: 'MS (ENT)',
    experience: '11+ Years',
    languages: ['English', 'Gujarati', 'Hindi'],
    rating: 4.5,
    reviews: 150,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Shah provides comprehensive ear, nose, and throat care and surgeries.'
  },
  {
    id: '19',
    name: 'Dr. Anjali Deshpande',
    title: 'Ophthalmologist',
    specialization: 'General Medicine',
    qualifications: 'MD (Ophthalmology)',
    experience: '13+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.9,
    reviews: 340,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Deshpande specializes in advanced cataract surgeries and retina treatments.'
  },
  {
    id: '20',
    name: 'Dr. Manish Pawar',
    title: 'Consultant Psychiatrist',
    specialization: 'Neurology',
    qualifications: 'MD (Psychiatry)',
    experience: '10+ Years',
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.7,
    reviews: 210,
    availableToday: false,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Pawar brings a compassionate approach to mental health and neuro-psychology.'
  },
  {
    id: '21',
    name: 'Dr. Pooja Kadam',
    title: 'Dentist & Orthodontist',
    specialization: 'General Medicine',
    qualifications: 'MDS',
    experience: '7+ Years',
    languages: ['English', 'Marathi'],
    rating: 4.6,
    reviews: 135,
    availableToday: true,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    about: 'Dr. Kadam provides comprehensive dental care ranging from routine cleanings to implants.'
  }
];

export const CENTERS_OF_EXCELLENCE: CenterOfExcellence[] = [
  {
    id: 'gynaecology',
    title: 'Gynaecology & Maternity',
    description: 'Comprehensive care for women, including safe childbirth and advanced gynaecological procedures.',
    icon: 'Baby',
    image: 'https://images.unsplash.com/photo-1581594658553-359424894293?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art cath labs and expert surgeons.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'laparoscopic',
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical procedures ensuring precision and faster recovery.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'neurology',
    title: 'Neurology',
    description: 'Expert treatment for brain, spine, and complex nervous system disorders.',
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajshekhar KK',
    location: 'Pune',
    text: 'JS Hospital is an equipped medium size Hospital started around 6 to 7 years back in the outskirts of Pune City in a known area called Narhe. I reached the Hospital before half an hour and found the staff is very cooperative and supportive. The receptionist named Pratibha was a young and energetic lady who guided me well related to my tests. Another guy named Swapnil who took my blood sample and BP was also very expressive and cooperative. Overall I found it good to visit and well managed.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    name: 'Disha\'s hair extension & beauty salon',
    location: 'Pune',
    text: 'Doctor Jadhav is incredibly knowledgeable and took the time to answer all my questions. Highly recommend! Providing knowledgeable care and integral parts of our commitment to patient satisfaction. Very good experience my pregnancy journey staff also very kind & main affordable for anyone.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    name: 'Vidya Tayade',
    location: 'Pune',
    text: 'My Husband sushil Tayade kidney stone operation at JS Hospital earlier this month. My doctor Umesh Jadhav sir gave us very good treatment and a very good attitude. The hospital staff is good. Talking about the hospital, the hospital has a very neat and clean ambience and cleanliness is taken care of from time to time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '4',
    name: 'Mayur kalamkar',
    location: 'Pune',
    text: 'J. S. Hospital team will ensure that you get the utmost care for our patient. Each and every staff member is there to assist and help you out. Staff is very kind and will always provide detailed information about well-being. All the facilities is always kept clean and hygienic and overall location is quite accessible. J. S. Hospital offers best in class Doctors and have state of the art equipments to support speedy recovery.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '5',
    name: 'Vighnesh Kanaskar',
    location: 'Pune',
    text: 'Recently my mother had a surgery from this hospital and it was a good experience there hygiene is well maintained it was an good experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '6',
    name: 'Nakul Malani',
    location: 'Pune',
    text: 'We went here for my mother’s testing. Everything was done very systematically. Staff here is very helpful and polite specially Samrudhi who was coordinating the tests. Thanks.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '7',
    name: 'Nikhil Shitole',
    location: 'Pune',
    text: 'Dr. Umesh Jadhav is very experienced. Doctors and staff is very helpful and friendly. They would not hold you back for unnecessary stay in the hospital. Very hygienic n well maintained hospital. Had very nice experience here. All the staff is ever smiling & helpful. Best hospital in Pune.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '8',
    name: 'ARKAN ASLAM SANADI',
    location: 'Pune',
    text: 'Doctor is vey attentive towards their patients. Best possible care is taken by all the staff of the hospital. Treatment is given with utmost care and all the precautionary measures are taken with responsibility of a patient to ensure speedy recovery. Thank you J. S. Hospital for all your warmth, positive vibes and care.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '9',
    name: 'Ajit Shitole',
    location: 'Pune',
    text: 'Really very happy and satisfied with the treatment given by Dr. Umesh Jadhav. Also the staff is very polite and caring. There is a lively atmosphere and that is very important for patient recovery. Must visit!!!!!!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '10',
    name: 'Krishna Pawar',
    location: 'Pune',
    text: 'Well Maintained Hospital Very neet and clean. all staff have good behaviour. Very Politely Speaking Dr Umesh Jadhav. Dr having experience and knowledge of everything. Hospital is having all setup properly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100'
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
    title: 'Pathology & Diagnostics',
    description: 'Precise imaging and advanced laboratory testing services.',
    icon: 'Search'
  },
  {
    id: 'piles',
    title: 'Piles & Fistula Treatment',
    description: 'Advanced specialized treatments for hemorrhoids and fistulas.',
    icon: 'Activity'
  },
  {
    id: 'maternity',
    title: 'Maternity Hospital',
    description: 'Comprehensive care for women, including infertility treatments.',
    icon: 'Baby'
  },
  {
    id: 'general',
    title: 'General Physician',
    description: 'Expert treatment for viral fevers and routine health issues.',
    icon: 'Stethoscope'
  },
  {
    id: 'oncology',
    title: 'Oncology',
    description: 'Dedicated treatment and care for gynaecological cancer.',
    icon: 'Heart'
  },
  {
    id: 'laparoscopic',
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical procedures for faster recovery.',
    icon: 'Activity'
  },
  {
    id: 'pharmacy',
    title: 'In-house Pharmacy',
    description: 'Quick access to prescribed medications and health supplies.',
    icon: 'Pill'
  }
];
