"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/images/logo.jpg"
                                alt="Funding First Logo"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <span className="text-2xl font-bold">Funding First</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted partner for all business loan needs. Quick, hassle-free, and transparent.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>3rd floor, T-17 Silicon Shoppers, Opp. Satya Nagar, Udhana, Surat - 394210</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+919722166221" className="hover:text-orange-500 transition-colors">
                                    +91 97221 66221
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:Fundingfirst55@gmail.com" className="hover:text-orange-500 transition-colors">
                                    Fundingfirst55@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Funding First. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
