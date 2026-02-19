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
    { name: "Services", href: "/service" },
    { name: "Technology", href: "/technology" },
    { name: "Contact", href: "/contact" },
  ];

  const leftLinks = navItems.slice(0, 2);
  const rightLinks = navItems.slice(2);

  // Hide navbar on scroll down
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
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50"
    >
      {/* NAVBAR CONTAINER */}
      <div className="relative bg-white px-6 md:px-10 py-3 md:py-7 rounded-full shadow-lg border border-gray-100 flex items-center justify-between">

        {/* MOBILE: LOGO LEFT */}
        <div className="flex items-center md:hidden">
          <Link href="/" aria-label="Homepage">
            <Image
              src="/images/logo-ab.png"
              alt="Ekhaya Abattoir Logo"
              width={110}
              height={60}
              priority
              className="h-auto w-[90px]"
            />
          </Link>
        </div>

        {/* DESKTOP LEFT LINKS */}
        <ul className="hidden md:flex items-center space-x-8">
          {leftLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-slate-700 font-medium hover:text-[#D7A34A] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CENTER LOGO */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="Homepage">
            <Image
              src="/images/logo-ab.png"
              alt="Ekhaya Abattoir Logo"
              width={140}
              height={70}
              priority
              className="h-auto w-[110px]"
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-6">

          {/* DESKTOP RIGHT LINKS */}
          <ul className="hidden md:flex items-center space-x-8">
            {rightLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-slate-700 font-medium hover:text-[#D7A34A] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON (FAR RIGHT) */}
          <button
            className="md:hidden text-gray-800 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-1/2 -translate-x-1/2
                         bg-white rounded-2xl shadow-2xl z-50
                         w-[90%] max-w-sm py-8 px-6"
            >
              <div className="flex flex-col space-y-6 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-[#D7A34A] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
