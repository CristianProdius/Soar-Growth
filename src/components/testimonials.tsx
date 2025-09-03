"use client";

import Avatar1 from "@/assets/avatars/avatar-1.png";
import Avatar2 from "@/assets/avatars/avatar-2.png";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";

const TESTIMONIALS = [
  {
    text: "The SOAR approach helps us focus our priorities, create team alignment, and identify game-changing opportunities",
    name: "Shae H",
    position: "CEO",
    company: "Middle-Market Business",
    avatarImg: Avatar1,
    result: "Game-Changing Opportunities"
  },
  {
    text: "SOAR drove us to take an in-depth look at our organization",
    name: "Bill M", 
    position: "CEO",
    company: "Middle-Market Business",
    avatarImg: Avatar2,
    result: "Organizational Insight"
  },
] satisfies Array<{
  text: string;
  name: string;
  position: string;
  company: string;
  avatarImg: StaticImageData;
  result: string;
}>;

const STATS = [
  { number: "300+", label: "Businesses Helped", icon: "🏢" },
  { number: "$5.2B+", label: "Value Created", icon: "💰" },
  { number: "37%", label: "Average Revenue Increase", icon: "📈" },
  { number: "95%", label: "Client Satisfaction", icon: "⭐" },
  { number: "90 Days", label: "Average Time to Results", icon: "⚡" },
  { number: "28%", label: "Average Margin Improvement", icon: "📊" }
];

const INDUSTRIES = [
  "Manufacturing & Industrial",
  "Technology & Software", 
  "Healthcare & Life Sciences",
  "Financial Services",
  "Professional Services",
  "Distribution & Logistics"
];

export function Testimonials() {
  return (
    <SectionContainer sectionName="social_proof" id="social_proof" className="bg-gradient-to-b from-white to-[#F5FAFF]">
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
            The Numbers Don&apos;t Lie: Real Results for Real Businesses
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#001A41]/80 leading-relaxed"
          >
            Don&apos;t take our word for it. Here&apos;s what middle-market business leaders are saying about their SOAR experience and results.
          </motion.p>
        </div>

        {/* Statistics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                transition: { duration: 0.2 }
              }}
              className="text-center bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg cursor-pointer"
            >
              <motion.div 
                className="text-3xl mb-2"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-[#175CD3] mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: 0.2 + (0.1 * index),
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-[#001A41]/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8"
          >
            What CEOs Are Saying
          </motion.h3>

          <div className="relative overflow-hidden">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 w-fit"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 20, rotateY: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white p-8 rounded-xl border border-[#BFD4F2]/30 shadow-lg max-w-md flex-none cursor-pointer"
                  style={{ perspective: 1000 }}
                >
                  {/* Result badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-[#175CD3]/10 text-[#003687] px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="size-2 bg-[#175CD3] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {testimonial.result}
                  </motion.div>

                  <p className="text-lg leading-relaxed text-[#001A41] mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={testimonial.avatarImg}
                          alt={testimonial.name}
                          className="size-12 rounded-full"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-[#175CD3]/20 rounded-full mix-blend-multiply"
                          animate={{ opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </div>
                    <div>
                      <motion.p 
                        className="font-semibold text-[#003687]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {testimonial.name}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-[#001A41]/70"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {testimonial.position}
                      </motion.p>
                      <motion.p 
                        className="text-xs text-[#175CD3] font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {testimonial.company}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Industry validation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-xl font-semibold text-[#003687] mb-6">
            Trusted Across Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((industry) => (
              <span 
                key={industry}
                className="bg-[#175CD3]/10 text-[#003687] px-4 py-2 rounded-full text-sm font-medium border border-[#175CD3]/20"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Guarantee reinforcement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#175CD3]/10 to-[#003687]/10 p-8 rounded-2xl border border-[#175CD3]/20 text-center mb-8"
        >
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold text-[#003687] mb-3">Results Guaranteed</h3>
          <p className="text-[#001A41]/80 mb-4">
            98% of our clients see measurable improvements within 90 days. If we don&apos;t identify at least $100K in growth opportunities in your first session, it&apos;s completely free.
          </p>
          <p className="text-sm text-[#003687] font-semibold">
            Join 300+ successful businesses who chose growth over status quo.
          </p>
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
            Ready to join these successful businesses?
          </p>
          <CTAButton 
            location="social_proof"
            size="lg"
            className="px-8 py-3"
          >
            See How We Can Help Your Business
          </CTAButton>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
