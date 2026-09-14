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
.pregunta-amor h2 {
        font-size: 19px;
    }

    .pregunta-amor button {
        font-size: 14px;
        padding: 9px 18px;
    }

    #respuesta-amor {
        font-size: 16px;
    }
