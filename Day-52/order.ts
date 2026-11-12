const areas = ["Bole", "Piassa", "Kazanchis", "Megenagna"] as const;
export type Area = typeof areas[number];

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

export function deliveryFee(order: Order): number {
  if (order.totalSantim > 50000) {
    return 0;
  }
  if (order.area === "Bole") {
    return 40;
  }
  return 60;
}

export function statusMessage(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is pending";
    case "confirmed":
      return "Order is confirmed";
    case "preparing":
      return "Order is preparing";
    case "delivering":
      return "Order is on the way";
    case "delivered":
      return "Order is delivered";
    default:
      const check: never = status;
      return check;
  }
}

export function receipt(order: Order): string {
  const money = new Intl.NumberFormat("en-ET", { style: "currency", currency: "ETB" });

  let items = "";
  for (let i = 0; i < order.dishes.length; i++) {
    const dish = order.dishes[i];
    items += `- ${dish.name}: ${money.format(dish.priceSantim / 100)}\n`;
  }

  return `Receipt #${order.id}
Customer: ${order.customerName}
Area: ${order.area}
Status: ${statusMessage(order.status)}

Dishes:
${items}
Total: ${money.format(order.totalSantim / 100)}`;
}