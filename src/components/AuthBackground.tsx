'use client';

export default function AuthBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-[#F8F9FA] flex flex-col justify-between">
      {/* Top Tri-Color SDG Hairline */}
      <div className="h-1 w-full flex" aria-hidden="true">
        <span className="flex-1 bg-[#4C9F38]" />
        <span className="flex-1 bg-[#00AED9]" />
        <span className="flex-1 bg-[#19486A]" />
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Institutional Security Notice */}
      <div className="py-4 text-center text-slate-400 text-[11px] border-t border-slate-200 bg-white">
        <span>interACT Operational &amp; Secretariat Portal · Authorized Access Only</span>
      </div>
    </div>
  );
}
