"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

export default function FooterSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="mt-[84px] px-5 pt-[54px] pb-[121px] bg-footer">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
            }}
            className="w-[220px]"
          >
            <img src="/images/pila-logo-ft.png" className=" object-contain" />
          </motion.div>

          <Separator className="m-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#1E1E1E] text-2xl leading-8 font-semibold"
            >
              Hãy cùng nhau kiến tạo niềm tin số!
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#1E1E1E] text-lg leading-7"
            >
              Chúng tôi mời gọi cá nhân, doanh nghiệp và tổ chức cùng xây dựng
              môi trường số minh bạch, an toàn và đáng tin cậy. Bằng cách áp
              dụng các nền tảng định danh và quản trị dữ liệu bảo mật, chúng ta
              cùng thúc đẩy nền kinh tế số phát triển bền vững và hiệu quả.
            </motion.span>
          </div>
          <Separator className="m-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
            >
              Tầm nhìn
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
            >
              Ứng dụng
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
            >
              Sản phẩm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
            >
              Đối tác
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
            >
              Công nghệ
            </motion.span>
          </div>
          <Separator className="m-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-2xl leading-8 font-semibold"
            >
              Liên hệ
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="mt-1.5 text-[#0D152E] text-base leading-6"
            >
              info@pila.vn
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="text-[#0D152E] text-base leading-6"
            >
              37 Trần Bình Trọng, Nguyễn Du, Hai Bà Trưng, Hà Nội
            </motion.span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 bg-footer">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2 py-[60px]">
        <div className="flex flex-col gap-[80px]">
          <div className="grid grid-cols-3 gap-[60px]">
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                }}
                className="w-[300px] max-xl:w-[200px]"
              >
                <img
                  src="/images/pila-logo-ft.png"
                  className=" object-contain"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="col-span-2 flex items-center gap-[72px] max-2xl:gap-[50px] max-xl:gap-[30px]"
            >
              <span className="text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal">
                Tầm nhìn
              </span>
              <span className="text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal">
                Ứng dụng
              </span>
              <span className="text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal">
                Sản phẩm
              </span>
              <span className="text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal">
                Đối tác
              </span>
              <span className="text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal">
                Công nghệ
              </span>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-[60px]">
            <div className="col-span-1 flex flex-col gap-[30px]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                }}
                className="text-[#0D152E] text-2xl leading-8 font-semibold"
              >
                Hãy cùng nhau kiến tạo niềm tin số!
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                }}
                className="text-[#1E1E1E] text-lg leading-7"
              >
                Chúng tôi mời gọi cá nhân, doanh nghiệp và tổ chức cùng xây dựng
                môi trường số minh bạch, an toàn và đáng tin cậy. Bằng cách áp
                dụng các nền tảng định danh và quản trị dữ liệu bảo mật, chúng
                ta cùng thúc đẩy nền kinh tế số phát triển bền vững và hiệu quả.
              </motion.span>
            </div>
            <div className="col-span-2 flex gap-[30px] items-start">
              <div className="flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold"
                >
                  Liên hệ
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  info@pila.vn
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  37 Trần Bình Trọng, Nguyễn Du, Hai Bà Trưng, Hà Nội
                </motion.span>
              </div>
              <div className="flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold"
                >
                  Sản phẩm
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  NDAChain - Nền tảng blockchain quốc gia
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  NDATrace - Nền tảng truy xuất xác thực nguồn gốc
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  NDAKey - Ứng dụng định danh phi tập trung
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
