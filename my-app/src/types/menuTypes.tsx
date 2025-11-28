

// Interface for a single menu item
export interface MenuItem {
  id: number;
  name: string;
  price: number; 
  description: string;
  imageUrl: string;
  currency: string;
  addToCartUrl: string;
}