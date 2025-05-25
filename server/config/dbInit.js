const { defineUserModel } = require('../models/User');
const { Utils } = require('../config/db');


async function sync() {
    try {
        const User = await defineUserModel();
        await User.sync({ alter: true });
        console.log('Table Users synchronisée');
    } catch (err) {
        console.error(err);
    } finally {
         Utils.closeDatabaseConnection();
    }
}

sync();
