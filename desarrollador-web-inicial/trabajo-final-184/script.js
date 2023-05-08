//funcion que captura datos posibles clientes//
function captura() {
  var nombreest = document.getElementById("nomest").value;
  var celuest = document.getElementById("celest").value;
  if (nombreest == "") {
    alert("el nombre es obligatorio");
    document.getElementById("nomest").focus();
  } else {
    if (celuest == "") {
      alert("el celular es obligatorio");
      document.getElementById("celest").focus();
    } else {
      console.log(nombreest + " " + celuest);
      document.getElementById("nomest").value = "";
      document.getElementById("celest").value = "";
      document.getElementById("nomest").focus();
    }
  }
}
