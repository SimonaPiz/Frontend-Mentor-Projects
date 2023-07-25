//Add interactive menu for mobile
let menu = document.getElementById('menu');
let darkBack = document.getElementById("dark-background");
let butCloseMenu = document.getElementById("closeMenu");
let butBurgerMenu = document.getElementById("burger-menu");

const openMenu = () => {
  darkBack.style.display = "block";
  menu.style.left = 0;
}

butBurgerMenu.addEventListener('click', openMenu);

const closeMenu = () => {
  menu.style.left = '-250px';
  darkBack.style.display = "none";
}

darkBack.addEventListener("click", closeMenu);
butCloseMenu.addEventListener("click", closeMenu);

//Add hover state for cart button
let cart = document.getElementById("cart");

cart.addEventListener("mouseenter", () => {
  cart.children[0].style.display = 'none';
  cart.children[1].style.display = 'inline-block';
});

cart.addEventListener('mouseleave', () => {
  cart.children[1].style.display = 'none';
  cart.children[0].style.display = 'inline-block';
})

// Open lightbox when clicking on large img
let box = document.getElementById("lightbox");
let bigImg = document.getElementById("img-big");
let btnCloseLightbox = document.getElementById("btn-close-lightbox");

const openLightbox = () => {
  darkBack.style.display = "block";
  box.style.display = 'flex';
}

const closeLightbox = () => {
  darkBack.style.display = "none";
  box.style.display = 'none';
}

bigImg.addEventListener('click', openLightbox);
darkBack.addEventListener("click", closeLightbox);
btnCloseLightbox.addEventListener("click", closeLightbox);

btnCloseLightbox.addEventListener("mouseenter", () => {
  btnCloseLightbox.children[0].style.display = 'none';
  btnCloseLightbox.children[1].style.display = 'inline-block';
});
btnCloseLightbox.addEventListener("mouseleave", () => {
  btnCloseLightbox.children[0].style.display = 'inline-block';
  btnCloseLightbox.children[1].style.display = 'none';
});
