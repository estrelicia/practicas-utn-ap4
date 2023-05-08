let colores = ['azul','verde','rojo','amarillo','violeta'];
console.log(colores);
document.getElementById("array").innerHTML = colores;

let elemento = colores[2];
document.getElementById("elemento").innerHTML = elemento

let detalle = colores[0];
detalle = detalle.split('');
document.getElementById("detalle").innerHTML = detalle[0];

