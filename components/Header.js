
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style> 
header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

header nav a {
    font-family: "Pirata One", system-ui;
    position: relative;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}


header nav a:hover {
    color: #ffffff !important;
    transform: translateY(-10px);
}

header nav a::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 0%;
    height: 1px;
    background: #c59d5f;
    transition: all 0.35s ease;
    transform: translateX(-50%);
}

header nav a:hover::after {
    width: 100%;
}

header img {
    transition: all 0.5s ease;
}

header img:hover {
    transform: scale(1.08);
}

header .col-md-2,
header .col-md-4 {
    animation: fadeUp 0.8s ease forwards;
    opacity: 0;
}

header .col-md-2:nth-child(3) {
    animation-delay: 0.1s;
}

header .col-md-2:nth-child(4) {
    animation-delay: 0.2s;
}

header .col-md-4 {
    animation-delay: 0.3s;
}

header .col-md-2:nth-child(6) {
    animation-delay: 0.4s;
}

header .col-md-2:nth-child(7) {
    animation-delay: 0.5s;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
    </style>
    <header class="bg-black py-4">
      <nav class="container-fluid px-3 px-md-5" aria-label="Navegacion principal">
          <div class="row align-items-center text-center g-3">
              <div class="col-2 d-md-none">
                  <button class="btn btn-outline-light" type="button" data-bs-toggle="offcanvas"
                      data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                      <i class="bi bi-list"></i>
                  </button>
              </div>
              <div class="col-8 col-md-4 order-1 order-md-3 d-flex justify-content-center">
                  <a href="index.html" aria-label="Volver al inicio">
                      <img src="img/logo_V_blanco.png" alt="Logo V blanco" class="img-fluid"
                          style="max-width: 100px;">
                  </a>
              </div>
              <div class="col-6 col-md-2 order-2 order-md-1 d-none d-md-block">
                  <a href="servicio.html" class="text-white text-decoration-none fs-3 fw-light">Servicios</a>
              </div>
              <div class="col-6 col-md-2 order-3 order-md-2 d-none d-md-block">
                  <a href="galeria.html" class="text-white text-decoration-none fs-3 fw-light">Galeria</a>
              </div>
              <div class="col-6 col-md-2 order-4 d-none d-md-block">
                  <a href="about-us.html" class="text-white text-decoration-none fs-3 fw-light">Sobre nosotros</a>
              </div>
              <div class="col-6 col-md-2 order-5 d-none d-md-block">
                  <a href="academia.html" class="text-white text-decoration-none fs-3    fw-light">Academia</a>
              </div>
          </div>
      </nav>
    </header>`;
  }
}

customElements.define("app-header", Header);