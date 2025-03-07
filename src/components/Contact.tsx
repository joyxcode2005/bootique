import { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Connect with Us"
          subtitle="We'd love to help you find the perfect saree for any occasion"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <ContactCard icon={Phone} title="Call Us" text="+91 94339 03546" />
          <a href="https://www.facebook.com/share/15xEChNV7K/" target="_blank">
            <ContactCard
              icon={Facebook}
              title="Facebook"
              text="Connect with us on Facebook to discover your perfect saree!"
            />
          </a>
          <a
            href="https://www.instagram.com/angellaevelyngomes?igsh=MTdwYnJqZnMyNHN5Yg=="
            target="_blank"
          >
            <ContactCard
              icon={Instagram}
              title="Instagram"
              text="Check out our latest collections on Instagram!"
            />
          </a>
          <ContactCard
            icon={Mail}
            title="Email"
            text="angella73.ag@gmail.com"
          />
          <a href="https://goo.gl/maps/XoKBkphTcmxEvwFJ7" target="_blank">
          <ContactCard
            icon={MapPin}
            title="Location"
            text="Opp. mbazaar, Tarulia, Krishnapur, Kolkata - 700102"
          />
          </a>
        </div>
      </div>
      <div className="mt-16 mx-6 my-2  p-8 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <p className="text-gray-600 mb-6">
              Have questions about our collection? Feel free to reach out to us.
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
            <img
              src="https://res.cloudinary.com/dehumvs8j/image/upload/v1741283532/Screenshot_2025-03-06_232036_oscvga.png"
              alt="map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#36172D] text-white mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
