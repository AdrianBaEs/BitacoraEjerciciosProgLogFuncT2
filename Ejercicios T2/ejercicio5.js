//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 5 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var numDatos = 5, resultadoSuma = 0
var numeros = [0,0,0,0,0]
for (let index = 0; index < numDatos; index++) {
    numeros[index] = 2
}

var sumarNumeros = function(datos){
    for (let index = 0; index < datos.length; index++) {
        resultadoSuma += datos[index]
    }
    console.log("Suma de los elementos en la lista: "+resultadoSuma)
}

sumarNumeros(numeros)