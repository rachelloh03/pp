//sometimes also known as index.js file

import express from "express";
// import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

// import cors from "cors";
// import userRoutes from "./routes/users.js";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import client from "./connection.js";

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
client.connect();

app.get("/users", (req, res) => {
  client.query("Select * from users", (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log("hello");
    }
  });
  client.end();
});
