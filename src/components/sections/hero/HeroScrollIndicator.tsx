
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  scrollToNextSection: () => void;
}

export const HeroScrollIndicator = ({ scrollToNextSection }: HeroScrollIndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.button
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-primary cursor-pointer hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
};
