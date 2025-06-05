const { CollectionFn } = require("../service/CollectionService");

const serviceCollection = CollectionFn();

const createCollection = async (req, res) => {
  try {
    const { collection_name, collection_description } = req.body;
    const Collection = {
      collection_name: collection_name,
      collection_description: collection_description,
    };
    const result = await serviceCollection.createCollection(Collection);
    if (result) res.status(201).send({ status: "success", result });
    return res.status(400).json({ status: "Erreur lors de la création" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const result = serviceCollection.deleteCollection(id);
    if (result)
      return res
        .status(200)
        .json({
          status: "succes",
          message: "ImageSearchView supprimé",
          result,
        });
    return res.status(404).json({ status: "Échec de suppression" });
  } catch (err) {
    return res.status(500).json({ status: err.message });
  }
};
const getCollectionById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await serviceCollection.findCollectionId(id);
    if (result) res.status(201).send({ status: "success", result });
    return res.status(400).json({ status: "Erreur" });
  } catch (err) {
    return res.status(500).json({ status: err.message });
  }
};
const getAllCollections = async (req, res) => {
  try {
    const result = await serviceCollection.getAllCollections();
    if (result.status) {
      return res.status(200).json({
        status: "success",
        result: result.data,
      });
    }
    return res.status(400).json({ status: "Erreur" });
  } catch (err) {
    return res.status(500).json({ status: err.message });
  }
};

module.exports = {
  createCollection,
  getCollectionById,
  deleteCollection,
  getAllCollections,
};
