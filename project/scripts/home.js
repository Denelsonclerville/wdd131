
    // Product array with id and name
    const products = [
      { id: 1, name: "Product A" },
      { id: 2, name: "Product B" },
      { id: 3, name: "Product C" },
      { id: 4, name: "Product D" }
    ];

    // Reference to the select element
    const productSelect = document.getElementById("product");

    // Populate the select element with options
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id; // id as value
      option.textContent = product.name;
      productSelect.appendChild(option);
    });

    // localStorage to track number of reviews
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
      reviewCount = 0;
    } else {
      reviewCount = parseInt(reviewCount);
    }

    const form = document.getElementById('reviewForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default submission for demo

      // Increment review count
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);

      // Show confirmation
      form.style.display = 'none';
      confirmation.style.display = 'block';
    });

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();