import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 relative overflow-hidden" id="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="bg-white inline-block p-2 rounded-xl mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Cle'O House Logo" 
                width={160} 
                height={60} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              Tự hào là đơn vị tiên phong ứng dụng kỹ thuật lấy nhân mụn bằng tăm bông vô khuẩn. Mang đến phác đồ trị mụn cá nhân hóa an toàn, hiệu quả.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>183 Hoa Lan, Phường Cầu Kiệu, Quận Phú Nhuận, TP.HCM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>Hotline / Zalo: 0888.722.723</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Giờ mở cửa: 10:00 - 20:00 (Thứ 2 - Chủ Nhật)</span>
              </div>
            </div>
          </div>

          {/* Map (Embed placeholder or iframe) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden h-64 md:h-full min-h-[300px] border border-slate-700 relative bg-slate-800">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.164344569429!2d106.68727407573595!3d10.798687789351717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce0a9f5dbd%3A0x6b14298197771de9!2s183%20Hoa%20Lan%2C%20Ph%C6%B0%E1%BB%9Dng%202%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ Cle'O House"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500 text-center md:text-left">
            <p className="font-semibold text-slate-400 mb-1">Hộ kinh doanh Cle'O House</p>
            <p>© {new Date().getFullYear()} Cle'O House Spa. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              FB
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              IG
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
