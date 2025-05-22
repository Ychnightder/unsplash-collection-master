class User {
	#Id;
	#email;
	#passwrd;

	constructor(Id, email, passwrd) {
		this.#Id = Id;
		this.#email = email;
		this.#passwrd = passwrd;
	}

	get Id() {
		return this.#Id;
	}
	get email() {
		return this.#email;
	}
	get passwrd() {
		return this.#passwrd;
	}

	toString() {
		return `${this.Id} | ${this.email} | ${this.passwrd} `;
	}
}

module.exports = User;
