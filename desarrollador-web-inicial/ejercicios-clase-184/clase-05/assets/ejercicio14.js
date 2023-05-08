let listaNombres = [];

function agregarNombre() {
    
    let nombre = document.getElementById("nombre").value;
    // Referencias de como agregar elementos a un array https://www.freecodecamp.org/espanol/news/como-agregar-elementos-a-un-arreglo/
    listaNombres.push(nombre);
    document.getElementById("resultado").innerHTML = 'Se ha agregado el nombre ' + nombre + ' al listado.'

    const nodo = document.createElement("li");
    const texto = document.createTextNode(nombre);
    nodo.appendChild(texto);
    document.getElementById("listado").appendChild(nodo);
}

console.log(listaNombres);
