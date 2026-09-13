document.addEventListener("DOMContentLoaded", function () {

    const carta = document.getElementById("carta");
    const mensaje = document.getElementById("mensaje");

    console.log("JavaScript funcionando");


    /* =========================
       ABRIR CARTA
       ========================= */

    carta.addEventListener("click", function () {

        console.log("Carta abierta ❤️");

        // Esconder carta
        carta.style.display = "none";

        // Mostrar mensaje
        mensaje.style.display = "flex";

    });


    /* =========================
       CORAZONES Y ROSAS
       ========================= */

    const simbolos = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💘",
        "🌹"
    ];


    function crearElementoNeon() {

        const elemento = document.createElement("div");

        elemento.className = "neon-flotante";

        elemento.textContent =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];


        // Posición horizontal
        elemento.style.left =
            Math.random() * 100 + "vw";


        // Tamaño
        elemento.style.fontSize =
            Math.random() * 20 + 20 + "px";


        // Velocidad
        const duracion =
            Math.random() * 5 + 5;

        elemento.style.animationDuration =
            duracion + "s";


        document.body.appendChild(elemento);


        // Eliminar después
        setTimeout(function () {

            elemento.remove();

        }, (duracion + 1) * 1000);

    }


    /* Crear elementos continuamente */

    setInterval(function () {

        crearElementoNeon();

    }, 400);


    /* Crear algunos inmediatamente */

    for (let i = 0; i < 8; i++) {

        setTimeout(function () {

            crearElementoNeon();

        }, i * 300);

    }

});
