const products = [
  { name: 'Haitian Coffee', price: 'Haitian Gourde 500', image: 'https://example.com/images/coffee.jpg' },
  { name: 'Djon Djon', price: 'Haitian Gourde 300', image: 'https://example.com/images/djon_djon.jpg' },
  { name: 'Pistache Griye', price: 'Haitian Gourde 200', image: 'https://example.com/images/pistache.jpg' },
  { name: 'Argile', price: 'Haitian Gourde 150', image: 'https://example.com/images/argile.jpg' },
  { name: 'Haitian Chocolate', price: 'Haitian Gourde 400', image: 'https://example.com/images/chocolate.jpg' },
  { name: 'Hot Sauce', price: 'Haitian Gourde 250', image: 'https://example.com/images/hot_sauce.jpg' },
  { name: 'Peanut Butter', price: 'Haitian Gourde 350', image: 'https://example.com/images/peanut_butter.jpg' },
  { name: 'Tea', price: 'Haitian Gourde 200', image: 'https://example.com/images/tea.jpg' },
  { name: 'Castor Oil', price: 'Haitian Gourde 500', image: 'https://example.com/images/castor_oil.jpg' },
  { name: 'Spices', price: 'Haitian Gourde 150', image: '' },
  { name: 'Jam', price: 'Haitian Gourde 300', image: 'https://example.com/images/jam.jpg' },
  { name: 'Soup Mix', price: 'Haitian Gourde 400', image: 'https://example.com/images/soup_mix.jpg' }
];

const gallery = document.querySelector('.gallery');

// Create the See More button if it doesn't exist
let seeMoreBtn = document.getElementById('see-more-btn');
if (!seeMoreBtn) {
  seeMoreBtn = document.createElement('button');
  seeMoreBtn.id = 'see-more-btn';
  seeMoreBtn.textContent = 'See More →';
  seeMoreBtn.style.display = 'none';
  seeMoreBtn.className = 'see-more-btn';
  gallery.parentElement.appendChild(seeMoreBtn);
}

let currentIndex = 0;
const PRODUCTS_PER_PAGE = 4;

function displayProducts() {
  gallery.innerHTML = '';
  const endIndex = Math.min(currentIndex + PRODUCTS_PER_PAGE, products.length);
  for (let i = 0; i < endIndex; i++) {
    const product = products[i];
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="cart-btn">Add to Cart</button>
    `;
    gallery.appendChild(productCard);
  }
  // Show or hide the button
  if (endIndex < products.length) {
    seeMoreBtn.style.display = 'block';
  } else {
    seeMoreBtn.style.display = 'none';
  }
}

seeMoreBtn.addEventListener('click', () => {
  currentIndex += PRODUCTS_PER_PAGE;
  displayProducts();
});

displayProducts();
