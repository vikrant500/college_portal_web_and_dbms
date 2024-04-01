const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var email = document.getElementById("Email").value;
var pass = document.getElementById("Password").value;

if(email == "student@muj.manipal.edu" && pass == "password"){
    window.href = 'student.html';
}else{
    alert("Invalid input. Please try again");
}