import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

//@ts-ignore
const AllSareesPage = ({ featuredSarees }) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#36172D]">
        Our Complete Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredSarees.map((saree: { id: Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; isNew: any; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
          <div
            key={saree.id}
            className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer`}
          >
            <div className="relative overflow-hidden">
              <img
                src={saree.image}
                alt={typeof saree.name === 'string' ? saree.name : ''}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {saree.isNew && (
                <div className="absolute top-4 right-4 bg-[#36172D] text-white text-sm font-medium py-1 px-3 rounded-full">
                  New Collection
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{saree.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{saree.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#36172D]">
                  {saree.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSareesPage;
