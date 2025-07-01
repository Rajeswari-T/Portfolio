
import { motion } from "framer-motion";
import { MetricsCounter } from "@/components/widgets/MetricsCounter";

interface HeroMetricsProps {
  fadeInUp: any;
}

export const HeroMetrics = ({ fadeInUp }: HeroMetricsProps) => {
  const metrics = [
    { value: 40, suffix: "%", label: "Load Time Reduction" },
    { value: 99.9, suffix: "%", label: "Uptime Achievement" },
    { value: 30, suffix: "%", label: "Dev Time Savings" }
  ];

  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-16"
    >
      {metrics.map((metric, index) => (
        <div key={index} className="group relative">
          <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300" />
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/90">
            <MetricsCounter 
              value={metric.value} 
              suffix={metric.suffix}
              className="text-3xl font-bold text-gradient-primary mb-2"
            />
            <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
