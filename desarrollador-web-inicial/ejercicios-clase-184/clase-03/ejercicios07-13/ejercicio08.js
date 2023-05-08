let texto = prompt('Ingresá un texto');

function transformaTexto(a) {
    let textoMayusculas = a.toUpperCase();
    console.log('El texto en mayúsculas es: ' + textoMayusculas);
    let textoMinusculas = a.toLowerCase();
    console.log('El texto en minúsculas es: ' + textoMinusculas);
    return;
}	

transformaTexto(texto);