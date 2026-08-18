import { ShieldCheck, HeartHandshake, FileSearch } from "lucide-react";

export function Commitments() {
  const commitments = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Không ép mua thẻ/gói dài hạn",
      desc: "Khách hàng hoàn toàn tự nguyện đăng ký dịch vụ theo từng buổi. Chúng tôi không bao giờ chèo kéo, ép buộc mua gói lớn.",
    },
    {
      icon: <FileSearch className="w-10 h-10 text-accent" />,
      title: "Tư vấn trung thực 100%",
      desc: "Khám đúng bệnh, tư vấn đúng giải pháp. Không vẽ thêm dịch vụ không cần thiết để moi tiền khách hàng.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-accent" />,
      title: "Đồng hành đến khi sạch mụn",
      desc: "Chuyên viên theo sát tình trạng da sau mỗi buổi, sẵn sàng hỗ trợ giải đáp thắc mắc 24/7 qua Zalo.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="commitments">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            3
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            3 Cam Kết Vàng <br />
            <span className="text-primary">Làm Nên Uy Tín Cle'O House</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary/30 transition-colors flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
