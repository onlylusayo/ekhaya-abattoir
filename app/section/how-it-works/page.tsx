"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaHandSparkles,
  FaStopwatch,
  FaClipboardCheck,
  FaTruck,
  FaShieldHeart,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <header className="relative h-[700px] flex items-center text-white overflow-hidden">
        {/* Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/bgrou.png"
            alt="Ekhaya Abattoir"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid grid-cols-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="col-span-12 md:col-span-8"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[42px] md:text-[62px] font-heading font-bold leading-tight mb-6"
            >
              Fresh. Safe. <br /> Hygienic Meat Processing.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[20px] max-w-[540px] mb-10 text-gray-200"
            >
              Ekhaya Abattoir provides professional slaughtering services that
              meet hygiene, safety, and regulatory standards — ensuring quality
              meat from farm to market.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white bg-[#D7A34A] text-white px-8 py-4 rounded-lg font-semibold shadow-xl transition-all duration-300"
              >
                Book Slaughtering
              </motion.button>

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-[#D7A34A] bg-white text-[#D7A34A] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Quick Trust Icons */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="flex flex-wrap gap-8 items-center text-sm md:text-base font-medium"
            >
              {[
                { icon: <FaCertificate />, label: "Certified Operations" },
                { icon: <FaHandSparkles />, label: "Strict Hygiene" },
                { icon: <FaStopwatch />, label: "Fast Turnaround" },
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  {item.icon} {item.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaShieldHeart />,
              title: "Public Health Focused",
              text: "Operations designed to protect consumers and communities.",
            },
            {
              icon: <FaClipboardCheck />,
              title: "Regulatory Compliance",
              text: "Aligned with livestock handling and food safety standards.",
            },
            {
              icon: <FaTruck />,
              title: "Reliable Processing Flow",
              text: "Organized intake, processing, and collection system.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="text-3xl text-[#D7A34A] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-[34px] font-heading font-bold mb-12"
          >
            How Our Service Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Arrival & Verification",
                text: "Livestock is received, documented, and prepared for processing.",
              },
              {
                step: "02",
                title: "Humane Processing",
                text: "Handled by trained staff using approved and hygienic methods.",
              },
              {
                step: "03",
                title: "Inspection & Collection",
                text: "Quality inspection followed by cold storage or collection.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 border rounded-xl"
              >
                <span className="text-[#D7A34A] font-bold text-xl">
                  {item.step}
                </span>
                <h3 className="font-semibold text-lg mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
