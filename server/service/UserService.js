const {Utils} = require('../config/db');
const { defineUserModel } = require('../models/User');
const bcrypt = require('bcrypt');

const UserFn = () => {

	let UserDB;
	const init = async () => {
		if (!UserDB) {
			UserDB = await defineUserModel();
		}
	};

	/**
	 * Crée un utilisateur
	 * @return object
	 */
	const createUser = async userInstance => {
		await init();

		if (userInstance.password) {
			userInstance.password = await hashPassword(userInstance.password);
		}

		try {
			let result = await UserDB.create(userInstance);

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
	 * Hachage du mot de passe
	 * @param {string} password
	 * @return string
	 */
	const hashPassword = async password => {
		const saltRounds = 10;
		return await bcrypt.hash(password, saltRounds);
	};
	/**
	 * Vérifie un mot de passe
	 * @param {string} password
	 * @param {string} hash
	 * @return string
	 */
	const verifyPassword = async (password, hash) => {
		return await bcrypt.compare(password, hash);
	};
	/**
	 * Cherche un utilisateur par email
	 * @param {string} email
	 * @return  Promise<boolean>
	 */
	const findUserByEmail = async email => {
		await init();
		const user = await UserDB.findOne({ where: { email: email } });
		if (!user) {
			return false;
		}
		return user || null;
	};
	/**
	 * Supprime un utilisateur par ID
	 * @param {number} id
	 * @return boolean
	 */
	const deleteUser = async id => {
		await init();
		const deletedCount = await UserDB.destroy({ where: { id } });
		return deletedCount > 0;
	};

	const getAllUsers = async () => {
		try {
			await init();
			const users = await UserDB.findAll({ raw: true });
			return { status: true, data: users };
		} catch (err) {
			console.error('Erreur lors de la récupération des utilisateurs :', err);
			return { status: false, error: err.message };
		}
	};

	return {
		createUser,
		findUserByEmail,
		hashPassword,
		verifyPassword,
		deleteUser,
		getAllUsers,
	};
};

module.exports = {
	UserFn
};


// createUser(user)
// findUserByEmail(email)
// getUserById(id)
// deleteUser(id)
// updateUserEmail(id, newEmail)
// hashPassword(password)
// verifyPassword(password, hash)