"use client";

import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import { siteConfig } from "@/site-config";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  location: string;
  size?: "sm" | "lg" | "default";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  href?: string;
}

export function CTAButton({ 
  children, 
  location, 
  size = "default", 
  variant = "default",
  className,
  href
}: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(location, children?.toString() || 'CTA Click');
    
    // Open booking URL
    const bookingUrl = href || siteConfig.bookingUrl;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        onClick={handleClick}
        size={size}
        variant={variant}
        className={cn(
          "relative overflow-hidden group cursor-pointer",
          "bg-gradient-to-r from-[#175CD3] to-[#003687]",
          "hover:from-[#003687] hover:to-[#175CD3]",
          "text-white font-semibold shadow-xl",
          "border-0 transition-all duration-300",
          "hover:shadow-2xl hover:shadow-[#175CD3]/25",
          variant === "outline" && "bg-transparent border-2 border-[#175CD3] text-[#175CD3] hover:bg-[#175CD3] hover:text-white",
          variant === "secondary" && "bg-white text-[#175CD3] hover:bg-[#F5FAFF]",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Button>
    </motion.div>
  );
}