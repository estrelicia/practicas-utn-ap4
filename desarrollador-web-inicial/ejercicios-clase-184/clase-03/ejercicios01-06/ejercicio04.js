let ladoCuadrado = prompt('Indica la medida en cm. del lado del cuadrado');

function cuadrado(lado) {
    let perimetro = lado * 4;
    let area = lado * lado;
    console.log('El perímetro del cuadrado es: ' + perimetro + ' cm.');
    console.log('El área del cuadrado es: ' + area + ' cm2.');
    return;
}
cuadrado(ladoCuadrado);