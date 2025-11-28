"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Calendar } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  targetValue: number;
  suffix?: string;
}

function StatItem({ icon, label, targetValue, suffix = "+" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-text-main mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-muted font-medium">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <StatItem
            icon={<Users size={32} />}
            label="Participants"
            targetValue={1000}
          />
          <StatItem
            icon={<Globe size={32} />}
            label="Countries"
            targetValue={150}
          />
          <StatItem
            icon={<Calendar size={32} />}
            label="Planned Events"
            targetValue={50}
          />
        </div>
      </div>
    </section>
  );
}
