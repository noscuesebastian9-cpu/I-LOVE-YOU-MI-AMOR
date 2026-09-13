/* =========================================
   ABRIR LA CARTA
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
    // MOSTRAR LA FOTO Y EL MENSAJE
    // =====================================

    if (mensaje) {

        mensaje.style.display = "flex";

    }


    // =====================================
    // EVITAR DESPLAZAMIENTO
    // =====================================

    document.body.style.overflow = "hidden";

}
