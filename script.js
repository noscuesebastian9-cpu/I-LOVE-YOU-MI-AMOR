function mostrarMensaje() {

    const mensaje = document.getElementById("mensajeEspecial");

    mensaje.innerHTML =
        "Sofía... creo que me gustas más de lo que debería ❤️‍🔥";

}

function crearCorazon() {

    const contenedor = document.querySelector(".corazones");

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 7000);
}

setInterval(crearCorazon, 500);