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
            <!-- Modal -->
            <div class="modal fade" id="myModal_MODALNUMBER_" role="dialog">
                <div class="modal-dialog">
                
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                    <div class="text-center">
                        <h4 class="modal-title">_COCKTAILNAME_</h4>
                    </div>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- <p>Click on the heart to love or un-love this post.</p>
                    <span name ="heart" id="heart_HEART_"><i class="fa fa-heart" aria-hidden="true"></i> </span>-->
                    
                    <div class="modal-body">
                    <img class="card-img-bottom" src="_COCKTAILIMAGE_" alt="_COCKTAILNAME_" style="width:100%">
                    <label>Ingredients</label>
                    <p class="card-text">_INGREDIENTS_</p>
                    <label>Instructions</label>
                    <p>_INSTRUCTIONS_</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="close-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div>
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
            
            //replace placeholders with the data to be dispalyed in the cards
            tempCocktailCard= cocktailCard
            tempCocktailCard = tempCocktailCard.replace(/_COCKTAILIMAGE_/g, drink.strDrinkThumb);
            tempCocktailCard = tempCocktailCard.replace(/_COCKTAILNAME_/g, drink.strDrink);
            
            
            // limit the number of cards displayed on one row to four
            tempCocktailCard = tempCocktailCard.replace(/_MODALNUMBER_/g, count);
            if (count%4===0){
                cocktailRow+= tempCocktailCard + `</div>`
                aggregateCocktails += cocktailRow
                if (count!==cocktails.drinks.count){
                    cocktailRow= `<div class="row">`
                }
            }
            else{
                cocktailRow+= tempCocktailCard 
            }
            
            count++
            
                    
        });
        if (count < 4) {
            aggregateCocktails += tempCocktailCard + `</div>`
        }
        //append the element: cards for cocktail(s) searched
        list.innerHTML= aggregateCocktails;
                        
            
        });
   