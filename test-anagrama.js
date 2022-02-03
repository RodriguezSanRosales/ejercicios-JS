/*
OBJETIVO: Escribir una función que cheque si dos palabras son anagramas, devolviendo verdadero en caso de serlo o falso.

ANAGRAMA: Una palabra es anagrama de otra si las dos tienen las mismas letras, con el mismo número de apariciones, pero en un orden diferente. 

Entonces, es anagrama si:

1-Las palabras tienen la misma extensión
2-Las palabras tienen las mismas letras
3-Las palabras tienen la misma cantidad de apariciones de las letras
4-Las letras en las palabras tienen diferente orden

REGLAS:

1-Las palabras no llevarán acentos
2-Las palabras sólo contrendrán letras y números
3-Las palabras siempre estarán en minúscula

EJEMPLOS

desamparador = desparramado
amor = roma

DOCUMENTACIÓN
-* .split("") -lista ordenada de subcadenas, coloca estas subcadenas en una matriz y devuelve la matriz
- ARRAY: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
- STRING: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/**
 * Función que realiza el test de Fizzbuzz
 * @param  {string} pal1 Primera palabra a checar
 * @param  {string} pal2 Segunda palabra a checar
 * @returns {boolean} Resultado booleano que indica si las dos palabras son anagramas o no
 * 
 * @example
 * - desamparador = desparramado // true
 * - hola != hoola // false
 */
const testEsAnagrama = (pal1 = "", pal2 = "") => {
    let res = false;
    if(pal1.length === pal2.length){
      const str1 = pal1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f ]/g,"").split("").sort().join("");
      const str2 = pal2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f ]/g,"").split("").sort().join("");
      
      if(str1 === str2){
        res = true;
      }
    }
    return res;
};

const palabra1 = "desamparador",
      palabra2 = "desparramado",
      palabra3 = "amor",
      palabra4 = "roma";

console.log(testEsAnagrama(palabra1, palabra2));
console.log(testEsAnagrama(palabra1, palabra3));
console.log(testEsAnagrama(palabra3, palabra4));
