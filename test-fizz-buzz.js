/*
OBJETIVO: Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra "fizz", los múltiplos de 5 por "buzz" y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra "fizzbuzz".
A TENER EN CUENTA: en este tipo de ejercicios se evalúa la forma de resolverlo

  DOCUMENTACIÓN

- ARRAY: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
- STRING: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/**
 * Función que devuelve un arreglo con 100 posiciones, del 1 al 100
 * @returns {Array} Arreglo con 100 posiciones, del 1 al 100
 */
const arregloFizzbuzz = () => {
    let res = [];
    for(let i = 1; i < 101; ++i){
        res.push(i);
    }
    return res;
};

/**
 * Función que realiza el test de Fizzbuzz
 * @param  {array} arregloDeFizzbuzz Arreglo con 100 elementos del 1 al 100
 * @returns {array} Arreglo con las posiciones múltiplos de 3 y 5 (o de 15)
 */
const testFizzbuzz = (arregloDeFizzbuzz = []) => {
  arregloDeFizzbuzz.map((number, indx) => {
    if (number % 15 == 0)
      arregloDeFizzbuzz[indx] = 'fizzbuzz';
    else if (number % 3 == 0) 
      arregloDeFizzbuzz[indx] = 'fizz';
    else if (number % 5 == 0)
      arregloDeFizzbuzz[indx] = 'buzz';
    
  });
  return arregloDeFizzbuzz;
};

console.log(testFizzbuzz(arregloFizzbuzz()));