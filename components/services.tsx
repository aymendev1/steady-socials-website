"use client";
import { great_Vibes } from "@/app/fonts";
import { motion } from "framer-motion";
import React from "react";
import CardBackground from "./ui/card-background";
import { useRouter } from "next/navigation";

type serviceType = {
  title: string;
  description: string;
  initialImg: string;
  onHoverImg: string;
};
const Services: React.FC = () => {
  const router = useRouter();
  /* Data */
  const serviceList: serviceType[] = [
    {
      title: "Advertisement Pictures",
      description:
        "Create captivating advertisements that elevate your brand. Our skilled team delivers impactful visuals that engage audiences and convey your message effectively.",
      initialImg:
        "http://steadysocial.com/wp-content/uploads/2024/02/iStock-1153438285-1-768x512.jpg",
      onHoverImg:
        "http://steadysocial.com/wp-content/uploads/2024/02/iStock-1312113135-2-683x1024.jpg",
    },
    {
      title: "UGC Content",
      description:
        "Boost engagement with authentic UGC content. We craft relatable visuals that connect with your audience, building trust and enhancing brand loyalty.",
      initialImg:
        "http://steadysocial.com/wp-content/uploads/2024/02/pexels-george-milton-6953836-2048x1365.jpg",
      onHoverImg:
        "https://images.unsplash.com/photo-1664277497095-424e085175e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section
      id="services"
      className="min-h-screen w-full flex flex-col gap-10 justify-center items-center align-center px-10 md:px-10 lg:px-20 xl:px-30 2xl:px-40 py-20"
    >
      {/*  Title and Description */}
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`${great_Vibes.className} text-5xl lg:text-6xl 2xl:text-7xl block`} /* Initial 6xl */
      >
        Our Services
      </motion.span>
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={` text-zinc-300 font-light text-sm leading-loose text-justify xl:w-[1000px] xl:text-center `}
      >
        Showcase your products with stunning advertisement photography and
        authentic UGC (User-Generated Content). Whether you need professional
        visuals or relatable content that resonates with your audience, we
        deliver engaging media tailored to elevate your brand.
      </motion.span>
      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-5 align-center">
        {serviceList.map((service: serviceType, index: number) => {
          return (
            <CardBackground
              key={index}
              title={service.title}
              description={service.description}
              onHoverImg={service.onHoverImg}
              initialImg={service.initialImg}
            />
          );
        })}
      </div>
      {/*  Get Started BTN */}
      <button
        onClick={() => router.push("/services")}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Learn More About Our Services
      </button>
    </section>
  );
};
export default Services;
