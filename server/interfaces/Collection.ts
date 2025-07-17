// types/Collection.ts
import { CollectionImage } from "./CollectionImage";

export interface Collection {
  id: number;
  name: string;
  createdAt: Date;
  images?: CollectionImage[]; // Optionnel si tu joins les images
}
