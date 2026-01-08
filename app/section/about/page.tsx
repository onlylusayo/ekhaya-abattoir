"use client"

import { motion } from "framer-motion"
import {
  FaCircleCheck,
} from "react-icons/fa6"

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero / Intro Section (NO BACKGROUND IMAGE) */}
      <section className="h-[420px] flex items-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[52px] font-heading font-bold mb-4"
          >
            About Ekhaya Abattoir
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-gray-600 max-w-[600px] text-[18px]"
          >
            A trusted name in safe, hygienic, and efficient meat processing.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] md:text-[40px] font-heading font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
              Ekhaya Abattoir is a modern slaughterhouse dedicated to providing
              professional livestock processing services that meet strict hygiene
              and safety standards.
            </p>

            <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
              We work closely with farmers, butcheries, and meat distributors to
              ensure quality, traceability, and compliance at every stage of the
              processing chain.
            </p>

            <p className="text-gray-600 text-[17px] leading-relaxed">
              Our operations are built on respect for animals, public health
              protection, and responsible food handling practices.
            </p>
          </motion.div>

          {/* Value Highlights (No Image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-10"
          >
            <ul className="space-y-6 text-gray-700">
              {[
                "Humane livestock handling from arrival to processing",
                "Strict hygiene protocols across all facilities",
                "Trained professionals and modern equipment",
                "Transparent and accountable processing procedures",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCircleCheck className="text-black mt-1" />
                  <span className="text-[16px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>
    </main>
  )
}
