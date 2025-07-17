import { pool } from "../config/connection";
import { Collection } from "../interfaces/Collection";

export const collectionService = {
  async getAll(): Promise<Collection[]> {
    const [rows] = await pool.query("SELECT * FROM Collection ");
    return rows as Collection[];
  },
  async getById(id: number): Promise<Collection | null> {
    const [rows] = await pool.query("SELECT * FROM Collection WHERE id = ?", [
      id,
    ]);
    const results = rows as Collection[];
    return results.length > 0 ? results[0] : null;
  },
  async create(name: string): Promise<boolean> {
    const [result] = await pool.query(
      "INSERT INTO Collection (name) VALUES (?)",
      [name],
    );
    // @ts-ignore
    return (result as any).affectedRows > 0;
  },
  async delete(id: number): Promise<boolean> {
    const [result] = await pool.query("DELETE FROM Collection WHERE id = ?", [
      id,
    ]);
    // @ts-ignore
    return (result as any).affectedRows > 0;
  },
};
