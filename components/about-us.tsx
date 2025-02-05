"use client";

import Image from "next/image";
import { great_Vibes } from "../app/fonts";
export default function Example() {
  const links = [{ name: "Learn more about us", href: "/about-us" }];
  const stats = [
    { name: "Studios worldwide", value: "12" },
    { name: "Full-time models", value: "20+" },
    { name: "Companies Worked with", value: "40+" },
  ];
  return (
    <section
      id="about-us"
      className="relative isolate overflow-hidden bg-gray-900 py-24 px-10 sm:py-32  md:px-20  lg:px-20 xl:px-30 2xl:px-40 w-full"
    >
      <Image
        fill={true}
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ada599] to-[#631c1c] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ada599] to-[#631c1c] opacity-20"
        />
      </div>
      <div className="max-w-7xl">
        <div className="mx-auto w-fit lg:mx-0">
          <h2
            className={`text-5xl font-semibold tracking-tight text-white text-center lg:text-start md:text-5xl lg:text-6xl  ${great_Vibes.className} `}
          >
            Why we&apos;re different ?
          </h2>
          <p className="mt-8 text-white tracking-wide font-light text-sm text-justify md:text-base leading-loose ">
          At SteadySocial, we connect social media expertise with professional visual content to elevate your brand. Our tailored services include social media management, content creation, and AI-enhanced design. With advanced AI previews, you can fine-tune marketing materials in real-time, ensuring they align with your vision. From sourcing skilled models and photographers to creating high-quality content, we deliver industry-leading results ready for your platforms or website.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
