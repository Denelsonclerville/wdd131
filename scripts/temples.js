document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const logo = document.getElementById('logo');

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    if (isOpen) {
      menuToggle.textContent = '✖'; 
      menuToggle.setAttribute('aria-expanded', 'true');
      logo.style.opacity = '0'; 
      logo.style.pointerEvents = 'none';
    } else {
      menuToggle.textContent = '☰'; 
      menuToggle.setAttribute('aria-expanded', 'false');
      logo.style.opacity = '1';
      logo.style.pointerEvents = 'auto';
    }
  });

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
