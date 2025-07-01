import { Calendar, MapPin, TrendingUp, Users, Code } from "lucide-react";
import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Web Developer (Internship)",
    company: "University of Alabama at Birmingham",
    period: "September 2024 – Present",
    location: "Birmingham, AL",
    achievements: [
      "Enhanced SEO performance and improved site rankings by 15% through front-end development using Joomla, HTML, CSS, and JavaScript",
      "Managed and executed 20+ departmental web requests via Asana, ensuring timely updates, uptime, and functionality",
      "Built mobile-first, responsive websites, improving accessibility and cross-device compatibility",
    ],
    technologies: ["Joomla", "HTML5", "CSS3", "JavaScript", "Asana", "SEO"],
    icon: TrendingUp,
  },
  {
    title: "Software Engineer",
    company: "Incture Technologies",
    period: "April 2022 - December 2023",
    location: "Bangalore, India",
    achievements: [
      "Led the migration of legacy SAPUI5 apps to ReactJS, reducing front-end load times by 40% and cutting development time by 30%",
      "Optimized UX flows through process mapping, increasing task completion efficiency and improving system performance by 10%",
      "Deployed production applications to Azure, maintaining 99.9% uptime with streamlined CI/CD pipelines",
      "Contributed to Agile ceremonies, mentored junior developers, and facilitated cross-functional code reviews",
    ],
    technologies: ["React", "TypeScript", "SAPUI5", "Azure", "CI/CD", "Agile"],
    icon: Code,
  },
  {
    title: "Associate Software Engineer",
    company: "Incture Technologies",
    period: "October 2021 - March 2022",
    location: "Bangalore, India",
    achievements: [
      "Developed scalable SAPUI5 and React frontends deployed via Azure, aligned with enterprise UX requirements",
      "Built reusable, component-based UI architecture in React, reducing UI bugs by 25% and accelerating development cycles",
      "Collaborated with UX designers to translate user needs into intuitive, accessible interfaces",
    ],
    technologies: [
      "React",
      "SAPUI5",
      "Azure",
      "Component Architecture",
      "UX Design",
    ],
    icon: Users,
  },
];
