import Image from "next/image";
import { Sparkles, Zap, Droplets, Droplet } from "lucide-react";

export function Facilities() {
  const technologies = [
    { icon: <Zap className="w-6 h-6" />, name: "Elight Therapy" },
    { icon: <Sparkles className="w-6 h-6" />, name: "Cle'O Pure T-zone" },
    { icon: <Droplets className="w-6 h-6" />, name: "Detox CO2 & Glow" },
    { icon: <Droplet className="w-6 h-6" />, name: "Peel đa hoạt chất" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            6
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Không Gian Trị Liệu & <br />
            <span className="text-primary">Công Nghệ Hiện Đại</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Facilities Image Grid (Bento style) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/facility-1.jpg" 
                alt="Không gian sảnh chờ Cle'O House" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/facility-2.jpg" 
                alt="Phòng trị liệu" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image 
                src="/images/facility-3.jpg" 
                alt="Máy móc công nghệ cao" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Đa dạng công nghệ hỗ trợ</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Bên cạnh kỹ thuật lấy nhân mụn tăm bông cốt lõi, Cle'O House trang bị đầy đủ máy móc công nghệ cao giúp đẩy nhanh quá trình phục hồi, tiêu viêm và mờ thâm sẹo.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3 hover:border-primary transition-colors">
                  <div className="text-primary bg-primary/10 p-2 rounded-lg shrink-0">
                    {tech.icon}
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
