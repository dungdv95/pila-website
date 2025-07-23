"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { motion } from "motion/react";

export default function MissionPilaSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="mission"
        className="relative mt-[77px] py-[30px] bg-mobile-mission"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="absolute top-[-130px] w-[1200px] left-[-17%] max-[45rem]:left-[-22%] max-[40rem]:left-[-31%] max-[35rem]:left-[-42%]
        max-[31rem]:left-[-54%] max-[28rem]:left-[-65%] max-[26.9rem]:left-[-69%] max-[26rem]:left-[-74%] max-[25rem]:left-[-82%] max-[23.75rem]:left-[-87%]
        "
        >
          <img
            src="/images/mission.png"
            className=" w-full object-cover "
            alt=""
          />
        </motion.div>

        <div className="">
          <div className="px-5 mt-[525px] flex flex-col gap-[31px]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-center font-bold text-[36px] leading-[44px] tracking-[-0.02em] text-gradient-vision"
            >
              Sứ mệnh
            </motion.span>

            <div className="flex flex-col gap-6">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-center text-[#202A3D] text-lg leading-7"
              >
                PILA cam kết xây dựng các giải pháp định danh số phi tập trung
                (DID) như một nền tảng cốt lõi để giải quyết các thách thức của
                thế giới số; từ bảo mật, minh bạch đến an toàn thông tin.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-center text-[#202A3D] text-lg leading-7"
              >
                Bằng kinh nghiệm công nghệ và năng lực ứng dụng các giải pháp
                tiên tiến như
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex justify-center"
              >
                <ul className="!list-disc list-inside custom-list text-[#202A3D] text-lg leading-7">
                  <li className="mb-0.5">Blockchain </li>
                  <li className="mb-0.5">Bảo vệ thông tin cá nhân</li>
                  <li className="mb-0.5">Ngăn chặn các hành vi gian lận</li>
                  <li className="mb-0.5">Tích hợp rộng rãi</li>
                </ul>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-center text-[#202A3D] text-lg leading-7"
              >
                Chúng tôi kiến tạo một môi trường số an toàn, minh bạch, nơi dữ
                liệu được kiểm chứng, giao dịch được tin cậy, và người dân,
                doanh nghiệp, tổ chức có thể tương tác, hợp tác hiệu quả trong
                nền kinh tế số bền vững
              </motion.span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="mission" className="relative py-24 bg-mission max-xl:py-14">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex items-center">
          <div className="w-1/2 flex flex-col gap-[31px] border-l border-gradient pl-8 max-xl:gap-6 max-lg:gap-4">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="font-bold text-[36px] leading-[44px] tracking-[-0.02em] bg-gradient-to-r from-[#181818] via-[#7E7E7E] to-[#7E7E7E] text-transparent bg-clip-text max-lg:text-xl"
            >
              Sứ mệnh
            </motion.span>

            <div className="flex flex-col gap-6 max-xl:gap-4">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#202A3D] text-lg leading-7 max-lg:text-base"
              >
                PILA cam kết xây dựng các giải pháp định danh số phi tập trung
                (DID) như một nền tảng cốt lõi để giải quyết các thách thức của
                thế giới số; từ bảo mật, minh bạch đến an toàn thông tin.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#202A3D] text-lg leading-7 max-lg:text-base"
              >
                Bằng kinh nghiệm công nghệ và năng lực ứng dụng các giải pháp
                tiên tiến như
              </motion.span>

              <motion.ul
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="!list-disc list-inside custom-list text-[#202A3D] text-lg leading-7 max-lg:text-base"
              >
                <li className="mb-1 ">Blockchain </li>
                <li className="mb-1 ">Bảo vệ thông tin cá nhân</li>
                <li className="mb-1 ">Ngăn chặn các hành vi gian lận</li>
                <li className="mb-1 ">Tích hợp rộng rãi</li>
              </motion.ul>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#202A3D] text-lg leading-7 max-lg:text-base"
              >
                Chúng tôi kiến tạo một môi trường số an toàn, minh bạch, nơi dữ
                liệu được kiểm chứng, giao dịch được tin cậy, và người dân,
                doanh nghiệp, tổ chức có thể tương tác, hợp tác hiệu quả trong
                nền kinh tế số bền vững
              </motion.span>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="absolute w-[1050px] top-[-380px] left-[-100px]
              max-2xl:w-[900px] max-2xl:top-[-310px] max-2xl:left-[-70px]
              max-xl:w-[800px] max-xl:top-[-280px] max-xl:left-[-20px]"
            >
              <img
                src="/images/mission.png"
                className=" w-full object-cover "
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
