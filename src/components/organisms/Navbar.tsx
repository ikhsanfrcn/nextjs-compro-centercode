"use client";
import React, { useState } from "react";
import Logo from "../atoms/Logo";
import { MobileMenuButton } from "../molecules/MobileMenu";
import { NavbarLinks } from "../molecules/NavbarLinks";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <NavbarLinks />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <NavbarLinks isMobile />
        </div>
      )}
    </nav>
  );
};
