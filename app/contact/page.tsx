'use client';

import { motion } from 'framer-motion';
import { Truck, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black text-white px-6 md:px-12 text-center overflow-hidden">

        {/* subtle background overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Get in Touch
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            We’re here to answer your questions and schedule your livestock
            processing services.
          </p>

          <button className="bg-[#D7A34A] hover:bg-[#c69236] text-white px-8 py-4 rounded-xl font-semibold transition">
            Contact Us Today
          </button>
        </motion.div>
      </section>


      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Send Us a Message
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="font-semibold mb-2 block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-2 border-gray-300 rounded-xl p-4 focus:border-[#D7A34A] outline-none transition"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="font-semibold mb-2 block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-2 border-gray-300 rounded-xl p-4 focus:border-[#D7A34A] outline-none transition"
              />
            </motion.div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="font-semibold mb-2 block text-gray-700">Message</label>
              <textarea
                placeholder="Your message..."
                rows={6}
                className="w-full border-2 border-gray-300 rounded-xl p-4 focus:border-[#D7A34A] outline-none transition"
              />
            </motion.div>

            <motion.div
              className="md:col-span-2 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-[#D7A34A] hover:bg-[#c69236] text-white px-8 py-4 rounded-xl font-semibold transition">
                Send Message
              </button>
            </motion.div>

          </form>
        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <Mail className="w-8 h-8 text-[#D7A34A] mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Email</h4>
            <p>info@livestockservices.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <Phone className="w-8 h-8 text-[#D7A34A] mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Phone</h4>
            <p>+265 123 456 789</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <Truck className="w-8 h-8 text-[#D7A34A] mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Address</h4>
            <p>Lilongwe, Malawi</p>
          </motion.div>
        </div>
      </section>


      {/* ================= MAP ================= */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Blantyre,Malawi&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
