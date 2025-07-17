// types/Image.ts
import { CollectionImage } from "./CollectionImage";

export interface Image {
  id: string; // Unsplash ID
  url: string;
  author: string;
  publishedAt: Date;
  collections?: CollectionImage[]; // Optionnel si tu joins les collections
}
