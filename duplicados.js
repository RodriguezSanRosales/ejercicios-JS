/*
OBJETIVO: dada un arreglo de números, imprimir en consola la cantidad de veces que se repiten los nímeros dentro del arreglo, ordenados en forma ascendente 

Se puede utilizat Template strings para imprimir el resultado https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals

Ejemplo 1:

Entrada = 2, 7, 2, 15
Salida =

2: 2 veces
7: 1 veces
15: 1 veces

Ejemplo 2:

Entrada = 1, 2, 3, 4
Salida =

1: 1 veces
2: 1 veces
3: 1 veces
4: 1 veces

-------------------------

Referencia:

let
array
ARRAY.push()
ARRAY.length
Array.sort() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
for in 
funciones [function]
funciones de flecha () =>
plantillas de cadenas : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals

https://developer.mozilla.org/es/docs/Web/JavaScript



*/

let duplicados = (arreglo = []) => {

    let newArray = arreglo.sort((a, b)=>{return a - b});
    let count = 0;

    for(let i = 0; i < newArray.length; i++){
        let number = newArray[i];
        for(let j = 0; j < newArray.length; j++){
            if(number === newArray[j]){
                count++;
            }
        }
        if(count > 0){
            console.log(`${number}: ${count} veces`);
        }
        count = 0;
    }
};

let arr = [2, 7, 4, 2, 15, 2, 4, 8, 2];
let arr1 = [8, 1, 82, 2, 1, 2, 4, 82, 2];
let arr2 = [2, 20, 15, 2, 4, 15, 2];

/* Salida:

2: 4 veces
4: 2 veces
7: 1 veces
8: 1 veces
15: 1 veces

*/

duplicados(arr);


