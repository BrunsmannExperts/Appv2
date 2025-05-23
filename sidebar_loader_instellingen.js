
document.addEventListener("DOMContentLoaded", () => {
  fetch("sidebar_instellingen.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;
    })
    .catch(error => {
      console.error("Instellingen-sidebar laden mislukt:", error);
    });
});
