"use client";
import { great_Vibes } from "@/app/fonts";
import { motion } from "framer-motion";
import React from "react";
import CardMeteors from "@/components/ui/card-meteors";
import Marquee from "./ui/marquee";

type review = { review: string; user: { avatar: string; name: string } };
const Testimonial: React.FC = () => {
  const reviews: review[] = [
    {
      review:
        "SteadySocial helped us create stunning product visuals that truly showcase our brand. The team was professional and delivered exactly what we needed.",
      user: {
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80",
        name: "Jessica L.",
      },
    },
    {
      review:
        "Amazing service! Their team captured the essence of our products perfectly. We saw a significant boost in engagement after the new images went live.",
      user: {
        avatar:
          "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-3874-200x300.jpg",
        name: "Laura R.",
      },
    },
    {
      review:
        "The photography and content creation was top-notch. Their attention to detail really stands out, and they understood our brand vision well.",
      user: {
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=50",
        name: "David P.",
      },
    },
    {
      review:
        "Great experience working with SteadySocial. The visuals they produced were exactly what we were looking for. Highly recommend their service!",
      user: {
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80",
        name: "Mark S.",
      },
    },
  ];

  return (
    <section
      id="testimonial"
      className="max-h-screen h-fit w-full flex flex-col gap-10 justify-center items-center align-center px-10 md:px-20 lg:px-20 xl:px-30 2xl:px-40 py-20 bg-black"
    >
      <motion.span
        initial={{ translateY: -50 }}
        whileInView={{ translateY: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-normal text-4xl tracking-wide lg:text-5xl leading-loose text-center"
      >
        Recommended
        <span
          className={`${great_Vibes.className} text-5xl lg:text-6xl block tracking-wide mt-2 `}
        >
          By Our Clients
        </span>
      </motion.span>

      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:30s]">
          {reviews.map((review: review, i: number) => {
            return <CardMeteors key={i} {...review} />;
          })}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-zinc-950 dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-zinc-950 dark:from-background"></div>
      </div>
    </section>
  );
};
export default Testimonial;
