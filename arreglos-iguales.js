/*
OBJETIVO: programar una función que determine si dos arreglos son iguales (tienen los mismos elementos, de igual tipo y extensión)

REGLAS:

1- los arreglos son numéricos
2- no están vacíos (tienen por lo menos un elemento)


EJEMPLOS:

arreglo 1 = [1, 6, 8, 4, 9]
arreglo 2 = [1, 6, 8, 4, 9]
arreglo 3 = [1, 6, '8', 4, 9]
arreglo 4 = [1, 2, 8, 4, 9] 

arreglo 1 y 2 son iguales
arreglo 1 y 3 no son iguales (8 es un número y '8' es un string)
arreglo 1 y 4 no son iguales

-------------------------

Documentación:

Array: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

*/

const arreglosIguales = (array1 = [], array2 = []) => {
    const array1Length = array1.length;
    const array2Length = array2.length;
    let res = true;
    let i = 0;

    if(array1Length == array2Length){
        while (i < array1Length && res) {
            res = (array1[i] === array2[i]);
            i++;
        }
    }
    return res;
};




const arr1 = [1, 2, 8, 4, 9];
const arr2 = [1, 2, 8, 4, 9];
const arr3 = [1, 2, 3, 4, 9];
const arr4 = [1, 6, '8', 4, 9];
const arr5 =[];
const arr6 =[];

console.log(arreglosIguales(arr1, arr2)); // true
console.log(arreglosIguales(arr1, arr3)); // false
console.log(arreglosIguales(arr1, arr4)); // false
console.log(arreglosIguales(arr5, arr6)); // true
