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
        
        let cocktailCard = `
        <div class="card" style="width:400px">
            <div class="card-body">
                <h4 class="card-title">_COCKTAILNAME_</h4>
                <img class="card-img-bottom" src="_COCKTAILIMAGE_" alt="_COCKTAILNAME_" style="width:100%">
                <p class="card-text">_INGREDIENTS_</p>        
            </div>
        </div>
      `
    });