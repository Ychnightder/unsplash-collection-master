const { initializeModels } = require("../models/index");

const CollectionImageFn = () => {
  let Collection, Image;

  const init = async () => {
    if (!Collection || !Image) {
      const models = await initializeModels();
      Collection = models.Collection;
      Image = models.Image;
    }
  };
  const addImageToCollection = async (collectionId, imageId) => {
    await init();

    const collection = await Collection.findByPk(collectionId);
    if (!collection) return { status: false, message: "Collection not found" };

    const image = await Image.findByPk(imageId);
    if (!image) return { status: false, message: "ImageSearchView not found" };

    await collection.addImage(image);
    return { status: true };
  };
  const getImagesByCollection = async (collectionId) => {
    await init();

    const collection = await Collection.findByPk(collectionId, {
      include: {
        association: "images",
        through: { attributes: [] },
      },
    });

    if (!collection) return { status: false, message: "Collection not found" };

    return { status: true, data: collection.images };
  };
  const removeImageFromCollection = async (collectionId, imageId) => {
    await init();

    const collection = await Collection.findByPk(collectionId);
    if (!collection) return { status: false, message: "Collection not found" };

    const image = await Image.findByPk(imageId);
    if (!image) return { status: false, message: "ImageSearchView not found" };

    await collection.removeImage(image);
    return { status: true };
  };

  return {
    addImageToCollection,
    getImagesByCollection,
    removeImageFromCollection,
  };
};

module.exports = { CollectionImageFn };
