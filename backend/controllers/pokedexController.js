const axios = require("axios");

const fetchPokemon = (req, res) => {
  let requestType = req.query.type;


  // create array of promises (1 promise per pokemon)
  let promiseArray = [];

  // create for loop to populate promise array
  for (let i = 1; i < 100; i++) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://pokeapi.co/api/v2/pokemon/" + i,
      headers: {},
    };

    let promise = axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    promiseArray.push(promise);

    
  }

  // create array to store pokemon data
  let allPokemonAPIData = [];

  // Promise.all to fetch all Pokemon data and add it to our array above

  Promise.all(promiseArray).then((values) => {
    console.log(values);
    allPokemonAPIData = values;

    res.status(200);
    res.json(allPokemonAPIData);
  });
};


module.exports = fetchPokemon;
