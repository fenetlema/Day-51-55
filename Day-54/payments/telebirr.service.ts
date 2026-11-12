export type PaymentRequest = {
  phone: string;
  amountSantim: number;
};

export type PaymentResult = {
  transactionId: string;
  status: "success" | "failed";
  timestamp: string;
};

export class TelebirrService {
  async processPayment(request: PaymentRequest): Promise<PaymentResult> {
    console.log("Connecting to Telebirr for " + request.phone + "...");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!request.phone.startsWith("09") && !request.phone.startsWith("07")) {
      throw new Error("Invalid Ethiopian phone number: " + request.phone);
    }

    console.log("Payment approved for " + request.amountSantim + " Santim!");

    return {
      transactionId: "TXN-" + Math.floor(Math.random() * 1000000),
      status: "success",
      timestamp: new Date().toISOString(),
    };
  }
}