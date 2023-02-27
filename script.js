//Función para mostrar información complementaria
function mostrarInfo() {
    alert("Mi nivel de inglés es avanzado, tengo experiencia en trabajo en equipo y he aprendido varios lenguajes de programación, como HTML, CSS  y JavaScript GRACIAS A TICMAS.");
  }
  
  //Función para abrir perfil de LinkedIn en una nueva pestaña
  function abrirLinkedIn() {
    window.open("https://www.linkedin.com/in/silviaveronica", "_blank");
  }
  
  //Función para mostrar ventana emergente con habilidades
  function mostrarHabilidades() {
    let ventanaHabilidades = window.open("", "ventanaHabilidades", "width=400,height=300");
    ventanaHabilidades.document.write("<h3>Habilidades</h3><ul><li>Trabajo en equipo</li><li>Inglés avanzado</li><li>Lenguajes de programación aprendidos: html, css Y JavaScript</li></ul>");
  }
  
  //Seleccionar botones y agregar eventos
  let botonLinkedIn = document.querySelector("#boton-linkedin");
  botonLinkedIn.addEventListener("click", abrirLinkedIn);
  
  let botonHabilidades = document.querySelector("#boton-habilidades");
  botonHabilidades.addEventListener("click", mostrarHabilidades);
  
  let botonSobreMi = document.querySelector("#boton-sobre-mi");
  botonSobreMi.addEventListener("click", mostrarInfo);