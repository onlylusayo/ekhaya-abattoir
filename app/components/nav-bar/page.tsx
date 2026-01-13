"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "Impact", href: "/impact" },
    { name: "Contact", href: "/contact" },
  ];

  // Split links: first half left, second half right
  const leftLinks = navItems.slice(0, 2);
  const rightLinks = navItems.slice(2);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-white px-8 py-2 rounded-full flex items-center justify-between shadow-lg border border-gray-100">
        
        {/* Left Links */}
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

        {/* Logo in Center */}
        <div className="flex items-center">
          <Image
            src="/images/logo-ab.png"
            alt="Ekhaya Abattoir Logo"
            width={90}
            height={50}
          />
        </div>

        {/* Right Links */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-800 text-2xl ml-2">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Pop-Out Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-white rounded-xl shadow-2xl z-50 w-11/12 max-w-sm p-8 flex flex-col items-center space-y-6"
            >
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
