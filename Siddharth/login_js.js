/*const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function Stud(){
var email = document.getElementById("Email").value;
var pass = document.getElementById("Password").value;

if(email == "student@muj.manipal.edu" && pass == "password"){alert("login successful");
    window.location = "student.html"; //href = "https://youtube.com";  //
}else{
    alert("Invalid input. Please try again");
}
}
function Prof(){
var emails = document.getElementById("Emails").value;
var passes = document.getElementById("Passwords").value;
if(emails == "professor@muj.manipal.edu" && passes == "passwords"){
    window.location.assign("professor.html");
}else{
    alert("Invalid input. Please try again");
}
}
*/
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Add event listener to the form for submission
document.querySelector(".Student form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve email and password values from the form fields
    var email = document.getElementById("Email").value;
    var pass = document.getElementById("Password").value;

    if (email === "student@muj.manipal.edu" && pass === "password") {
      window.location.href = "students.html"; // Redirect to student.html
    } else {
      alert("Invalid input. Please try again");
    }
  });

// Add event listener to the form for submission
document
  .querySelector(".Professor form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve email and password values from the form fields
    var emails = document.getElementById("Emails").value;
    var passes = document.getElementById("Passwords").value;

    if (emails === "professor@muj.manipal.edu" && passes === "passwords") {
      window.location.href = "Prof.html"; // Redirect to professor.html
    } else {
      alert("Invalid input. Please try again");
    }
  });