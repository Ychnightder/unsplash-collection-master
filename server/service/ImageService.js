const {Utils} = require('../config/db');
const { defineImageModel } = require('../models/Image');




const ImageFn = () => {

    let ImageDB;
    const init = async () => {
        if (!ImageDB) {
            ImageDB = await defineImageModel();
        }
    };

    /**
     * ajouter à la base
     * @param {{Id_unsplash: string, url: string, Author: string, published: string, download_url: string}} imageInstance
     * @return { result || boolean}
     * */
    const createImage = async imageInstance => {
        await init();
        try{
            const result = await ImageDB.create(imageInstance) ;
            return {status: true, result};
        }catch(err){
            return {status: false, message: err.message};
        }
    };
    /**
     * supprimer l'image de la base
     * @param {number} id
     *@return boolean
     **/
    const deleteImage = async (id) => {
        await init();
        try {
            const deletedCount = await ImageDB.destroy({ where: { id } });
            return deletedCount > 0;
        }catch(err){
            return false;
        }
    }
    /**
     * trouver dans  la base
     * @param {number} id
     * @return {defineImageModel }
     * */
    const findImage = async (id) => {
        await init();
        const image = await ImageDB.findOne({ where: { id: id } });
        if (!image) {
            return false;
        }
        return image || null;
    }
    /**
     * recuperer tous les images
     *@return [Images]
     * */
    const getAllImages = async () => {
        await init();
        try {
            const Images = await ImageDB.findAll({ raw: true });
            return { status: true, data: Images };
        } catch (err) {
            console.error('Erreur lors de la récupération des Images :', err);
            return { status: false, error: err.message };
        }
    }

    return {
        createImage,
        deleteImage,
        findImage,
        getAllImages,
    };
}

module.exports = {
    ImageFn,
}
