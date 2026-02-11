"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Why should I use Funding First to apply for my Business Loan?",
        answer: "Funding First provides access to 30+ lenders with just one application. We negotiate the best interest rates, offer expert advice for free, and ensure a fully digital, transparent process with zero risk to your credit score."
    },
    {
        question: "Is Funding First a lender?",
        answer: "No, Funding First is not a lender. We are a loan aggregator platform that connects you with multiple verified lenders, helping you compare and choose the best loan option for your needs."
    },
    {
        question: "Does Funding First check my Credit Report when I apply for a Business Loan?",
        answer: "We perform a soft credit check that doesn't impact your credit score. This helps us match you with the most suitable lenders and loan products based on your financial profile."
    },
    {
        question: "Who are Funding First lender partners?",
        answer: "We want to help every SME across India find a business loan for their needs that is affordable, convenient, and quick. So, we're constantly expanding our network of partners by adding in new banks and NBFCs to our digital platform. Our lender partners currently include ICICI, IDFC, Axis Bank, Yes Bank, Bajaj Finserv, Deutsche Bank, Lendingkart, Kotak Mahindra Bank, Tata Capital, L&T Finance, Hero Finance and more!"
    },
    {
        question: "How does Funding First get me the best interest rates on the market?",
        answer: "By comparing offers from multiple lenders simultaneously, we leverage competition to negotiate better rates on your behalf. Our expertise and relationships with lenders help secure the most favorable terms for your loan."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Offering great loan solutions for you</h2>
                    <p className="section-subtitle">
                        Get answers to common questions about our services
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion-item mb-4 shadow-sm border border-gray-100 rounded-lg overflow-hidden">
                            <div
                                className={`accordion-header p-5 flex justify-between items-center cursor-pointer transition-all ${openIndex === index ? 'bg-[#f68b33] text-white' : 'bg-white text-gray-800'
                                    }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <span className="text-2xl font-bold ml-4">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden bg-[#fafafa]"
                                    >
                                        <div className="p-6 text-gray-700 leading-relaxed text-lg border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
