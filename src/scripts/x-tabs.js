class XTabs extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", this.onClick);
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.onClick);
    console.log("Custom element removed from page.");
  }

  onClick(e) {
    const img = this.querySelector("img");
    const clickedEl = e.target.closest("li");

    if (!clickedEl) return;

    for (const el of this.querySelectorAll("li")) {
      el.classList.remove("active");
    }

    clickedEl.classList.add("active");
    img.src = clickedEl.dataset.qr;
  }
}

customElements.define("x-tabs", XTabs);
