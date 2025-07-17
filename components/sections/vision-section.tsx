"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const listVision = [
  {
    id: 1,
    icon: <Icons.visonPeopleIcon />,
    text: "Con người",
    description: "People",
  },
  {
    id: 2,
    icon: <Icons.visonItemIcon />,
    text: "Vật thể",
    description: "Items",
  },
  {
    id: 3,
    icon: <Icons.visonLocationIcon />,
    text: "Vị trí",
    description: "Locations",
  },
  {
    id: 4,
    icon: <Icons.visonActivityIcon />,
    text: "Hành động",
    description: "Activities",
  },
];

export default function VisionSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto pb-[83px] px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex flex-col gap-[25px]">
          <div className="max-w-4xl flex flex-col gap-4">
            <span
              className="font-bold text-[36px] leading-11 tracking-[-0.02em]"
              style={{
                background:
                  "linear-gradient(90deg, #181818 0%, #7E7E7E 30.97%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Tầm nhìn
            </span>
            <div className="text-[#1E1E1E] text-lg leading-7">
              PILA hướng tới trở thành nền tảng hạ tầng tin cậy cho kỷ nguyên
              số, xoay quanh 4 trụ cột dữ liệu đang dịch chuyển từ thế giới thực
              sang thế giới số:{" "}
              <span className="font-bold">
                People, Items, Locations, Activities (PILA)
              </span>{" "}
              đòi hỏi một hệ sinh thái kết nối, quản trị và xác thực bảo mật, an
              toàn và phi tập trung
            </div>
          </div>
          <div className="py-1 grid grid-cols-4 gap-x-4">
            {listVision.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "py-6 flex flex-col gap-[31px] items-center border-0",
                  "border-r border-gradient",
                  index === 0 && "border-x border-gradient",
                  index === listVision.length - 1 && "border-0"
                )}
              >
                <div className="">{item.icon}</div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E]">
                  <span className="font-medium text-2xl leading-8">
                    {item.text}
                  </span>
                  <span className="text-center text-sm leading-5">
                    ({item.description})
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span className="mt-[11px] max-w-4xl text-[#717680] text-lg leading-7">
            Ứng dụng công nghệ để kiến tạo một nền kinh tế số an toàn, minh bạch
            và bền vững, đồng hành cùng hành trình chuyển đổi số quốc gia trong
            kỷ nguyên vươn mình của đất nước.
          </span>
        </div>
      </div>
    </section>
  );
}
