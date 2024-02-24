// Función para cambiar el modo
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Escuchar el evento de clic en el botón y cambiar el modo
  document.getElementById('toggle-mode').addEventListener('click', toggleDarkMode);