
function displayFacts(response) {
  console.log(response.data.answer);

  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 75,
  });
}

function showFacts(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let apiKey = "135f02bffcta720ff4c241394b466o99"; // Ensure this is your actual API key
  let prompt = `User instructions: Generate a fact about ${instructionsInput}`;
  let context = "You are a factchecker expert and love to research facts and educate others about facts. Your mission is to generate a fact and describe it in maximum 4 lines. Make sure you follow the user instructions. Begin and end with a emoticon";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating facts");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  let resultElement = document.querySelector("#result");
  resultElement.innerHTML = "Alright!";

  axios.get(apiUrl).then(displayFacts);
}

let factsForm = document.querySelector("#facts-generator-form");
factsForm.addEventListener("submit", showFacts);