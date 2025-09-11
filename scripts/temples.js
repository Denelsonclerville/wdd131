document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const logo = document.getElementById('logo');

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    // Swiv si meni louvri
    if (isOpen) {
      menuToggle.textContent = '✖'; // Chanje ikon
      menuToggle.setAttribute('aria-expanded', 'true');
      logo.style.opacity = '0';     // Fè logo a disparèt (men li toujou la)
      logo.style.pointerEvents = 'none'; // Pa pran klik
    } else {
      menuToggle.textContent = '☰'; // Retounen ikon
      menuToggle.setAttribute('aria-expanded', 'false');
      logo.style.opacity = '1';     // Retounen logo a
      logo.style.pointerEvents = 'auto';
    }
  });

  // Footer info
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
