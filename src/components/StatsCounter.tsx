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
      <div className="text-4xl md:text-5xl font-bold text-text-main mb-2">
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
        // 1. Fetch Events Count
        const { count: eventsCount, error: eventsError } = await supabase
          .from('events')
          .select('*', { count: 'exact', head: true });

        // 2. Fetch Registrations Count (Participants)
        const { count: participantsCount, error: participantsError } = await supabase
          .from('registrations')
          .select('*', { count: 'exact', head: true });

        // 3. Fetch Unique Countries from Registrations
        // Note: For large datasets, use a database function or distinct select. 
        // For now, client-side distinct is okay for typical website scale.
        const { data: countriesData, error: countriesError } = await supabase
          .from('registrations')
          .select('country');

        if (eventsError) console.error("Error fetching events count:", eventsError);
        if (participantsError) console.error("Error fetching participants count:", participantsError);
        if (countriesError) console.error("Error fetching countries:", countriesError);

        const uniqueCountries = new Set(countriesData?.map(r => r.country).filter(Boolean)).size;

        setStats({
          events: eventsCount || 0,
          participants: participantsCount || 0,
          countries: uniqueCountries || 0
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
