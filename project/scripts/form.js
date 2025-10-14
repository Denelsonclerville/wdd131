// Example product array
const products = [
  { id: 'p1', name: 'Product One' },
  { id: 'p2', name: 'Product Two' },
  { id: 'p3', name: 'Product Three' }
];

document.addEventListener('DOMContentLoaded', () => {
  // --- Populate the product select ---
  const productSelect = document.getElementById('product');
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // --- Review counter ---
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount) : 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);

  const countDisplay = document.getElementById('review-count');
  if (countDisplay) {
    countDisplay.textContent = `Reviews completed: ${reviewCount}`;
  }

  // --- Current year ---
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Last modified date ---
  const lastModPara = document.getElementById('lastModified');
  if (lastModPara) {
    lastModPara.textContent = `Last Modified: ${document.lastModified}`;
  }
});
