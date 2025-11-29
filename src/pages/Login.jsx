import { useState } from "react";
import { motion } from "framer-motion";
import { IoLogIn } from "react-icons/io5";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1B263B] to-[#415A77] px-4">
      {/* Background floating circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 rounded-full bg-[#E0E1DD] opacity-20 blur-3xl -top-20 -left-16"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-96 h-96 rounded-full bg-[#778DA9] opacity-20 blur-3xl bottom-0 right-0"
      />

      {/* Login Card */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
        className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white text-center mb-6"
        >
          Welcome Back
        </motion.h1>

        <form className="space-y-5">
          {/* Username */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <label className="text-white/80 ml-1 mb-1 text-sm">Username</label>
            <input
              type="text"
              name="username"
              className="px-4 py-3 rounded-xl bg-white/20 text-white outline-none border border-white/30 focus:border-[#E0E1DD] transition"
              placeholder="Enter your username"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col"
          >
            <label className="text-white/80 ml-1 mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="px-4 py-3 rounded-xl bg-white/20 text-white outline-none border border-white/30 focus:border-[#E0E1DD] transition"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-full mt-6 py-3 bg-[#0D1B2A] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <IoLogIn size={20} />
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-center mt-6 text-sm"
        >
          Forgot password?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Reset it
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
