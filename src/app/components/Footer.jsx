import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border-t border-[#33353F]/50 text-white bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto p-12 flex flex-col md:flex-row gap-8 justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href={"/"} className="hover:scale-105 transition-transform">
                        <Image
                            src="/images/logo.jpg"
                            alt="Funding First Logo"
                            className="rounded-full border border-yellow-500/20"
                            width={60}
                            height={60}
                        />
                    </Link>
                    <div>
                        <span className="text-xl font-bold text-gradient">Funding First</span>
                        <p className="text-slate-500 text-xs tracking-widest uppercase">Smart Capital Solutions</p>
                    </div>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-slate-400 text-sm mb-2">
                        3rd floor, T-17 Silicon Shoppers, Opp. Satya Nagar, Udhana, Surat - 394210
                    </p>
                    <p className="text-slate-500 text-xs">
                        &copy; {new Date().getFullYear()} Funding First. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
