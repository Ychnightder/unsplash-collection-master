const express = require("express");
const router = express.Router();
const CollectionController = require("../controllers/CollectionController");


router.get("/Collections", CollectionController.getAllCollections);
router.post("/Collections", CollectionController.createCollection);
router.get("/Collections/:id", CollectionController.getCollectionById);
router.delete("/Collections/:id", CollectionController.deleteCollection);

module.exports = router;
