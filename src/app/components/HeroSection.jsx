"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const heroSlides = [
  {
    title: "Quick, Hassle free",
    subtitle: "Business Loans",
    description: "Business Loan delivered in 3-7 days. Zero risk to credit score. Fully digital & transparent process.",
    cta: "Let's Get Started"
  },
  {
    title: "One platform",
    subtitle: "all business loan needs",
    description: "Unsecured Loans: 1L-5Cr, Secured: 5L-5Cr. Negotiating best loan interest rates for you. Business Loans Made Simple and Effective.",
    cta: "Let's Get Started"
  },
  {
    title: "Dream Big",
    subtitle: "Borrow Smart",
    description: "Check eligibility in <1 minute. Access 30+ lenders with 1 application. Expert business loan advice for free.",
    cta: "Let's Get Started"
  },
  {
    title: "Multi-Funding",
    subtitle: "for Loans Above 50L",
    description: "Unsecured multi-funded loans- Up to 5Cr. Multiple lenders, one business loan solution. Secure maximum funds at minimal rates.",
    cta: "Let's Get Started"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="hero-section relative min-h-[500px] md:min-h-[700px] flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl mb-8 text-white/95 leading-relaxed max-w-3xl mx-auto px-4"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link href="#contact" className="bg-white text-gray-900 px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition-all shadow-lg inline-block text-lg">
                    Let&apos;s Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-white w-10'
                    : 'bg-white/50 hover:bg-white/70 w-2.5'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Orange Banner - Moved OUTSIDE hero-section to prevent overlap */}
      <div className="w-full bg-[#f68b33] relative z-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight"
          >
            Easy & quick process to get loan. Get more help.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
