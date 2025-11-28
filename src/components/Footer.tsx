import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-teal-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              interACT
            </Link>
            <p className="mt-2 text-text-muted text-sm max-w-xs">
              Empowering youth to rediscover their inner strength and lead with clarity.
              A global initiative.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} />
            </a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
            <a href="mailto:contact@interact.org" className="text-text-muted hover:text-primary transition-colors">
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
