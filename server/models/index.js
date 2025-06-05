const { Utils } = require("../config/db");
const { defineUserModel } = require("./User");
const { defineImageModel } = require("./Image");
const { defineCollectionModel } = require("./Collection");
const { defineCollectionImageModel } = require("./CollectionImage");

async function initializeModels() {
  const sequelize = await Utils.connectToDatabase();

  const User = await defineUserModel();
  const Image = await defineImageModel();
  const Collection = await defineCollectionModel();
  const CollectionImage = await defineCollectionImageModel();

  User.hasMany(Collection, { foreignKey: "userId", as: "collections" });
  Collection.belongsTo(User, { foreignKey: "userId", as: "user" });

  // Relation plusieurs à plusieurs entre Collection et ImageSearchView via une table de jointure
  Collection.belongsToMany(Image, {
    through: CollectionImage,
    foreignKey: "collection_id",
    otherKey: "image_id",
    as: "images",
  });
  Image.belongsToMany(Collection, {
    through: CollectionImage,
    foreignKey: "image_id",
    otherKey: "collection_id",
    as: "collections",
  });

  return {
    sequelize,
    User,
    Image,
    Collection,
    CollectionImage,
  };
}

module.exports = { initializeModels };
