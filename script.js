const lightTheme = document.querySelector("main");
const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  lightTheme.classList.toggle("dark-mode");
});
