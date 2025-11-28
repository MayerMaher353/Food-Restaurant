// src/data/productData.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?:number;
  tags: string[];
  category: string;
  img: string; // Assuming 'img' refers to an imported image module/path
}
