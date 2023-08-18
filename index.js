const btn = document.querySelector(".hamburger-btn");
const shortcut = document.querySelector(".shortcut");

btn.addEventListener("click", function () {
    shortcut.classList.toggle("active");
});
