const {Utils} = require('../config/db');
const { defineCollectionModel } = require('../models/Collection');

const CollectionFn = () => {
    let CollectionDB;
    const init = async () => {
        if (!CollectionDB) {
            CollectionDB = await defineCollectionModel();
        }
    };
    /**
     * Crée une Collection
     * @return
     */
    const createCollection = async CollectionInstance => {
        await init();
        try {
            let result = await CollectionDB.create(CollectionInstance);
            return {
                status: true,
                result,
                data: { user: result },
            };
        } catch (err) {
            return {
                status: false,
            };
        }
    };

    /**
     * Cherche un Collection par l'id
     * @param {number} id
     * @return  Promise<boolean>
     */
    const findCollectionId = async id => {
        await init();
        const Collection = await CollectionDB.findOne({ where: { id: id } });
        if (!Collection) {
            return false;
        }
        return Collection || null;
    };
    /**
     * Supprime un utilisateur par ID
     * @param {number} id
     * @return boolean
     */
    const deleteCollection = async id => {
        await init();
        const deletedCount = await CollectionDB.destroy({ where: { id } });
        return deletedCount > 0;
    };
    /**
     * recuperer les Collections
     * @return [Collections]
     */
    const getAllCollections = async () => {
        try {
            await init();
            const Collections = await CollectionDB.findAll({ raw: true });
            return { status: true, data: Collections };
        } catch (err) {
            console.error('Erreur lors de la récupération des utilisateurs :', err);
            return { status: false, error: err.message };
        }
    };
    return {
        createCollection,
        findCollectionId,
        deleteCollection,
        getAllCollections,
    };
};

module.exports = {
     CollectionFn
};


