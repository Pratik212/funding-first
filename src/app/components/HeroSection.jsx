"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-gradient mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">

            <br></br>
            <TypeAnimation
              sequence={[
                "Funding First",
                2000,
                "funding first",
              ]}
              classname="bg-gradient-to-r from-red-500 to-orange-500"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Empower your financial journey with our strategic fund management and innovative loan solutions for unparalleled success.
          </p>
          <div>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <svg viewBox="0 0 1024 1024" className="icon absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z" fill="#E5F1FF"/>
              <path d="M512 435.2m-211.2 0a211.2 211.2 0 1 0 422.4 0 211.2 211.2 0 1 0-422.4 0Z" fill="#A9D2FF"/>
              <path d="M512 435.2c-6.4 0-6.4 0-12.8-6.4l-64-89.6c-6.4-6.4 0-12.8 0-19.2 6.4-6.4 12.8 0 19.2 0l64 89.6c6.4 6.4 0 12.8 0 19.2 0 6.4-6.4 6.4-6.4 6.4z" fill="#FFFFFF"/>
              <path d="M512 556.8c-6.4 0-12.8-6.4-12.8-12.8v-128l70.4-89.6c0-6.4 12.8-6.4 12.8 0 6.4 6.4 6.4 12.8 0 19.2l-64 83.2v115.2c6.4 6.4 0 12.8-6.4 12.8z" fill="#FFFFFF"/>
              <path d="M556.8 435.2H467.2c-6.4 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h89.6c6.4 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8zM556.8 480H467.2c-6.4 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h89.6c6.4 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8z" fill="#FFFFFF"/>
              <path d="M793.6 595.2c-12.8-25.6-44.8-25.6-64-19.2l-57.6 12.8c0 19.2-6.4 32-25.6 51.2-38.4 32-108.8 38.4-160 38.4h-57.6c-12.8 0-19.2-12.8-12.8-19.2 0-12.8 12.8-19.2 19.2-12.8 38.4 6.4 147.2 6.4 185.6-25.6 12.8-19.2 19.2-25.6 19.2-38.4-12.8-12.8-32-19.2-44.8-19.2H236.8c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8 96 32 217.6 70.4 288 70.4h25.6c44.8-6.4 198.4-108.8 230.4-134.4 12.8-12.8 19.2-38.4 12.8-64z" fill="#72AEFD"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
