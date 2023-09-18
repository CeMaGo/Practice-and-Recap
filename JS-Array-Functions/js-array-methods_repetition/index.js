const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipe) => {
  return (recipe.title)
})
console.log('Only Titles: ',onlyTitles);
 // ['Crepes', ...]

const titlesWithDuration = recipes.map((recipe) => {
  const title = recipe.title
  const duration = recipe.duration
  return (`${title} (${duration}min)`)
});
console.log('Titel with Duration :',titlesWithDuration);
 // ['Crepes (60min)', ...]

const timePerServing = recipes.map((recipe) => {
  return ( recipe.duration / recipe.servings)
});
console.log('Time per Serving: ',timePerServing) 
// [20, 10, 432, 12]

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

// 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  const DurationWithin60min = recipe.duration <= 60
  return (DurationWithin60min)
});
console.log('Less than 61min :', recipesThatOnlyTake60minutesOrLess);
const allRecipesWithMoreThan2Servings = null;

const allRecipesWithTitlesLongerThan12Characters = null;

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  // allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
