import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import App from "./components/App/App.js";
import { cards } from "./lib/Data.js";
import { handleFormSubmit } from "./utils/Helpers.js";


export default function Bookmark(props) {
  const bookmark = document.createElement("button");
  bookmark.classList.add("bookmark");

  if (props.active) {
    bookmark.classList.add("bookmark--active");
  }

  bookmark.type = "button";
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.innerHTML = /* html */ `
          <svg
              class="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
          >
              <path
                  d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
          </svg>
      `;

  bookmark.addEventListener("click", props.onClick);

  return bookmark;
}
