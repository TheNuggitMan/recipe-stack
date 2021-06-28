document.getElementById('addRecipeBtn').addEventListener('click', getData)

function RecipeConstructor(recipeName, recipeTime, recipeIngredients, recipeMethod) {
    this.name = recipeName;
    this.time = recipeTime;
    this.ingredients = recipeIngredients;
    this.method = recipeMethod;
}

function getData() {
    let recipeName = document.getElementById('recipeName').value;
    let recipeTime = document.getElementById('recipeTime').value;
    let recipeIngredients = document.getElementById('recipeIngredients').value;
    let recipeMethod = document.getElementById('recipeMethod').value;

    //Create our recipe (constructor)
    let newRecipe = new RecipeConstructor(recipeName, recipeTime, recipeIngredients, recipeMethod);

    console.log(newRecipe.name, newRecipe.time);

    //Then run createElement function
    recipeCardCreator(newRecipe);

    document.getElementById('recipeName').value = "";
    document.getElementById('recipeTime').value = "";
    document.getElementById('recipeIngredients').value = "";
    document.getElementById('recipeMethod').value = "";
}

function recipeCardCreator(newRecipe) {
    const name = `${newRecipe.name}`;
    const time = `Cooking time: ${newRecipe.time}`;
    const ingredients = `Ingredients: ${newRecipe.ingredients}`;
    const method = `Method: ${newRecipe.method}`;

    let newCard = document.createElement("div");
    newCard.id = "container";
    let h1 = document.createElement("h1");
    h1.id = "recipeHeader";
    h1.className = "recipeHeading";

    console.log(newRecipe)

    //Will need to forEach the ingredient list, remove commas if any and create li elements for each ingredient.
    newCard.insertAdjacentHTML('afterbegin', '<h1 class="recipeHeading"></h1>');
    newCard.insertAdjacentHTML('beforeend', '<p class="recipeTiming"></p>');
    newCard.insertAdjacentHTML("beforeEnd", '<p class="recipeIngredientList"></p>');
    newCard.insertAdjacentHTML("beforeEnd", '<p class="recipeMethodText"></p>');

    let pageElement = document.getElementById('recipeForm');
    pageElement.insertAdjacentElement("afterend", newCard);

    document.querySelector('.recipeHeading').textContent = name;
    document.querySelector('.recipeTiming').textContent = time;
    document.querySelector('.recipeIngredientList').textContent = ingredients;
    document.querySelector('.recipeMethodText').textContent = method;

}
