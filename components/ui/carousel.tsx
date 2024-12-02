"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

type collectionType = { name: string; type: string; images: string[] };
const carousel: React.FC = ({}) => {
  const data: collectionType[] = [
    {
      name: "MakeMeBio", // Collection Name
      type: "skincare",
      images: [
        // Image collection
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0123-1-1024x928.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0117-996x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0116.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0103-846x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0108-1024x833.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0083-1-1024x911.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0064-2-683x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0077-807x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/IMG_0111-235x300.jpg",
      ],
    },
    {
      name: "Sincere Sally", // Collection Name
      type: "jewelry", // Type
      images: [
        // Image collection
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-7442-683x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-0875-682x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-4764-1-846x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-9927-220x300.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-0705-208x300.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-6638-300x234.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-1639-222x300.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-2775-683x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/05/Tezza-6968-683x1024.jpg",
      ],
    },
    {
      name: "Swegmark", // Collection Name
      type: "fashion", // Type
      images: [
        // Image collection
        "http://steadysocial.com/wp-content/uploads/2024/06/IMG_5379-815x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/06/IMG_5377-741x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/06/IMG_5378-1024x727.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/joakimhall240602_272-1024x783.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/joakimhall240602_136-300x198.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/joakimhall240602_283-1024x790.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/joakimhall240602_422-205x300.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/DSC_1246-880x1024.jpg",
        "http://steadysocial.com/wp-content/uploads/2024/07/joakimhall240602_18-735x1024.jpg",
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
                className="object-cover "
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
