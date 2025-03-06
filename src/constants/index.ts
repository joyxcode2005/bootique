export const featuredSarees = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "₹12,999",
    image:
      "https://m.media-amazon.com/images/I/71n35zBEILL._AC_UY350_.jpg",
    description: "Traditional Banarasi silk with intricate zari work",
  },
  {
    id: 2,
    name: "Kanjeevaram Silk",
    price: "₹ 9,999",
    image:
      "https://tulsiweaves.com/uploads/products/img-188891755566f4284b2b4d39.68153343.jpg",
    description: "Pure silk with temple border design",
  },
  {
    id: 3,
    name: "Designer Georgette",
    price: "₹ 6,999",
    image:
      "https://cdn.sareeka.com/image/cache/data2023/georgette-printed-green-designer-gown-269417-1000x1375.jpg",
    description: "Contemporary design with embellishments",
  },
];

export const categories = [
  {
    id: 1,
    name: "Bridal Collection",
    image:
      "https://anyaonline.in/cdn/shop/collections/Bridal-Kanchi-Silk-Sarees.jpg?v=1727699120",
    count: "24 Items",
  },
  {
    id: 2,
    name: "Casual Wear",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/421184881/HU/VV/JJ/15557747/geometry-square-checks-saree-01-500x500.jpg",
    count: "36 Items",
  },
  {
    id: 3,
    name: "Party Wear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSQst78tkDOgL99xvvYwVLWwbYRngxMKLjg&s",
    count: "18 Items",
  },
  {
    id: 4,
    name: "Designer Collection",
    image:
      "https://static3.azafashions.com/uploads/product_gallery/1681229-0639067001667408713.jpg",
    count: "42 Items",
  },
];

// Add this CSS to your global styles
export const globalStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.3s;
}

.animation-delay-300 {
  animation-delay: 0.5s;
}

.animation-delay-400 {
  animation-delay: 0.7s;
}

.animation-delay-500 {
  animation-delay: 0.9s;
}
`;
