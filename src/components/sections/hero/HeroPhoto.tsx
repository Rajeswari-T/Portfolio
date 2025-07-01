import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroPhotoProps {
  fadeInLeft: any;
}

export const HeroPhoto = ({ fadeInLeft }: HeroPhotoProps) => {
  return (
    <motion.div
      variants={fadeInLeft}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
        <Avatar className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-white/50 shadow-2xl">
          <AvatarImage
            src="ProfilePhoto.png"
            alt="Durga Talluri - Frontend Engineer"
            className="object-cover"
          />
          <AvatarFallback className="text-6xl font-bold bg-gradient-primary text-white">
            DT
          </AvatarFallback>
        </Avatar>
      </div>
    </motion.div>
  );
};
