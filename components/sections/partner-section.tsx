"use client";

import { Icons } from "../icons";
import { Separator } from "../ui/separator";

const listPartner = [
  {
    id: 1,
    title: "Dược phẩm",
    description:
      "Dự án thí điểm Định danh - Xác thực - Truy xuất nguồn gốc sản phẩm thực phẩm chức năng",
    imges: [
      {
        code: "eco",
        icon: <Icons.partnerEcoIcon />,
      },
    ],
  },
  {
    id: 2,
    title: "Tài chính",
    description: "Tự động hóa quy trình KYC thông qua tích hợp NDAChain",
    imges: [
      {
        code: "tech",
        icon: <Icons.partnerTechIcon />,
      },
      {
        code: "pvcb",
        icon: <Icons.partnerPvcbIcon />,
      },
    ],
  },
  {
    id: 3,
    title: "Tài chính",
    description: "Tích hợp Hệ sinh thái Định danh xuyên\nNgân hàng",
    imges: [
      {
        code: "napas",
        icon: <Icons.partnerNapasIcon />,
      },
    ],
  },
  {
    id: 4,
    title: "Hạ tầng số",
    description: "Dịch vụ xác thực danh tính do nhà mạng\ntriển khai",
    imges: [
      {
        code: "vnpt",
        icon: <Icons.partnerVnptIcon />,
      },
      {
        code: "viettel",
        icon: <Icons.partnerViettelIcon />,
      },
      {
        code: "mobi",
        icon: <Icons.partnerMobiIcon />,
      },
    ],
  },
  {
    id: 5,
    title: "Hạ tầng số",
    description:
      "Tự động hóa cấp phát thông tin định danh cho doanh nghiệp SME để hỗ trợ tiếp cận",
    imges: [
      {
        code: "misa",
        icon: <Icons.partnerMisaIcon />,
      },
    ],
  },
  {
    id: 6,
    title: "Y tế",
    description: "Cấp phát hồ sơ sức khỏe số thông qua\nNDAKey",
    imges: [
      {
        code: "ta",
        icon: <Icons.partnerTaIcon />,
      },
    ],
  },
];

export default function PartnerSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="relative flex flex-col gap-[100px]">
          <div className="flex flex-col gap-4 items-center">
            <span className="text-[#181818] font-bold text-[36px] leading-11 tracking-[-0.72px] max-lg:text-2xl">
              Đối tác chiến lược
            </span>
            <span className="text-center text-[#202A3D] text-lg leading-7 max-lg:text-base">
              PILA thiết lập các mối quan hệ hợp tác chiến lược sâu rộng với các
              đơn vị đầu ngành
              <br />
              trong khu vực công và tư, nhằm thúc đẩy việc áp dụng và triển khai
              hạ tầng tin cậy số
              <br />
              trên phạm vi toàn nền kinh tế.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[31px] max-xl:gap-4 max-lg:grid-cols-2 max-lg:gap-5">
            {listPartner.map((item) => (
              <div
                key={item.id}
                className="p-6 flex flex-col gap-[22px] border border-[#AED0FF] rounded-[8px] bg-linear-to-b from-[#FFFFFFCC] to-[#FFFFFF00]"
              >
                <span className="text-center text-[#202A3D] font-bold text-xl leading-[30px] max-xl:text-lg">
                  {item.title}
                </span>
                <Separator className="m-0 mt-1.5 bg-[#E9EAEB]" />
                <div className="h-10 flex justify-center items-center gap-2">
                  {item.imges.map((img) => (
                    <div key={img.code} className="h-fit">
                      {img.icon}
                    </div>
                  ))}
                </div>
                <span className="mt-[18px] text-[#202A3D] text-center text-base leading-6 whitespace-pre-line max-xl:text-xs">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full absolute bottom-[-5%] left-0 max-2xl:bottom-[-5%] max-xl:bottom-[1%] max-lg:bottom-[15%]">
            <img src="/images/map-earth.png" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
