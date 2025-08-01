
//todo: check
export interface InvoicePayload {
  amount: number;
  token: string;
  network: string;
}

//todo: check
interface IInvoice {}

export async function createInvoice({
  amount,
  token,
  network,
}: InvoicePayload): Promise<IInvoice> {
  //todo: create invoice
  return {};
}


export async function processPendingPayments(): Promise<void> {
  //todo check all unpayed orders and update status
}
