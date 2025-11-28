

import type { Order } from "../types/orders Types";

export const ORDERS: Order[] = [
  {
    id: 1,
    customerName: "Ahmed",
    items: [
      { name: "Product B", quantity: 2 },
    ],
    total: 150.00,
    status: "Pending"
  },
  {
    id: 2,
    customerName: "khaled",
    items: [
      { name: "Product C", quantity: 3 }
    ],
    total: 75.00,
    status: "Processing"
  },
  {
    id: 3,
    customerName: "yousef",
    items: [
      { name: "Product A", quantity: 1 },
    ],
    total: 200.00,
    status: "Shipped"
  },
  // Add more sample orders as needed
];