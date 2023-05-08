let factorial = Number.parseInt(prompt('Ingrese un número para calcular el factorial (debe ser menor a 10)'));

function sacarFactor(numero) {

    /* El if valida que el número sea menor a 10
 el else muestra en consola el aviso que debe ser menor a 10. */

    if (numero > 10) {
        console.log('El número debe ser menor a 10.');
    }

    else {
        if (numero == 0 || numero == 1) {
            numero = 1;
        }
        else {

            /* En esta parte del ejercicio me quede trabajo y busque referencia para comprenderlo
            // https://www.freecodecamp.org/espanol/news/tres-formas-de-factorizar-un-numero-en-javascript/
            */

            let i = numero - 1;
            for (i; i >= 1; i--) {
                numero = numero * i;
                // console.log('iteración ' + i + ' > multiplica ' + numero + ' por ' + (i - 1));
            }
        }
        console.log('El factorial de ' + factorial + ' es igual a: ' + numero);
    }
}

sacarFactor(factorial);