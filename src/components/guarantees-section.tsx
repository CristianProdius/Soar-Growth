"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";

const guarantees = [
  {
    icon: "🎯",
    title: "90-Day Growth Guarantee",
    subtitle: "Results or Full Refund",
    promise: "We guarantee measurable improvement in at least 2 of the 4 SOAR areas within 90 days, or we'll refund your entire investment and work for free until you see results.",
    metrics: [
      "Revenue increase of 10%+ OR",
      "Margin improvement of 15%+ OR", 
      "Team engagement score increase of 25%+ OR",
      "Operational efficiency improvement of 20%+"
    ],
    meaning: "If we don't deliver concrete, measurable results in 90 days, you pay nothing. Period."
  },
  {
    icon: "💎",
    title: "Growth Opportunity Guarantee", 
    subtitle: "$100K+ Value or It's Free",
    promise: "In your first diagnostic session, we guarantee to identify at least $100,000 in untapped growth opportunities, or the consultation is completely free.",
    metrics: [
      "Specific, actionable opportunities worth 10x our fee",
      "Detailed implementation roadmap included",
      "Immediate quick-wins you can implement",
      "Complete SOAR analysis across all four pillars"
    ],
    meaning: "We're so confident in our process that if we can't show you opportunities worth at least $100K in the first session, you owe us nothing."
  },
  {
    icon: "⚡",
    title: "Time Investment Promise",
    subtitle: "Minimal Disruption Guaranteed", 
    promise: "Our entire process requires less than 20 hours of your team's time over 90 days – 80% less time investment than traditional consulting.",
    metrics: [
      "4-6 hours for initial diagnostic session",
      "2-3 hours weekly during implementation",
      "Flexible scheduling around your operations", 
      "Remote sessions available when needed"
    ],
    meaning: "Your business keeps running normally while we work together to unlock growth."
  }
];

const riskRemovers = [
  {
    icon: "📝",
    title: "No Long-Term Contracts",
    description: "Month-to-month engagement after initial 90 days"
  },
  {
    icon: "💰",
    title: "No Hidden Fees", 
    description: "Transparent pricing with no surprise costs"
  },
  {
    icon: "🔄",
    title: "No Minimum Commitment",
    description: "You decide if and when to continue after seeing results"
  },
  {
    icon: "🚀", 
    title: "Fast Results",
    description: "See improvements in 30 days or less, full results in 90 days"
  },
  {
    icon: "⏰",
    title: "Quick Implementation",
    description: "Start seeing changes within weeks, not months"
  },
  {
    icon: "💡",
    title: "Immediate Value",
    description: "Walk away from first session with actionable insights"
  }
];

const consultationValue = [
  {
    item: "Growth Opportunity Assessment",
    value: "$2,500",
    description: "Identify top 3-5 growth opportunities"
  },
  {
    item: "Complete SOAR Analysis", 
    value: "$1,500",
    description: "Full evaluation across all four pillars"
  },
  {
    item: "Quick Win Identification",
    value: "$1,000", 
    description: "Immediate actions you can take"
  },
  {
    item: "90-Day Roadmap Preview",
    value: "$3,000",
    description: "Custom growth plan outline" 
  },
  {
    item: "ROI Projection Analysis",
    value: "$2,000",
    description: "Expected return on growth initiatives"
  }
];

