const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

const lastModPara = document.getElementById('lastModified');
if (lastModPara) {
  lastModPara.textContent = `Last Modified: ${document.lastModified}`;
}
