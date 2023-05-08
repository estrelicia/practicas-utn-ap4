/*
Formulario de 2 Pasos

const nextBtn = document.querySelector("#boton-siguiente");
const backBtn = document.querySelector("#boton-anterior");
const step1 = document.querySelector("#paso01");
const step2 = document.querySelector("#paso02");
const step3 = document.querySelector("#paso03");
const summary = document.querySelector("#final");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function () {
  // recopilar datos del primer paso
  let cursos = document.querySelector('input[name="cursos"]:checked').value;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let correo = document.querySelector("#correo").value;
  let telefono = document.querySelector("#telefono").value;

  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${cursos}<br>Email: ${nombre}<br>Telefono: ${apellido}<br>Curso: ${telefono}<br>Curso: ${correo}`;

  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
  step3.style.display = "block";
  
});

*/

/* 

*/
var paso = 0;
mostrarPaso(paso);

function mostrarPaso(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("paso");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("paso");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[paso].style.display = "none";
  // Increase or decrease the current tab by 1:
  paso = paso + n;
  // if you have reached the end of the form... :
  if (paso >= x.length) {
    //...the form gets submitted:
    document.getElementById("formulario").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  mostrarPaso(paso);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("paso");
  y = x[paso].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[paso].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}