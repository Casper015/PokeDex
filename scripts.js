/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

class pokenmon {
  constructor(data){
    this.database = data;
    this.current_batch =[];
    this.next_batch = [];
    this.display_count =3;
  }

  draw_pokemon() {
  const shuffle_pokemon = [...pokemon_data].sort(() => Math.random() - 0.5);
  return shuffle_pokemon.slice(0, 3); 
  }

  preload_next_pokemon() {
}



function show_cards() {
  const card_container = document.getElementById("card-container");
  if (!card_container) {
    return;
  }
  card_container.innerHTML = "";
  const template = document.getElementById("card-template");
  if (!template) {
    return;
  }

  const temp_box = document.createDocumentFragment();



  random_pokemon.forEach((pokemon) => {

    let curent_pokemon = [];

    // The image URL is based on the Pokemon's ID, which is a property of the Pokemon object
    let image_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    
    const card_clone = template.content.cloneNode(true);
    
    const img_element = card_clone.querySelector(".card-img");
    img_element.src = image_URL;
    img_element.alt = pokemon.name;

    let h_weight = `Height: ${pokemon.height/10} m, Weight: ${pokemon.weight/10} kg`;
    let stats = `HP: ${pokemon.hp}, Attack: ${pokemon.attack}, Defense: ${pokemon.defense},
     Sp. Atk: ${pokemon.sp_attack}, Sp. Def: ${pokemon.sp_defense}, Speed: ${pokemon.speed},
     Total: ${pokemon.hp + pokemon.attack + pokemon.defense + pokemon.sp_attack + pokemon.sp_defense + pokemon.speed}`;
    let types_string;
    if (pokemon.type2){
      types_string = `${pokemon.type1}, ${pokemon.type2}`;
    } else {
      types_string = pokemon.type1;
    }

    const set_text = (selector, value) => {
      const element = card_clone.querySelector(selector);
      if (element) {
        element.textContent = value;
      }
    };

    set_text(".card-title", pokemon.name.toUpperCase());
    set_text(".card-type", types_string.toUpperCase());
    set_text(".card-id", `ID: ${pokemon.id}`);
    set_text(".card-h_weight", h_weight);
    set_text(".card-stats", stats);

    temp_box.appendChild(card_clone);
  });

  card_container.appendChild(temp_box);
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", show_cards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function random_pokemon() {
  show_cards(); 
}
