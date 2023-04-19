//require the express package
const express = require("express");
const port = 4000;
var pokedexRoute = require("./routes/pokedexRoute");

//create an app using the express
// package
const app = express();

//stops CORS browser error (npm install cors)
let cors = require("cors"); 
app.use(cors())

app.use("/", express.static("public"));

app.use("/pokemon", pokedexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
