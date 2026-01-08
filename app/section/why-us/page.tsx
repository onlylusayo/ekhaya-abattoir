"use client"; // Must be the very first line

import { motion } from "framer-motion";

export function WhyUsSection() {
  const cards = [
    {
      title: "Uncompromised Hygiene & Safety",
      text: "Our operations follow strict sanitation protocols, controlled processing environments, and regular inspections to ensure meat safety at every stage.",
      color: "bg-[#D7A34A]",
    },
    {
      title: "Modern & Humane Processing",
      text: "We use modern equipment and humane handling methods that respect animal welfare while maintaining efficiency and quality output.",
      color: "bg-[#D7A34A]",
    },
    {
      title: "Fully Compliant & Certified",
      text: "All our services meet national food safety regulations and industry standards, giving our clients confidence and peace of mind.",
      color: "bg-[#D7A34A]",
    },
    {
      title: "Cold Chain Integrity",
      text: "Temperature-controlled storage and transportation preserve freshness, quality, and safety from processing to delivery.",
      color: "bg-[#D7A34A]",
    },
    {
      title: "Experienced Professionals",
      text: "Our skilled team brings years of industry experience, ensuring precision, accountability, and consistent service quality.",
      color: "bg-[#D7A34A]",
    },
    {
      title: "Client-Focused Service",
      text: "We offer flexible processing options, clear communication, and dependable turnaround times tailored to your business needs.",
      color: "bg-[#D7A34A]",
    },
  ];

  const primaryBtn =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 scale-105 border-2 border-white bg-[#D7A34A] text-white shadow-xl hover:scale-110";

  const secondaryBtn =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 border-[#D7A34A] bg-white text-[#D7A34A] hover:bg-[#D7A34A] hover:text-white";

  return (
    <section className="py-28 bg-[#f7fcfd]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Clients Trust Our Abattoir
          </h2>
          <p className="text-gray-600 text-lg">
            We combine strict hygiene standards, modern processing facilities,
            and regulatory compliance to deliver safe, reliable, and professional
            meat processing services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={`w-12 h-12 rounded-full ${card.color} mb-4 mx-auto`} />
              <h3 className="text-xl font-semibold mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
