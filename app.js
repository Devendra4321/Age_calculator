let dateInp = document.querySelector("#date");
let btn = document.querySelector("button");
let result = document.querySelector("p");

dateInp.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", () => {
  if (dateInp.value === "") {
    result.innerHTML = "Please enter a valid Date!";
  } else {
    let birthDate = new Date(dateInp.value);
    let birthYear = birthDate.getFullYear();
    let currYear = new Date().getFullYear();
    let age = currYear - birthYear;
    result.innerHTML = `Your age is <span> ${age} </span>`;
  }
});

dateInp.addEventListener("click", () => {
  result.innerHTML = "";
});
