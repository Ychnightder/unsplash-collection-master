// routes/CollectionImage.routes.ts
import express from "express";
import {
  addImage,
  getImages,
  removeImage,
} from "../controllers/CollectionImage.controller";

const router = express.Router();

router.post("/:id/images", addImage); // Ajouter une image à une collection
router.get("/:id/images", getImages); // Obtenir toutes les images d'une collection
router.delete("/:id/images", removeImage); // Supprimer une image d'une collection

export default router;
