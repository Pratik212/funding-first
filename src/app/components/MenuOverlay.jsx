import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden glass-card mt-2 mx-4 rounded-2xl overflow-hidden border border-white/10"
    >
      <ul className="flex flex-col py-6 items-center space-y-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink href={link.path} title={link.title} onClick={closeMenu} />
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full px-8 pt-4"
        >
          <button
            onClick={closeMenu}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 rounded-xl shadow-lg"
          >
            Get Started
          </button>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
