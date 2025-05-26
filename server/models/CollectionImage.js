// models/CollectionImage.js
const { DataTypes } = require('sequelize');
const { Utils } = require('../config/db');

const defineCollectionImageModel = async () => {
    const sequelize = await Utils.connectToDatabase();
    return sequelize.define(
        'CollectionImage',
        {
            addedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: 'Collection-Images',
            timestamps: false
        }
    );
};

module.exports = { defineCollectionImageModel };
