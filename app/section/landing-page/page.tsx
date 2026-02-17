"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCow,
  FaSnowflake,
  FaDrumstickBite,
  FaCheck,
  FaCertificate,
  FaHandSparkles,
  FaStopwatch,
} from "react-icons/fa6";

export default function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "#ffffff",
    color: "#D7A34A",
    borderColor: "#D7A34A",
    transition: { duration: 0.3 },
  };

  return (
    <main className="font-sans">

      {/* HERO */}
      <header className="relative h-[700px] flex items-center text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/bgrou.png"
            alt="Ekhaya Abattoir"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 grid grid-cols-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="col-span-12 md:col-span-8"
          >
            <motion.h1
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[40px] md:text-[60px] font-heading font-bold leading-tight mb-6"
            >
            <br />
              Fresh. Safe. <br /> Hygienic Meat Processing.
            </motion.h1>

            <motion.p
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.6 }}
              className="text-[20px] max-w-[520px] mb-10 text-gray-200"
            >
              Ekhaya Abattoir sets the standard for quality slaughtering services.
              We ensure your livestock is processed with dignity, hygiene, and speed.
            </motion.p>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              className="flex flex-col md:flex-row gap-4 mb-12"
            >
              <motion.button
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
              >
                Book <br /> Slaughtering
              </motion.button>

              <motion.button
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
              >
                Contact  Us
              </motion.button>
            
            {/* <Link href="/contact">
              <motion.button
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
              >
                Contact  Us
              </motion.button>
            </Link> */}
            </motion.div>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              className="flex gap-8 items-center text-sm md:text-base font-medium"
            >
              {[{ icon: <FaCertificate />, label: "Certified" }, { icon: <FaHandSparkles />, label: "Hygienic" }, { icon: <FaStopwatch />, label: "Fast Service" }].map((item, idx) => (
                <motion.span
                  key={idx}
                  variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="flex items-center gap-2"
                >
                  {item.icon} {item.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ================= ABOUT ================= */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">

    {/* Text Content */}
    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-[40px] font-bold mb-6">
        About Ekhaya Abattoir
      </h2>
      <p className="text-gray-700 mb-4">
        Ekhaya Abattoir is a modern, fully-equipped slaughterhouse committed to providing
        safe, hygienic, and professional meat processing services.
      </p>
      <p className="text-gray-700 mb-4">
        We partner with farmers, butcheries, and distributors to ensure quality, traceability,
        and compliance at every stage of processing.
      </p>
      <p className="text-gray-700">
        Our operations prioritize animal welfare, public health, and responsible food handling.
      </p>
    </div>

    {/* Image */}
    <div className="flex-1 relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
      <Image
        src="/images/abt-pic.jpg"
        alt="About Ekhaya Abattoir"
        fill
        className="object-cover"
      />
    </div>
    
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-700/80 mt-12 max-w-xl mx-auto">
              From livestock processing to cold storage, we deliver safe and hygienic meat solutions.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Beef Slaughtering", desc: "Professional cattle processing with strict veterinary inspection.", img: "/images/slaughtering.jpeg", icon: <FaCow /> },
              { title: "Goat and Sheep", desc: "Quick and hygienic processing for small livestock.", img: "/images/p1.jpeg", icon: <FaCow /> },
              { title: "Cold Room Storage", desc: "Keep your meat fresh in our industrial-grade cold rooms.", img: "/images/storage.jpeg", icon: <FaSnowflake /> },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
                className="relative bg-white rounded-[2rem] shadow-lg overflow-hidden transition-all duration-300"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-8">{service.desc}</p>
                  <motion.a
                    href="#"
                    whileHover={buttonHover}
                    className="border-2 border-[#D7A34A] text-[#D7A34A] font-semibold px-3 py-2 rounded-full flex items-center gap-2 w-max transition-all"
                  >
                    Learn More <FaArrowRight />
                  </motion.a>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#D7A34A] text-white flex items-center justify-center rounded-full text-xl shadow-md">
                  {service.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[40px] font-semibold text-center mb-16 text-black">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />

            {["Booking", "Drop off", "Inspection", "Slaughter", "Process"].map(
              (step, i) => (
                <div key={i} className="bg-white p-4 flex flex-col items-center text-center z-10">
                  <div className="w-16 h-16 bg-white text-[#D7A34A] border-2 border-[#D7A34A] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-bold">{step}</h4>
                </div>
              )
            )}

            <div className="bg-white p-4 flex flex-col items-center text-center z-10">
              <div className="w-16 h-16 bg-[#D7A34A] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-white shadow-lg">
                <FaCheck />
              </div>
              <h4 className="font-bold">Pick up</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= How it works in details ================= */}
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* SECTION INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-20 text-center"
      >
        <h2 className="text-[40px] font-semibold text-black mb-4">
          Processing Standards and Operations
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ekhaya Abattoir operates as a controlled processing facility focused on
          animal welfare, hygiene, and traceability, ensuring that all meat
          entering the Ekhaya Farm-Foods supply chain meets strict quality
          standards.
        </p>
      </motion.div>


        {/* CONTENT BLOCKS */}
        <div className="space-y-24">
          {/* SLAUGHTER PROCESS */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#D7A34A]">
                Slaughter Process
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Slaughter at Ekhaya Abattoir is carried out in a controlled and
                humane manner, following approved animal welfare protocols.
                Processes are designed to minimize stress, maintain efficiency,
                and ensure consistency in meat quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/s-process.png"
                alt="Humane slaughter process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* HYGIENE & HANDLING */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE – LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/h-h.png"
              alt="Hygienic meat handling"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT – RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#D7A34A]">
              Hygiene and Handling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strict hygiene and handling protocols are enforced throughout the
              facility. This includes sanitation procedures, protective
              equipment usage, temperature control, and careful carcass
              handling to prevent contamination.
            </p>
          </motion.div>
        </div>


          {/* ECOSYSTEM ROLE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#D7A34A]">
                Role within the Ekhaya Ecosystem
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ekhaya Abattoir functions as a dedicated processing hub within the
                Ekhaya ecosystem. All processed meat is supplied exclusively to
                Ekhaya Farm-Foods, enabling full traceability from farm to retail
                and ensuring consistent quality across the value chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/eco-sy.png"
                alt="Ekhaya supply chain"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
