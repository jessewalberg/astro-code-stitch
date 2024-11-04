document.addEventListener("DOMContentLoaded", () => {
  // helper functions to toggle dark mode
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    window.localStorage.setItem("theme", "dark");
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    window.localStorage.setItem("theme", "light");
  }

  // determines a new users dark mode preferences
  function detectColorScheme() {
    // default to the light theme
    let theme = "light";

    try {
      // check localStorage for a saved 'theme' variable
      if (window.localStorage.getItem("theme")) {
        theme = window.localStorage.getItem("theme");
      }
      // check for browser dark mode preference
      else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }

      // apply theme
      theme === "dark" ? enableDarkMode() : disableDarkMode();
    } catch (e) {
      console.warn("Dark mode detection failed:", e);
    }
  }

  // run initial detection
  detectColorScheme();

  // add event listener to the dark mode button toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      try {
        window.localStorage.getItem("theme") === "light" ? enableDarkMode() : disableDarkMode();
      } catch (e) {
        console.warn("Dark mode toggle failed:", e);
      }
    });
  }
});
