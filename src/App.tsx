import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { globalStyles } from "./constants";

function App() {
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
}

export default App;
