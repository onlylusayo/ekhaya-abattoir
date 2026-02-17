'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Leaf, Recycle } from 'lucide-react';

export default function TechnologyPage() {

  const techSections = [
    // {
    //   title: 'Humane Slaughter Technology',
    //   desc: 'Ekhaya Abattoir uses modern stunning and handling equipment designed to ensure livestock are processed ethically, minimizing stress and improving meat quality.',
    //   img: '/images/humane-tech.jpg'
    // },
    {
      title: 'Industrial Cold Chain Systems',
      desc: 'Advanced refrigeration and blast chilling rapidly reduce carcass temperature to preserve freshness and prevent bacterial growth.',
      img: '/images/cold-chain.jpg'
    },
    {
      title: 'Automated Sanitation Systems',
      desc: 'High-pressure sterilization and automated cleaning cycles maintain strict hygiene across all processing zones.',
      img: '/images/sanitation.jpg'
    },
    {
      title: 'Digital Carcass Traceability',
      desc: 'Each animal is digitally tracked through our system, ensuring transparency from farm to distribution.',
      img: '/images/traceability.jpg'
    },
    {
      title: 'Smart Temperature Monitoring',
      desc: 'Real-time sensors ensure storage and processing environments remain within regulated safety thresholds.',
      img: '/images/temperature.jpg'
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100vh] flex items-center px-6 overflow-hidden bg-black text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/technology-hero.jpg"
            alt="Abattoir technology"
            fill
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Technology at <span className="text-[#D7A34A]">Ekhaya Abattoir</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              We integrate modern processing systems, cold-chain innovations,
              and digital safety controls to deliver safe, high-quality,
              ethically processed meat products.
            </p>

            <div className="flex gap-4">
              {/* <button className="bg-[#D7A34A] px-7 py-3 rounded-xl font-medium hover:opacity-90 transition">
                Learn More
              </button>

              <button className="border border-white px-7 py-3 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition">
                Our Process
              </button> */}
            </div>
          </motion.div>

        </div>
      </section>


      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built on Innovation and Precision
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Technology plays a central role in ensuring food safety,
            operational efficiency, and environmental responsibility.
            Our facility combines automated equipment, real-time monitoring,
            and strict compliance systems to support farmers,
            distributors, and consumers across the livestock value chain.
          </p>
        </div>
      </section>


      {/* TECHNOLOGY GRID */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {techSections.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">

                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-7 space-y-4">
                  <h3 className="text-xl font-semibold">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* SUSTAINABILITY */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Sustainability and Environmental Technology
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: 'Eco Friendly Waste Management',
                desc: 'Organic waste is processed responsibly using controlled disposal and recycling systems that reduce environmental impact.'
              },
              {
                icon: Recycle,
                title: 'Water Recycling Systems',
                desc: 'Water purification and recycling technologies reduce consumption during sanitation and processing.'
              },
              {
                icon: CheckCircle,
                title: 'Regulatory Compliance Systems',
                desc: 'Automated compliance monitoring ensures adherence to national and international meat safety standards.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-4">
                  <item.icon className="w-8 h-8 text-[#D7A34A]" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#D7A34A] text-white py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Technology You Can Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-lg leading-relaxed"
        >
          Ekhaya Abattoir continuously invests in advanced processing technology
          to deliver safe, high-quality meat products while supporting farmers
          and protecting consumers.
        </motion.p>
      </section>

    </div>
  );
}
