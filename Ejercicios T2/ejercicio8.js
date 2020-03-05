//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 8 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var listaDatos1 = [1,2,3,4,5,6,7,8]
var listaDatos2 = [1,2,3,4,5,6,7,8]
var resultado
var primerAux
var segundoAux = true
var iterador = 0
do {
if (listaDatos1[iterador] == listaDatos2[iterador]) primerAux = true
else segundoAux = false
iterador++
} while(iterador < listaDatos1.length || iterador < listaDatos2.length)
resultado = primerAux && segundoAux
if(resultado) {
    console.log("¡Ambas listas SON IGUALES!")
    console.log(resultado)
}else {
    console.log("¡Las listas SON DIFERENTES!")
    console.log(resultado)
}