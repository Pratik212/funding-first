"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    ClockIcon,
    ShieldCheckIcon,
    CurrencyRupeeIcon,
    DocumentCheckIcon,
    UserGroupIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

const features = [
    {
        icon: ClockIcon,
        title: "Quick Approval",
        description: "Business Loan delivered in 3-7 days with fully digital & transparent process.",
        color: "from-yellow-400 to-orange-500"
    },
    {
        icon: ShieldCheckIcon,
        title: "Zero Credit Risk",
        description: "Check eligibility in <1 minute with zero risk to your credit score.",
        color: "from-blue-400 to-indigo-500"
    },
    {
        icon: CurrencyRupeeIcon,
        title: "Best Interest Rates",
        description: "Negotiating the best loan interest rates from 30+ lenders for you.",
        color: "from-green-400 to-emerald-500"
    },
    {
        icon: DocumentCheckIcon,
        title: "Minimal Documentation",
        description: "Simple paperwork with one application to access multiple lenders.",
        color: "from-purple-400 to-pink-500"
    },
    {
        icon: UserGroupIcon,
        title: "Expert Guidance",
        description: "Free expert business loan advice to help you make informed decisions.",
        color: "from-red-400 to-rose-500"
    },
    {
        icon: SparklesIcon,
        title: "Multi-Funding Options",
        description: "Unsecured multi-funded loans up to 5Cr with maximum funds at minimal rates.",
        color: "from-cyan-400 to-teal-500"
    }
];

const ProcessSection = () => {
    return (
        <section className="py-10 md:py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Why Choose <span className="text-gradient">Funding First</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        One platform for all your business loan needs - Quick, Hassle-free, and Transparent
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl border border-white/10 group cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-yellow-500/20 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Dream Big, Borrow Smart
                    </h3>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        Unsecured Loans: ₹1L-5Cr | Secured Loans: ₹5L-5Cr
                    </p>
                    <p className="text-white mb-8">
                        Business Loans Made Simple and Effective with Multiple Lenders, One Solution
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20"
                    >
                        Let&apos;s Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSection;
