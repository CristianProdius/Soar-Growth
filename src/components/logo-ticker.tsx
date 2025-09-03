"use client"

import AcmeLogo from "@/assets/brands/acme-corp-logo.svg"
import EchoValleyLogo from "@/assets/brands/echo-valley-logo.svg"
import QuantumLogo from "@/assets/brands/quantum-logo.svg"
import PulseLogo from "@/assets/brands/pulse-logo.svg"
import OutsideLogo from "@/assets/brands/outside-logo.svg"
import CelestialLogo from "@/assets/brands/celestial-logo.svg"
import TwiceLogo from "@/assets/brands/twice-logo.svg"
import Image from "next/image";
import {motion, useInView} from "motion/react";
import { useRef } from "react";

export function LogoTicker() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const COMPANIES = [
    {name: "Acme Corp", logo: AcmeLogo},
    {name: "Twice", logo: TwiceLogo},
    {name: "Echo Valley", logo: EchoValleyLogo},
    {name: "Quantum", logo: QuantumLogo},
    {name: "Pulse", logo: PulseLogo},
    {name: "Outside", logo: OutsideLogo},
    {name: "Celestial", logo: CelestialLogo}
  ] satisfies Array<{
    name: string,
    logo: SVGElement
  }>

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <div className="flex items-center gap-5">
          <motion.div 
            className="flex-1 md:flex-none"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-lg md:text-xl font-semibold text-[#003687]"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Trusted by 300+ Middle-Market Businesses
            </motion.h2>
          </motion.div>
          <motion.div 
            className="flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{x: "-50%"}}
              animate={{x: 0}}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[...COMPANIES, ...COMPANIES].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    filter: "brightness(1.2) saturate(1.2)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0"
                >
                  <Image 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
