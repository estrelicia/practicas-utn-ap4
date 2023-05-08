
function formularioE() {
    let nombre = document.getElementById("nombre").value;
    let material = document.getElementById("material").value;
    let dimension = document.getElementById("peque" && "normal" && "grande").value;
    let comentario = document.getElementById("comentarios").value;

    document.getElementById("resultado").innerHTML = nombre + " ha pedido una caja de " + material + " y su dimensión es " + dimension + ". Además ha dejado el siguiente comentario: \"" + comentario + "\"";
}