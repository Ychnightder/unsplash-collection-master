// types/Image.ts
import { CollectionImage } from "./CollectionImage";

export interface Image {
  id: string; // Unsplash ID
  url?: string;
  author: string;
  publishedAt: Date;
  liked_by_user?: boolean | null;


  url_regular?: string | null;
  likes?: number | null;
  description?: string | null;


  url_raw?: string | null;
  url_full?: string | null;
  url_small?: string | null;
  url_thumb?: string | null;


  link_self?: string | null;
  link_download?: string | null;
  username?: string | null;
  user_name?: string | null;


  user_total_likes?: number | null;
  user_total_photos?: number | null;
  user_profile_image_medium?: string | null;


  collections?: CollectionImage[];
}
