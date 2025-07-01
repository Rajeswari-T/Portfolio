import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { skillCategories } from "@/data/skills";

export const TechStackGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          variants={itemVariants}
          className="bg-card border rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {category.title}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
