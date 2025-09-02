// Set current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date
const lastModParagraph = document.getElementById("lastModified");
lastModParagraph.textContent = `Last modified: ${document.lastModified}`;
