import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Education as EducationType } from "@/types";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { education } from "@/data/education";

export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50/40 via-cyan-50/40 to-green-50/40"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-300/25 to-green-300/25 rounded-full blur-3xl" />
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
            Education
          </h2>
          <div className="w-24 h-2 gradient-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation combining theoretical knowledge with
            practical application
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="bg-white/80 backdrop-blur-xl border border-white/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 hover:bg-white/90">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-accent rounded-2xl group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-gradient-secondary transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-gradient-secondary mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {edu.gpa}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            edu.status === "In Progress"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-green-50 text-green-700 border-green-200"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-700 border border-cyan-200 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-colors font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
