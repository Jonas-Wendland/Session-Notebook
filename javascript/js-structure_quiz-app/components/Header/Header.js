import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import App from "./components/App/App.js";
import { cards } from "./lib/Data.js";
import { handleFormSubmit } from "./utils/Helpers.js";




export default function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = /* html */ `
        <h1 class="header__title">Quiz-App</h1>
      `;

  return header;
}
