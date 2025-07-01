import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HeroContentProps {
  fadeInRight: any;
  fadeInUp: any;
  scrollToProjects: () => void;
  downloadResume: () => void;
}

export const HeroContent = ({
  fadeInRight,
  fadeInUp,
  scrollToProjects,
  downloadResume,
}: HeroContentProps) => {
  return (
    <motion.div
      variants={fadeInRight}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      {/* Main Heading */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
          Frontend Engineer
          <span className="block text-gradient-primary text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            Driving Innovation
          </span>
          <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-muted-foreground mt-4">
            in Enterprise-Grade Web Applications
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        3+ years transforming complex ideas into intuitive, high-performance
        solutions that scale efficiently and delight users
      </p>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
        <Button
          onClick={scrollToProjects}
          size="lg"
          className="px-8 py-3 text-lg gradient-primary text-white border-0 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold"
        >
          View My Work
        </Button>
        <Button
          onClick={downloadResume}
          variant="outline"
          size="lg"
          className="px-8 py-3 text-lg border-2 border-primary/30 bg-white/70 hover:bg-white/90 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 font-semibold"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </motion.div>
  );
};
