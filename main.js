let burger = document.querySelector(".burger__holder");
let body = document.querySelector("body");

function openBurger() {
	burger.classList.toggle("burger-open");
	body.classList.toggle("open-nav");
}

burger.addEventListener("click", openBurger);
