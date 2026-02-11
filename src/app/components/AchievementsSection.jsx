"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheckIcon,
  UsersIcon,
  HandThumbUpIcon,
  ChartBarIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    return Math.floor(latest).toLocaleString("en-IN");
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="flex flex-row items-baseline justify-center">
      {prefix && <span className="mr-1">{prefix}</span>}
      <motion.span>{displayValue}</motion.span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  );
};

const stats = [
  {
    number: 5000,
    suffix: "cr+",
    label: "Amount Disbursed",
    icon: <ShieldCheckIcon className="w-8 h-8 md:w-10 md:h-10 text-[#f68b33]" />
  },
  {
    number: 200,
    suffix: "+",
    label: "Professional team",
    icon: <UsersIcon className="w-8 h-8 md:w-10 md:h-10 text-[#f68b33]" />
  },
  {
    number: 10000,
    suffix: "+",
    label: "Satisfied customer",
    icon: <HandThumbUpIcon className="w-8 h-8 md:w-10 md:h-10 text-[#f68b33]" />
  },
  {
    number: 99,
    suffix: "%",
    label: "Success rates",
    icon: <ChartBarIcon className="w-8 h-8 md:w-10 md:h-10 text-[#f68b33]" />
  },
  {
    number: 15,
    suffix: "+ Yrs",
    label: "Experience",
    icon: <AcademicCapIcon className="w-8 h-8 md:w-10 md:h-10 text-[#f68b33]" />
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#1a1a2e]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/90 to-[#1a1a2e]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-[#f68b33] shadow-xl">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                <Counter value={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest px-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default AchievementsSection;
