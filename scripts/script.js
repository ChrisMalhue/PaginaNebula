// Header

function inyectarHeader(){

    document.getElementById("header").innerHTML = `
    <nav class="custom-navbar py-3">
        <div class="container columns is-vcentered is-mobile m-0">
            
            <!-- Sección 1: Logotipo (Izquierda) -->
            <section class="column is-narrow p-0 logo-seccion">
                <h1 class="logo-texto">
                  <a href="/index.html">  
                    <img class="andlogo" src="/images/logo.webp">
                  </a>
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

            <section class="sin_cuenta">
              <a class="nav-link" href="../pages/inicio_secion.html">Iniciar sesion</a>
            </section>

            <section class="con_cuenta">
              <button onclick="cerrarSesion()">Cerrar sesion</button>
            </section>

            
        </div>
    </nav>`;

    // Aqui vemos si hay alguna sesion creada para despues mosrtar el boton que toque
    const estaLogueado = localStorage.getItem("logueado") === "true";
    const sinCuenta = document.querySelector(".sin_cuenta");
    const conCuenta = document.querySelector(".con_cuenta");

    if (estaLogueado) {
        sinCuenta.style.display = "none";
        conCuenta.style.display = "flex";
    } else {
        sinCuenta.style.display = "flex";
        conCuenta.style.display = "none";
    }

}

// Funciones medias

function recibirDatos(event) {
    event.preventDefault(); // Evita que la página se recargue y se pierda la información

    // Muestra el cuadro nativo con tu mensaje personalizado
    alert("Recibimos tu solicitud, te contactaremos en breve.");

    // Deja todos los campos del formulario completamente vacíos
    event.target.reset();
}

function recibirDatosLogin(event) {
    event.preventDefault();

    const usuarioValido = "admin";
    const contrasenaValida = "1234";

    const form = event.target;
    const usuarioIngresado = document.getElementById("usuario").value;
    const contrasenaIngresada = document.getElementById("contrasena").value;

    if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        localStorage.setItem("logueado", "true");
        window.location.href = "../index.html";
    } else {
        alert("Usuario o contraseña incorrecto");
    }
}

function cerrarSesion() {
    localStorage.removeItem("logueado");
    window.location.href = "../index.html";
}

// Footer

function inyectaFooter(){

  const footerHTML = `
    <footer class="footer has-background-black has-text-white">
    <div class="columns is-vcentered is-justify-content-space-between">
      <div class="column is-narrow">
        <a href="/index.html">
          <img class="andlogo" src="/images/logo.webp">
        </a>
      </div>
      <div class="column is-narrow ml-6">
        <p class="title is-5">¿Necesitas ayuda?</p>
        <br>
        <p class="subtitle is-6"><a class="has-text-current" href="/pages/eventos.html">Como trabajamos</a></p>
        <p class="subtitle is-6"><a class="has-text-current" href="/pages/faqcotiza.html">Preguntas Frecuentes</a></p>
      </div>

      <div class="column is-flex is-justify-content-flex-end">
        <div class="is-flex is-flex-direction-column gap-2">
          <span class="icon-text">
            <span class="icon"><i class="fa-solid fa-house"></i></span>
            <span>Av. Alguna Parte</span>
          </span>
          <span class="icon-text">
            <span class="icon"><i class="fa-solid fa-phone"></i></span>
            <span>+56911111111</span>
          </span>
          <span class="icon-text">
            <span class="icon"><i class="fa-solid fa-envelope"></i></span>
            <span>correo@gmail.com</span>
          </span>
        </div>
      </div>
      <div class="column is-flex is-justify-content-flex-end">
        <div class="is-flex is-flex-direction-row is-align-items-center gap-3">
          <a href="https://www.instagram.com/nevula.scl/" target="_blank">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HUwsS-_LkMQoYL66F7AUH5X4HwhDjzCNMg-_jlvPxQ&s=10" />
            </figure>
          </a>
          <a href="https://www.youtube.com/channel/UCa-jOKgfq2FLccvHXteRdpQ" target="_blank">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://www.icosix.com/uploads/icons/2025/09/youtube.png" />
            </figure>
          </a>
        </div>
      </div>
    </div>
  </footer>`;

  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = footerHTML;
  }
}



inyectaFooter();
inyectarHeader();