"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";

const processSteps = [
  {
    step: "01",
    title: "Rapid Growth Diagnostic",
    timeline: "Week 1 • 4-6 Hours",
    icon: "🔍",
    description: "Strategic growth assessment with your leadership team using our proven SOAR methodology.",
    whatHappens: [
      "Complete evaluation across all four SOAR pillars",
      "Your team participates and owns the insights", 
      "Identification of top 3-5 growth opportunities",
      "No months of interviews or data gathering required"
    ],
    outcome: "Walk away with clear understanding of your biggest growth opportunities and exact steps to capture them.",
    highlight: "Your team drives the process, ensuring buy-in from day one"
  },
  {
    step: "02", 
    title: "Growth Implementation Roadmap",
    timeline: "Week 2-3 • 1-2 Weeks",
    icon: "📋",
    description: "Transform insights into detailed, actionable 90-day plan with clear milestones and accountability.",
    whatHappens: [
      "Detailed action plans for each opportunity",
      "Resource allocation and timeline development",
      "Team alignment on roles and responsibilities",
      "Quick-win identification for immediate results"
    ],
    outcome: "Your team has a clear, actionable 90-day plan with specific targets, milestones, and ownership.",
    highlight: "Plans your team actually wants to execute"
  },
  {
    step: "03",
    title: "Accelerated Implementation", 
    timeline: "Week 4-12 • 8-10 Weeks",
    icon: "🚀",
    description: "Rapid execution with expert coaching, weekly reviews, and real-time adjustments for guaranteed results.",
    whatHappens: [
      "Hands-on implementation support and coaching",
      "Weekly progress reviews and course corrections", 
      "Obstacle removal and process optimization",
      "Results tracking and milestone celebration"
    ],
    outcome: "Measurable results within 90 days: increased revenue, improved margins, aligned team, optimized processes.",
    highlight: "Your team builds capability for sustained growth"
  }
];

const concerns = [
  {
    question: "How much time will this take?",
    answer: "Minimal disruption - most analysis happens in focused sessions. Your day-to-day operations continue normally."
  },
  {
    question: "What if it doesn&apos;t work for our industry?",
    answer: "SOAR is industry-agnostic and works across manufacturing, technology, healthcare, services, and more."
  },
  {
    question: "How do we know you&apos;ll deliver results?",
    answer: "Results guarantee: If we don&apos;t identify at least $100K+ in growth opportunities in the first session, it&apos;s free."
  },
  {
    question: "What happens after 90 days?",
    answer: "Your team has the tools and knowledge to continue driving growth independently with ongoing support available."
  }
];

export function ProcessSection() {
  return (
    <SectionContainer sectionName="process" id="process" className="bg-white">
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
            Simple. Fast. Effective.
            <br />
            <span className="text-[#175CD3]">Here&apos;s How We Transform Your Business in 90 Days</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#001A41]/80 leading-relaxed"
          >
            Unlike traditional consulting that disrupts your business for months, our process is designed for busy executives who need results, not reports.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="mb-16">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Step visual */}
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <div className="relative">
                    {/* Step number circle */}
                    <div className="size-20 bg-gradient-to-br from-[#175CD3] to-[#003687] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-6xl text-center lg:text-left mb-4">{step.icon}</div>
                    
                    {/* Timeline badge */}
                    <div className="inline-flex items-center gap-2 bg-[#175CD3]/10 text-[#003687] px-4 py-2 rounded-full text-sm font-semibold mb-4 mx-auto lg:mx-0">
                      <div className="size-2 bg-[#175CD3] rounded-full animate-pulse"></div>
                      {step.timeline}
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#003687] mb-4">{step.title}</h3>
                  <p className="text-lg text-[#001A41]/80 mb-6 leading-relaxed">{step.description}</p>
                  
                  {/* What happens */}
                  <div className="bg-[#F5FAFF] p-6 rounded-xl border border-[#BFD4F2]/30 mb-6">
                    <h4 className="font-semibold text-[#003687] mb-4">What Happens:</h4>
                    <ul className="space-y-2">
                      {step.whatHappens.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#001A41]/80">
                          <div className="size-2 bg-[#175CD3] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 p-6 rounded-xl border border-[#175CD3]/20 mb-4">
                    <h4 className="font-semibold text-[#003687] mb-2">Outcome:</h4>
                    <p className="text-[#001A41]/80 mb-3">{step.outcome}</p>
                    <p className="text-sm font-medium text-[#175CD3]">✨ {step.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-[#F5FAFF] rounded-xl border border-[#BFD4F2]/30">
            <div className="text-3xl mb-3">⚡</div>
            <div className="font-bold text-[#175CD3] text-xl mb-2">90 Days to Results</div>
            <div className="text-sm text-[#001A41]/70">vs. 6-18 months with traditional consulting</div>
          </div>
          
          <div className="text-center p-6 bg-[#F5FAFF] rounded-xl border border-[#BFD4F2]/30">
            <div className="text-3xl mb-3">💰</div>
            <div className="font-bold text-[#175CD3] text-xl mb-2">Fraction of the Cost</div>
            <div className="text-sm text-[#001A41]/70">80-90% less than Big 4 consulting firms</div>
          </div>
          
          <div className="text-center p-6 bg-[#F5FAFF] rounded-xl border border-[#BFD4F2]/30">
            <div className="text-3xl mb-3">👥</div>
            <div className="font-bold text-[#175CD3] text-xl mb-2">Your Team Drives It</div>
            <div className="text-sm text-[#001A41]/70">Ensuring buy-in, learning, and lasting change</div>
          </div>
          
          <div className="text-center p-6 bg-[#F5FAFF] rounded-xl border border-[#BFD4F2]/30">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-bold text-[#175CD3] text-xl mb-2">Proven Success</div>
            <div className="text-sm text-[#001A41]/70">300+ successful implementations</div>
          </div>
        </motion.div>

        {/* Common concerns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8">
            Common Questions Answered
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {concerns.map((concern) => (
              <div 
                key={concern.question}
                className="bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg"
              >
                <h4 className="font-semibold text-[#003687] mb-3">{concern.question}</h4>
                <p className="text-[#001A41]/80 text-sm leading-relaxed">{concern.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#175CD3]/5 to-[#003687]/5 p-8 rounded-2xl border border-[#175CD3]/20"
        >
          <h3 className="text-2xl font-bold text-[#003687] mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-[#001A41]/80 mb-6 max-w-2xl mx-auto">
            The process is simple, the results are guaranteed, and your team will thank you for finally giving them a clear path to growth.
          </p>
          <CTAButton 
            location="process_section"
            size="lg"
            className="px-8 py-3"
          >
            Start Your 90-Day Transformation
          </CTAButton>
        </motion.div>
      </div>
    </SectionContainer>
  );
}