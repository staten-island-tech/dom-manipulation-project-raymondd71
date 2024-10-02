const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big black box"),
  points: document.querySelectorAll(".point"), //node list
};

function backgroundAndText(background, text) {
  background.style.backroundColor = "red";
  text.textContent = "This is now a bigger red box";
  text.styke.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
