"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About & SDGs", href: "/about" },
  { name: "Curriculum", href: "/modules" },
  { name: "Team", href: "/team" },
  { name: "Join Us", href: "/join" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* 1. Official UN Universal Utility Bar */}
      <div className="bg-[#0B2545] text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#14335A] tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0072CE] shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-200">
              An International Youth Initiative Aligned with the United Nations 2030 Agenda
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2.5 text-slate-300 font-medium text-xs">
            <span className="text-slate-400">United Nations 2030 Agenda:</span>
            <span className="text-emerald-400 font-semibold">SDG 3</span>
            <span className="text-slate-500">·</span>
            <span className="text-sky-400 font-semibold">SDG 16</span>
            <span className="text-slate-500">·</span>
            <span className="text-indigo-300 font-semibold">SDG 17</span>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Identity */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <Image 
                    src="/logo.png" 
                    alt="interACT Logo" 
                    width={40} 
                    height={40} 
                    className="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
                  />
                </div>
                <span className="text-2xl font-bold text-[#0B2545] tracking-tight font-serif">
                  interACT
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-[#0072CE] bg-blue-50/80 border-b-2 border-[#0072CE]"
                      : "text-slate-700 hover:text-[#0072CE] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-slate-200">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#0072CE] hover:bg-[#0058A3] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  Join Initiative
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#0072CE] hover:bg-slate-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
            <div className="px-3 pt-2 pb-3 space-y-1 sm:px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-semibold ${
                    pathname === link.href
                      ? "text-[#0072CE] bg-blue-50"
                      : "text-slate-800 hover:text-[#0072CE] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-2">
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-md bg-[#0072CE] text-white text-sm font-semibold"
                >
                  Join Initiative
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Official UN Tri-color SDG Ribbon (2px hairline) framing the bottom of header */}
      <div className="h-[2px] w-full flex" aria-hidden="true">
        <div className="flex-[3] bg-[#4C9F38]" title="SDG 3: Good Health & Well-being" />
        <div className="flex-[3] bg-[#00AED9]" title="SDG 16: Peace & Justice" />
        <div className="flex-[2] bg-[#19486A]" title="SDG 17: Partnerships for the Goals" />
      </div>
    </header>
  );
}
