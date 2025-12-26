import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, XIcon, FacebookIcon } from "./SocialIcons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-teal-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="InterACT Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
                />
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">
                interACT
              </span>
            </Link>
            <p className="mt-4 text-text-muted text-sm max-w-xs text-center md:text-left">
              Rediscover your core goodness.
              <br />
              A global initiative.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/theinteract/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              <span className="sr-only">X (formerly Twitter)</span>
              <XIcon className="w-5 h-5 mt-0.5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:support@theinteract.org" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-50 pt-8 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} interACT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
