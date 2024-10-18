const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelectorAll("#btn"),
  items: document.querySelector("li"),
  cardHeader: document.querySelector(".card-header"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const names = document.querySelector("#namee");
  const dates = document.querySelector("#datee");
  const notes = document.querySelector("#notee");
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2>${names}, ${dates}, ${notes}</h2></div>`
  );
});
// const liItem = DOMSelectors.items;
// const item = Array.form(liItem);
// item.forEach((el) => (el.style.color = "red"));

// //DOMSelectors.button.addEventListener("click", function (event) {
// //console.log(event.target.parentElement);
// //event.target.parentElement.style.backgroundColor = "red";
// //});

// DOMSelectors.form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   DOMSelectors.button.style.backgroundColor = "white";
//   setTimeout(function () {
//     DOMSelectors.button.style.backgroundColor = "lightgrey";
//   }, 50);
//   const iValue = document.querySelector("#input");

//   DOMSelectors.container.insertAdjacentHTML(
//     "beforeheand",
//     `<div class ="card"><h2 class="card-header">${iValue.value}</h2></div>`
//   );
// });
