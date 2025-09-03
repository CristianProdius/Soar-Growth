"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useRelativeMousePosition } from "@/hooks/use-relative-mouse-position";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";
import BackgroundStars from "@/assets/stars.png";
import BackgroundGrid from "@/assets/grid-lines.png";

const momentumPoints = [
  {
    icon: "🎯",
    title: "You Know the Problem",
    description: "Revenue plateaus, misaligned teams, wasted resources - you've experienced the pain of stagnant growth."
  },
  {
    icon: "💡", 
    title: "You've Seen the Solution",
    description: "SOAR methodology with 300+ successful implementations and $5.2B+ in value created for businesses like yours."
  },
  {
    icon: "👥",
    title: "You Trust the Experts", 
    description: "Larry and Laurence bring 70+ years of combined experience with proven track records in your industry."
  },
  {
    icon: "🛡️",
    title: "Risk is Eliminated",
    description: "Triple guarantees ensure you get results or pay nothing - plus a free $10,000 consultation to start."
  }
];

const valueStack = [
  { item: "Free Strategic Growth Consultation", value: "$10,000", highlight: true },
  { item: "Complete SOAR Assessment", value: "$5,000" },
  { item: "90-Day Growth Roadmap", value: "$8,000" },
  { item: "Implementation Support", value: "$15,000" },
  { item: "Ongoing Coaching Access", value: "$12,000" },
  { item: "Results Guarantee Coverage", value: "Priceless" }
];

