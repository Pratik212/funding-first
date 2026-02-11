"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Compare & get your loan in right way</h2>
                    <p className="section-subtitle">
                        Fill out the form below and our experts will get back to you within 24 hours
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    {emailSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 rounded-2xl shadow-lg text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h3>
                            <p className="text-gray-600 text-lg">
                                We&apos;ve received your inquiry. Our team will contact you within 24 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Loan Type</label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="">Select loan type</option>
                                        <option value="business">Business Loan</option>
                                        <option value="professional">Professional Loan</option>
                                        <option value="home">Home Loan</option>
                                        <option value="lap">Loan Against Property</option>
                                        <option value="debt">Debt Consolidation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full text-center">
                                    Get a Quote
                                </button>
                            </form>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
