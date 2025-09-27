"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Achievements from "@/components/Achievements";
import ImpactSection from "@/components/ImpactSection";
import VisionMission from "@/components/VisionMission";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestUpdates from "@/components/LatestUpdates";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { useLoading } from "@/context/Golobalprovider";

export default function Home() {
  const { isLoading, stopLoading } = useLoading();

  const handleEnterSite = () => {
    stopLoading();
  };

  return (
    <>
      {isLoading && <PageLoader onEnterSite={handleEnterSite} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <ImpactSection />
          <FocusAreas />
          <VisionMission />
          <Achievements />
          <TestimonialsSection />
          <LatestUpdates />
        </main>
        <Footer />
      </div>
    </>
  );
}
