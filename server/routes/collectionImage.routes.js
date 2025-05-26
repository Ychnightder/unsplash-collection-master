const express = require('express');
const router = express.Router();
const CollectionImageController = require('../controllers/CollectionImageController');

router.post('/collections/:collectionId/images', CollectionImageController.addImageToCollection);
router.get('/collections/:collectionId/images', CollectionImageController.getImagesByCollection);
router.delete('/collections/:collectionId/images/:imageId', CollectionImageController.removeImageFromCollection);

module.exports = router;