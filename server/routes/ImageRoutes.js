const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");


router.get("/image", ImageController.getAllImages);
router.post("/image", ImageController.createImage);
router.get("/image/:id", ImageController.getImageId);
router.delete("/image/:id", ImageController.deleteImage);

module.exports = router;
