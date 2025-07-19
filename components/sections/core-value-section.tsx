"use client";

import { useState } from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const listCore = [
  {
    id: 1,
    icon: <Icons.lightIcon />,
    title: "Innovative - Đổi mới không ngừng",
    description:
      "Chúng tôi tiên phong ứng dụng công nghệ đột phá như Blockchain, Big Data và Phygital để tạo ra các giải pháp định danh và xác thực tiên tiến, góp phần giải quyết các vấn đề cốt lõi của nền kinh tế số.",
    img: "/images/core-renew.png",
  },
  {
    id: 2,
    icon: <Icons.shieldIcon />,
    title: "Informative - Dữ liệu minh bạch",
    description:
      "Chúng tôi phát triển hệ thống quản trị và xác thực dữ liệu đáng tin cậy, nơi thông tin có thể kiểm chứng, phục vụ việc ra quyết định hiệu quả và tăng cường kết nối số.",
    img: "/images/dlmb.png",
  },
  {
    id: 3,
    icon: <Icons.adaptiveIcon />,
    title: "Adaptive - Linh hoạt và thích ứng",
    description:
      "Chúng tôi phát triển hệ thống quản trị và xác thực dữ liệu đáng tin cậy, nơi thông tin có thể kiểm chứng, phục vụ việc ra quyết định hiệu quả và tăng cường kết nối số.",
    img: "/images/adaptive.png",
  },
  {
    id: 4,
    icon: <Icons.trustIcon />,
    title: "Trust - Niềm tin là nền tảng",
    description:
      "Chúng tôi đặt niềm tin số làm trọng tâm, đảm bảo bảo mật, quyền riêng tư và kiểm soát dữ liệu cho người dùng, đồng thời tuân thủ chặt chẽ quy định pháp luật trong mọi giải pháp công nghệ.",
    img: "/images/trust.png",
  },
  {
    id: 5,
    icon: <Icons.impactIcon />,
    title: "Impactful - Phát triển bền vững",
    description:
      "Mỗi sản phẩm và dịch vụ của PILA không chỉ mang lại hiệu quả kinh tế mà còn hướng đến tạo tác động tích cực và bền vững cho xã hội, góp phần xây dựng một hệ sinh thái số công bằng và thịnh vượng.",
    img: "/images/impact.png",
  },
];

export default function CoreValueSection() {
  const [selected, setSelected] = useState(listCore[0]);
  const [active, setActive] = useState(0);

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto py-16 px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex flex-col gap-[52px]">
          <span className="text-center text-[#181818] font-bold text-[36px] leading-11 tracking-[-0.72px] max-lg:text-2xl">
            Giá trị cốt lõi
          </span>
          <div className="flex gap-[110px] max-2xl:gap-[80px] max-xl:gap-[60px] max-lg:gap-[20px]">
            <div className="flex flex-col gap-2">
              {listCore.map((item, index) => (
                <div
                  className={cn(
                    "py-6 px-4 flex gap-8 items-center ",
                    selected.id === item.id && "border-l border-[#00B6FF]",
                    selected.id === item.id && "bg-core"
                  )}
                  key={index}
                  onClick={() => setSelected(item)}
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
                </div>
              ))}
            </div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative h-fit"
              >
                <img src={selected.img} alt="" />
                <div className="absolute top-[45%] left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <Icons.coreArrowIcon className="max-2xl:w-[100px] max-lg:w-[60px]" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
