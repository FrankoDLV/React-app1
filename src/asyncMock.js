const products = [
  {
    id: 1,
    name: "Silla Nordica",
    price: 14.0,
    category: "Interior",
    img: "https://i.pinimg.com/564x/b6/d1/39/b6d1399f8e1bdeaf271fb0105d52eb7e.jpg",
    stock: 25,
    description: "Silla de diseño escandinavo con patas de madera",
  },
  {
    id: 2,
    name: "Silla Nordica de pana Gris",
    price: 24000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/0f/64/3d/0f643d737ca56a83ecae8ce6ecb384ca.jpg",
    stock: 25,
    description: "",
  },
  {
    id: 3,
    name: "Silla Nordica de pana",
    price: 12000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/be/ae/a9/beaea942055a586f4610fc65e78bdc3e.jpg",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: 4,
    name: "Silla Nordica VERDE",
    price: 18400,
    category: "Interior",
    img: "https://i.pinimg.com/564x/a7/fa/08/a7fa08e21c1a0c5f34c29f3d395ccd7d.jpg",
    stock: 25,
    description: "Silla nórdica de plástico blanco",
  },
  {
    id: 5,
    name: "Silla con patas Nogal",
    price: 17000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/73/5a/db/735adbc11bc846baabd2125075687364.jpg",
    stock: 25,
    description: "Silla nórdica de plástico blanco",
  },
  {
    id: 6,
    name: "Silla de madera maciza",
    price: 22500,
    category: "Interior",
    img: "https://i.pinimg.com/564x/73/98/84/7398844b152da03bcd9bca5ab357d2bc.jpg",
    stock: 25,
    description: "Silla nórdica Loser",
  },
  {
    id: 7,
    name: "Silla Nordica clasica",
    price: 13000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/14/83/ee/1483eec466dd080605553d6ca9a0d2c6.jpg",
    stock: 25,
    description: "Silla nórdica de plástico blanco",
  },
  {
    id: 8,
    name: "Sillon Nordico clasico",
    price: 35000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/19/af/88/19af88fba9acc4a8359454c16dfe4305.jpg",
    stock: 25,
    description: "Sillon nordico clasico",
  },
  {
    id: 9,
    name: "Kana Chenille",
    price: 38000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/6b/aa/d7/6baad7be40da735145ebfd6af28eb13a.jpg",
    stock: 25,
    description: "Chenille",
  },
  {
    id: 10,
    name: "Silla comedor pana glam",
    price: 25000,
    category: "Interior",
    img: "https://i.pinimg.com/564x/f4/5a/c7/f45ac7034ba73e7f9ff2d5f52466f0d3.jpg",
    stock: 25,
    description: "Silla pana GLAM",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter(
          (prod) => prod.category === products[categoryid].category
        )
      );
    }, 500);
  });
};
