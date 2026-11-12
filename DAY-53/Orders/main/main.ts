import {
  InMemoryOrderRepository,
  OrderService,
  OrderNotFoundError,
} from "../order.errors.js";

const repo = new InMemoryOrderRepository();
const service = new OrderService(repo);

repo.save({
  id: 1,
  customerName: "Fenet",
  area: "Bole",
  status: "confirmed",
  dishes: [{ name: "Beyaynet", priceSantim: 25000 }],
  totalSantim: 25000,
});

console.log("Found order:", service.find(1));
console.log("Fees by area:", service.feesByArea());

try {
  service.find(99);
} catch (error) {
  if (error instanceof OrderNotFoundError) {
    console.log("Caught error:", error.message);
  }
}