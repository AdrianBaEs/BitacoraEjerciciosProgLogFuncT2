//INSTITUTO TECNOLÓGICO SUPERIOR DE VALLADOLID
//EJERCICIO 9 - TEMA 2 - M.M.M.D. JOSÉ LEONEL PECH MAY.
//ALUMNO: BR. LUIS ADRIAN BALAM ESPADAS

function funcRecursiva(entrada) {
    if(entrada == 1) return entrada
    else return (2 + funcRecursiva(entrada - 1))
}

for(var index = 1;index <= 20;index++) console.log(funcRecursiva(index))