import { Request, Response, Router } from "express";

const router = Router();

router.post("/swap", async (req: Request, res: Response) => {
  try {
    const { amount, token, network }: any = req.body;
    res.status(201).json({});
  } catch (e: any) {
    console.error("❌ POST /swap err:", e.response.data.message ?? e);
    res.status(500).json({ error: e.response.data.message ?? e });
  }
});

router.get("/swap/:id", async (req: Request, res: Response) => {
  try {
    //todo: get swap status
    res.json({});
  } catch (e: any) {
    console.error("GET /swap/:id err:", e);
    res.status(500).json({ error: "Failed to get swap status" });
  }
});


export default router;
