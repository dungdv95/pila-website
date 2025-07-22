"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const listNav = [
  {
    id: 1,
    name: "Tầm nhìn",
    href: "#vision",
    idSection: "vision",
  },
  {
    id: 2,
    name: "Ứng dụng",
    href: "#application",
    idSection: "application",
  },
  {
    id: 3,
    name: "Sản phẩm",
    href: "#product",
    idSection: "product",
  },
  {
    id: 4,
    name: "Đối tác",
    href: "#partner",
    idSection: "partner",
  },
  {
    id: 5,
    name: "Công nghệ",
    href: "#technology",
    idSection: "technology",
  },
];

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

export default function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
          }}
          className="py-6 px-4 bg-white/80"
        >
          <div className="flex justify-between items-center">
            <Link
              href=""
              onClick={(event) => {
                setMobileMenuOpen(false);
                wait().then(() => {
                  const el = document.getElementById("banner");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                });
                event.preventDefault();
              }}
              className="flex items-center gap-2"
            >
              <div>
                <Icons.mobilePilaLogoIcon />
              </div>
              <div>
                <Icons.mobilePilaTextIcon />
              </div>
            </Link>
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
              modal={true}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icons.mobileListMenuIcon className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="py-2 px-4 border-0"
              >
                <SheetHeader className="space-y-0">
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="p-0 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <Link
                      className="logo flex items-center py-4"
                      href=""
                      onClick={(event) => {
                        setMobileMenuOpen(false);
                        wait().then(() => {
                          const el = document.getElementById("banner");
                          if (el) {
                            el.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        });
                        event.preventDefault();
                      }}
                    >
                      <img
                        src="/images/pila-logo-ft.png"
                        className="inline-block h-8"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flow-root">
                    <div className="-my-6">
                      <div className="py-6">
                        {listNav.map((item) => (
                          <Link
                            key={item.name}
                            href={""}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                            onClick={(event) => {
                              setMobileMenuOpen(false);
                              wait().then(() => {
                                const el = document.getElementById(
                                  item.idSection
                                );
                                if (el) {
                                  const rect = el.getBoundingClientRect();
                                  const scrollTop =
                                    window.pageYOffset ||
                                    document.documentElement.scrollTop;
                                  const offset = 90; // số px muốn dịch xuống thêm
                                  const targetY = rect.top + scrollTop - offset;
                                  window.scrollTo({
                                    top: targetY,
                                    behavior: "smooth",
                                  });
                                }
                                // if (el) {
                                //   el.scrollIntoView({ behavior: "smooth" });
                                // }
                              });
                              event.preventDefault();
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </header>
    );
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto pt-7 px-[100px] max-2xl:px-4 max-xl:px-2">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
          }}
          className="px-10 py-4 flex h-[74px] items-center justify-between bg-white rounded-full"
        >
          <Link
            href=""
            onClick={(event) => {
              wait().then(() => {
                const el = document.getElementById("banner");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              });
              event.preventDefault();
            }}
            className="flex items-center gap-3"
          >
            <div>
              <Icons.pilaLogoIcon />
            </div>
            <div>
              <Icons.pilaTextIcon />
            </div>
          </Link>

          <nav className="flex items-center gap-7">
            {listNav.map((item) => (
              <Link
                key={item.id}
                href=""
                className="text-[#0D152E] text-base font-medium leading-[100%]"
                onClick={(event) => {
                  wait().then(() => {
                    const el = document.getElementById(item.idSection);
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      const scrollTop =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                      const offset = 105; // số px muốn dịch xuống thêm
                      const targetY = rect.top + scrollTop - offset;
                      window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                    // if (el) {
                    //   el.scrollIntoView({
                    //     behavior: "smooth",
                    //     block: "start",
                    //   });
                    // }
                  });
                  event.preventDefault();
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
