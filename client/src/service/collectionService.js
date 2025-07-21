
import axios from "axios"
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function fetchCollections() {
  const { data } = await api.get( "/collections")
  return data
}

export async function addImageToCollection(imageId, collectionId) {
  await api.post(`/collections/${collectionId}/images`, { imageId })
}