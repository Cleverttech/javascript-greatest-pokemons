// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (pokemons) => {
  const arr = [];
  pokemons.filter((p) => {
    p.type.includes("Fire") ? arr.push(p) : false;
  });
  return arr;
};

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

let shortestPokemon = (pokemons) => {
  if (pokemons.length == 0) return 0;
  // let heightNums = [];

  let shortest = pokemons
    .map((el) => {
      return Number(el.height.slice(0, 4));
    })
    .sort((a, b) => {
      return a - b;
    });

  // shortest = `${shortest} m`;
  // console.log(shortestStr);
  console.log(shortest[0]);

  // if (el.valueOf(height) === shortest) {
  //   // return pokemons.name;
  //   console.log(el.name);
  // }

  // console.log(shortest);
  return shortest;
};

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
