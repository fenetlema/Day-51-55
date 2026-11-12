"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const repo = new orders_1.InMemoryOrderRepository();
const service = new orders_1.OrderService(repo);
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
}
catch (error) {
    if (error instanceof orders_1.OrderNotFoundError) {
        console.log("Caught error:", error.message);
    }
}
