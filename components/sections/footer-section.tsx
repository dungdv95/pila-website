"use client";

export default function FooterSection() {
  return (
    <section className="mt-8 overflow-hidden bg-footer">
      <div className="container mx-auto px-[100px] max-2xl:px-4 max-xl:px-2 py-[60px]">
        <div className="flex flex-col gap-[80px]">
          <div className="grid grid-cols-3 gap-[60px]">
            <div className="col-span-1">
              <div className="w-[300px] max-xl:w-[200px]">
                <img
                  src="/images/pila-logo-ft.png"
                  className=" object-contain"
                />
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-[72px] max-2xl:gap-[50px] max-xl:gap-[30px]">
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
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[60px]">
            <div className="col-span-1 flex flex-col gap-[30px]">
              <span className="text-[#0D152E] text-2xl leading-8 font-semibold">
                Hãy cùng nhau kiến tạo niềm tin số!
              </span>
              <span className="text-[#1E1E1E] text-lg leading-7">
                Chúng tôi mời gọi cá nhân, doanh nghiệp và tổ chức cùng xây dựng
                môi trường số minh bạch, an toàn và đáng tin cậy. Bằng cách áp
                dụng các nền tảng định danh và quản trị dữ liệu bảo mật, chúng
                ta cùng thúc đẩy nền kinh tế số phát triển bền vững và hiệu quả.
              </span>
            </div>
            <div className="col-span-2 flex gap-[30px] items-start">
              <div className="flex flex-col gap-6">
                <span className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold">
                  Liên hệ
                </span>

                <span className="text-[#1E1E1E] text-lg leading-7">
                  info@pila.vn
                </span>
                <span className="text-[#1E1E1E] text-lg leading-7">
                  37 Trần Bình Trọng, Nguyễn Du,
                  <br />
                  Hai Bà Trưng, Hà Nội
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <span className="mt-1.5 text-[#0D152E] text-2xl leading-8 font-semibold">
                  Sản phẩm
                </span>

                <span className="text-[#1E1E1E] text-lg leading-7">
                  NDAChain - Nền tảng blockchain quốc gia
                </span>
                <span className="text-[#1E1E1E] text-lg leading-7">
                  NDATrace - Nền tảng truy xuất xác thực nguồn gốc
                </span>
                <span className="text-[#1E1E1E] text-lg leading-7">
                  NDAKey - Ứng dụng định danh phi tập trung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
