"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Business Loan",
    description: "Get quick funding for your business needs with minimal documentation and fast approval.",
    icon: "💼",
    link: "#"
  },
  {
    title: "Professional Loan",
    description: "Specialized loans for doctors, CAs, and other professionals with flexible repayment options.",
    icon: "👨‍⚕️",
    link: "#"
  },
  {
    title: "Home Loan",
    description: "Turn your dream home into reality with our competitive home loan interest rates.",
    icon: "🏠",
    link: "#"
  },
  {
    title: "Loan Against Property",
    description: "Unlock the value of your property with our loan against property solutions.",
    icon: "🏢",
    link: "#"
  },
  {
    title: "Debt Consolidation Syndication",
    description: "Consolidate multiple debts into one easy payment with better terms.",
    icon: "📊",
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Providing all the loan services for you</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card group"
            >
              <div className="feature-icon mx-auto">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <Link
                  href={service.link}
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
