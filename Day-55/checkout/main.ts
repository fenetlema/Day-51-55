import { CheckoutService, CheckoutOrder } from "./checkout.service.js";

async function run() {
  const checkout = new CheckoutService();

  console.log("=== Addis Eats Checkout System ===\n");

  const order1: CheckoutOrder = {
    id: 101,
    customerName: "Fenet",
    phone: "0967086344",
    totalSantim: 45000,
    status: "pending",
  };

  console.log("--- Processing Order 1 ---");
  await checkout.processCheckout(order1);
  console.log("Final Order State:", order1, "\n");

  const order2: CheckoutOrder = {
    id: 102,
    customerName: "Beki",
    phone: "0914239446",
    totalSantim: 30000,
    status: "pending",
  };

  console.log(" Processing Order 2 ");
  await checkout.processCheckout(order2);
  console.log("Final Order State:", order2);
}

run();