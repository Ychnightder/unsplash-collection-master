const express = require('express');
const cors = require('cors');
const { initializeModels } = require('./models');
const userRoutes = require("./routes/User.routes");
const ImageRoutes = require("./routes/Image.routes");
const CollectionRoutes = require("./routes/Collection.routes");
const collectionImageRoutes = require('./routes/collectionImage.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", ImageRoutes);
app.use("/api", CollectionRoutes);
app.use('/api', collectionImageRoutes);

(async () => {
    try {
        const { sequelize } = await initializeModels();
        await sequelize.sync({ alter: true });
        app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
    } catch (error) {
        console.error('Erreur lors de l\'initialisation des modèles:', error);
    }
})();
