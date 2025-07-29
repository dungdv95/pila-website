"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";

const listVision = [
  {
    id: 1,
    icon: <Icons.visonPeopleIcon className="max-lg:w-[100px] max-lg:h-fit" />,
    text: "Con người",
    description: "People",
  },
  {
    id: 2,
    icon: <Icons.visonItemIcon className="max-lg:w-[100px] max-lg:h-fit" />,
    text: "Vật thể",
    description: "Items",
  },
  {
    id: 3,
    icon: <Icons.visonLocationIcon className="max-lg:w-[100px] max-lg:h-fit" />,
    text: "Vị trí",
    description: "Locations",
  },
  {
    id: 4,
    icon: <Icons.visonActivityIcon className="max-lg:w-[100px] max-lg:h-fit" />,
    text: "Hành động",
    description: "Activities",
  },
];

export default function VisionSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="vision" className="overflow-hidden bg-white mb-[77px]">
        <div className="relative flex flex-col gap-4">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="px-5 text-center font-bold text-[30px] leading-[38px] tracking-[-0.72px] text-[#181818]"
          >
            Tầm nhìn
          </motion.span>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="px-5 text-center text-[#1E1E1E] text-[18px] leading-7"
          >
            PILA hướng tới trở thành nền tảng hạ tầng tin cậy cho kỷ nguyên số,
            xoay quanh 4 trụ cột dữ liệu đang dịch chuyển từ thế giới thực sang
            thế giới số:{" "}
            <span className="font-bold">
              People, Items, Locations, Activities (PILA)
            </span>{" "}
            đòi hỏi một hệ sinh thái kết nối, quản trị và xác thực bảo mật, an
            toàn và phi tập trung
          </motion.div>

          <div className="mt-[18px] flex flex-col gap-4">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="flex"
            >
              <div
                className={cn(
                  "w-1/2 py-6 flex flex-col gap-[31px] items-center border-0",
                  "border-r border-gradient"
                )}
              >
                <div>
                  <Icons.visonPeopleIcon className="w-[120px] h-[120px]" />
                </div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E] items-center justify-center">
                  <span className="text-[#1E1E1E] font-medium text-2xl leading-8">
                    Con người
                  </span>
                  <span className="text-sm leading-5">(People)</span>
                </div>
              </div>
              <div
                className={cn(
                  "w-1/2 py-6 flex flex-col gap-[31px] items-center border-0",
                  "border-r border-gradient"
                )}
              >
                <div>
                  <Icons.visonItemIcon className="w-[120px] h-[120px]" />
                </div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E] items-center justify-center">
                  <span className="font-medium text-2xl leading-8 text-[#1E1E1E]">
                    Vật thể
                  </span>
                  <span className="text-sm leading-5">(Items)</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="flex"
            >
              <div
                className={cn(
                  "w-1/2 py-6 flex flex-col gap-[31px] items-center border-0",
                  "border-r border-gradient"
                )}
              >
                <div>
                  <Icons.visonLocationIcon className="w-[120px] h-[120px]" />
                </div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E] items-center justify-center">
                  <span className="font-medium text-2xl leading-8 text-[#1E1E1E]">
                    Vị trí
                  </span>
                  <span className="text-sm leading-5">(Locations)</span>
                </div>
              </div>
              <div
                className={cn(
                  "w-1/2 py-6 flex flex-col gap-[31px] items-center border-0",
                  "border-r border-gradient"
                )}
              >
                <div>
                  <Icons.visonActivityIcon className="w-[120px] h-[120px]" />
                </div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E] items-center justify-center">
                  <span className="font-medium text-2xl leading-8 text-[#1E1E1E]">
                    Hành động
                  </span>
                  <span className="text-sm leading-5">(Activities)</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="z-20 px-5 mt-[18px] text-center text-[#717680] text-lg leading-7"
          >
            Ứng dụng công nghệ để kiến tạo một nền kinh tế số an toàn, minh bạch
            và bền vững, đồng hành cùng hành trình chuyển đổi số quốc gia trong
            kỷ nguyên vươn mình của đất nước.
          </motion.span>
        </div>
      </section>
    );
  }
  return (
    <section id="vision" className=" bg-white">
      <div className="container mx-auto pb-[83px] px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex flex-col gap-[25px]">
          <div className="max-w-[920px] flex flex-col gap-4">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="font-bold text-[36px] leading-11 tracking-[-0.02em] max-lg:text-2xl text-gradient"
            >
              Tầm nhìn
            </motion.span>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#1E1E1E] text-lg leading-7 max-lg:text-base"
            >
              PILA hướng tới trở thành nền tảng hạ tầng tin cậy cho kỷ nguyên
              số, xoay quanh 4 trụ cột dữ liệu đang dịch chuyển từ thế giới thực
              sang thế giới số:{" "}
              <span className="font-bold">
                People, Items, Locations, Activities (PILA)
              </span>{" "}
              đòi hỏi một hệ sinh thái kết nối, quản trị và xác thực bảo mật, an
              toàn và phi tập trung
            </motion.div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="py-1 grid grid-cols-4 gap-x-4"
          >
            {listVision.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "py-6 flex flex-col gap-[31px] items-center border-0 max-lg:gap-3",
                  "border-r border-gradient",
                  index === 0 && "border-x border-gradient",
                  index === listVision.length - 1 && "border-0"
                )}
              >
                <div className="">{item.icon}</div>
                <div className="flex flex-col gap-[5px] text-[#1E1E1E] items-center justify-center">
                  <span className="font-medium text-2xl leading-8 max-lg:text-lg ">
                    {item.text}
                  </span>
                  <span className="text-sm leading-5">
                    ({item.description})
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="mt-[11px] max-w-[920px] text-[#717680] text-lg leading-7 max-lg:text-sm"
          >
            Ứng dụng công nghệ để kiến tạo một nền kinh tế số an toàn, minh bạch
            và bền vững, đồng hành cùng hành trình chuyển đổi số quốc gia trong
            kỷ nguyên vươn mình của đất nước.
          </motion.span>
        </div>
      </div>
    </section>
  );
}
