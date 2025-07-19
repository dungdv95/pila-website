"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";

const listInfra = [
  {
    id: 1,
    title: "Nền tảng chuyển đổi số",
    jobs: [
      "Công nghệ thông tin",
      "Viễn thông",
      "Dữ liệu",
      "Hạ tầng năng lượng",
      "Tài chính",
      "Ngân hàng",
      "Bảo hiểm",
      "Truyền thông",
    ],
  },
  {
    id: 2,
    title: "Văn hoá - thương mại",
    jobs: [
      "Giáo dục và đào tạo",
      "Y tế & chăm sóc sức khoẻ",
      "Du lịch",
      "Văn hoá & thể thao",
      "Lao động, an sinh xã hội",
    ],
  },
  {
    id: 3,
    title: "Sản xuất - thương mại - dịch vụ",
    jobs: [
      "Nông, lâm, thuỷ sản",
      "Chế biến, chế tạo",
      "Thương mại",
      "Kho vận & logistic",
    ],
  },
  {
    id: 4,
    title: "Bất động sản - đầu tư",
    jobs: ["Xây dựng", "Bất động sản & nhà ở", "Giao thông"],
  },
];

export default function InfrastructureSection() {
  return (
    <section className="pt-16 relative overflow-hidden">
      <div className="flex flex-col gap-[76px]">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-[#181818] text-4xl leading-11 font-bold tracking-[-0.72px] max-lg:text-2xl">
            Kiến thiết hạ tầng - định danh xác thực
          </span>
          <span className="text-[#202A3D] text-lg leading-7 max-lg:text-base">
            Xây dựng Hạ tầng tin cậy - Phát triển Kinh tế số bền vững
          </span>
        </div>
        <div className="bg-infra">
          <div className="pt-[47px] pb-9 container mx-auto relative flex gap-[30px] px-[100px] max-2xl:px-4 max-xl:px-2 max-2xl:gap-6 max-xl:gap-5 max-lg:gap-3">
            <div className="relative">
              <div className="min-w-[630px] max-xl:min-w-[530px] max-lg:min-w-[410px] grid grid-cols-2 gap-[30px] max-xl:gap-4">
                {listInfra.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "min-h-[340px] max-lg:min-h-[280px]",
                      item.id > 2
                        ? "parrent-border-top"
                        : "parrent-border-bottom"
                    )}
                  >
                    <div
                      className="h-full flex flex-col gap-4 inner-content px-[15px] py-[23px]
                    max-lg:px-[11px] max-lg:py-[19px] max-lg:gap-2"
                    >
                      <span className="text-[#2B2B2B] text-xl leading-[30px] font-semibold max-lg:text-base">
                        {item.title}
                      </span>
                      <div className="flex flex-col gap-3 max-lg:gap-1.5">
                        {item.jobs.map((job, index) => (
                          <div
                            key={`job_${index}`}
                            className="flex gap-2 items-center"
                          >
                            <div>
                              <Icons.arrowCircle className="size-3" />
                            </div>
                            <span className="text-[#2B2B2B] text-sm leading-5 max-lg:text-xs">
                              {job}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white shadow-xl h-[74px] w-[74px] rounded-full flex justify-center items-center">
                  <Icons.infraLogoIcons />
                </div>
              </div>
            </div>
            <div className="min-h-fit w-full relative flex justify-center">
              <div
                className="absolute w-[864px] top-[40px] left-[150px] max-[112rem]:left-[60px]
              max-2xl:w-[700px] max-2xl:top-[70px] max-xl:w-[560px] max-xl:top-[140px] max-xl:left-[10px]
              max-lg:w-[400px] max-lg:top-[150px]
              "
              >
                <img
                  src="/images/earth.png"
                  className=" w-full object-cover "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
