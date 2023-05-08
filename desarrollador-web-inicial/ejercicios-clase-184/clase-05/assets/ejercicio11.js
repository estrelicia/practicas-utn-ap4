
function convertirC() {
    gradosC = document.getElementById('gradosC').value;
    resultado = ((gradosC * (9/5))+32);
    document.getElementById('resultado').innerHTML =  gradosC + ' grados celsius equivalen a ' + resultado + ' grados farenheit.';
}