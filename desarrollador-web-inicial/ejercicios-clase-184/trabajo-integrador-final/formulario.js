var paso = 0; 
mostrarPaso(paso); 

function mostrarPaso(n) {
    // Esta función muestra el div correspondiente al paso en curso y oculta los demás.
    // Para eso se crea un array con los divs de los pasos.
    let x = document.getElementsByClassName("pasos");
    x[n].style.display = "block";
    
    // Si el paso es 0, se oculta el botón de "Anterior" y se muestra el de "Siguiente".
    if (n == 0) {
      document.getElementById("anterior").style.display = "none";
    } else {
      document.getElementById("anterior").style.display = "inline";
    }
    // Si el paso es el último, se cambia el texto del botón "Siguiente" por "Enviar".
    if (n == (x.length - 1)) {
      document.getElementById("siguiente").innerHTML = "Enviar";
    } else {
      document.getElementById("siguiente").innerHTML = "Siguiente";
    }
  }

  function navegador(n) {
    // Esta funcion permite recorrer los divs/ pasos del formulario.
    // Se crea un array igual que en la función anterior.
    // El evento onclick del html suma o resta 1 al paso actual.
    let x = document.getElementsByClassName("pasos");
    x[paso].style.display = "none";
    paso = paso + n;
    // Verifica que es el ultimo paso y envia el formulario.
    if (paso >= x.length) {
      document.getElementById("formulario").onclick = enviarDatos();
      return false;
    }
    mostrarPaso(paso);
  }
  
  function enviarDatos () {
    let cursos = document.querySelector("input[type='radio']:checked").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let correo = document.querySelector("#correo").value;
    let telefono = document.querySelector("#telefono").value;
    
    document.getElementById("formulario").innerHTML = "<h2>Hemos recibido tu registro correctamente</h2>" + "<strong>Quiero estudiar " + cursos + "</strong><br>Mi nombre es " + nombre + " " + apellido + "<strong><br><br>Datos de Contacto</strong>" + "<br>Correo electrónico: " + correo + "<br>Teléfono: " + telefono;
    
  }