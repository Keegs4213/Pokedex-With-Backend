const express = require("express");
const fetchPokemon = require("../controllers/pokedexController");

const router = express.Router();

router.get("/", fetchPokemon);

module.exports = router;
