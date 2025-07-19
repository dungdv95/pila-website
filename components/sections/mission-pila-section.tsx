"use client";

export default function MissionPilaSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-mission max-xl:py-14">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="flex items-center">
          <div className="w-1/2 flex flex-col gap-[31px] border-l border-gradient pl-8 max-xl:gap-6 max-lg:gap-4">
            <span className="font-bold text-[36px] leading-[44px] tracking-[-0.02em] bg-gradient-to-r from-[#181818] via-[#7E7E7E] to-[#7E7E7E] text-transparent bg-clip-text max-lg:text-xl">
              Sứ mệnh
            </span>
            <div className="flex flex-col gap-6 max-xl:gap-4">
              <span className="text-[#202A3D] text-lg leading-7 max-lg:text-base">
                PILA cam kết xây dựng các giải pháp định danh số phi tập trung
                (DID) như một nền tảng cốt lõi để giải quyết các thách thức của
                thế giới số; từ bảo mật, minh bạch đến an toàn thông tin.
              </span>
              <span className="text-[#202A3D] text-lg leading-7 max-lg:text-base">
                Bằng kinh nghiệm công nghệ và năng lực ứng dụng các giải pháp
                tiên tiến như
              </span>
              <ul className="!list-disc list-inside custom-list text-[#202A3D] text-lg leading-7 max-lg:text-base">
                <li className="mb-1 ">Blockchain </li>
                <li className="mb-1 ">Bảo vệ thông tin cá nhân</li>
                <li className="mb-1 ">Ngăn chặn các hành vi gian lận</li>
                <li className="mb-1 ">Tích hợp rộng rãi</li>
              </ul>
              <span className="text-[#202A3D] text-lg leading-7 max-lg:text-base">
                Chúng tôi kiến tạo một môi trường số an toàn, minh bạch, nơi dữ
                liệu được kiểm chứng, giao dịch được tin cậy, và người dân,
                doanh nghiệp, tổ chức có thể tương tác, hợp tác hiệu quả trong
                nền kinh tế số bền vững
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[1050px] top-[-380px] left-[-100px]
              max-2xl:w-[900px] max-2xl:top-[-310px] max-2xl:left-[-70px]
              max-xl:w-[800px] max-xl:top-[-280px] max-xl:left-[-20px]"
            >
              <img
                src="/images/mission.png"
                className=" w-full object-cover "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
