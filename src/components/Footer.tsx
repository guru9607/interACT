'use client';

import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, XIcon, FacebookIcon } from "./SocialIcons";
import { Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0F2624] text-slate-300 border-t border-[#1A3835] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#1A3835]">
          {/* Col 1: Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="interACT Logo" 
                  width={36} 
                  height={36} 
                  className="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-serif">
                interACT
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md font-normal">
              An international youth initiative dedicated to personal awareness, inner resilience, and transformative silence.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#E9C46A] font-semibold pt-1">
              <Globe size={14} className="shrink-0" />
              <span>Aligned with UN 2030 Agenda (SDG 3 · SDG 16 · SDG 17)</span>
            </div>
          </div>

          {/* Col 2: Public Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-sans">
              Initiative
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#E9C46A] transition-colors">
                  UN SDG Alignment & Evidence
                </Link>
              </li>
              <li>
                <Link href="/modules" className="text-slate-300 hover:text-[#E9C46A] transition-colors">
                  ACT Curriculum Framework
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-slate-300 hover:text-[#E9C46A] transition-colors">
                  Upcoming Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-[#E9C46A] transition-colors">
                  Secretariat & Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Inquiries & Secretariat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-sans">
              Secretariat & Inquiries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="mailto:support@theinteract.org?subject=Inquiry:%20Host%20an%20interACT%20Workshop" 
                  className="text-slate-300 hover:text-[#E9C46A] transition-colors"
                >
                  Campus Workshop Inquiries
                </a>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#E9C46A] transition-colors">
                  UN 2030 Agenda Alignment
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@theinteract.org" 
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-[#E9C46A] transition-colors pt-2"
                >
                  <Mail size={16} />
                  <span>support@theinteract.org</span>
                </a>
              </li>
            </ul>

            {/* Social Channels */}
            <div className="flex space-x-4 pt-6">
              <a 
                href="https://www.instagram.com/theinteract/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#E9C46A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#E9C46A] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#E9C46A] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} interACT Global Youth Initiative. All rights reserved.
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            Non-profit educational initiative for personal awareness and transformative silence.
          </p>
        </div>
      </div>
    </footer>
  );
}
