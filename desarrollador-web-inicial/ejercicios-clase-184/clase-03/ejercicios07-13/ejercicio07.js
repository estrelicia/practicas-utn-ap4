let palindromo = prompt('Ingresa una frase para conocer si es palindromo: ')

function esPalindromo(palindromo) {

    // Transforma palindromo (string) en array y le quita los espacios con split, luego fraseLadoA se convierte en string
    let parametro1 = palindromo.split(' ');
    fraseLadoA = parametro1.join('');
    console.log('Frase A ' + fraseLadoA);
     
    // Se convierte fraseLadoA en array y se asigna a fraseLadoB que a su vez, es un array que se invierte, y luego se convierte en string.
    fraseLadoB = fraseLadoA.split('');
    fraseLadoB = parametro1.reverse();
    fraseLadoB = fraseLadoB.join('');
    console.log('Frase B ' + fraseLadoB);

    /* Un palindromo se puede leer de ambos lados, o sea que la frase A (conjunto de caracteres sin espacios) 
    y la frase B (ese mismo conjunto de caracteres sin espacios pero invertido) 
    deberian ser iguales en caso de ser palindromo. 
    */
    if (fraseLadoA.toLowerCase() == fraseLadoB.toLowerCase()) { console.log('Es un palindromo') }
    else { console.log('No es un palindromo') }
}

esPalindromo(palindromo);