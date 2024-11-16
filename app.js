let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeButton.innerText = "Light theme";
  } else {
    themeButton.innerText = "Dark theme";
  }
}

let signUpButton = document.querySelector(".signUpButton");
signUpButton.addEventListener("click", signUp);

function signUp() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  alert("Thanks " + name + ", Talk soon!");
}
