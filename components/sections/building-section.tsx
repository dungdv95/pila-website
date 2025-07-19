"use client";

import { Icons } from "../icons";

export default function BuildingSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-[200px] max-2xl:px-20 max-xl:px-6 flex flex-col gap-11">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[#181818] font-bold text-[36px] leading-11 tracking-[-0.72px] max-lg:text-2xl">
            Xây dựng hạ tầng niềm tin cho thế giới số
          </span>
          <span className="text-[#202A3D] text-lg leading-7 max-lg:text-base">
            Thúc đẩy phát triển kinh tế số - Xã hội số
          </span>
        </div>
        <div className="relative flex items-center gap-[30px] max-xl:gap-3 max-lg:gap-2">
          <div className="w-1/2 flex flex-col gap-6 max-xl:gap-3 max-lg:gap-2">
            <span className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6">
              NDAChain - Nền tảng Blockchain quốc gia
            </span>
            <span className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              NDAChain cung cấp hạ tầng Bảo mật, Phi tập trung, chuẩn quốc tế
              cho Định danh số, Giao dịch dữ liệu và các ứng dụng trong Chuyển
              đổi số. Trên nền tảng NDAChain, Hệ thống Định danh Phi tập trung
              NDADID được xây dựng nhằm đảm bảo Xác thực danh tính số An toàn,
              Minh bạch, Chống gian lận trên không gian mạng và bảo vệ quyền
              riêng tư của người sử dụng
            </span>
            <div className="mt-[11px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3">
              <div className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
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
              </div>
              <div className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
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
              </div>
            </div>
          </div>
          <div
            className=" flex justify-center items-center w-[700px] max-2xl:w-[550px]
          max-xl:w-[600px] max-lg:w-[430px]"
          >
            <img
              src="/images/building-ht.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="absolute bottom-[-30%] left-[-38%] w-[1300px] max-2xl:left-[-40%] max-2xl:bottom-[-55%] max-xl:w-[1100px] max-xl:left-[-45%] max-xl:bottom-[-37%] 
          max-lg:w-[950px] max-lg:left-[-57%] max-lg:bottom-[-48%]"
          >
            <img
              src="/images/building-bg.png"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center gap-12 max-xl:gap-8 max-lg:gap-6">
          <div
            className="flex justify-center items-center w-[650px] max-2xl:w-[550px]
          max-xl:w-[500px] max-lg:w-[430px]"
          >
            <img
              src="/images/building-phone.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-6 max-lg:gap-3">
            <span className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6">
              NDAKey - Ứng dụng định danh phi tập trung quốc gia
            </span>
            <span className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              NDAKey là ứng dụng nhận dạng số phi tập trung Quốc gia, giúp xác
              thực danh tính an toàn thông qua nền tảng nhận dạng số phi tập
              trung (DID) quốc gia, sử dụng công nghệ tiên tiến như chuỗi khối,
              trí tuệ nhân tạo, học máy, sinh trắc học và mã hoá dữ liệu.
            </span>

            <div className="mt-4 grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
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
            </div>
            <div className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
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
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-[30px] max-xl:gap-3 max-lg:gap-2">
          <div className="w-1/2 flex flex-col gap-6 max-xl:gap-3 max-lg:gap-2">
            <span className="text-[#181818] text-2xl leading-8 font-bold max-xl:text-xl max-lg:text-[17px] max-lg:leading-6">
              NDA SDK - Bộ công cụ giải pháp tích hợp đa nền tảng
            </span>
            <span className="text-[#181818] text-base leading-6 max-xl:text-sm max-lg:text-xs">
              Là bộ công cụ hỗ trợ tích hợp do đội ngũ PILA phát triển, NDA SDK
              giúp các nhà phát triển dễ dàng kết nối các chức năng cốt lõi của
              nền tảng như định danh số, xác thực dữ liệu và truy xuất thông tin
              vào ứng dụng của mình. Được thiết kế linh hoạt và thân thiện, NDA
              SDK tương thích với nhiều nền tảng phổ biến như Kotlin nativce,
              Swift, giúp tiết kiệm thời gian và công sức trong quá trình triển
              khai.
            </span>
            <div className="mt-[11px] flex flex-col gap-6 max-xl:gap-4 max-lg:gap-3">
              <div className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
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
              </div>
              <div className="grid grid-cols-2 gap-x-6 max-lg:gap-[10px]">
                <div className="flex gap-3 items-center max-lg:gap-1">
                  <div>
                    <Icons.buildingShieldPhone />
                  </div>
                  <span className="text-[#181818] text-sm leading-5 max-lg:text-xs">
                    Triển khai nhanh chóng, tích hợp linh hoạt
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[670px] max-2xl:w-[550px]
          max-xl:w-[560px] max-lg:w-[380px]"
          >
            <img
              src="/images/nda-sdk.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
