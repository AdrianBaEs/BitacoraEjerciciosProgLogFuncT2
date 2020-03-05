//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 4 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

var numeros = [5,12,3,4], aux = numeros[0]
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
}
console.log("¡El número "+aux+" es el MAYOR del conjunto!")