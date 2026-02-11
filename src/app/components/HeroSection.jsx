"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-8 md:py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-8 text-center md:text-left flex flex-col items-center md:items-start px-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-full overflow-hidden"
            >
              <h1 className="text-white mb-6 text-2xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.2] sm:leading-tight break-words">
                <span className="text-gradient block min-h-[1.2em]">
                  <TypeAnimation
                    sequence={[
                      "Funding First",
                      2000,
                      "Smart Capital",
                      2000,
                      "Fast Approval",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
                <span className="block mt-2">Empowering Future.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-400 text-base sm:text-xl mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Transform your financial aspirations into reality with our strategic fund management and innovative loan solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto px-4 sm:px-0"
            >
              <Link
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-transform text-center shadow-lg shadow-yellow-500/20 text-sm sm:text-base"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="px-8 py-3.5 rounded-full border border-yellow-500/30 text-white font-bold hover:bg-yellow-500/10 transition-colors text-center backdrop-blur-sm text-sm sm:text-base"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 md:col-span-4 flex justify-center items-center mt-8 md:mt-0"
          >
            <div className="relative group scale-75 sm:scale-100">
              {/* 3D Floating Effect Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] w-[260px] h-[260px] lg:w-[450px] lg:h-[450px] flex items-center justify-center p-6 border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500/5 blur-2xl animate-pulse" />

                  <svg viewBox="0 0 1024 1024" className="w-full h-full relative z-10 filter drop-shadow-[0_15px_30px_rgba(255,224,51,0.2)]">
                    <path d="M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z" fill="url(#grad1)" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFE033', stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: '#D4B100', stopOpacity: 0.05 }} />
                      </linearGradient>
                    </defs>
                    <path d="M512 435.2m-211.2 0a211.2 211.2 0 1 0 422.4 0 211.2 211.2 0 1 0-422.4 0Z" fill="#A9D2FF" />
                    <path d="M512 435.2c-6.4 0-12.8-6.4l-64-89.6c-6.4-6.4 0-12.8 0-19.2 6.4-6.4 12.8 0 19.2 0l64 89.6c6.4 6.4 0 12.8 0 19.2 0 6.4-6.4 6.4-6.4 6.4z" fill="#FFFFFF" />
                    <path d="M512 556.8c-6.4 0-12.8-6.4-12.8-12.8v-128l70.4-89.6c0-6.4 12.8-6.4 12.8 0 6.4 6.4 6.4 12.8 0 19.2l-64 83.2v115.2c6.4 6.4 0 12.8-6.4 12.8z" fill="#FFFFFF" />
                    <path d="M556.8 435.2H467.2c-6.4 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h89.6c6.4 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8zM556.8 480H467.2c-6.4 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h89.6c6.4 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8z" fill="#FFFFFF" />
                    <path d="M793.6 595.2c-12.8-25.6-44.8-25.6-64-19.2l-57.6 12.8c0 19.2-6.4 32-25.6 51.2-38.4 32-108.8 38.4-160 38.4h-57.6c-12.8 0-19.2-12.8-12.8-19.2 0-12.8 12.8-19.2 19.2-12.8 38.4 6.4 147.2 6.4 185.6-25.6 12.8-19.2 19.2-25.6 19.2-38.4-12.8-12.8-32-19.2-44.8-19.2H236.8c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8 96 32 217.6 70.4 288 70.4h25.6c44.8-6.4 198.4-108.8 230.4-134.4 12.8-12.8 19.2-38.4 12.8-64z" fill="#72AEFD" />
                  </svg>
                </div>
              </motion.div>

              {/* Background Decorative Rings */}
              <div className="absolute inset-0 border border-yellow-500/20 rounded-full scale-110 -z-10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-125 -z-10 animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
