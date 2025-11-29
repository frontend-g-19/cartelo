import { motion } from "framer-motion";
import shopping3d from "../assets/shopping-3d.png";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f6f9fc] to-[#e9eef5] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          backdrop-blur-xl bg-white/70 
          shadow-[0_10px_40px_rgba(0,0,0,0.1)]
          rounded-3xl p-12 max-w-3xl mx-auto text-center
          border border-white/40
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#1c2a3a] mb-4 tracking-tight"
        >
          About Our Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 text-lg leading-relaxed"
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
          className="w-64 mx-auto mt-10 drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}
