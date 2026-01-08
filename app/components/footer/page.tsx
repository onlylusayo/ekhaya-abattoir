import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-heading font-bold mb-6">
            Ekhaya Abattoir
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Providing safe, hygienic, and professional meat processing services
            since 2024.
          </p>

          <div className="flex gap-4">
            <Link
              href="#"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Beef Slaughtering</li>
            <li>Goat Processing</li>
            <li>Cold Storage</li>
            <li>Meat Delivery</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3 items-start">
              <FaLocationDot className="text-primary mt-1" />
              <span>
                123 Farm Road, Lilongwe,
                <br />
                Malawi
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhone className="text-primary" />
              <span>+265 999 123 456</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-primary" />
              <span>info@ekhayaabattoir.mw</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ekhaya Abattoir. All rights reserved.
      </div>
    </footer>
  );
}
