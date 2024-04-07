const container = document.getElementById('container');
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
    window.location.href = "https://youtube.com";  //assign('student.html');
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