"use client"

import Link from "next/link";
import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {ActionButton} from "@/components/action-button";
import {SoarLogo} from "@/components/soar-logo";
import {useState} from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="py-3 sm:py-4 border-b backdrop-blur-sm bg-white/95 sticky top-0 z-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <SoarLogo 
              className="text-[#003687] hover:text-[#175CD3] transition-colors duration-200" 
              width={100} 
              height={18} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="#solution" 
              className="text-sm font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SOAR Methodology
            </Link>
            <Link 
              href="#social_proof" 
              className="text-sm font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('social_proof')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Results
            </Link>
            <Link 
              href="#process" 
              className="text-sm font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Process
            </Link>
            <Link 
              href="#founders" 
              className="text-sm font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop CTA Button */}
            <div className="hidden sm:block">
              <ActionButton 
                label="Start Free Trial" 
                onClick={() => {
                  document.getElementById('final_cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>

            {/* Mobile CTA Button - smaller on very small screens */}
            <div className="sm:hidden">
              <button 
                onClick={() => {
                  document.getElementById('final_cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#175CD3] hover:bg-[#003687] text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200"
              >
                Start Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger className="lg:hidden">
                <MenuIcon className="size-6 sm:size-7 text-[#003687] hover:text-[#175CD3] transition-colors duration-200"/>
              </DrawerTrigger>
              <DrawerContent className="p-6 sm:p-8">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-center mt-4 mb-8">
                  <SoarLogo className="text-[#003687]" width={120} height={21} />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6 mb-8">
                  <Link 
                    href="#solution" 
                    className="flex items-center gap-4 text-lg font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 p-2 rounded-lg hover:bg-[#F5FAFF]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    <Feather className="size-5 sm:size-6"/>
                    SOAR Methodology
                  </Link>
                  <Link 
                    href="#social_proof" 
                    className="flex items-center gap-4 text-lg font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 p-2 rounded-lg hover:bg-[#F5FAFF]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        document.getElementById('social_proof')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    <CodeXml className="size-5 sm:size-6"/>
                    Results
                  </Link>
                  <Link 
                    href="#process" 
                    className="flex items-center gap-4 text-lg font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 p-2 rounded-lg hover:bg-[#F5FAFF]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    <Wallet2 className="size-5 sm:size-6"/>
                    Process
                  </Link>
                  <Link 
                    href="#founders" 
                    className="flex items-center gap-4 text-lg font-medium text-[#001A41]/70 hover:text-[#003687] transition-colors duration-200 p-2 rounded-lg hover:bg-[#F5FAFF]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setTimeout(() => {
                        document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    <Newspaper className="size-5 sm:size-6"/>
                    About
                  </Link>
                </nav>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-[#BFD4F2]/30">
                  <button 
                    className="w-full bg-[#175CD3] hover:bg-[#003687] text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        document.getElementById('final_cta')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    Start Free Trial
                  </button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  )
}
