export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/473462710/photo/kanchipuram-tamil-nadu-india-weaving-the-famous-brightly-coloured-kanchipuram-silk-sari-on-a.jpg?s=612x612&w=0&k=20&c=DQJEdewkgB8HSh6L3E69j8Aow_yyYfnySanMlNFmQN8="
                alt="Traditional Bengali Saree Weaving"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#36172D] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  20+ Years
                </h3>
                <p className="text-white">of Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-white font-medium">Our Heritage</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">
              The Art of Bengali Tradition
            </h2>
            <p className="text-gray-600 mb-6">
              For over two decades, আবরণী has been bringing the finest
              handcrafted sarees from various regions of India. Our collection
              represents the rich heritage and craftsmanship of Indian textiles,
              carefully curated for the modern woman who appreciates traditional
              artistry.
            </p>
            <p className="text-gray-600 mb-8">
              Each piece in our collection tells a story of cultural heritage,
              skilled craftsmanship, and artistic expression that has been
              passed down through generations.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center p-4 rounded-lg bg-[#36172D]">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  2000+
                </h3>
                <p className="text-white">Unique Designs</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#36172D]">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  50+
                </h3>
                <p className="text-white">Artisan Partners</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-[#36172D]">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  20+
                </h3>
                <p className="text-white">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}