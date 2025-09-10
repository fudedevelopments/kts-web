"use client";

import { useEffect, useState } from 'react';

export function AnimationPerformanceOptimizer() {
  useEffect(() => {
    // Preload animation styles
    const style = document.createElement('style');
    style.textContent = `
      .will-change-auto {
        will-change: auto;
      }
      
      .will-change-transform {
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);

    // Optimize animations based on device capabilities
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isLowPerformance = navigator.hardwareConcurrency <= 2;
    
    if (mediaQuery.matches || isLowPerformance) {
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.8s');
    }

    // Cleanup will-change after animations complete
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(element => {
      const handleAnimationEnd = () => {
        (element as HTMLElement).style.willChange = 'auto';
      };
      
      element.addEventListener('animationend', handleAnimationEnd);
      element.addEventListener('transitionend', handleAnimationEnd);
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

// Intersection Observer Performance Hook
export function usePerformantInView(threshold = 0.1, rootMargin = '50px') {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    // Use a single observer instance with optimized settings
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Unobserve after first intersection for better performance
        if (entry.isIntersecting) {
          observer.unobserve(ref);
        }
      },
      { 
        threshold,
        rootMargin, // Trigger animation before element is fully visible
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold, rootMargin]);

  return [setRef, isInView] as const;
}
