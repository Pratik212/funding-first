"use client";
import React from "react";
import Image from "next/image";
import Facebook from "../../../public/images/why-us1.jpg";


const WhyUs = () => {

    return (
            <section className="mt-5 mb-2" id="whyus">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    Why Us
                </h2>
            <div>
            <Image style={{width: '100%', imageRendering: 'auto'}}  src={Facebook} alt="Facebook Icon"/>
            </div>
        </section>
    );
};

export default WhyUs;
