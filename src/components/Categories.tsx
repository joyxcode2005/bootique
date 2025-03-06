import { categories } from "../constants";
import SectionTitle from "./SectionTitle";

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Available Category"
          subtitle="Explore our curated categories featuring different styles and techniques"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
