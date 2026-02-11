"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        setEmailSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24 gap-12 relative"
        >
            {/* Background Decor */}
            <div className="absolute top-1/4 -left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="z-10 px-4 md:px-0"
            >
                <h5 className="text-4xl md:text-5xl font-extrabold text-white my-4">
                    Let’s <span className="text-gradient">Connect</span>
                </h5>
                <p className="text-slate-400 mb-8 max-w-md text-lg leading-relaxed">
                    Ready to take the first step towards your financial goals? Our experts are here to help you find the perfect loan solution.
                </p>
                <div className="socials flex flex-row gap-6 mb-12 md:mb-0">
                    {[
                        { icon: "/github-icon.svg", url: "#" },
                        { icon: "/linkedin-icon.svg", url: "#" }
                    ].map((social, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="glass-card p-3 rounded-xl border border-white/10"
                        >
                            <Link href={social.url}>
                                <Image src={social.icon} alt="SocialIcon" width={30} height={30} className="invert" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="px-4 md:px-0"
            >
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                    {emailSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-white text-center py-10"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-slate-400 text-lg">We'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="text-white block mb-2 text-sm font-bold uppercase tracking-wider">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="text-white block mb-2 text-sm font-bold uppercase tracking-wider">Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="text-white block mb-2 text-sm font-bold uppercase tracking-wider">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-4 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-5 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] active:scale-95"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default EmailSection;
