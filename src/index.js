
function generateFacts(event) {
    event.preventDefault();


new Typewriter("#result", {
    strings: "facts facts",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let factsFormElement = document.querySelector("#facts-generator-form");
factsFormElement.addEventListener("submit", generateFacts);