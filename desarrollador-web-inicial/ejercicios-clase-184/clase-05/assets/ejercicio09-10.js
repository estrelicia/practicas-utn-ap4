
function convertirDolares() {
    dolares = document.getElementById('dolares').value;
    resultado = dolares * 300;
    document.getElementById('resultado').innerHTML = 'Convertir USD ' + dolares + ' dólares da como resultado ARS ' + resultado + ' pesos.';
}

function convertirPesos() {
    pesos = document.getElementById('pesos').value;
    resultado = pesos / 300;
    document.getElementById('resultado').innerHTML = 'Convertir ARS ' + pesos + ' pesos da como resultado USD ' + resultado + ' dólares.';
}