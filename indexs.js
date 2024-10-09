const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelectorAll(".btn"),
  items: document.querySelector("li"),
  cardHeader: document.querySelector(".card-header"),
  from: document.querySelector(".form"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});

DOMSelectors.from.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

const item = document.querySelectorAll("li");
const items = Array.from(item);
items.forEach((el) => (el.style.color = "red"));
