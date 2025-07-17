import { collectionService } from "../../service/Collection.service";

async function main() {
  try {
    const collections = await collectionService.getAll();

    if (collections.length === 0) {
      console.log("Aucune collection trouvée.");
    } else {
      console.log("📚 Collections disponibles :\n");
      collections.forEach((collection, index) => {
        console.log(`🔹 Collection ${index + 1}`);
        console.log(`ID        : ${collection.id}`);
        console.log(`Nom       : ${collection.name}`);
        console.log(`Créée le  : ${collection.createdAt}`);
        console.log("--------------------------------------------------");
      });
    }
  } catch (err) {
    console.error("❌ Erreur lors de la récupération des collections :", err);
  } finally {
  }
}

main();
