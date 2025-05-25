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
				process.env.DB_NAME || 'ychnightder_unsplashcollectionmaster',
				process.env.DB_USER || '401996',
				process.env.DB_PASSWORD || 'Ychnightder7@',
				{
					host: process.env.DB_HOST || 'mysql-ychnightder.alwaysdata.net',
					port: process.env.DB_PORT || 3306,
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
