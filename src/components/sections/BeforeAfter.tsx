"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BeforeAfter() {
  const images = [
    "https://file.hstatic.net/200000558119/file/vu_xuan_phu__13__919e72f1287743ceab5802e414c40768_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__55__2fad070f1d174935897d5f3761339d6d_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__50__f38fe40ac60f41b9b1c2ae43e7936531_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__45__cb990167f0304fc9bdc273b85f55ec14_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__56__09578aed2b7a48558972aeb09ef03de1_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__60__d8497cedb2b24e07879071707e64c1dd_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__54__a568baca24854e8d835473351e0c5067_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__53__d61a6c2e863f43cdb08b264f04d806c2_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__52__26f1b260ef3b45b68775e719b7b2c607_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__51__33d5d7a6b00f43dab6cb9ad384191310_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__48__edefda0f56e340bcb83eb123271ec9a1_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__47__5b35b9f625ad47bcae84a92467c22714_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__39__fe5d8366c8aa4221aefd968fa9677f9b_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__44__790ca27c77a24f298fb28fd49d7f739f_grande.png",
    "https://file.hstatic.net/200000558119/file/ban_sao_cua_thu_hieu__42__1275d6c1f562432fa7b0f9597733d586_grande.png"
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Hiệu Quả Thực Tế Khách Hàng <br />
            Tại <span className="text-primary">Cle'O House</span>
          </h2>
          <p className="text-lg text-slate-600">
            Hàng ngàn khách hàng đã tìm lại sự tự tin với làn da sạch mụn.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
                      <div className="relative aspect-square md:aspect-[4/5] bg-slate-100">
                        <Image
                          src={src}
                          alt={`Hiệu quả chăm sóc da khách hàng ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-white" />
            <CarouselNext className="-right-4 md:-right-12 bg-white" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
            <Link href="https://zalo.me/0888722723" target="_blank">
              Nhận Tư Vấn Phác Đồ Ngay
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
