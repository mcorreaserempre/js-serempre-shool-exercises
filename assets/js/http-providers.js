
const url = "https://pokeapi.co/api/v2/pokemon/";


const getPokemon = (id) => {

    try {
      let response = fetch(url + id);
      response.then((respuesta) => respuesta.json())
      .then(({id, name, weight, sprites, types}) => { 
        document.getElementById('value-id').innerHTML = id;
        document.getElementById('value-name').innerHTML = name;
        document.getElementById('value-weight').innerHTML = weight;
        document.getElementById('photo-male').src = sprites.front_default;
        document.getElementById('photo-female').src = sprites.front_female;
        document.getElementById('value-types').innerHTML = types.map(type => `<span class="${type.type.name} text-white text-center fw-bold w-25 p-1">${type.type.name}</span>`).join(' ');
        return id;
      });
      
    } catch (error) {
        throw error;
    }
      
};

