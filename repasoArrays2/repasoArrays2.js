
function promedioArray(arreglo){
let contador = 0;
let suma = 0;

while(contador < arreglo.length){
    suma += arreglo[contador];
    contador++
}
return (suma / contador);
}

console.log(promedioArray([20, 33, 67, 4, 60]));