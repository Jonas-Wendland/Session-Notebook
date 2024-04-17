console.clear;
const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

function generateEmail() {
  newEmail = "www." + newUser.firstName + "." + newUser.lastName + "@inet.com";
  console.log(newEmail);
}

generateEmail();
