"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Về Cle'O House", href: "#about" },
    { name: "Giải pháp", href: "#solutions" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Cam kết", href: "#commitments" },
    { name: "Đội ngũ", href: "#team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Banner Advertisement */}
      <div className="bg-primary text-white w-full py-2">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-2 text-xs md:text-sm">
          {/* Left: Hotline (Hidden on small mobile) */}
          <div className="hidden lg:flex items-center gap-2 font-medium">
            <Phone className="w-4 h-4" />
            <span>Hotline: 0888 722 723</span>
          </div>

          {/* Center: Content */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
            <div className="flex items-center gap-2">
              <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap">
                🎁 ƯU ĐÃI
              </span>
              <span className="font-bold">Trị Mụn Chuyên Sâu: Tặng phác đồ & giảm 50%</span>
            </div>
            <span className="hidden md:inline text-white/80">|</span>
            <span className="hidden sm:inline">Chỉ 50 suất đầu tiên trong tháng</span>
          </div>

          {/* Right: CTA Button */}
          <div className="shrink-0">
            <Link 
              href="https://zalo.me/0888722723" 
              target="_blank"
              className="bg-white text-primary hover:bg-slate-100 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full font-bold transition-colors inline-flex items-center gap-1"
            >
              Nhận ưu đãi <span className="hidden sm:inline">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Cle'O House Logo" 
            width={160} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link href="tel:0888722723">
              <Phone className="w-4 h-4 mr-2" />
              0888.722.723
            </Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="https://zalo.me/0888722723" target="_blank">
              Đặt Lịch Ngay
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
            <Button asChild variant="outline" className="w-full justify-center">
              <Link href="tel:0888722723">
                <Phone className="w-4 h-4 mr-2" />
                Gọi: 0888.722.723
              </Link>
            </Button>
            <Button asChild className="w-full justify-center bg-primary hover:bg-primary/90 text-white">
              <Link href="https://zalo.me/0888722723" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                Đặt Lịch Zalo Ngay
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
