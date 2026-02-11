"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
                <li>Quick Disbursal</li>
                <li>Minimal Documentation</li>
                <li>Lowest Rates</li>
                <li>100% Transparency</li>
                <li>Personalized Plans</li>
                <li>Expert Advice</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Financing excellence since 2014</li>
                <li>Certified Banking Partners</li>
                <li>Authorized Financial Consultants</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>ISO 9001:2015 Certified</li>
                <li>Quality Management Excellence</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white py-10 md:py-20" id="about">
            <div className="md:grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center relative group px-6 md:px-0"
                >
                    {/* Logo container with float effect */}
                    <div className="relative animate-float">
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative glass-card p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden three-d-card">
                            <Image
                                src="/images/funding.jpg"
                                width={500}
                                height={500}
                                className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
                                alt="About Funding First"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-yellow-400 font-bold text-xl">Since 2014</p>
                                <p className="text-white/80 text-sm">Empowering Dreams</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-6 -right-6 bg-yellow-500 text-black font-bold p-4 rounded-2xl shadow-xl transform rotate-12 animate-pulse hidden md:block">
                            100%<br />Transparency
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8 md:mt-0 text-center md:text-left px-4 sm:px-0"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        About <span className="text-gradient">Our Journey</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-400 mb-8 leading-relaxed">
                        At <span className="text-white font-semibold">Funding First</span>, we believe that everyone deserves the opportunity to achieve their financial goals. With over 10 years of experience in the lending industry, we have specialized in bridging the gap between dreams and capital. Our human-centric approach ensures you get more than just a loan—you get a partner committed to your growth.
                    </p>

                    <div className="flex flex-row justify-center md:justify-start gap-4 mb-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Benefits
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Expertise
                        </TabButton>
                    </div>

                    <div className="glass-card p-6 rounded-2xl border border-white/5 min-h-[150px] text-left">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
