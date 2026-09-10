// Header

function inyectarHeader(){

    document.getElementById("header").innerHTML = `
    <nav class="custom-navbar py-3">
        <div class="container columns is-vcentered is-mobile m-0">
            
            <!-- Sección 1: Logotipo (Izquierda) -->
            <section class="column is-narrow p-0 logo-seccion">
                <h1 class="logo-texto">
                  <a href="/PaginaNebula/index.html">  
                    <img class="andlogo" src="/PaginaNebula/images/logo.webp">
                  </a>
                </h1>
            </section>

            <!-- Botón hamburguesa: solo visible en pantallas chicas -->
            <button class="hamburger" onclick="toggleMenu()" aria-label="Abrir menu">
              <i class="fa-solid fa-bars"></i>
            </button>

            <!-- Contenedor colapsable: enlaces + sesion -->
            <div class="nav-collapse" id="nav-collapse">
            
            <!-- Sección 2: Enlaces (Centro) -->
            <section class="column is-flex is-justify-content-center p-0 menu-seccion">
                <a class="nav-link is-active" href="/PaginaNebula/index.html">Home</a>
                <a class="nav-link" href="/PaginaNebula/index.html#quienes">Quienes somos</a>
                <a class="nav-link" href="/PaginaNebula/index.html#elegirnos">Por que elegirnos</a>
                <a class="nav-link" href="/PaginaNebula/pages/eventos.html#trabajamos">Como trabajamos</a>
                <a class="nav-link" href="/PaginaNebula/pages/eventos.html#fotos">Galeria de eventos</a>
                <a class="nav-link" href="/PaginaNebula/pages/faqcotiza.html#faq">FAQ</a>
                <a class="nav-link" href="/PaginaNebula/pages/faqcotiza.html#cotizacion">Cotizacion</a>
            </section>

            <section class="sin_cuenta">
              <a class="nav-link" href="/PaginaNebula/pages/inicio_secion.html">Iniciar sesion</a>
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

    // Cierra el menu automaticamente al tocar cualquier link (mobile)
    document.querySelectorAll("#nav-collapse .nav-link, #nav-collapse button").forEach(el => {
        el.addEventListener("click", cerrarMenu);
    });

}

// Menú hamburguesa
function toggleMenu(){
    const nav = document.getElementById("nav-collapse");
    const icon = document.querySelector(".hamburger i");
    nav.classList.toggle("is-active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
}

function cerrarMenu(){
    const nav = document.getElementById("nav-collapse");
    const icon = document.querySelector(".hamburger i");
    nav.classList.remove("is-active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
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
        <a href="/PaginaNebula/index.html">
          <img class="andlogo" src="/PaginaNebula/images/logo.webp">
        </a>
      </div>
      <div class="column is-narrow ml-6">
        <p class="title is-5">¿Necesitas ayuda?</p>
        <br>
        <p class="subtitle is-6"><a class="has-text-current" href="/PaginaNebula/pages/eventos.html">Como trabajamos</a></p>
        <p class="subtitle is-6"><a class="has-text-current" href="/PaginaNebula/pages/faqcotiza.html">Preguntas Frecuentes</a></p>
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

// Funcion de eventos

function agregarEvento() {

    const local = document.getElementById("local_evento").value;
    const estado = document.getElementById("estado_evento").value;
    const imagen = document.getElementById("imagen_evento").value;
    const link = document.getElementById("link_evento").value;

    // Validacion de campos vacios
    if (!local || !imagen) {
        alert("Por favor completa el local y la imagen del evento.");
        return;
    }

    if (estado === "Programado" && !link) {
        alert("Los eventos Programados necesitan un link para comprar entradas.");
        return;
    }

    const contenedorFotos = document.getElementById("fotos");

    // Parecido al trabajo de cartas, se crea el contenedor
    const nuevoEvento = document.createElement("div");

    // el boton de comrpa se muestra solo si el estado agregado es programado
    const botonHTML = estado === "Programado"
        ? `<a href="${link}" target="_blank"><button>Comprar ticket</button></a>`
        : "";

    nuevoEvento.innerHTML = `
        <img src="${imagen}" alt="${local}">
        <p>Local: ${local}</p>
        <p>Estado: ${estado}</p>
        ${botonHTML}
    `;

    contenedorFotos.prepend(nuevoEvento);

    // Limpiamos el formulario
    document.getElementById("local_evento").value = "";
    document.getElementById("imagen_evento").value = "";
    document.getElementById("link_evento").value = "";
}

function controlarVistaAdmin() {
    const estaLogueado = localStorage.getItem("logueado") === "true";
    const seccionAgregar = document.getElementById("agregar-evento");

    if (seccionAgregar) {
        seccionAgregar.style.display = estaLogueado ? "block" : "none";
    }
}

inyectaFooter();
inyectarHeader();
controlarVistaAdmin();