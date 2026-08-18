import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Comparison() {
  const points = [
    {
      home: "Tự mò mẫm cách trị mụn trên mạng",
      cleo: "Phác đồ cá nhân hóa dựa trên tình trạng da thực tế",
    },
    {
      home: "Nặn mụn bằng tay/cây nặn mụn sắt gây tổn thương",
      cleo: "Lấy nhân mụn bằng tăm bông vô khuẩn, giảm đau, ngừa sẹo",
    },
    {
      home: "Thử sai liên tục, tốn nhiều tiền mua mỹ phẩm",
      cleo: "Tiết kiệm chi phí, cam kết minh bạch không phát sinh",
    },
    {
      home: "Chỉ bôi thoa ngoài da, cồi mụn vẫn nằm sâu bên trong",
      cleo: "Xử lý triệt để ổ viêm kết hợp máy công nghệ cao",
    },
    {
      home: "Da ngày càng mỏng yếu, dễ bùng phát mụn lại",
      cleo: "Phục hồi hàng rào bảo vệ da, hướng dẫn duy trì tại nhà",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Lựa Chọn Nào <span className="text-primary">Tốt Hơn Cho Làn Da Của Bạn?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="flex bg-slate-50 border-b border-slate-200">
            <div className="flex-1 p-4 md:p-6 text-center border-r border-slate-200">
              <h3 className="text-lg md:text-2xl font-bold text-slate-600">Trị Mụn Tại Nhà</h3>
            </div>
            <div className="flex-1 p-4 md:p-6 text-center bg-primary/5">
              <h3 className="text-lg md:text-2xl font-bold text-primary">Tại Cle'O House</h3>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {points.map((point, index) => (
              <div key={index} className="flex">
                <div className="flex-1 p-4 md:p-6 border-r border-slate-100 bg-white flex items-start gap-2 md:gap-3">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0 mt-1" />
                  <span className="text-slate-600 text-sm md:text-base">{point.home}</span>
                </div>
                <div className="flex-1 p-4 md:p-6 bg-primary/5 flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-1 font-bold" />
                  <span className="text-slate-800 font-medium text-sm md:text-base">{point.cleo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/25 animate-bounce">
            <Link href="https://zalo.me/0888722723" target="_blank">
              Thay Đổi Làn Da Ngay Hôm Nay
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
