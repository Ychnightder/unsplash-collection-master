require('dotenv').config({path:'../../.env'});
const mysql = require('mysql2/promise');


const Utils = () => {
	let pool = null;

	/**
	 * connexions à la base de données  .
	 * @returns {Promise<Pool>} Une pool MySQL2 Promise.
	 */
	const connectToDatabase = async () => {
		if (!pool) {
			pool = mysql.createPool({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME,
				port: process.env.DB_PORT || 3306,
				waitForConnections: true,
				connectionLimit: 10,
			});
		}
		return pool;
	};
	/**
	 * Ferme proprement la connexion à la base de données.
	 * @returns {Promise<void>}
	 */
	const closeDatabaseConnection = async () => {
		if (pool) {
			await pool.end();
			pool = null;
		}
	};

	/**
	 * Récupère les données d'une table.
	 * @param {string} table - Nom de la table.
	 * @param {string[]} [columns=['*']] - Colonnes à sélectionner.
	 * @returns {Promise<Array>} Résultats de la requête.
	 */

	const Select = async (table, columns = ['*']) => {
		try {
			const pool = await connectToDatabase();
			const fields = columns.join(',');
			const [results] = await pool.query(`SELECT ${fields} FROM ??`, [table]);
			return results;
		} catch (error) {
			console.log(error.message);
		} finally {
			connectToDatabase();
		}
	};

	/**
	 * Insère une ligne dans une table.
	 * @param {string} table - Nom de la table.
	 * @param {string[]} columns - Colonnes concernées.
	 * @param {any[]} data - Données à insérer (même ordre que les colonnes).
	 * @returns {Promise<Object>} Résultat de la requête.
	 */
	const Insert = async (table, columns, data) => {
		try {
			const pool = await connectToDatabase();

			const columnsPlaceholder = columns.map(() => '??').join(', ');
			const valuesPlaceholder = columns.map(() => '?').join(', ');
			const sql = `INSERT INTO ?? (${columnsPlaceholder}) VALUES (${valuesPlaceholder})`;
			const params = [table, ...columns, ...data];
			const [results] = await pool.query(sql, params);
			return results;
		} catch (error) {
			console.log(error.message);
		} finally {
			connectToDatabase();
		}
	};

	/**
	 * Met à jour une ou plusieurs lignes dans une table.
	 * @param {string} table - Nom de la table.
	 * @param {Object} dataToUpdate - Clé/valeurs des champs à mettre à jour.
	 * @param {string} whereClause - Clause WHERE (ex: 'id = ?').
	 * @param {any[]} whereValues - Valeurs pour les `?` du WHERE.
	 * @returns {Promise<Object>} Résultat de la requête.
	 */
	const Update = async (table, dataToUpdate, whereClause, whereValues) => {
		try {
			const pool = await connectToDatabase();

			const setFields = Object.keys(dataToUpdate)
				.map((field) => `${field} = ?`)
				.join(', ');

			const values = [...Object.values(dataToUpdate), ...whereValues];

			const sql = `UPDATE ?? SET ${setFields} WHERE ${whereClause}`;
			const [results] = await pool.query(sql, [table, ...values]);

			return results;
		} catch (error) {
			console.log(error.message);
		} finally {
			connectToDatabase();
		}
	};

	/**
	 * Supprime une ou plusieurs lignes dans une table.
	 * @param {string} table - Nom de la table.
	 * @param {string} whereClause - Clause WHERE (ex: 'id = ?').
	 * @param {any[]} whereValues - Valeurs pour les `?` du WHERE.
	 * @returns {Promise<Object>} Résultat de la requête.
	 */
	const Delete = async (table, whereClause, whereValues) => {
		try {
			const pool = await connectToDatabase();

			const sql = `DELETE FROM ?? WHERE ${whereClause}`;

			const [results] = await pool.query(sql, [table, ...whereValues]);

			return results;
		} catch (error) {
			console.log(error.message);
		}finally{
            connectToDatabase( );
        }
	};

	return {
		connectToDatabase,
		closeDatabaseConnection,
		Insert,
		Update,
		Delete,
		Select,
	};
};

module.exports = Utils();

// createUser(user)
// findUserByEmail(email)
// getUserById(id)
// deleteUser(id)
// updateUserEmail(id, newEmail)
// hashPassword(password)
// verifyPassword(password, hash)
// getAllCollections()
// getCollectionById(collectionId)
// createCollection(name)
// deleteCollection(collectionId)
// addImageToCollection(collectionId, imageData)
// removeImageFromCollection(collectionId, imageId)
// getImagesInCollection(collectionId)
// getImageDetails(imageId)
// searchUnsplashImages(query)
// fetchUnsplashImageById(id)
