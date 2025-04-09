const year = document.querySelector("#currentYear");
const today = new Date()
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Updated: ${document.lastModified}`
