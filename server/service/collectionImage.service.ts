// service/CollectionImage.service.ts
import { pool } from "../config/connection";
import { CollectionImage } from "../interfaces/CollectionImage";

export const collectionImageService = {
  async addImageToCollection(
    collection_id: number,
    image_id: string,
  ): Promise<boolean> {
    const [result] = await pool.query(
      "INSERT INTO CollectionImage (collectionId, imageId) VALUES (?, ?)",
      [collection_id, image_id],
    );
    return (result as any).affectedRows === 1;
  },

  async getImagesFromCollection(collection_id: number): Promise<any[]> {
    const [rows] = await pool.query(
      `SELECT Image.* FROM Image
       JOIN CollectionImage ON Image.id = CollectionImage.imageId
       WHERE CollectionImage.collectionId = ?`,
      [collection_id],
    );
    return rows as any[];
  },

  async removeImageFromCollection(
    collection_id: number,
    image_id: string,
  ): Promise<boolean> {
    const [result] = await pool.query(
      "DELETE FROM CollectionImage WHERE collectionId = ? AND imageId = ?",
      [collection_id, image_id],
    );
    return (result as any).affectedRows === 1;
  },
};
