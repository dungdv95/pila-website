"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const listPartner = [
  {
    id: 1,
    title: "Dược phẩm",
    description:
      "Dự án thí điểm Định danh - Xác thực - Truy xuất nguồn gốc sản phẩm thực phẩm chức năng",
    imges: [
      {
        code: "eco",
        icon: <Icons.partnerEcoIcon />,
      },
    ],
  },
  {
    id: 2,
    title: "Tài chính",
    description: "Tự động hóa quy trình KYC thông qua tích hợp NDAChain",
    imges: [
      {
        code: "tech",
        icon: <Icons.partnerTechIcon />,
      },
      {
        code: "pvcb",
        icon: <Icons.partnerPvcbIcon />,
      },
    ],
  },
  {
    id: 3,
    title: "Tài chính",
    description: "Tích hợp Hệ sinh thái Định danh xuyên\nNgân hàng",
    imges: [
      {
        code: "napas",
        icon: <Icons.partnerNapasIcon />,
      },
    ],
  },
  {
    id: 4,
    title: "Hạ tầng số",
    description: "Dịch vụ xác thực danh tính do nhà mạng\ntriển khai",
    imges: [
      {
        code: "vnpt",
        icon: <Icons.partnerVnptIcon />,
      },
      {
        code: "viettel",
        icon: <Icons.partnerViettelIcon />,
      },
      {
        code: "mobi",
        icon: <Icons.partnerMobiIcon />,
      },
    ],
  },
  {
    id: 5,
    title: "Hạ tầng số",
    description:
      "Tự động hóa cấp phát thông tin định danh cho doanh nghiệp SME để hỗ trợ tiếp cận",
    imges: [
      {
        code: "misa",
        icon: <Icons.partnerMisaIcon />,
      },
    ],
  },
  {
    id: 6,
    title: "Y tế",
    description: "Cấp phát hồ sơ sức khỏe số thông qua\nNDAKey",
    imges: [
      {
        code: "ta",
        icon: <Icons.partnerTaIcon />,
      },
    ],
  },
];

export default function PartnerSection() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobilePartner />;
  }

  return (
    <section id="partner" className="py-16 relative">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="relative flex flex-col gap-[100px]">
          <div className="flex flex-col gap-4 items-center">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] font-bold text-[36px] leading-11 tracking-[-0.72px] max-lg:text-2xl"
            >
              Đối tác chiến lược
            </motion.span>

            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-center text-[#202A3D] text-lg leading-7 max-lg:text-base"
            >
              PILA thiết lập các mối quan hệ hợp tác chiến lược sâu rộng với các
              đơn vị đầu ngành
              <br />
              trong khu vực công và tư, nhằm thúc đẩy việc áp dụng và triển khai
              hạ tầng tin cậy số
              <br />
              trên phạm vi toàn nền kinh tế.
            </motion.span>
          </div>
          <div className="grid grid-cols-3 gap-[31px] max-xl:gap-4 max-lg:grid-cols-2 max-lg:gap-5">
            {listPartner.map((item) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                key={item.id}
                className="p-6 flex flex-col gap-[22px] border border-[#AED0FF] rounded-[8px] bg-linear-to-b from-[#FFFFFFCC] to-[#FFFFFF00]"
              >
                <span className="text-center text-[#202A3D] font-bold text-xl leading-[30px] max-xl:text-lg">
                  {item.title}
                </span>
                <Separator className="m-0 mt-1.5 bg-[#E9EAEB]" />
                <div className="h-10 flex justify-center items-center gap-2">
                  {item.imges.map((img) => (
                    <div key={img.code} className="h-fit">
                      {img.icon}
                    </div>
                  ))}
                </div>
                <span className="mt-[18px] text-[#202A3D] text-center text-base leading-6 whitespace-pre-line max-xl:text-xs">
                  {item.description}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-full absolute bottom-[-5%] left-0 max-2xl:bottom-[-5%] max-xl:bottom-[1%] max-lg:bottom-[15%]"
          >
            <img src="/images/map-earth.png" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MobilePartner() {
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
    <section id="partner" className="mt-[68px] flex flex-col gap-12">
      <div className="px-5 flex flex-col gap-6">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-center text-[#181818] text-[30px] leading-[38px] font-bold tracking-[-0.72px]"
        >
          Đối tác chiến lược
        </motion.span>
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-center text-[#181818] text-base leading-6"
        >
          PILA thiết lập các mối quan hệ hợp tác chiến lược sâu rộng với các đơn
          vị đầu ngành trong khu vực công và tư, nhằm thúc đẩy việc áp dụng và
          triển khai hạ tầng tin cậy số trên phạm vi toàn nền kinh tế.
        </motion.span>
      </div>
      <div className="relative ">
        <div className="relative z-10 px-5 flex flex-col gap-[23px] items-center">
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-sm"
            setApi={setApi}
          >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="">
                  <div className="flex flex-col gap-[29px]">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="p-6 flex flex-col gap-[22px] border border-[#AED0FF] rounded-[8px] bg-linear-to-b from-[#FFFFFFCC] to-[#FFFFFF00]"
                    >
                      <span className="text-center text-[#202A3D] font-bold text-xl leading-[30px] max-xl:text-lg">
                        {listPartner[index].title}
                      </span>
                      <Separator className="m-0 mt-1.5 bg-[#E9EAEB]" />
                      <div className="h-10 flex justify-center items-center gap-2">
                        {listPartner[index].imges.map((img) => (
                          <div key={img.code} className="h-fit">
                            {img.icon}
                          </div>
                        ))}
                      </div>
                      <span className="mt-[18px] text-[#202A3D] text-center text-base leading-6 whitespace-pre-line max-xl:text-xs">
                        {listPartner[index].description}
                      </span>
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.1,
                      }}
                      className="p-6 flex flex-col gap-[22px] border border-[#AED0FF] rounded-[8px] bg-linear-to-b from-[#FFFFFFCC] to-[#FFFFFF00]"
                    >
                      <span className="text-center text-[#202A3D] font-bold text-xl leading-[30px] max-xl:text-lg">
                        {listPartner[listPartner.length - index - 1].title}
                      </span>
                      <Separator className="m-0 mt-1.5 bg-[#E9EAEB]" />
                      <div className="h-10 flex justify-center items-center gap-2">
                        {listPartner[listPartner.length - index - 1].imges.map(
                          (img) => (
                            <div key={img.code} className="h-fit">
                              {img.icon}
                            </div>
                          )
                        )}
                      </div>
                      <span className="mt-[18px] text-[#202A3D] text-center text-base leading-6 whitespace-pre-line max-xl:text-xs">
                        {
                          listPartner[listPartner.length - index - 1]
                            .description
                        }
                      </span>
                    </motion.div>
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
        </div>
        <div className="z-0 w-[1200px] absolute bottom-[-10%] left-[-20%] max-[37.5rem]:left-[-36%] max-[31.25rem]:left-[-58%] max-[25rem]:left-[-70%]">
          <img src="/images/map-earth.png" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
