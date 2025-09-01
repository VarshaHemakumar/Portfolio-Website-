"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay"; 


const navLinks = [
  { title: "About me",   path: "/#about" },
  { title: "Experience", path: "/#experience" },
  { title: "Education",  path: "/#education" },
  { title: "Projects",   path: "/#projects" },
  { title: "Contact me", path: "/#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="
          mx-auto max-w-6xl px-4
          mt-3 rounded-2xl
          border border-white/10
          bg-black/40 backdrop-blur-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex items-center justify-between py-3">
          {}
          <Link href="/" className="text-xl md:text-2xl font-extrabold text-white">
            VH
          </Link>

          {}
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                aria-label="Open menu"
                onClick={() => setNavbarOpen(true)}
                className="flex items-center rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white/90 hover:bg-white/15"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                aria-label="Close menu"
                onClick={() => setNavbarOpen(false)}
                className="flex items-center rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white/90 hover:bg-white/15"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          {}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
              {}
              <li>
                <Link
                  href="/projects"
                  className="text-sm font-semibold text-white/85 hover:text-white"
                >
                  All Projects →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {}
        {navbarOpen ? (
          <div className="pb-3 md:hidden">
            <MenuOverlay links={navLinks} onItemClick={() => setNavbarOpen(false)} />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
