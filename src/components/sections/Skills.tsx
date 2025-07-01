
import { motion } from "framer-motion";
import { TechStackGrid } from "@/components/widgets/TechStackGrid";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-16 overflow-hidden bg-gradient-to-br from-cyan-50/40 via-purple-50/40 to-pink-50/40">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-300/25 to-blue-300/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/25 to-pink-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-2 gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern frontend technologies and enterprise development tools
          </p>
        </motion.div>

        <TechStackGrid />
      </div>
    </section>
  );
};
