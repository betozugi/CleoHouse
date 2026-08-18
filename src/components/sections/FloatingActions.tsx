"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Link 
          href="tel:0888722723"
          className="flex-1 flex flex-col items-center justify-center py-2 bg-slate-100 text-slate-800 rounded-xl font-medium text-sm"
        >
          <Phone className="w-5 h-5 mb-1 text-slate-600" />
          Gọi Ngay
        </Link>
        <Link 
          href="https://zalo.me/0888722723"
          target="_blank"
          className="flex-[2] flex flex-col items-center justify-center py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-md"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          Chat Zalo Đặt Lịch
        </Link>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-50">
        <div className="bg-white p-3 rounded-xl shadow-lg text-sm font-semibold border border-slate-100 flex items-center gap-3 animate-bounce">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          Chuyên viên đang online!
        </div>
        
        <Link 
          href="https://zalo.me/0888722723" 
          target="_blank"
          className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 ml-auto"
        >
          <MessageCircle className="w-8 h-8" />
        </Link>
        
        <Link 
          href="tel:0888722723" 
          className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-110 ml-auto"
        >
          <Phone className="w-8 h-8" />
        </Link>
      </div>
    </>
  );
}
