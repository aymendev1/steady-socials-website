"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const contactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto  rounded-2xl border-zinc-500p-4 p-8 shadow-input bg-zinc-950">
      <h2 className="font-bold text-xl text-neutral-200">Write a message</h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        If you&apos;re interested in our services, feel free to reach out using
        the form below. We&apos;re here to bring your vision to life.
      </p>

      <form className="my-8 " onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name" className="text-neutral-200">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Alex JH"
            type="text"
            className="bg-zinc-950 text-neutral-200"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-200">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="email@example.com"
            type="email"
            className="bg-zinc-950 text-neutral-200"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-neutral-200">
            Your Message
          </Label>
          <Input
            id="message"
            placeholder="Your Message here"
            type="text"
            className="bg-zinc-950 text-neutral-200"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900 block bg-zinc-950 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send a message &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default contactForm;
