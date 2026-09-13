/* =========================================
   CONFIGURACIÓN GENERAL
   ========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    overflow: hidden;
    font-family: Arial, sans-serif;

    background: linear-gradient(135deg, #ff9a9e, #fad0c4);

    display: flex;
    align-items: center;
    justify-content: center;
}


/* =========================================
   CARTA 💌
   ========================================= */

.carta {
    width: 130px;
    height: 100px;

    background: white;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 55px;

    cursor: pointer;

    box-shadow:
        0 0 10px #ff1493,
        0 0 25px #ff1493,
        0 10px 30px rgba(0, 0, 0, 0.25);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    animation: aparecer 1s ease;

    position: relative;
    z-index: 100;
}

.carta:active {
    transform: scale(0.9);
}

.carta:hover {
    transform: scale(1.08);

    box-shadow:
        0 0 15px #ff1493,
        0 0 35px #ff1493,
        0 15px 40px rgba(0, 0, 0, 0.35);
}


/* =========================================
   MENSAJE CON FOTO
   ========================================= */

#mensaje {
    display: none;

    position: fixed;

    inset: 0;

    width: 100%;
    height: 100dvh;

    /* FOTO DE SOFI */
    background-image:
        linear-gradient(
            rgba(0, 0, 0, 0.30),
            rgba(0, 0, 0, 0.55)
        ),
        url("img/sofi.jpg");

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 25px;

    z-index: 50;

    animation: aparecerMensaje 1s ease;
}


/* =========================================
   TEXTO ❤️
   ========================================= */

.texto-mensaje {

    color: white;

    font-size: 22px;

    font-weight: bold;

    line-height: 1.5;

    max-width: 90%;

    text-align: center;

    text-shadow:
        0 0 5px white,
        0 0 10px #ff1493,
        0 0 20px #ff1493,
        0 2px 5px black,
        0 4px 12px rgba(0, 0, 0, 0.8);

    animation: textoAparecer 1.5s ease;

    position: relative;

    z-index: 60;
}


/* =========================================
   CORAZONES Y ROSAS NEÓN
   ========================================= */

.neon-flotante {

    position: fixed;

    bottom: -60px;

    pointer-events: none;

    z-index: 70;

    animation-name: flotarNeon;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    filter:
        drop-shadow(0 0 5px #ff1493)
        drop-shadow(0 0 10px #ff1493)
        drop-shadow(0 0 20px #ff1493);

    text-shadow:
        0 0 5px #ff1493,
        0 0 10px #ff1493,
        0 0 20px #ff1493,
        0 0 35px #ff1493;
}


/* =========================================
   ANIMACIÓN DE LOS CORAZONES Y ROSAS
   ========================================= */

@keyframes flotarNeon {

    0% {
        transform:
            translateY(0)
            translateX(0)
            rotate(0deg);

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    50% {
        transform:
            translateY(-50vh)
            translateX(30px)
            rotate(15deg);

        opacity: 1;
    }

    100% {
        transform:
            translateY(-115vh)
            translateX(-30px)
            rotate(-15deg);

        opacity: 0;
    }
}


/* =========================================
   ANIMACIONES
   ========================================= */

@keyframes aparecer {

    from {
        opacity: 0;
        transform: scale(0.5);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}


@keyframes aparecerMensaje {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@keyframes textoAparecer {

    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* =========================================
   CELULARES 📱
   ========================================= */

@media (max-width: 600px) {

    .carta {
        width: 115px;
        height: 90px;

        font-size: 48px;
    }

    .texto-mensaje {

        font-size: 20px;

        max-width: 92%;

        line-height: 1.45;
    }

    .neon-flotante {

        font-size: 25px;

    }
}
