let numero = prompt('Ingrese un número (debe ser menor a 10)');

function stairwayToHeaven(parametro) {

    if (numero >= 10) { console.log('El número debe ser menor a 10.'); }

    else {
        let i = 1;
        let escalera = '';

        for (i; i <= parametro; i++) {
            escalera += i;
            console.log(escalera);
        }

        /* Lo mismo pero realizado con while
         while (i <= parametro) {
            escalera += i;
            console.log(escalera);
            i++;
        } */
    }
}
stairwayToHeaven(numero);