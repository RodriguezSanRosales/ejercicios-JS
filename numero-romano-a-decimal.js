/*
OBJETIVO: convertir un número romano a decimal:

1- Una entrada vacía dará como resultado un 0
2- Los números romanos se escriben en orden descendente
3- La entrada siempre será un número romano válido 

-------------------------

Equivalencia romanos - decimales

  I=1
    IV=4
  V=5
    IX=9
  X=10
    XL=40
  L=50
    XC=90
  C=100
    CD=400
  D=500
    CM=900 
  M=1000

-------------------------

Ejemplo 1:

Entrada = MMXXI  //  Salida =  2021

Ejemplo 2:

Entrada = MCMLXXXIX  //  Salida =  1989

Ejemplo 3:

Entrada = LII  //  Salida =  52

Ejemplo 4:

Entrada = DXLIX  //  Salida =  549 

-------------------------

Referencia:

let
array
STRING.length
STRING.charAt()
Map
if... else
switch ... case ... default
for
while
funciones [function]
funciones de flecha () =>
console.time
console.timeEnd

https://developer.mozilla.org/es/docs/Web/JavaScript
https://es.wikipedia.org/wiki/Numeraci%C3%B3n_romana


*/
/*
-------------------------


-------------------------
*/

let equivalencia = (romano) => {
  let equivalenciaN = '';
  switch (romano) {
    case "I":
      equivalenciaN = 1;
      break;
    case "V":
      equivalenciaN = 5;
      break;
   
    case "X":
      equivalenciaN = 10;
      break;
    case "L":
      equivalenciaN = 50;
      break;
    case "C":
      equivalenciaN = 100;
      break;
    case "D":
      equivalenciaN = 500;
      break;
    case "M":
      equivalenciaN = 1000;
      break;
    default:
      equivalenciaN = 0;
      break;
  }
  return  equivalenciaN;
}


/* función */

romanoDecimal = (romano) => {
  let suma = 0;
  for (let i = 0; i < romano.length; i++) {
    const numActual = equivalencia(romano[i]);
    const numSiguiente = equivalencia(romano[i + 1]);
    if( numActual >= numSiguiente ){
      suma += numActual;
    }
    else{
      suma -= numActual;
    }
  }
  return suma;
}


/* datos de prueba */

const s  = ''; // 0
const s1 = 'MMXXI'; // 2021 
const s2 = 'MCMLXXXIX'; // 1989
const s3 = 'LII'; // 52 
const s4 = 'IV'; // 


/* ejecución de la función */

console.time('romanoDecimal');
console.log(romanoDecimal(s1));
console.timeEnd('romanoDecimal');