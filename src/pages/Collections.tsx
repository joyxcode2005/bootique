import { Link } from "react-router-dom";
import AllSareesPage from "../components/Collection";
import { featuredSarees, globalStyles } from "../constants";
import { useEffect, useState } from "react";

const Collections = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{globalStyles}</style>
      <Header />
      <AllSareesPage featuredSarees={featuredSarees} />
    </div>
  );
};

export default Collections;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Link to="/" className="flex items-center gap-2">
              <img
                src="logo.jpeg"
                alt="logo"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
              />
              <h1
                className="text-2xl md:text-4xl  font-bold text-[#35152C]"
                style={{
                  color: `${isScrolled ? "#36172D" : "white"}`,
                  WebkitTextStroke: `${
                    isScrolled ? "2px #36172D" : "2px #B0C4B9"
                  }`,
                  WebkitTextFillColor: "transparent",
                }}
              >
                আবরণী
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
