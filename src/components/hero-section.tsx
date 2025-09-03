"use client";

import BackgroundStars from "@/assets/stars.png";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useRef, useEffect } from "react";
import { CTAButton } from "@/components/ui/cta-button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const planetScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 1.2]
  );

  const planetRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  const planetX = useTransform(springMouseX, [-20, 20], [-10, 10]);
  const planetY = useTransform(springMouseY, [-20, 20], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 20);
      mouseY.set((clientY - innerHeight / 2) / 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      animate={{ backgroundPositionX: BackgroundStars.width }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      className="min-h-[500px] h-[70vh] md:h-[800px] flex items-center overflow-hidden relative bg-gradient-to-br from-slate-50 via-white to-slate-100 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${BackgroundStars.src})`,
        backgroundPositionY,
      }}
      ref={sectionRef}
    >
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(59,130,246,0.1)_15%,rgb(30,64,175,0.05)_78%,transparent)]"
        style={{
          x: springMouseX,
          y: springMouseY,
        }}
      />
      {/* Planet Logic */}
      <motion.div 
        className="absolute size-48 sm:size-64 md:size-96 bg-blue-500 rounded-full border border-blue-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(147,197,253)_37.7%,rgb(59,130,246))] shadow-[-20px_-20px_50px_rgb(59,130,246,0.3),-20px_-20px_80px_rgb(59,130,246,0.1),0_0_50px_rgb(59,130,246,0.2)]"
        style={{
          scale: planetScale,
          rotate: planetRotate,
          x: planetX,
          y: planetY,
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgb(59 130 246 / 0.4), 0 10px 20px -5px rgb(59 130 246 / 0.2)",
          transition: { duration: 0.3 }
        }}
      />
      {/* Rings + Mini planets Logic */}
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute size-[280px] sm:size-[344px] md:size-[580px] border border-blue-300 opacity-60 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 bg-blue-600 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 bg-blue-600 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-5 border border-blue-400 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="size-2 bg-blue-600 rounded-full" />
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute size-[360px] sm:size-[444px] md:size-[780px] rounded-full border border-blue-300/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      />
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute size-[440px] sm:size-[544px] md:size-[980px] rounded-full border border-blue-300 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 bg-blue-600 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 bg-blue-600 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      {/* Hero Section Content Logic */}
      <div className="container relative mt-8 sm:mt-12 md:mt-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,rgb(30,64,175),rgb(59,130,246),rgb(147,197,253,0.8))] bg-clip-text text-transparent text-center"
        >
          SOAR Growth
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md md:max-w-xl mx-auto text-slate-700 mt-4 sm:mt-5 text-center leading-relaxed"
        >
          Elevate your business growth effortlessly with our platform, where smart technology meets user-friendly business tools.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="flex justify-center mt-6 sm:mt-8 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CTAButton location="hero_primary" className="w-full sm:w-auto text-sm sm:text-base">
              Take a FREE Growth Assessment
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
