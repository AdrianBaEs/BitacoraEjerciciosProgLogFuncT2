//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 1 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var numero = 3
var potencia = 3

const elevarPotencia = function(x,n){
    var resultado = 1
    for(let count = 0;count<n;count++){
        resultado *= x
    }
    return resultado
}

console.log(elevarPotencia(numero,potencia))