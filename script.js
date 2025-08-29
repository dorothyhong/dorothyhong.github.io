// Mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modal handlers (attach after DOM is ready)
document.addEventListener("DOMContentLoaded", () => {
  // Open matching modal for each project button
  document.querySelectorAll(".project-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modal;      // e.g., "modal2"
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
        // focus trap start
        const closeBtn = modal.querySelector(".close");
        if (closeBtn) closeBtn.focus();
      } else {
        // No matching modal in the DOM — avoid JS errors
        console.warn(`No modal found with id #${modalId}`);
      }
    });
  });

  // Close when clicking X
  document.querySelectorAll(".modal .close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      if (modal) modal.style.display = "none";
    });
  });

  // Close when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach((m) => (m.style.display = "none"));
    }
  });
});
