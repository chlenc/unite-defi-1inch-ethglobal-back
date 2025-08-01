import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import routes from "./routes";
import { schedulePendingCheck } from "./schedulers/schedulePendingCheck";

dotenv.config();
declare global {
  namespace Express {
    interface Application {
      locals: {};
    }
  }
}

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

schedulePendingCheck();

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
