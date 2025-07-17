"use client";

export default function MissionSection() {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(257.37deg, #EAFFFF 7.91%, #E1FFF5 24.07%, #F9FFFD 46.05%)",
      }}
    >
      <div className="container mx-auto relative flex px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="border-l border-gradient pl-5 max-w-[548px] flex flex-col gap-4 text-[#1E1E1E]">
          <div className="flex">
            <h1 className="h-[60px] font-display font-bold text-[36px] leading-[44px] tracking-[-0.02em] bg-gradient-to-r from-[#181818] via-[#7E7E7E] to-[#7E7E7E] text-transparent bg-clip-text">
              Sứ mệnh
            </h1>
          </div>

          <div>
            PILA cam kết xây dựng các giải pháp định danh số phi tập trung (DID)
            như một nền tảng cốt lõi để giải quyết các thách thức của thế giới
            số; từ bảo mật, minh bạch đến an toàn thông tin.
          </div>

          <div>
            Bằng kinh nghiệm công nghệ và năng lực ứng dụng các giải pháp tiên
            tiến như
          </div>
          <ul className="!list-disc list-inside custom-list">
            <li className="mb-1 ">Blockchain </li>
            <li className="mb-1 ">Bảo vệ thông tin cá nhân</li>
            <li className="mb-1 ">Ngăn chặn các hành vi gian lận</li>
            <li className="mb-1 ">Tích hợp rộng rãi</li>
          </ul>
          <div>
            Chúng tôi kiến tạo một môi trường số an toàn, minh bạch, nơi dữ liệu
            được kiểm chứng, giao dịch được tin cậy, và người dân, doanh nghiệp,
            tổ chức có thể tương tác, hợp tác hiệu quả trong nền kinh tế số bền
            vững
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%+100px)] top-0 -right-24 ">
        <img src="images/mission-pila.png" className="h-full"></img>
      </div>
    </section>
  );
}
