class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<header class="bg-black py-4">
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
                  <a href="servicio.html" class="text-white text-decoration-none fs-4 fw-light">Servicios</a>
              </div>
              <div class="col-6 col-md-2 order-3 order-md-2 d-none d-md-block">
                  <a href="galeria.html" class="text-white text-decoration-none fs-4 fw-light">Galeria</a>
              </div>
              <div class="col-6 col-md-2 order-4 d-none d-md-block">
                  <a href="about-us.html" class="text-white text-decoration-none fs-4 fw-light">Sobre nosotros</a>
              </div>
              <div class="col-6 col-md-2 order-5 d-none d-md-block">
                  <a href="academia.html" class="text-white text-decoration-none fs-4 fw-light">Academia</a>
              </div>
          </div>
      </nav>
    </header>`;
  }
}

customElements.define("app-header", Header);