const objections = [
  {
    thought: "&ldquo;We don&apos;t have time for another consultant&rdquo;",
    reality: "Our process requires 80% less time than traditional consulting - just 20 hours over 90 days."
  },
  {
    thought: "&ldquo;What if it doesn&apos;t work for our industry?&rdquo;",  
    reality: "SOAR works across all industries - we have success stories from manufacturing to healthcare to tech."
  },
  {
    thought: "&ldquo;We&apos;ve tried consultants before&rdquo;",
    reality: "Unlike others, we guarantee results. If we don&apos;t deliver, you don&apos;t pay. Simple."
  },
  {
    thought: "&ldquo;The timing isn&apos;t right&rdquo;", 
    reality: "Every day you wait, your competitors get ahead. The best time to start was yesterday. The second best time is now."
  }
];

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: [`start end`, 'end start'] });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  const totalValue = valueStack
    .filter(item => item.value !== "Priceless")
    .reduce((sum, item) => sum + parseInt(item.value.replace(/\$|,/g, '')), 0);

  return (
    <SectionContainer sectionName="final_cta" id="final_cta" className="bg-gradient-to-b from-[#F5FAFF] to-white">
      <div className="container">
        {/* Momentum building recap */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#003687] mb-6"
          >
            You&apos;ve Seen Everything. Now It&apos;s Decision Time.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#001A41]/80 leading-relaxed"
          >
            Every successful business leader reaches this moment: stay comfortable with the status quo, or take decisive action toward extraordinary growth.
          </motion.p>
        </div>

        {/* Momentum points grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {momentumPoints.map((point) => (
            <div 
              key={point.title}
              className="text-center p-6 bg-white rounded-xl border border-[#BFD4F2]/30 shadow-lg"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="font-bold text-[#003687] mb-2">{point.title}</h3>
              <p className="text-sm text-[#001A41]/70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Urgency reinforcement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#175CD3] to-[#003687] text-white p-8 rounded-2xl mb-16 text-center"
        >
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Cost of Waiting</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              { value: "$50K/Month", desc: "Average opportunity cost of delayed decisions" },
              { value: "6-18 Months", desc: "Time competitors need to copy your advantages" },
              { value: "23%", desc: "Average market share loss from inaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2 * index,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-2xl font-bold text-yellow-400"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgb(250 204 21 / 0.5)",
                      "0 0 15px rgb(250 204 21 / 0.8)",
                      "0 0 5px rgb(250 204 21 / 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-lg max-w-2xl mx-auto">
            While you&apos;re considering, your competitors are growing. While you&apos;re planning, they&apos;re executing. While you&apos;re waiting, they&apos;re winning.
          </p>
        </motion.div>

        {/* Value stack reminder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F5FAFF] p-8 rounded-2xl border border-[#BFD4F2]/30 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003687] mb-4">
              What You Get When You Act Today
            </h3>
            <p className="text-xl text-[#175CD3] font-bold">
              Total Value: ${totalValue.toLocaleString()}+ — Yours Free
            </p>
          </div>

          <div className="space-y-4">
            {valueStack.map((item, index) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                className={`flex justify-between items-center p-4 rounded-xl cursor-pointer ${
                  item.highlight ? 'bg-[#175CD3]/10 border border-[#175CD3]/20' : 'bg-white/60'
                }`}
              >
                <motion.span 
                  className={`font-semibold ${item.highlight ? 'text-[#175CD3]' : 'text-[#003687]'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 + (0.1 * index), duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.highlight && (
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🎁{' '}
                    </motion.span>
                  )}
                  {item.item}
                </motion.span>
                <motion.span 
                  className={`font-bold ${item.highlight ? 'text-[#175CD3]' : 'text-[#003687]'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (0.1 * index), duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {item.value === 'Priceless' ? item.value : `$${parseInt(item.value.replace(/\$|,/g, '')).toLocaleString()}`}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Primary CTA with background animation */}
        <section className="py-12 mb-16" ref={sectionRef}>
          <motion.div
            animate={{ backgroundPositionX: BackgroundStars.width }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="border border-[#BFD4F2]/30 py-16 px-8 rounded-2xl overflow-hidden relative group"
            style={{ backgroundImage: `url(${BackgroundStars.src})`, backgroundPositionY }}
          >
            <div
              className="absolute inset-0 bg-[rgb(23,92,211)] bg-blend-overlay mask-[radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
              style={{ backgroundImage: `url(${BackgroundGrid.src})` }}
            />
            <motion.div
              className="absolute inset-0 bg-[rgb(23,92,211)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
              style={{ backgroundImage: `url(${BackgroundGrid.src})`, maskImage: maskImage }}
              ref={borderedDivRef}
            />
            <div className="relative text-center">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl tracking-tighter font-bold text-white mb-6"
              >
Sign Up for SOARgrowth
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/90 tracking-tight max-w-2xl mx-auto mb-8"
              >
Join the #1 digital platform for middle-market businesses. Fast, affordable growth solutions with team alignment and expert support. Start your free trial today.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <CTAButton 
                  location="final_cta_primary"
                  size="lg"
                  className="px-12 py-4 text-xl font-bold bg-white text-[#175CD3] hover:bg-white/90 border-2 border-white"
                >
🚀 Start Free Trial
                </CTAButton>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80 text-sm">
                  <span className="flex items-center gap-2">
                    <div className="size-3 bg-green-400 rounded-full animate-pulse"></div>
                    Available This Month
                  </span>
                  <span>•</span>
                  <span>No Credit Card Required</span>
                  <span>•</span>
                  <span>Start Growing Today</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Objection handling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8">
            Still Have Doubts? Let&apos;s Address Them.
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objections.map((objection, index) => (
              <motion.div
                key={objection.thought}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg"
              >
                <div className="mb-4 p-4 bg-[#175CD3]/5 rounded-lg border-l-4 border-[#175CD3]">
                  <p className="text-[#003687] font-medium" dangerouslySetInnerHTML={{ __html: objection.thought }} />
                </div>
                <div className="pl-4">
                  <p className="text-[#001A41]/80 leading-relaxed">
                    <strong className="text-[#175CD3]">Reality:</strong> {objection.reality}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social proof close */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#175CD3]/5 to-[#003687]/5 p-8 rounded-2xl border border-[#175CD3]/20 mb-12"
        >
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-[#003687] mb-4">
            Join 300+ Successful Business Leaders Who Made The Right Choice
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-2xl font-bold text-[#175CD3]">Michael Chen</div>
              <div className="text-sm text-[#001A41]/70">TechFlow Manufacturing</div>
              <div className="text-xs font-semibold text-[#003687]">&ldquo;300% revenue growth&rdquo;</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#175CD3]">Sarah Rodriguez</div>
              <div className="text-sm text-[#001A41]/70">Logistics Plus</div>
              <div className="text-xs font-semibold text-[#003687]">&ldquo;$2.3M opportunities found&rdquo;</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#175CD3]">Jennifer Walsh</div>
              <div className="text-sm text-[#001A41]/70">GrowthTech Systems</div>
              <div className="text-xs font-semibold text-[#003687]">&ldquo;Beat all other consultants&rdquo;</div>
            </div>
          </div>
          
          <p className="text-[#001A41]/80 max-w-2xl mx-auto">
            These leaders faced the same decision you&apos;re facing now. They chose growth over status quo. They chose action over analysis paralysis. They chose SOAR over uncertainty.
          </p>
        </motion.div>

        {/* Final CTA options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#003687] mb-6">
            Your Growth Journey Starts With One Click
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <CTAButton 
              location="final_cta_primary_bottom"
              size="lg"
              className="px-8 py-4 text-lg font-bold"
            >
📅 Book a FREE Demo
            </CTAButton>
            
            <div className="text-sm text-[#001A41]/60">
              or
            </div>
            
            <CTAButton 
              location="final_cta_secondary"
              size="default"
              className="px-6 py-3 bg-white text-[#175CD3] border-2 border-[#175CD3] hover:bg-[#175CD3] hover:text-white"
            >
              💬 Ask a Quick Question First
            </CTAButton>
          </div>
          
          <p className="text-sm text-[#001A41]/60 max-w-md mx-auto">
            🔒 100% Confidential • ⚡ Response Within 24 Hours • 💰 No Cost Ever Unless We Deliver Results
          </p>
          
          <div className="mt-8 p-6 bg-[#003687]/5 rounded-xl border border-[#175CD3]/20 max-w-2xl mx-auto">
            <p className="text-[#003687] font-semibold italic">
              &ldquo;The best time to plant a tree was 20 years ago. The second best time is now. Your business growth follows the same principle. Every day you delay is a day your competitors get closer to your customers.&rdquo;
            </p>
            <p className="text-sm text-[#001A41]/70 mt-2">
              — Larry Goddard & Laurence Franklin, Founders
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
