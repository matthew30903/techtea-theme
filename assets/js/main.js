const btn = document.querySelector(".btn-light-dark");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.remove("dark-theme");
}

btn.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "";
  localStorage.setItem("theme", theme);
});
