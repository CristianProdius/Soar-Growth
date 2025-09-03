"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GrowthArrowProps {
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeConfig = {
  sm: { width: 80, height: 200, classes: "w-20 h-50" },
  md: { width: 120, height: 300, classes: "w-32 h-72 md:w-30 md:h-75" },
  lg: { width: 160, height: 400, classes: "w-40 h-96 lg:w-40 lg:h-100" }
};

const growthDotColors = [
  "#3B82F6", // blue-500
  "#6366F1", // indigo-500
  "#8B5CF6", // purple-500
  "#A855F7"  // purple-400
];

export function GrowthArrow({ className, delay = 0, size = 'md' }: GrowthArrowProps) {
  const config = sizeConfig[size];
  const strokeWidth = size === 'sm' ? 4 : size === 'md' ? 5 : 6;
  
  // Respect user's motion preferences
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  
  // SVG path for elegant S-curve from bottom-left to top-right
  const arrowPath = `M ${config.width * 0.2} ${config.height * 0.9} 
                     C ${config.width * 0.1} ${config.height * 0.7}, 
                       ${config.width * 0.4} ${config.height * 0.5}, 
                       ${config.width * 0.3} ${config.height * 0.3}
                     C ${config.width * 0.2} ${config.height * 0.1}, 
                       ${config.width * 0.6} ${config.height * 0.2}, 
                       ${config.width * 0.8} ${config.height * 0.1}`;

  // Growth indicator positions along the path
  const growthDots = [
    { x: config.width * 0.25, y: config.height * 0.75, radius: size === 'sm' ? 2 : size === 'md' ? 3 : 4 },
    { x: config.width * 0.35, y: config.height * 0.55, radius: size === 'sm' ? 3 : size === 'md' ? 4 : 5 },
    { x: config.width * 0.45, y: config.height * 0.35, radius: size === 'sm' ? 4 : size === 'md' ? 5 : 6 },
    { x: config.width * 0.7, y: config.height * 0.2, radius: size === 'sm' ? 5 : size === 'md' ? 6 : 7 }
  ];

  // Arrow head points
  const arrowHeadPath = `${config.width * 0.8},${config.height * 0.1} 
                         ${config.width * 0.75},${config.height * 0.05} 
                         ${config.width * 0.85},${config.height * 0.05} 
                         ${config.width * 0.8},${config.height * 0.15} 
                         ${config.width * 0.75},${config.height * 0.15}`;

  return (
    <motion.div
      className={cn(config.classes, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: prefersReducedMotion ? 0 : 0.5, 
        delay: prefersReducedMotion ? 0 : delay 
      }}
      style={{ willChange: 'transform' }}
    >
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${config.width} ${config.height}`}
        className="overflow-visible"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.15))' }}
        role="img"
        aria-label="Animated growth arrow indicating business success and upward trajectory"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id={`arrowGradient-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          {/* Glow filter for pulsing effect */}
          <filter id={`glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
          
          {/* Shadow filter for growth dots */}
          <filter id={`shadow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Main arrow path */}
        <motion.path
          d={arrowPath}
          stroke={`url(#arrowGradient-${size})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 2.5,
            delay: prefersReducedMotion ? 0 : delay + 0.5,
            ease: "easeInOut"
          }}
        />

        {/* Growth indicator dots */}
        {growthDots.map((dot, index) => (
          <motion.circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r={dot.radius}
            fill={growthDotColors[index]}
            filter={`url(#shadow-${size})`}
            initial={{ scale: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: prefersReducedMotion ? 0 : delay + 1.5 + (index * 0.5),
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          />
        ))}

        {/* Arrow head */}
        <motion.polygon
          points={arrowHeadPath}
          fill={`url(#arrowGradient-${size})`}
          initial={{ scale: prefersReducedMotion ? 1 : 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : delay + 3,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />

        {/* Pulsing effect at arrow tip */}
        <motion.circle
          cx={config.width * 0.8}
          cy={config.height * 0.1}
          r={strokeWidth * 2}
          fill={`url(#arrowGradient-${size})`}
          initial={{ scale: 1, opacity: prefersReducedMotion ? 0.5 : 0.3 }}
          animate={prefersReducedMotion ? 
            { scale: 1, opacity: 0.5 } :
            {
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 2,
            delay: prefersReducedMotion ? 0 : delay + 3.5,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut"
          }}
          filter={`url(#glow-${size})`}
        />
      </svg>
    </motion.div>
  );
}