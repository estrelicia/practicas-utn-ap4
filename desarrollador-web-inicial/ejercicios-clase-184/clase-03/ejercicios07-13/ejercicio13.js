let modeloAuto = prompt("Ingrese el código del auto para calcular el descuento");

switch (modeloAuto) {
    case "fiesta":
        console.log('El Ford Fiesta tiene tiene un descuento del 5%');
        break;

    case "focus":
        console.log('El Ford Focus tiene tiene un descuento del 10%');
        break;

    default:
        console.log('El código ingresado no existe en nuestros registros');
        break;
}
