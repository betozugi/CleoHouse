import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Lấy mụn bằng tăm bông có đau không?",
      answer: "Nhờ kỹ thuật rút chân mụn bằng 2 đầu tăm bông vô khuẩn thay vì dùng lực tì đè mạnh như tay hoặc cây nặn mụn sắt, quá trình lấy nhân mụn tại Cle'O House giảm đau đáng kể, ít sưng đỏ và hạn chế tối đa nguy cơ để lại sẹo rỗ.",
    },
    {
      question: "Một liệu trình điều trị kéo dài bao lâu?",
      answer: "Tùy thuộc vào tình trạng da hiện tại của bạn. Thông thường, một liệu trình chăm sóc chuyên sâu kéo dài từ 4 - 8 buổi (1 tuần/buổi). Chuyên viên sẽ thăm khám và đưa ra phác đồ chính xác nhất cho bạn.",
    },
    {
      question: "Cle'O House có ép khách mua gói dịch vụ thẻ dài hạn không?",
      answer: "Hoàn toàn KHÔNG. Chúng tôi tôn trọng quyết định của khách hàng, bạn có thể đăng ký dịch vụ theo từng buổi. Cle'O House cam kết không chèo kéo, ép buộc mua gói lớn hay mỹ phẩm đắt tiền.",
    },
    {
      question: "Làm thế nào để đặt lịch hẹn?",
      answer: "Bạn có thể bấm vào các nút 'Đặt Lịch Ngay' trên trang để chat Zalo trực tiếp hoặc gọi vào hotline 0888.722.723. Sắp tới Cle'O House sẽ triển khai hệ thống đặt lịch tự động qua Zalo Mini App để tiện lợi hơn cho khách hàng.",
    },
    {
      question: "Có phát sinh chi phí trong quá trình điều trị không?",
      answer: "Bảng giá tại Cle'O House được niêm yết minh bạch. Chuyên viên sẽ báo giá tổng chi phí của phác đồ trước khi bắt đầu và cam kết không phát sinh bất kỳ khoản phí ẩn nào.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            8
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
