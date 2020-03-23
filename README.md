# Use the external Pokedex API

Write a simple application for displaying pokemon from the API https://pokeapi.co/

Start by just displaying the Pokemon names in a grid with a header on the page.

https://pokeapi.co/api/v2/pokemon?limit=900 (gets 900)

### Challenges:
* Enhance your solution to display an image and the name for the pokemon in your client. You can fetch the Pokemon at endpoint below, then use the pokemon id to build your IMG tags for each one and display in a grid.

Hint for images: 
- Unzip the zip file included in this repo into a subdirectory `img` under `/public`
- Build an image link by extracting data from the web service response
```
let pokemon_url_parts = pokemon.url.split('/');
let pokemon_id = pokemon_url_parts[6];
let pokemon_img_href = `/img/${pokemon_id}.png`;


* Enhance the application so you can dynamically filter the list of Pokemon in your array.


