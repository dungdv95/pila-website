"use client";

import { useEffect, useState } from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "../hooks/use-mobile";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";

const listCore = [
  {
    id: 0,
    icon: <Icons.lightIcon />,
    title: "Innovative - Đổi mới không ngừng",
    description:
      "Chúng tôi tiên phong ứng dụng công nghệ đột phá như Blockchain, Big Data và Phygital để tạo ra các giải pháp định danh và xác thực tiên tiến, góp phần giải quyết các vấn đề cốt lõi của nền kinh tế số.",
    img: "/images/core-renew.png",
    code: "innovative",
    text1: "ĐỔI MỚI",
    text2: "KHÔNG NGỪNG",
  },
  {
    id: 1,
    icon: <Icons.shieldIcon />,
    title: "Informative - Dữ liệu minh bạch",
    description:
      "Chúng tôi phát triển hệ thống quản trị và xác thực dữ liệu đáng tin cậy, nơi thông tin có thể kiểm chứng, phục vụ việc ra quyết định hiệu quả và tăng cường kết nối số.",
    img: "/images/dlmb.png",
    code: "informative",
    text1: "DỮ LIỆU",
    text2: "MINH BẠCH",
  },
  {
    id: 2,
    icon: <Icons.adaptiveIcon />,
    title: "Adaptive - Linh hoạt và thích ứng",
    description:
      "PILA xây dựng các nền tảng mở, liên thông, dễ tích hợp, sẵn sàng thích ứng với sự thay đổi nhanh chóng của công nghệ, nhu cầu thị trường và khung pháp lý.",
    img: "/images/adaptive.png",
    code: "adaptive",
    text1: "LINH HOẠT",
    text2: "& THÍCH ỨNG",
  },
  {
    id: 3,
    icon: <Icons.trustIcon />,
    title: "Trust - Niềm tin là nền tảng",
    description:
      "Chúng tôi đặt niềm tin số làm trọng tâm, đảm bảo bảo mật, quyền riêng tư và kiểm soát dữ liệu cho người dùng, đồng thời tuân thủ chặt chẽ quy định pháp luật trong mọi giải pháp công nghệ.",
    img: "/images/trust.png",
    code: "trust",
    text1: "NIỀM TIN",
    text2: "LÀ NỀN TẢNG",
  },
  {
    id: 4,
    icon: <Icons.impactIcon />,
    title: "Impactful - Phát triển bền vững",
    description:
      "Mỗi sản phẩm và dịch vụ của PILA không chỉ mang lại hiệu quả kinh tế mà còn hướng đến tạo tác động tích cực và bền vững cho xã hội, góp phần xây dựng một hệ sinh thái số công bằng và thịnh vượng.",
    img: "/images/impact.png",
    code: "impactful",
    text1: "PHÁT TRIỂN",
    text2: "BỀN VỮNG",
  },
];

export default function CoreValueSection() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selected < 4) {
        setSelected((prevCount) => prevCount + 1);
      } else {
        setSelected(0);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [selected]);

  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileCoreValue />;
  }

  return (
    <section id="corevalue" className="bg-white">
      <div className="container mx-auto py-16 px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex flex-col gap-[52px]">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#181818] font-bold text-4xl leading-11 tracking-[-0.72px] max-lg:text-2xl"
          >
            Giá trị cốt lõi
          </motion.span>

          <div className="flex gap-[110px] max-2xl:gap-[80px] max-xl:gap-[60px] max-lg:gap-[20px]">
            <div className="max-w-[52%] flex flex-col gap-2">
              {listCore.map((item, index) => (
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className={cn(
                    "py-6 px-4 flex gap-8 items-center cursor-pointer",
                    selected === item.id && "border-l border-[#00B6FF]",
                    selected === item.id && "bg-core"
                  )}
                  key={index}
                  onClick={() => {
                    setSelected(item.id);
                  }}
                >
                  <div>{item.icon}</div>
                  <div className="flex flex-col gap-4 max-lg:gap-2">
                    <span className="text-[#181818] font-semibold text-2xl leading-8 max-lg:text-sm max-lg:leading-5">
                      {item.title}
                    </span>
                    <span className="text-[#181818] text-sm leading-5 max-lg:text-xs line-clamp-3">
                      {item.description}
                    </span>
                  </div>
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
            >
              <AnimatePresence mode="wait">
                <div className="relative h-fit">
                  <motion.div
                    key={listCore[selected].code}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={listCore[selected].img} alt="" />
                  </motion.div>

                  <motion.div
                    key={`${listCore[selected].code}_img`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute top-[45%] left-0 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Icons.coreArrowIcon className="max-2xl:w-[100px] max-lg:w-[60px]" />
                  </motion.div>

                  <motion.div
                    key={`${listCore[selected].code}_text`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full absolute bottom-[83px] left-[57px] max-xl:left-[40px] max-lg:left-[40px] max-xl:bottom-[65px] max-lg:bottom-[52px]"
                  >
                    <div className="flex flex-col gap-[38px] max-2xl:gap-[33px] max-xl:gap-6 max-lg:gap-[18px]">
                      <span
                        className="text-[#4278E4] text-[56px] font-black leading-[24px] max-2xl:text-[52px]
                       max-xl:text-[46px] max-lg:text-[34px]"
                      >
                        {listCore[selected].text1}
                      </span>
                      <span
                        className="text-[#4278E4] text-[56px] font-black leading-[24px] max-2xl:text-[52px]  
                      max-xl:text-[46px] max-lg:text-[34px]"
                      >
                        {listCore[selected].text2}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCoreValue() {
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
    <section id="corevalue" className="px-5 pt-[26px]">
      <div className="flex flex-col">
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="text-center text-[#181818] text-[30px] leading-[38px] font-bold tracking-[-0.72px]"
        >
          Giá trị cốt lõi
        </motion.span>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="mt-[13px] flex flex-col gap-[18px] items-center"
        >
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-sm"
            setApi={setApi}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="relative">
                  <img src={listCore[index].img} />
                  <div className="w-full absolute bottom-[13px] left-9">
                    <div className="flex flex-col gap-3">
                      <span className="text-[#4278E4] text-4xl font-black ">
                        {listCore[index].text1}
                      </span>
                      <span className="text-[#4278E4] text-4xl font-black ">
                        {listCore[index].text2}
                      </span>
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
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="mt-[7px] min-h-[208px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={listCore[current - 1]?.code}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="py-6 px-4 border-l border-[#00B6FF] flex flex-col gap-4 bg-core"
            >
              <span className="text-[#414651] text-2xl leading-8 font-semibold">
                {listCore[current - 1]?.title}
              </span>
              <span className="text-[#181818] text-sm leading-5">
                {listCore[current - 1]?.description}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
