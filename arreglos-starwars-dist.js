const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
    masters: ["Obi-Wan Kenobi", "Yoda", "Joruus C'baoth"],
    birthday: "569865587",
    note: "Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su hermana gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio Galáctico durante la Guerra Civil Galáctica. Hijo del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala de Naboo",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
    masters: ["Darth Sidious"],
    birthday: "873708328",
    note: "Anakin Skywalker, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Después de pasar al lado oscuro de la Fuerza, se hizo conocido como Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious. Sin embargo, a pesar de sus acciones como Darth Vader, un destello del lado luminoso de la Fuerza permaneció dentro del antiguo Anakin Skywalker.",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
    masters: [],
    birthday: "646596309",
    note: "Leia Organa, una mujer humana sensible a la Fuerza, fue una princesa de Alderaan, miembro del Senado Imperial, líder de la Alianza para Restaurar la República, miembro del Senado Galáctico y general de la Resistencia. Nacida junto a su hermano gemelo, Luke Skywalker en el año 19 ABY como Leia Amidala Skywalker, fue hija del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala de Naboo",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
    masters: ["Obi-Wan Kenobi", "Yoda", "Qui-Gon Jinn", "Darth Sidious"],
    birthday: "569865587",
    note: "Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe sin miedo. Después de pasar al lado oscuro de la Fuerza, se hizo conocido como Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious",
  },
];
/* GENERALES 

- Los callback son funciones usadas como argumentos (pasadas desde otra función)
- Es una buena práctica guardar los callbacks (funciones) en constantes para que el código quede más estilizado y legible (versión 3, ver a continuación)
- Se debe escribir tres versiones de cada función:
  1- la primera usando la definición tradicional de funcion()
  2- la segunda usando las funciones de flecha para representar una función
  3- la tercer, se debe tratar de simplificar la versión anterios (siempre que sea posible, de no ser posible no se hará)

  DOCUMENTACIÓN

- MAP: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- REDUCE: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- FILTER: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- SORT: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- EVERY: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- SOME: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- ARRAY: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
- STRING: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String


*/

/* ===================== MAP ===================== */

/**
 *
 * Obtener un arreglo con todos los nombres usando el método MAP
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {array} - Arreglo con los nombres
 *
 */
const obtenerNombresCompletos = (arr = []) => {
  console.log('Nombres completos:');
  /* versión function() */
  // return arr.map(function(nombre) {
  //  return nombre.name;
  // });
  
  /* versión arrow function */
  // return arr.map((nombre) => {
  //   return nombre.name;
  // });

  /* versión arrow function mínima */
  // return arr.map((nombre) =>  nombre.name);
   return arr.map(({name}) => name);
  
};

/**
 * Obtener un arreglo con todos los pesos usando el método MAP
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {array} - Arreglo con los pesos
 */
const obtenerPesos = (arr = []) => {
  console.log('Todos los pesos:');
  /* versión function() */
  // return arr.map(function(peso) {
  //  return peso.mass;
  // });

  /* versión arrow function */
  // return arr.map((peso)=>{
  //   return peso.mass;
  // });

  /* versión arrow function mínima */
  return arr.map(({mass}) => mass);
};

/**
 * Obtener un arreglo con todos los apellidos (última palabra del campo name) usando el método MAP
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {array} - Arreglo con los apellidos
 */
const obtenerApellidos = (arr = []) => {
  console.log('Todos los apellidos:');
  /* versión function() */
  // return arr.map(function(apellido) {
  //   let nombreApellido =  apellido.name.split(' ');
  //   return nombreApellido[1];
  // });

  /* versión arrow function */
  // return arr.map((apellido)=>{
  //   let nombreApellido = apellido.name.split(' ');
  //   return nombreApellido[1];
  // });

  /* versión arrow function mínima */
  return arr.map((apellido)=> apellido.name.split(' ')[1]);
};

/**
 * Obtener un arreglo con los años de nacimiento (no importa que se repitan) usando el método MAP
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {array} - Arreglo con los años de nacimiento
 */
const obtenerNacimientos = (arr = []) => {
  /* para obtener la fecha de nacimiento en formato correcto se debe multiplicar por 1000 el campo birthday (para pasarlo de milisegundos a segundos) y usar el método toLocaleDateString("es-MX") para formaterlos:
      new Date(birthday * 1000).toLocaleDateString("es-MX");
  */
  console.log('Años de nacimiento:');
  /* versión function() */
  // return arr.map(function(cumple){
  //   let date = cumple.birthday * 1000;
  //   return  new Date(date).toLocaleDateString("es-MX");
  // });
  
  /* versión arrow function */
  // return arr.map((cumple)=>{
  //   let date = cumple.birthday * 1000;
  //   return  new Date(date).toLocaleDateString("es-MX");
  // });

  /* versión arrow function mínima */
  return arr.map((cumple)=> new Date(cumple.birthday * 1000).toLocaleDateString("es-MX"));
};

