import { Request, Response, Router } from "express";
import { createInvoice } from "./services/invoiceService";
import { Order, orderStore } from "./store/OrderStore";

const router = Router();

router.post("/swap", async (req: Request, res: Response) => {
  try {
    const { amount, ethAddress, price }: any = req.body;

    const invoice = await createInvoice({
      amount,
      ethAddress,
      price,
    });

    const order = new Order(invoice.id, "pending");

    //todo: create invoice

    res.status(201).json({});
  } catch (e: any) {
    console.error("❌ POST /swap err:", e.response.data.message ?? e);
    res.status(500).json({ error: e.response.data.message ?? e });
  }
});

router.get("/swap/:id", async (req: Request, res: Response) => {
  try {
    //todo: get swap status by req.params.id
    const order = orderStore.getOrderById(req.params.id);
    res.json({order});
  } catch (e: any) {
    console.error("GET /swap/:id err:", e);
    res.status(500).json({ error: "Failed to get swap status" });
  }
});


export default router;
