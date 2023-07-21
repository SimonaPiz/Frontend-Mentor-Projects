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

//Add hover state for cart button
let cart = document.getElementById("cart");

cart.onmouseover = () => {
  cart.children[0].style.display = 'none';
  cart.children[1].style.display = 'inline-block';
}

cart.onmouseleave = () => {
  cart.children[1].style.display = 'none';
  cart.children[0].style.display = 'inline-block';
}