/* ===================== REDUCE ===================== */

/**
 * Obtener la suma de los pesos de los personajes usando el método REDUCE()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {Number} - Número que representa la suma de los pesos de los personajes
 */
const obtenerPesoTotalPersonajes = (arr = []) => {
  console.log('Suma de los Pesos de los personajes:');
  /* versión function() */
  // return arr.reduce(function (count, peso) {
  //   let pesoSiguiente = parseInt(peso.height);
  //   return count + pesoSiguiente;
  // },0);
  
  /* versión arrow function */
  // return arr.reduce((count, peso)=>{
  //   let pesoSiguiente = parseInt(peso.height);
  //   return count + pesoSiguiente;
  // }, 0);
  
  /* versión arrow function mínima */
  return arr.reduce((count, peso) => { pesoSiguiente = parseInt(peso.height);  return count + pesoSiguiente; } ,0);
  

};

/**
 * Obtener la suma de los géneros de los personajes usando el método REDUCE(). 
 * Utilice el método MAP para agrupar los géneros
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {Number} - Arreglo con la cantidad de personajes por género.
 * Ej [ male: 3, female: 1 ]
 */
const obtenerCantidadGenerosPersonajes = (arr = []) => {
  console.log('Suma de los generos de los personajes:');
  /* versión function() */
  let generos = arr.map(function(genero){
    return genero.gender;
  });
  return generos.reduce(function(acumulador, generoActual){
    if(acumulador[generoActual]){ // existe
      acumulador[generoActual] += 1; // aumentar
    }
    else{
      acumulador[generoActual] = 1;
    }
    return acumulador;
  }, []);

  /* versión arrow function */
  // let generos = arr.map((genero)=>{
  //   return genero.gender;
  // });
  // return generos.reduce((acumulador, generoActual)=>{
  //   acumulador[generoActual] ? acumulador[generoActual] += 1 : acumulador[generoActual] = 1;
  //   return acumulador;
  // }, []);

  /* versión arrow function mínima */
  // let generos = arr.map( ({gender}) => gender);
  // return generos.reduce((acumulador, generoActual)=>{ 
  //   acumulador[generoActual] = (acumulador[generoActual] || 0) + 1; 
  //   return acumulador; 
  // }, []);

};
/**
 * Obtener la suma de la masa de los personajes usando el método REDUCE()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {Number} - Número que representa la suma de la masa de los personajes
 */
const obtenerMasaTotalPersonajes = (arr = []) => {
  console.log('Suma de la masa de los personajes:');
  /* versión function() */
  // return arr.reduce(function (count, peso) {
  //   let pesoSiguiente = parseInt(peso.mass);
  //   return count + pesoSiguiente;
  // },0);

  /* versión arrow function */
  // return arr.reduce((count, peso)=>{
   
  //   let pesoSiguiente = parseInt(peso.mass);
  //   return count + pesoSiguiente;
   
  // }, 0);
  
  /* versión arrow function mínima */
  return arr.reduce((count, peso) => {  pesoSiguiente = parseInt(peso.mass);  return count + pesoSiguiente; } ,0);
  

};

/**
 * Obtener la cantidad de colores de ojos diferentes usando el método REDUCE(). Utilice el método MAP para agrupar los colores de ojos
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {array} - Arreglo con la cantidad de colores de ojos de los personajes agrupados por color. Ej [ blue: 2, yellow: 1, brown: 1 ]
 */
const obtenerCantidadColorOjosPersonajes = (arr = []) => {
  console.log('Cantidad de colores de ojos diferentes:');
 /* versión function() */
  // let colorOjos = arr.map(function(color){
  //   return color.eye_color;
  // });
  // return colorOjos.reduce(function(acumulador, colorOjosActual){
    
  //   if(acumulador[colorOjosActual]){ // existe
  //     acumulador[colorOjosActual] += 1; // aumentar
  //   }
  //   else{
  //     acumulador[colorOjosActual] = 1;
  //   }
  //   return acumulador;
    
  // }, []);

 /* versión arrow function */
  // let colorOjos = arr.map((color)=>{
  //   return color.eye_color;
  // });
  // return colorOjos.reduce((acumulador, colorOjosActual)=>{
  //   acumulador[colorOjosActual] ? acumulador[colorOjosActual] += 1 : acumulador[colorOjosActual] = 1;
  //   return acumulador;
  // }, []);

  /* versión arrow function mínima */
  let colorOjos = arr.map( ({eye_color}) => eye_color);
  return colorOjos.reduce((acumulador, colorOjosActual)=>{ 
    acumulador[colorOjosActual] = (acumulador[colorOjosActual] || 0) + 1; 
    return acumulador; 
  }, []);

};

