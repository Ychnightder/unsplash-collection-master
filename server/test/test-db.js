const util = require('../config/db');

(async () => {
	const result = await util.Insert('Users', ['Email', 'Password'], ['yahoo@outlook.fr', '1234657']);
	console.log(result);
})();

(async () => {
	const result = await util.Select('Users');
	console.log(result);
})();

(async () => {
	const result = await util.Update('Users', {id: "1", Password: 'ychnightder' }, 'id = ?', [4]);
	console.log(result);
})();


(async () => {
	const result = await util.Delete("Users", "id = ?", [1]);
	console.log(result);
})();


