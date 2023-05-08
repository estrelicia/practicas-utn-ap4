let mes = prompt('Ingresá el mes del año (en números del 1 al 12) para saber si tiene 30 o 31 días:');

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log('Este mes tiene 31 días');
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log('Este mes tiene 30 días');
} else { 
    console.log('Este mes no tiene 30 ni 31 días');
}
