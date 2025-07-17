"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icons } from "../icons";

const listNav = [
  {
    id: 1,
    name: "Tầm nhìn",
    href: "#vision",
  },
  {
    id: 2,
    name: "Ứng dụng",
    href: "#application",
  },
  {
    id: 3,
    name: "Sản phẩm",
    href: "#product",
  },
  {
    id: 4,
    name: "Đối tác",
    href: "#partner",
  },
  {
    id: 5,
    name: "Công nghệ",
    href: "#technology",
  },
];

export default function HeaderSection() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto pt-7 px-[100px] max-2xl:px-4 max-xl:px-2">
        <div className="px-10 py-4 flex h-[74px] items-center justify-between bg-white rounded-full">
          <div className="flex items-center gap-3">
            <div>
              <Icons.pilaLogoIcon />
            </div>
            <div>
              <Icons.pilaTextIcon />
            </div>
          </div>

          <nav className="flex items-center gap-7">
            {listNav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-[#0D152E] text-base font-medium leading-[100%]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
