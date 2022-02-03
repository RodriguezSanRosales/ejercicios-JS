/*
Palíndromo: palabra o frase que se lee igual en un sentido que en otro, por ejemplo Ana (Si se trata de números en lugar de letras, se llama capicúa)

OBJETIVO: programar una función que determine si una entrada de tipo string es palíndromo o no

REGLAS:

1- la entrada es de tipo string y sólo puede contener letras (mayúsculas y minúsculas) y espacios
2- las entradas vacías o con una letra se consideran palíndromos
3- los espacios no se tienen en cuenta para determinar si son palíndromos

PLANTEAMIENTO

1-Primero se debe limpiar la entrada, es decir, quitarle acentos, mayúsculas y espacio. La cadena sólo contrendrá este tipo de caracteres.
Ej. "Amad a la dama" luego de la función de limpieza quedará como "amadaladama"

2-Si se tiene en cuenta la posición de cada caracter:

a m a d a l a d a m a
0 1 2 3 4 5 6 7 8 9 10

Una cadena será palíndroma si:

Caracter en posición 0 es igual a caracter en posición 10,
Caracter en posición 1 es igual a caracter en posición 9,
etc... 
Pero, ¿cómo determino si es palíndomo o no?

EJEMPLOS:

entrada: Amad a la dama // salida: true
entrada: Yo hago yoga hoy // salida: true
entrada: La ruta nos aportó otro paso natural // salida: true
entrada: no es palíndromo // salida: false

-------------------------

Referencia:

let
const
Boolean
String.charAt()
String.length
funciones [function]
funciones de flecha () =>
While


Para limpiar entrada:

String.toLowerCase()
String.split()
String.replaceAll()
Array.map()
Array.join()

Documentación:

String: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
Array: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

*/

const esPalindromo = (str = '') => {
    let res = true;
    let lastLetter = str.length;  

    //Spread operator
    let arr = [...str];
    const txt = arr.map((currentLetter, index) => {
      if(currentLetter != arr[lastLetter -1]){
        res = false;
      }
      // console.log( `${index}: ${currentLetter} -> ${lastLetter -1}: ${arr[lastLetter -1]}`);
      lastLetter =  lastLetter - 1;
    });
    return res;
};

const limpiarCadena = (cadena = '') => {
  let limCadena = cadena.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f ]/g, "");
  return limCadena;
}


const str = 'Amad a la dama';  // true
const str1 = 'Yo hago yoga hoy';  // true
const str2 = 'La ruta nos aportó otro pasa natural';  // true
const str3 = 'no es palíndromo';  // false
const str4 = '';  // true

console.log(esPalindromo(limpiarCadena(str)));
console.log(esPalindromo(limpiarCadena(str1)));
console.log(esPalindromo(limpiarCadena(str2)));
console.log(esPalindromo(limpiarCadena(str3)));
console.log(esPalindromo(limpiarCadena(str4)));
