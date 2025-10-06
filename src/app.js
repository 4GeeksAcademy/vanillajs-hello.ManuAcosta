// Variables globales para el temporizador
let intervaloAuto;
let cuentaRegresiva;
let tiempoRestante = 10;
let temporizadorActivo = true;

// Ejecutar cuando la página cargue completamente
window.onload = function() {
    generarCartaAleatoria();
    iniciarTemporizador();
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
    
    // Reiniciar cuenta regresiva
    tiempoRestante = 10;
}

function iniciarTemporizador() {
    // Limpiar temporizadores existentes
    if (intervaloAuto) clearInterval(intervaloAuto);
    if (cuentaRegresiva) clearInterval(cuentaRegresiva);
    
    // Temporizador principal (cada 10 segundos genera nueva carta)
    intervaloAuto = setInterval(() => {
        if (temporizadorActivo) {
            generarCartaAleatoria();
        }
    }, 10000);
    
    // Cuenta regresiva (actualiza cada segundo)
    cuentaRegresiva = setInterval(() => {
        if (temporizadorActivo) {
            tiempoRestante--;
            if (tiempoRestante < 0) tiempoRestante = 9;
            document.getElementById('countdown').textContent = tiempoRestante;
        }
    }, 1000);
}

function detenerTemporizador() {
    const btn = document.getElementById('stopBtn');
    
    if (temporizadorActivo) {
        temporizadorActivo = false;
        btn.innerHTML = '▶️ Reanudar Auto';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
    } else {
        temporizadorActivo = true;
        tiempoRestante = 10;
        btn.innerHTML = '⏸ Pausar Auto';
        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
    }
}

function aplicarTamano() {
    const width = document.getElementById('widthInput').value;
    const height = document.getElementById('heightInput').value;
    const card = document.getElementById('cardContainer');
    
    card.style.width = width + 'px';
    card.style.height = height + 'px';
    
    // Ajustar tamaños de fuente proporcionalmente
    const escala = width / 200; // 200 es el ancho base
    const topSuit = card.querySelector('.top-suit');
    const number = card.querySelector('.number');
    const bottomSuit = card.querySelector('.bottom-suit');
    
    topSuit.style.fontSize = (50 * escala) + 'px';
    number.style.fontSize = (80 * escala) + 'px';
    bottomSuit.style.fontSize = (50 * escala) + 'px';
}