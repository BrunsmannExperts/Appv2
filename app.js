document.addEventListener("DOMContentLoaded", () => {
  const theme = JSON.parse(localStorage.getItem("theme")) || DEFAULT_THEME;
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(`--${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`, value);
  }
});
