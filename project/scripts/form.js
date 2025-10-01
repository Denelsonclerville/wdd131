const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

const lastModPara = document.getElementById('lastModified');
if (lastModPara) {
  lastModPara.textContent = `Last Modified: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    "SuperWidget 3000",
    "MegaGadget Pro",
    "UltraTool X",
    "SmartDevice Mini",
    "EcoGear Plus"
  ];
  const select = document.getElementById("product");
  if (select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product;
      option.textContent = product;
      select.appendChild(option);
    });
  }
});
