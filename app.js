const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.render("Hello World!");
});
app.listen(5050);

const lightTheme = document.querySelector("main");
const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  lightTheme.classList.toggle("dark-mode");
});
