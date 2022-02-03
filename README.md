# Ejercicios Javascript

## Arreglo de números
[Arreglo de números](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/dos-numeros.js "Arreglo de números")

**OBJETIVO:** Dado un arreglo de números que no se repiten y un número objetivo, programar una función que devuelva la posición de los números del arreglo que sumados den el número objetivo, o 0 en caso de que ningúna suma de el número objetivo.

**Ejemplo 1:**
- Entrada = 2, 7, 11, 15, 25 ; Número objetivo = 9  //  Salida =  [{0, 1}]

**Ejemplo 2:**
- Entrada = 1, 2, 3, 4, 5 ; Número objetivo = 6  //  Salida =  [{0, 4}, {1, 3}]

**Ejemplo 3:**
- Entrada = 2, 7, 11, 15, 25 ; Número objetivo = 3  //  Salida =  0


## Número romano a decimal
[Número romano a decimal](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/numero-romano-a-decimal.js "Número romano a decimal")

**OBJETIVO:** Convertir un número romano a decimal:
1. Una entrada vacía dará como resultado un 0
2. Los números romanos se escriben en orden descendente
3. La entrada siempre será un número romano válido 

**Ejemplo 1:**
- Entrada = MMXXI  //  Salida =  2021

**Ejemplo 2:**
- Entrada = MCMLXXXIX  //  Salida =  1989

## Parentesis válidos
[Parentesis válidos](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/parentesis-validos.js "Parentesis válidos")

**OBJETIVO:**  dada una cadena de tipo string sólo con paréntesis, determinar si los paréntesis son válidos, es decir:
1. Un paréntesis abierto debe ser cerrado por otro paréntesis del mismo tipo
2. Un paréntesis abierto debe ser cerrado en el orden correcto
3. Una cadena vacía es considerada válida

**Ejemplo 1:**
- Entrada = (())  //  Salida =  TRUE

**Ejemplo 2**
- Entrada = (){}()[]  //  Salida =  TRUE

**Ejemplo 3:**
- Entrada = ({[(]}})  //  Salida =  FALSE

## Duplicados
[ Duplicados](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/duplicados.js " Duplicados")

**OBJETIVO:**  dada un arreglo de números, imprimir en consola la cantidad de veces que se repiten los nímeros dentro del arreglo, ordenados en forma ascendente.
Se puede utilizat Template strings para imprimir el resultado -> [Referencia](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals "Referencia")

**Ejemplo 1:**
Entrada = 2, 7, 2, 15
Salida =
- 2: 2 veces
- 7: 1 veces
- 15: 1 veces

**Ejemplo 2**
Entrada = 1, 2, 3, 4
Salida =
- 1: 1 veces
- 2: 1 veces
- 3: 1 veces
- 4: 1 veces


## Palíndromo
[Palíndromo](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/palindromo.dist.js "Palíndromo")

Palíndromo: palabra o frase que se lee igual en un sentido que en otro, por ejemplo Ana (Si se trata de números en lugar de letras, se llama capicúa)
**OBJETIVO:**  programar una función que determine si una entrada de tipo string es palíndromo o no.
**REGLAS:** 
1. la entrada es de tipo string y sólo puede contener letras (mayúsculas y minúsculas) y espacios
2. las entradas vacías o con una letra se consideran palíndromos
3. los espacios no se tienen en cuenta para determinar si son palíndromos

**Ejemplos:**

 - entrada: Amad a la dama // salida: true
 - entrada: Yo hago yoga hoy // salida: true

## Arreglos iguales
[Arreglos iguales](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/arreglos-iguales.js "Arreglos iguales")

**OBJETIVO:**  programar una función que determine si dos arreglos son iguales (tienen los mismos elementos, de igual tipo y extensión).
** REGLAS:** 
1. los arreglos son numéricos
2. no están vacíos (tienen por lo menos un elemento)

**Ejemplos:** 
arreglo 1 = [1, 6, 8, 4, 9]
arreglo 2 = [1, 6, 8, 4, 9]
arreglo 3 = [1, 6, '8', 4, 9]
arreglo 4 = [1, 2, 8, 4, 9]

- arreglo 1 y 2 son iguales
- arreglo 1 y 3 no son iguales (8 es un número y '8' es un string)
- arreglo 1 y 4 no son iguales

## Arreglo Star Wars
[Arreglos iguales](https://github.com/RodriguezSanRosales/ejercicios-JS/blob/main/arreglos-iguales.js "Arreglos iguales")

** GENERALES**
- Los callback son funciones usadas como argumentos (pasadas desde otra función)

- Es una buena práctica guardar los callbacks (funciones) en constantes para que el código quede más estilizado y legible (versión 3, ver a continuación)

- Se debe escribir tres versiones de cada función:
  - la primera usando la definición tradicional de function()
  - la segunda usando las funciones de flecha para representar una función
  - la tercera, se debe tratar de simplificar la versión anterios (siempre que sea posible, de no ser posible no se hará)

** Documentación**
- [MAP](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map "MAP")
- [REDUCE](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce "REDUCE")
- [FILTER](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter "FILTER")
- [SORT](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort "SORT")
- [EVERY](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every "EVERY")
- [SOME](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some "SOME")
- [ARRAY](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "ARRAY")
- [STRING](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String "STRING")
