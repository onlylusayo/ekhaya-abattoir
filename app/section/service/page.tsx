"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCow,
  FaShieldHeart,
  FaTruck,
  FaClipboardCheck,
} from "react-icons/fa6";

// Variants for fade-up text
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Variants for images sliding in
const fadeLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const fadeRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Service Image Wrapper (consistent height)
const ServiceImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-[360px] md:h-[360px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[590px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/bg-service.png"
            alt="Ekhaya Abattoir Services"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-white text-[40px] md:text-[54px] font-heading font-bold mb-4"
          >
            Professional Meat Processing Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-gray-200 max-w-[650px] text-[18px]"
          >
            Ekhaya Abattoir delivers regulated, hygienic, and humane slaughtering
            services designed to protect public health while supporting farmers,
            butcheries, and meat distributors. We combine speed, expertise, and
            transparency to provide meat processing that you can trust.
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[34px] font-heading font-bold mb-16 text-center"
          >
            Our Service Process
          </motion.h2>

          {/* SERVICE 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-2 gap-14 mb-24 items-center"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaCow /> Livestock Reception & Handling
              </h3>
              <p className="text-gray-600 mb-4">
                Animals are received in pens designed to reduce stress and injury,
                shaded, hydrated, and cleaned regularly. We ensure their welfare
                is maintained throughout the process.
              </p>
              <p className="text-gray-600 mb-4">
                Detailed records are kept for each animal, guaranteeing traceability,
                accountability, and peace of mind for farmers and distributors.
              </p>
              <p className="text-gray-600">
                This careful attention ensures healthier meat and a smoother processing workflow.
              </p>
            </motion.div>

            <motion.div variants={fadeRight} transition={{ duration: 0.8 }}>
              <ServiceImage src="/images/live-stock.png" alt="Livestock Handling" />
            </motion.div>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-2 gap-14 mb-24 items-center"
          >
            <motion.div variants={fadeLeft} transition={{ duration: 0.8 }}>
              <ServiceImage src="/images/slaughtering.png" alt="Humane Slaughtering" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaShieldHeart /> Humane Slaughtering & Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Slaughtering is conducted humanely by trained professionals using
                approved methods. Every step prioritizes animal welfare and hygiene.
              </p>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art processing areas feature stainless steel
                equipment and clearly separated clean and unclean zones.
              </p>
              <p className="text-gray-600">
                This process ensures meat is safe, high quality, and traceable from farm to table.
              </p>
            </motion.div>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-2 gap-14 mb-24 items-center"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaClipboardCheck /> Inspection & Quality Assurance
              </h3>
              <p className="text-gray-600 mb-4">
                Every carcass is inspected by qualified personnel to ensure it meets
                food safety and hygiene standards.
              </p>
              <p className="text-gray-600 mb-4">
                Any abnormalities are promptly addressed according to regulatory
                guidelines, maintaining the highest quality assurance.
              </p>
              <p className="text-gray-600">
                Our meticulous inspections provide confidence for consumers, wholesalers, and retailers.
              </p>
            </motion.div>

            <motion.div variants={fadeRight} transition={{ duration: 0.8 }}>
              <ServiceImage src="/images/attachment-meat.webp" alt="Meat Inspection" />
            </motion.div>
          </motion.div>

          {/* SERVICE 4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            <motion.div variants={fadeLeft} transition={{ duration: 0.8 }}>
              <ServiceImage src="/images/cold-sto.png" alt="Cold Storage" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaTruck /> Weighing, Storage & Collection
              </h3>
              <p className="text-gray-600 mb-4">
                Carcasses are accurately weighed, packaged, and stored in temperature-controlled
                areas to maintain freshness and quality.
              </p>
              <p className="text-gray-600 mb-4">
                Meat is prepared for dispatch to retailers, butcheries, or collection by farmers,
                ensuring efficient delivery without compromising hygiene.
              </p>
              <p className="text-gray-600">
                Our optimized handling ensures fast turnaround and maximum safety from processing to delivery.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="bg-gray-50 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[30px] font-heading font-bold mb-6"
          >
            Compliance & Public Health Commitment
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 text-[17px]">
            Ekhaya Abattoir follows strict hygiene protocols and fully complies with meat inspection and food safety regulations, ensuring consumer safety at every stage. Our team continuously monitors procedures and updates standards to maintain excellence in every aspect of meat processing.
          </motion.p>
        </motion.div>
      </section>

    </main>
  );
}
