"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/ui/section-container";
import { CTAButton } from "@/components/ui/cta-button";
import Image from "next/image";

const founders = [
  {
    name: "Larry Goddard",
    title: "CEO & Business Strategist",
    headline: "35+ Years Driving Exponential Growth for Middle-Market Companies",
    image: "/larry.png",
    experience: [
      "Expert Consultant and CEO with real-world P&L responsibility",
      "300+ businesses helped across diverse industries", 
      "Proven track record of turning around struggling companies",
      "Specialist in rapid revenue and profitability improvement"
    ],
    story: "After watching too many businesses struggle with expensive consultants who deliver reports instead of results, I developed the SOAR methodology. Every technique we use has been tested in real businesses with real money on the line.",
    achievements: [
      "Transformed 50+ manufacturing companies",
      "Average client revenue increase: 37% in first year",
      "Specializes in companies stuck at revenue plateaus",
      "Featured speaker at industry conferences"
    ],
    quote: "Traditional consulting fails because it's done TO businesses, not WITH them. SOAR works because your team owns the insights and drives the implementation."
  },
  {
    name: "Laurence Franklin",
    title: "Growth & International Strategy Expert", 
    headline: "35+ Years Shaping Global Brands and Driving International Growth",
    image: "/laurence.png",
    experience: [
      "35+ years leadership experience",
      "Scaled Tumi from $4M to $450M", 
      "Doubled Coach's sales to $500M",
      "Shaped internationally renowned brands"
    ],
    story: "Having scaled billion-dollar brands internationally, I understand what separates companies that grow from those that stagnate. It's not just strategy – it's execution, culture, and having the right systems in place.",
    achievements: [
      "Led global expansion for premium brands",
      "Created outstanding value for stakeholders",
      "Expert in premium market positioning", 
      "International business development specialist"
    ],
    quote: "Growth isn't about working harder – it's about having the right framework to identify and execute on the opportunities that matter most."
  },
  {
    name: "Jennifer Goddard",
    title: "Sales & Marketing Strategist",
    headline: "Expert in Transforming Sales Teams and Leading Consumer Brands to 10x Growth",
    image: "/jennifer.png",
    experience: [
      "Transformed sales teams across multiple industries",
      "Led consumer brands to 10x growth",
      "Expert in sales strategy and team development",
      "Co-author of SOAR to Business Success"
    ],
    story: "I've seen firsthand how the right sales strategies can transform entire organizations. My focus is on creating sustainable, scalable sales systems that align with company culture and drive real results.",
    achievements: [
      "Led multiple brands to 10x growth",
      "Expert in sales team transformation",
      "Consumer brand growth specialist",
      "Co-authored proven business growth book"
    ],
    quote: "Sustainable growth happens when your sales strategy is perfectly aligned with your organizational culture and customer needs."
  }
];

const combinedStats = [
  { number: "$5B+", label: "Value Created" },
  { number: "300+", label: "Businesses Helped" },
  { number: "100+", label: "Years Combined Experience" },
  { number: "95%", label: "Client Satisfaction Rate" }
];

const differentiators = [
  {
    icon: "🎯",
    title: "Real Business Experience",
    description: "Not just consultants – actual CEOs and executives with P&L responsibility"
  },
  {
    icon: "💪",
    title: "Skin in the Game", 
    description: "Results-based approach with guarantees - we succeed when you succeed"
  },
  {
    icon: "🏢",
    title: "Middle-Market Focus",
    description: "Specialists in $10M-$1B revenue companies - we speak your language"
  },
  {
    icon: "⚡",
    title: "Proven Methodology",
    description: "SOAR has been refined through hundreds of successful implementations"
  },
  {
    icon: "🤝", 
    title: "Personal Involvement",
    description: "Larry and Laurence personally work with every client - no junior associates"
  }
];

