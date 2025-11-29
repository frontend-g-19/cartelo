import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
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

      {/* Contact Card */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="relative w-full max-w-4xl p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-white text-2xl" />
              <div>
                <p className="text-white font-semibold text-lg">Phone</p>
                <p className="text-white/70">+998 90 777 77 77</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white text-2xl" />
              <div>
                <p className="text-white font-semibold text-lg">Email</p>
                <p className="text-white/70">support@store.uz</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
              <div>
                <p className="text-white font-semibold text-lg">Address</p>
                <p className="text-white/70">Tashkent, Oybek District</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                border border-white/30 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-white/70 outline-none
                bg-white/20 text-white placeholder-white/70
                backdrop-blur-sm
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                border border-white/30 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-white/70 outline-none
                bg-white/20 text-white placeholder-white/70
                backdrop-blur-sm
              "
            />

            <textarea
              placeholder="Your Message..."
              rows={4}
              className="
                border border-white/30 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-white/70 outline-none
                bg-white/20 text-white placeholder-white/70
                backdrop-blur-sm
              "
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              type="submit"
              className="
                bg-[#0D1B2A] text-white py-3 rounded-xl font-semibold
                shadow-lg flex items-center justify-center gap-2
                hover:bg-[#15202b] transition-colors
              "
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
