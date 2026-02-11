import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl hover:shadow-yellow-500/10 h-full flex flex-col"
    >
      <div className="h-52 md:h-64 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
      </div>
      <div className="text-white py-6 px-6 bg-[#181818] flex-1 flex flex-col">
        <h5 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{title}</h5>
        <div className="w-10 h-1 bg-yellow-500 mb-4 rounded-full group-hover:w-20 transition-all duration-300" />
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{description || "Professional loan solutions tailored to your financial needs with quick processing and transparent terms."}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
