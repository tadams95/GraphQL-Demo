const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 50.55,
  },
];

function getAllProducts() {
  return products;
}

module.export = {
    getAllProducts,
}