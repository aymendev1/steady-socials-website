"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

type collectionType = { name: string; type: string; images: string[] };
const carousel: React.FC = ({}) => {
  const data: collectionType[] = [
    {
      name: "FaceCOllection", // Collection Name
      type: "faceCollection",
      images: [
        // Image collection
        "https://images.unsplash.com/photo-1718963927746-f9befcea399a",
        "https://images.unsplash.com/photo-1649255917534-5ca5c56fca06",
        "https://images.unsplash.com/photo-1691155056059-82a814c79240",
        "https://images.unsplash.com/photo-1691154928997-5d839847e4e7",
        "https://images.unsplash.com/photo-1718963892270-04300c864522",
        "https://plus.unsplash.com/premium_photo-1668485968642-30e3d15e9b9c",
        "https://images.unsplash.com/photo-1718963927777-91a3e65cef45",
        "https://images.unsplash.com/photo-1671275425467-8b24b89d2794",
        "https://images.unsplash.com/photo-1654512697681-8434b50096dd",
      ],
    },
    {
      name: "CartierJewelry", // Collection Name
      type: "jewelry", // Type
      images: [
        // Image collection
        "https://images.unsplash.com/photo-1558882268-15aa056d885f",
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1",
        "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
        "https://images.unsplash.com/photo-1525256074812-2f0a984bafad",
        "https://images.unsplash.com/photo-1731406322264-dac59f83828b",
        "https://images.unsplash.com/photo-1698259947580-90ffe913b711",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?",
      ],
    },
    {
      name: "GymShark", // Collection Name
      type: "fashion", // Type
      images: [
        // Image collection
        "https://images.unsplash.com/photo-1551656274-05e6d217f121",
        "https://images.unsplash.com/photo-1584863431255-3997371dcc01",
        "https://images.unsplash.com/photo-1584863371502-048abf845b07",
        "https://images.unsplash.com/photo-1584464457692-54516d705fe0",
        "https://images.unsplash.com/photo-1609899517237-77d357b047cf",
        "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb",
        "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55",
        "https://images.unsplash.com/photo-1606889464198-fcb18894cf50",
        "https://images.unsplash.com/photo-1628869503963-6ce8de674c58",
      ],
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-zinc-950 md:shadow-xl">
      {data.map((collection: collectionType, i: number) => {
        const applyReverse: boolean = i % 2 === 0;
        return (
          <Marquee
            key={i}
            pauseOnHover
            reverse={applyReverse}
            className="[--duration:30s]"
          >
            {collection.images.map((img, i) => (
              <Image
                src={img}
                width={140}
                height={250}
                quality={100}
                className="object-cover object-center"
                alt={collection.name}
                key={i}
              />
            ))}
          </Marquee>
        );
      })}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-950 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-950 dark:from-background"></div>
    </div>
  );
};
export default carousel;
