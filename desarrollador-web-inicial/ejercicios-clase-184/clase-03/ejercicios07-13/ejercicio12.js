let bultos = Number(prompt('Ingresá la cantidad de bultos a guardar en cajas'));
let capacidadCajas = Number(prompt('Ingresá la capacidad de cada caja (en bultos)'));

function calcularCapacidad(var1, var2) {
    cajas = var1 / var2;
    resto = var1 % var2;

    if (cajas < 1) {
        cajas = 1;
        resto = 0;
    }

    else {
        cajas = Math.round(cajas);
    }
    return console.log("Para guardar " + var1 + " bultos, necesitás " + cajas + " caja(s). Quedan " + resto + " bultos fuera de las cajas.");
}

calcularCapacidad(bultos, capacidadCajas);