// types/CollectionImage.ts
import { Image } from "./Image";
import { Collection } from "./Collection";

export interface CollectionImage {
  collectionId: number;
  imageId: string;
  collection?: Collection; // Optionnel pour jointure
  image?: Image; // Optionnel pour jointure
}
