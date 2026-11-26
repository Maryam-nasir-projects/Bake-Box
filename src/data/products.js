export const products = [
  { id: 1, name: "Brownies", price: 450, inStock: true, left: 12 },
  { id: 2, name: "Nankhatai", price: 350, inStock: true, left: 8 },
  { id: 3, name: "Rolls", price: 500, inStock: false, left: 0 },
  { id: 4, name: "Cupcakes", price: 400, inStock: true, left: 2 },
  { id: 5, name: "Cookies", price: 300, inStock: true, left: 20 },
];

//export const products — data ko doosri files mein use karne ke liye export kar raha hai.
//id — har product ki unique identity.
//name — product ka naam.
//price — product ki price.
//inStock — product available hai ya nahi (true / false).
//left — kitne products remaining hain.