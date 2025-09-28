document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const logo = document.getElementById('logo');
  const year = document.getElementById('currentyear');
  const lastMod = document.getElementById('lastModified');
  const gallery = document.querySelector('.gallery');

  const temples = [ 
    { templeName: "Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Ghana", location: "Accra, Ghana", dedicated: "2004, January, 11", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" }, 
    { templeName: "Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" }, 
    { templeName: "Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" }, 
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" }, 
    { templeName: "Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" }, 
    { templeName: "Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" }, 
    { templeName: "Salt Lake City", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" }, 
    { templeName: "France", location: "Le Chesnay, France", dedicated: "2017, May, 21", area: 44000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg" }, 
    { templeName: "Japan", location: "Tokyo, Japan", dedicated: "1980, October, 27", area: 52500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg" }, 
    { templeName: "Haiti", location: "Port-au-Prince, Haiti", dedicated: "2019, September, 1", area: 10396, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6222-main.jpg" }, 
    { templeName: "Benin", location: "Cotonou, Benin", dedicated: "2015, September, 6", area: 30700, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg" }, 
    { templeName: "Kenya", location: "Nairobi, Kenya", dedicated: "2025, may, 18", area: 19870, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg" }, 
    { templeName: "Brazil", location: "Belém, Brazil", dedicated: "2022, November, 20", area: 28675, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg" }, 
    { templeName: "Philippines", location: "Urdaneta, Philippines", dedicated: "2024, April, 28", area: 25000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874-main.jpg" } 
  ];

  if (year) year.textContent = new Date().getFullYear();
  if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;

  const getDedicatedYear = dateStr => {
    const match = dateStr.match(/\d{4}/);
    return match ? Number(match[0]) : NaN;
  };

  const createTempleCard = temple => {
    const card = document.createElement('figure');
    card.className = 'temple-card';

    card.innerHTML = `
      <div class="temple-info-container">
        <div class="temple-title">${temple.templeName.trim()}</div>
        <div class="temple-info">
          <span class="label">Location:</span> <span class="value">${temple.location}</span><br>
          <span class="label">Dedicated:</span> <span class="value">${temple.dedicated || 'TBD'}</span><br>
          <span class="label">Size:</span> <span class="value">${temple.area ? temple.area.toLocaleString() + ' sq ft' : 'TBD'}</span>
        </div>
      </div>
      <img 
        src="${temple.imageUrl.trim()}" 
        alt="${temple.templeName.trim()}" 
        loading="lazy" 
        class="temple-img" 
        width="400" height="250"
      />
    `;
    return card;
  };

  const renderTemples = filteredTemples => {
    if (!gallery) return;
    gallery.innerHTML = '';

    // Use DocumentFragment for better performance when appending multiple nodes
    const fragment = document.createDocumentFragment();
    filteredTemples.forEach(temple => {
      fragment.appendChild(createTempleCard(temple));
    });
    gallery.appendChild(fragment);
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.textContent = isOpen ? '✖' : '☰';
    menuToggle.setAttribute('aria-expanded', isOpen);
    logo.style.opacity = isOpen ? '0' : '1';
    logo.style.pointerEvents = isOpen ? 'none' : 'auto';
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', toggleMenu);

    document.addEventListener('click', e => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== menuToggle) {
        toggleMenu();
      }
    });

    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const text = e.target.textContent.trim();
        if (logo) logo.textContent = text;

        let filtered = temples;
        switch(text) {
          case 'Old':
            filtered = temples.filter(t => getDedicatedYear(t.dedicated) < 1900);
            break;
          case 'New':
            filtered = temples.filter(t => getDedicatedYear(t.dedicated) > 2000);
            break;
          case 'Large':
            filtered = temples.filter(t => t.area > 90000);
            break;
          case 'Small':
            filtered = temples.filter(t => t.area > 0 && t.area < 10000);
            break;
        }

        renderTemples(filtered);

        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
  }

  // Rande tanp yo lè browser a ociye
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => renderTemples(temples));
  } else {
    setTimeout(() => renderTemples(temples), 200);
  }
});
