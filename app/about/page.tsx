'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  Users,
  HeartHandshake,
  Factory,
  Thermometer,
} from 'lucide-react';

/* ---------- UI COMPONENTS ---------- */

type Props = { children: ReactNode; className?: string };

function Card({ children, className = '' }: Props) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      {children}
    </h2>
  );
}

/* ---------- PAGE ---------- */

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[620px] md:h-[720px] flex items-center justify-center text-center text-white bg-gray-800">
        <div className="absolute inset-0 bg-black/60" />

        {/* placeholder pattern */}
        <div className="absolute inset-0 opacity-20 bg-gray-700" />

        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Safe. Ethical. Trusted.
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ekhaya Abattoir delivers hygienic, humane, and modern livestock
            processing that protects farmers, consumers, and communities.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image placeholder */}
      <div className="w-full h-[260px] md:h-[320px] rounded-2xl shadow-xl overflow-hidden bg-gray-200">
        <Image
          src="/images/abt-pic.jpg" 
          alt="Livestock facility"
          width={500}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>


          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ekhaya Abattoir was established to provide hygienic and ethical
              livestock processing using modern technology and strict safety
              standards. We work hand-in-hand with farmers and distributors to
              ensure quality, sustainability, and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Our Core Principles</SectionTitle>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <HeartHandshake className="w-10 h-10 text-gold" />,
                title: 'Animal Welfare',
                desc: 'Humane handling practices ensuring minimal stress.',
              },
              {
                icon: <Shield className="w-10 h-10 text-gold" />,
                title: 'Food Safety',
                desc: 'Strict hygiene and safety compliance standards.',
              },
              {
                icon: <Users className="w-10 h-10 text-gold" />,
                title: 'Community Partnership',
                desc: 'Supporting farmers and strengthening local supply chains.',
              },
            ].map((item, i) => (
              <Card key={i} className="p-10 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSING STANDARDS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Modern Processing Standards</SectionTitle>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Factory className="w-10 h-10 text-gold" />,
                title: 'Modern Facility',
                desc: 'Equipped with advanced processing technology.',
              },
              {
                icon: <Thermometer className="w-10 h-10 text-gold" />,
                title: 'Cold Chain Control',
                desc: 'Temperature monitoring ensures freshness & safety.',
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-gold" />,
                title: 'Quality Assurance',
                desc: 'Continuous inspections and compliance monitoring.',
              },
            ].map((item, i) => (
              <Card key={i} className="p-10 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Our Journey</SectionTitle>

          <div className="relative ml-4">
            {/* vertical timeline line */}
            <motion.div
              className="absolute left-0 top-0 w-[2px] bg-[#D7A34A]/70 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />

            <div className="space-y-12">
              {[
                { year: '2015', title: 'Facility Established', desc: 'Launched a modern livestock processing facility designed for safety and efficiency.' },
                { year: '2018', title: 'Certified and Compliant', desc: 'Achieved safety and regulatory certifications ensuring trusted operations.' },
                { year: '2021', title: 'Cold Storage Expansion', desc: 'Expanded cold storage capacity to maintain freshness and product integrity.' },
                { year: '2023', title: 'Sustainability Systems', desc: 'Introduced eco-friendly systems to support sustainable processing.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* timeline dot */}
                  <motion.div
                    className="absolute -left-[6px] top-2 w-3 h-3 bg-[#D7A34A] rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  />

                  {/* content */}
                  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <span className="text-[#D7A34A] font-semibold text-sm tracking-wide">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Trusted Processing You Can Depend On
        </h2>
        <p className="max-w-2xl mx-auto text-white/90 leading-relaxed">
          We continue investing in modern systems and ethical practices to
          deliver safe, high-quality meat products to communities and markets.
        </p>
      </section>

    </div>
  );
}
