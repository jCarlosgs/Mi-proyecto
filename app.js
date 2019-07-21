document.getElementById('interaccion').addEventListener('click',boton);
let accion = 'JuanCarlos'

function boton () {
var nombre = document.getElementById('texto').value;
if (nombre == accion) {
  var pregunta = prompt("¿Quieres conocer mas?");
  if (pregunta == 'Muestrame tus secretos') {
  window.location ='pagina2.html'
  }
}
else {
  console.log("Te equivocaste");
}
}
