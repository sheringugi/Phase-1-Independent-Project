    let url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    if (cocktail==null){
        url= 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    }
    else{
        url+=cocktail
    }
    // Get the list of all the cocktails
    fetch(url)
    .then(response => response.json())
    .then(cocktails => {
        // Display the list of cocktails searched in cards
        const list= document.querySelector('#cocktailsList');
        
        let cocktailCard = `<div class="card" style="width:400px">
            <div class="card-body">
            <h4 class="card-title">_COCKTAILNAME_</h4>
            <img class="card-img-bottom" src="_COCKTAILIMAGE_" alt="_COCKTAILNAME_" style="width:100%">
            <p class="card-text">_INGREDIENTS_</p>        
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal_MODALNUMBER_">How to Brew</button>
                        </div>
        </div>
      `
      //create empty string to hold each cocktail upon iteration
        let aggregateCocktails= ""
        let count= 1
        let cocktailRow=`<div class="row">`
        //create empty string to hold individual cocktail card 
        let tempCocktailCard=""
        cocktails.drinks.forEach(drink => {
            if (cocktail == null) {
                search = drink.strDrink
            }
        });
    });
            