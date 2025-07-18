// routes/Image.routes.ts
import express from "express";
import {
  createImage,
  deleteImage,
  getAllImages,
  getImageById,
} from "../controllers/Image.controller";

const router = express.Router();

router.get("/", getAllImages);
router.get("/:id", getImageById);
router.post("/", createImage);
router.delete("/:id", deleteImage);

export default router;
