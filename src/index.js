function displayRecipe(response) {





  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    html: true
  });
}


function generateRecipe(event) {
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "8d5t2fef6ec3ec9b6a24fff70o406b36";
let prompt = `User instructions: Generate a recipe using ${instructionsInput.value}`;
let context = "You are a recipe generator expert and love to write recipes.  The recipes must be in imperial measurements. Your mission is to generate a recipe in basic HTML and do not include the word html. Make sure you follow user instructions";
let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `Generating  a recipe using ${instructionsInput.value}`;


axios.get(apiURL).then(displayRecipe);
  

}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
