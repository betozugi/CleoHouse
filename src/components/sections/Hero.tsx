import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://theme.hstatic.net/200000558119/1000910147/14/h-prl-one_bg.jpg?v=825"
          alt="Banner chính Cle'O House"
          fill
          className="object-cover"
          priority
        />
        
        {/* Mobile Overlay: Full coverage for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] md:hidden"></div>
        
        {/* Desktop Overlay: Fades out from left to right */}
        <div 
          className="hidden md:block absolute inset-0 bg-white/40 backdrop-blur-[3px]"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)', 
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)' 
          }}
        ></div>
        
        {/* Desktop solid gradient to ensure text contrast */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-2/3 pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
            ✨ Spa trị mụn & sẹo hàng đầu
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            Trị Mụn Theo Phác Đồ <br />
            <span className="text-primary">Cá Nhân Hóa</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
            Lấy nhân mụn bằng <strong>tăm bông vô khuẩn</strong>. <br className="hidden md:block" />
            Cải thiện rõ rệt chỉ sau 1 liệu trình chuyên sâu tại Cle'O House.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25">
              <Link href="https://zalo.me/0888722723" target="_blank">
                Đặt Lịch Khám Da Ngay
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 bg-white/50 backdrop-blur-sm hover:bg-white">
              <Link href="#solutions">
                Tìm hiểu giải pháp
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
              Không ép mua gói
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
              Chuyên viên 5+ năm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