export function GuaranteesSection() {
  const totalValue = consultationValue.reduce((sum, item) => sum + parseInt(item.value.replace(/[$,]/g, '')), 0);

  return (
    <SectionContainer sectionName="guarantees" id="guarantees" className="bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#003687] mb-6"
          >
            Zero Risk, Maximum Results: 
            <br />
            <span className="text-[#175CD3]">Our Iron-Clad Guarantees</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#001A41]/80 leading-relaxed"
          >
            We&apos;re so confident in our ability to deliver results that we&apos;re willing to guarantee them. Here&apos;s how we remove every bit of risk from your decision.
          </motion.p>
        </div>

        {/* Main guarantees */}
        <div className="space-y-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#175CD3]/5 to-[#003687]/5 p-8 rounded-2xl border border-[#175CD3]/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and title */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="text-6xl mb-4 lg:mb-2">{guarantee.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#003687]">{guarantee.title}</h3>
                    <p className="text-sm md:text-base text-[#175CD3] font-semibold">{guarantee.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-lg text-[#001A41]/90 leading-relaxed mb-6">{guarantee.promise}</p>
                  
                  {/* Metrics */}
                  <div className="bg-white/60 p-6 rounded-xl mb-4">
                    <h4 className="font-semibold text-[#003687] mb-4">Specific Metrics:</h4>
                    <ul className="space-y-2">
                      {guarantee.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#001A41]/80">
                          <div className="size-2 bg-[#175CD3] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What it means */}
                  <div className="bg-[#175CD3]/10 p-4 rounded-xl border border-[#175CD3]/20">
                    <p className="text-[#003687] font-medium">
                      <strong>What This Means:</strong> {guarantee.meaning}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Risk removal grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8">
            Additional Risk Removers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskRemovers.map((item) => (
              <div 
                key={item.title}
                className="bg-[#F5FAFF] p-6 rounded-xl border border-[#BFD4F2]/30 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-[#003687] mb-2">{item.title}</h4>
                <p className="text-sm text-[#001A41]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Consultation value breakdown */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#175CD3]/10 to-[#003687]/10 p-8 rounded-2xl border border-[#175CD3]/20 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003687] mb-4">
              What You Get in Your Free Consultation
            </h3>
            <p className="text-lg text-[#001A41]/80">
              <span className="text-2xl font-bold text-[#175CD3]">${totalValue.toLocaleString()} Value</span> - Yours Absolutely Free
            </p>
          </div>

          <div className="space-y-4">
            {consultationValue.map((item) => (
              <div 
                key={item.item}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/60 p-4 rounded-xl"
              >
                <div className="flex-1 mb-2 sm:mb-0">
                  <h4 className="font-semibold text-[#003687]">{item.item}</h4>
                  <p className="text-sm text-[#001A41]/70">{item.description}</p>
                </div>
                <div className="text-lg font-bold text-[#175CD3]">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 p-4 bg-white/80 rounded-xl">
            <p className="text-[#003687] font-semibold">
              This isn&apos;t a sales pitch disguised as a consultation. You&apos;ll receive genuine insights and actionable recommendations regardless of whether we work together.
            </p>
          </div>
        </motion.div>

        {/* Scarcity and urgency */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-[#175CD3] to-[#003687] text-white p-8 rounded-2xl mb-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Limited Availability - Act Now</h3>
            <p className="text-lg mb-4 max-w-2xl mx-auto">
              Larry and Laurence personally lead every diagnostic session. Due to their hands-on approach, they can only work with <strong>50 businesses per quarter</strong>.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full">
              <div className="size-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Only 12 consultation spots remaining this month</span>
            </div>
          </div>

          {/* Final testimonial */}
          <div className="bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-[#003687] leading-relaxed mb-4">
              &ldquo;The consultation alone was worth more than we&apos;ve gotten from other consultants we&apos;ve paid thousands to. No pressure, just pure value.&rdquo;
            </p>
            <p className="text-sm text-[#001A41]/70">
              <strong>Jennifer Walsh</strong>, Founder, TechSystems
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#175CD3]/5 to-[#003687]/5 p-8 rounded-2xl border border-[#175CD3]/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#003687] mb-4">
            With Guarantees Like These, What Do You Have to Lose?
          </h3>
          <p className="text-lg text-[#001A41]/80 mb-6 max-w-2xl mx-auto">
            Zero risk, maximum value, guaranteed results. The only risk is waiting while your competitors get ahead.
          </p>
          <CTAButton 
            location="guarantees_section"
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Claim Your Risk-Free Growth Consultation
          </CTAButton>
          <p className="text-sm text-[#001A41]/60 mt-4">
            🔒 No Obligation • 💰 Free Consultation • ⚡ Immediate Value
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}