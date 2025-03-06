import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-contain bg-no-repeat bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('hero_image3.png')",
      }}
    >
      <div className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block transform translate-y-2 opacity-0 animate-fadeInUp animation-delay-100">
              আদিকালের সৌন্দর্য,
            </span>
            <span className="block transform translate-y-2 opacity-0 animate-fadeInUp animation-delay-300">
              নতুন রূপে আবিষ্কার করুন!
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-0 transform translate-y-2 animate-fadeInUp animation-delay-400">
            দক্ষ শিল্পীদের হাতে বোনা আমাদের বিশেষ হস্তনির্মিত শাড়ির সংগ্রহ।
          </p>
          <div className="space-x-4 opacity-0 transform translate-y-2 animate-fadeInUp animation-delay-500">
            <a href="#collection">
              <button className="bg-[#B0C4B9] text-black px-8 py-3 rounded-full hover:bg-[#bce0cd] transition duration-300 shadow-lg cursor-pointer font-semibold">
                View Collection
              </button>
            </a>
            <a href="#about">
              <button className="bg-white/20 backdrop-blur-sm border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white/30 transition duration-300 cursor-pointer">
                Our Story
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
}
