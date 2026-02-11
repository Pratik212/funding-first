"use client";
import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "HDFC Bank", logo: "🏦" },
    { name: "ICICI Bank", logo: "🏦" },
    { name: "Axis Bank", logo: "🏦" },
    { name: "Bajaj Finserv", logo: "💳" },
    { name: "Tata Capital", logo: "💼" },
    { name: "Kotak Mahindra", logo: "🏦" },
    { name: "IndusInd Bank", logo: "🏦" },
    { name: "Yes Bank", logo: "🏦" },
    { name: "IDFC First", logo: "🏦" },
    { name: "L&T Finance", logo: "💳" },
    { name: "Fullerton India", logo: "💼" },
    { name: "Aditya Birla", logo: "💳" }
];

const PartnersSection = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                        Our Partners
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Trusted by 30+ leading banks and financial institutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer group"
                        >
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                {partner.logo}
                            </div>
                            <p className="text-sm font-semibold text-gray-700 text-center">
                                {partner.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        And many more trusted financial partners
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
                    >
                        Get Started Today
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
