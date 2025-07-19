import { fakeImage } from './data.js';

export async function fetchTestImagesTest(limit = 30, page = 1) {
	try {
		const images = Array.from({ length: limit }, (_, i) => {
			const clone = JSON.parse(JSON.stringify(fakeImage));

			const imgId = 1018 + i;
			clone.id = `fake-${imgId}`;
			const width = 800;
			const height = 1200;

			clone.urls = {
				raw: `https://picsum.photos/${width * 5}/${height * 5}?random=${imgId}`,
				full: `https://picsum.photos/${width * 2}/${height * 2}?random=${imgId}`,
				regular: `https://picsum.photos/${width}/${height}?random=${imgId}`,
				small: `https://picsum.photos/${width / 2}/${height / 2}?random=${imgId}`,
				thumb: `https://picsum.photos/${width / 4}/${height / 4}?random=${imgId}`,
			};
			clone.links.download = clone.urls.full;

			return clone;
		});
		return images;
	} catch (error) {
		console.error('Erreur lors de la récupération des images :', error);
		return [];
	}
}
