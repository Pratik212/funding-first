"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BestLoansSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                            We&apos; Providing the Best Loans for Your Financial Needs
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Funding First, we understand that realities can sometimes be harsher than what we hope and desire for. You need funds to realize all your dreams - home loans, loans against property, personal loans.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Large number of loan products",
                                "Experienced & qualified team",
                                "Free loan quotes"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-[#f68b33]" />
                                    <span className="text-gray-800 font-semibold text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#1a1a2e] text-white px-10 py-4 rounded-md font-bold hover:bg-[#2a2a4e] transition-all transform hover:scale-105">
                            Discover More
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/funding.jpg"
                                alt="Financial Support"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent" />
                        </div>

                        {/* Decorative elements to match the "premium" feel */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f68b33] rounded-full blur-3xl opacity-20 -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BestLoansSection;
