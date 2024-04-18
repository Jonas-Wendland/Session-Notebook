console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword == SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Acces Denied");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 100;

if (numberOfHotdogs < 5) {
  console.log("The price is: " + numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("The price is: " + numberOfHotdogs * 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("The price is: " + numberOfHotdogs * 1);
} else if (numberOfHotdogs >= 1000000) {
  console.log("The price is: " + numberOfHotdogs * 0.5);
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn .." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Aleksandar";

let greeting = "Hello " + userName + "!";

if (userName === "Aleksandar") {
  greeting = "Hello Coach";
}

console.log(greeting);
