// Fetch Bible Verse (placeholder for Bible Gateway API)
document.addEventListener("DOMContentLoaded", () => {
  const verseBox = document.getElementById("bibleVerse");
  fetch("https://bible-api.com/john+3:16")
    .then(response => response.json())
    .then(data => {
      verseBox.textContent = `"${data.text.trim()}" — ${data.reference}`;
    })
    .catch(() => {
      verseBox.textContent = '"He who dwells in the secret place of the Most High..." — Psalm 91:1';
    });
});
