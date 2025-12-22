import { X, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Fallback for missing images
const getInitialsAvatar = (name: string) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2A9D8F&color=fff&size=400`;

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  image_url: string | null;
  country: string | null;
  category: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const [isVisible, setIsVisible] = useState(false);

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
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`bg-white w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden transform transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full text-text-muted hover:text-red-500 transition-colors z-20 backdrop-blur-sm shadow-sm"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto relative bg-gray-100">
             {member && (
               <Image
                 src={member.image_url || getInitialsAvatar(member.name)}
                 alt={member.name}
                 fill
                 className="object-cover"
               />
             )}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
            {member && (
              <>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {member.category}
                  </span>
                  <h2 className="text-3xl font-bold text-text-main mb-1">{member.name}</h2>
                  <p className="text-lg text-primary font-medium">{member.role}</p>
                </div>

                {member.country && (
                  <div className="flex items-center text-text-muted text-sm font-medium mb-6">
                    <MapPin size={16} className="mr-1.5 text-teal-400" />
                    {member.country}
                  </div>
                )}

                <div className="prose prose-sm text-text-muted leading-relaxed">
                  <p>{member.bio || "Dedicated member of the interACT team working towards youth empowerment and global change."}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    onClick={onClose}
                    className="text-sm font-bold text-text-main hover:text-primary transition-colors"
                  >
                    Close Details
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
