const { UserFn } = require('../service/UserService');

const serviceUser = UserFn();

const createUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = { email: email, password: password };
		const result = await serviceUser.createUser(user);
		if (result) res.status(201).send({ status: 'success' , result });
		return res.status(400).json({ status: 'Erreur lors de la création' });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};
const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const result = serviceUser.deleteUser(id);
		if (result) return res.status(200).json({status : "succes" , message: 'Utilisateur supprimé' , result });
		return res.status(404).json({ status: 'Échec de suppression' });
	} catch (err) {
		return res.status(500).json({ status: err.message });
	}
};
const getUserByEmail = async (req, res) => {
		try {
			const  email  = req.params.email;
			const result = await  serviceUser.findUserByEmail(email);
			if (result) res.status(201).send({ status: 'success', result});
			return res.status(400).json({ status: 'Erreur' });
		} catch (err) {
			return res.status(500).json({ status: err.message });
		}
};
const getAllUsers = async (req, res) => {
	try {
		const result = await serviceUser.getAllUsers();
		if (result.status) {
			return res.status(200).json({
				status: 'success',
				result: result.data,
			});
		}
		return res.status(400).json({ status: 'Erreur' });
	} catch (err) {
		return res.status(500).json({ status: err.message });
	}
};

module.exports = {
	createUser,
	getUserByEmail,
	deleteUser,
	getAllUsers,
};
