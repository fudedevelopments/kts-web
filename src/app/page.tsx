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
import { AnimationPerformanceOptimizer } from "@/components/AnimationOptimizer";
import { AnimatedSection } from "@/hooks/useInView";
import { useState, useEffect } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 2 second loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimationPerformanceOptimizer />
      {showLoader && <PageLoader />}
      <div className={`transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          
          {/* Impact Section - Slide up with bounce effect */}
          <AnimatedSection animation="slideInUp" delay={100} duration={1000}>
            <ImpactSection />
          </AnimatedSection>
          
          {/* Focus Areas - Slide from left */}
          <AnimatedSection animation="fadeLeft" delay={150} duration={900}>
            <FocusAreas />
          </AnimatedSection>
          
          {/* Vision Mission - Scale in with elegance */}
          <AnimatedSection animation="scaleIn" delay={200} duration={800}>
            <VisionMission />
          </AnimatedSection>
          
          {/* Achievements - Slide from right */}
          <AnimatedSection animation="fadeRight" delay={180} duration={900}>
            <Achievements />
          </AnimatedSection>
          
          {/* Testimonials - Zoom in effect */}
          <AnimatedSection animation="zoomIn" delay={120} duration={1000}>
            <TestimonialsSection />
          </AnimatedSection>
          
          {/* Latest Updates - Fade up with delay */}
          <AnimatedSection animation="fadeUp" delay={250} duration={800}>
            <LatestUpdates />
          </AnimatedSection>
        </main>
        
        {/* Footer - Simple fade up */}
        <AnimatedSection animation="fadeUp" delay={100} duration={600}>
          <Footer />
        </AnimatedSection>
      </div>
    </>
  );
}
