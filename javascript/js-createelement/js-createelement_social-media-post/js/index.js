console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const footer = document.createElement("footer");
const span = document.createElement("span");
const button = document.createElement("button");

article.classList.add("post");
p.classList.add("post__content");
footer.classList.add("post__footer");
span.classList.add("post__username");
span.textContent = "@username";
button.classList.add("post__button");
button.textContent = "♥ Like";
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");

document.body.append(article);
article.append(p);
article.append(footer);
article.append(span);
article.append(button);
