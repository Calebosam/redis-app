import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import uploadsRouter from "./routers/uploadsRouter.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ status: "success", message: "App is running" });
});

app.use("/uploads", uploadsRouter);

export default app;
