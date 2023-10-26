"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/constants";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {navLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <Link
            key={link.route}
            href={link.route}
            className={`${
              isActive ? "primary-gradient rounded-lg text-white" : "text-black"
            } flex items-center justify-start gap-4 bg-transparent p-4 `}
          >
            <p
              className={`${
                isActive
                  ? "text-[18px] font-bold leading-[140%]"
                  : "text-[18px] font-medium leading-[25.2px]"
              }`}
            >
              {link.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className=" invert sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className=" border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/site-logo.svg"
            width={23}
            height={23}
            alt="logo"
          />
          <p className="font-mono text-xl font-bold ">Ravyar</p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={10}
                  key={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
