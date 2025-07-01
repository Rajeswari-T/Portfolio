import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Achievement } from "@/types";
import {
  containerVariants,
  itemVariants,
  itemVariantsScale,
} from "@/lib/animationVariants";
import { achievements } from "../../data/achievements";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-16 overflow-hidden bg-gradient-to-br from-green-50/40 via-yellow-50/40 to-orange-50/40"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-green-300/20 to-yellow-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl" />
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
            Achievements & Recognition
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence, academic achievement, and
            professional impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariantsScale}
              className="group"
            >
              <Card className="h-full bg-white/80 backdrop-blur-xl border border-white/40 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/90">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-colors">
                          {achievement.title}
                        </CardTitle>
                      </div>
                      <p className="text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text font-medium text-sm mb-1">
                        {achievement.organization}
                      </p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border border-yellow-200 rounded-full text-xs font-medium">
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
