import express from "express";
import { getPhotos } from "../controllers/photosController.js";

const router = express.Router();

router.route("/").get(getPhotos);

export default router;
