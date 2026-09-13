```javascript
/* =========================================
   ABRIR LA CARTA 💌
   ========================================= */

function abrirCarta() {

    // Buscar la carta
    const carta = document.querySelector(".carta");

    // Buscar el mensaje
    const mensaje = document.getElementById("mensaje");


    // =====================================
    // OCULTAR LA CARTA
    // =====================================

    if (carta) {
        carta.style.display = "none";
    }


    // =====================================
    // MOSTRAR EL MENSAJE
    // =====================================

    if (mensaje) {
        mensaje.style.display = "flex";
    }


    // =====================================
    // EVITAR DESPLAZAMIENTO
    // =====================================

    document.body.style.overflow = "hidden";
}


/* =========================================
   CORAZONES Y ROSAS ❤️🌹
   ========================================= */

const simbolos = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💓",
    "💘",
    "🌹"
];


/* =========================================
   CREAR ELEMENTO FLOTANTE
   ========================================= */

function crearElementoNeon() {

    // Crear elemento
    const elemento = document.createElement("div");

    // Agregar clase CSS
    elemento.classList.add("neon-flotante");


    // Elegir símbolo aleatorio
    const simbolo =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    elemento.textContent = simbolo;


    // =====================================
    // POSICIÓN ALEATORIA
    // =====================================

    elemento.style.left =
        Math.random() * 100 + "vw";


    // =====================================
    // TAMAÑO ALEATORIO
    // =====================================

    const tamaño =
        Math.random() * 20 + 20;

    elemento.style.fontSize =
        tamaño + "px";


    // =====================================
    // VELOCIDAD ALEATORIA
    // =====================================

    const duracion =
        Math.random() * 5 + 5;

    elemento.style.animationDuration =
        duracion + "s";


    // =====================================
    // RETRASO ALEATORIO
    // =====================================

    elemento.style.animationDelay =
        Math.random() * 1.5 + "s";


    // =====================================
    // AGREGAR A LA PÁGINA
    // =====================================

    document.body.appendChild(elemento);


    // =====================================
    // ELIMINAR DESPUÉS DE LA ANIMACIÓN
    // =====================================

    setTimeout(() => {

        elemento.remove();

    }, (duracion + 2) * 1000);
}


/* =========================================
   CREACIÓN CONTINUA
   ========================================= */

// Crear un nuevo corazón/rosa cada 350 ms

setInterval(() => {

    crearElementoNeon();

}, 350);


/* =========================================
   CREAR ALGUNOS AL INICIO
   ========================================= */

for (let i = 0; i < 10; i++) {

    setTimeout(() => {

        crearElementoNeon();

    }, i * 250);
}
```
