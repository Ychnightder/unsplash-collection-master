const { ImageFn } = require('../service/ImageService');

const serviceImage = ImageFn();
const createImage = async (req, res) => {
    try {

        const {Id_unsplash, url,Author , published , download_url} = req.body;
        const image = {
            Id_unsplash: Id_unsplash,
            url: url,
            Author: Author,
            published: published,
            download_url: download_url,
        };
        const result = await serviceImage.createImage(image);
        if (result) res.status(201).send({status: 'success', result});
        return res.status(400).json({status: 'Erreur lors de la création' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const result = serviceImage.deleteImage(id);
        if (result) return res.status(200).json({status : "succes" , message: 'Image supprimé' , result });
        return res.status(404).json({ status: 'Échec de suppression' });
    } catch (err) {
        return res.status(500).json({ status: err.message });
    }
};
const getImageId = async (req, res) => {
    try {
        const  id  = req.params.id;
        const result = await  serviceImage.findImage(id);
        if (result) res.status(201).send({ status: 'success', result});
        return res.status(400).json({ status: 'Erreur' });
    } catch (err) {
        return res.status(500).json({ status: err.message });
    }
};
const getAllImages = async (req, res) => {
    try {
        const result = await serviceImage.getAllImages();
        if (result.status) {
            return res.status(200).json({
                status: 'success',
                result: result.data,
            });
        }
        return res.status(400).json({ status: 'Erreur' });
    } catch (err) {
        return res.status(500).json({ status: err.message });
    }
};

module.exports = {
    createImage,
    getImageId,
    deleteImage,
    getAllImages,
};
