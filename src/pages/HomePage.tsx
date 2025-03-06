import About from "../components/About";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedCollection from "../components/FeaturedCollection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { globalStyles } from "../constants";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{globalStyles}</style>
      <Header />
      <Hero />
      <FeaturedCollection />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
