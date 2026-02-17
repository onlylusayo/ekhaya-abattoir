'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Truck } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

export default function ServicesPage() {

  const services = [
    {
      title: 'Beef Slaughtering',
      desc: 'Efficient and humane beef processing.',
      icon: '🥩',
      img: '/images/cow-sla.png'
    },
    {
      title: 'Goat and Sheep Processing',
      desc: 'Specialized handling for small livestock.',
      icon: '🐐',
      img: '/images/sheep-goat.png'
    },
    {
      title: 'Cold Room Storage',
      desc: 'Temperature-controlled preservation.',
      icon: '❄️',
      img: '/images/cold-.png'
    },
    {
      title: 'Veterinary Inspection',
      desc: 'Health checks and compliance.',
      icon: '⚕️',
      img: '/images/veterinary-inspection.png'
    },
    {
      title: 'Carcass Handling',
      desc: 'Safe and hygienic management.',
      icon: '📦',
      img: '/images/carcass.png'
    },
  ];

  const brandColor = '#D7A34A';

  return (
    <div className="min-h-screen bg-white">

      {/* ================= MAIN HERO ================= */}
      <section className="relative bg-gray-900 text-white py-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Livestock Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            From humane slaughtering to cold storage, we provide end-to-end solutions for farmers and distributors.
          </p>
          {/* <button className="bg-[#D7A34A] hover:bg-[#c69236] text-white px-8 py-4 rounded-lg font-semibold transition">
            Get Started
          </button> */}
        </motion.div>

        {/* Decorative Circle */}
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-0 bottom-0 w-72 h-72 bg-[#D7A34A]/20 rounded-full"
        /> */}
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.7 } },
              }}
            >
              <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6 space-y-4">
                  <span
                    className="inline-flex items-center justify-center bg-gold text-white text-sm font-semibold px-3 py-1 rounded-md transition-transform group-hover:scale-110"
                  >
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <button className="bg-gold hover:bg-gold/80 text-white px-5 py-2 rounded-lg transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS / PROCESS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[40px] font-semibold text-center mb-16 text-black">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative">

            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />

            {['Booking', 'Drop off', 'Inspection', 'Slaughter', 'Process'].map((step, i) => (
              <div key={i} className="bg-white p-4 flex flex-col items-center text-center z-10">
                <div
                  className="w-16 h-16 bg-white text-[#D7A34A] border-2 border-[#D7A34A] rounded-full flex items-center justify-center text-xl font-bold mb-4"
                >
                  {i + 1}
                </div>
                <h4 className="font-bold">{step}</h4>
              </div>
            ))}

            <div className="bg-white p-4 flex flex-col items-center text-center z-10">
              <div
                className="w-16 h-16 bg-[#D7A34A] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-white shadow-lg"
              >
                <FaCheck />
              </div>
              <h4 className="font-bold">Pick up</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY ASSURANCE ================= */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ title: 'Hygiene Standards', desc: 'Rigorous cleaning protocols.' },
              { title: 'Veterinary Inspections', desc: 'Expert health evaluations.' },
              { title: 'Temperature Control', desc: 'Precise monitoring systems.' }].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition space-y-4">
                  <CheckCircle className="w-8 h-8 text-gold" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
