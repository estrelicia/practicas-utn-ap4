let a = 1;
let b = 99;

function numeroAleatorio (numMin,numMax) {
    numMax = Math.floor(numMax);
    numMin = Math.ceil(numMin);
    // ver referencia https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    resultado = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return document.write(resultado)
}

numeroAleatorio(a,b);
