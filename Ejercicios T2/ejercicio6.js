//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 6 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var numero = 2
var lista = [1,2,3,4]

function determinarExistencia(numero){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == numero){
            return true;
        }
    }
}

if(determinarExistencia(numero)){
    console.log("¡El número "+numero+" se ENCUENTRA en el conjunto!")
    console.log(true)
}else{
    console.log("¡El número "+numero+" NO SE ENCUENTRA en el conjunto!")
    console.log(false)
}