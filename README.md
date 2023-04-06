# Cocktail O'clock App

This is a web application that allows users to search for a specific cocktail or get a random cocktail. The application utilizes the [**TheCocktailDB API**](https://www.thecocktaildb.com/api.php) to fetch the information on cocktails.

## Functionality

The main function of the code is `getCocktails()`, which takes two arguments: `cocktail` (the name of the cocktail to search for) and `language` (the language in which to display the instructions). The function constructs a URL to make a request to the CocktailDB API based on the arguments passed to it, then uses the Fetch API to make the request and retrieve the data. The data is then used to create the cocktail cards and populate them with the relevant information, including the name, image, and ingredients of each cocktail.

The function also creates a modal box for each cocktail card, which is displayed when the "How to Brew" button on the card is clicked. The modal box contains more details about the cocktail, including the instructions for making it.

The modal dialog box contains the following information:

**Cocktail name**

**Image**

**List of ingredients**

**Instructions for making the cocktail in language selected**

### Installation and Setup
To use this application, follow these steps:

1. Clone this [repository](https://github.com/sheringugi/Phase-1-Independent-Project) to your local machine.

2. Open the index.html file in your web browser.


## Usage

To use the application, open the `index.html` file in a web browser. You can then search for a specific cocktail by entering its name in the search bar or get a random cocktail by refreshing the `index.html` browser page. The matching cocktails will be displayed as cards below the search bar. Clicking on the "How to Brew" button on a card will open a modal box with more details about the cocktail, including the instructions for making it. To change the language of the instructions, select a language from the dropdown menu.

To use this code, simply call the getCocktails(cocktail) function and pass in a cocktail name as the parameter to search for a specific cocktail. If no parameter is specified, a random cocktail will be returned.

### Example

````
getCocktails("margarita");
````
This will search for a cocktail with the name "margarita".

````
getCocktails();
````

This will return a random cocktail.

# Access to Cocktail O'clock App

This application has been deployed using Github Pages. Click [here](https://sheringugi.github.io/Phase-1-Independent-Project/) to access Cocktail O'clock App.  


## Implementation

The code is written in JavaScript and uses the Fetch API to make requests to the CocktailDB API. The application is designed as a single-page application with a simple user interface that allows users to search for cocktails, view the search results, and interact with the cocktail cards to view more details about the cocktails. The code also uses Bootstrap to style the user interface and jQuery to handle events and DOM manipulation.


## Dependencies

This application uses the following dependencies:

Bootstrap v4.5.3

Font Awesome v5.15.3

These dependencies are included in the index.html file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---