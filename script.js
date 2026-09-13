```javascript
/* =========================================
   ABRIR LA CARTA
   ========================================= */

function abrirCarta() {

    const carta = document.querySelector(".carta");
    const mensaje = document.getElementById("mensaje");

    // Ocultar la carta
    if (carta) {
        carta.style.display = "none";
    }

    // Mostrar la foto y el mensaje
    if (mensaje) {
        mensaje.style.display = "flex";
    }

    // Evitar desplazamiento
    document.body.style.overflow = "hidden";
}


/* =========================================
   CORAZONES Y ROSAS NEÓN
   ========================================= */

const simbolos = ["❤️", "💗", "💖", "💕", "🌹"];

function crearElementoNeon() {

    const elemento = document.createElement("div");

    elemento.classList.add("neon-flotante");

    // Elegir corazón o rosa aleatoriamente
    elemento.innerHTML =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    // Posición horizontal aleatoria
    elemento.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    const tamaño = Math.random() * 20 + 18;
    elemento.style.fontSize = tamaño + "px";

    // Duración aleatoria
    const duracion = Math.random() * 5 + 5;
    elemento.style.animationDuration = duracion + "s";

    // Pequeña variación de retraso
    elemento.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(elemento);

    // Eliminar después de la animación
    setTimeout(() => {
        elemento.remove();
    }, (duracion + 2) * 1000);
}


/* =========================================
   CREACIÓN CONTINUA
   ========================================= */

setInterval(crearElementoNeon, 350);


/* Crear algunos inmediatamente */
for (let i = 0; i < 10; i++) {
    setTimeout(crearElementoNeon, i * 250);
}
```
