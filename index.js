const DOMSelectors = {
  button: document.querySelector("#btn"),
  subject: document.querySelector("#subject"),
  note: document.querySelector("#note"),
  date: document.querySelector("#date"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
};

id = 1;
function addCard() {
  const subjects = DOMSelectors.subject.value;
  const dates = DOMSelectors.date.value;
  const notes = DOMSelectors.note.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class= "card" id="card-${id}"> <p>${subjects} ${dates} ${notes} </p> <button id="remove-${id}">Remove</button> </div>`
  );
  removeCard(id);
  id += 1;
}

function clear() {
  DOMSelectors.subject.value = "";
  DOMSelectors.date.value = "";
  DOMSelectors.note.value = "";
}

function removeCard(id) {
  const remove = document.querySelector(`#remove-${id}`);
  remove.addEventListener("click", function () {
    const card = document.querySelector(`#card-${id}`);
    card.remove();
  });
}

function end() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addCard();
    clear();
  });
}
end();
