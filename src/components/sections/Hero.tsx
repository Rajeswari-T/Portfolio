import { motion } from "framer-motion";
import { HeroPhoto } from "./hero/HeroPhoto";
import { HeroContent } from "./hero/HeroContent";
import { HeroMetrics } from "./hero/HeroMetrics";
import { HeroTechStack } from "./hero/HeroTechStack";
import { HeroScrollIndicator } from "./hero/HeroScrollIndicator";

export const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Durga_Sr.Frontend_Engineer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 mt-20"
    >
      {/* Enhanced Background with vibrant colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center min-h-[50vh]">
            {/* Photo Section - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <HeroPhoto fadeInLeft={fadeInLeft} />
            </div>

            {/* Content Section - Right Side */}
            <div className="flex flex-col justify-between">
              <HeroContent
                fadeInRight={fadeInRight}
                fadeInUp={fadeInUp}
                scrollToProjects={scrollToProjects}
                downloadResume={downloadResume}
              />
            </div>
          </div>

          {/* Enhanced Metrics Cards */}
          <HeroMetrics fadeInUp={fadeInUp} />

          {/* Tech Stack Icons */}
          <HeroTechStack fadeInUp={fadeInUp} />
        </motion.div>

        {/* Scroll Indicator */}
        <HeroScrollIndicator scrollToNextSection={scrollToNextSection} />
      </div>
    </section>
  );
};
