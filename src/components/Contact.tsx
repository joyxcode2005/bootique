import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Visit Our Boutique"
          subtitle="We'd love to help you find the perfect saree for any occasion"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#36172D] text-white mb-6">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#36172D] text-white mb-6">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@aabaroni.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#36172D] text-white mb-6">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              123 Fashion Street, New York, NY 10001
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our collection? Feel free to reach out to
                us.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                ></textarea>
                <button className="bg-[#36172D] text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition duration-300 shadow-md">
                  Send Message
                </button>
              </form>
            </div>

            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343004!2d-74.00425908459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sFashion%20Ave%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651903316607!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}