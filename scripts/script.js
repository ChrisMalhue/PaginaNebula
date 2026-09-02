function inyectarHeader(){
    document.getElementById("header").innerHTML = `
    <nav class="custom-navbar px-5 py-3">
        <div class="container columns is-vcentered is-mobile m-0">
            
            <!-- Sección 1: Logotipo (Izquierda) -->
            <section class="column is-narrow p-0 df-logo-section">
                <h1 class="logo-text">
                    <img class="andlogo" src="/images/logo.webp">
                </h1>
            </section>
            
            <!-- Sección 2: Enlaces (Centro) -->
            <section class="column is-flex is-justify-content-center p-0 df-menu-section">
                <a class="nav-link is-active" href="#">Home</a>
                <a class="nav-link" href="#elegirnos">Por que elegirnos</a>
                <a class="nav-link" href="#oferta">Como trabajamos</a>
                <a class="nav-link" href="#fotos">Galeria de eventos</a>
                <a class="nav-link" href="#faq">FAQ</a>
                <a class="nav-link" href="#cotizacion">Cotizacion</a>
            </section>
        </div>
    </nav>`;
}

inyectarHeader();