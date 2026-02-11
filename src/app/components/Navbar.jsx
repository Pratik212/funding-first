"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Funding First Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Funding First
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About Us
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="btn-primary text-sm py-2 px-6">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button & Phone */}
          <div className="flex items-center gap-4 md:hidden">
            <a href="tel:+919722166221" className="p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 text-gray-700"
            >
              {navbarOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                About Us
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                FAQ
              </Link>
              <Link href="#contact" className="btn-primary text-sm py-2 px-6 text-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
