const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');

// ------------------------ PRODUCTS ------------------------
const PRODUCTS = [
  // Seafood / Crustaceans
  { id: 1, name: "BOILED CRAYFISH", price: 5.50, originalPrice: 7.50, tags: ["Crabs", "Crustaceans", "Food", "Saltwater"], category: "Saltwater Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop1.jpg') },
  { id: 2, name: "CRABS", price: 3.50, originalPrice: 4.50, tags: ["Crabs", "Food", "Crustaceans"], category: "Crustaceans", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop2.jpg.webp') },
  { id: 3, name: "FISH BURGER", price: 1.99, originalPrice: 2.99, tags: ["Burger", "Fish", "Food"], category: "Farmed Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop3.webp') },
  { id: 4, name: "FISH SOUP", price: 20.99, originalPrice: 25.99, tags: ["Soup", "Fish", "Food", "Saltwater"], category: "Saltwater Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop4.webp') },
  { id: 5, name: "PAELLA WITH SEAFOOD", price: 3.50, originalPrice: 4.50, tags: ["Crustaceans", "Seafood", "Food", "Fish"], category: "Farmed Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop6.jpg.webp') },
  { id: 6, name: "SALMON", price: 1.50, originalPrice: 1.99, tags: ["Fish", "Food", "Saltwater"], category: "Saltwater Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop7.jpg') },
  { id: 7, name: "SALMON WITH TOMATOES", price: 20.99, originalPrice: 25.99, tags: ["Fish", "Food", "Saltwater"], category: "Saltwater Fish", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop5.jpg.webp') },
  { id: 8, name: "CASSEROLE", price: 4.99, originalPrice: 5.99, tags: ["Food", "Saltwater", "Crustaceans"], category: "Crustaceans", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/shop8.jpg.webp') },

  // Soup
  { id: 9, name: "Terrific Turkey Chili", price: 8.00, originalPrice: 9.99, tags: ["Soup", "Food"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-1.jpg') },
  { id: 10, name: "Italian Sausage Tortellini", price: 9.00, originalPrice: 11.99, tags: ["Soup", "Food"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-2.jpg') },
  { id: 11, name: "Cream of Asparagus Soup", price: 10.00, originalPrice: 13.00, tags: ["Food", "Soup"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-3.jpg') },
  { id: 12, name: "Italian Sausage Soup", price: 9.00, originalPrice: 11.99, tags: ["Food", "Soup"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-4.jpg') },
  { id: 13, name: "Creamy Chicken & Wild Rice Soup", price: 12.00, originalPrice: 14.99, tags: ["Fish", "Food", "Soup"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-5.jpg') },
  { id: 14, name: "Ham and Potato Soup", price: 12.00, originalPrice: 13.99, tags: ["Food", "Soup"], category: "Soup", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/soup-6.jpg') },

  // Salad
  { id: 15, name: "Caprese Salad", price: 15.79, originalPrice: 17.99, tags: ["Salad", "Food"], category: "Salad", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/salad-1.jpg') },
  { id: 16, name: "Avocado Tuna Salad", price: 10.99, originalPrice: 13.99, tags: ["Food", "Salad"], category: "Salad", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/salad-2.jpg') },
  { id: 17, name: "Fruit Salad", price: 5.89, originalPrice: 8.00, tags: ["Food", "Salad"], category: "Salad", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/salad-3.jpg') },
  { id: 18, name: "Salmon Salad", price: 9.00, originalPrice: 11.99, tags: ["Salad", "Food"], category: "Salad", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/salad-4.jpg') },

  // Drink
  { id: 19, name: "Cocktail", price: 4.26, originalPrice: 5.99, tags: ["Drink"], category: "Drink", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/drink-1.webp') },
  { id: 20, name: "Iced Diet Lemon Soda", price: 2.00, originalPrice: 3.99, tags: ["Drink"], category: "Drink", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/drink-2.webp') },
  { id: 21, name: "Margarita", price: 4.00, originalPrice: 6.99, tags: ["Drink"], category: "Drink", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/drink-3.webp') },
  { id: 22, name: "Smoothie", price: 3.00, originalPrice: 5.99, tags: ["Drink"], category: "Drink", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/drink-4.webp') },
  { id: 23, name: "Strawberry Lemonade Soda", price: 3.00, originalPrice: 5.00, tags: ["Drink"], category: "Drink", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/drink-5.webp') },

  // Dessert
  { id: 24, name: "Summer Berry and Coconut Tart", price: 12.00, originalPrice: 15.00, tags: ["Dessert"], category: "Dessert", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/desert-1.jpg') },
  { id: 25, name: "Pumpkin Cookies Cream Cheese", price: 10.00, originalPrice: 12.00, tags: ["Dessert"], category: "Dessert", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/desert-2.jpg') },
  { id: 26, name: "Double Chocolate Cupcakes", price: 7.00, originalPrice: 9.00, tags: ["Dessert"], category: "Dessert", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/desert-3.jpg') },
  { id: 27, name: "Chocolate Brownies", price: 6.00, originalPrice: 8.00, tags: ["Dessert"], category: "Dessert", imgPath: path.join(__dirname, '../../my-app/src/assets/images/shop img/desert-4.jpg') },
];

// ------------------------ UPLOAD FUNCTION ------------------------
async function uploadProducts() {
  for (const product of PRODUCTS) {
    if (!fs.existsSync(product.imgPath)) {
      console.error(` Image not found: ${product.imgPath}`);
      continue;
    }

    const form = new FormData();
    form.append("name", product.name);
    form.append("price", product.price);
    if (product.originalPrice) form.append("originalPrice", product.originalPrice);
    form.append("category", product.category);
    form.append("tags", JSON.stringify(product.tags));
    form.append("image", fs.createReadStream(product.imgPath));

    try {
      const res = await axios.post("http://localhost:3000/api/products", form, {
        headers: form.getHeaders(),
      });
      console.log(" Uploaded:", res.data.name);
    } catch (err) {
      console.error(" Error uploading:", product.name);
      console.error(err.response?.data || err.message);
    }
  }
}

// Only run if file executed directly
if (require.main === module) {
  uploadProducts();
}

module.exports = { PRODUCTS, uploadProducts };