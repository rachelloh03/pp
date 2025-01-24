//sometimes also known as index.js file

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
import cors from "cors";
import userRoutes from "./routes/users.js";

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
