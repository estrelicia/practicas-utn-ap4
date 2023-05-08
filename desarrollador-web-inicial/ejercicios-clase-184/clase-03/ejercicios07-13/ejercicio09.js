let calificacion = Number(prompt('Ingresá la calificación obtenida para ver el resultado:'));

/* Consulta: en este caso para transformar el string en número, utilice Number() pero la profe, en el video clase 3, 
introducción JS (minuto 30:35) utilzó parseInt ().
Cual sería la diferencia y cual es la mejor opción / práctica recomendada?
vi este link: https://thisthat.dev/number-constructor-vs-parse-int/
*/

if ((calificacion >= 0) && (calificacion < 3)) { console.log('Muy deficiente'); }
else
    if ((calificacion >= 3) && (calificacion < 5)) { console.log('Insuficiente'); }
    else
        if ((calificacion >= 5) && (calificacion < 6)) { console.log('Suficiente'); }
        else
            if ((calificacion >= 6) && (calificacion < 7)) { console.log('Bien'); }
            else
                if ((calificacion >= 7) && (calificacion < 9)) { console.log('Notable'); }
                else
                    if ((calificacion >= 9) && (calificacion <= 10)) { console.log('Sobresaliente'); }
                    else { console.log('Hay un error. La calificación ingresada no es válida (ingresá un número entre 0 y 10)'); }

