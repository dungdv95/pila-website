"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

export default function FooterSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="px-5 pt-[54px] pb-[121px] bg-footer">
        <div className="flex flex-col gap-8">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="w-[220px]"
            onClick={(event) => {
              wait().then(() => {
                const el = document.getElementById("banner");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              });
              event.preventDefault();
            }}
          >
            <img src="/images/pila-logo-ft.png" className=" object-contain" />
          </motion.div>

          <Separator className="m-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-8">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#1E1E1E] text-2xl leading-8 font-semibold"
            >
              Hãy cùng nhau kiến tạo niềm tin số!
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
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
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("vision");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Tầm nhìn
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("mission");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Sứ mệnh
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("corevalue");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Giá trị cốt lõi
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("application");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Ứng dụng
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("product");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Sản phẩm
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-base font-medium tracking-[-0.6px]"
              onClick={(event) => {
                wait().then(() => {
                  const el = document.getElementById("partner");
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    const scrollTop =
                      window.pageYOffset || document.documentElement.scrollTop;
                    const offset = 105; // số px muốn dịch xuống thêm
                    const targetY = rect.top + scrollTop - offset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
            >
              Đối tác
            </motion.span>
          </div>
          <Separator className="m-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-6">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#0D152E] text-2xl leading-8 font-semibold"
            >
              Liên hệ
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-1.5 text-[#0D152E] text-base leading-6"
            >
              info@pila.vn
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
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
        <div className="flex flex-col gap-[37px]">
          <div className="flex gap-[60px] items-center">
            <div className="w-[35%] max-lg:w-[33%]">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="cursor-pointer w-[300px] max-xl:w-[200px]"
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("banner");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
              >
                <img
                  src="/images/pila-logo-ft.png"
                  className=" object-contain"
                />
              </motion.div>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="flex items-center gap-[72px] max-2xl:gap-[50px] max-xl:gap-[30px] max-lg:gap-2"
            >
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("vision");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Tầm nhìn
              </span>
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("mission");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Sứ mệnh
              </span>
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("corevalue");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Giá trị cốt lõi
              </span>
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("application");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Ứng dụng
              </span>
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("product");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Sản phẩm
              </span>
              <span
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById("partner");
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                  });
                  event.preventDefault();
                }}
                className="cursor-pointer text-[#0D152E] text-base font-medium tracking-[-0.6px] leading-normal hover:text-blue-600"
              >
                Đối tác
              </span>
            </motion.div>
          </div>
          <Separator className="my-0 bg-[#D5E9E6]" />
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-[60px]">
              <div className="w-[39%] flex flex-col ">
                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#0D152E] text-2xl leading-8 font-semibold"
                >
                  Hãy cùng nhau kiến tạo niềm tin số!
                </motion.span>
              </div>
              <div className="w-[24%] flex  items-start">
                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold"
                >
                  Liên hệ
                </motion.span>
              </div>
              <div className="w-[37%] flex  items-start">
                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold"
                >
                  Sản phẩm
                </motion.span>
              </div>
            </div>
            <div className="flex gap-[60px] items-start">
              <div className="w-[39%] flex flex-col">
                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  Chúng tôi mời gọi cá nhân, doanh nghiệp và tổ chức cùng xây
                  dựng môi trường số minh bạch, an toàn và đáng tin cậy. Bằng
                  cách áp dụng các nền tảng định danh và quản trị dữ liệu bảo
                  mật, chúng ta cùng thúc đẩy nền kinh tế số phát triển bền vững
                  và hiệu quả.
                </motion.span>
              </div>
              <div className="w-[24%] flex flex-col gap-4">
                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  info@pila.vn
                </motion.span>

                <motion.span
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7"
                >
                  37 Trần Bình Trọng, Nguyễn Du, Hai Bà Trưng, Hà Nội
                </motion.span>
              </div>
              <div className="w-[37%] flex flex-col gap-4 ">
                <motion.a
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  href="https://ndachain.vn/"
                  className="text-[#1E1E1E] text-lg leading-7 hover:text-blue-600"
                  target="_blank"
                >
                  NDAChain - Nền tảng blockchain quốc gia
                </motion.a>
                <motion.a
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7 hover:text-blue-600"
                  href="https://www.ndatrace.vn/vn"
                  target="_blank"
                >
                  NDATrace - Nền tảng truy xuất xác thực nguồn gốc
                </motion.a>
                <motion.a
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                  }}
                  className="text-[#1E1E1E] text-lg leading-7 hover:text-blue-600"
                  href="https://www.ndakey.vn/"
                  target="_blank"
                >
                  NDAKey - Ứng dụng định danh phi tập trung
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
