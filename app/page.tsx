"use client";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import WhyUS from "../components/whyUs";
import AboutUs from "../components/about-us";
import Showcase from "@/components/showcase";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center text-white ">
      <Navbar />
      <HeroSection />
      <WhyUS />
      <AboutUs />
      <Showcase />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
