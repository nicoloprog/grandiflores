import React from "react";
import MainLayout from "@/layout/MainLayout";
import HeroHome from "@/section/HeroHome";
import Services from "@/section/Services";
import Contact from "@/section/Contact";

export default function Home() {
  return (
    <MainLayout>
      <HeroHome />
      <Services />
      <Contact />
    </MainLayout>
  );
}
