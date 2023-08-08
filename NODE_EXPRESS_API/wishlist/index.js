const express = require("express");
const app = express();
const port = 3000;

//const wishLists = require('./wishlist.js');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//import wishLists from './wishlist.js';

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});