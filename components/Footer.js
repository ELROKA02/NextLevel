class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer class="bg-black py-4">
        <div class="container d-flex flex-column align-items-center gap-3">
            <img src="img/logo_blanco.png" alt="Logo blanco Next Level" class="img-fluid" style="max-width: 500px;">
            <div class="d-flex flex-wrap justify-content-center gap-4">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                    class="text-white text-decoration-none d-inline-flex align-items-center gap-2">
                    <i class="bi bi-instagram"></i>
                    <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"
                    class="text-white text-decoration-none d-inline-flex align-items-center gap-2">
                    <i class="bi bi-tiktok"></i>
                    <span>TikTok</span>
                </a>
            </div>
        </div>
    </footer>`;
  }
}

customElements.define("app-footer", Footer);