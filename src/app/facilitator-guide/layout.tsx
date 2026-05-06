import { Suspense } from "react";
import { FacilitatorGate } from "@/components/facilitator-guide/FacilitatorGate";

export default function FacilitatorGuideRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-text-muted">
          Loading…
        </div>
      }
    >
      <FacilitatorGate>{children}</FacilitatorGate>
    </Suspense>
  );
}
