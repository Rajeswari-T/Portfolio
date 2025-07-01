import {
  ExternalLink,
  Github,
  Code,
  Database,
  Users,
  Workflow,
} from "lucide-react";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Cabins Booking Management System",
    description:
      "Developed a comprehensive web application for seamless cabin reservations with real-time updates and user-friendly interface, integrating modern frontend technologies with Supabase backend.",
    technologies: [
      "React",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Supabase",
      "TypeScript",
    ],
    achievements: [
      "Real-time booking updates",
      "Optimized API requests with React Query",
      "State management with Redux",
      "Improved performance and maintainability",
    ],
    type: "Personal Project",
    status: "Completed",
    date: "January 2025",
    icon: Database,
  },
  {
    title: "Enterprise SAPUI5 to React Migration",
    description:
      "Led the complete migration of a legacy enterprise application from SAPUI5 to modern React architecture, implementing performance optimizations and modern development practices.",
    technologies: [
      "React",
      "TypeScript",
      "SAPUI5",
      "Azure",
      "Performance Optimization",
    ],
    achievements: [
      "40% load time reduction",
      "30% development time improvement",
      "Component-based architecture",
      "99.9% uptime maintenance",
    ],
    type: "Enterprise Migration",
    status: "Production",
    date: "April 2022 - December 2023",
    icon: Code,
  },
  {
    title: "Cherrywork - Account Payable Automation",
    description:
      "Designed and implemented a cloud-based application using SAP Technologies, automating PO and Non-PO invoice processing with comprehensive data flow analysis for seamless system integration.",
    technologies: [
      "SAP Technologies",
      "Cloud Computing",
      "Data Flow Analysis",
      "Process Automation",
    ],
    achievements: [
      "15% reduction in manual effort",
      "Automated invoice processing",
      "Seamless system integration",
      "Data flow optimization",
    ],
    type: "Enterprise Solution",
    status: "Production",
    date: "October 2021 - December 2023",
    icon: Workflow,
  },
  {
    title: "Collaborative Order Management",
    description:
      "Created proof-of-concepts for order management templates and developed comprehensive workflow diagrams to visualize and implement system improvements.",
    technologies: [
      "Order Management",
      "POC Development",
      "Workflow Design",
      "System Analysis",
    ],
    achievements: [
      "10% improvement in order processing speed",
      "POC template development",
      "Workflow visualization",
      "System optimization",
    ],
    type: "Process Optimization",
    status: "Completed",
    date: "July 2021 - October 2021",
    icon: Users,
  },
];
