const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelectorAll(".btn"),
  items: document.querySelector("li"),
  cardHeader: document.querySelector(".card-header"),
  from: document.querySelector(".form"),
};

const liItem = DOMSelectors.items;
const item = Array.from(liItem);
item.forEach((el) => (el.style.color = "red"));

//DOMSelectors.button.addEventListener("click", function (event) {
//console.log(event.target.parentElement);
//event.target.parentElement.style.backgroundColor = "red";
//});

DOMSelectors.from.addEventListener("submit", function (event) {
  event.preventDefault();
  DOMSelectors.button.style.backgroundColor = "white";
  setTimeout(function () {
    DOMSelectors.button.styke.backgroundColor = "lightgrey";
  }, 50);
  let iValue = document.querySelector("#input");
  console.log(iValue.value);
});
