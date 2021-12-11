const url = "https://pokeapi.co/api/v2/pokemon/";

getPokemon = (id) => {
  let response = fetch(url + id);
  response
    .then((respuesta) => respuesta.json())
    .then((objeto) => console.log(objeto));
};

getPokemon("pikachu");
