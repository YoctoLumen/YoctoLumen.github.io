// ===========================
// SIDEBAR TOGGLE (mobile)
// ===========================
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('show');
    sidebarToggle.setAttribute('aria-expanded', isOpen.toString());
  });

  // Fermer sidebar en cliquant en dehors
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 &&
        !sidebar.contains(e.target) &&
        !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('show');
      sidebarToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===========================
// LIEN ACTIF AUTOMATIQUE
// ===========================
document.querySelectorAll('.sidebar-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});
