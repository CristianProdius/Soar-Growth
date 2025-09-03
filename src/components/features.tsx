"use client";

import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "motion/react";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { Icons } from "@/components/icons";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";

const soarPillars = [
  {
    icon: Icons.gauge,
    title: "Sales & Margins",
    letter: "S",
    description: "Drive revenue, boost margins, and strengthen customer growth for long-term market success.",
    outcome: "Average 37% revenue increase in first year",
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: Icons.click,
    title: "Organization & Culture",
    letter: "O", 
    description: "Building alignment, fostering collaboration, and creating a resilient, growth-ready culture.",
    outcome: "95% team buy-in on growth initiatives",
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: Icons.stars,
    title: "Accounting, Finance & Technology",
    letter: "A",
    description: "Improve financial clarity, data-driven decisions, and operational efficiency.",
    outcome: "60% improvement in financial visibility",
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
  {
    icon: Icons.gauge,
    title: "Responsiveness & Execution", 
    letter: "R",
    description: "Streamline operations, boost agility, and execute with precision in a changing market.",
    outcome: "50% reduction in time-to-market",
    backgroundPositionX: 50,
    backgroundPositionY: 50,
    backgroundSizeX: 160,
  },
];

type SolutionTabProps = (typeof soarPillars)[number] & ComponentPropsWithoutRef<"div"> & { selected: boolean };

const SolutionTab = (props: SolutionTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected, xPercentage, yPercentage]);

  return (
    <motion.div
      className="border border-muted flex flex-col p-6 gap-4 rounded-xl relative cursor-pointer min-h-[240px] transition-all duration-300"
      ref={tabRef}
      onClick={props.onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -m-px border border-[#175CD3] rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Letter indicator */}
      <div className="flex items-center gap-4 mb-2">
        <motion.div 
          className="size-12 bg-[#175CD3] text-white rounded-lg inline-flex items-center justify-center font-bold text-xl"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          {props.letter}
        </motion.div>
        <motion.div 
          className="size-12 border border-muted rounded-lg inline-flex items-center justify-center flex-shrink-0"
          whileHover={{ 
            scale: 1.1,
            borderColor: "#175CD3",
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={props.selected ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <props.icon className="size-6"/>
          </motion.div>
        </motion.div>
      </div>
      
      <div>
        <motion.div 
          className="font-bold text-xl mb-3 text-[#003687]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {props.title}
        </motion.div>
        <motion.div 
          className="text-sm text-[#001A41]/80 leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {props.description}
        </motion.div>
        <motion.div 
          className="text-xs bg-[#175CD3]/10 text-[#003687] px-3 py-2 rounded-full font-medium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          ✓ {props.outcome}
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Features() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <SectionContainer sectionName="solution" id="solution" className="bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003687] mb-6"
          >
The SOAR Methodology: Unlock the Full Growth Potential of Your Business
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-4xl mx-auto text-[#001A41]/80 leading-relaxed mb-8"
          >
The SOAR methodology provides a <strong className="text-[#175CD3]">&ldquo;360° view of how a business grows&rdquo;</strong> and turns &ldquo;insight into action, opportunities into outcomes.&rdquo; It combines strategic clarity with practical execution and <strong className="text-[#003687]">provides strategic insight without complexity of traditional consulting.</strong>
          </motion.p>

          {/* Key differentiator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 px-6 py-3 rounded-full border border-[#175CD3]/20 mb-12"
          >
            <span className="text-[#003687] font-semibold">🎯 Pinpoints where you&apos;re falling behind</span>
            <span className="text-[#001A41]/60">•</span>
            <span className="text-[#003687] font-semibold">🚀 Fast tracks biggest ROI initiatives</span>
            <span className="text-[#001A41]/60">•</span>
            <span className="text-[#003687] font-semibold">👥 Leverages team collaboration</span>
          </motion.div>
        </div>

        {/* SOAR methodology pillars */}
        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8"
          >
            The Four Pillars of SOAR
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {soarPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <SolutionTab
                  {...pillar}
                  onClick={() => handleSelectTab(index)}
                  selected={selectedTab === index}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 px-6 py-2 rounded-full border border-[#175CD3]/20 mb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="size-2 bg-[#175CD3] rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm font-semibold text-[#003687]">LIVE DEMONSTRATION</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-[#003687] mb-4">
              See SOAR Transform Your Business
            </h3>
            <p className="text-lg text-[#001A41]/80 max-w-2xl mx-auto leading-relaxed">
              Watch real business leaders explain how SOAR methodology delivered breakthrough results in just 90 days
            </p>
          </motion.div>
          
          {/* Premium Video Container */}
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 150 }}
            viewport={{ once: true }}
          >
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -left-4 size-20 bg-gradient-to-br from-[#175CD3]/20 to-transparent rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 size-32 bg-gradient-to-tl from-[#003687]/20 to-transparent rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Main Video Container */}
            <motion.div 
              className="relative bg-gradient-to-br from-white via-[#F5FAFF] to-[#BFD4F2]/20 p-6 md:p-8 rounded-2xl border border-[#BFD4F2]/40 shadow-2xl overflow-hidden backdrop-blur-sm"
              whileHover={{ 
                y: -5,
                boxShadow: "0 40px 80px -20px rgba(23, 92, 211, 0.3), 0 0 50px rgba(23, 92, 211, 0.1)",
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#175CD3]/5 via-transparent to-[#003687]/5 pointer-events-none" />
              
              {/* Video Frame with Premium Border */}
              <div className="relative">
                {/* Animated Border */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-[#175CD3] via-[#003687] to-[#175CD3] rounded-xl opacity-30 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Video Container */}
                <motion.div 
                  className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-inner"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, type: "spring", stiffness: 200 }
                  }}
                >
                  {/* Premium Play Button Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-br from-black/10 via-transparent to-black/5 cursor-pointer group"
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {/* Outer Ring */}
                      <motion.div 
                        className="absolute inset-0 size-24 border-2 border-white/30 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                      
                      {/* Main Play Button */}
                      <motion.div 
                        className="size-20 bg-gradient-to-br from-white to-white/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20"
                        animate={{ 
                          boxShadow: [
                            "0 0 30px rgba(255, 255, 255, 0.3)",
                            "0 0 50px rgba(255, 255, 255, 0.5)",
                            "0 0 30px rgba(255, 255, 255, 0.3)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          className="ml-1 text-[#175CD3]"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Video Embed */}
                  <iframe
                    src="https://www.youtube.com/embed/sviVSuCU1K0?rel=0&showinfo=0&modestbranding=1&playsinline=1&color=white&theme=dark"
                    title="SOAR Growth Methodology - Transform Your Business in 90 Days"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </motion.div>
              </div>
              
              {/* Premium Video Stats */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { icon: "⏱️", label: "5-minute overview", color: "text-[#175CD3]" },
                    { icon: "📊", label: "Real case studies", color: "text-green-600" },
                    { icon: "🎯", label: "Proven results", color: "text-[#003687]" },
                    { icon: "⚡", label: "90-day transformation", color: "text-amber-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.7 + (0.1 * index), duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <motion.span 
                        className="text-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      >
                        {stat.icon}
                      </motion.span>
                      <span className={`text-sm font-semibold ${stat.color}`}>{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 rounded-full border border-[#175CD3]/20"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="size-2 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-sm font-bold text-[#003687]">WATCH NOW</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Comparison table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#F5FAFF] to-[#BFD4F2]/20 p-8 rounded-2xl mb-8"
        >
          <h3 className="text-2xl font-bold text-[#003687] text-center mb-6">SOARgrowth Platform vs. Traditional Consulting</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-[#001A41] opacity-60">Traditional Consulting</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span>3-6 months of analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span>$50K-500K+ investment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span>External recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Generic, one-size-fits-all solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span>Reports that sit on shelves</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-[#175CD3]">SOARgrowth</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#175CD3]">✓</span>
                  <span><strong>Fast, affordable</strong> growth solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#175CD3]">✓</span>
                  <span><strong>Team alignment and collaboration</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#175CD3]">✓</span>
                  <span><strong>Expert support without complexity</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#175CD3]">✓</span>
                  <span><strong>Proven methodology</strong> with real results</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#175CD3]">✓</span>
                  <span><strong>Accessible platform</strong> for entire team</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-[#003687] mb-6 font-medium">
Ready to unlock your growth potential?
          </p>
          <CTAButton 
            location="solution_section"
            size="lg"
            className="px-8 py-3"
          >
Book a FREE Demo
          </CTAButton>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
