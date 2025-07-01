// Shared animation variants for framer-motion sections
// Use containerVariants for staggered container animations
// Use itemVariants for fade/slide-in of items

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: (stagger = 0.1) => ({
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  }),
};

// Default: fade in + slide up
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// For sections that use x or scale, you can extend or override as needed:
export const itemVariantsLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const itemVariantsScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};
