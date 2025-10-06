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
    
    // Generar números aleatorios usando operadores ternarios
    const paloAleatorio = Math.floor(Math.random() * 4);
    const valorAleatorio = Math.floor(Math.random() * 13);
    
    // Obtener el palo y valor seleccionados
    const paloSeleccionado = palos[paloAleatorio];
    const valorSeleccionado = valores[valorAleatorio];
    const simboloPalo = simbolosPalos[paloSeleccionado];
    
    // Obtener elementos del DOM
    const cardContainer = document.getElementById('cardContainer');
    const topSuit = cardContainer.querySelector('.top-suit');
    const number = cardContainer.querySelector('.number');
    const bottomSuit = cardContainer.querySelector('.bottom-suit');
    
    // Limpiar clases anteriores de palos usando operador ternario
    cardContainer.classList.remove('heart', 'diamond', 'spade', 'club');
    cardContainer.classList.add(paloSeleccionado);
    
    // Actualizar el contenido
    topSuit.textContent = simboloPalo;
    number.textContent = valorSeleccionado;
    bottomSuit.textContent = simboloPalo;
    
    // Reiniciar cuenta regresiva
    tiempoRestante = 10;
}

function iniciarTemporizador() {
    // Limpiar temporizadores existentes usando operadores ternarios
    intervaloAuto ? clearInterval(intervaloAuto) : null;
    cuentaRegresiva ? clearInterval(cuentaRegresiva) : null;
    
    // Temporizador principal (cada 10 segundos genera nueva carta)
    intervaloAuto = setInterval(() => {
        temporizadorActivo ? generarCartaAleatoria() : null;
    }, 10000);
    
    // Cuenta regresiva (actualiza cada segundo)
    cuentaRegresiva = setInterval(() => {
        if (temporizadorActivo) {
            tiempoRestante--;
            tiempoRestante = tiempoRestante < 0 ? 9 : tiempoRestante;
            document.getElementById('countdown').textContent = tiempoRestante;
        }
    }, 1000);
}

function detenerTemporizador() {
    const btn = document.getElementById('stopBtn');
    
    // Usar operadores ternarios para cambiar estado y apariencia del botón
    temporizadorActivo = !temporizadorActivo;
    
    // Operador ternario para el texto del botón
    btn.innerHTML = temporizadorActivo ? '⏸ Pausar Auto' : '▶️ Reanudar Auto';
    
    // Operadores ternarios para las clases CSS
    temporizadorActivo 
        ? (btn.classList.remove('btn-success'), btn.classList.add('btn-danger'))
        : (btn.classList.remove('btn-danger'), btn.classList.add('btn-success'));
    
    // Reiniciar tiempo solo si se reanuda
    tiempoRestante = temporizadorActivo ? 10 : tiempoRestante;
}

function aplicarTamano() {
    const width = document.getElementById('widthInput').value;
    const height = document.getElementById('heightInput').value;
    const card = document.getElementById('cardContainer');
    
    // Aplicar tamaños usando operadores ternarios con valores por defecto
    card.style.width = (width && width >= 150) ? width + 'px' : '200px';
    card.style.height = (height && height >= 200) ? height + 'px' : '280px';
    
    // Ajustar tamaños de fuente proporcionalmente usando operador ternario
    const escala = (width && width >= 150) ? width / 200 : 1; // 200 es el ancho base
    const elementos = ['top-suit', 'number', 'bottom-suit'];
    const tamanosBase = [50, 80, 50];
    
    // Aplicar escalas usando operadores ternarios y forEach
    elementos.forEach((elemento, index) => {
        const elementoDOM = card.querySelector(`.${elemento}`);
        elementoDOM.style.fontSize = (tamanosBase[index] * escala) + 'px';
    });
}