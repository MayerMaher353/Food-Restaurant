export interface Order {
  id: number;
  customerName: string;
  items: { name: string; quantity: number }[];
  total: number;
  status: string;
}