//Hicimos global la data en data/pokemon.js y aquí creamos la variable 
//que almacenará los objetos pokemon y sus propiedades.
const pokemons = window.POKEMON.pokemon;

/*Crear Tarjeta (hacer función pura)*/
function createCard(data){

  for(let i=0; i<data.length;i++){

    //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
    let columnCard = document.createElement("div");
    columnCard.className = "column";
    //Crearemos una etiqueta <a> que envolverá la tarjeta, para poder llamar la apertura
    //de un modal con href
    /*
    let linkModal = document.createElement("a");
    linkModal.href = */
    
    //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
    let cards = document.createElement("div");
    //Aquí le diremos que tome la clase "cards" de css
    cards.className =  "cards";
    //Le entregaremos un id
    cards.id = "cards";
  
    let pokemonName = document.createElement("h3");
    //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
    //para asignarle su contenido
    //En pokemon.js "name"=""
    pokemonName.textContent = data[i].name;

    let pokemonNumber = document.createElement("h3");
    //En pokemon.js "num"=""  
    pokemonNumber.textContent ="#"+ data[i].num;
    
    //Creamos el elemento img que conteneŕa la imagen de cada pokemon
    let pokemonPhoto = document.createElement("img");
    //Le decimos que en este elemento HTML su source(src="") será lo que contiene
    //el elemento img:'' dentro de la data, según sea el índice.
    //En pokemon.js "img"=""
    
  
    pokemonPhoto.src = data[i].img;
    pokemonPhoto.id="imgPoke";
  
  
  
    let rowType = document.createElement("div");
    rowType.className = "row";
    rowType.id = "rowType";
    let columnType1 = document.createElement("div");
    columnType1.className = "columnCard";
    let columnType2 = document.createElement("div");
    columnType2.className = "columnCard";

    //Tiene uno o dos tipos
    //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
    //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
    //dos tipos entones que cree dos label.
    let pokemonType1 = document.createElement("p");
    pokemonType1.textContent = data[i].type[0];
    let pokemonType2 = document.createElement("p");
    pokemonType2.textContent = data[i].type[1];
    pokemonType1.className = "tagType";
    pokemonType2.className = "tagType";

    for(let j=0; j<data[i].type.length; j++){
        if(data[i].type[0] === 'Fire'){
      pokemonType1.style.backgroundColor = "#F05030";
    }else if(data[i].type[0] === 'Bug'){
      pokemonType1.style.backgroundColor = "#A8B820";
    }else if(data[i].type[0] === 'Water'){
      pokemonType1.style.backgroundColor = "#3899F8";
    }else if(data[i].type[0] === 'Dragon'){
      pokemonType1.style.backgroundColor = "#7860E0";
    }else if(data[i].type[0] === 'Electric'){
      pokemonType1.style.backgroundColor = "#F8D030";
    }else if(data[i].type[0] === 'Ghost'){
      pokemonType1.style.backgroundColor = "#6060B0";
    }else if(data[i].type[0] === 'Ice'){
      pokemonType1.style.backgroundColor = "#58C8E0";
    }else if(data[i].type[0] === 'Fighting'){
      pokemonType1.style.backgroundColor = "#A05038";
    }else if(data[i].type[0] === 'Normal'){
      pokemonType1.style.backgroundColor = "#A8A090";
    }else if(data[i].type[0] === 'Grass'){
      pokemonType1.style.backgroundColor = "#2AD029";
    }else if(data[i].type[0] === 'Psychic'){
      pokemonType1.style.backgroundColor = "#F870A0";
    }else if(data[i].type[0] === 'Rock'){
      pokemonType1.style.backgroundColor = "#B8A058";
    }else if(data[i].type[0] === 'Ground'){
      pokemonType1.style.backgroundColor = "#F7DE3F";
    }else if(data[i].type[0] === 'Poison'){
      pokemonType1.style.backgroundColor = "#B058A0";
    }else if(data[i].type[0] === 'Flying'){
      pokemonType1.style.backgroundColor = "#98A8F0";
    }
  }
    

    let btnMoreInfo = document.createElement("button");
    btnMoreInfo.textContent = ('+ Info');
    btnMoreInfo.className = "moreInfo";

    btnMoreInfo.addEventListener("click", ()=>{

      const modalContainer = document.createElement("div");
      modalContainer.className = "modalCard"; 
      
      const btnClose = document.createElement("button");
      btnClose.textContent = "x";
      btnClose.addEventListener("click", ()=>{

        modalContainer.style.display='none';
      })
      const modalBackground = document.createElement("div");
      modalBackground.className = "modalBackground";

      let titleSection = document.createElement("div");
      titleSection.id = "titleSection";

      let pokeTittle = document.createElement("h2");
      pokeTittle.textContent = data[i].name;

      let pokeNumber = document.createElement("h4");
      pokeNumber.textContent = '#' + data[i].num;

      let pokeImg = document.createElement("img");
      pokeImg.src = data[i].img;

      let sectionWeakness = document.createElement("div");
      sectionWeakness.id = "sectionWeakness";
      
      let titleWeakness = document.createElement("h5");
      titleWeakness.textContent = "Debilidades";

      let weaknesses = document.createElement("p");
      weaknesses.textContent = data[i].weaknesses;

      let sectionEvolutions = document.createElement("div");
      sectionEvolutions.id = "sectionEvolutions";

      //hacer que si tiene evolución, muestre su img y su number

      let sectionEggCandy = document.createElement("section");
      sectionEggCandy.id = "sectionEggCandy";



      let sectionAppearsAt = document.createElement("section");
      sectionAppearsAt.id = "sectionAppearsAt";

      let appearsAt = document.createElement("p");
      appearsAt.textContent = 'Aparece a las '+ data[i].spawn_time;
      
      
      titleSection.appendChild(pokeTittle);
      titleSection.appendChild(pokeNumber);
      modalContainer.append(btnClose);
      modalContainer.appendChild(titleSection);
      modalContainer.appendChild(modalBackground);  
      modalBackground.appendChild(pokeImg);
      sectionWeakness.appendChild(titleWeakness);
      sectionWeakness.appendChild(weaknesses);
      //sectionEggCandy.childAppend()
      //sectionEvolutions.childAppend()
      sectionAppearsAt.appendChild(appearsAt);
      
      modalBackground.appendChild(sectionWeakness);
      modalBackground.appendChild(sectionAppearsAt);
      

      
      cards.appendChild(modalContainer);
      


    })
  
      columnType1.appendChild(pokemonType1);
      
      rowType.appendChild(columnType1);
      columnType2.appendChild(pokemonType2);
      rowType.appendChild(columnType2);
      
      cards.appendChild(pokemonName);
      cards.appendChild(pokemonNumber);
      cards.appendChild(pokemonPhoto);      
      cards.appendChild(rowType);
      cards.appendChild(btnMoreInfo);
      columnCard.appendChild(cards);
  
      //Mostrar tarjeta en el contenedor especificado
      document.getElementById("root").appendChild(columnCard).innerHTML; 
    }
}
//Aquí mostramos todas las tarjetas, recorre toda la data

