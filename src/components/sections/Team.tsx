import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Team() {
  const team = [
    {
      name: "Mỹ Sinh (SySy)",
      role: "Founder - Chuyên Gia Da Liễu",
      degrees: ["Bằng Dược sĩ", "Bằng Y sĩ", "Kinh nghiệm 10+ năm"],
      image: "https://images.unsplash.com/photo-1594824436998-0386cb696116?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Thanh Trúc",
      role: "Trưởng Kỹ Thuật Viên",
      degrees: ["Chứng chỉ hành nghề Spa", "Kinh nghiệm 5+ năm"],
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ngọc Mai",
      role: "Kỹ Thuật Viên",
      degrees: ["Đào tạo tăm bông vô khuẩn", "Kinh nghiệm 3+ năm"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            4
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Đội Ngũ Chuyên Viên <br />
            <span className="text-primary">Giàu Kinh Nghiệm</span>
          </h2>
          <p className="text-lg text-slate-600">
            100% chuyên viên được đào tạo bài bản về cấu trúc da và kỹ thuật tăm bông vô khuẩn độc quyền.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10 mix-blend-multiply"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.degrees.map((degree, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                      {degree}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
