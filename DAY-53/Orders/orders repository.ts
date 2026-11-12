import { Order } from "./order.types";

export interface OrderRepository {
  save(order: Order): void;
  findById(id: number): Order | undefined;
  findAll(): Order[];
}

export class InMemoryOrderRepository implements OrderRepository {
  private orders = new Map<number, Order>();

  save(order: Order): void {
    this.orders.set(order.id, order);
  }

  findById(id: number): Order | undefined {
    return this.orders.get(id);
  }

  findAll(): Order[] {
    return Array.from(this.orders.values());
  }
}