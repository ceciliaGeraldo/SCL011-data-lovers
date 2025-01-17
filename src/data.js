const pokemonList = window.POKEMON.pokemon;
window.pokemonList = pokemonList;

//Filtrar por Tipo
//Recibe dos parámetos: 1.La lista de pokemons y 2. El 'type' que se ha seleccionado
const filterTypes = (pokemonList, selectedType) => {
  //.filter() crea un nuevo array compuesto por los elementos que cumplen
  //el criterio de búsqueda, en este caso crearía un arreglo de todos los pokemons
  //que cumplan con el 'type' seleccionado.
  //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
  //donde se encuentra
  const resultType = pokemonList.filter(Element => {
    //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
    //sea el value seleccionado en el selectBox (html estático)
    return Element.type.includes(selectedType);
  });
  //retorna el valor de la función filtrar
  return resultType;
}
//hacemos FilterTypes de modo global para llamarla desde main.js
window.filterTypes = filterTypes;

//filtrar por Debilidad 
//Recibe dos parámetos: 1.La lista de pokemons y 2. El 'type' que se ha seleccionado
const filterWeakness = (pokemonList, weaknessType) => {
  //.filter() crea un nuevo array compuesto por los elementos que cumplen
  //el criterio de búsqueda, en este caso crearía un arreglo de todos los pokemons
  //que cumplan con el 'type' seleccionado.
  //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
  //donde se encuentra
  const weakness = pokemonList.filter(Element => {
    //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
    //sea el value seleccionado en el selectBox (html estático)
    return Element.weaknesses.includes(weaknessType);
  });
  //retorna el valor de la función filtrar
  return weakness;
}
//hacemos FilterTypes de modo global para llamarla desde main.js
window.filterWeakness = filterWeakness;

/*Queremos filtrar los pokemons que aparecen en cada huevo, mediante un selector el usuario
indicará si quiere ver los pókemons en huevos de 2,5,7,10,15, o que no aparecen en huevos.
Trabajaremos nuevamente con la lista completa de pokemons y el criterio que vendría siendo
la selección del usuario.*/
const filterEggs = (pokemonList, eggSelected) => {
  /*En una variable almacenaremos el array que se formará al llamar a la función filter
  donde ya tendremos todos los resultados que coinciden con el criterio de búsqueda*/
  const filteredEggs = pokemonList.filter(Element => {
    /*El criterio de búsqueda en este caso, es que en pokemon.js : pokemon.egg = a la 
    selección del usuario */
    return Element.egg === eggSelected;
  })
  /*Retornamos nuestra variable donde almacenamos previamente lo que resultaba de la función
  filtrar*/
  return filteredEggs;
}
//Nuevamente hacemos de nuestra función global para poder llamarla desde main.js
window.filterEggs = filterEggs;

const orderSelector = (pokemonList, selectOrd) => {

  let orderSelector = "";

  if (selectOrd === "numberAsc") {
    orderSelector = pokemonList.sort((a, b) => {
      return (a.id - b.id);
    })
  }
  else if (selectOrd === "numberDesc") {
    orderSelector = pokemonList.sort((a, b) => {
      return (b.id - a.id);
    })
  }
  else if (selectOrd === "alphaAsc") {
    orderSelector = pokemonList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
  }
  else {
    orderSelector = pokemonList.sort((a, b) => {
      return b.name.localeCompare(a.name);
    })
  }


  return orderSelector;

}

window.orderSelector = orderSelector;

const statsCalculation = (filterResult, pokemonList) => {
  
  const result = Math.round((filterResult.length*100)/pokemonList.length);
  return result;
}

window.statsCalculation = statsCalculation;

