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
let btnNextPre = document.getElementById("next-pre-box");

const openLightbox = () => {
  if (window.screen.width > 670) {
    darkBack.style.display = "block";
    box.style.display = 'flex';
    btnNextPre.style.display = 'flex';
  }
}

const closeLightbox = () => {
  darkBack.style.display = "none";
  box.style.display = 'none';
  btnNextPre.style.display = 'none';
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

// Add hover state for next-pre buttons
let pre = document.getElementById("butt-pre-box");
let next = document.getElementById("butt-next-box");

pre.addEventListener('mouseenter', () => {
  pre.children[0].style.display = 'none';
  pre.children[1].style.display = 'inline-block';
});

pre.addEventListener('mouseleave', () => {
  pre.children[1].style.display = 'none';
  pre.children[0].style.display = 'inline-block';
})

next.addEventListener('mouseenter', () => {
  next.children[0].style.display = 'none';
  next.children[1].style.display = 'inline-block';
});

next.addEventListener('mouseleave', () => {
  next.children[1].style.display = 'none';
  next.children[0].style.display = 'inline-block';
})

// Add click event on next-pre buttons
// I haven't images for this features...
