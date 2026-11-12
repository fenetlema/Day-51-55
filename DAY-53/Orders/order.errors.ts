export class OrderNotFoundError extends Error {
  constructor(public orderId: number) {
    super(`Order #${orderId} was not found`);
    this.name = "OrderNotFoundError";
  }
}

export class PaymentDeclinedError extends Error {
  constructor(public phone: string, public reason: string) {
    super(`Payment failed for ${phone}: ${reason}`);
    this.name = "PaymentDeclinedError";
  }
}