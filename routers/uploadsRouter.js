import express from "express";
import { getPhotos, setData } from "../controllers/photosController.js";

const router = express.Router();

router.route("/").get(getPhotos).post(setData);

export default router;
