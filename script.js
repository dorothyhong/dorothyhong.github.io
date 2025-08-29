// Mobile menu toggle (matches your current CSS which expects .hamburger-menu.open)
function toggleMenu() {
  const wrapper = document.querySelector(".hamburger-menu");
  if (!wrapper) return;
  wrapper.classList.toggle("open");
}

// Attach modal handlers when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // OPEN
  document.querySelectorAll(".project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;         // e.g., "modal4"
      const modal = document.getElementById(modalId);
      if (!modal) return console.warn(`No modal found: #${modalId}`);
      modal.classList.add("open");               // <-- use class, not display
      const closeBtn = modal.querySelector(".close");
      if (closeBtn) closeBtn.focus();
    });
  });

  // CLOSE (click X)
  document.querySelectorAll(".modal .close").forEach((x) => {
    x.addEventListener("click", () => {
      const modal = x.closest(".modal");
      if (modal) modal.classList.remove("open");
    });
  });

  // CLOSE (click overlay)
  window.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("modal")) {
      e.target.classList.remove("open");
    }
  });

  // CLOSE (Esc)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.open").forEach((m) => m.classList.remove("open"));
    }
  });
});
