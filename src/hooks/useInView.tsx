"use client";

import { useEffect, useState } from 'react';

export function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref); // Stop observing once in view
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);

  return [setRef, isInView] as const;
}

// Animation wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideInUp' | 'zoomIn';
  delay?: number;
  duration?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 800
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView(0.1);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    if (!isInView) {
      switch (animation) {
        case 'fadeLeft':
          return `${baseClasses} ${durationClass} -translate-x-16 opacity-0`;
        case 'fadeRight':
          return `${baseClasses} ${durationClass} translate-x-16 opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} scale-90 opacity-0`;
        case 'slideInUp':
          return `${baseClasses} ${durationClass} translate-y-16 opacity-0`;
        case 'zoomIn':
          return `${baseClasses} ${durationClass} scale-75 opacity-0`;
        default: // fadeUp
          return `${baseClasses} ${durationClass} translate-y-12 opacity-0`;
      }
    }
    
    return `${baseClasses} ${durationClass} translate-x-0 translate-y-0 scale-100 opacity-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: isInView ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}

// Staggered children animation
interface StaggeredAnimationProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn';
}

export function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 100,
  animation = 'fadeUp'
}: StaggeredAnimationProps) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={isInView ? index * staggerDelay : 0}
          className="will-change-transform"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}
