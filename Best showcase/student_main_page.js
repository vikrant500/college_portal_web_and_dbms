const changePage = document.getElementById("change");

function showRegistration() {
  changePage.addEventListener("click", () => {
    window.location.href = "registration.html";
  });
}
