import React from "react";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Instagram from "../../../public/instagram.svg";
import Twitter from "../../../public/twitter.svg";
import Facebook from "../../../public/facebook.svg";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section id="contact">
            <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
                <div
                    className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"/>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        Embark on a journey to financial empowerment with personalized Loan Advisory Expertise. We specialize in crafting strategic solutions that align with your goals, providing precise Capital Guidance to shape a secure and prosperous future. Let`&apos;s navigate the world of finance together – your dreams, our commitment. Ready to elevate your financial strategy?
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <Image src={Facebook} alt="Facebook Icon"/>
                        <Image src={Instagram} alt="Instagram Icon"/>
                        <Image src={Twitter} alt="Twitter Icon"/>
                        <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                    </div>
                </div>
                <div className="z-10">
                    <form className="flex flex-col">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
