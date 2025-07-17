import collectionRoutes from "./routes/collection.routes";

const PORT = process.env.PORT || 3000;

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/Collections", collectionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
