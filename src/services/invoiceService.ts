import { orderStore } from "../store/OrderStore";

//todo: check
export interface InvoicePayload {
  amount: number;
  ethAddress: string;
  price: string;
}

//todo: check
interface IInvoice {
  id: string;
}

export async function createInvoice({
  amount,
  ethAddress,
  price,
}: InvoicePayload): Promise<IInvoice> {
  //todo: create invoice
  return {
    id: "123",
  };
}

let isProcessing = false;

export async function processPendingPayments(): Promise<void> {
  if (isProcessing) {
    console.warn("⚠️ Already processing");
    return;
  }
  isProcessing = true;
  const orders = orderStore.getPendingOrders();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  for (const order of orders) {
    if (order.status === "pending") {
      //todo: check if invoice is paid
      // if paid, update order status to "paid" and process swap
    }
  }

  isProcessing = false;
  //todo check all unpayed orders and update status
}
