"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Happy Clients",
    value: "1000",
    postfix: "+",
  },
  {
    prefix: "₹",
    metric: "Disbursed",
    value: "500",
    postfix: "Cr+",
  },
  {
    metric: "Bank Partners",
    value: "25",
    postfix: "+",
  },
  {
    metric: "Experience",
    value: "10",
    postfix: " Yrs",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-6 md:py-12 px-4 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl py-10 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-6 sm:my-0 flex-1 relative"
            >
              {index !== 0 && (
                <div className="hidden sm:block absolute left-[-20px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}

              <div className="flex flex-row items-center justify-center">
                <span className="text-white text-3xl md:text-5xl font-extrabold">{achievement.prefix}</span>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value.replace(/,/g, ''))}
                  locale="en-US"
                  className="text-white text-3xl md:text-5xl font-extrabold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                <span className="text-yellow-400 text-2xl md:text-3xl font-bold ml-1">{achievement.postfix}</span>
              </div>
              <p className="text-slate-400 text-sm md:text-base font-medium mt-2 uppercase tracking-widest">{achievement.metric}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AchievementsSection;
