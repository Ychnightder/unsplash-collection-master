const {Utils} = require('../config/db');
const {defineUserModel} = require('./User');
const {defineImageModel} = require('./Image');
const {defineCollectionModel} = require('./Collection');

async function initializeModels(){

    const User = await defineUserModel();
    const Image = await defineImageModel();
    const Collection = await defineCollectionModel();
    const sequelize = await Utils.connectToDatabase();

    User.hasMany(await Collection, { foreignKey: 'userId', as: 'collections' });
    Collection.belongsTo(await User, { foreignKey: 'userId', as: 'user' });

    // Relation plusieurs à plusieurs entre Collection et Image via une table de jointure
    Collection.belongsToMany(Image, {
        through: 'Collection-Images',
        foreignKey: 'collection_id',
        otherKey: 'image_id',
        as: 'images',
    });
    Image.belongsToMany(Collection, {
        through: 'Collection-Images',
        foreignKey: 'image_id',
        otherKey: 'collection_id',
        as: 'collections',
    });

    return {
        User,
        Image,
        Collection,
        sequelize
    };
}

module.exports = {initializeModels};

