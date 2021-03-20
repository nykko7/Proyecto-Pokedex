var mainContainer = document.getElementById('main-container');

function crearPokemon(id, nombre, tipo, evolucion, imagen, historia) {
	var frontCardHTML = `<div class="card-front d-flex flex-column justify-content-center">
          <div class="card-image d-flex justify-content-center mt-3">
            <img src=${imagen} alt=${nombre}>
          </div>   
          <h3 class="text-center poke-number">${id}</h3> 
          <h3 class="text-center mb-3 name">${nombre}</h3> 
          <p class="card-text mb-0 px-4"><strong>Type(s):</strong> ${tipo}</p>
          <p class="card-text mt-1 mb-4 px-4"><strong>Evolution: </strong>${evolucion}</p>
        </div>`;

	var backCardHTML = `<div class="card-back d-flex flex-column align-items-center" style="background-image: linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75)), url(${imagen})">
          <h3 class="text-center name mt-4">${nombre}</h3> 
          <p class="card-text p-2"><strong>Description:</strong> ${historia}</p>
        </div>`;

	var cardHTML = `    
      <div class="card-body">
        ${frontCardHTML}
        ${backCardHTML}
      </div>
 
    `;
	var card = document.createElement('div');
	card.classList.add('card', 'mx-3', 'my-3');
	card.innerHTML = cardHTML;
	mainContainer.appendChild(card);
}

function crearPokemones() {
	for (var i = 0; i <= 150; i++) {
		var id = Pokemons[i].pkdx_id;
		var nombre = Pokemons[i].name;
		var tipo = Pokemons[i].types[0];
		var historia = Pokemons[i].description;

		if (Pokemons[i].evolutions[0]) {
			var evolucion = Pokemons[i].evolutions[0].to;
		}
		var imagen = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		crearPokemon(id, nombre, tipo, evolucion, imagen, historia);
	}
}

function crearPokemonEnDuro() {
	var id = Pokemons[24].pkdx_id;
	var nombre = Pokemons[24].name + 'Test';
	var tipo = Pokemons[24].types[0];
	var imagen = `https://pokeres.bastionbot.org/images/pokemon/25.png`;
	if (Pokemons[24].evolutions[0]) {
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

crearPokemones();
