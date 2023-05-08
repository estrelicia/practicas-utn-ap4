let grados = prompt('Ingresá los grados farhenheit');

function convertirGrados(gradosFarhenheit) {
    let gradosCelsius = (gradosFarhenheit - 32) *5/9;
    console.log('La temperatura en grados celsius es de: ' + gradosCelsius);
    return;
}

convertirGrados(grados);