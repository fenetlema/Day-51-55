export type Area = "Bole" | "Piassa" | "Kazanchis" | "Megenagna";

export type OrderStatus = "pending" | "confirmed" | "preparing" | "delivering" | "delivered";

export type Dish = {
  name: string;
  priceSantim: number;
};

export type Order = {
  readonly id: number;
  customerName: string;
  area: Area;
  status: OrderStatus;
  dishes: Dish[];
  telebirrPhone?: string;
  totalSantim: number;
};