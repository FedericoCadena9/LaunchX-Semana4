const fetchPokemon = () => {
  const pokeSearch = document.getElementById("pokeSearch");
  let pokeInput = pokeSearch.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  // Fetch: Solicita la información desde el servidor
  fetch(url)
    .then((res) => {
      // Then: Respuesta del servidor (Comprueba si la solicitud se hizo correctamente)

      if (res.status != "200") {
        pokeImage(
          "https://blog.sinapsis.agency/wp-content/uploads/2021/04/DEFINICIONES.-ERROR-404.png"
        );
      } else {
        return res.json();
      }
    })
    .then((data) => {
      //Extrae los datos del servidor a partir del url
      if (data) {
        // ID
        let id = data.id;
        const pokeId = (document.getElementById(
          "pokeId"
        ).innerHTML = `ID: ${id}`);

        // Nombre
        let name = data.name;
        pokemName(name);

        // Imagen
        let pokeImg = data.sprites.front_default;
        pokemImage(pokeImg);

        // Tipo de pokemon
        let type = data.types.map((type) => type.type.name);
        pokemType(type);

        // Estadisticas
        let stats = data.stats.map((stat) => stat.base_stat);
        pokemStats(stats);

        // Movimientos
        let moves = data.moves.map((move) => move.move.name);
        pokemMoves(moves);

        // Peso
        let weight = data.weight;
        pokemPeso(weight);
        // altura
        let height = data.height;
        pokemAltura(height);
      }
    });
};

// Se llama a la función de la consulta
fetchPokemon();

// ID
const pokemId = (id) => {
  const pokemonId = (document.getElementById(
    "pokeId"
  ).textContent = `#ID: ${id}`);
};

// Nombre
const pokemName = (name) => {
  const pokemonName = (document.getElementById("pokeName").innerHTML = name);
};

// Tipo
const pokemType = (type) => {
  const txtType = (document.getElementById("txtType").textContent = `Tipo`);
  const pokemonType = (document.getElementById(
    "pokeType"
  ).textContent = `${type}`);
};

// Imagen
const pokemImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

//Estadisticas
const pokemStats = (stats) => {

    // HP
    let pokemHp = document.getElementById('pokeHp')
    pHp = document.createElement('p');
    pokemHp.appendChild(pHp);
    pHp.innerHTML += stats[0];

    // Attack
    let pokemAtk = document.getElementById('pokeAtk')
    pAtk = document.createElement('p');
    pokemAtk.appendChild(pAtk);
    pAtk.innerHTML += stats[1];

    let pokemDef = document.getElementById('pokeDef')
    pDef = document.createElement('p');
    pokemDef.appendChild(pDef);
    pDef.innerHTML += stats[2];
    
    let pokemSpAtk = document.getElementById('pokeSpAtk')
    pSpAtk = document.createElement('p');
    pokemSpAtk.appendChild(pSpAtk);
    pSpAtk.innerHTML += stats[3];

    let pokemSpDef = document.getElementById('pokeSpDef')
    pSpDef = document.createElement('p');
    pokemSpDef.appendChild(pSpDef);
    pSpDef.innerHTML += stats[4];

    let pokemSpd = document.getElementById('pokeSpd')
    pSpd = document.createElement('p');
    pokemSpd.appendChild(pSpd);
    pSpd.innerHTML += stats[5];




}

// Movimientos
const pokemMoves = (moves) => {
  let ul = document.getElementById("pokeUl");
  moves.forEach((move) => {
    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML += move;
  });
};

// Peso
const pokemPeso = (weight) => {
  const pokemonPeso = (document.getElementById(
    "pokePeso"
  ).innerHTML = `Peso: ${weight}`);
};

// Altura
const pokemAltura = (height) => {
  const pokemonAltura = (document.getElementById(
    "pokeAltura"
  ).innerHTML = `Altura: ${height}`);
};

