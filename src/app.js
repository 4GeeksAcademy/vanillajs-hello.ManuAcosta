// Ejecutar cuando la página cargue completamente
window.onload = function() {
  generarCartaAleatoria();
};

function generarCartaAleatoria() {
  // Arrays con los valores posibles
  const palos = ['heart', 'diamond', 'spade', 'club'];
  const simbolosPalos = {
      'heart': '♥',
      'diamond': '♦',
      'spade': '♠',
      'club': '♣'
  };
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  // Generar números aleatorios
  const paloAleatorio = Math.floor(Math.random() * 4); // 0 a 3
  const valorAleatorio = Math.floor(Math.random() * 13); // 0 a 12
  
  // Obtener el palo y valor seleccionados
  const paloSeleccionado = palos[paloAleatorio];
  const valorSeleccionado = valores[valorAleatorio];
  const simboloPalo = simbolosPalos[paloSeleccionado];
  
  // Obtener elementos del DOM
  const cardContainer = document.getElementById('cardContainer');
  const topSuit = cardContainer.querySelector('.top-suit');
  const number = cardContainer.querySelector('.number');
  const bottomSuit = cardContainer.querySelector('.bottom-suit');
  
  // Limpiar clases anteriores de palos
  cardContainer.classList.remove('heart', 'diamond', 'spade', 'club');
  
  // Aplicar la nueva clase de palo
  cardContainer.classList.add(paloSeleccionado);
  
  // Actualizar el contenido
  topSuit.textContent = simboloPalo;
  number.textContent = valorSeleccionado;
  bottomSuit.textContent = simboloPalo;
}