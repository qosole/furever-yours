//created an event listener for the generate animals btn






$(document).on("click", "#searchbtn", function (event) {
  
    

// this empties the card container for the user when they generate new recipes 
    cardContanier.empty()

    var breedParse = queryStringifyIngredients()
// the api call takes in the variable above so that it can generate recipes when the ingredients choosen
    var makeRecipes = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=c8ae3021308e4c6fa278becfa56df80b&ingredients=" + ingredientParse + "&number=9&ranking=2"
    $.ajax({
        url: makeRecipes,
        method: "GET"

    })
        .then(function (response) {

            console.log(response)


// call on generate recipes card function 
            generateRecipeCards(response)

        })

});
