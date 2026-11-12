import { TelebirrService } from "../../DAY-54/payments/telebirr.service.js";

export type CheckoutOrder = {
  id: number;
  customerName: string;
  phone: string;
  totalSantim: number;
  status: "pending" | "confirmed" | "failed";
};

export class CheckoutService {
  private telebirr = new TelebirrService();

  async processCheckout(order: CheckoutOrder): Promise<CheckoutOrder> {
    console.log(`Starting checkout for order #${order.id} (${order.customerName})...`);

    try {
      const payment = await this.telebirr.processPayment({
        phone: order.phone,
        amountSantim: order.totalSantim,
      });

      if (payment.status === "success") {
        order.status = "confirmed";
        console.log(`Order #${order.id} successfully confirmed via Telebirr! Transaction: ${payment.transactionId}`);
      }
    } catch (error: any) {
      order.status = "failed";
      console.log(`Checkout failed for order #${order.id}: ${error.message}`);
    }

    return order;
  }
}