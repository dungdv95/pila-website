"use client";

import { motion } from "motion/react";
import { useIsMobile } from "../hooks/use-mobile";
import AnimationFactory from "../animation/main-animation";
import MainAnimation from "../animation/main-animation";
import animationData from "@/components/animation/animation-factory.json";

export default function BannerSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="banner" className="relative pb-[300px]">
        <div className="overflow-hidden">
          <div className=" pt-[116px] pb-[170px] bg-banner mobile-polygon">
            <div className="relative h-[427px] flex justify-center items-center">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="w-[620px] absolute top-0 left-[6%] max-[37.5rem]:left-[-7%] max-[31.25rem]:left-[-10%] max-[25rem]:left-[-15%]"
              >
                {/* <img
                  src="/images/pila-banner.png"
                  className=" w-full object-cover "
                  alt=""
                /> */}
                <MainAnimation animationData={animationData} loop={true} />
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className="px-5 w-full absolute bottom-[140px] flex justify-center max-[37rem]:bottom-[120px] 
        max-[28rem]:bottom-[100px] max-[25rem]:bottom-[78px]"
        >
          <div className="flex flex-col gap-3">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-center font-bold text-[36px] leading-11 tracking-[-0.72px] text-gradient"
            >
              Kiến tạo một nền Kinh tế số Việt Nam
            </motion.span>

            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-center font-bold text-[36px] leading-11 tracking-[-0.72px] text-gradient"
            >
              Minh bạch - Hiệu quả - Thịnh vượng
            </motion.span>

            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-7 text-center text-[#181818] text-lg leading-7"
            >
              PILA là công ty tiên phong thị trường về triển khai các nền tảng
              xác thực dữ liệu và định danh số phi tập trung nhằm cung cấp các
              giải pháp bảo toàn và minh bạch dữ liệu cho mọi tổ chức, cá nhân.
            </motion.span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="banner" className="bg-linear-to-r bg-banner custom-polygon">
      <div className="pt-[146px] pb-[325px] max-2xl:pb-[260px] max-xl:pb-[180px] max-lg:pb-[120px]">
        <div className=" container mx-auto flex gap-[80px] px-[100px] max-2xl:px-4 max-xl:px-2">
          <div className="mt-[100px] min-w-[634px] flex flex-col gap-10 max-lg:gap-5">
            <div className="flex flex-col gap-3 max-lg:gap-1">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="font-bold text-[36px] leading-11 tracking-[-0.02em] max-lg:text-2xl text-gradient"
              >
                Kiến tạo một nền Kinh tế số Việt Nam
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="font-bold text-[36px] leading-11 tracking-[-0.02em] max-lg:text-2xl text-gradient"
              >
                Minh bạch - Hiệu quả - Thịnh vượng
              </motion.span>
            </div>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-lg leading-7 max-w-2xl max-lg:max-w-md max-lg:text-base"
            >
              PILA là công ty tiên phong thị trường về triển khai các nền tảng
              xác thực dữ liệu và định danh số phi tập trung nhằm cung cấp các
              giải pháp bảo toàn và minh bạch dữ liệu cho mọi tổ chức, cá nhân.
            </motion.span>
          </div>
          <div className="min-h-fit w-full relative flex justify-center">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="absolute top-10 !w-[780px] max-2xl:!w-[650px] max-xl:!w-[550px] max-lg:!w-[460px]
            right-[-195px] max-2xl:right-[-100px] max-xl:right-[-190px]"
            >
              <MainAnimation animationData={animationData} loop={true} />
              {/* <img
                src="/images/pila-banner.png"
                className=" w-full object-cover "
                alt=""
              /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
