'use client';

import { motion } from 'framer-motion';

export default function AuthBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-[#fcfbf7] overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Premium ambient decorative glowing blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Teal Aura */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-teal-100/30 to-emerald-100/20 blur-[80px] sm:blur-[120px]"
        />

        {/* Blob 2: Warm Amber/Gold Aura */}
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-[#E9C46A]/12 to-teal-50/10 blur-[90px] sm:blur-[130px]"
        />

        {/* Blob 3: Deep Teal/Sage Core Aura */}
        <motion.div
          animate={{
            scale: [1, 1.2, 0.85, 1],
            opacity: [0.5, 0.7, 0.5, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] left-[25%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] rounded-full bg-teal-500/5 blur-[100px]"
        />

        {/* Subtly Textured Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#2d9a90_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.015]" />
      </div>

      {/* Floating UI Elements */}
      <div className="relative z-10 w-full flex justify-center items-center py-8">
        {children}
      </div>
    </div>
  );
}
