"use client";
import { great_Vibes } from "@/app/fonts";
import { motion } from "framer-motion";
import React from "react";
import ContactForm from "./contactForm";

const contact: React.FC = () => {
  return (
    <section
      id="contact-us"
      className="h-fit md:max-h-screen w-full flex flex-col md:grid grid-cols-2 gap-10 justify-center items-center align-center px-10  lg:px-20 xl:px-30 2xl:px-40 py-20 "
    >
      <div className="flex flex-col gap-2 lg:gap-5 items-center lg:items-start">
        <motion.span
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-normal text-4xl xl:text-5xl leading-loose text-center lg:text-start"
        >
          The road to
          <span
            className={`${great_Vibes.className} text-5xl xl:text-6xl mt-2 block  `}
          >
            Elevate Your Brand
          </span>
          Starts here .
        </motion.span>
        <motion.p className="text-sm text-center lg:text-start lg:text-base">
          Elevate your brand with SteadySocial&apos;s expert product photography
          and social media content creation. Contact us today to craft visuals
          that captivate and connect with your audience.
        </motion.p>
        <div className="flex flex-row gap-2"> </div>
        <button className="px-8 py-2 w-fit  rounded-full bg-[#631c1c] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#631c1c]">
          Schedule a call
        </button>
      </div>
      <ContactForm />
    </section>
  );
};
export default contact;
