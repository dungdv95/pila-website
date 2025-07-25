"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { cn } from "@/lib/utils";

const listNav = [
  {
    id: 1,
    name: "Tầm nhìn",
    href: "#vision",
    idSection: "vision",
  },
  {
    id: 2,
    name: "Sứ mệnh",
    href: "#mission",
    idSection: "mission",
  },
  {
    id: 3,
    name: "Giá trị cốt lõi",
    href: "#corevalue",
    idSection: "corevalue",
  },
  {
    id: 4,
    name: "Ứng dụng",
    href: "#application",
    idSection: "application",
  },
  {
    id: 5,
    name: "Sản phẩm",
    href: "#product",
    idSection: "productSection",
  },
  {
    id: 6,
    name: "Đối tác",
    href: "#partner",
    idSection: "partner",
  },
];

const wait = () => new Promise((resolve) => setTimeout(resolve, 300));

export default function HeaderSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHeader />;
  }
  return <DesktopHeader />;
}

function DesktopHeader() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    listNav.forEach((nav) => {
      const element = document.getElementById(nav.idSection);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto pt-7 px-[100px] max-2xl:px-4 max-xl:px-2">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
          }}
          className="px-10 py-4 flex h-[74px] items-center justify-between bg-white rounded-full"
        >
          <div
            onClick={(event) => {
              wait().then(() => {
                const el = document.getElementById("banner");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              });
              event.preventDefault();
            }}
            className="cursor-pointer flex items-center gap-3"
          >
            <div>
              <Icons.pilaLogoIcon />
            </div>
            <div>
              <Icons.pilaTextIcon />
            </div>
          </div>

          <nav className="flex items-center gap-7">
            {listNav.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "cursor-pointer text-[#0D152E] text-base font-semibold leading-[100%] hover:text-blue-600",
                  activeSection === item.idSection && "text-blue-600"
                )}
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
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry.target.id", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    listNav.forEach((nav) => {
      const element = document.getElementById(nav.idSection);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
        }}
        className="py-4 px-4 bg-white/80 shadow-sm"
      >
        <div className="flex justify-between items-center">
          <div
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
          </div>
          <Sheet
            open={mobileMenuOpen}
            onOpenChange={setMobileMenuOpen}
            modal={true}
          >
            <SheetTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="bg-white h-10 w-10 rounded-full"
              >
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
                  <div
                    className=" flex items-center py-4"
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
                  </div>
                </div>
                <div className="flow-root">
                  <div className="-my-6">
                    <div className="py-6">
                      {listNav.map((item) => (
                        <div
                          key={item.name}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold",
                            activeSection === item.idSection && "text-blue-600"
                          )}
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
                        </div>
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
