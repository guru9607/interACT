"use client";

import { X, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ITeamMember } from "@/types/team";

// Fallback for missing images
const getInitialsAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0B2545&color=fff&size=400`;

interface TeamModalProps {
  member: ITeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!member && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-200 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`bg-white w-full max-w-2xl rounded-lg border border-slate-200 shadow-2xl relative z-10 overflow-hidden transform transition-all duration-200 ${
          isOpen ? "scale-100 translate-y-0" : "scale-98 translate-y-2"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-600 hover:text-slate-900 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Portrait Photo */}
          <div className="w-full md:w-2/5 aspect-4/5 md:aspect-auto relative bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200 min-h-[260px]">
            {member && (
              <Image
                src={member.image_url || getInitialsAvatar(member.name)}
                alt={member.name}
                fill
                className="object-cover object-[center_20%]"
              />
            )}
          </div>

          {/* Institutional Details */}
          <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            {member && (
              <>
                <div>
                  {member.category && (
                    <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-[#0058A3] border border-blue-200 text-[10px] font-bold uppercase tracking-wider rounded mb-2.5">
                      {member.category}
                    </span>
                  )}
                  <h2 className="text-2xl font-serif font-bold text-[#0B2545] leading-snug">
                    {member.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#0072CE] uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                </div>

                {member.country && (
                  <div className="flex items-center text-xs text-slate-500 font-medium">
                    <MapPin size={13} className="mr-1 text-slate-400" />
                    <span>{member.country}</span>
                  </div>
                )}

                <div className="text-xs text-slate-600 leading-relaxed max-h-48 overflow-y-auto pr-1">
                  <p>
                    {member.bio ||
                      "Dedicated member of the interACT leadership structure advancing youth cognitive resilience and peaceful cooperation under the UN 2030 Agenda."}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded transition-colors"
                  >
                    Close Dossier
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
