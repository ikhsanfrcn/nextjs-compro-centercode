"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/Button";

export const NavbarLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const pathname = usePathname(); // Dapatkan path saat ini

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={isMobile ? "space-y-1 px-2 pt-2 pb-3" : "flex space-x-4"}>
      {links.map(({ name, href }) => {
        const isActive = pathname === href; // Cek apakah path saat ini sama dengan href

        return (
          <Button
            key={name}
            href={href}
            className={`${
              isActive
                ? "text-black underline underline-offset-8"
                : "text-gray-500 hover:bg-black hover:text-white"
            } ${isMobile ? "block" : ""}`}
            ariaCurrent={isActive ? true : false}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
};
