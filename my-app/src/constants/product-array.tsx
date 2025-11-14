
import type { Product } from "../types/product";
import shop1Img from '../assets/images/shop img/shop1.jpg'
import shop2Img from '../assets/images/shop img/shop2.jpg.webp';
import shop3Img from '../assets/images/shop img/shop3.webp';
import shop4Img from '../assets/images/shop img/shop4.webp';
import shop5Img from '../assets/images/shop img/shop5.jpg.webp';
import shop6Img from '../assets/images/shop img/shop6.jpg.webp';
import shop7Img from '../assets/images/shop img/shop7.jpg';
import shop8Img from '../assets/images/shop img/shop8.jpg.webp';

// --- Soup Images (Corrected soup1 import name to soup1Img for consistency) ---
import soup1Img from '../assets/images/shop img/soup-1.jpg'; 
import soup2Img from '../assets/images/shop img/soup-2.jpg';
import soup3Img from '../assets/images/shop img/soup-3.jpg';
import soup4Img from '../assets/images/shop img/soup-4.jpg';
import soup5Img from '../assets/images/shop img/soup-5.jpg';
import soup6Img from '../assets/images/shop img/soup-6.jpg';

// --- Salad Images ---
import salad1Img from '../assets/images/shop img/salad-1.jpg';
import salad2Img from '../assets/images/shop img/salad-2.jpg';
import salad3Img from '../assets/images/shop img/salad-3.jpg';
import salad4Img from '../assets/images/shop img/salad-4.jpg';

// --- Drink Images ---
import drink1Img from '../assets/images/shop img/drink-1.webp';
import drink2Img from '../assets/images/shop img/drink-2.webp';
import drink3Img from '../assets/images/shop img/drink-3.webp';
import drink4Img from '../assets/images/shop img/drink-4.webp';
import drink5Img from '../assets/images/shop img/drink-5.webp';

// --- Dessert Images (CORRECTED PATH SPELLING) ---
import dessert1Img from '../assets/images/shop img/desert-1.jpg'; 
import dessert2Img from '../assets/images/shop img/desert-2.jpg';
import dessert3Img from '../assets/images/shop img/desert-3.jpg';
import dessert4Img from '../assets/images/shop img/gallery-i-5-140x140.jpg.webp';

export const PRODUCTS: Product[] = [
    // --- Seafood / Crustaceans (Products 1-8) ---
    { id: 1, name: "BOILED CRAYFISH", price: 5.50, originalPrice: 7.50, tags: ["Crabs", "Crustaceans", "Food", "Saltwater"], category: "Saltwater Fish", img: shop1Img },
    { id: 2, name: "CRABS", price: 3.50, originalPrice: 4.50, tags: ["Crabs", "Food", "Crustaceans"], category: "Crustaceans", img: shop2Img },
    { id: 3, name: "FISH BURGER", price: 1.99, originalPrice: 2.99, tags: ["Burger", "Fish", "Food"], category: "Farmed Fish", img: shop3Img },
    { id: 4, name: "FISH SOUP", price: 20.99, originalPrice: 25.99, tags: ["Soup", "Fish", "Food", "Saltwater"], category: "Saltwater Fish", img: shop4Img },
    { id: 5, name: "PAELLA WITH SEAFOOD", price: 3.50, originalPrice: 4.50, tags: ["Crustaceans", "Seafood", "Food", "Fish"], category: "Farmed Fish", img: shop6Img },
    { id: 6, name: "SALMON", price: 1.50, originalPrice: 1.99, tags: ["Fish", "Food", "Saltwater"], category: "Saltwater Fish", img: shop7Img },
    { id: 7, name: "SALMON WITH TOMATOES", price: 20.99, originalPrice: 25.99, tags: ["Fish", "Food", "Saltwater"], category: "Saltwater Fish", img: shop5Img },
    { id: 8, name: "CASSEROLE", price: 4.99, originalPrice: 5.99, tags: ["Food", "Saltwater", "Crustaceans"], category: "Crustaceans", img: shop8Img },

    // --- Soup (Products 9-14) ---
    { id: 9, name: "Terrific Turkey Chili", price: 8.00, originalPrice: 9.99, tags: ["Soup", "Food"], category: "Soup", img: soup1Img },
    { id: 10, name: "Italian Sausage Tortellini", price: 9.00, originalPrice: 11.99, tags: ["Soup", "Food"], category: "Soup", img: soup2Img },
    { id: 11, name: "Cream of Asparagus Soup", price: 10.00, originalPrice: 13.00, tags: ["Food", "Soup"], category: "Soup", img: soup3Img },
    { id: 12, name: "Italian Sausage Soup", price: 9.00, originalPrice: 11.99, tags: ["Food", "Soup"], category: "Soup", img: soup4Img },
    { id: 13, name: "Creamy Chicken & Wild Rice Soup", price: 12.00, originalPrice: 14.99, tags: ["Fish", "Food", "Soup"], category: "Soup", img: soup5Img },
    { id: 14, name: "Ham and Potato Soup", price: 12.00, originalPrice: 13.99, tags: ["Food", "Soup"], category: "Soup", img: soup6Img },

    // --- Salad (Products 15-18) ---
    { id: 15, name: "Caprese Salad", price: 15.79, originalPrice: 17.99, tags: ["Salad", "Food"], category: "Salad", img: salad1Img },
    { id: 16, name: "Avocado Tuna Salad", price: 10.99, originalPrice: 13.99, tags: ["Food", "Salad"], category: "Salad", img: salad2Img },
    { id: 17, name: "Fruit Salad", price: 5.89, originalPrice: 8.00, tags: ["Food", "Salad"], category: "Salad", img: salad3Img },
    { id: 18, name: "Salmon Salad", price: 9.00, originalPrice: 11.99, tags: ["Salad", "Food"], category: "Salad", img: salad4Img },

    // --- Drink (Products 19-23) ---
    { id: 19, name: "Cocktail", price: 4.26, originalPrice: 5.99, tags: ["Drink"], category: "Drink", img: drink1Img },
    { id: 20, name: "Iced Diet Lemon Soda", price: 2.00, originalPrice: 3.99, tags: ["Drink"], category: "Drink", img: drink2Img },
    { id: 21, name: "Margarita", price: 4.00, originalPrice: 6.99, tags: ["Drink"], category: "Drink", img: drink3Img },
    { id: 22, name: "Smoothie", price: 3.00, originalPrice: 5.99, tags: ["Drink"], category: "Drink", img: drink4Img },
    { id: 23, name: "Strawberry Lemonade Soda", price: 3.00, originalPrice: 5.00, tags: ["Drink"], category: "Drink", img: drink5Img },

    // --- Dessert (Products 24-27) ---
    { id: 24, name: "Summer Berry and Coconut Tart", price: 12.00, originalPrice: 15.00, tags: ["Dessert"], category: "Dessert", img: dessert1Img },
    { id: 25, name: "Pumpkin Cookies Cream Cheese", price: 10.00, originalPrice: 12.00, tags: ["Dessert"], category: "Dessert", img: dessert2Img },
    { id: 26, name: "Double Chocolate Cupcakes", price: 7.00, originalPrice: 9.00, tags: ["Dessert"], category: "Dessert", img: dessert3Img },
    { id: 27, name: "Classic Vanilla Ice Cream", price: 4.50, originalPrice: 6.50, tags: ["Dessert"], category: "Dessert", img: dessert4Img },
];