import express from "express";
const app = express();
const PORT = 8080;
import cors from "cors";

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "hello world", people: ["harry", "jack", "barry"] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
