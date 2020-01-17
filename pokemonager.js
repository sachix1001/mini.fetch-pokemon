(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      return fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
        .then((pokemonP) => pokemonP.json())
        .then((pokemonList) =>
          pokemonList.results.slice(0, n).map((pokemon) => {
            return pokemon.name;
          })
        );
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      async function getpokemonList() {
        const list = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
        );
        const arr = [];
        const pokemonInfo = await list.json();
        const pokemonList = await pokemonInfo.results;
        pokemonList.map((pokemon) => {
          async function getWeight() {
            const url = await pokemon.url;
            const pokemonJson = await fetch(url);
            arr.push(await pokemonJson.json());
            console.log(arr);
            // const weight = await pokemonWeight.weight;

            // val = weight;
          }
          getWeight();
          return val;
        });
      }
      return getpokemonList();
    }
  }
  // Your code here.
  // ** LIMIT TO THE FIRST 10 POKEMON
  // We don't want to make too many unnecessary calls to the Pokemon API
  // const pokemonWeight = [];
  // fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  //   .then((pokemonP) => pokemonP.json())
  //   .then((pokemonList) => {
  //     // const pokemonWeight = [];

  //     const temp = pokemonList.results.map((pokemon) => {
  //       const url = pokemon.url;
  //       fetch(url)
  //         .then((detailRequest) => detailRequest.json())
  //         .then((detail) => {
  //           // console.log(detail.weight);
  //           pokemonWeight.push(detail.weight);
  //           // const weight = detail.weight;
  //         });
  //       // console.log(weight);
  //     });
  //     Promise.all(temp);
  //     // console.log(`pokemonList : ${pokemonList}`);
  //     // console.log(`pokemonList.result : ${pokemonList.result}`);
  //     // console.log(`X = ${x}`);
  //     console.log(temp);
  //     // return pokemonWeight;
  //   });
  // // .then(() => {
  // //   console.log(pokemonWeight);
  // // });
  // // console.log(pokemonWeight);
  // return pokemonWeight;
  window.Pokemonager = Pokemonager;
})();
