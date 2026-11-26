let link = document.getElementById("theme");
let btn = document.getElementById("themeChanger");

btn.addEventListener('click', () => {
    link.href = link.href.includes("light.css") ? "css/dark.css" : "css/light.css";
    window.localStorage.setItem("theme", link.href);
})

document.addEventListener('DOMContentLoaded', () => {
    link.href = window.localStorage.getItem("theme") || "css/light.css";
})