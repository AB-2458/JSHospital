export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  qualifications: string;
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  availableToday: boolean;
  image: string;
  about: string;
}

export interface CenterOfExcellence {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
