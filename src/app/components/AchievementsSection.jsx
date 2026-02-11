"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const stats = [
  {
    prefix: "",
    number: 1000,
    suffix: "+",
    label: "Happy Clients"
  },
  {
    prefix: "₹",
    number: 500,
    suffix: "Cr+",
    label: "Disbursed"
  },
  {
    prefix: "",
    number: 30,
    suffix: "+",
    label: "Lender Partners"
  },
  {
    prefix: "",
    number: 10,
    suffix: " Yrs",
    label: "Experience"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#ff6b35] to-[#f68b33]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            >
              <div className="flex flex-row items-baseline justify-center text-5xl md:text-6xl font-black mb-4">
                <span className="text-2xl md:text-4xl mr-1 font-bold">{stat.prefix}</span>
                <div className="flex items-center">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={stat.number}
                    fontStyle={{
                      fontFamily: 'Poppins',
                      fontWeight: '900',
                      color: 'white',
                    }}
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                </div>
                <span className="text-2xl md:text-4xl ml-1 font-bold">{stat.suffix}</span>
              </div>
              <div className="stats-label text-sm md:text-base font-black tracking-[0.25em] uppercase text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
