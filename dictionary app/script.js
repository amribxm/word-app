async function getRandomWord() {
  const response = await fetch('words.json');
  const words = await response.json();

  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];

  document.getElementById("word").textContent = word.word;
  document.getElementById("definition").textContent = word.definition;
}
