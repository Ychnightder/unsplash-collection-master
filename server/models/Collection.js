const { DataTypes } = require('sequelize');
const { Utils } = require('../config/db');

const defineCollectionModel = async () =>{

    let sequelize = await Utils.connectToDatabase();
    return  sequelize.define('Collection', {
        collection_name: { type: DataTypes.STRING },
        collection_description: { type: DataTypes.STRING },
    });
};



module.exports = {
    defineCollectionModel
};