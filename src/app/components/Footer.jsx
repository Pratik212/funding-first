import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="b-0 footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex gap-5 justify-between items-center">
                <div className="">
                    <Link href={"/"}>
                        <Image
                            src="/images/logo.jpg"
                            alt="hero image"
                            className="rounded-full"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <div className="flex-col">
                    <p className="text-slate-600 italic" style={{fontSize: '15px', color: '#fff', fontWeight: 'bold'}}>All rights reserved.</p>
                    <p className="text-slate-600 italic" style={{fontSize: '15px', color: '#fff', fontWeight: 'bold'}}>3rd floor, T-17 silicon shopppers opp. satya nagar, udhana, surat
                        -394210</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
