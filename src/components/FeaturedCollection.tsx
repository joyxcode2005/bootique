import { featuredSarees } from "../constants";
import SectionTitle from "./SectionTitle";

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Collection"
          subtitle="Discover our handpicked selection of exquisite Bengali sarees crafted by master artisans"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSarees.map((saree) => (
            <div
              key={saree.id}
              className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#36172D] text-white text-sm font-medium py-1 px-3 rounded-full">
                  New Arrival
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{saree.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {saree.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#36172D]">
                    {saree.price}
                  </span>
                  {/* <button className="border border-[#36172D] text-black hover:bg-[#36172D] hover:text-white px-4 py-2 rounded-lg transition duration-300 cursor-pointer">
                    View Details
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#36172D] hover:text-white hover:bg-[#36172D] text-black px-8 py-3 rounded-full transition duration-300 font-medium cursor-pointer">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}


