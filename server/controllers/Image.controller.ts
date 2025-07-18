// controller/Image.controller.ts
import { Request, Response } from "express";
import { imageService } from "../service/Image.service";

export async function getAllImages(req: Request, res: Response) {
  const images = await imageService.getAll();
  return res.json(images);
}

export async function getImageById(req: Request, res: Response) {
  const id = req.params.id;
  const image = await imageService.getById(id);
  if (!image) return res.status(404).json({ error: "Image not found" });
  return res.json(image);
}

export async function createImage(req: Request, res: Response) {
  const { id, url, author, publishedAt } = req.body;
  const success = await imageService.create({ id, url, author, publishedAt });
  if (!success)
    return res.status(400).json({ error: "Failed to create image" });
  return res.status(201).json({ success: true });
}

export async function deleteImage(req: Request, res: Response) {
  const id = req.params.id;
  const success = await imageService.delete(id);
  if (!success) return res.status(404).json({ error: "Image not found" });
  return res.status(200).json({ success: true });
}
