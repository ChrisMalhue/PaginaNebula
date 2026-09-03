function inyectarHeader(){

    document.getElementById("header").innerHTML = `
    <nav class="custom-navbar py-3">
        <div class="container columns is-vcentered is-mobile m-0">
            
            <!-- Sección 1: Logotipo (Izquierda) -->
            <section class="column is-narrow p-0 logo-seccion">
                <h1 class="logo-texto">
                    <img class="andlogo" src="/images/logo.webp">
                </h1>
            </section>
            
            <!-- Sección 2: Enlaces (Centro) -->
            <section class="column is-flex is-justify-content-center p-0 menu-seccion">
                <a class="nav-link is-active" href="../index.html">Home</a>
                <a class="nav-link" href="../index.html#quienes">Quienes somos</a>
                <a class="nav-link" href="../index.html#elegirnos">Por que elegirnos</a>
                <a class="nav-link" href="../pages/eventos.html#trabajamos">Como trabajamos</a>
                <a class="nav-link" href="../pages/eventos.html#fotos">Galeria de eventos</a>
                <a class="nav-link" href="../pages/faqcotiza.html#faq">FAQ</a>
                <a class="nav-link" href="../pages/faqcotiza.html#cotizacion">Cotizacion</a>
            </section>

        </div>
    </nav>`;

}

function recibirDatos(event) {
    event.preventDefault(); // Evita que la página se recargue y se pierda la información

    // Muestra el cuadro nativo con tu mensaje personalizado
    alert("Recibimos tu solicitud, te contactaremos en breve.");

    // Deja todos los campos del formulario completamente vacíos
    event.target.reset();
}
inyectarHeader();