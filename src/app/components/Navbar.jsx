"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Why Us",
    path: "#whyus",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || navbarOpen
        ? "bg-[#121212]/80 backdrop-blur-xl border-b border-white/10 py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="flex container lg:max-w-7xl flex-wrap items-center justify-between mx-auto px-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              className="relative rounded-full border border-white/10"
              width={scrolled ? 50 : 60}
              height={scrolled ? 50 : 60}
              style={{ transition: 'all 0.5s ease' }}
            />
          </div>
          <span className={`text-xl font-bold text-white transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            Funding<span className="text-yellow-500">First</span>
          </span>
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded-xl border-slate-200/20 text-slate-200 hover:text-white hover:border-white transition-all bg-white/5 backdrop-blur-md"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
