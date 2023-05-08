// Numero al azar entre 1 y 5 
let numeroAdivinar = Math.floor(Math.random() * (5 - 1 + 1) + 1);
let intentos = 3;

// console.log(numeroAdivinar);
// console.log(intentos);

function adivinaNumero() {
    // console.log(numeroAdivinar);
    // console.log(intentos);

    numero = document.getElementById('numero').value;
    // console.log(numero);

    if (numero == numeroAdivinar && intentos > 0) {
        document.getElementById("resultadoAdivinar").innerHTML = "Adivinaste";
    }
    else if (numero != numeroAdivinar && intentos > 0) {
        intentos--;
        document.getElementById("resultadoAdivinar").innerHTML = "No adivinaste. Te quedan " + intentos + " intentos.";
    }
    else if (numero != numeroAdivinar && intentos == 0)
    document.getElementById("resultadoAdivinar").innerHTML = "No te quedan más intentos. Perdiste";
}
