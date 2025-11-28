import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
  originalPrice?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: number | string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  isCartOpen: false,
  toggleCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("shopCart");
    return stored ? JSON.parse(stored) : [];
  });

  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = () => setCartOpen(!isCartOpen);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id: string | number) => {
    const idStr = String(id);
    setCartItems(prev => prev.filter(item => String(item.id) !== idStr));
  };

  const clearCart = () => {
    // Optionally reset quantities to 0 for reference
    setCartItems(prev => prev.map(item => ({ ...item, quantity: 0 })));
    // Then fully clear cart
    setCartItems([]);
    localStorage.removeItem("shopCart"); // also clear from localStorage
  };

  return (
    <CartContext.Provider
      value={{ cartItems, isCartOpen, toggleCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
