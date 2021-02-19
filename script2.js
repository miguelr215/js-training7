let recipe = ["salt", "pepper", "garlic", "beef", "sauce", "spaghetti"];
console.log(recipe);

let movingItem = recipe.pop();
console.log(recipe);

recipe.unshift(movingItem);
console.log(recipe);

recipe.sort();
console.log(recipe);

console.log(recipe[4]);

let foundItem = recipe.find(item => item === "garlic");
console.log(foundItem);

recipe.splice(2, 0, "bread");
console.log(recipe);

recipe.splice(2, 1);
console.log(recipe);

recipe = ["salt", "pepper", "garlic", "beef", "sauce", "spaghetti"];
let remove = "pepper";
recipe.splice(recipe.indexOf(remove), 1);
console.log(`Array with ${remove} removed`, recipe);