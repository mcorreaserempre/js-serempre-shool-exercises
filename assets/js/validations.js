document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    let busqueda = document.getElementById("busqueda").value;

    if(busqueda == null || busqueda.length == 0){
        alert('Ingresa un valor válido!');
        return false;
    }
    
  }