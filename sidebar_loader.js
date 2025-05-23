
document.addEventListener("DOMContentLoaded", () => {
  fetch("sidebar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;
    })
    .catch(error => {
      console.error("Sidebar laden mislukt:", error);
    });
});
