document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       ELEMENTOS
    ============================== */

    const carta = document.getElementById("carta");
    const mensaje = document.getElementById("mensaje");


    /* ==============================
       ABRIR CARTA
    ============================== */

    carta.addEventListener("click", function () {

        // Ocultar carta
        carta.style.display = "none";

        // Mostrar foto + mensaje
        mensaje.style.display = "flex";

        // Evitar desplazamiento
        document.body.style.overflow = "hidden";

    });


    /* ==============================
       CORAZONES Y ROSAS
    ============================== */

    const simbolos = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💘",
        "💝",
        "🌹"
    ];


    function crearDecoracion() {

        const elemento = document.createElement("div");

        elemento.classList.add("decoracion");


        // Elegir corazón o rosa aleatoriamente
        const simbolo =
            simbolos[
                Math.floor(
                    Math.random() * simbolos.length
                )
            ];

        elemento.textContent = simbolo;


        // Posición horizontal aleatoria
        elemento.style.left =
            Math.random() * 100 + "vw";


        // Tamaño aleatorio
        const tamaño =
            Math.random() * 25 + 20;

        elemento.style.fontSize =
            tamaño + "px";


        // Duración aleatoria
        const duracion =
            Math.random() * 5 + 5;

        elemento.style.animationDuration =
            duracion + "s";


        // Agregar a la página
        document.body.appendChild(elemento);


        // Eliminar cuando termine
        setTimeout(function () {

            elemento.remove();

        }, (duracion + 1) * 1000);

    }


    /* ==============================
       CREACIÓN CONTINUA
    ============================== */

    setInterval(function () {

        crearDecoracion();

    }, 350);


    /* ==============================
       DECORACIONES INICIALES
    ============================== */

    for (let i = 0; i < 12; i++) {

        setTimeout(function () {

            crearDecoracion();

        }, i * 250);

    }

});
// ==============================
// RESPUESTA ¿CUÁNTO ME AMAS?
// ==============================

function respuestaAmor() {

    const respuesta = document.getElementById("respuesta-amor");

    respuesta.innerHTML =
        "🥰 Sabía que me amabas...<br>" +
        "pero yo te amo muchísimo más ❤️❤️❤️";

    for (let i = 0; i < 15; i++) {

        const corazon = document.createElement("div");

        corazon.className = "decoracion";
        corazon.textContent = "❤️";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            (18 + Math.random() * 20) + "px";

        corazon.style.animationDuration =
            (3 + Math.random() * 2) + "s";

        document
            .getElementById("decoraciones")
            .appendChild(corazon);

        setTimeout(function () {
            corazon.remove();
        }, 5000);
    }
}
