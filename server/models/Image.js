const { DataTypes } = require('sequelize');
const { Utils } = require('../config/db');

const defineImageModel = async () => {
    let sequelize = await Utils.connectToDatabase();
    return sequelize.define("Images",
        {
            Id_unsplash : {
                type: DataTypes.STRING
            } ,
            url : {
                type: DataTypes.STRING
            },
            Author : {
                type: DataTypes.STRING
            },
            published : {
                type: DataTypes.STRING
            },
            download_url : {
                type: DataTypes.STRING
            }

        },
        {
        tableName: 'Images',
        }
    );
}

module.exports = {
    defineImageModel
};