import {  FacebookIcon, InstagramIcon, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f0b19] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="logo.jpeg"
                alt="logo"
                className="w-12 h-12 rounded-full "
              />
              <span className="text-2xl font-bold">আবরণী</span>
            </div>
            <p className="text-gray-400 mb-6">
              Bringing timeless Bengali fashion to the modern world with
              authentic craftsmanship and heritage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/angellaevelyngomes?igsh=MTdwYnJqZnMyNHN5Yg=="
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/15xEChNV7K/"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Collections
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Banarasi Silk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Kanjeevaram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Designer Sarees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Bridal Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <span className="w-2 h-2 bg-[#B0C4B9] rounded-full mr-2"></span>
                  Jamdani
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                    Opp. mbazaar, Tarulia, Krishnapur, Kolkata - 700102
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 94339 03546</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-gray-400"> angella73.ag@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 আবরণী. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
