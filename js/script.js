"use strict";

const formEl = document.querySelector(".form_start");

formEl.addEventListener("click", (event) => {
    const userPass = document.querySelector("#pswrd").value;
    const userPassSecond = document.querySelector("#pswrd_retype").value;
  
    if (userPass == "") {
      document.getElementById("pswrd").style = "border: 1px solid red";
      document.getElementById("pswrd_retype").style = "border: 1px solid red";
    } else if (userPass != userPassSecond) {
      document.getElementById("pswrd").style = "border: 1px solid red";
      document.getElementById("pswrd_retype").style = "border: 1px solid red";
      return false;
    } else if (userPass == userPassSecond) {
      document.getElementById("pswrd").style = "border: 1px solid green";
      document.getElementById("pswrd_retype").style = "border: 1px solid green";
    }
    return true;
});


// rating

const starsEl = document.querySelectorAll(".fa-solid");

starsEl.forEach((star, index1) => {
  star.addEventListener("click", () => {
    starsEl.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});