export function FoundersSection() {
  return (
    <SectionContainer sectionName="founders" id="founders" className="bg-gradient-to-b from-[#F5FAFF] to-white">
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
            Meet the Experts Who&apos;ve Driven 
            <br />
            <span className="text-[#175CD3]">$5B+ in Growth for 300+ Businesses</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-[#001A41]/80 leading-relaxed"
          >
            Unlike big consulting firms where you get junior associates, you&apos;ll work directly with the founders who created the SOAR methodology.
          </motion.p>
        </div>

        {/* Combined authority stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {combinedStats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#175CD3] mb-2">{stat.number}</div>
              <div className="text-sm text-[#001A41]/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Founder profiles */}
        <div className="space-y-16 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              {/* Founder image */}
              <div className="flex-shrink-0 w-full lg:w-1/3 max-w-sm">
                <div className="relative">
                  {/* Founder photo */}
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-[#175CD3] to-[#003687]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={400}
                      height={533}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  
                  {/* Credentials overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-sm font-semibold text-[#003687]">{founder.title}</div>
                    <div className="text-xs text-[#001A41]/70 mt-1">35+ Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Founder content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#003687] mb-2">{founder.name}</h3>
                <h4 className="text-lg md:text-xl text-[#175CD3] font-semibold mb-4">{founder.headline}</h4>
                
                {/* Personal story */}
                <div className="bg-[#175CD3]/5 p-6 rounded-xl border border-[#175CD3]/20 mb-6">
                  <p className="text-[#001A41]/80 leading-relaxed italic">&ldquo;{founder.story}&rdquo;</p>
                </div>

                {/* Experience points */}
                <div className="mb-6">
                  <h5 className="font-semibold text-[#003687] mb-3">Experience & Expertise:</h5>
                  <ul className="space-y-2">
                    {founder.experience.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#001A41]/80">
                        <div className="size-2 bg-[#175CD3] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key achievements */}
                <div className="mb-6">
                  <h5 className="font-semibold text-[#003687] mb-3">Key Achievements:</h5>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {founder.achievements.map((achievement, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg border border-[#BFD4F2]/30 text-xs">
                        <div className="text-[#175CD3]">✓</div>
                        <span className="text-[#001A41]/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#003687]/10 to-[#175CD3]/10 p-6 rounded-xl border border-[#175CD3]/20">
                  <p className="text-[#003687] font-medium leading-relaxed">&ldquo;{founder.quote}&rdquo;</p>
                  <p className="text-sm text-[#001A41]/70 mt-2">- {founder.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What makes them different */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-[#003687] mb-8">
            What Makes Them Different
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div 
                key={item.title}
                className="bg-white p-6 rounded-xl border border-[#BFD4F2]/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-[#003687] mb-3">{item.title}</h4>
                <p className="text-sm text-[#001A41]/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust building */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#175CD3]/5 to-[#003687]/5 p-8 rounded-2xl border border-[#175CD3]/20 mb-8"
        >
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-[#003687] mb-4">Direct Access to the Founders</h3>
          <p className="text-[#001A41]/80 leading-relaxed max-w-2xl mx-auto mb-4">
            Unlike big consulting firms where you get junior associates, Larry and Laurence personally lead every engagement. You&apos;re not just buying a methodology – you&apos;re getting direct access to the experts who created it.
          </p>
          <p className="text-sm font-semibold text-[#175CD3]">
            &ldquo;We eat our own cooking&rdquo; - Every technique we recommend has been tested in our own businesses and with our clients.
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
          <h3 className="text-2xl font-bold text-[#003687] mb-4">
            Ready to Work with Proven Experts?
          </h3>
          <p className="text-lg text-[#001A41]/80 mb-6 max-w-2xl mx-auto">
            When you book your consultation, you&apos;ll work directly with Larry and Laurence – not junior consultants or account managers.
          </p>
          <CTAButton 
            location="founders_section"
            size="lg"
            className="px-8 py-3"
          >
            Meet the Founders - Book Your Consultation
          </CTAButton>
        </motion.div>
      </div>
    </SectionContainer>
  );
}