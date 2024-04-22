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

// Get all open buttons
const openButtons = document.querySelectorAll(".open-button");

// Loop through each open button and attach click event listener
openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the associated modal for the clicked button
    const modal = button.nextElementSibling;
    // Open the modal
    modal.showModal();
  });
});

// Get all close buttons
const closeButtons = document.querySelectorAll(".close-button");

// Loop through each close button and attach click event listener
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the associated modal for the clicked button
    const modal = button.parentElement;
    // Close the modal
    modal.close();
  });
});

// Get all register buttons
const registerButtons = document.querySelectorAll(".register-button");

// Loop through each register button and attach click event listener
registerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Your registration logic goes here
    alert("Registration done!");
    // Close the modal
    const modal = button.parentElement;
    modal.close();
  });
});
