// referencias: https://www.jasoft.org/Blog/post/Uso-de-condiciones-complejas-en-instrucciones-switch-de-JavaScript-(y-otros-lenguajes)

let calificacion = Number(prompt('Ingresá la calificación obtenida para ver el resultado:'));

switch(true) {

case calificacion >= 0 && calificacion < 3 :
      console.log('Muy deficiente');
      break;
case calificacion >= 3 && calificacion < 5 :
     console.log('Insuficiente'); 
     break;
case calificacion >= 5 && calificacion < 6 :
    console.log('Suficiente'); 
    break;
case calificacion >= 6 && calificacion < 7 :
    console.log('Bien'); 
    break;
case calificacion >= 7 && calificacion < 9 :
    console.log('Notable'); 
    break;
case calificacion >= 9 && calificacion <= 10 :
    console.log('Sobresaliente'); 
    break;
default:
    console.log('Hay un error. La calificación ingresada no es válida (ingresá un número entre 0 y 10)'); 
}