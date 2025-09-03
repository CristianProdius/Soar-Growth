"use client";

import { motion } from "motion/react";
import { CTAButton } from "@/components/ui/cta-button";

export function HeroSection() {

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-slate-50 via-white to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/[0.02] via-transparent to-blue-900/[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.06),transparent_50%)]" />
      
      {/* Premium geometric patterns */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
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
          className="flex justify-center mt-6 sm:mt-8 px-2 sm:px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full max-w-xs sm:max-w-none sm:w-auto"
          >
            <CTAButton 
              location="hero_primary" 
              className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="block sm:hidden">Free Assessment</span>
              <span className="hidden sm:block">Take a FREE Growth Assessment</span>
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
