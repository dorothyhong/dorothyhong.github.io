function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.querySelectorAll('.project-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    var modalId = this.dataset.modal; // Get corresponding modal id
    document.getElementById(modalId).style.display = 'block'; // Display the matched modal
  });
});

document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modal = this.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});