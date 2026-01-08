"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  const cards = [
    { title: "Cattle Processing", category: "Livestock Processing", price: "45,000", note: "Rate per animal" },
    { title: "Goat / Sheep Processing", category: "Livestock Processing", price: "8,000", note: "Rate per animal" },
    { title: "Chicken Processing", category: "Poultry Processing", price: "3,000", note: "Rate per bird" },
    { title: "Cold Room Storage", category: "Poultry & Storage", price: "5,000", note: "Per carcass / day" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }, // cards come in one by one
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  const priceVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen">
      <div className="min-h-screen flex flex-col lg:flex-row font-sans">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 p-8 md:p-16 bg-[#D7A34A] text-white flex flex-col justify-center relative z-10"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Ekhaya Abattoir <br /> Processing Price List
          </h1>

          <p className="text-lg md:text-xl mb-8">
            We provide the highest quality livestock and poultry processing
            services with transparent pricing.
          </p>

          <ul className="space-y-4 text-base md:text-lg list-disc ml-6">
            <li className="font-medium">Livestock Slaughtering and Preparation</li>
            <li className="font-medium">Cold Storage and Carcass Management</li>
            <li className="font-medium">Custom Packaging and Vacuum Sealing</li>
          </ul>

          <div className="mt-12">
            <a
              href="#"
              className="text-lg md:text-xl font-bold border-b-2 border-white hover:border-darkGrey transition"
            >
              ekhaya-abattoir.com
            </a>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center space-y-6 bg-white"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="w-full"
            >
              <ServiceCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  category,
  price,
  note,
}: {
  title: string;
  category: string;
  price: string;
  note: string;
}) {
  return (
    <div className="service-box bg-white w-full max-w-md p-6 rounded-xl flex justify-between items-center shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div>
        <p className="text-xl font-bold text-darkGrey">{title}</p>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-right"
      >
        <p className="text-2xl font-extrabold text-panelOrange">
          MWK {price}
        </p>
        <p className="text-sm text-gray-500">{note}</p>
      </motion.div>
    </div>
  );
}
