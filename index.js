// Función para cambiar el modo
function toggleDarkMode() {
  console.log('Cambiando modo');
  document.body.classList.toggle('dark-mode');
}

// Escuchar el evento de clic en el botón y cambiar el modo
document.getElementById('toggle-mode').addEventListener('click', toggleDarkMode);

document.getElementById('TiendaLink').addEventListener('click', function() {
  // Obtén la referencia a la sección de la tienda y desplázate hacia ella
  var TiendaSection = document.getElementById('TiendaSection');
  TiendaSection.scrollIntoView({ behavior: 'smooth' });

  // También puedes cambiar la URL en la barra de direcciones si estás utilizando enlaces reales
  // window.location.href = '#tiendaSection';
});