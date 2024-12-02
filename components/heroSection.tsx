"use client";
import React from "react";
import { great_Vibes } from "../app/fonts";
import { LuArrowDown } from "react-icons/lu";
import { motion } from "framer-motion";
const heroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col gap-5 justify-center items-center align-center px-10 lg:px-20 xl:px-30 2xl:px-40 relative"
    >
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-light text-3xl md:text-4xl lg:text-5xl text-center leading-loose"
        /*    Initial text-6xl */
      >
        Boost Your Products with
        <span
          className={`${great_Vibes.className} text-5xl md:text-7xl lg:text-8xl block pt-4`} /*    Initial text-8xl */
        >
          Expert Photography
        </span>
      </motion.span>
      <motion.span
        initial={{ translateX: -50 }}
        whileInView={{ translateX: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-[80%] text-pretty text-center leading-loose text-sm lg:text-base font-light" /*    Initial text-base w-[50%] */
      >
        At SteadySocial, we combine social media expertise, content creation,
        and AI-driven design to create captivating visuals that showcase your
        products in the best light. Our unique approach ensures a collaborative
        process with cutting-edge AI previews, delivering tailored, efficient,
        and impactful results that help you stand out and drive sales.{" "}
      </motion.span>
      <a
        href="#about-us"
        className=" rounded-full absolute bottom-10 bg-zinc-900 text-white h-[50px] w-[50px] mt-10 p-3 animate-bounce hover:bg-white hover:text-zinc-900"
      >
        <LuArrowDown className="h-6 w-6 mx-auto" />
      </a>
    </section>
  );
};
export default heroSection;
