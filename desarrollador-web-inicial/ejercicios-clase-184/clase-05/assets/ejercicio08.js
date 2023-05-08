let texto;
let textoTotal = '';


// Parte 1 - Ejercicio 8 (sin array)
while (texto !== 'cancelar') {
    texto = prompt('Ejercicio 8 (parte 1) - Ingresá una palabra -escribí \'cancelar\' para finalizar:');

    if (textoTotal == '') {
        textoTotal = textoTotal + texto;
    }
    else if (texto !== 'cancelar') {
        textoTotal = textoTotal + '-' + texto;
    } else {
        textoTotal = textoTotal;
    }
}
document.getElementById('parte1').innerHTML = textoTotal;


// Parte 2 - Ejercicio 8 (con array)
let texto2;
const arrayTextoTotal = [];

while (texto2 !== 'cancelar') {
    texto2 = prompt('Ejercicio 8 (parte 2) - Ingresá una palabra -escribí \'cancelar\' para finalizar:');
    arrayTextoTotal.push(texto2);
}
for (i=0; i < arrayTextoTotal.length-1; i++) {
    document.getElementById('parte2').innerHTML += arrayTextoTotal[i]+'-';
}
