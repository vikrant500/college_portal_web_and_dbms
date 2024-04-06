const HandleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = (e) => HandleOnMouseMove(e);
}

// document.getElementById("card_container").onmousemove = (e) => {
//   for (const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// };

const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const registerModal = document.querySelector(".register-button");

openModal.addEventListener("click", () => {
  modal.show();
});


registerModal.addEventListener("click", () => {
  alert("Registration done!");
  modal.close();
});

closeModal.addEventListener("click", () => {
  modal.close();
});