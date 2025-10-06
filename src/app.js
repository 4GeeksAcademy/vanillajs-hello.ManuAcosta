import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays con los valores y palos posibles
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const palos = [
    { nombre: "heart", simbolo: "♥" },
    { nombre: "diamond", simbolo: "♦" },
    { nombre: "spade", simbolo: "♠" },
    { nombre: "club", simbolo: "♣" }
  ];

  // Generar números aleatorios
  const valorAleatorio = Math.floor(Math.random() * valores.length);
  const paloAleatorio = Math.floor(Math.random() * palos.length);

  // Obtener el valor y palo seleccionados
  const valor = valores[valorAleatorio];
  const palo = palos[paloAleatorio];

  // Crear el HTML de la carta
  const cartaHTML = `
    <div class="card ${palo.nombre}">
      <div class="top-suit">${palo.simbolo}</div>
      <div class="number">${valor}</div>
      <div class="bottom-suit">${palo.simbolo}</div>
    </div>
  `;

  // Limpiar el contenido del body y agregar la carta
  document.body.innerHTML = cartaHTML;

  console.log(`Carta generada: ${valor} de ${palo.nombre}`);

};
