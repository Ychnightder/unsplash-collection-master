const { initializeModels } = require('../../models');
(async () => {
    const { Collection, Image } = await initializeModels();

    const collection = await Collection.findByPk(1);
    console.log(typeof collection.addImage); // doit afficher "function"
    console.log(typeof collection.removeImage); // doit afficher "function"
})();
