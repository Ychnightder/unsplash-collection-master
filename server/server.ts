import collectionRoutes from "./routes/collection.routes";
import imageRoutes from "./routes/Image.routes";
import collectionImageRoutes from "./routes/CollectionImage.routes";

const PORT = process.env.PORT || 3000;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/Collections", collectionRoutes);
app.use("/api/Images", imageRoutes);
app.use("/api/collections", collectionImageRoutes);

app.listen(PORT, () => {
  console.log(`🫱🏾‍🫲🏿 http://localhost:${PORT} 🫱🏾‍🫲🏿`);
});
