// Mobile menu toggle
function toggleMenu() {
  const wrapper = document.querySelector(".hamburger-menu");
  if (wrapper) wrapper.classList.toggle("open");
}

// Attach modal handlers when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // OPEN any modal tied to a .project-btn
  document.querySelectorAll(".project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal; // e.g., "modal4"
      const modal = document.getElementById(modalId);
      if (!modal) {
        console.warn(`No modal found for #${modalId}`);
        return;
      }
      modal.classList.add("open");
      const closeBtn = modal.querySelector(".close");
      if (closeBtn) closeBtn.focus();
    });
  });

  // CLOSE (click X)
  document.querySelectorAll(".modal .close").forEach((x) => {
    x.addEventListener("click", (e) => {
      const modal = x.closest(".modal");
      if (modal) modal.classList.remove("open");
      e.stopPropagation();
    });
  });

  // CLOSE (click overlay)
  document.querySelectorAll(".modal").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  });

  // CLOSE (Esc)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.open").forEach((m) => m.classList.remove("open"));
    }
  });
});
