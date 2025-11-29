import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f9fc] to-[#e9eef5] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          max-w-4xl mx-auto w-full
          backdrop-blur-xl bg-white/70
          shadow-[0_10px_40px_rgba(0,0,0,0.1)]
          rounded-3xl p-12 border border-white/40
        "
      >
        <h1 className="text-4xl font-extrabold text-[#1c2a3a] text-center mb-10 tracking-tight">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#1c2a3a] text-2xl" />
              <div>
                <p className="text-[#1c2a3a] font-semibold text-lg">Phone</p>
                <p className="text-gray-600">+998 90 777 77 77</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#1c2a3a] text-2xl" />
              <div>
                <p className="text-[#1c2a3a] font-semibold text-lg">Email</p>
                <p className="text-gray-600">support@store.uz</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#1c2a3a] text-2xl" />
              <div>
                <p className="text-[#1c2a3a] font-semibold text-lg">Address</p>
                <p className="text-gray-600">Tashkent, Oybek District</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                border border-gray-300 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-[#1c2a3a] outline-none
                bg-white/50 backdrop-blur-sm
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                border border-gray-300 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-[#1c2a3a] outline-none
                bg-white/50 backdrop-blur-sm
              "
            />

            <textarea
              placeholder="Your Message..."
              rows={4}
              className="
                border border-gray-300 rounded-xl py-3 px-4
                focus:ring-2 focus:ring-[#1c2a3a] outline-none
                bg-white/50 backdrop-blur-sm
              "
            ></textarea>

            <button
              type="submit"
              className="
                bg-[#1c2a3a] text-white py-3 rounded-xl font-semibold
                transition-all hover:bg-[#15202b]
                shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              "
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
