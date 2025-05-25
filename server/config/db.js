require('dotenv').config({ path: `../../.env` });
const { Sequelize } = require('sequelize');

const Utils = (() => {
	let sequelize = null;
	/**
	 * Connection avec la base
	 * @return sequelize
	 * */
	const connectToDatabase = async () => {
		if (!sequelize) {
			sequelize = new Sequelize(
				process.env.DB_NAME ,
				process.env.DB_USER ,
				process.env.DB_PASSWORD ,
				{
					host: process.env.DB_HOST ,
					port: process.env.DB_PORT ,
					dialect: 'mysql',
					logging: false,
				}
			);
		}
		// const [results] = await sequelize.query('SELECT * FROM Users');
		// console.log('Utilisateurs en base :', results);

		return sequelize;
	};
	/**
	 * Ferme proprement la connexion à la base de données.
	 * @returns boolean
	 */
	const closeDatabaseConnection = async () => {
		if (sequelize) {
			await sequelize.close();
			sequelize = null;
			console.log('close ! ');
			return true;
		}
		return false;
	};
	return {
		connectToDatabase,
		closeDatabaseConnection,
	};
})();

module.exports = {
	Utils,
};





let sequelize = Utils.connectToDatabase();
