import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      title: "Lấy Nhân Mụn Tăm Bông Vô Khuẩn",
      desc: "Kỹ thuật độc quyền hạn chế tối đa tổn thương, không dùng lực tì đè mạnh như nặn tay, giảm đau, ngừa thâm sẹo hiệu quả.",
      points: [
        "Sử dụng tăm bông y tế dùng 1 lần",
        "Rút nhân mụn tận gốc, không sót cồi",
        "Giảm 80% nguy cơ lây lan vi khuẩn",
      ],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Phác Đồ Chăm Sóc Cá Nhân Hóa",
      desc: "Không áp dụng 1 công thức cho mọi loại da. Mỗi khách hàng được chuyên gia đánh giá và thiết kế liệu trình chuyên biệt.",
      points: [
        "Kết hợp Peel da, Điện di, Meso tùy tình trạng",
        "Theo dõi sát sao tiến triển sau mỗi buổi",
        "Sản phẩm chuẩn Y khoa, an toàn cho da yếu",
      ],
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            1
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Giải Pháp Đột Phá <br />
            <span className="text-primary">Chỉ Có Tại Cle'O House</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <ul className="space-y-3 mt-auto">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-slate-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
