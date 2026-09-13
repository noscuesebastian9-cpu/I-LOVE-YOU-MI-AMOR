document.addEventListener("DOMContentLoaded", function () {

    const carta = document.getElementById("carta");
    const mensaje = document.getElementById("mensaje");

    console.log("JavaScript cargado correctamente");

    if (!carta) {
        console.error("NO SE ENCONTRÓ LA CARTA");
        return;
    }

    if (!mensaje) {
        console.error("NO SE ENCONTRÓ EL MENSAJE");
        return;
    }

    carta.addEventListener("click", function () {

        console.log("¡CARTA TOCADA!");

        // Ocultar carta
        carta.style.display = "none";

        // Mostrar mensaje
        mensaje.style.display = "flex";

        // Bloquear desplazamiento
        document.body.style.overflow = "hidden";

    });

});
