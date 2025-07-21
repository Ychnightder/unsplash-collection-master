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
  try{
    const {
      id,
      url,
      author,
      publishedAt,
      liked_by_user,
      url_regular,
      likes,
      description,
      url_raw,
      url_full,
      url_small,
      url_thumb,
      link_self,
      link_download,
      username,
      user_name,
      user_total_likes,
      user_total_photos,
      user_profile_image_medium,
    } = req.body;

    if (!id || !url || !author || !publishedAt) {
      return res.status(400).json({ error: "Champs obligatoires manquants" });
    }

    const success = await imageService.create({
      id,
      url,
      author,
      publishedAt,
      liked_by_user,
      url_regular,
      likes,
      description,
      url_raw,
      url_full,
      url_small,
      url_thumb,
      link_self,
      link_download,
      username,
      user_name,
      user_total_likes,
      user_total_photos,
      user_profile_image_medium,
    });
    if (!success)
      return res.status(400).json({ error: "Failed to create image" });
    return res.status(201).json({ success: true });

} catch (error) {
  console.error("Erreur createImage:", error);
  return res.status(500).json({ error: "Erreur serveur" });
}
}

export async function deleteImage(req: Request, res: Response) {
  const id = req.params.id;
  const success = await imageService.delete(id);
  if (!success) return res.status(404).json({ error: "Image not found" });
  return res.status(200).json({ success: true });
}
