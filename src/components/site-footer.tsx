import {SoarLogo} from "@/components/soar-logo";
import Link from "next/link";
import {Linkedin, Twitter, Youtube, Mail, Phone, MapPin} from "lucide-react";

export default function SiteFooter() {
  return (
    <>
      <footer className="bg-[#003687] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <SoarLogo className="text-white mb-4" width={120} height={21} />
                <p className="text-white/80 text-sm leading-relaxed">
                  Accelerating middle-market business growth through proven methodologies and team-driven insights.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="size-4" />
                  <span>growth@soargrowth.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="size-4" />
                  <span>(555) 123-SOAR</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="size-4" />
                  <span>123 Growth Lane, Business City, BC 12345</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-white/80 hover:text-white transition">Our Product</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Solutions</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">SOARcard Assessment</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">SOARgrowth Modules</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Methodology</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-white/80 hover:text-white transition">SOAR to Business Success Book</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Opportunities & Necessities</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Pricing</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get Started</h3>
              <p className="text-white/80 text-sm mb-6">
                Join 300+ businesses who chose growth over status quo.
              </p>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block bg-[#175CD3] hover:bg-[#175CD3]/90 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#"
                  className="block border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition"
                >
                  Book a FREE Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © 2024 SOARgrowth. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-white/60 hover:text-white transition">
                <Linkedin className="size-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition">
                <Youtube className="size-5" />
              </Link>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="text-white/60 hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="text-white/60 hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
