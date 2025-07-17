import { Router } from "express";
import {
  createCollection,
  deleteCollection,
  getAllCollections,
  getCollectionById,
} from "../controllers/collection.controller";

const router = Router();
router.get("/", getAllCollections);
router.get("/:id", getCollectionById);
router.post("/", createCollection);
router.delete("/:id", deleteCollection);

export default router;
