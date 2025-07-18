// controller/CollectionImage.controller.ts
import { Request, Response } from "express";
import { collectionImageService } from "../service/collectionImage.service";

export async function addImage(req: Request, res: Response) {
  const collection_id = Number(req.params.id);
  const { image_id } = req.body;

  const success = await collectionImageService.addImageToCollection(
    collection_id,
    image_id,
  );
  if (!success)
    return res.status(400).json({ error: "Failed to add image to collection" });

  res.status(201).json({ success: true });
}

export async function getImages(req: Request, res: Response) {
  const collection_id = Number(req.params.id);
  const images =
    await collectionImageService.getImagesFromCollection(collection_id);
  res.json(images);
}

export async function removeImage(req: Request, res: Response) {
  const collection_id = Number(req.params.id);
  const { image_id } = req.body;

  const success = await collectionImageService.removeImageFromCollection(
    collection_id,
    image_id,
  );
  if (!success) return res.status(404).json({ error: "Association not found" });

  res.json({ success: true });
}
