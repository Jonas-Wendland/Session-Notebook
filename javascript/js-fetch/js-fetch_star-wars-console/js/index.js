console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[2].eye_color);
}
// async function fetchData2() {
//   const response = await fetch("https://swapi.dev/api/people/3/");
//   const data = await response.json();
//   console.log(data.eye_color);
// }
fetchData();
// fetchData2();
