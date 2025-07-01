// Shared types for portfolio sections
import { LucideIcon } from "lucide-react";

/**
 * Represents a project in the portfolio.
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: string;
  status: string;
  date: string;
  icon: LucideIcon;
}

/**
 * Represents a work experience entry.
 */
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  icon: LucideIcon;
}

/**
 * Represents an education entry.
 */
export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  coursework: string[];
  status: string;
}

/**
 * Represents an achievement entry.
 */
export interface Achievement {
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
  type: string;
}

/**
 * Represents a professional summary highlight.
 */
export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}
