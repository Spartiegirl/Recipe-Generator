function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Beef and Broccli",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  recipeElement.innerHTML = "Beef and Broccli";
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