/* ===================== FILTER ===================== */

/**
 * Obtener los registros de personajes que tienen al maestro indicado usando el método FILTER()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos que cumplen con el filtro o vacío (array vacío)
 */
const obtenerTieneDeMaestroA = (arr = [], filtro = "") => {
  console.log('Maestro indicado ' + filtro + ':');
  /* versión function() */
  // return arr.filter(function(master){
  //   return master.masters.indexOf(filtro) > -1 || master.masters.length === 0;
  // });
  

  // /* versión arrow function */
  // return arr.filter((master)=>{
  //   return master.masters.indexOf(filtro) > -1 || master.masters.length === 0;
  // });

  /* versión arrow function mínima */
  return arr.filter(({masters})=>{return masters.indexOf(filtro) > -1 || masters.length === 0;});
};

/**
 * Obtener los registros de personajes que tienen un peso menor al indicado usando el método FILTER()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos que cumplen con el filtro o vacío (array vacío)
 */
const obtenerPesoMenorA = (arr = [], filtro = "") => {
  console.log('Personajes con Peso menor a ' + filtro + ':');
  /* versión function() */
  // return arr.filter(function(peso){
  //     return peso.mass < filtro;
  // });

  /* versión arrow function */
  // return arr.filter((peso)=>{
  //     return peso.mass < filtro;
  // });

  /* versión arrow function mínima */
  return arr.filter(({mass})=>{return mass < filtro;});
  
};

/**
 * Obtener los registros de personajes que tienen el género indicado en filtro usando el método FILTER(). Se debe usar el método FIND() para buscar al maestro Yedi
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos que cumplen con el filtro o vacío (array vacío)
 */
const obtenerGeneroIgualA = (arr = [], filtro = "") => {
  console.log('Personajes con genero ' + filtro + ':');
  /* versión function() */
  // return arr.filter(function(genero){
  //   return genero.gender == filtro;
  // });

  /* versión arrow function */
  // return arr.filter((genero)=>{
  //   return genero.gender == filtro;
  // });

  /* versión arrow function mínima */
  return arr.filter(({gender})=>{return gender == filtro;});
};

/**
 * Obtener los registros de personajes que tienen el texto indicado en filtro (campo note) usando el método FILTER()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos que cumplen con el filtro o vacío (array vacío)
 */
const obtenerTextoBusquedaEnNote = (arr = [], filtro = "") => {
  console.log('Personajes con el texto ' + filtro + ':');
  /* versión function() */
  // return arr.filter(function(text){
  //   return text.note.toLowerCase().indexOf(filtro.toLowerCase()) > -1;
  // });

  /* versión arrow function */
  // return arr.filter((text)=>{
  //   return text.note.toLowerCase().indexOf(filtro.toLowerCase()) > -1;
  // });

  /* versión arrow function mínima */
  return arr.filter(({note})=>{return note.toLowerCase().indexOf(filtro.toLowerCase()) > -1;});
};

/* ===================== SORT ===================== */

/**
 * Obtener los registros de personajes ordenados por nombre en el orden indicado en filtro usando el método SORT()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos ordenados según el filtro o vacío (array vacío)
 */
const ordenarPersonajesPorNombre = (arr = [], filtro = "") => {
    console.log('Personajes ordenados por nombre en el orden indicado ' + filtro + ':');
  /* versión function() */
  // if(filtro == 'ascendente'){
  //   console.log('Personajes ordenados por nombre ascendente:');
  //   return arr.sort(function(a,b){
      
  //       if(a.name > b.name){
  //         return 1;
  //       }else{
  //         return -1;
  //       }
      
  //   });
  // }
  // if(filtro == 'descendente'){
  //   console.log('Personajes ordenados por nombre descendente:');
  //   return arr.sort(function(a,b){
    
  //     if(a.name < b.name){
  //       return 1;
  //     }else{
  //       return -1;
  //     }
  //   });
  // }

  // /* versión arrow function */
 
  return arr.sort( (a,b) => {
    if(filtro == 'ascendente'){
      return (a.name  > b.name  ) ? 1 : -1;
    } 
    if(filtro == 'descendente'){
      return (a.name < b.name  ) ? 1 : -1;
    }
  });
  // /* versión arrow function mínima */ 
};

