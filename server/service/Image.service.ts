import { pool } from "../config/connection";
import { Image } from "../interfaces/Image";

export const imageService = {
  async getAll(): Promise<Image[]> {
    const [rows] = await pool.query("SELECT * FROM Image ");
    return rows as Image[];
  },
  async getById(id: string): Promise<Image | null> {
    const [rows] = await pool.query("SELECT * FROM Image WHERE id = ?", [id]);
    const results = rows as Image[];
    return results.length > 0 ? results[0] : null;
  },
  async create(image: Image): Promise<boolean> {
    const { id, url, author, publishedAt } = image;
    const [result] = await pool.query(
      "INSERT INTO Image (id, url, author, publishedAt) VALUES (?, ?, ?, ?)",
      [id, url, author, publishedAt],
    );
    return (result as any).affectedRows === 1;
  },
  async delete(id: string): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM Image WHERE id = ?", [id]);
    return (result as any).affectedRows === 1;
  },
};
