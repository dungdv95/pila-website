"use client";

import { useState } from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

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
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto py-16 px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex flex-col gap-[52px]">
          <span className="text-center text-[#181818] font-bold text-[36px] leading-11 tracking-[-0.72px]">
            Giá trị cốt lõi
          </span>
          <div className="flex gap-[110px]">
            <div className="flex flex-col gap-2">
              {listCore.map((item, index) => (
                <div
                  className={cn(
                    "h-[156px] py-6 px-4 flex gap-8 items-center ",
                    selected.id === item.id && "border-l border-[#00B6FF]",
                    selected.id === item.id &&
                      "bg-[linear-gradient(257deg,_#F7FFFD_53.86%,_#E3FFF7_75.84%,_#E9FFFF_92%)]"
                  )}
                  key={index}
                  onClick={() => setSelected(item)}
                >
                  <div>{item.icon}</div>
                  <div className="flex flex-col gap-4">
                    <span className="text-[#181818] font-semibold text-2xl leading-8">
                      {item.title}
                    </span>
                    <span className="text-[#181818] text-sm leading-5">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <img src={selected.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
