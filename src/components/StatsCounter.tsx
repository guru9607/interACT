"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Globe, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabase";

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
    if (!isVisible || targetValue === 0) return;

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
      <div className="text-4xl md:text-5xl font-semibold text-text-main mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-muted font-medium">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [stats, setStats] = useState({
    participants: 0,
    countries: 0,
    events: 0
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const { data: statsRow, error: statsError } = await supabase.rpc(
          "get_public_dashboard_stats"
        );

        if (statsError) console.error("Error fetching public stats:", statsError);

        const row = Array.isArray(statsRow) ? statsRow[0] : statsRow;

        setStats({
          events: row ? Number(row.events_count) || 0 : 0,
          participants: row ? Number(row.participants_count) || 0 : 0,
          countries: row ? Number(row.countries_count) || 0 : 0,
        });

      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <StatItem
            icon={<Users size={32} />}
            label="Total Participants"
            targetValue={stats.participants}
          />
          <StatItem
            icon={<Globe size={32} />}
            label="Countries Reached"
            targetValue={stats.countries}
          />
          <StatItem
            icon={<Calendar size={32} />}
            label="Planned Events"
            targetValue={stats.events}
          />
        </div>
      </div>
    </section>
  );
}
