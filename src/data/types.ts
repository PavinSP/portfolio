// Content model for the portfolio. Mirrors developerFolio's "all content in one
// config" idea, but typed so a bad edit fails at build instead of at runtime.

export type Link = {
  label: string;
  url: string;
  icon?: 'github' | 'external' | 'award' | 'paper';
};

export type Project = {
  name: string;
  badge?: string;
  description: string[];
  tech: string[];
  links?: Link[];
};

export type ProjectCategory = {
  category: string;
  projects: Project[];
};

export type Job = {
  role: string;
  company: string;
  date: string;
  bullets: string[];
  links?: Link[];
};

export type Module = {
  title: string;
  summary?: string;
  points: { label?: string; text: string }[];
};

export type Degree = {
  degree: string;
  institution: string;
  location: string;
  intro: string;
  modulesHeading?: string;
  modules: Module[];
};

export type SkillGroup = {
  title: string;
  skills: (string | Link)[];
};

export type Greeting = {
  name: string;
  title: string;
  subtitle: string[];
};

export type Contact = {
  tag: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  location: string;
};

export type Social = {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail';
};
