"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";

const problems = [
  {
    icon: "📈",
    title: "Revenue Plateaus",
    description: "You're hitting growth ceilings despite market opportunities and your team's hard work."
  },
  {
    icon: "👥", 
    title: "Team Misalignment",
    description: "Your team lacks buy-in on growth initiatives, and strategic meetings feel unproductive."
  },
  {
    icon: "💰",
    title: "Resource Waste",
    description: "You're investing in strategies and consultants that aren't delivering measurable ROI."
  },
  {
    icon: "🏆",
    title: "Competitive Pressure", 
    description: "Competitors seem to be outperforming you, and you're not sure why or how to respond."
  }
];

export function ProblemSection() {
  return (
    <SectionContainer sectionName="problem" id="problem" className="bg-gradient-to-b from-[#F5FAFF] to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hook question */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003687] mb-6"
          >
            Are You Tired of Working Harder While Your Competitors Grow Effortlessly?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#001A41]/80 mb-12 leading-relaxed"
          >
            You&apos;re not alone. Most middle-market business leaders face the same frustrating challenges that traditional consulting fails to solve.
          </motion.p>

          {/* Problem grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-[#003687] mb-3">{problem.title}</h3>
                <p className="text-[#001A41]/70 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Agitation paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#175CD3]/5 p-8 rounded-2xl border border-[#175CD3]/20 mb-8"
          >
            <p className="text-lg md:text-xl text-[#003687] leading-relaxed mb-6">
              <strong>Every day you delay addressing these issues, your competitors gain ground.</strong> The market won&apos;t wait for you to figure this out. Your team is looking for leadership and direction, but traditional consulting takes months, costs a fortune, and often delivers reports that collect dust.
            </p>
            <p className="text-base md:text-lg text-[#001A41]/80">
              Meanwhile, your potential is trapped by inefficient processes, misaligned teams, and strategies that worked five years ago but don&apos;t work today.
            </p>
          </motion.div>

          {/* Cost of inaction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 px-6 py-3 rounded-full border border-[#175CD3]/20">
              <div className="size-3 bg-[#175CD3] rounded-full animate-pulse"></div>
              <span className="font-semibold text-[#003687]">
                The average middle-market business leaves $2.3M in growth opportunities on the table every year.
              </span>
            </div>
            <p className="text-[#001A41]/70 mt-4 text-lg">
              Can you afford to wait another quarter?
            </p>
          </motion.div>

          {/* Transition CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-[#003687] mb-6 font-medium">
              There&apos;s a better way. Let us show you how.
            </p>
            <CTAButton 
              location="problem_section"
              size="lg"
              className="px-8 py-3"
            >
              See the Solution That&apos;s Helping 300+ Businesses
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}