console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  if (new Date().getHours() >= 6 && new Date().getHours() <= 12) {
    return "Good Morning";
  } else if (new Date().getHours() >= 13 && new Date().getHours() <= 18) {
    return "Good Afternoon";
  } else if (new Date().getHours() >= 19 && new Date().getHours() <= 22) {
    return "Good Evening";
  } else if (new Date().getHours() >= 6 && new Date().getHours() <= 12) {
    return "Good Night";
  }
}

function getDayColor() {
  const weekday = new Date().getDay();
  console.log(weekday);
  if (weekday === 1) {
    return "darkgray";
  } else if (weekday === 2) {
    return "lightblue";
  } else if (weekday === 3) {
    return "white";
  } else if (weekday === 4) {
    return "green";
  } else if (weekday === 5) {
    return "red";
  } else if (weekday === 6) {
    return "hotpink";
  } else if (weekday === 7) {
    return "yellow";
  }
}
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
