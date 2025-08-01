//todo add more fields
export class Order {
  id: string;
  status: "pending" | "completed";
  createdAt: string;
  updatedAt: string;

  constructor(
    id: string,
    status: "pending" | "completed" = "pending",
    createdAt?: string,
    updatedAt?: string
  ) {
    this.id = id;
    this.status = status;
    const now = new Date().toISOString();
    this.createdAt = createdAt || now;
    this.updatedAt = updatedAt || now;
  }
}

class OrderStore {
  private orders: Order[] = [];

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }

  updateOrderStatus(id: string, status: Order["status"]): boolean {
    const order = this.getOrderById(id);
    if (order) {
      order.status = status;
      order.updatedAt = new Date().toISOString();
      return true;
    }
    return false;
  }

  getAllOrders(): Order[] {
    return this.orders;
  }

  private static instance: OrderStore;

  static getInstance(): OrderStore {
    if (!OrderStore.instance) {
      OrderStore.instance = new OrderStore();
    }
    return OrderStore.instance;
  }
}

export const orderStore = OrderStore.getInstance();
