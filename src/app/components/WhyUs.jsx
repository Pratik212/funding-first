"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CurrencyRupeeIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Simple & Fast Loans",
    description: "We provide simple, easy and fast loans – to help you move forward without the hassle!",
    icon: CurrencyRupeeIcon,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Competitive Rates",
    description: "We have competitive personal loans, both large and small. Real people helping real people - you talk, we listen.",
    icon: UserGroupIcon,
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "Passionate Support",
    description: "Go forward with passionate people wanting to help support any financial journey from poor credit to good.",
    icon: SparklesIcon,
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Total Confidentiality",
    description: "It is our promise that your information is secure and treated with total confidentiality.",
    icon: ShieldCheckIcon,
    color: "from-green-400 to-emerald-500"
  }
];

const FeatureCard = ({ title, description, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}
      className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default three-d-card"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

      <div className="three-d-content">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-10 md:py-20 relative overflow-hidden" id="whyus">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg px-4">
            Empowering your financial future with transparent, fast, and human-centric loan solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
