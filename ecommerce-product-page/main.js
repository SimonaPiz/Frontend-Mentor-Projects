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

let mainImg = document.getElementById('main-img');
let mainImgBox = document.getElementById('main-img-lightbox');

const openLightbox = () => {
  if (window.screen.width > 670) {
    darkBack.style.display = "block";
    box.style.display = 'flex';

    let src = mainImg.getAttribute('src');
    mainImgBox.setAttribute('src', src);
    
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
let preBox = document.getElementById("butt-pre-box");
let nextBox = document.getElementById("butt-next-box");

preBox.addEventListener('mouseenter', () => {
  preBox.children[0].style.display = 'none';
  preBox.children[1].style.display = 'inline-block';
});

preBox.addEventListener('mouseleave', () => {
  preBox.children[1].style.display = 'none';
  preBox.children[0].style.display = 'inline-block';
})

nextBox.addEventListener('mouseenter', () => {
  nextBox.children[0].style.display = 'none';
  nextBox.children[1].style.display = 'inline-block';
});

nextBox.addEventListener('mouseleave', () => {
  nextBox.children[1].style.display = 'none';
  nextBox.children[0].style.display = 'inline-block';
})

// Add click event on next-pre buttons
let pre = document.getElementById("butt-pre");
let next = document.getElementById("butt-next");

const nextImg = (img) => {
  let src = img.getAttribute('src');
  //console.log(src);
  let num = Number(src.charAt(23));
  //console.log(num);
  src = src.replace(/\d/, num < 4 ? num +1 : 1);
  //console.log(src);

  img.setAttribute('src', src);
};

next.addEventListener('click', () => nextImg(mainImg));
nextBox.addEventListener('click', () => nextImg(mainImgBox));

const prevImg = (img) => {
  let src = img.getAttribute('src');
  //console.log(src);
  let num = Number(src.charAt(23));
  //console.log(num);
  src = src.replace(/\d/, num > 1 ? num -1 : 4);
  //console.log(src);

  img.setAttribute('src', src);
};

pre.addEventListener('click', () => prevImg(mainImg));
preBox.addEventListener('click', () => prevImg(mainImgBox));
