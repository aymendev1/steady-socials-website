"use client";
import { great_Vibes } from "@/app/fonts";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./ui/carousel";
import { LuChevronRight } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Showcase: React.FC = () => {
  const router = useRouter();
  return (
    <section
      id="gallery"
      className="min-h-screen w-full flex flex-col gap-5 justify-center items-center align-center px-10 md:px-20  lg:px-20 xl:px-30 2xl:px-40 py-20 bg-zinc-950"
    >
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`${great_Vibes.className} text-5xl lg:text-6xl 2xl:text-7xl block text-center`} /* Initial text-6xl */
      >
        Our Work Speaks for Itself
      </motion.span>
      <Carousel />
      <button
        onClick={() => router.push("/showcase")}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
          <span className="text-pretty  text-base font-light">
            See More of Our Portfolio{" "}
          </span>
          <LuChevronRight className="h-6 w-6" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
    </section>
  );
};
export default Showcase;
