import { TelebirrService } from "./telebirr.service.js"; // Added .js here!

async function run() {
  const telebirr = new TelebirrService();

  console.log("=== Addis Eats Payment Simulator ===\n");

  console.log("--- Test 1: Valid Phone Number ---");
  try {
    const result = await telebirr.processPayment({
      phone: "0911121314",
      amountSantim: 25000,
    });
    console.log("Success Result:", result);
  } catch (error: any) {
    console.log("Error:", error.message);
  }

  console.log("\n---\n");

  console.log("--- Test 2: Invalid Phone Number ---");
  try {
    const result = await telebirr.processPayment({
      phone: "0912131415",
      amountSantim: 15000,
    });
    console.log("Success Result:", result);
  } catch (error: any) {
    console.log("Caught expected error:", error.message);
  }
}

run();