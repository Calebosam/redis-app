import express from "express";
import bodyParser from "body-parser";
import uploadsRouter from "./routers/uploadsRouter.js";

const app = express();

app.use(bodyParser.json());
app.use("/", (req, res) => {
  res.json({ status: "success", message: "App is running" });
});
app.use("/uploads", uploadsRouter);

export default app;