createCard(pokemons);

//Le entregamos a la variable selectorType el id del selector del cual obtendremos
//el value seleccionado por el usuario
const selectorType = document.getElementById("filterType");
//Le agregamos un evento tipo "change", esto significa que cada vez que el elemento de 
//id "filterType" cambie de value, se ejecutará la función showByType
selectorType.addEventListener("change", showByType);

function showByType()
{
  //Le entregamos a la variable selectedType el valor que ha sido seleccionado desde el html

  let selectedType = selectorType.options[selectorType.selectedIndex].value;
  //Aquí decimos que en filterResult, se almacenará el resultado de la ejecución de la 
  //función filterTypes. En este momento ya se encuentran todos los pokemons que cumplen
  //con el criterio de filtrado
  let filterResult = window.filterTypes(pokemons, selectedType);  
  
  let statsResult = window.statsCalculation(filterResult, pokemons);
  document.getElementById("stats").innerHTML = "¿Sabías qué? Solo un "+statsResult+"% de Pokémons son de tipo "+selectedType;  
  
  //Como la primera acción del DOM dentro de la web es mostrar todos los elementos de 
  //pokemon.js en vista tarjetas dentro de un div, le indicamos a este que se vacíe para
  //recibir dentro de él los resultados del filtrado
  document.getElementById("root").innerHTML="";
  //Ahora como tenemos los resultados en una variable, deberemos recorrer uno a uno los pokemons
  //para mostrarlos, del mismo modo que en el primer for donde mostramos todos los pokemons.
  //La diferencia es que en vez de referirnos a pokemon.type,.name,.etc nos referiremos a 
  //filterResult.name filterResult.img filterResult.number filterResult.type
  createCard(filterResult);
  
  }
 //
  const weaknessType = document.getElementById("filterWeakness");
  weaknessType.addEventListener("change",showByWeaknees);
  
  function showByWeaknees()
  {
    let weaknessselected = weaknessType.options[weaknessType.selectedIndex].value;
    let filterResult = window.filterWeakness(pokemons, weaknessselected);

    let statsResult = window.statsCalculation(filterResult, pokemons);
    document.getElementById("stats").innerHTML = "¿Sabías qué? Solo un "+statsResult+"%  de Pokémons son débiles a "+weaknessselected;  

    document.getElementById("root").innerHTML="";

    createCard(filterResult);
    }

  
const selectorEgg = document.getElementById("filterEggs");
selectorEgg.addEventListener("change",showByEgg);

function showByEgg()
{
  let eggSelected = selectorEgg.options[selectorEgg.selectedIndex].value;
  let filterResult = window.filterEggs(pokemons, eggSelected);

  let statsResult = window.statsCalculation(filterResult, pokemons);
    document.getElementById("stats").innerHTML = "¿Sabías qué? Solo un "+statsResult+"%  de Pokémons aparecen en huevos de "+eggSelected;  
  

  document.getElementById("root").innerHTML="";

  createCard(filterResult);
  }

  const selectorOrder = document.getElementById("orderSelector");
  selectorOrder.addEventListener("change",sortBy);

 function sortBy(){
  let sortSelected = selectorOrder.options[selectorOrder.selectedIndex].value;
  let ordered = window.sortByAlphabetAZ(pokemons, sortSelected);
  document.getElementById("root").innerHTML="";
  createCard(ordered);

 }

const selectOrd = document.getElementById("orderSelector");
selectOrd.addEventListener("change", showOrd);

function showOrd()
{
let selectOrd2 = selectOrd.options[selectOrd.selectedIndex].value;
let filterResult = window.orderSelector(pokemons, selectOrd2);
 document.getElementById("root").innerHTML="";
 
    createCard(filterResult);
  }


  const selectEggs = document.getElementById("filterEggs");
  selectEggs.addEventListener("change",showEgg);

  function showEgg()
{
  let selectEggs2 =selectEggs.options[selectEggs.selectedIndex].value;
  let filterResult = window.filterEggs(pokemons,selectEggs2);
  document.getElementById("root").innerHTML="";

createCard(filterResult);
}