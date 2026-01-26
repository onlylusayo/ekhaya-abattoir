"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Technology", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const leftLinks = navItems.slice(0, 2);
  const rightLinks = navItems.slice(2);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY && window.scrollY > 50);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >
      {/* NAV BAR */}
      <div className="bg-white px-8 py-2 rounded-full shadow-lg border border-gray-100">
        <div className="grid grid-cols-3 items-center">
          {/* LEFT LINKS */}
          <ul className="hidden md:flex items-center space-x-8 justify-start">
            {leftLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-slate-700 font-medium hover:text-[#18bef0] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-ab.png"
              alt="Ekhaya Abattoir Logo"
              width={90}
              height={50}
              priority
            />
          </div>

          {/* RIGHT LINKS / MOBILE MENU */}
          <div className="flex justify-end items-center">
            <ul className="hidden md:flex items-center space-x-8">
              {rightLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-700 font-medium hover:text-[#18bef0] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <button
              className="md:hidden text-gray-800 text-2xl ml-2"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-white rounded-xl shadow-2xl z-50 w-11/12 max-w-sm
                         p-8 flex flex-col items-center space-y-6"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-[#18bef0]"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
