//Add interactive menu for mobile
let menu = document.getElementById('menu');
let darkBack = document.getElementById("dark-background");


const openMenu = () => {
  darkBack.style.display = "block";
  menu.style.left = 0;
}

const closeMenu = () => {
  menu.style.left = '-250px';
  darkBack.style.display = "none";
}