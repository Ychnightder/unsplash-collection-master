import { Request, Response } from "express";
import { collectionService } from "../service/Collection.service";

export async function getAllCollections(req: Request, res: Response) {
  try {
    const collections = await collectionService.getAll();
    res.status(200).json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getCollectionById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });
  try {
    const collection = await collectionService.getById(id);
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(200).json(collection);
  } catch (error) {
    console.error("Error fetching collection:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createCollection(req: Request, res: Response) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  try {
    const success = await collectionService.create(name);
    if (success) {
      res.status(201).json({ message: "Collection created" });
    } else {
      res.status(500).json({ message: "Failed to create collection" });
    }
  } catch (error) {
    console.error("Error creating collection:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteCollection(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid id" });

  try {
    const success = await collectionService.delete(id);
    if (success) {
      res.status(200).json({ message: "Collection deleted" });
    } else {
      res.status(404).json({ message: "Collection not found" });
    }
  } catch (error) {
    console.error("Error deleting collection:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
