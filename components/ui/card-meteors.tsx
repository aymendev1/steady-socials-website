"use client";
import React from "react";
import { Meteors } from "./meteors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type cardMeteorsProps = {
  review: string;
  user: { avatar: string; name: string };
};

const cardMeteors: React.FC<cardMeteorsProps> = ({ user, review }) => {
  return (
    <div className=" relative w-[200px] lg:w-[400px]">
      <div className="absolute inset-0 h-full w-full  transform scale-[0.80]  rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-zinc-950 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
        <p className="font-normal text-sm md:text-base text-slate-300 mb-4 relative z-50 text-justify">
          {review}
        </p>
        <div className="flex flex-col gap-2 items-center">
          <Avatar>
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="object-cover object-center"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xs ">{user.name}</span>
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};
export default cardMeteors;
