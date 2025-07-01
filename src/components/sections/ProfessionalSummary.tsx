import { motion } from "framer-motion";
import { Code, Users, Zap, Award } from "lucide-react";
import type { Highlight } from "@/types";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { highlights } from "@/data/highlights";

export const ProfessionalSummary = () => {
  return (
    <section
      id="about"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50/40 via-blue-50/40 to-cyan-50/40"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl" />
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
            Professional Summary
          </h2>
          <div className="w-24 h-2 gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Front-End Software Engineer with 3+ years of experience developing
            enterprise-grade, scalable web applications. Seeking to drive
            front-end leadership, innovation, and design excellence in a senior
            engineering role on a high-impact team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 gradient-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/90">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 gradient-primary rounded-2xl group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gradient-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
