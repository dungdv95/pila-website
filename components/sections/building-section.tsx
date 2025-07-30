"use client";

import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { motion } from "motion/react";

export default function BuildingSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id="productSection" className="px-5 mb-[68px]">
        <div className="flex flex-col">
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-center text-[#181818] text-[30px] leading-[38px] tracking-[-0.72px] font-bold"
          >
            Xây dựng hạ tầng
            <br />
            niềm tin cho
            <br />
            thế giới số
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="mt-6 text-center text-[#202A3D] text-lg leading-7"
          >
            Thúc đẩy phát triển Kinh tế số -<br />
            Xã hội số
          </motion.span>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="py-[18px] px-4 flex justify-center items-center"
          >
            <img
              src="/images/building-ht.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="mt-8 flex flex-col gap-4">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-2xl leading-8 font-bold"
            >
              NDAChain - Nền tảng Blockchain quốc gia
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-2 text-[#181818] text-base leading-6"
            >
              NDAChain cung cấp hạ tầng Bảo mật, Phi tập trung, chuẩn quốc tế
              cho Định danh số, Giao dịch dữ liệu và các ứng dụng trong Chuyển
              đổi số. Trên nền tảng NDAChain, Hệ thống Định danh Phi tập trung
              NDADID được xây dựng nhằm đảm bảo Xác thực danh tính số An toàn,
              Minh bạch, Chống gian lận trên không gian mạng và bảo vệ quyền
              riêng tư của người sử dụng
            </motion.span>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-2 flex gap-3 items-center"
            >
              <div>
                <Icons.buildingLayer />
              </div>
              <span className="text-sm leading-5 text-[#181818]">
                Minh bạch, truy xuất và tự chủ dữ liệu
              </span>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-2 flex gap-3 items-center"
            >
              <div>
                <Icons.buildingDatabase />
              </div>
              <span className="text-sm leading-5 text-[#181818]">
                Xác thực dữ liệu
              </span>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-2 flex gap-3 items-center"
            >
              <div>
                <Icons.buildingShield />
              </div>
              <span className="text-sm leading-5 text-[#181818]">
                Bảo mật và toàn vẹn hệ thống
              </span>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-2 flex gap-3 items-center"
            >
              <div>
                <Icons.buildingServer />
              </div>
              <span className="text-sm leading-5 text-[#181818]">
                Tương thích toàn cầu
              </span>
            </motion.div>
          </div>
          <div className="mt-[70px] flex flex-col gap-10">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="flex justify-center items-center"
            >
              <img
                src="/images/building-phone.webp"
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="mt-1 flex flex-col gap-6">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#181818] text-2xl leading-8 font-bold"
              >
                NDAKey - Ứng dụng định danh phi tập trung quốc gia
              </motion.span>

              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-2 text-[#181818] text-base leading-6"
              >
                NDAKey là ứng dụng nhận dạng số phi tập trung Quốc gia, giúp xác
                thực danh tính an toàn thông qua nền tảng nhận dạng số phi tập
                trung (DID) quốc gia, sử dụng công nghệ tiên tiến như chuỗi
                khối, trí tuệ nhân tạo, học máy, sinh trắc học và mã hoá dữ
                liệu.
              </motion.span>
            </div>
            <div className="flex flex-col gap-6">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingSetting />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  An toàn trên không gian mạng
                </span>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingShieldPhone />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Bảo vệ thông tin cá nhân
                </span>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingTransfer />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Giao dịch an toàn
                </span>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingShield />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Quản lý danh tính tự chủ
                </span>
              </motion.div>
            </div>
          </div>

          <div className="mt-[60px] flex flex-col gap-8">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="flex justify-center items-center"
            >
              <img
                src="/images/nda-sdk.webp"
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="mt-7 flex flex-col gap-6">
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="text-[#181818] text-2xl leading-8 font-bold"
              >
                NDA SDK - Bộ công cụ giải pháp tích hợp đa nền tảng
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-2 text-[#181818] text-base leading-6"
              >
                Là bộ công cụ hỗ trợ tích hợp do đội ngũ PILA phát triển, NDA
                SDK giúp các nhà phát triển dễ dàng kết nối các chức năng cốt
                lõi của nền tảng như định danh số, xác thực dữ liệu và truy xuất
                thông tin vào ứng dụng của mình. Được thiết kế linh hoạt và thân
                thiện, NDA SDK tương thích với nhiều nền tảng phổ biến như
                Kotlin Native, Swift, React Native, Flutter giúp tiết kiệm thời
                gian và công sức trong quá trình triển khai.
              </motion.span>
            </div>
            <div className="flex flex-col gap-6">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingSetting />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Tuân thủ các tiêu chuẩn toàn cầu
                </span>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingShieldPhone />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Triển khai nhanh chóng, tích hợp linh hoạt
                </span>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="flex gap-3 items-center"
              >
                <div>
                  <Icons.buildingTransfer />
                </div>
                <span className="text-sm leading-5 text-[#181818]">
                  Hỗ trợ và cập nhật liên tục
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="productSection" className="mb-32 relative">
      <div className="container mx-auto px-[200px] max-2xl:px-20 max-xl:px-6 flex flex-col gap-11">
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
            Xây dựng hạ tầng niềm tin cho thế giới số
          </motion.span>
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="text-[#202A3D] text-lg leading-7 max-lg:text-base"
          >
            Thúc đẩy phát triển Kinh tế số - Xã hội số
          </motion.span>
        </div>
        <div className="relative flex items-center gap-[30px] max-xl:gap-3 max-lg:gap-2">
          <div className="z-20 w-1/2 flex flex-col gap-6 max-xl:gap-3 max-lg:gap-2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6"
            >
              NDAChain - Nền tảng Blockchain quốc gia
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs"
            >
              NDAChain cung cấp hạ tầng Bảo mật, Phi tập trung, chuẩn quốc tế
              cho Định danh số, Giao dịch dữ liệu và các ứng dụng trong Chuyển
              đổi số. Trên nền tảng NDAChain, Hệ thống Định danh Phi tập trung
              NDADID được xây dựng nhằm đảm bảo Xác thực danh tính số An toàn,
              Minh bạch, Chống gian lận trên không gian mạng và bảo vệ quyền
              riêng tư của người sử dụng
            </motion.span>

            <div className="mt-[11px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
              >
                <div className="flex gap-3 items-center max-lg:gap-1">
                  <div>
                    <Icons.buildingLayer />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Minh bạch, truy xuất và tự chủ dữ liệu
                  </span>
                </div>
                <div className="flex gap-3 items-center min-w-[175px] max-lg:gap-1 max-lg:min-w-[160px]">
                  <div>
                    <Icons.buildingShield />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Bảo mật và toàn vẹn hệ thống
                  </span>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
              >
                <div className="flex gap-3 items-center max-lg:gap-1">
                  <div>
                    <Icons.buildingDatabase />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Xác thực dữ liệu
                  </span>
                </div>
                <div className="flex gap-3 items-center min-w-[172px] max-lg:gap-1 max-lg:min-w-[160px]">
                  <div>
                    <Icons.buildingServer />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Tương thích toàn cầu
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="z-10 flex justify-center items-center w-[700px] max-2xl:w-[550px]
          max-xl:w-[600px] max-lg:w-[430px]"
          >
            <img
              src="/images/building-ht.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="z-0 absolute top-[39%] left-[-20%] max-2xl:top-[37%] max-xl:top-[33%] max-lg:top-[28%]"
          >
            <div className="bg-product w-[1000px] h-[500px] max-2xl:w-[950px] max-2xl:h-[450px] max-xl:w-[800px] max-xl:h-[460px] max-lg:w-[600px] max-lg:h-[400px] rounded-full opacity-30 blur-[50px]"></div>
          </motion.div>
        </div>
        <div className="relative flex items-center gap-12 max-xl:gap-8 max-lg:gap-6">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="z-10 flex justify-center items-center w-[650px] max-2xl:w-[550px]
          max-xl:w-[500px] max-lg:w-[430px]"
          >
            <img
              src="/images/building-phone.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          <div className="w-1/2 flex flex-col gap-6 max-lg:gap-3">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6"
            >
              NDAKey - Ứng dụng định danh phi tập trung quốc gia
            </motion.span>

            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs"
            >
              NDAKey là ứng dụng nhận dạng số phi tập trung Quốc gia, giúp xác
              thực danh tính an toàn thông qua nền tảng nhận dạng số phi tập
              trung (DID) quốc gia, sử dụng công nghệ tiên tiến như chuỗi khối,
              trí tuệ nhân tạo, học máy, sinh trắc học và mã hoá dữ liệu.
            </motion.span>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="mt-4 grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
            >
              <div className="flex gap-3 items-center max-lg:gap-2">
                <div>
                  <Icons.buildingSetting />
                </div>
                <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                  An toàn trên không gian mạng
                </span>
              </div>
              <div className="flex gap-3 items-center max-lg:gap-2">
                <div>
                  <Icons.buildingTransfer />
                </div>
                <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                  Giao dịch an toàn
                </span>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
            >
              <div className="flex gap-3 items-center max-lg:gap-2">
                <div>
                  <Icons.buildingShieldPhone />
                </div>
                <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                  Bảo vệ thông tin cá nhân
                </span>
              </div>
              <div className="flex gap-3 items-center max-lg:gap-2">
                <div>
                  <Icons.buildingShield />
                </div>
                <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                  Quản lý danh tính tự chủ
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative flex items-center gap-[30px] max-xl:gap-3 max-lg:gap-2">
          <div className="w-1/2 flex flex-col gap-6 max-xl:gap-3 max-lg:gap-2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6"
            >
              NDA SDK - Bộ công cụ giải pháp tích hợp đa nền tảng
            </motion.span>
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
              }}
              className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs"
            >
              Là bộ công cụ hỗ trợ tích hợp do đội ngũ PILA phát triển, NDA SDK
              giúp các nhà phát triển dễ dàng kết nối các chức năng cốt lõi của
              nền tảng như định danh số, xác thực dữ liệu và truy xuất thông tin
              vào ứng dụng của mình. Được thiết kế linh hoạt và thân thiện, NDA
              SDK tương thích với nhiều nền tảng phổ biến như Kotlin Native,
              Swift, React Native, Flutter giúp tiết kiệm thời gian và công sức
              trong quá trình triển khai.
            </motion.span>

            <div className="mt-[11px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
              >
                <div className="flex gap-3 items-center max-lg:gap-1">
                  <div>
                    <Icons.buildingSetting />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Tuân thủ các tiêu chuẩn toàn cầu
                  </span>
                </div>
                <div className="flex gap-3 items-center min-w-[175px] max-lg:gap-1 max-lg:min-w-[160px]">
                  <div>
                    <Icons.buildingTransfer />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Hỗ trợ và cập nhật liên tục
                  </span>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.1,
                }}
                className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]"
              >
                <div className="flex gap-3 items-center max-lg:gap-1">
                  <div>
                    <Icons.buildingShieldPhone />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Triển khai nhanh chóng, tích hợp linh hoạt
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
            }}
            className="flex justify-center items-center w-[670px] max-2xl:w-[550px]
          max-xl:w-[560px] max-lg:w-[380px]"
          >
            <img
              src="/images/nda-sdk.webp"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
