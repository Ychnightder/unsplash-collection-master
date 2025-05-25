const { DataTypes } = require('sequelize');
const { Utils } = require('../config/db');

const defineUserModel = async () => {
	let sequelize = await Utils.connectToDatabase();
	return sequelize.define(
		'User',
		{
			email: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			tableName: 'Users',
			timestamps: true,
		}
	);
};


module.exports = {
	defineUserModel
};