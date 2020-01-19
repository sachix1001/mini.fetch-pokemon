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

    async findUnderWeight(weight) {
      let weightList = [];

      for (let i = 1; i <= 10; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pokemon = await pokemon.json();
        weightList.push(pokemon);
      }
      weightList = weightList.filter((pokemon) => pokemon.weight < weight);
      return weightList;
    }
  // }
  // findUnderWeight(weight) {
  //   const arr = []
  //   return fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  //   .then((pokemonP) => pokemonP.json())
  //   .then((pokemonList) => 
  //      pokemonList.results.map((pokemon) => {
  //       const url = pokemon.url;
  //       return fetch(url)
  //       .then((detailRequest) => detailRequest.json())
  //     })
  //   )
  //   .then(list => list.map(p => p.then(poke => {
  //     arr.push(poke)
  //   })))
  // }
}
  window.Pokemonager = Pokemonager;
})();
