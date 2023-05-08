a = 10;
b = 20;

console.log('Los números ingresados inicialmente son: a=' + a + ' y b=' + b);

function invertirNumeros(param1, param2) {
    param3 = param1;
    param1 = param2;
    param2 = param3;
    return console.log('Los números invertidos son: a=' + param1 + ' y b=' + param2);
}

invertirNumeros(a, b);
