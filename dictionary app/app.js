const words = [
  { word: "abandon", definition: "to leave something behind" },
  { word: "упорство", definition: "настойчивость в достижении цели" },
  { word: "bright", definition: "shining strongly" },
  { word: "судьба", definition: "то, что случается в жизни" }
];

const wordEl = document.getElementById("word");
const definitionEl = document.getElementById("definition");
const wordBtn = document.getElementById("wordBtn");
const allowBtn = document.getElementById("allowBtn");

function showRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selected = words[randomIndex];

  wordEl.textContent = selected.word;
  definitionEl.textContent = selected.definition;

  if (Notification.permission === "granted") {
    new Notification("Word of the day", {
      body: `${selected.word} — ${selected.definition}`
    });
  }
}

allowBtn.addEventListener("click", async () => {
  if ("Notification" in window) {
    const permission = await Notification.requestPermission();
    alert(permission === "granted" ? "Уведомления разрешены" : "Уведомления запрещены");
  } else {
    alert("Этот браузер не поддерживает уведомления");
  }
});

wordBtn.addEventListener("click", showRandomWord);
