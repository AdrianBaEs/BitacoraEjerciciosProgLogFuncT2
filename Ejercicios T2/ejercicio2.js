//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 2 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var n = 3
var rangoI = 1
var rangoF = 5
for (let index = rangoI; index <= rangoF; index++) {
    if(n==index){
        console.log("¡El número "+n+" ESTÁ dentro del rango!")
        break;
    }
    if(n!=index && index==rangoF) console.log("¡El número "+n+" NO ESTÁ dentro del rango!")
}