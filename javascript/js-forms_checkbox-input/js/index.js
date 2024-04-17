console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
hideTosError();
tosCheckbox.addEventListener("input", (event) => {
  console.log(event.target.checked);
  if (event.target.checked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});

console.log(form.tos.checked);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  showTosError();
  if (tosCheckbox.checked == false) {
    return;
  }
  // --^-- write your code here --^--

  //eslint-disable-next-line no-alert
  alert("Form submitted");
});
