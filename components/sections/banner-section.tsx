"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="overflow-hidden bg-linear-to-r bg-banner custom-polygon">
      <div className=" pt-[146px] pb-[325px] max-2xl:pb-[260px] max-xl:pb-[180px] max-lg:pb-[120px]">
        <div className=" container mx-auto flex gap-[80px] px-[100px] max-2xl:px-4 max-xl:px-2">
          <div className="mt-[100px] min-w-[650px] flex flex-col gap-10 max-lg:gap-5">
            <div className="flex flex-col gap-3 max-lg:gap-1">
              <span
                className="font-bold text-[36px] leading-11 tracking-[-0.02em] max-lg:text-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, color(display-p3 0.094 0.094 0.094) 0%, color(display-p3 0.255 0.255 0.255) 30.97%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Kiến tạo một nền Kinh tế số Việt Nam{" "}
              </span>
              <span
                className="font-bold text-[36px] leading-11 tracking-[-0.02em] max-lg:text-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, color(display-p3 0.094 0.094 0.094) 0%, color(display-p3 0.255 0.255 0.255) 30.97%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Minh bạch - Hiệu quả - Thịnh vượng
              </span>
            </div>
            <span className="text-[#181818] text-lg leading-7 max-w-2xl max-lg:max-w-md max-lg:text-base">
              PILA là công ty tiên phong thị trường về triển khai các nền tảng
              xác thực dữ liệu và định danh số phi tập trung nhằm cung cấp các
              giải pháp bảo toàn và minh bạch dữ liệu cho mọi tổ chức, cá nhân.
            </span>
          </div>
          <div className="min-h-fit w-full relative flex justify-center">
            <div
              className="absolute top-10 !w-[780px] max-2xl:!w-[650px] max-xl:!w-[550px] max-lg:!w-[460px]
            right-[-195px] max-2xl:right-[-100px] max-xl:right-[-190px]"
            >
              <img
                src="/images/pila-banner.png"
                className=" w-full object-cover "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
