import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(
    colors.yellow("[Server] : ") +
      "Server is running on port" +
      colors.green(" 3000")
  );
});
