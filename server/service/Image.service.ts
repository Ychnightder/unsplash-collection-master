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
    } = image;
    const [result] = await pool.query(
      `INSERT INTO Image (
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
    user_profile_image_medium
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
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
      ]
    );
    return (result as any).affectedRows === 1;
  },
  async delete(id: string): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM Image WHERE id = ?", [id]);
    return (result as any).affectedRows === 1;
  },
};
