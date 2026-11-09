import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Heart, ShieldCheck, Users } from "lucide-react";

interface UnitCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  number: number;
}

export default function UnitCard({ title, description, image, href, number }: UnitCardProps) {
  // Map unit number to SDG color and code
  const getUnitMetadata = (num: number) => {
    switch (num) {
      case 1:
        return {
          code: "ACT-101",
          sdg: "UN SDG 3.4",
          sdgLabel: "Good Health & Mental Well-being",
          color: "#4C9F38",
          bgLight: "bg-emerald-50",
          borderLight: "border-emerald-200",
          textColor: "text-[#4C9F38]",
          icon: Heart,
        };
      case 2:
        return {
          code: "ACT-102",
          sdg: "UN SDG 16.1",
          sdgLabel: "Peace & Strong Institutions",
          color: "#00AED9",
          bgLight: "bg-sky-50",
          borderLight: "border-sky-200",
          textColor: "text-[#00689D]",
          icon: ShieldCheck,
        };
      case 3:
      default:
        return {
          code: "ACT-103",
          sdg: "UN SDG 17.17",
          sdgLabel: "Partnerships for the Goals",
          color: "#19486A",
          bgLight: "bg-slate-100",
          borderLight: "border-slate-300",
          textColor: "text-[#19486A]",
          icon: Users,
        };
    }
  };

  const meta = getUnitMetadata(number);
  const IconComponent = meta.icon;

  return (
    <Link href={href} className="group block h-full">
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-[#0072CE] transition-all flex flex-col h-full">
        {/* Top SDG Color Stripe */}
        <div className="h-1.5 w-full" style={{ backgroundColor: meta.color }} aria-hidden="true" />

        {/* Documentary Visual Container */}
        <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-102"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs text-xs font-mono font-bold text-slate-800 shadow-xs">
              {meta.code}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-xs font-bold ${meta.bgLight} ${meta.textColor} border ${meta.borderLight} shadow-xs flex items-center gap-1`}
            >
              <IconComponent size={12} />
              {meta.sdg}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 text-white">
            <span className="text-xs font-mono text-slate-200 block font-bold">Module {number}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
            <span className="text-slate-500 flex items-center gap-1 font-medium">
              <Clock size={14} className="text-slate-400" /> ~45 mins
            </span>
            <span className="font-semibold text-[#0072CE] group-hover:text-[#0058A3] inline-flex items-center gap-1">
              Course Syllabus <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
