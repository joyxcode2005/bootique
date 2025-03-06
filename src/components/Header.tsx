import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="logo.jpeg"
              alt="logo"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <h1
              className="text-2xl md:text-4xl  font-bold text-[#35152C]"
              style={{
                color: `${isScrolled ? "#36172D" : "white"}`,
                WebkitTextStroke: `${isScrolled ? "2px #36172D" : "2px #B0C4B9"}`,
                WebkitTextFillColor: "transparent",
              }}
            >
              আবরণী
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/"
                  className={`${
                    isScrolled ? "text-[#36172D]" : "text-white"
                  } hover:text-[#B0C4B9] transition font-medium`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className={`${
                    isScrolled ? "text-[#36172D]" : "text-white"
                  } hover:text-[#B0C4B9] transition font-medium`}
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className={`${
                    isScrolled ? "text-[#36172D]" : "text-white"
                  } hover:text-[#B0C4B9] transition font-medium`}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${
                    isScrolled ? "text-[#36172D]" : "text-white"
                  } hover:text-[#B0C4B9] transition font-medium`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    isScrolled ? "text-[#36172D]" : "text-white"
                  } hover:text-[#B0C4B9] transition font-medium`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-rose-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg py-4">
            <ul className="flex flex-col space-y-3 px-6">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-[#B0C4B9] block py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className="text-gray-800 hover:text-[#B0C4B9] block py-2"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-800 hover:text-[#B0C4B9] block py-2"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-[#B0C4B9] block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-[#B0C4B9] block py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
