"use client";
import { motion } from "framer-motion";
import React from "react";
import { great_Vibes } from "../app/fonts";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LuTimer, LuUsers, LuFileStack } from "react-icons/lu";

const whyUS: React.FC = () => {
  const projects = [
    {
      title: "Quick and easy consulting",
      description:
        "Start with a quick consultation tailored to your needs. We'll guide you in creating content that connects with your audience and meets your goals.",
      link: "#",
      Icon: LuTimer,
    },
    {
      title: "We Handle Everything",
      description:
        "From models to studios and production, we manage the entire process. Relax as we bring your vision to life with professional expertise and precision.",
      link: "#",
      Icon: LuUsers,
    },
    {
      title: "Ready-to-Use Content",
      description:
        "Get polished, hassle-free final products delivered straight to you—perfect and ready to make an impact. Focus on your message while we handle the details.",
      link: "#",
      Icon: LuFileStack,
    },
  ];
  return (
    <section
      id="why-us"
      className="h-fit w-full flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-center items-center align-center px-10 md:px-20  lg:px-20 xl:px-30 2xl:px-40 py-20 bg-black"
    >
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-normal text-3xl md:text-4xl   leading-loose text-center self-center lg:row-span-2 xl-row-span-1" /* Initial text-3xl */
      >
        Your Brand,
        <span
          className={`${great_Vibes.className}  text-5xl md:text-6xl   block`} /* Initial text-6xl */
        >
         Our Mission
        </span>
      </motion.span>

      <HoverEffect items={projects} />
    </section>
  );
};
export default whyUS;
