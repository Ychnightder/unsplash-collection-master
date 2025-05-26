const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");


router.get("/images", ImageController.getAllImages);
router.post("/images", ImageController.createImage);
router.get("/images/:id", ImageController.getImageId);
router.delete("/images/:id", ImageController.deleteImage);

module.exports = router;
