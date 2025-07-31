document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/assets/json/knownnames.json");
    const knownNames = await response.json();

    document.querySelectorAll('.github-author').forEach(img => {
      const name = img.getAttribute('data-author');
      
      if (!name) return;

      const userData = knownNames[name];

      const username = userData?.username || name;

      img.src = `https://github.com/${username}.png`;
    });
  } catch (error) {
    console.error("Failed to load known names JSON:", error);
  }
});
