import { navLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between gap-6 p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/site-logo.svg"
          width={23}
          height={23}
          alt="logo"
          className="w-full"
        />
        <p className="font-mono text-xl font-bold ">Ravyar</p>
      </Link>
      <div className=" hidden justify-between gap-6 md:flex">
        {navLinks.map((link) => (
          <Link href={link.route} key={link.label}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex justify-between gap-6">
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
      <MobileNav />
    </nav>
  );
};

export default Navbar;
