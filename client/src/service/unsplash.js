export async function fetchTestImagesTest(limit = 30, page = 1) {
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);
    return [];
  }
}
