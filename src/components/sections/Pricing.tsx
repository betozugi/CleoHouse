import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  const groups = [
    {
      id: "mun",
      label: "Chăm sóc da mụn",
      items: [
        { name: "Xử lí nhân mụn y khoa", oldPrice: "350.000đ", price: "299.000đ" },
        { name: "Xử lí nhân mụn chuyên sâu", oldPrice: "630.000đ", price: "530.000đ" },
        { name: "Detox CO2 - xử lí nhân mụn", oldPrice: "880.000đ", price: "670.000đ" },
        { name: "Detox Glow - xử lí nhân mụn", oldPrice: "1.100.000đ", price: "690.000đ" },
        { name: "Elight Therapy - xử lí nhân mụn", oldPrice: "770.000đ", price: "593.000đ" },
        { name: "Chăm sóc da công nghệ Cle'O Pure T-zone", oldPrice: "1.290.000đ", price: "900.000đ" },
        { name: "Bắn mụn thịt, nốt ruồi", price: "50k-100k/nốt" },
      ]
    },
    {
      id: "peel",
      label: "Peel (bao gồm mụn)",
      items: [
        { name: "Hoạt chất cho da mụn", oldPrice: "1.290.000đ", price: "690.000đ" },
        { name: "Peel tảo", price: "1.200.000đ" },
        { name: "Hoạt chất phục hồi da", price: "1.500.000đ" },
        { name: "Hoạt chất cho da mụn nặng", price: "1.600.000đ" },
        { name: "Hoạt chất sáng da mờ thâm", price: "1.600.000đ" },
        { name: "Hoạt chất cho da sừng hoá", price: "1.790.000đ" },
        { name: "Hoạt chất trẻ hoá làm đẹp", price: "2.000.000đ" },
      ],
      note: "* Có nhiều dòng peel khác tùy tình trạng da, chuyên gia sẽ tư vấn cụ thể khi soi da."
    },
    {
      id: "body",
      label: "Mụn Body",
      items: [
        { name: "Xử lí nhân mụn", price: "500.000đ" },
        { name: "Peel tảo 1/2 lưng", price: "1.200.000đ" },
        { name: "Peel tảo full lưng", price: "1.500.000đ" },
        { name: "Peel sừng, mụn, thâm", price: "1.600.000đ" },
        { name: "Phi kim", price: "1.700.000đ" },
      ]
    },
    {
      id: "seo",
      label: "Sẹo",
      items: [
        { name: "Sẹo đỏ (bao gồm lấy mụn)", price: "2.000.000đ" },
        { name: "Sẹo rỗ (bao gồm lấy mụn)", price: "3.000.000đ" },
      ]
    },
    {
      id: "khac",
      label: "Dịch vụ khác",
      items: [
        { name: "Meso (Tiêm tinh chất)", price: "Liên hệ tư vấn" },
        { name: "Triệt lông công nghệ cao", price: "Liên hệ tư vấn" },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            2
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Bảng Giá Dịch Vụ <br />
            <span className="text-primary">Minh Bạch & Rõ Ràng</span>
          </h2>
          <p className="text-lg text-slate-600">
            Cle'O House cam kết chi phí hợp lý, không phát sinh trong suốt quá trình.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="mun" className="w-full">
            <div className="overflow-x-auto pb-4 mb-4 hide-scrollbar">
              <TabsList className="w-max min-w-full justify-start md:justify-center flex-nowrap md:flex-wrap h-auto p-1 bg-white border border-slate-200 rounded-xl">
                {groups.map((group) => (
                  <TabsTrigger 
                    key={group.id} 
                    value={group.id}
                    className="whitespace-nowrap px-6 py-3 rounded-lg data-[active]:bg-primary data-[active]:text-white data-[active]:shadow-md transition-all text-sm font-semibold text-slate-600"
                  >
                    {group.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {groups.map((group) => (
              <TabsContent key={group.id} value={group.id} className="mt-2 outline-none">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="divide-y divide-slate-100">
                    {group.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 md:p-6 hover:bg-slate-50 transition-colors">
                        <div className="font-bold text-slate-800 text-lg mb-2 sm:mb-0">
                          {item.name}
                        </div>
                        <div className="flex flex-col items-end">
                          {item.oldPrice && (
                            <span className="text-sm text-slate-400 line-through font-medium">
                              {item.oldPrice}
                            </span>
                          )}
                          <span className="text-xl font-bold text-red-500">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {group.note && (
                    <div className="bg-slate-50 p-4 text-sm text-slate-500 italic border-t border-slate-100">
                      {group.note}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
            <Link href="https://zalo.me/0888722723" target="_blank">
              Nhận Báo Giá Tình Trạng Da
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
