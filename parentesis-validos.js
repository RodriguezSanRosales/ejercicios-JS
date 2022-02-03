/*
OBJETIVO: dada una cadena de tipo string sólo con paréntesis, determinar si los paréntesis son válidos, es decir:

1- Un paréntesis abierto debe ser cerrado por otro paréntesis del mismo tipo
2- Un paréntesis abierto debe ser cerrado en el orden correcto
3- Una cadena vacía es considerada válida

Ejemplo 1:

Entrada = (())  //  Salida =  TRUE

Ejemplo 2:

Entrada = (){}()[]  //  Salida =  TRUE

Ejemplo 3:

Entrada = ({[(]}})  //  Salida =  FALSE

Ejemplo 4:

Entrada = }()}  //  Salida =  FALSE

-------------------------

Referencia:

let
array
ARRAY.push()    // agregar elementos al final de una Array o arreglo
ARRAY.pop()     // elimina el último elemento de un arreglo
Map             // permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados
if... else
for
while
funciones [function]
funciones de flecha () =>
console.time
console.timeEnd

https://developer.mozilla.org/es/docs/Web/JavaScript


*/




/* datos de prueba */

const s  = ''; // true
const s1 = '(){}()[]'; // true
const s2 = '({[(]}})'; // false
const s3 = '}()}'; // false
const s4 = '{[()]}'; // true
const s5 = '({)}()[]'; // false
const s6 = '{([)]}'; // false


/* función */

const parentesisValido = (param) => {

    let res = true;
    let i = 0;
    const arrApertura = [ '(', '{', '[' ];
    const arrCierre = [ ')', '}', ']' ];
    let newArr = []; 

    while(res && i < param.length){
        let element = param[i];
        if( arrApertura.includes(element) ){
            newArr.push(element);
        } else if( arrCierre.includes(element) ) {
            if ( newArr.length != 0) { 
                let ultimoAgregado = newArr[newArr.length-1]; 
                let posAperturaUltimo = arrApertura.indexOf(ultimoAgregado);
                let posCierre = arrCierre.indexOf(element);
                
                if(posAperturaUltimo == posCierre){
                    newArr.pop();
                }

            }else{
                newArr.push(element);
                res = false;
            }
        }
        ++i;
    }
    ( !newArr.length ) ? res = true : res = false;
    
    return (`${param}: ${res}`);

    // **************************************************
    // otra forma de resolverlo usando MAP 
    // const map = new Map([
    //     ['(', ')'],
    //     ['[', ']'],
    //     ['{', '}'],
    // ]);
    
    // let newArr = [];
  
    // for(let i = 0; i < param.length; ++i){
    //     let element = param[i];
    //     if(map.has(element)){
    //         newArr.push(element);
    //     }else{
    //         let elementoUltimo = newArr[newArr.length - 1];
    //         element === map.get(elementoUltimo) ? newArr.pop() : newArr.push(element);
    //     }
    // }
    // return (`${param}: ${newArr.length === 0}`) ;
}




/* ejecución de la función */

console.time('parentesisValido');

console.log(parentesisValido(s));
console.log(parentesisValido(s1));
console.log(parentesisValido(s2));
console.log(parentesisValido(s3));
console.log(parentesisValido(s4));
console.log(parentesisValido(s5));
console.log(parentesisValido(s6));

console.timeEnd('parentesisValido');



