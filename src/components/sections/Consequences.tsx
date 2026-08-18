import { AlertTriangle } from "lucide-react";

export function Consequences() {
  const consequences = [
    { title: "Sẹo rỗ chằng chịt", icon: "🌋" },
    { title: "Thâm mụn kéo dài", icon: "🌑" },
    { title: "Viêm nhiễm lan rộng", icon: "🦠" },
    { title: "Da mỏng yếu, nhạy cảm", icon: "🥀" },
    { title: "Lão hóa sớm", icon: "🍂" },
    { title: "Tự ti trong giao tiếp", icon: "😔" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4" /> CẢNH BÁO
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            6 Hệ Lụy Nghiêm Trọng <br />
            <span className="text-red-500">Khi Tự Điều Trị Sai Cách</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
          {consequences.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4 bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
