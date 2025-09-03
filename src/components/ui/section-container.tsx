"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
  className?: string;
  id?: string;
}

export function SectionContainer({ 
  children, 
  sectionName, 
  className,
  id 
}: SectionContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackSectionView(sectionName);
        }
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionName]);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={cn("py-20 md:py-24", className)}
    >
      {children}
    </section>
  );
}