"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { useIsMobile } from "../hooks/use-mobile";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const listInfra = [
  {
    id: 1,
    title: "Nền tảng chuyển đổi số",
    jobs: [
      "Công nghệ thông tin",
      "Viễn thông",
      "Dữ liệu",
      "Hạ tầng năng lượng",
      "Tài chính",
      "Ngân hàng",
      "Bảo hiểm",
      "Truyền thông",
    ],
  },
  {
    id: 2,
    title: "Văn hoá - thương mại",
    jobs: [
      "Giáo dục và đào tạo",
      "Y tế & chăm sóc sức khoẻ",
      "Du lịch",
      "Văn hoá & thể thao",
      "Lao động, an sinh xã hội",
    ],
  },
  {
    id: 3,
    title: "Sản xuất - thương mại - dịch vụ",
    jobs: [
      "Nông, lâm, thuỷ sản",
      "Chế biến, chế tạo",
      "Thương mại",
      "Kho vận & logistic",
    ],
  },
  {
    id: 4,
    title: "Bất động sản - đầu tư",
    jobs: ["Xây dựng", "Bất động sản & nhà ở", "Giao thông"],
  },
];

export default function InfrastructureSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileInfra />;
  }

  return (
    <section className="pt-16 relative">
      <div className="flex flex-col gap-[76px]">
        <div className="flex flex-col gap-4 items-center">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="text-[#181818] text-4xl leading-11 font-bold tracking-[-0.72px] max-lg:text-2xl"
          >
            Kiến thiết hạ tầng - định danh xác thực
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="text-[#202A3D] text-lg leading-7 max-lg:text-base"
          >
            Xây dựng Hạ tầng tin cậy - Phát triển Kinh tế số bền vững
          </motion.span>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="bg-infra"
        >
          <div className="pt-[47px] pb-9 container mx-auto relative flex gap-[30px] px-[100px] max-2xl:px-4 max-xl:px-2 max-2xl:gap-6 max-xl:gap-5 max-lg:gap-3">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >
              <div className="min-w-[630px] max-xl:min-w-[530px] max-lg:min-w-[410px] grid grid-cols-2 gap-[30px] max-xl:gap-4">
                {listInfra.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "min-h-[340px] max-lg:min-h-[280px]",
                      item.id > 2
                        ? "parrent-border-top"
                        : "parrent-border-bottom"
                    )}
                  >
                    <div
                      className="h-full flex flex-col gap-4 inner-content px-[15px] py-[23px]
                    max-lg:px-[11px] max-lg:py-[19px] max-lg:gap-2"
                    >
                      <span className="text-[#2B2B2B] text-xl leading-[30px] font-semibold max-lg:text-base">
                        {item.title}
                      </span>
                      <div className="flex flex-col gap-3 max-lg:gap-1.5">
                        {item.jobs.map((job, index) => (
                          <div
                            key={`job_${index}`}
                            className="flex gap-2 items-center"
                          >
                            <div>
                              <Icons.arrowCircle className="size-3" />
                            </div>
                            <span className="text-[#2B2B2B] text-sm leading-5 max-lg:text-xs">
                              {job}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white shadow-xl h-[74px] w-[74px] rounded-full flex justify-center items-center">
                  <Icons.infraLogoIcons />
                </div>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
              }}
              className="min-h-fit w-full relative flex justify-center"
            >
              <div
                className="absolute w-[864px] top-[40px] left-[150px] max-[112rem]:left-[60px]
              max-2xl:w-[700px] max-2xl:top-[70px] max-xl:w-[560px] max-xl:top-[140px] max-xl:left-[10px]
              max-lg:w-[400px] max-lg:top-[150px]
              "
              >
                <img
                  src="/images/earth.png"
                  className=" w-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MobileInfra() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Lắng nghe sự kiện "select" để cập nhật slide hiện tại
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Lắng nghe sự kiện "reInit" trong trường hợp carousel được khởi tạo lại (ví dụ: thay đổi kích thước)
    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mt-[90px] relative">
      <div className="flex flex-col">
        <div className="px-5 flex flex-col gap-6">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="text-center text-[#181818] text-4xl leading-11 font-bold"
          >
            Kiến thiết hạ tầng
            <br />
            Định danh xác thực
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="text-center text-[#202A3D] text-lg leading-7"
          >
            Xây dựng Hạ tầng tin cậy - Phát triển
            <br />
            Kinh tế số bền vững
          </motion.span>
        </div>
        <div className="relative flex justify-center items-center">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="absolute w-[484px] top-[70px]"
          >
            <img
              src="/images/earth.png"
              className=" w-full object-contain "
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="mt-[418px] px-5 flex flex-col gap-[17px] items-center"
        >
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-sm"
            setApi={setApi}
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="">
                  <div className="h-full parrent-border-bottom">
                    <div className="h-full px-4 py-6 flex flex-col gap-4 inner-content">
                      <span className="text-[#2B2B2B] text-xl leading-[30px] font-semibold">
                        {listInfra[index].title}
                      </span>
                      <div className="flex flex-col gap-3 max-lg:gap-1.5">
                        {listInfra[index].jobs.map((job, index) => (
                          <div
                            key={`job_${index}`}
                            className="flex gap-2 items-center"
                          >
                            <div>
                              <Icons.arrowCircle className="size-3" />
                            </div>
                            <span className="text-[#2B2B2B] text-sm leading-5 max-lg:text-xs">
                              {job}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="ghost" // Sử dụng variant ghost hoặc icon cho nút chấm
                size="icon"
                className={`h-2 rounded-full p-0 transition-colors duration-200 ${
                  index === current - 1
                    ? "bg-[#005FEB] w-4"
                    : "bg-[#A7ABC3] w-2"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
