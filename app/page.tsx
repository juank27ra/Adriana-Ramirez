"use client";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppBotton";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Education />
      <Testimonials />
      <Contact />
      <Locations />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
