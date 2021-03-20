var mainContainer = document.getElementById('main-container');

//Variable con la cantidad de pokemones:
const pokemons_number = 151;

const colors = {
	Fire: '#FDDFDF',
	Grass: '#DEFDE0',
	Electric: '#FCF7DE',
	Water: '#DEF3FD',
	Ground: '#f4e7da',
	Rock: '#d5d5d4',
	Steel: '#d5d5d4',
	Ice: '#DEF3FD',
	Fairy: '#fceaff',
	Poison: '#98d7a5',
	Bug: '#f8d5a3',
	Dragon: '#97b3e6',
	Psychic: '#eaeda1',
	Flying: '#F5F5F5',
	Fighting: '#E6E0D4',
	Normal: '#F5F5F5',
	Ghost: '#aaa',
};

function crearPokemon(id, nombre, tipo, peso, imagen, historia) {
	var frontCardHTML = `
    <div class="card-front d-flex flex-column justify-content-center">
      <div class="card-image d-flex justify-content-center mt-3">
        <img src=${imagen} alt=${nombre}>
      </div>   
      <h3 class="text-center poke-number">${id}</h3> 
      <h3 class="text-center mb-3 name">${nombre}</h3> 
      <p class="card-text mb-0 px-4"><span class="bold">Type:</span> ${tipo}</p>
      <p class="card-text mt-1 mb-4 px-4"><span class="bold">Weight: </span>${peso}kg.</p>
    </div>
    `;

	var backCardHTML = `
    <div class="card-back d-flex flex-column align-items-center" 
      style="background-image: linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('${imagen}')">
      <h3 class="text-center name mt-5 nombre-back">${nombre}</h3> 
      <p class="card-text p-2"><span class='description'>Description:</span> ${historia}</p>
    </div>
    `;

	var cardHTML = `    
      <div class="card-body">
        ${frontCardHTML}
        ${backCardHTML}
      </div> 
    `;

	var card = document.createElement('div');
	card.classList.add('card', 'mx-3', 'my-3');
	card.innerHTML = cardHTML;

	//Variable que busca el color para la tarjeta a partir del tipo de pokemon:
	const color = colors[tipo];

	//Se asigna el color segun el tipo:
	card.children[0].children[0].style.backgroundColor = color;
	card.children[0].children[1].style.backgroundColor = color;

	mainContainer.appendChild(card);
}

//Funcion que permite leer la API de pokemon:
const getPokemon = async (id) => {
	//URL de la API a partir del id ingresado por parametro:
	const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	//Accede al URL y guarda el json en la const "pokemon"
	const response = await fetch(url);
	const pokemon = await response.json();

	return pokemon;
};

async function crearPokemones() {
	for (var i = 1; i <= pokemons_number; i++) {
		let pokemon = await getPokemon(i);
		let id = pokemon.id;
		let idFormatted = '#' + id.toString().padStart(3, '0');
		let nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
		let tipo = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
		let historia = Pokemons[i - 1].description.slice(0, 230);

		let peso = pokemon.weight / 10;

		/* let imagen = Pokemons[i].art_url;    */
		let imagen = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		crearPokemon(idFormatted, nombre, tipo, peso, imagen, historia);
	}
}

/* SEARCHBOX */
function Search() {
	var input = document.getElementById('myInput');
	var upperInput = input.value.toUpperCase();
	var cards = mainContainer.getElementsByClassName('card');

	for (i = 0; i < cards.length; i++) {
		var name = cards[i].children[0].children[0].children[2];
		var txtValue = name.textContent;
		if (txtValue.toUpperCase().indexOf(upperInput) > -1) {
			cards[i].style.display = '';
		} else {
			cards[i].style.display = 'none';
		}
	}
}

crearPokemones();

/* function crearPokemonEnDuro(){
  var id = Pokemons[24].pkdx_id;
  var nombre = Pokemons[24].name + 'Test';
  var tipo = Pokemons[24].types[0];
  var imagen = `https://pokeres.bastionbot.org/images/pokemon/25.png`
  if (Pokemons[24].evolutions[0]){
      var evolucion = Pokemons[24].evolutions[0].to;
  }
  var historia = Pokemons[24].description;

	var cardHTML = `    
      <div class="card-body">
        <div class="card-front d-flex flex-column flex-fill justify-content-center">
          <div class="card-image d-flex justify-content-center mt-3">
            <img src=${imagen} alt=${nombre}>
          </div>   
          <h3 class="text-center poke-number">${id}</h3> 
          <h3 class="text-center mb-3 name">${nombre}</h3> 
          <p class="card-text mb-0 px-4"><strong>Type(s):</strong> ${tipo}</p>
          <p class="card-text mt-1 mb-4 px-4"><strong>Evolution: </strong>${evolucion}</p>
        </div>
        <div class="card-back d-flex flex-column align-items-center" style="background-image: linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75)), url(${imagen})">
          <h3 class="text-center name mt-4">${nombre}</h3> 
          <p class="card-text p-2"><strong>Description:</strong> ${historia}</p>
        </div>      
      </div>
 
    `;
	var card = document.createElement('div');
	card.classList.add('card', 'mx-3', 'my-3');
	card.innerHTML = cardHTML;
	mainContainer.appendChild(card);
}
 */
