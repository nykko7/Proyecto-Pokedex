var mainContainer = document.getElementById('main-container');

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	steel: '#d5d5d4',
	ice: '#DEF3FD',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
};

function crearPokemon(id, nombre, tipo, evolucion, imagen, historia) {
	var frontCardHTML = `
    <div class="card-front d-flex flex-column justify-content-center">
      <div class="card-image d-flex justify-content-center mt-3">
        <img src=${imagen} alt=${nombre}>
      </div>   
      <h3 class="text-center poke-number">${id}</h3> 
      <h3 class="text-center mb-3 name">${nombre}</h3> 
      <p class="card-text mb-0 px-4"><span class="bold">Type:</span> ${tipo}</p>
      <p class="card-text mt-1 mb-4 px-4"><span class="bold">Evolution: </span>${evolucion}</p>
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

function crearPokemones() {
	for (var i = 0; i <= 150; i++) {
		var id = Pokemons[i].pkdx_id;
		var idFormatted = '#' + id.toString().padStart(3, '0');
		var nombre = Pokemons[i].name;
		var tipo = Pokemons[i].types[0];
		var historia = Pokemons[i].description;

		if (Pokemons[i].evolutions[0]) {
			var evolucion = Pokemons[i].evolutions[0].to;
		}
		/* var imagen = Pokemons[i].art_url;    */
		var imagen = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		crearPokemon(idFormatted, nombre, tipo, evolucion, imagen, historia);
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
