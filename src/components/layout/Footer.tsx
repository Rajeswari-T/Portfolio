import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Coffee className="h-4 w-4" />
            <span>Fueled by coffee and passion for great UX</span>
          </div> */}

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            Crafted with React, TypeScript & Framer Motion · Fueled by
            <Coffee className="inline h-4 w-4 mx-1" aria-label="coffee" />
            and passion for great UX © 2025 Durga Talluri. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
