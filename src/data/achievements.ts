import { Trophy, Star, TrendingUp, Target } from "lucide-react";
import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    title: "Mountain Movers Award",
    organization: "Incture Technologies",
    description:
      "Recognized for exceptional contributions to project success and technical excellence",
    icon: Trophy,
    type: "Professional Recognition",
  },
  {
    title: "JEE Main Rank 8288",
    organization: "National Testing Agency",
    description:
      "Achieved outstanding rank among 1M+ candidates in India's premier engineering entrance exam",
    icon: Star,
    type: "Academic Excellence",
  },
  {
    title: "40% Performance Improvement",
    organization: "Technical Achievement",
    description:
      "Led SAPUI5 to React migration resulting in significant load time reduction",
    icon: TrendingUp,
    type: "Technical Impact",
  },
  {
    title: "99.9% Uptime Achievement",
    organization: "Production Excellence",
    description:
      "Maintained exceptional reliability in Azure production deployments",
    icon: Target,
    type: "Operational Excellence",
  },
];
