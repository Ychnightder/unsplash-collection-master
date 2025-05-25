const express = require('express');
const cors = require('cors');
const { initializeModels } = require('./models');
const userRoutes = require("./routes/UserRoutes");
const ImageRoutes = require("./routes/ImageRoutes");
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", userRoutes);
app.use("/api", ImageRoutes);


(async () => {
    try {
        const { User, Image, Collection , sequelize } = await initializeModels();
        await sequelize.sync({ alter: true });
        app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
    } catch (error) {
        console.error('Erreur lors de l\'initialisation des modèles:', error);
    }
})();
