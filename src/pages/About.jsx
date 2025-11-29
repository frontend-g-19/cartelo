import { motion } from "framer-motion";
import shopping3d from "../assets/shopping-3d.png";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1B263B] to-[#415A77] px-4 relative overflow-hidden">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 rounded-full bg-[#E0E1DD] blur-3xl -top-20 -left-16"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-96 h-96 rounded-full bg-[#778DA9] blur-3xl bottom-0 right-0"
      />

      {/* About Card */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="relative w-full max-w-3xl p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
        >
          About Our Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-lg md:text-xl leading-relaxed text-center"
        >
          We built this platform with a single vision — to make online shopping
          beautifully simple and effortlessly reliable. From top-tier
          electronics to everyday essentials, our marketplace brings together
          curated products designed for comfort, quality, and trust.
          <br />
          <br />
          Our team continuously improves the shopping experience by expanding
          our catalog, upgrading performance, and ensuring every user feels
          welcome, valued, and empowered.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          src={shopping3d}
          alt="about"
          className="w-64 md:w-72 mx-auto mt-10 drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}
