/*
# objetivo = 9

valor = [2, 7, 11, 15, 25]
clave = [0, 1,  2,  3,  4]

*/

let dosNumeros = (arregloNumeros = [], numeroObjetivo = 0) => {
    let arregloObjetos = [];
    let res = false;

    if(arregloNumeros.length > 1){
        
        for(let i = 0; i < arregloNumeros.length; i++){
            // tomo el primero y lo comparo con los otros
            for(let j = i + 1; j < arregloNumeros.length; j++){
                if(arregloNumeros[i] + arregloNumeros[j] == numeroObjetivo){
                    arregloObjetos.push({i, j});
                }
            }
        }

        if(arregloObjetos.length > 0){
            res = arregloObjetos;
        }
    }

    return res;
}

let arr = [2, 7, 4, 5, 25];

// console.time('dosNumeros');
console.log(dosNumeros(arr, 9));
// console.timeEnd('dosNumeros');