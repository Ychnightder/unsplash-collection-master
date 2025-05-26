const { CollectionImageFn } = require('../service/CollectionImageService');
const service = CollectionImageFn();

const addImageToCollection = async (req, res) => {
    try {
        const { collectionId } = req.params;
        const { imageId } = req.body;

        const result = await service.addImageToCollection(collectionId, imageId);
        if (result.status) return res.status(200).json({ message: 'Image added to collection' });

        return res.status(404).json({ error: result.message });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getImagesByCollection = async (req, res) => {
    try {
        const { collectionId } = req.params;

        const result = await service.getImagesByCollection(collectionId);
        if (result.status) return res.status(200).json({ images: result.data });

        return res.status(404).json({ error: result.message });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const removeImageFromCollection = async (req, res) => {
    try {
        const { collectionId, imageId } = req.params;

        const result = await service.removeImageFromCollection(collectionId, imageId);
        if (result.status) return res.status(200).json({ message: 'Image removed from collection' });

        return res.status(404).json({ error: result.message });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addImageToCollection,
    getImagesByCollection,
    removeImageFromCollection,
};
