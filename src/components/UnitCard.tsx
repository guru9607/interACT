import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UnitCardProps {
  title: string;
  description: string;
  image: string; // URL or path to image
  href: string;
  number: number;
}

export default function UnitCard({ title, description, image, href, number }: UnitCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-teal-50 flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-teal-100">
          {/* Placeholder for actual image - using a colored gradient for now if image fails */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})`, backgroundColor: '#ccfbf1' }}
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            Unit {number}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm mb-6 flex-1">
            {description}
          </p>
          
          <div className="flex items-center text-primary font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
            Explore Module <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
