export function Process() {
  const steps = [
    {
      title: "Kiểm tra tình trạng da",
      desc: "Chuyên viên soi da, đánh giá mức độ mụn, nền da yếu hay khỏe, nguyên nhân gây mụn.",
    },
    {
      title: "Thiết kế phác đồ cá nhân",
      desc: "Tư vấn lộ trình rõ ràng, số buổi dự kiến và chi phí minh bạch trước khi bắt đầu.",
    },
    {
      title: "Lấy nhân mụn tăm bông vô khuẩn",
      desc: "Xử lý sạch cồi mụn bằng 2 cây tăm bông y tế dùng 1 lần, hạn chế sưng viêm lây lan.",
    },
    {
      title: "Chăm sóc & Phục hồi chuyên sâu",
      desc: "Ứng dụng máy công nghệ cao (Elight, Điện di, Meso...) tùy phác đồ để làm dịu da ngay lập tức.",
    },
    {
      title: "Hướng dẫn skincare tại nhà",
      desc: "Theo dõi 1:1, hướng dẫn cách làm sạch, bôi thoa tại nhà để ngăn mụn tái phát.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            7
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Quy Trình 5 Bước <br />
            <span className="text-primary">Chuyên Nghiệp & Khép Kín</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-primary/20"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 md:-ml-6 w-12 h-12 bg-white border-4 border-primary text-primary font-bold text-xl rounded-full flex items-center justify-center z-10 shadow-sm">
                  {index + 1}
                </div>
                
                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                    {/* Triangle pointer */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-slate-100 rotate-45 ${
                      index % 2 === 0 
                        ? '-right-2 border-t border-r' 
                        : '-left-2 border-b border-l'
                    }`}></div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
