const DOMSelectors = {
  container: document.querySelector(".container"),
};

DOMSelectors.container.insertAdjacentHTML("beforeend,", "<p>Hello World</p>");
