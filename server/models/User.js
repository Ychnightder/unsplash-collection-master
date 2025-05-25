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

// class UserInit {
// 	#Id;
// 	#email;
// 	#password;
//
// 	constructor(Id = null, email, password) {
// 		this.#Id = Id;
// 		this.#email = email;
// 		this.#password = password;
// 	}
// 	get Id() {
// 		return this.#Id;
// 	}
// 	get email() {
// 		return this.#email;
// 	}
// 	get password() {
// 		return this.#password;
// 	}
//
// 	toString() {
// 		return `${this.Id} | ${this.email} | ${this.password} `;
// 	}
// }