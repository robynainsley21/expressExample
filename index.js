import express from "express";
import path from "path";
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT || 4000;
const productsURL = "http://localhost:3000/resources";

app.use(express.static("./static"));

//retrieving the data
async function getData(){
  return await (await fetch(productsURL)).json()
}

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/about.html"));
});

app.get("/products", (req, res) => {
  res.status(200,).json(data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