/**
 * Obtener los registros de personajes ordenados por peso en el orden indicado en filtro usando el método SORT()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos ordenados según el filtro o vacío (array vacío)
 */
const ordenarPersonajesPorPeso = (arr = [], filtro = "") => {
  console.log('Personajes ordenados por peso en el orden indicado ' + filtro + ':');
  // if(filtro === 'ascendente'){
  //   console.log('Personajes ordenados por peso ascendente:');
  //   return arr.sort(function(a,b){
  //       return parseInt(a.height) - parseInt(b.height);
  //   });
  // }
  // if(filtro === 'descendente'){
  //   console.log('Personajes ordenados por peso descendente:');
  //   return arr.sort(function(a,b){
  //       return parseInt(b.height) - parseInt(a.height) ;
  //   });
  // }

  // /* versión arrow function */
  return arr.sort( (a,b) => {
    if(filtro == 'ascendente'){
      return (parseInt(a.height) > parseInt(b.height) ) ? 1 : -1;
    } 
    if(filtro == 'descendente'){
      return (parseInt(a.height) < parseInt(b.height) ) ? 1 : -1;
    }
  });
  /* versión arrow function mínima */
};

/**
 * Obtener los registros de personajes ordenados por masa en el orden indicado en filtro usando el método SORT()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos ordenados según el filtro o vacío (array vacío)
 */
const ordenarPersonajesPorMasa = (arr = [], filtro = "") => {
  console.log('Personajes ordenados por masa en el orden indicado ' + filtro + ':');
  if(filtro === 'ascendente'){
    return arr.sort(function(a,b){
      return (parseInt(a.mass) > parseInt(b.mass) ) ? 1 : -1;
    });
  }
  if(filtro === 'descendente'){
    return arr.sort(function(a,b){
      return (parseInt(a.mass) < parseInt(b.mass) ) ? 1 : -1;
    });
  }
  // /* versión arrow function */
  /* versión arrow function mínima */
};

/**
 * Obtener los registros de personajes ordenados por género en el orden indicado en filtro usando el método SORT()
 * @param  {array} arr=[] - Arreglo de datos
 * @param {String} filto='' - Texto que indica el filtro que se aplicará
 * @returns {array} - Arreglo con los elementos ordenados según el filtro o vacío (array vacío)
 */
const ordenarPersonajesPorGenero = (arr = [], filtro = "") => {
  console.log('Personajes ordenados por genero en el orden indicado ' + filtro + ':');
  /* versión function() */

  /* versión arrow function */
  return arr.sort( (a,b) => {
    if(filtro == 'ascendente'){
      return (a.gender > b.gender ) ? 1 : -1;
    } 
    if(filtro == 'descendente'){
      return (a.gender < b.gender ) ? 1 : -1;
    }
  });
  /* versión arrow function mínima */
};

/* ===================== EVERY ===================== */

/**
 * Obtener verdadero si todos los personajes cumplen con la condición o falso en caso contrario, usando el método EVERY()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si todos los personajes cumplen con la condición
 */
const todosTienenOjosAzules = (arr = []) => {
  console.log('Todos tienen ojos color blue:');
  /* versión function() */
  // return arr.every(function(el){
  //   return el.eye_color == "blue";
  // });

  /* versión arrow function */
  // return arr.every((el)=>{
  //   return el.eye_color == "blue";
  // });

  /* versión arrow function mínima */
  return arr.every(({eye_color})=>{return eye_color == "blue";});
};

/**
 * Obtener verdadero si todos los personajes cumplen con la condición o falso en caso contrario, usando el método EVERY()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si todos los personajes cumplen con la condición
 */
const todosSonHombres = (arr = []) => {
  console.log('Todos tienen genero male:');
  /* versión function() */
  // return arr.every(function(el){
  //   return el.gender == "male";
  // });

  /* versión arrow function */
  // return arr.every((el)=>{
  //   return el.gender == "male";
  // });

  /* versión arrow function mínima */
  return arr.every(({gender})=>{return gender == "male";});
};

/**
 * Obtener verdadero si todos los personajes cumplen con la condición o falso en caso contrario, usando el método EVERY()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si todos los personajes cumplen con la condición
 */
const todosSonMaestrosJedi = (arr = []) => {
  console.log('Todos tienen en nota "Fuerza":');
  // para saber si son Maestros Jedi, se debe buscar el texto "Fuerza" en el campo note. Sólo los Maestros Jedi tienen esta palabra en note.
  /* versión function() */
  // let jediMaster = "Fuerza";
  // return arr.every(function(el){
  //   return el.note.indexOf(jediMaster) > -1;
  // });

  /* versión arrow function */
  // return arr.every((el)=>{
  //   return el.note.indexOf(jediMaster) > -1;
  // });

  /* versión arrow function mínima */
  return arr.every(({note})=>{ return note.indexOf("Fuerza") > -1;});
};

