// filtered.js
// Temple card creation and other functions migrated from filtered-temples.js

function createTempleCard(temple) {
  const card = document.createElement('section');
  let name = document.createElement('h3');
  let location = document.createElement('p');
  let dedication = document.createElement('p');
  let area = document.createElement('p');
  let img = document.createElement('img');

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} Temple`);
  img.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  return card;
}

// Example: filter temples by year
function filterTemplesByYear(temples, year, before = true) {
  return temples.filter(t => {
    const match = t.dedicated.match(/(\d{4})/);
    const templeYear = match ? parseInt(match[1]) : NaN;
    return before ? templeYear < year : templeYear > year;
  });
}

// Example: filter temples by area
function filterTemplesByArea(temples, min, max) {
  return temples.filter(t => t.area > min && t.area < max);
}

// Export functions if using modules
// export { createTempleCard, filterTemplesByYear, filterTemplesByArea };