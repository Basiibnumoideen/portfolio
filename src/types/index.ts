export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  name: string;
  href: string;
}