/* ===================== SOME ===================== */

/**
 * Obtener verdadero si alguno los personajes cumplen con la condición o falso en caso contrario, usando el método SOME()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si alguno los personajes cumplen con la condición
 */
const alguienDeGenero = (arr = [], filtro = "") => {
  console.log('Alguno de los personajes tienen genero ' + filtro + ':');
  /* versión function() */
  // return arr.some(function(el){
  //   return el.gender == filtro;
  // });
  /* versión arrow function */
  // return arr.some((el)=>{
  //   return el.gender == filtro;
  // });
  /* versión arrow function mínima */
  return arr.some(({gender})=> gender == filtro);
};

/**
 * Obtener verdadero si alguno los personajes cumplen con la condición o falso en caso contrario, usando el método SOME()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si alguno los personajes cumplen con la condición
 */
const alguienDeOjosColor = (arr = [], filtro = "") => {
  console.log('Alguno de los personajes tienen color de ojos ' + filtro + ':');
  /* versión function() */
  // return arr.some(function(el){
  //   return el.eye_color == filtro;
  // });
  /* versión arrow function */
  // return arr.some((el)=>{
  //   return el.eye_color == filtro;
  // });
  /* versión arrow function mínima */
  return arr.some(({eye_color})=>{eye_color == filtro});
};

/**
 * Obtener verdadero si alguno los personajes cumplen con la condición o falso en caso contrario, usando el método SOME()
 * @param  {array} arr=[] - Arreglo de datos
 * @returns {boolean} - Valor de tipo booleano que indica si alguno los personajes cumplen con la condición
 */
const alguienQuePeseMasDe = (arr = [], filtro = "") => {
  console.log('Alguno de los personajes pesa más de ' + filtro + ':');
  /* versión function() */
  // return arr.some(function(el){
  //   return parseInt(el.height) > filtro;
  // });
  /* versión arrow function */
  // return arr.some((el)=>parseInt(el.height) > filtro);
  /* versión arrow function mínima */
  return arr.some(({height})=>parseInt(height) > filtro);
};

/* ********************* console ********************* */

/* MAP */
console.log('######### MAP -------------------');
console.log(obtenerNombresCompletos(characters));
console.log(obtenerPesos(characters));
console.log(obtenerApellidos(characters));
console.log(obtenerNacimientos(characters));

/* REDUCE */
console.log('######### REDUCE ----------------');
console.log(obtenerPesoTotalPersonajes(characters));
console.log(obtenerCantidadGenerosPersonajes(characters));
console.log(obtenerMasaTotalPersonajes(characters));
console.log(obtenerCantidadColorOjosPersonajes(characters));

/* FILTER */
console.log('######### FILTER ----------------');
let filtroFilter = 'Yoda';
console.log(obtenerTieneDeMaestroA(characters, filtroFilter));
filtroFilter = 200;
console.log(obtenerPesoMenorA(characters, filtroFilter));
filtroFilter = 'male';
console.log(obtenerGeneroIgualA(characters, filtroFilter));
filtroFilter = 'Héroe sin miedo';
console.log(obtenerTextoBusquedaEnNote(characters, filtroFilter));

/* SORT */ 
console.log('######### SORT -----------------');

/* Descomentar la que quieras visualizar y comentar la que ya no visualizarás -- una por una --  */
let ordenSort = 'ascendente';
console.log(ordenarPersonajesPorNombre(characters, ordenSort));
// ordenSort = "descendente";
// console.log(ordenarPersonajesPorPeso(characters, ordenSort));
// ordenSort = "ascendente";
// console.log(ordenarPersonajesPorMasa(characters, ordenSort));
// ordenSort = "descendente";
// console.log(ordenarPersonajesPorGenero(characters, ordenSort));

/* EVERY */
console.log('######### EVERY ----------------');
console.log(todosTienenOjosAzules(characters));
console.log(todosSonHombres(characters));
console.log(todosSonMaestrosJedi(characters));

/* SOME */
console.log('######### SOME -----------------');
let caracteristicaBuscadaSome = 'female';
console.log(alguienDeGenero(characters, caracteristicaBuscadaSome));
caracteristicaBuscadaSome = "red";
console.log(alguienDeOjosColor(characters, caracteristicaBuscadaSome));
caracteristicaBuscadaSome = "200";
console.log(alguienQuePeseMasDe(characters, caracteristicaBuscadaSome));
