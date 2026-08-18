"use client";

import { useEffect, useState, useRef } from "react";
import { Users, CalendarHeart, Award, Star } from "lucide-react";

// Simple count up hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return { count, ref };
}

function StatItem({ icon: Icon, end, suffix = "", label }: { icon: any, end: number, suffix?: string, label: string }) {
  const { count, ref } = useCountUp(end);
  
  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-black text-slate-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatItem icon={CalendarHeart} end={7} suffix="+" label="Năm kinh nghiệm" />
          <StatItem icon={Users} end={5000} suffix="+" label="Khách hàng điều trị" />
          <StatItem icon={Star} end={98} suffix="%" label="Tỷ lệ hài lòng" />
          <StatItem icon={Award} end={100} suffix="%" label="Tăm bông vô khuẩn" />
        </div>
      </div>
    </section>
  );
}
