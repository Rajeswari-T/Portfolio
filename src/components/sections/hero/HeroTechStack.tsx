
import { motion } from "framer-motion";
import { Code, Zap, Users } from "lucide-react";

interface HeroTechStackProps {
  fadeInUp: any;
}

export const HeroTechStack = ({ fadeInUp }: HeroTechStackProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex items-center justify-center gap-8 mb-12 flex-wrap"
    >
      <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg hover:shadow-purple-500/10">
        <Code className="h-5 w-5" />
        <span className="text-sm font-medium">React & TypeScript</span>
      </div>
      <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-500/10">
        <Zap className="h-5 w-5" />
        <span className="text-sm font-medium">Performance Expert</span>
      </div>
      <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm border border-cyan-200/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-lg hover:shadow-cyan-500/10">
        <Users className="h-5 w-5" />
        <span className="text-sm font-medium">Technical Leadership</span>
      </div>
    </motion.div>
  );
};
