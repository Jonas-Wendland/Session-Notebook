console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkmode = document.querySelector('[data-js="dark-mode-button"]');
const lightmode = document.querySelector('[data-js="light-mode-button"]');
const togglemode = document.querySelector('[data-js="toggle-button"]');

darkmode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
lightmode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
togglemode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
