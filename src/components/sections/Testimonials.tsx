import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const reviews = [
    { id: 1, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" },
    { id: 2, image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" },
    { id: 3, image: "https://images.unsplash.com/photo-1512496015851-a1cbfc38da02?auto=format&fit=crop&w=600&q=80" },
    { id: 4, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
            5
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Cảm Nhận Thực Tế <br />
            <span className="text-primary">Từ Khách Hàng</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hàng ngàn tin nhắn cảm ơn là minh chứng rõ nhất cho chất lượng tại Cle'O House.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2">
                  <div className="p-2">
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 relative aspect-[9/16]">
                      {/* TODO: Thay ảnh thật screenshot Zalo/FB */}
                      <Image
                        src={item.image}
                        alt="Testimonial placeholder"
                        fill
                        className="object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded text-slate-800 font-bold text-sm shadow">
                          [Chờ ảnh Feedback Zalo thật]
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
