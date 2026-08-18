import { XCircle } from "lucide-react";

export function PainPoints() {
  const mistakes = [
    {
      title: "Tự nặn mụn sai cách",
      desc: "Dùng tay bẩn hoặc cố nặn mụn viêm chưa chín, dẫn đến thâm đen và sẹo rỗ vĩnh viễn.",
    },
    {
      title: "Dùng mỹ phẩm trôi nổi",
      desc: "Sử dụng kem trộn, rượu thuốc làm bào mòn hàng rào bảo vệ da, khiến da yếu và mụn bùng phát nặng hơn.",
    },
    {
      title: "Bỏ qua bước làm sạch sâu",
      desc: "Chỉ rửa mặt bằng nước hoặc sữa rửa mặt không phù hợp, để lại bã nhờn bít tắc lỗ chân lông.",
    },
    {
      title: "Thiếu kiên nhẫn & phác đồ",
      desc: "Thử nhiều cách nhưng không theo một quy trình chuẩn, đổi sản phẩm liên tục khiến da bị 'bội thực'.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Vì Sao Bạn Trị Mụn Mãi <span className="text-primary">Không Hết?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hàng ngàn khách hàng đến với Cle'O House trong tình trạng da tổn thương nặng vì từng mắc phải những sai lầm này tại nhà.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mistakes.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="mt-1 bg-red-100 p-2 rounded-full text-red-500 shrink-0">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
