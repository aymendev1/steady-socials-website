"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type cardBackgroundProps = {
  title: string;
  description: string;
  initialImg: string;
  onHoverImg: string;
};

const cardBackground: React.FC<cardBackgroundProps> = ({
  title,
  description,
  initialImg,
}) => {
  return (
    <motion.div
      className="max-w-fit w-full group/card"
      initial={{ translateX: -50, opacity: 0.3 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div
        className={cn(
          " layer-bg cursor-pointer overflow-hidden relative card h-60 lg:h-96 w-fit lg:w-[400px] 2xl:w-[500px] rounded-md shadow-xl  mx-auto backgroundImage flex flex-col justify-end p-4"
        )}
        style={{
          backgroundImage: `url(${initialImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal md:text-sm text-xs text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default cardBackground;
