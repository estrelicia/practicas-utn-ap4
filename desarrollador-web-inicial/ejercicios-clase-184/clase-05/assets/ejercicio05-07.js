// Ejercicio 05
let numeros = [];
let numeroMax = 10;
console.log ('El array tiene los siguientes números: ' + numeros);

for (let i = 1; i <= numeroMax; i++) {
    numeros.push(i);
}
console.log ('El array tiene los siguientes números (después del push): ' + numeros);
document.getElementById("ejercicio05").innerHTML= numeros;

// Ejercicio 06 
let numerosAleatorios = [];

for (let i = 1; i <= numeroMax; i++) {
    numerosAleatorios.push(Math.round(Math.random()*100));
}

console.log ('El array tiene los siguientes números aleatorios: ' + numerosAleatorios);
document.getElementById("ejercicio06").innerHTML= numerosAleatorios;

// Ejercicio 07
let copiaNumerosAleatorios = numerosAleatorios;

console.log ('La copia del array es: ' + copiaNumerosAleatorios);
console.log ('El array original es: ' + numerosAleatorios);

document.getElementById("ejercicio07").innerHTML= copiaNumerosAleatorios;